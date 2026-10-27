// ANKAR ATELIER - Main Interactive Logic
  // Đổi màu nhanh ngay trên thẻ sản phẩm
  window.changeCardColor = function(cardId, src, dotEl) {
    const card = document.querySelector(`.sofa-product-card[data-id="${cardId}"]`);
    if (!card) return;
    const img = card.querySelector('.card-image-wrap img');
    if (img) {
      img.style.opacity = '0.5';
      setTimeout(() => {
        img.src = src;
        img.style.opacity = '1';
      }, 70);
    }
    if (dotEl && dotEl.parentElement) {
      dotEl.parentElement.querySelectorAll('span').forEach(s => {
        s.style.borderColor = '#ffffff';
        s.style.transform = 'scale(1)';
      });
      dotEl.style.borderColor = 'var(--accent-orange)';
      dotEl.style.transform = 'scale(1.25)';
    }
  };

document.addEventListener("DOMContentLoaded", function () {
  // Đọc danh mục từ URL (#sofa-don, #sofa-chu-l, ?cat=...) hoặc mặc định mở Sofa đơn
  let activeCategory = "sofa-don"; 

  const urlParams = new URLSearchParams(window.location.search);
  const paramCat = urlParams.get("cat") || urlParams.get("category");
  const rawHash = window.location.hash ? window.location.hash.replace("#", "").trim() : "";
  
  if (typeof CATEGORIES_DATA !== "undefined") {
    const validCatIds = CATEGORIES_DATA.map(c => c.id);
    if (validCatIds.includes(rawHash)) {
      activeCategory = rawHash;
    } else if (validCatIds.includes(paramCat)) {
      activeCategory = paramCat;
    }
  }

  const ZALO_PRIMARY = "0985451396";
  const ZALO_SECONDARY = "0784991888";

  // 1. Khởi tạo thanh 6 danh mục
  const categoryBarContainer = document.getElementById("ankarCategoryBar");
  const productsContainer = document.getElementById("productsGridContainer");
  const summaryStrip = document.getElementById("categorySummaryStrip");

  function renderCategoryBar() {
    if (!categoryBarContainer) return;
    categoryBarContainer.innerHTML = CATEGORIES_DATA.map(cat => {
      const isActive = cat.id === activeCategory ? "active" : "";
      return `
        <div class="ankar-category-item ${isActive}" data-cat-id="${cat.id}">
          <div class="cat-icon-box">
            ${cat.iconSvg}
          </div>
          <div class="cat-label">
            <span class="label-desktop">${cat.name}</span>
            <span class="label-mobile">${cat.shortName}</span>
          </div>
        </div>
      `;
    }).join("");

    // Gắn sự kiện click cho từng tab danh mục
    categoryBarContainer.querySelectorAll(".ankar-category-item").forEach(item => {
      item.addEventListener("click", function () {
        const catId = this.getAttribute("data-cat-id");
        if (catId === activeCategory) return;
        
        activeCategory = catId;
        if (window.history && window.history.replaceState) {
          window.history.replaceState(null, null, "#" + catId);
        }
        
        categoryBarContainer.querySelectorAll(".ankar-category-item").forEach(el => el.classList.remove("active"));
        this.classList.add("active");

        updateCategorySummary(catId);
        renderProducts(catId);
      });
    });
  }

  function updateCategorySummary(catId) {
    if (!summaryStrip) return;
    const cat = CATEGORIES_DATA.find(c => c.id === catId);
    if (!cat) return;

    summaryStrip.innerHTML = `
      <div class="summary-title">
        <span style="color: var(--accent-orange); font-weight: bold;">// [ ${cat.shortName} ]</span>
        <span>${cat.name}</span>
      </div>
      <div class="summary-desc">${cat.description}</div>
    `;
  }

  function renderProducts(catId) {
    if (!productsContainer) return;

    const filtered = (catId === "all") 
      ? SOFA_DATABASE 
      : SOFA_DATABASE.filter(item => item.category === catId);

    if (filtered.length === 0) {
      productsContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: #fff; border-radius: 8px; border: 1px dashed var(--border-light);">
          <p style="font-family: var(--font-mono); color: var(--text-muted);">// KHÔNG TÌM THẤY SẢN PHẨM TRONG MỤC NÀY</p>
        </div>
      `;
      return;
    }

    productsContainer.innerHTML = filtered.map(item => {
      return `
        <div class="sofa-product-card" data-id="${item.id}" data-material="${item.material}" onclick="location.href='product-detail.html?id=${item.id}'" title="Nhấn để xem chi tiết ${item.name}">
          <div class="card-image-wrap">
            <span class="card-badge-top">${item.badge}</span>
            <div class="card-quick-actions">
              <button class="btn-icon-circle quick-view-btn" data-id="${item.id}" title="Xem thông số kỹ thuật nhanh">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              </button>
            </div>
            <img src="${item.image}" alt="${item.name}" loading="lazy" id="cardImg-${item.id}">
            ${item.gallery && item.gallery.length > 1 ? `
              <div class="card-color-dots" style="position: absolute; bottom: 8px; left: 0; right: 0; display: flex; justify-content: center; gap: 6px; z-index: 2;" onclick="event.stopPropagation();">
                ${(item.colors && item.colors.length === item.gallery.length) ? item.colors.map((c, i) => `
                  <span onclick="event.stopPropagation(); changeCardColor('${item.id}', '${item.gallery[i]}', this)" style="width: 11px; height: 11px; border-radius: 50%; background: ${c.hex}; border: 1.5px solid ${i === 0 ? 'var(--accent-orange)' : '#ffffff'}; box-shadow: 0 1px 4px rgba(0,0,0,0.35); cursor: pointer; display: inline-block; transition: all 0.15s;" title="Chọn màu: ${c.name}"></span>
                `).join('') : item.gallery.map((g, i) => `
                  <span onclick="event.stopPropagation(); changeCardColor('${item.id}', '${g}', this)" style="width: 8px; height: 8px; border-radius: 50%; background: ${i === 0 ? 'var(--accent-orange)' : 'rgba(255,255,255,0.7)'}; border: 1px solid rgba(0,0,0,0.2); cursor: pointer; display: inline-block;" title="Ảnh ${i+1}"></span>
                `).join('')}
              </div>
            ` : ''}
          </div>

          <div class="card-body">
            <div class="card-meta-line">
              <span>MÃ: ${item.code}</span>
              <span>MAY ĐO TẠI XƯỞNG</span>
            </div>

            <h3 class="card-title">${item.name}</h3>

            <div class="card-footer-line">
              <a href="https://zalo.me/${ZALO_PRIMARY}" target="_blank" rel="noopener noreferrer" class="btn-zalo-cta" onclick="event.stopPropagation();" style="width: 100%; padding: 11px 12px; font-size: 13.5px; font-weight: 700; display: flex; align-items: center; justify-content: center; gap: 6px; border-radius: 6px;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.03 2 11c0 2.87 1.5 5.43 3.86 7.03L5 22l4.31-1.44C10.15 20.81 11.06 21 12 21c5.52 0 10-4.03 10-9s-4.48-9-10-9zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z"/></svg>
                Tư Vấn Ngay
              </a>
            </div>
          </div>
        </div>
      `;
    }).join("");

    // Bind Quick View buttons
    productsContainer.querySelectorAll(".quick-view-btn").forEach(btn => {
      btn.addEventListener("click", function(e) {
        e.stopPropagation();
        const pId = this.getAttribute("data-id");
        window.location.href = 'product-detail.html?id=' + pId;
      });
    });
  }

  // 2. Modal Quick View
  const modalOverlay = document.getElementById("productModalOverlay");
  const modalCloseBtn = document.getElementById("modalCloseBtn");
  const modalContentPane = document.getElementById("modalContentPane");

  let modalGalleryList = [];
  let modalCurrentIdx = 0;

  window.setModalMainImage = function(idx) {
    if (!modalGalleryList.length) return;
    modalCurrentIdx = (idx + modalGalleryList.length) % modalGalleryList.length;
    const img = document.getElementById("modalMainImg");
    if (img) {
      img.style.opacity = "0.5";
      setTimeout(() => {
        img.src = modalGalleryList[modalCurrentIdx];
        img.style.opacity = "1";
      }, 80);
    }
    document.querySelectorAll(".modal-thumb-item").forEach((thumb, i) => {
      if (i === modalCurrentIdx) {
        thumb.style.borderColor = "var(--accent-orange)";
        thumb.style.boxShadow = "0 0 0 2px rgba(194,84,32,0.25)";
      } else {
        thumb.style.borderColor = "var(--border-light)";
        thumb.style.boxShadow = "none";
      }
    });
    const badge = document.getElementById("modalGalleryBadge");
    if (badge) badge.innerText = `${modalCurrentIdx + 1} / ${modalGalleryList.length}`;
  };

  function openQuickViewModal(productId) {
    const p = SOFA_DATABASE.find(item => item.id === productId);
    if (!p || !modalOverlay) return;

    modalGalleryList = (p.gallery && p.gallery.length) ? p.gallery : [p.image];
    modalCurrentIdx = 0;

    modalContentPane.innerHTML = `
      <div class="modal-gallery-pane" style="position: relative;">
        <div style="position: relative; overflow: hidden; border-radius: 8px; background: #f8fafc; height: 360px; display: flex; align-items: center; justify-content: center;" id="modalImgContainer">
          <img id="modalMainImg" src="${modalGalleryList[0]}" alt="${p.name}" style="width: 100%; height: 100%; object-fit: contain; cursor: pointer; transition: opacity 0.2s ease;" title="Bấm hoặc vuốt để xem màu khác">
          ${modalGalleryList.length > 1 ? `
            <div id="modalGalleryBadge" style="position: absolute; bottom: 10px; right: 10px; background: rgba(15,23,42,0.72); color: #fff; font-family: var(--font-mono); font-size: 11px; font-weight: 700; padding: 3px 9px; border-radius: 12px; pointer-events: none;">
              1 / ${modalGalleryList.length}
            </div>
            <button type="button" onclick="event.stopPropagation(); window.setModalMainImage(modalCurrentIdx - 1)" style="position: absolute; left: 8px; top: 50%; transform: translateY(-50%); width: 32px; height: 32px; border-radius: 50%; background: rgba(255,255,255,0.9); border: 1px solid var(--border-light); cursor: pointer; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">&#10094;</button>
            <button type="button" onclick="event.stopPropagation(); window.setModalMainImage(modalCurrentIdx + 1)" style="position: absolute; right: 8px; top: 50%; transform: translateY(-50%); width: 32px; height: 32px; border-radius: 50%; background: rgba(255,255,255,0.9); border: 1px solid var(--border-light); cursor: pointer; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">&#10095;</button>
          ` : ''}
        </div>
        ${modalGalleryList.length > 1 ? `
          <div style="display: flex; gap: 8px; margin-top: 12px;">
            ${modalGalleryList.map((imgUrl, idx) => `
              <img src="${imgUrl}" class="modal-thumb-item" style="width: 64px; height: 50px; object-fit: contain; background: #f8fafc; border-radius: 4px; cursor: pointer; border: 2px solid ${idx === 0 ? 'var(--accent-orange)' : 'var(--border-light)'}; transition: all 0.2s ease;" onclick="window.setModalMainImage(${idx})">
            `).join("")}
          </div>
        ` : ''}
      </div>
      <div class="modal-details-pane">
        <div style="font-family: var(--font-mono); font-size: 12px; color: var(--accent-orange); font-weight: 700; margin-bottom: 6px;">// MÃ SẢN PHẨM: ${p.code}</div>
        <h2 style="font-size: 24px; color: var(--text-main); font-weight: 700; margin-bottom: 14px;">${p.name}</h2>

        <div style="display: flex; flex-direction: column; gap: 8px; font-size: 13px; margin-bottom: 24px;">
          <div><strong>• Kích thước:</strong> ${p.dimensions}</div>
          <div><strong>• Kết cấu khung:</strong> ${p.frame}</div>
          <div><strong>• Hệ đệm mút:</strong> ${p.cushion}</div>
          <div><strong>• Chất liệu bọc:</strong> ${p.material}</div>
        </div>

        <div style="display: flex; gap: 10px; margin-top: auto;">
          <a href="https://zalo.me/${ZALO_PRIMARY}" target="_blank" rel="noopener noreferrer" class="btn-zalo-cta" style="flex: 1; text-align: center; padding: 14px; font-size: 15px; font-weight: 700; display: flex; align-items: center; justify-content: center; gap: 8px;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.03 2 11c0 2.87 1.5 5.43 3.86 7.03L5 22l4.31-1.44C10.15 20.81 11.06 21 12 21c5.52 0 10-4.03 10-9s-4.48-9-10-9zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z"/>
            </svg>
            Tư Vấn Ngay
          </a>
          <a href="product-detail.html?id=${p.id}" class="btn-ankar-secondary" style="padding: 14px 18px; font-size: 13px; text-align: center;">
            Chi Tiết →
          </a>
        </div>
      </div>
    `;

    // Touch swipe on modal image
    const container = document.getElementById("modalImgContainer");
    if (container && modalGalleryList.length > 1) {
      let mTouchStartX = 0;
      let mTouchEndX = 0;
      container.addEventListener("touchstart", e => {
        mTouchStartX = e.changedTouches[0].screenX;
      }, { passive: true });
      container.addEventListener("touchend", e => {
        mTouchEndX = e.changedTouches[0].screenX;
        const diff = mTouchStartX - mTouchEndX;
        if (Math.abs(diff) > 40) {
          if (diff > 0) window.setModalMainImage(modalCurrentIdx + 1);
          else window.setModalMainImage(modalCurrentIdx - 1);
        }
      }, { passive: true });
      container.addEventListener("click", () => {
        window.setModalMainImage(modalCurrentIdx + 1);
      });
    }

    modalOverlay.classList.add("open");
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", () => modalOverlay.classList.remove("open"));
  }
  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) modalOverlay.classList.remove("open");
    });
  }

  // Khởi chạy
  renderCategoryBar();
  updateCategorySummary(activeCategory);
  renderProducts(activeCategory);

  // Floating Contact Corner Toggle (Thu gọn / Mở rộng cục nổi)
  const fabCorner = document.getElementById("floatingContactCorner");
  const fabToggle = document.getElementById("fabToggleBtn");
  if (fabCorner && fabToggle) {
    fabToggle.addEventListener("click", () => {
      const isCollapsed = fabCorner.classList.toggle("is-collapsed");
      fabToggle.textContent = isCollapsed ? "+" : "–";
      fabToggle.setAttribute("title", isCollapsed ? "Mở rộng số điện thoại" : "Thu gọn");
    });
  }

  // Xử lý dấu thoát ra ngoài trang (Exit / Back)
  window.handlePageExit = function (e) {
    if (e && e.preventDefault) e.preventDefault();
    if (window.history && window.history.length > 1 && document.referrer && document.referrer.includes(window.location.host)) {
      window.history.back();
    } else {
      window.location.href = "index.html#sofa-don";
    }
  };

  // ==========================================================================
  // 3D COVERFLOW SLIDER (Khối Tiêu Chuẩn Sản Xuất 3D)
  // ==========================================================================
  const cfStage = document.getElementById("coverflowStage");
  const cfTrack = document.getElementById("coverflowTrack");
  const cfCards = Array.from(document.querySelectorAll(".coverflow-card"));
  const cfDots = Array.from(document.querySelectorAll(".cf-dot"));
  const cfPrevBtn = document.getElementById("coverflowPrevBtn");
  const cfNextBtn = document.getElementById("coverflowNextBtn");
  const cfMobilePrevBtn = document.getElementById("coverflowMobilePrev");
  const cfMobileNextBtn = document.getElementById("coverflowMobileNext");

  if (cfStage && cfTrack && cfCards.length > 0) {
    let activeIndex = 0;
    const totalCards = cfCards.length;

    function updateCoverflow() {
      const isMobile = window.innerWidth <= 768;
      const stepX = isMobile ? 140 : 255;
      const stepZ = isMobile ? 120 : 180;
      const rotY = isMobile ? 32 : 40;

      cfCards.forEach((card, index) => {
        let diff = index - activeIndex;

        if (diff === 0) {
          card.style.transform = "translateX(0px) translateZ(0px) rotateY(0deg) scale(1)";
          card.style.zIndex = "10";
          card.style.opacity = "1";
          card.style.filter = "none";
          card.classList.add("active-center");
        } else if (diff === 1) {
          card.style.transform = `translateX(${stepX}px) translateZ(-${stepZ}px) rotateY(-${rotY}deg) scale(0.85)`;
          card.style.zIndex = "7";
          card.style.opacity = "0.78";
          card.style.filter = "brightness(0.92)";
          card.classList.remove("active-center");
        } else if (diff === -1) {
          card.style.transform = `translateX(-${stepX}px) translateZ(-${stepZ}px) rotateY(${rotY}deg) scale(0.85)`;
          card.style.zIndex = "7";
          card.style.opacity = "0.78";
          card.style.filter = "brightness(0.92)";
          card.classList.remove("active-center");
        } else if (diff > 1) {
          const farStepX = stepX * 1.65;
          const farStepZ = stepZ * 1.8;
          card.style.transform = `translateX(${farStepX}px) translateZ(-${farStepZ}px) rotateY(-${rotY + 8}deg) scale(0.72)`;
          card.style.zIndex = "4";
          card.style.opacity = "0.45";
          card.style.filter = "brightness(0.8)";
          card.classList.remove("active-center");
        } else if (diff < -1) {
          const farStepX = stepX * 1.65;
          const farStepZ = stepZ * 1.8;
          card.style.transform = `translateX(-${farStepX}px) translateZ(-${farStepZ}px) rotateY(${rotY + 8}deg) scale(0.72)`;
          card.style.zIndex = "4";
          card.style.opacity = "0.45";
          card.style.filter = "brightness(0.8)";
          card.classList.remove("active-center");
        }
      });

      cfDots.forEach((dot, index) => {
        dot.classList.toggle("active", index === activeIndex);
      });
    }

    function goToIndex(idx) {
      if (idx < 0) idx = 0;
      if (idx >= totalCards) idx = totalCards - 1;
      activeIndex = idx;
      updateCoverflow();
    }

    function nextSlide() {
      if (activeIndex < totalCards - 1) {
        goToIndex(activeIndex + 1);
      } else {
        goToIndex(0);
      }
    }

    function prevSlide() {
      if (activeIndex > 0) {
        goToIndex(activeIndex - 1);
      } else {
        goToIndex(totalCards - 1);
      }
    }

    cfCards.forEach((card, index) => {
      card.addEventListener("click", () => {
        if (activeIndex !== index) {
          goToIndex(index);
        }
      });
    });

    if (cfPrevBtn) cfPrevBtn.addEventListener("click", prevSlide);
    if (cfNextBtn) cfNextBtn.addEventListener("click", nextSlide);
    if (cfMobilePrevBtn) cfMobilePrevBtn.addEventListener("click", prevSlide);
    if (cfMobileNextBtn) cfMobileNextBtn.addEventListener("click", nextSlide);

    cfDots.forEach((dot, index) => {
      dot.addEventListener("click", () => goToIndex(index));
    });

    // Touch & Swipe Support (Mobile & Tablet)
    let startX = 0;
    let endX = 0;
    let isDragging = false;

    cfStage.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
      endX = startX;
    }, { passive: true });

    cfStage.addEventListener("touchmove", (e) => {
      endX = e.touches[0].clientX;
    }, { passive: true });

    cfStage.addEventListener("touchend", () => {
      const diffX = endX - startX;
      if (Math.abs(diffX) > 40) {
        if (diffX < 0) nextSlide();
        else prevSlide();
      }
    });

    // Mouse Drag Support (Desktop)
    cfStage.addEventListener("mousedown", (e) => {
      isDragging = true;
      startX = e.clientX;
      endX = startX;
    });

    window.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      endX = e.clientX;
    });

    window.addEventListener("mouseup", () => {
      if (!isDragging) return;
      isDragging = false;
      const diffX = endX - startX;
      if (Math.abs(diffX) > 45) {
        if (diffX < 0) nextSlide();
        else prevSlide();
      }
    });

    // Keyboard navigation
    window.addEventListener("keydown", (e) => {
      const rect = cfStage.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (!inView) return;
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    });

    window.addEventListener("resize", updateCoverflow);

    // Initial render
    updateCoverflow();
  }


  // ==========================================================================
  // ==========================================================================
  // 3D COVERFLOW CHO KHỐI CAM KẾT (Ảnh 1 theo kiểu Ảnh 2)
  // ==========================================================================
  const trustStage = document.getElementById("trustCoverflowStage");
  const trustTrack = document.getElementById("trustCoverflowTrack");
  const trustCards = Array.from(document.querySelectorAll(".trust-coverflow-card"));
  const trustDots = Array.from(document.querySelectorAll("#trustCoverflowDots .trust-dot"));
  const trustPrevBtn = document.getElementById("trustCoverflowPrev");
  const trustNextBtn = document.getElementById("trustCoverflowNext");

  if (trustStage && trustTrack && trustCards.length > 0) {
    let trustActiveIndex = 0;
    const totalTrustCards = trustCards.length;

    function updateTrustCoverflow() {
      const isMobile = window.innerWidth <= 768;
      const stepX = isMobile ? 135 : 240;
      const stepZ = isMobile ? 120 : 170;
      const rotY = isMobile ? 32 : 38;

      trustCards.forEach((card, index) => {
        let diff = index - trustActiveIndex;

        if (diff === 0) {
          card.style.transform = "translateX(0px) translateZ(0px) rotateY(0deg) scale(1)";
          card.style.zIndex = "10";
          card.style.opacity = "1";
          card.style.filter = "none";
          card.classList.add("active-center");
        } else if (diff === 1) {
          card.style.transform = `translateX(${stepX}px) translateZ(-${stepZ}px) rotateY(-${rotY}deg) scale(0.85)`;
          card.style.zIndex = "7";
          card.style.opacity = "0.75";
          card.style.filter = "brightness(0.9)";
          card.classList.remove("active-center");
        } else if (diff === -1) {
          card.style.transform = `translateX(-${stepX}px) translateZ(-${stepZ}px) rotateY(${rotY}deg) scale(0.85)`;
          card.style.zIndex = "7";
          card.style.opacity = "0.75";
          card.style.filter = "brightness(0.9)";
          card.classList.remove("active-center");
        } else if (diff > 1) {
          const farStepX = stepX * 1.65;
          const farStepZ = stepZ * 1.8;
          card.style.transform = `translateX(${farStepX}px) translateZ(-${farStepZ}px) rotateY(-${rotY + 8}deg) scale(0.72)`;
          card.style.zIndex = "4";
          card.style.opacity = "0.4";
          card.style.filter = "brightness(0.75)";
          card.classList.remove("active-center");
        } else if (diff < -1) {
          const farStepX = stepX * 1.65;
          const farStepZ = stepZ * 1.8;
          card.style.transform = `translateX(-${farStepX}px) translateZ(-${farStepZ}px) rotateY(${rotY + 8}deg) scale(0.72)`;
          card.style.zIndex = "4";
          card.style.opacity = "0.4";
          card.style.filter = "brightness(0.75)";
          card.classList.remove("active-center");
        }
      });

      trustDots.forEach((dot, index) => {
        dot.classList.toggle("active", index === trustActiveIndex);
      });
    }

    function goToTrustIndex(idx) {
      if (idx < 0) idx = 0;
      if (idx >= totalTrustCards) idx = totalTrustCards - 1;
      trustActiveIndex = idx;
      updateTrustCoverflow();
    }

    function nextTrustSlide() {
      if (trustActiveIndex < totalTrustCards - 1) {
        goToTrustIndex(trustActiveIndex + 1);
      } else {
        goToTrustIndex(0);
      }
    }

    function prevTrustSlide() {
      if (trustActiveIndex > 0) {
        goToTrustIndex(trustActiveIndex - 1);
      } else {
        goToTrustIndex(totalTrustCards - 1);
      }
    }

    trustCards.forEach((card, index) => {
      card.addEventListener("click", () => {
        if (trustActiveIndex !== index) {
          goToTrustIndex(index);
        }
      });
    });

    if (trustPrevBtn) trustPrevBtn.addEventListener("click", prevTrustSlide);
    if (trustNextBtn) trustNextBtn.addEventListener("click", nextTrustSlide);

    trustDots.forEach((dot, index) => {
      dot.addEventListener("click", () => goToTrustIndex(index));
    });

    // Touch & Swipe Support
    let tStartX = 0;
    let tEndX = 0;

    trustStage.addEventListener("touchstart", (e) => {
      tStartX = e.touches[0].clientX;
      tEndX = tStartX;
    }, { passive: true });

    trustStage.addEventListener("touchmove", (e) => {
      tEndX = e.touches[0].clientX;
    }, { passive: true });

    trustStage.addEventListener("touchend", () => {
      const diffX = tEndX - tStartX;
      if (Math.abs(diffX) > 40) {
        if (diffX < 0) nextTrustSlide();
        else prevTrustSlide();
      }
    });

    // Mouse Drag Support
    let tIsDragging = false;
    trustStage.addEventListener("mousedown", (e) => {
      tIsDragging = true;
      tStartX = e.clientX;
      tEndX = tStartX;
    });

    window.addEventListener("mousemove", (e) => {
      if (!tIsDragging) return;
      tEndX = e.clientX;
    });

    window.addEventListener("mouseup", () => {
      if (!tIsDragging) return;
      tIsDragging = false;
      const diffX = tEndX - tStartX;
      if (Math.abs(diffX) > 45) {
        if (diffX < 0) nextTrustSlide();
        else prevTrustSlide();
      }
    });

    window.addEventListener("resize", updateTrustCoverflow);

    updateTrustCoverflow();
  }

  // ==========================================
  // KHÔNG GIAN SỐNG THỰC TẾ (CASES CAROUSEL CHO MOBILE - PHƯƠNG ÁN 1)
  // ==========================================
  const casesSlider = document.getElementById("casesSlider");
  const casesNavPrev = document.getElementById("casesNavPrev");
  const casesNavNext = document.getElementById("casesNavNext");
  const casesDots = document.querySelectorAll(".cases-dot");

  if (casesSlider) {
    let isTicking = false;

    function getActiveCaseIndex() {
      const cards = casesSlider.querySelectorAll(".case-card");
      if (!cards.length) return 0;
      
      const sliderRect = casesSlider.getBoundingClientRect();
      const sliderCenter = sliderRect.left + sliderRect.width / 2;
      
      let closestIndex = 0;
      let minDistance = Infinity;
      
      cards.forEach((card, index) => {
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.left + cardRect.width / 2;
        const distance = Math.abs(cardCenter - sliderCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });
      return closestIndex;
    }

    function syncCasesDots() {
      const activeIdx = getActiveCaseIndex();
      casesDots.forEach((dot, idx) => {
        if (idx === activeIdx) {
          dot.classList.add("active");
        } else {
          dot.classList.remove("active");
        }
      });
      isTicking = false;
    }

    casesSlider.addEventListener("scroll", () => {
      if (!isTicking) {
        window.requestAnimationFrame(syncCasesDots);
        isTicking = true;
      }
    }, { passive: true });

    function scrollToCaseIndex(idx) {
      const cards = casesSlider.querySelectorAll(".case-card");
      if (cards[idx]) {
        cards[idx].scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center"
        });
      }
    }

    casesDots.forEach(dot => {
      dot.addEventListener("click", () => {
        const idx = parseInt(dot.getAttribute("data-index") || "0", 10);
        scrollToCaseIndex(idx);
      });
    });

    if (casesNavPrev) {
      casesNavPrev.addEventListener("click", () => {
        const currentIdx = getActiveCaseIndex();
        const targetIdx = Math.max(0, currentIdx - 1);
        scrollToCaseIndex(targetIdx);
      });
    }

    if (casesNavNext) {
      casesNavNext.addEventListener("click", () => {
        const cards = casesSlider.querySelectorAll(".case-card");
        const currentIdx = getActiveCaseIndex();
        const targetIdx = Math.min(cards.length - 1, currentIdx + 1);
        scrollToCaseIndex(targetIdx);
      });
    }
  }

});
