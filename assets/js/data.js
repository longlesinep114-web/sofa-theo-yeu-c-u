// Database sản phẩm Sofa & Nội thất - XƯỞNG SẢN XUẤT 🇻🇳 SOFA ✅
const SOFA_DATABASE = [
  // 1. Sofa chữ L (Sofa góc) - 5 MẪU THỰC TẾ THEO ẢNH NGƯỜI DÙNG GỬI
  {
    id: "sofa-l-01-khay-go",
    name: "Sofa Góc Chữ L Hiện Đại Tích Hợp Bàn Trà & Khay Gỗ Óc Chó",
    code: "SOFA-L01",
    category: "sofa-chu-l",
    categoryName: "Sofa chữ L (Sofa góc)",
    subtitle: "Dáng bệt bề thế, tích hợp bàn trà góc & tab gỗ để ly tách tiện lợi",
    price: "Tư Vấn Báo Giá Tận Xưởng",
    originalPrice: "",
    dimensions: "3200 x 2200 x 780 mm (Đóng theo kích thước yêu cầu)",
    material: "Chất liệu Da hoặc Nỉ cao cấp (Bảng màu Nâu Đất Taupe, Be Sand, Ghi Xám...)",
    frame: "Gỗ: Sồi, Thông, Keo sấy khô tẩm sấy công nghệ cao chống co ngót, mối mọt",
    cushion: "Mút Việt Nam hoặc Việt Nhật (Đệm ngồi tùy chọn Có lò xo hoặc Không lò xo)",
    badge: "MẪU BÁN CHẠY",
    isFeatured: true,
    image: "assets/images/sofa-l/sofa-l-01-khay-go.jpg",
    gallery: [
      "assets/images/sofa-l/sofa-l-01-khay-go.jpg"
    ],
    colors: [
      { name: "Nâu Đất Taupe", hex: "#8c7a6b" },
      { name: "Ghi Xám Khói", hex: "#5a5a5a" },
      { name: "Be Cát Sang Trọng", hex: "#e5ded3" },
      { name: "Nâu Da Bò", hex: "#7a4a2b" }
    ],
    description: "Mẫu sofa góc chữ L dáng bệt thư giãn tích hợp 2 cụm khay bàn trà bằng gỗ óc chó cao cấp: 1 khay bàn trà góc rộng rãi và 1 tab đầu hồi tích hợp đĩa tròn để ly cafe. Khung gỗ Sồi/Thông/Keo sấy khô kiên cố, đệm mút Việt Nam hoặc Việt Nhật tùy chọn có hoặc không có lò xo theo sở thích ngồi êm hay ngồi đầm."
  },
  {
    id: "sofa-l-02-chan-kim-kim",
    name: "Sofa Góc Chữ L Múi Xếp Ly Chân Nẹp Inox Mạ Vàng",
    code: "SOFA-L02",
    category: "sofa-chu-l",
    categoryName: "Sofa chữ L (Sofa góc)",
    subtitle: "Tựa lưng & tay vịn chần múi xếp ly phong cách Ý, chân nẹp kim loại mạ PVD vàng gold",
    price: "Tư Vấn Báo Giá Tận Xưởng",
    originalPrice: "",
    dimensions: "3000 x 2000 x 760 mm (Sản xuất theo kích thước thực tế)",
    material: "Chất liệu Da hoặc Nỉ tuyết nhung cao cấp (Ghi Xám Đậm, Đen Khói, Xanh Navy, Trắng Kem...)",
    frame: "Gỗ: Sồi, Thông, Keo đã xử lý tẩm sấy công nghệ cao chống ẩm mốc cong vênh",
    cushion: "Mút Việt Nam hoặc Việt Nhật nguyên khối (Đệm ngồi có lò xo hoặc không lò xo)",
    badge: "SANG TRỌNG Ý",
    isFeatured: true,
    image: "assets/images/sofa-l/sofa-l-02-chan-kim-kim.jpg",
    gallery: [
      "assets/images/sofa-l/sofa-l-02-chan-kim-kim.jpg"
    ],
    colors: [
      { name: "Ghi Xám Đậm", hex: "#3a3d40" },
      { name: "Đen Than Huyền Bí", hex: "#1c1d21" },
      { name: "Trắng Sữa Ánh Kim", hex: "#f4f1ea" },
      { name: "Xanh Sapphire", hex: "#1a2c42" }
    ],
    description: "Đỉnh cao tạo hình phong cách sofa cao cấp Italia với toàn bộ tựa lưng và tay vịn được thợ lành nghề xếp ly chần múi thủ công tỉ mỉ. Phía dưới là dải chân đế nẹp inox mạ vàng PVD bóng loáng, nâng tầm mọi không gian phòng khách biệt thự."
  },
  {
    id: "sofa-l-03-modular-hoc-go",
    name: "Sofa Góc Chữ L Modular Múi Nổi Kèm Hộc Gỗ Khay Trà",
    code: "SOFA-L03",
    category: "sofa-chu-l",
    categoryName: "Sofa chữ L (Sofa góc)",
    subtitle: "Thiết kế module ghép linh hoạt, tay vịn múi phao bề thế tích hợp hộc tủ để đồ",
    price: "Tư Vấn Báo Giá Tận Xưởng",
    originalPrice: "",
    dimensions: "3300 x 2100 x 750 mm (Tùy biến góc trái hoặc góc phải theo mặt bằng)",
    material: "Chất liệu Da hoặc Nỉ cao cấp đan sợi dày dặn, chống xù",
    frame: "Gỗ: Sồi, Thông, Keo tự nhiên tuyển chọn, chịu tải trọng lớn",
    cushion: "Mút Việt Nam hoặc Việt Nhật đàn hồi cao (Tùy chọn đệm ngồi có lò xo hoặc không lò xo)",
    badge: "MODULE ĐA NĂNG",
    isFeatured: true,
    image: "assets/images/sofa-l/sofa-l-03-modular-hoc-go.jpg",
    gallery: [
      "assets/images/sofa-l/sofa-l-03-modular-hoc-go.jpg"
    ],
    colors: [
      { name: "Xám Charcoal", hex: "#44474b" },
      { name: "Ghi Sáng Hiện Đại", hex: "#7a8288" },
      { name: "Nâu Cà Phê", hex: "#4a3b32" }
    ],
    description: "Bộ sofa góc chữ L dáng module hiện đại sở hữu các múi nệm phao nổi bồng bềnh cực kỳ êm ái. Điểm nhấn đặc biệt là hộc tủ phụ bằng gỗ óc chó tự nhiên tích hợp khay trà, cho phép gia chủ cất gọn sách báo và đặt ly tách vô cùng tiện lợi."
  },
  {
    id: "sofa-l-04-scandinavian-chan-kim",
    name: "Sofa Góc Chữ L Bắc Âu Nordic Chân Kim Loại Thanh Mảnh",
    code: "SOFA-L04",
    category: "sofa-chu-l",
    categoryName: "Sofa chữ L (Sofa góc)",
    subtitle: "Dáng thanh thoát Bắc Âu, đệm 2 lớp êm ái, gầm cao thoáng dễ vệ sinh",
    price: "Tư Vấn Báo Giá Tận Xưởng",
    originalPrice: "",
    dimensions: "2800 x 1800 x 820 mm (Đặt làm may đo theo kích thước phòng khách)",
    material: "Chất liệu Da hoặc Nỉ kháng bụi bẩn, thoáng khí",
    frame: "Gỗ: Sồi, Thông, Keo sấy khô đạt chuẩn xuất khẩu",
    cushion: "Mút Việt Nam hoặc Việt Nhật (Đệm ngồi tùy chọn có lò xo hoặc không lò xo)",
    badge: "BẮC ÂU TINH TẾ",
    isFeatured: true,
    image: "assets/images/sofa-l/sofa-l-04-scandinavian-chan-kim.jpg",
    gallery: [
      "assets/images/sofa-l/sofa-l-04-scandinavian-chan-kim.jpg"
    ],
    colors: [
      { name: "Ghi Xám Trung Tính", hex: "#7c838d" },
      { name: "Be Trắng Tối Giản", hex: "#e7e2d8" },
      { name: "Xanh Khói", hex: "#5b6d7a" }
    ],
    description: "Mẫu sofa góc chữ L mang ngôn ngữ thiết kế Scandinavia tối giản với hệ chân kim loại cao thanh mảnh, giúp robot hút bụi dễ dàng đi qua làm sạch sàn nhà. Tựa góc vát chéo thông minh ôm trọn lưng người ngồi."
  },
  {
    id: "sofa-l-05-khung-go-tu-nhien",
    name: "Sofa Góc Chữ L Phối Viền Khung Gỗ Tự Nhiên Tinh Xảo",
    code: "SOFA-L05",
    category: "sofa-chu-l",
    categoryName: "Sofa chữ L (Sofa góc)",
    subtitle: "Khung chân gỗ sồi/thông lộ diện bo viền tay vịn ấm cúng, tựa lưng nhấn rãnh chỉ",
    price: "Tư Vấn Báo Giá Tận Xưởng",
    originalPrice: "",
    dimensions: "2900 x 1850 x 830 mm (May đo theo yêu cầu từng căn hộ)",
    material: "Chất liệu Da hoặc Nỉ nhập khẩu phối hợp gỗ sồi / thông tự nhiên",
    frame: "Gỗ: Sồi, Thông, Keo tự nhiên sấy khô, phủ sơn PU bảo vệ vân gỗ tự nhiên",
    cushion: "Mút Việt Nam hoặc Việt Nhật chống xẹp lún (Có lò xo hoặc không lò xo)",
    badge: "MỘC ẤM CÚNG",
    isFeatured: true,
    image: "assets/images/sofa-l/sofa-l-05-khung-go-tu-nhien.jpg",
    gallery: [
      "assets/images/sofa-l/sofa-l-05-khung-go-tu-nhien.jpg"
    ],
    colors: [
      { name: "Ghi Xám Đậm", hex: "#484d54" },
      { name: "Nâu Gỗ Tự Nhiên", hex: "#8d5b38" },
      { name: "Kem Ấm", hex: "#eee4d0" }
    ],
    description: "Sự kết hợp hoàn hảo giữa kỹ nghệ mộc truyền thống và sofa đệm mút hiện đại. Khung sườn gỗ sồi tự nhiên được phô diễn khéo léo bo viền quanh thân và tay vịn, tạo vẻ đẹp ấm cúng, sang trọng và trường tồn cùng thời gian."
  },

  // 2. Sofa đơn (Các mẫu sofa băng / văng may đo thực tế từ ảnh xưởng)
  {
    id: "sofa-don-01-modular-xanh-reu",
    name: "Sofa Băng Modular 3 Khối Vải Nỉ Xanh Rêu",
    code: "SOFA-D01",
    category: "sofa-don",
    categoryName: "Sofa đơn",
    subtitle: "Thiết kế khối hộp tối giản, 3 module ghép độc lập, đường viền may nổi sang trọng",
    price: "Tư Vấn Báo Giá Tận Xưởng",
    originalPrice: "",
    dimensions: "2400 x 950 x 750 mm (May đo theo kích thước yêu cầu)",
    material: "Chất liệu Da hoặc Nỉ cao cấp (Xanh Rêu Sage, Be Cát, Ghi Xám...)",
    frame: "Gỗ: Sồi, Thông, Keo sấy khô kiên cố",
    cushion: "Mút Việt Nam hoặc Việt Nhật (Đệm ngồi có lò xo hoặc không lò xo)",
    badge: "BÁN CHẠY",
    isFeatured: true,
    image: "assets/images/sofa-don/sofa-don-01-xanh-reu-modular.jpg",
    gallery: [
      "assets/images/sofa-don/sofa-don-01-xanh-reu-modular.jpg"
    ],
    colors: [
      { name: "Xanh Rêu Sage", hex: "#5b6e4e" },
      { name: "Be Cát", hex: "#d8cebe" },
      { name: "Ghi Xám", hex: "#7a8288" }
    ],
    description: "Mẫu sofa băng 3 khối dạng module khối hộp hiện đại, gân viền may nổi tinh xảo bo quanh từng đệm ngồi. Thiết kế thanh lịch, đệm ngồi êm dịu nâng đỡ hoàn hảo, dễ dàng bài trí trong các không gian phòng khách căn hộ hoặc nhà phố."
  },
  {
    id: "sofa-don-02-scandinavian-ghi-sang",
    name: "Sofa Văng Đôi Bắc Âu Scandinavian Chân Kim Loại",
    code: "SOFA-D02",
    category: "sofa-don",
    categoryName: "Sofa đơn",
    subtitle: "Dáng văng đôi Bắc Âu thanh thoát, đệm ngồi 2 lớp dày dặn, chân kim loại cao ráo thoáng sàn",
    price: "Tư Vấn Báo Giá Tận Xưởng",
    originalPrice: "",
    dimensions: "2000 x 900 x 820 mm (Gia công vừa vặn từng centimet)",
    material: "Chất liệu Da hoặc Nỉ dệt sợi thô cao cấp (Ghi Sáng, Trắng Kem, Xanh Pastel...)",
    frame: "Gỗ: Sồi, Thông, Keo sấy nhiệt đạt chuẩn",
    cushion: "Mút Việt Nam hoặc Việt Nhật (Tùy chọn có lò xo hoặc không lò xo)",
    badge: "PHÒNG NHỎ",
    isFeatured: true,
    image: "assets/images/sofa-don/sofa-don-02-bac-au-ghi-sang.jpg",
    gallery: [
      "assets/images/sofa-don/sofa-don-02-bac-au-ghi-sang.jpg"
    ],
    colors: [
      { name: "Ghi Sáng", hex: "#d9d8d5" },
      { name: "Trắng Kem", hex: "#f3ede3" },
      { name: "Hồng Pastel", hex: "#d4a5a5" }
    ],
    description: "Dáng sofa văng đôi Scandinavian nhẹ nhàng, gầm cao thanh thoát thuận tiện cho robot hút bụi lau dọn. Chất nỉ dệt thô cao cấp chống xước, đệm mút nguyên khối đàn hồi êm dịu, phù hợp lý tưởng cho các căn hộ chung cư vừa và nhỏ."
  },
  {
    id: "sofa-don-03-da-bo-y-cam-cognac",
    name: "Sofa Văng Da Bò Ý Màu Cam Cognac Hiện Đại",
    code: "SOFA-D03",
    category: "sofa-don",
    categoryName: "Sofa đơn",
    subtitle: "Phong cách chuẩn Ý, da bò nhập khẩu màu cam cognac quý phái, tay vịn ốp đệm phao thư giãn",
    price: "Tư Vấn Báo Giá Tận Xưởng",
    originalPrice: "",
    dimensions: "2600 x 950 x 800 mm (Sản xuất theo kích thước phòng khách)",
    material: "Chất liệu Da hoặc Nỉ nhập khẩu (Cam Cognac, Nâu Bò, Đen Huyền Bí...)",
    frame: "Gỗ: Sồi, Thông, Keo tự nhiên sấy lò hơi",
    cushion: "Mút Việt Nam hoặc Việt Nhật (Có lò xo hoặc không lò xo)",
    badge: "CAO CẤP",
    isFeatured: true,
    image: "assets/images/sofa-don/sofa-don-03-da-bo-y-cam-cognac.jpg",
    gallery: [
      "assets/images/sofa-don/sofa-don-03-da-bo-y-cam-cognac.jpg"
    ],
    colors: [
      { name: "Cam Cognac", hex: "#cf732b" },
      { name: "Nâu Bò", hex: "#8b4513" },
      { name: "Đen Khói", hex: "#222222" }
    ],
    description: "Đỉnh cao phong cách nội thất Ý hiện đại với lớp da bò màu cam cognac bắt sáng rực rỡ, bề mặt mềm mịn tạo cảm giác chạm êm ái. Đệm tựa lưng và tay vịn thiết kế bọc gối phao dày dặn, nâng tầm đẳng cấp không gian phòng khách sang trọng."
  },
  {
    id: "sofa-don-04-khung-vien-kim-loai",
    name: "Sofa Băng Khung Viền Bo Cong Phối Đệm Nỉ Kem",
    code: "SOFA-D04",
    category: "sofa-don",
    categoryName: "Sofa đơn",
    subtitle: "Kết cấu khung bo viền kim loại ôm trọn thân ghế, 3 đệm tựa lưng bồng bềnh, phối màu xám titan sang trọng",
    price: "Tư Vấn Báo Giá Tận Xưởng",
    originalPrice: "",
    dimensions: "2200 x 920 x 850 mm (Tùy biến theo không gian)",
    material: "Chất liệu Da hoặc Nỉ cao cấp (Be Kem, Ghi Xám, Xám Titan...)",
    frame: "Gỗ: Sồi, Thông, Keo kết hợp khung viền kim loại sơn tĩnh điện",
    cushion: "Mút Việt Nam hoặc Việt Nhật (Có lò xo hoặc không lò xo)",
    badge: "MẪU MỚI",
    isFeatured: true,
    image: "assets/images/sofa-don/sofa-don-04-khung-vien-kim-loai.jpg",
    gallery: [
      "assets/images/sofa-don/sofa-don-04-khung-vien-kim-loai.jpg"
    ],
    colors: [
      { name: "Be Kem", hex: "#e5ded3" },
      { name: "Xám Titan", hex: "#4a4e54" },
      { name: "Cam Đất", hex: "#b85c38" }
    ],
    description: "Kiến trúc sofa đương đại với khung viền bo cong kim loại xám titan ôm trọn đáy và tay ghế, tạo điểm tựa kiên cố và thẩm mỹ độc đáo. 3 đệm lưng tựa may chỉ kép tỉ mỉ, đệm ngồi nguyên khối giữ form phẳng phiu tuyệt đối sau khi đứng dậy."
  },
  {
    id: "sofa-don-05-da-caramel-vintage",
    name: "Sofa Văng Da Bò Tự Nhiên Màu Caramel Vintage",
    code: "SOFA-D05",
    category: "sofa-don",
    categoryName: "Sofa đơn",
    subtitle: "Dáng văng thẳng cổ điển vuông vức, da bò tự nhiên màu vàng bò caramel vintage, chân sắt sơn đen tối giản",
    price: "Tư Vấn Báo Giá Tận Xưởng",
    originalPrice: "",
    dimensions: "2300 x 900 x 780 mm (May đo theo mặt bằng thực tế)",
    material: "Chất liệu Da hoặc Nỉ (Vàng Bò Caramel, Nâu Đậm, Nâu Đất...)",
    frame: "Gỗ: Sồi, Thông, Keo sấy khô chống mối mọt cong vênh",
    cushion: "Mút Việt Nam hoặc Việt Nhật (Có lò xo hoặc không lò xo)",
    badge: "TINH TẾ",
    isFeatured: true,
    image: "assets/images/sofa-don/sofa-don-05-da-caramel-vintage.jpg",
    gallery: [
      "assets/images/sofa-don/sofa-don-05-da-caramel-vintage.jpg"
    ],
    colors: [
      { name: "Vàng Bò Caramel", hex: "#c47a32" },
      { name: "Nâu Đậm", hex: "#4b2d18" },
      { name: "Nâu Đất", hex: "#634735" }
    ],
    description: "Mẫu sofa văng da mang hơi thở cổ điển vintage với gam màu caramel ấm áp, các khối đệm ngồi và đệm tựa dày bản căng tràn sức sống. Khung xương mộc kiên cố phối hợp chân sắt sơn tĩnh điện tối giản, mang lại vẻ đẹp bền bỉ theo năm tháng."
  },

  {
    id: "sofa-don-06-da-y-tua-dau-thong-minh",
    name: "Sofa Văng Da Bò Ý Tựa Đầu Điều Chỉnh Thông Minh",
    code: "SOFA-D06",
    category: "sofa-don",
    categoryName: "Sofa đơn",
    subtitle: "Tựa gật gù đa nấc nâng đỡ cổ gáy, đệm da bò nhập khẩu êm ái, gầm chân kim loại thanh thoát",
    price: "Tư Vấn Báo Giá Tận Xưởng",
    originalPrice: "",
    dimensions: "2800 x 1000 x 850-1000 mm (Gia công theo kích thước yêu cầu)",
    material: "Chất liệu Da hoặc Nỉ cao cấp (Màu Kem Sữa, Ghi Xám, Nâu Bò...)",
    frame: "Gỗ: Sồi, Thông, Keo sấy lò hơi chống cong vênh",
    cushion: "Mút Việt Nam hoặc Việt Nhật (Tùy chọn có lò xo hoặc không lò xo)",
    badge: "CÔNG NGHỆ Ý",
    isFeatured: true,
    image: "assets/images/sofa-don/sofa-don-06-da-y-tua-dau-thong-minh.jpg",
    gallery: [
      "assets/images/sofa-don/sofa-don-06-da-y-tua-dau-thong-minh.jpg"
    ],
    colors: [
      { name: "Kem Sữa", hex: "#eae6df" },
      { name: "Ghi Xám", hex: "#7a8288" },
      { name: "Trắng Sứ", hex: "#f5f5f3" }
    ],
    description: "Mẫu sofa văng da cao cấp nhập khẩu mang dáng vẻ sang trọng hiện đại. Điểm nổi bật là cơ cấu tựa đầu thông minh gập ngả linh hoạt theo từng tư thế ngồi và xem tivi. Đệm ngồi rộng rãi 3-4 chỗ ngồi thoải mái cho cả gia đình."
  },
  {
    id: "sofa-don-07-hop-monolith-ghi-sang",
    name: "Sofa Băng Hộp Tối Giản Monolith Vải Nỉ Ghi Sáng",
    code: "SOFA-D07",
    category: "sofa-don",
    categoryName: "Sofa đơn",
    subtitle: "Kiến trúc khối hộp Monolith phẳng phiu, gân viền chỉ may đôi sắc nét, bọc nỉ dệt thô cao cấp",
    price: "Tư Vấn Báo Giá Tận Xưởng",
    originalPrice: "",
    dimensions: "2400 x 950 x 720 mm (May đo theo yêu cầu)",
    material: "Chất liệu Da hoặc Nỉ nhập khẩu bền màu, chống xù lông",
    frame: "Gỗ: Sồi, Thông, Keo kiên cố chịu lực",
    cushion: "Mút Việt Nam hoặc Việt Nhật nguyên khối chống lún",
    badge: "MINIMALIST",
    isFeatured: true,
    image: "assets/images/sofa-don/sofa-don-07-hop-monolith-ghi-sang.jpg",
    gallery: [
      "assets/images/sofa-don/sofa-don-07-hop-monolith-ghi-sang.jpg"
    ],
    colors: [
      { name: "Ghi Sáng", hex: "#cfd2d4" },
      { name: "Be Sand", hex: "#dcd6cd" },
      { name: "Xám Charcoal", hex: "#484d54" }
    ],
    description: "Đại diện cho phong cách thiết kế tối giản đương đại với các mảng khối vuông vức liền mạch, đường viền may gân nổi bật định hình form dáng vững chãi. Phù hợp cho không gian phòng khách hiện đại, văn phòng cao cấp hoặc studio."
  },
  {
    id: "sofa-don-08-sofa-don-1-cho-khung-go-cong-navy",
    name: "Ghế Sofa Đơn 1 Chỗ Bọc Nhung Navy Viền Khung Gỗ Bo Cong",
    code: "SOFA-D08",
    category: "sofa-don",
    categoryName: "Sofa đơn",
    subtitle: "Tuyệt tác khung gỗ sồi uốn lượn ôm trọn thân ghế, nỉ nhung sapphire xanh navy quý phái",
    price: "Tư Vấn Báo Giá Tận Xưởng",
    originalPrice: "",
    dimensions: "950 x 900 x 920 mm (Chuẩn công thái học ngả lưng thư thái)",
    material: "Chất liệu Da hoặc Nỉ nhung tuyết cao cấp (Xanh Navy, Nâu Da Bò, Rêu Rừng...)",
    frame: "Gỗ: Sồi tự nhiên uốn cong mỹ nghệ, kết hợp Gỗ Thông/Keo gia cố",
    cushion: "Mút Việt Nhật đàn hồi cao (Đệm ngồi có lò xo hoặc không lò xo)",
    badge: "NGHỆ THUẬT GỖ",
    isFeatured: true,
    image: "assets/images/sofa-don/sofa-don-08-sofa-don-1-cho-khung-go-cong-navy.jpg",
    gallery: [
      "assets/images/sofa-don/sofa-don-08-sofa-don-1-cho-khung-go-cong-navy.jpg"
    ],
    colors: [
      { name: "Xanh Navy Sapphire", hex: "#1d2a44" },
      { name: "Nâu Gỗ Sồi", hex: "#7a4a2b" },
      { name: "Đỏ Rượu Vang", hex: "#631c26" }
    ],
    description: "Sản phẩm sofa đơn 1 chỗ kết hợp đỉnh cao giữa kỹ nghệ mộc bo cong uốn lượn và nghệ thuật bọc đệm êm ái. Khung gỗ sồi lộ diện tạo điểm nhấn nghệ thuật độc bản cho góc đọc sách, phòng làm việc hoặc phòng khách sang trọng."
  },
  {
    id: "sofa-don-09-vang-doi-be-cat-kem-goi",
    name: "Sofa Văng Đôi Hiện Đại Vải Dệt Be Cát Kèm Gối Tựa",
    code: "SOFA-D09",
    category: "sofa-don",
    categoryName: "Sofa đơn",
    subtitle: "Dáng văng êm ái thanh lịch, chất vải dệt thô màu be cát ấm cúng, tặng kèm 2 gối tựa cao cấp",
    price: "Tư Vấn Báo Giá Tận Xưởng",
    originalPrice: "",
    dimensions: "2200 x 920 x 820 mm (May đo theo phòng khách căn hộ)",
    material: "Chất liệu Da hoặc Nỉ dệt sợi thoáng khí (Be Cát, Nâu Mocha, Ghi Nhạt...)",
    frame: "Gỗ: Sồi, Thông, Keo tẩm sấy tiêu chuẩn xưởng",
    cushion: "Mút Việt Nam hoặc Việt Nhật phân tán lực êm dịu",
    badge: "ẤM CÚNG",
    isFeatured: true,
    image: "assets/images/sofa-don/sofa-don-09-vang-doi-be-cat-kem-goi.jpg",
    gallery: [
      "assets/images/sofa-don/sofa-don-09-vang-doi-be-cat-kem-goi.jpg"
    ],
    colors: [
      { name: "Be Cát", hex: "#e2dcce" },
      { name: "Nâu Mocha", hex: "#705847" },
      { name: "Xám Bạc", hex: "#b5b7b9" }
    ],
    description: "Mẫu sofa băng đôi với tỷ lệ cân đối hoàn hảo, đệm ngồi 2 khối dày dặn và tựa lưng đệm mút bông êm ái. Màu be cát trung tính mang đến cảm giác thư thái, dễ phối kết với mọi phong cách sàn nhà và ánh sáng nội thất."
  },
  {
    id: "sofa-don-10-module-xanh-pastel-de-go-cong",
    name: "Sofa Văng Module Xanh Pastel Chân Đế Gỗ Bo Cong Độc Đáo",
    code: "SOFA-D10",
    category: "sofa-don",
    categoryName: "Sofa đơn",
    subtitle: "Khối băng bo góc mềm mại, phối đế gỗ tự nhiên uốn lượn xẻ rãnh tay vịn phong cách Essentia",
    price: "Tư Vấn Báo Giá Tận Xưởng",
    originalPrice: "",
    dimensions: "2400 x 960 x 760 mm (Gia công vừa vặn từng centimet)",
    material: "Chất liệu Da hoặc Nỉ cao cấp (Xanh Pastel Khói, Ghi Sáng, Cam Đất...)",
    frame: "Gỗ: Sồi, Thông, Keo kết hợp đế mộc sơn phủ bảo vệ vân gỗ",
    cushion: "Mút Việt Nam hoặc Việt Nhật (Tùy chọn có hoặc không lò xo)",
    badge: "THIẾT KẾ MỚI",
    isFeatured: true,
    image: "assets/images/sofa-don/sofa-don-10-module-xanh-pastel-de-go-cong.jpg",
    gallery: [
      "assets/images/sofa-don/sofa-don-10-module-xanh-pastel-de-go-cong.jpg"
    ],
    colors: [
      { name: "Xanh Pastel Khói", hex: "#7d94a8" },
      { name: "Nâu Gỗ Óc Chó", hex: "#3e271a" },
      { name: "Ghi Nhạt", hex: "#d0d4d8" }
    ],
    description: "Thiết kế đột phá với hệ chân đế gỗ tự nhiên bo cong viền quanh đáy, xẻ rãnh cách điệu tại hai bên tay vịn. Đệm mút khối dày êm tạo cảm giác ngồi thư giãn tối đa, mang lại vẻ đẹp đậm chất nghệ thuật châu Âu đương đại."
  },

  {
    id: "sofa-don-11-tron-tub-bo-cong-xanh-reu",
    name: "Ghế Sofa Đơn Tròn Tub Bo Cong Phối Màu Xanh Rêu & Be Sữa",
    code: "SOFA-D11",
    category: "sofa-don",
    categoryName: "Sofa đơn",
    subtitle: "Tạo hình cánh cung ôm trọn cơ thể, phối 2 tone xanh rêu & be sang trọng, kèm 2 gối tựa họa tiết quả trám",
    price: "Tư Vấn Báo Giá Tận Xưởng",
    originalPrice: "",
    dimensions: "920 x 880 x 800 mm (Đặt làm theo kích thước không gian)",
    material: "Chất liệu Da hoặc Nỉ cao cấp đan dệt dày dặn (Xanh Rêu, Be Sữa, Nâu Đất...)",
    frame: "Gỗ: Sồi, Thông, Keo sấy khô kiên cố, chân kim loại sơn tĩnh điện",
    cushion: "Mút Việt Nam hoặc Việt Nhật (Đệm ngồi có lò xo hoặc không lò xo)",
    badge: "THIẾT KẾ Ý",
    isFeatured: true,
    image: "assets/images/sofa-don/sofa-don-11-tron-tub-bo-cong-xanh-reu.jpg",
    gallery: [
      "assets/images/sofa-don/sofa-don-11-tron-tub-bo-cong-xanh-reu.jpg"
    ],
    colors: [
      { name: "Xanh Rêu Sage", hex: "#5b6e4e" },
      { name: "Be Sữa", hex: "#e7e0d3" },
      { name: "Nâu Đất", hex: "#634735" }
    ],
    description: "Ghế sofa đơn phong cách Tub Chair thời thượng với tựa lưng bo cong ôm trọn người ngồi, phối màu tương phản tinh tế giữa nỉ xanh rêu và đệm be sữa. Tặng kèm 2 gối tựa dệt họa tiết hình học sang trọng, chân đế kim loại thanh mảnh kiên cố."
  },
  {
    id: "sofa-don-12-bac-au-tua-ranh-soc-tay-go",
    name: "Ghế Sofa Đơn Bắc Âu Tựa Rãnh Sọc Viền Tay Gỗ Tự Nhiên",
    code: "SOFA-D12",
    category: "sofa-don",
    categoryName: "Sofa đơn",
    subtitle: "Tựa lưng may chần rãnh sọc dọc tinh xảo, ốp viền tay và chân gỗ sồi tự nhiên bo cong mịn màng",
    price: "Tư Vấn Báo Giá Tận Xưởng",
    originalPrice: "",
    dimensions: "880 x 850 x 880 mm (Chuẩn công thái học ngả lưng thư thái)",
    material: "Chất liệu Da hoặc Nỉ thô cao cấp (Ghi Xám Đậm, Xanh Denim, Vàng Bò...)",
    frame: "Gỗ: Sồi, Thông, Keo kết hợp tay vịn & chân tiện gỗ sồi tự nhiên sơn PU",
    cushion: "Mút Việt Nam hoặc Việt Nhật đàn hồi cao (Có lò xo hoặc không lò xo)",
    badge: "BẮC ÂU CỔ ĐIỂN",
    isFeatured: true,
    image: "assets/images/sofa-don/sofa-don-12-bac-au-tua-ranh-soc-tay-go.jpg",
    gallery: [
      "assets/images/sofa-don/sofa-don-12-bac-au-tua-ranh-soc-tay-go.jpg"
    ],
    colors: [
      { name: "Ghi Xám Denim", hex: "#3e4854" },
      { name: "Nâu Gỗ Sồi Tự Nhiên", hex: "#9b673c" },
      { name: "Xanh Khói", hex: "#5b6d7a" }
    ],
    description: "Sự kết hợp tinh tế giữa nghệ thuật bọc nỉ chần rãnh sọc dọc ôm trọn sống lưng và chi tiết tay vịn gỗ sồi uốn lượn ấm cúng. Thiết kế Bắc Âu thanh lịch, thích hợp làm ghế thư giãn đọc sách, ghế tiếp khách phòng giám đốc hoặc điểm nhấn phòng ngủ master."
  },

  // 3. Các mẫu ghế thư giãn
  
  // --- BỘ SƯU TẬP GHẾ NẰM THƯ GIÃN CHAISE LOUNGE & CÔNG THÁI HỌC (5 MẪU MỚI TẬN XƯỞNG) ---
  {
    id: "ghe-thu-gian-luon-song-cong-thai-hoc",
    name: "Ghế Nằm Thư Giãn Dáng Lượn Sóng Công Thái Học",
    code: "SOFA-TG01",
    category: "cac-mau-ghe-thu-gian",
    categoryName: "Các mẫu ghế thư giãn",
    subtitle: "Dáng uốn lượn ôm sát đường cong cơ thể, nâng đỡ cột sống tối ưu",
    price: "Tư Vấn Báo Giá Tận Xưởng",
    originalPrice: "",
    dimensions: "1550 x 890 x 650 mm (Dài 155cm x Rộng 89cm x Cao 65cm)",
    material: "Chất liệu Da hoặc Nỉ nhung cao cấp (May đo theo yêu cầu)",
    frame: "Khung Gỗ: Sồi, Thông, Keo định hình chịu lực cao",
    cushion: "Mút Việt Nhật nguyên khối định hình đàn hồi chống lún xẹp",
    badge: "CÔNG THÁI HỌC",
    isFeatured: true,
    image: "assets/images/ghe-thu-gian-luon-song-tim.jpg",
    gallery: [
      "assets/images/ghe-thu-gian-luon-song-tim.jpg"
    ],
    colors: [
      { name: "Tím Nhung", hex: "#4c2882" },
      { name: "Nâu Da Bò", hex: "#78350f" },
      { name: "Ghi Xám", hex: "#64748b" }
    ],
    description: "Dáng ghế uốn lượn công thái học đột phá, kích thước 155 x 89 x 65 cm. Nâng đỡ trọn vẹn từ đốt sống cổ, cột sống lưng đến bắp chân giúp thả lỏng hoàn toàn khi đọc sách, xem phim, ngả lưng nghỉ ngơi thư giãn."
  },
  {
    id: "ghe-thu-gian-chaise-velvet-xanh-ngoc",
    name: "Ghế Nằm Thư Giãn Chaise Lounge Tân Cổ Điển Xanh Ngọc",
    code: "SOFA-TG02",
    category: "cac-mau-ghe-thu-gian",
    categoryName: "Các mẫu ghế thư giãn",
    subtitle: "Rút cúc quả trám thủ công tinh xảo, bọc nhung tuyết xanh ngọc quý phái",
    price: "Tư Vấn Báo Giá Tận Xưởng",
    originalPrice: "",
    dimensions: "1600 x 750 x 820 mm (May đo theo yêu cầu)",
    material: "Chất liệu Nỉ nhung tuyết hoặc Da bò Ý / Microfiber",
    frame: "Khung Gỗ: Sồi, Thông, Keo tuyển chọn lõi chắc chắn, chân tiện gỗ tự nhiên",
    cushion: "Mút Việt Nam hoặc Việt Nhật (Đệm ngồi lò xo cối êm ái)",
    badge: "TÂN CỔ ĐIỂN",
    isFeatured: true,
    image: "assets/images/ghe-thu-gian-chaise-velvet-xanh.jpg",
    gallery: [
      "assets/images/ghe-thu-gian-chaise-velvet-xanh.jpg"
    ],
    colors: [
      { name: "Xanh Ngọc", hex: "#76a5af" },
      { name: "Kem Sữa", hex: "#f3ede2" },
      { name: "Hồng Pastel", hex: "#e2b6b6" }
    ],
    description: "Mẫu ghế Chaise Lounge đậm chất quý tộc Châu Âu. Từng múi cúc được thợ xưởng rút thủ công tỉ mỉ, đệm bọc nhung tuyết xanh ngọc sang trọng kết hợp chân gỗ tiện cổ điển kiêu sa."
  },
  {
    id: "ghe-thu-gian-chaise-beige-dinh-tan",
    name: "Ghế Nằm Thư Giãn Chaise Lounge Vải Bố Be Viền Đinh Tán",
    code: "SOFA-TG03",
    category: "cac-mau-ghe-thu-gian",
    categoryName: "Các mẫu ghế thư giãn",
    subtitle: "Viền đinh tán đồng thủ công sắc sảo, tựa lưng chần nút kèm gối ôm",
    price: "Tư Vấn Báo Giá Tận Xưởng",
    originalPrice: "",
    dimensions: "1650 x 800 x 850 mm (May đo theo yêu cầu)",
    material: "Chất liệu Vải bố thô cao cấp thoáng khí hoặc Da / Nỉ nhung",
    frame: "Khung Gỗ: Sồi, Thông, Keo xử lý chống cong vênh mối mọt",
    cushion: "Mút Việt Nhật nguyên khối không lún, tặng kèm gối tựa lưng êm ái",
    badge: "SANG TRỌNG",
    isFeatured: true,
    image: "assets/images/ghe-thu-gian-chaise-beige-dinh-tan.jpg",
    gallery: [
      "assets/images/ghe-thu-gian-chaise-beige-dinh-tan.jpg"
    ],
    colors: [
      { name: "Be Cát", hex: "#d8cbb8" },
      { name: "Xám Ghi", hex: "#94a3b8" },
      { name: "Nâu Đất", hex: "#854d0e" }
    ],
    description: "Sở hữu vẻ đẹp trang nhã với tông màu be cát ấm cúng, điểm xuyết hàng đinh tán đồng chạy dọc đường cong thân ghế. Thiết kế lưng thoai thoải ôm trọn lưng người nằm."
  },
  {
    id: "ghe-thu-gian-chaise-trang-kem-mui-noi",
    name: "Ghế Nằm Thư Giãn Chaise Lounge Múi Phao Nổi Trắng Kem",
    code: "SOFA-TG04",
    category: "cac-mau-ghe-thu-gian",
    categoryName: "Các mẫu ghế thư giãn",
    subtitle: "Thiết kế múi phao uốn lượn bồng bềnh, kèm gối ôm trụ tròn nâng đỡ cổ",
    price: "Tư Vấn Báo Giá Tận Xưởng",
    originalPrice: "",
    dimensions: "1700 x 850 x 840 mm (May đo theo yêu cầu)",
    material: "Chất liệu Da hoặc Nỉ cao cấp màu trắng kem quý phái",
    frame: "Khung Gỗ: Sồi, Thông, Keo dày dặn, chịu tải vượt trội",
    cushion: "Mút Việt Nhật chần múi phao nổi bồng bềnh, gối trụ tròn êm ái",
    badge: "XU HƯỚNG",
    isFeatured: true,
    image: "assets/images/ghe-thu-gian-chaise-trang-kem.jpg",
    gallery: [
      "assets/images/ghe-thu-gian-chaise-trang-kem.jpg"
    ],
    colors: [
      { name: "Trắng Kem", hex: "#faf8f5" },
      { name: "Ghi Khói", hex: "#cbd5e1" },
      { name: "Vàng Bơ", hex: "#fef08a" }
    ],
    description: "Mẫu ghế thư giãn tuyệt đẹp với thiết kế múi phao nâng đỡ êm ái phần chân và đùi, tựa lưng rút nút sâu cùng gối tròn kê gáy tạo cảm giác thư thái tối đa."
  },
  {
    id: "ghe-thu-gian-uon-cong-hien-dai-xam",
    name: "Ghế Nằm Thư Giãn Uốn Cong Hiện Đại Kèm Gối Tựa Đầu",
    code: "SOFA-TG05",
    category: "cac-mau-ghe-thu-gian",
    categoryName: "Các mẫu ghế thư giãn",
    subtitle: "Đường cong S-Line nâng đỡ cột sống hoàn hảo, tối giản tinh tế",
    price: "Tư Vấn Báo Giá Tận Xưởng",
    originalPrice: "",
    dimensions: "1600 x 680 x 780 mm (May đo theo yêu cầu)",
    material: "Chất liệu Vải dệt nỉ cao cấp thoáng khí hoặc Da công nghiệp",
    frame: "Khung Gỗ: Sồi, Thông, Keo uốn cong công thái học, chân gỗ mộc tự nhiên",
    cushion: "Mút Việt Nhật đúc nguyên khối chống xẹp lún, đệm tựa đầu điều chỉnh",
    badge: "HIỆN ĐẠI",
    isFeatured: true,
    image: "assets/images/ghe-thu-gian-cong-hien-dai-xam.jpg",
    gallery: [
      "assets/images/ghe-thu-gian-cong-hien-dai-xam.jpg"
    ],
    colors: [
      { name: "Xám Nhạt", hex: "#e2e8f0" },
      { name: "Xanh Mint", hex: "#a7f3d0" },
      { name: "Be Nâu", hex: "#e7e5e4" }
    ],
    description: "Phong cách thiết kế Bắc Âu tối giản với đường lượn S-Line mềm mại. Ghế trang bị gối tựa đầu đệm mút cao cấp giúp bạn thư giãn đọc sách, nghe nhạc hàng giờ liền."
  },
  {
    id: "ghe-thu-gian-chaise-velvet-xanh-royal",
    name: "Ghế Nằm Thư Giãn Chaise Lounge Quý Tộc Xanh Royal",
    code: "SOFA-TG06",
    category: "cac-mau-ghe-thu-gian",
    categoryName: "Các mẫu ghế thư giãn",
    subtitle: "Tựa tay cuộn tròn cổ điển, đệm rút cúc bọc nhung tuyết xanh Royal",
    price: "Tư Vấn Báo Giá Tận Xưởng",
    originalPrice: "",
    dimensions: "1680 x 780 x 820 mm (May đo theo yêu cầu)",
    material: "Chất liệu Nỉ nhung tuyết Royal cao cấp hoặc Da bò Ý",
    frame: "Khung Gỗ: Sồi, Thông, Keo tuyển chọn lõi chắc chắn, chân tiện sơn bóng",
    cushion: "Mút Việt Nhật nguyên khối có lò xo đàn hồi êm ái",
    badge: "QUÝ TỘC",
    isFeatured: true,
    image: "assets/images/ghe-thu-gian-chaise-velvet-xanh-royal.jpg",
    gallery: [
      "assets/images/ghe-thu-gian-chaise-velvet-xanh-royal.jpg"
    ],
    colors: [
      { name: "Xanh Royal", hex: "#1d4ed8" },
      { name: "Nâu Da", hex: "#78350f" },
      { name: "Ghi Xám", hex: "#475569" }
    ],
    description: "Kiểu dáng Chaise Lounge quý tộc sang trọng với phần tay vịn cuộn tròn cổ điển. Đệm ngồi chần nút thủ công tỉ mỉ, bọc nhung tuyết mềm mượt mang lại trải nghiệm nghỉ ngơi thư thái đỉnh cao."
  },
  {
    id: "ghe-thu-gian-chaise-velvet-hong-pastel",
    name: "Ghế Nằm Thư Giãn Chaise Lounge Nhung Hồng Pastel",
    code: "SOFA-TG07",
    category: "cac-mau-ghe-thu-gian",
    categoryName: "Các mẫu ghế thư giãn",
    subtitle: "Dáng uốn lượn nữ tính thanh lịch, đệm rút múi phao êm ái bồng bềnh",
    price: "Tư Vấn Báo Giá Tận Xưởng",
    originalPrice: "",
    dimensions: "1600 x 750 x 800 mm (May đo theo yêu cầu)",
    material: "Chất liệu Nhung nỉ cao cấp màu hồng pastel ngọt ngào",
    frame: "Khung Gỗ: Sồi, Thông, Keo định hình vững chãi, chân tiện gỗ tự nhiên",
    cushion: "Mút Việt Nhật đàn hồi cao, chần múi nổi chống xẹp lún",
    badge: "NGỌT NGÀO",
    isFeatured: true,
    image: "assets/images/ghe-thu-gian-chaise-velvet-hong-pastel.jpg",
    gallery: [
      "assets/images/ghe-thu-gian-chaise-velvet-hong-pastel.jpg"
    ],
    colors: [
      { name: "Hồng Pastel", hex: "#f472b6" },
      { name: "Kem Sữa", hex: "#fef3c7" },
      { name: "Xanh Bạc Hà", hex: "#a7f3d0" }
    ],
    description: "Tone màu hồng pastel nhẹ nhàng quyến rũ kết hợp kỹ thuật chần múi phao tinh xảo. Mẫu ghế lý tưởng cho phòng ngủ, góc thư giãn đọc sách hoặc không gian làm đẹp của phái nữ."
  },
  {
    id: "ghe-thu-gian-cong-da-trang-hien-dai",
    name: "Ghế Nằm Thư Giãn Da Cao Cấp Màu Trắng Hiện Đại",
    code: "SOFA-TG08",
    category: "cac-mau-ghe-thu-gian",
    categoryName: "Các mẫu ghế thư giãn",
    subtitle: "Thiết kế công thái học uốn lượn, bọc da trắng tinh khôi chân kim loại mạ crom",
    price: "Tư Vấn Báo Giá Tận Xưởng",
    originalPrice: "",
    dimensions: "1650 x 800 x 860 mm (May đo theo yêu cầu)",
    material: "Chất liệu Da Microfiber hoặc Da bò Ý chống thấm, dễ lau chùi",
    frame: "Khung cốt thép kết hợp Gỗ Sồi chịu lực, chân kim loại mạ crom sáng bóng",
    cushion: "Mút Việt Nhật đúc nguyên khối dày dặn, đệm kê tay êm ái",
    badge: "HIỆN ĐẠI",
    isFeatured: true,
    image: "assets/images/ghe-thu-gian-cong-da-trang-hien-dai.jpg",
    gallery: [
      "assets/images/ghe-thu-gian-cong-da-trang-hien-dai.jpg"
    ],
    colors: [
      { name: "Trắng Sứ", hex: "#ffffff" },
      { name: "Đen Bóng", hex: "#1e293b" },
      { name: "Nâu Bò", hex: "#9a3412" }
    ],
    description: "Thiết kế hiện đại mang hơi thở tương lai với đường uốn cong nâng đỡ trọn vẹn lưng và bắp chân. Đệm kê tay êm ái và chất liệu da trắng thanh lịch tạo điểm nhấn đẳng cấp cho căn phòng."
  },
  {
    id: "ghe-thu-gian-khung-go-oc-cho-coral",
    name: "Ghế Nằm Thư Giãn Khung Gỗ Uốn Bo Cong Màu Cam Đất",
    code: "SOFA-TG09",
    category: "cac-mau-ghe-thu-gian",
    categoryName: "Các mẫu ghế thư giãn",
    subtitle: "Khung chân gỗ tự nhiên uốn lượn tinh xảo, bọc vải dệt thô màu coral ấm cúng",
    price: "Tư Vấn Báo Giá Tận Xưởng",
    originalPrice: "",
    dimensions: "1700 x 760 x 780 mm (May đo theo yêu cầu)",
    material: "Vải dệt thô cao cấp thoáng khí, chống xù lông (Kèm gối tựa lưng xanh mint)",
    frame: "Khung chân Gỗ Óc Chó / Sồi tự nhiên uốn nhiệt CNC liền khối độc đáo",
    cushion: "Mút Việt Nhật nguyên khối mềm mại nâng đỡ cột sống",
    badge: "ĐỘC BẢN",
    isFeatured: true,
    image: "assets/images/ghe-thu-gian-khung-go-oc-cho-coral.jpg",
    gallery: [
      "assets/images/ghe-thu-gian-khung-go-oc-cho-coral.jpg"
    ],
    colors: [
      { name: "Cam Đất Coral", hex: "#ea580c" },
      { name: "Xám Ghi", hex: "#64748b" },
      { name: "Vàng Mustard", hex: "#ca8a04" }
    ],
    description: "Tác phẩm nghệ thuật với đường bệ gỗ tự nhiên uốn cong mềm mại dọc suốt thân ghế. Màu cam đất coral ấm áp phối gối kê xanh mint mang lại cảm giác bình yên, thư thái bên cửa sổ."
  },
  {
    id: "ghe-thu-gian-doc-sach-velvet-xanh-reu",
    name: "Ghế Thư Giãn Đọc Sách Dáng Cánh Cung Xanh Rêu",
    code: "SOFA-TG10",
    category: "cac-mau-ghe-thu-gian",
    categoryName: "Các mẫu ghế thư giãn",
    subtitle: "Lòng ghế rộng ôm trọn cơ thể, bọc nhung tuyết xanh rêu êm ái thư giãn",
    price: "Tư Vấn Báo Giá Tận Xưởng",
    originalPrice: "",
    dimensions: "950 x 900 x 920 mm (May đo theo yêu cầu)",
    material: "Nhung nỉ tuyết cao cấp màu xanh rêu sang trọng, chống bám bụi",
    frame: "Khung Gỗ: Sồi, Thông, Keo định hình vững chãi, 4 chân gỗ mộc thon gọn",
    cushion: "Mút đúc Việt Nhật nguyên khối ôm trọn lưng cổ và hông",
    badge: "BEST SELLER",
    isFeatured: true,
    image: "assets/images/ghe-thu-gian-doc-sach-velvet-xanh-reu.jpg",
    gallery: [
      "assets/images/ghe-thu-gian-doc-sach-velvet-xanh-reu.jpg"
    ],
    colors: [
      { name: "Xanh Rêu", hex: "#166534" },
      { name: "Vàng Nghệ", hex: "#eab308" },
      { name: "Ghi Trầm", hex: "#334155" },
    ],
    description: "Mẫu ghế đọc sách quốc dân được yêu thích nhất. Thiết kế lòng ghế hình cánh cung sâu rộng, cho phép ngồi ngả lưng, co chân đọc sách, lướt điện thoại hay chợp mắt vô cùng thoải mái."
  },
  

  // 4. Ghế tân cổ điển (Bộ sưu tập 5 mẫu may đo tân cổ điển sang trọng tại xưởng)
  {
    id: "ghe-tan-co-dien-chesterfield-don-da-nau",
    name: "Ghế Đơn Tân Cổ Điển Chesterfield Da Bò Cổ Điển",
    code: "SOFA-TC01",
    category: "ghe-tan-co-dien",
    categoryName: "Ghế tân cổ điển",
    subtitle: "Rút cúc quả trám thủ công sâu nét, viền đinh đồng chạy dọc tay cuộn",
    price: "Tư Vấn Báo Giá Tận Xưởng",
    originalPrice: "",
    dimensions: "1100 x 950 x 800 mm (May đo theo yêu cầu)",
    material: "Da bò tự nhiên nhập khẩu hoặc Da Microfiber cổ điển màu nâu vintage",
    frame: "Khung Gỗ: Sồi, Thông, Keo tuyển chọn lõi chắc chắn, chân gỗ tiện tròn",
    cushion: "Mút Việt Nhật nguyên khối kết hợp hệ thống lò xo cối êm ái đàn hồi",
    badge: "CHESTERFIELD",
    isFeatured: true,
    image: "assets/images/ghe-tan-co-dien-chesterfield-don-da-nau.jpg",
    gallery: [
      "assets/images/ghe-tan-co-dien-chesterfield-don-da-nau.jpg"
    ],
    colors: [
      { name: "Nâu Vintage", hex: "#4a2c11" },
      { name: "Nâu Xì Gà", hex: "#3b1e08" },
      { name: "Đen Sang Trọng", hex: "#1e1e1e" }
    ],
    description: "Biểu tượng bất hủ của phong cách quý tộc Anh Quốc. Từng điểm rút cúc quả trám được nghệ nhân xưởng may thủ công đều tăm tắp, viền đinh tán đồng sắc sảo tạo nên vẻ đẹp vương giả, uy quyền."
  },
  {
    id: "ghe-tan-co-dien-chaise-lounge-go-coral",
    name: "Ghế Nằm Chaise Lounge Tân Cổ Điển Khung Gỗ Uốn Lượn",
    code: "SOFA-TC02",
    category: "ghe-tan-co-dien",
    categoryName: "Ghế tân cổ điển",
    subtitle: "Khung bệ gỗ tự nhiên uốn bo cong nghệ thuật, vải dệt thô màu hồng đất",
    price: "Tư Vấn Báo Giá Tận Xưởng",
    originalPrice: "",
    dimensions: "1700 x 760 x 780 mm (May đo theo yêu cầu)",
    material: "Vải dệt cao cấp nhập khẩu màu hồng đất coral (Tặng kèm gối tựa xanh mint)",
    frame: "Khung bệ Gỗ Óc Chó / Sồi tự nhiên uốn lượn CNC bo cong nguyên khối",
    cushion: "Mút Việt Nhật nguyên khối đàn hồi êm ái, nâng đỡ cột sống hoàn hảo",
    badge: "TÂN CỔ ĐIỂN",
    isFeatured: true,
    image: "assets/images/ghe-tan-co-dien-chaise-lounge-go-coral.jpg",
    gallery: [
      "assets/images/ghe-tan-co-dien-chaise-lounge-go-coral.jpg"
    ],
    colors: [
      { name: "Hồng Đất Coral", hex: "#d97757" },
      { name: "Be Cát", hex: "#d1c7b7" },
      { name: "Ghi Trầm", hex: "#52525b" }
    ],
    description: "Sự giao thoa hoàn mỹ giữa nét tân cổ điển quý phái và đường nét uốn lượn mềm mại. Phần bệ đỡ bằng gỗ sồi tự nhiên ôm trọn dáng ghế, tạo cảm giác thư giãn tĩnh tại tuyệt đối bên không gian phòng khách hoặc phòng ngủ."
  },
  {
    id: "ghe-tan-co-dien-wingback-nhung-cam-dat",
    name: "Ghế Bành Đơn Wingback Tai Voi Tân Cổ Điển Nhung Cam Đất",
    code: "SOFA-TC03",
    category: "ghe-tan-co-dien",
    categoryName: "Ghế tân cổ điển",
    subtitle: "Dáng tai voi quý phái, tựa lưng chần nút quả trám kèm viền đinh tán đồng",
    price: "Tư Vấn Báo Giá Tận Xưởng",
    originalPrice: "",
    dimensions: "900 x 880 x 1100 mm (May đo theo yêu cầu)",
    material: "Nhung nỉ tuyết cao cấp màu cam đất / cognac quý phái, êm mịn",
    frame: "Khung Gỗ: Sồi, Thông, Keo định hình vững chãi, chân cabriole cổ điển sơn đen",
    cushion: "Mút đúc Việt Nhật nguyên khối, đệm ngồi rời dày dặn có khóa kéo vệ sinh",
    badge: "WINGBACK",
    isFeatured: true,
    image: "assets/images/ghe-tan-co-dien-wingback-nhung-cam-dat.jpg",
    gallery: [
      "assets/images/ghe-tan-co-dien-wingback-nhung-cam-dat.jpg"
    ],
    colors: [
      { name: "Cam Đất", hex: "#c25420" },
      { name: "Xanh Emerald", hex: "#065f46" },
      { name: "Nâu Cổ Điển", hex: "#78350f" }
    ],
    description: "Mẫu ghế bành thư giãn Wingback kinh điển châu Âu với phần tựa đầu 'tai voi' nâng đỡ trọn vẹn cổ và vai gáy. Tựa lưng rút cúc quả trám sang trọng cùng đường đinh tán đồng chạy viền thủ công tỉ mỉ."
  },
  {
    id: "ghe-tan-co-dien-sofa-so-nhung-xanh-ocean",
    name: "Sofa Văng Tân Cổ Điển Dáng Sò Bọc Nhung Xanh Ocean",
    code: "SOFA-TC04",
    category: "ghe-tan-co-dien",
    categoryName: "Ghế tân cổ điển",
    subtitle: "May chần múi rãnh sò cánh cung duyên dáng, bọc nhung ngọc ocean cao cấp",
    price: "Tư Vấn Báo Giá Tận Xưởng",
    originalPrice: "",
    dimensions: "2100 x 900 x 850 mm (May đo theo yêu cầu)",
    material: "Nhung nỉ tuyết bích ngọc cao cấp chống bám bụi, mềm mại óng ánh",
    frame: "Khung Gỗ: Sồi, Thông, Keo tuyển chọn uốn cong cánh cung kiên cố",
    cushion: "Mút Việt Nhật nguyên khối nhiều lớp êm ái, định hình múi sò căng phồng",
    badge: "DÁNG SÒ",
    isFeatured: true,
    image: "assets/images/ghe-tan-co-dien-sofa-so-nhung-xanh-ocean.jpg",
    gallery: [
      "assets/images/ghe-tan-co-dien-sofa-so-nhung-xanh-ocean.jpg"
    ],
    colors: [
      { name: "Xanh Ocean", hex: "#087ea4" },
      { name: "Hồng Đỗ", hex: "#be185d" },
      { name: "Vàng Mustard", hex: "#b45309" }
    ],
    description: "Tạo hình cánh sò đại dương mềm mại quyến rũ mang hơi thở phong cách Art Deco quý phái. Đệm ngồi liền êm ái cùng các múi rãnh dọc chần thủ công tạo cảm giác thư giãn ôm ấp trọn vẹn người ngồi."
  },
  {
    id: "ghe-tan-co-dien-hoang-gia-khung-go-cham-khac",
    name: "Sofa Tân Cổ Điển Hoàng Gia Khung Gỗ Chạm Khắc Bọc Gấm Kem",
    code: "SOFA-TC05",
    category: "ghe-tan-co-dien",
    categoryName: "Ghế tân cổ điển",
    subtitle: "Vương miện gỗ đục chạm hoa văn Baroque tinh xảo, bọc vải gấm hoa kem sữa",
    price: "Tư Vấn Báo Giá Tận Xưởng",
    originalPrice: "",
    dimensions: "2050 x 920 x 980 mm (May đo theo yêu cầu)",
    material: "Vải gấm dệt hoa văn hoàng gia cổ điển kết hợp nỉ kem cao cấp",
    frame: "Khung Gỗ Sồi tự nhiên chạm khắc hoa lá tây Baroque thủ công, sơn bóng PU cao cấp",
    cushion: "Mút Việt Nhật đàn hồi cao kết hợp lò xo cối, tặng kèm 2 gối tựa hoàng gia",
    badge: "HOÀNG GIA",
    isFeatured: true,
    image: "assets/images/ghe-tan-co-dien-hoang-gia-khung-go-cham-khac.jpg",
    gallery: [
      "assets/images/ghe-tan-co-dien-hoang-gia-khung-go-cham-khac.jpg"
    ],
    colors: [
      { name: "Kem Gấm Hoa", hex: "#fef3c7" },
      { name: "Vàng Ánh Kim", hex: "#eab308" },
      { name: "Đỏ Bordeaux", hex: "#881337" }
    ],
    description: "Đỉnh cao nghệ thuật chế tác tân cổ điển phong cách cung điện Châu Âu. Khung gỗ tự nhiên lộ diện được điêu khắc hoa văn vương miện cầu kỳ, kết hợp tựa lưng rút cúc quả trám và đệm ngồi bọc vải gấm hoa sang trọng tuyệt mỹ."
  },
  {
    id: "ghe-tan-co-dien-don-da-than-chan-kim-loai",
    name: "Ghế Đơn Tân Cổ Điển Hiện Đại Rút Nút Da Than Chân Kim Loại",
    code: "SOFA-TC06",
    category: "ghe-tan-co-dien",
    categoryName: "Ghế tân cổ điển",
    subtitle: "Dáng khối vuông vức thanh lịch, tựa lưng chần nút quả trám, chân thép thon gọn",
    price: "Tư Vấn Báo Giá Tận Xưởng",
    originalPrice: "",
    dimensions: "880 x 860 x 820 mm (May đo theo yêu cầu)",
    material: "Da Microfiber cao cấp màu xám than / than chì chống trầy xước, mềm mịn",
    frame: "Khung Gỗ: Sồi, Thông, Keo định hình vuông vức kiên cố, chân kim loại sơn tĩnh điện đen",
    cushion: "Mút Việt Nhật nguyên khối định hình cao, đệm ngồi êm ái chống xẹp lún",
    badge: "HIỆN ĐẠI",
    isFeatured: true,
    image: "assets/images/ghe-tan-co-dien-don-da-than-chan-kim-loai.jpg",
    gallery: [
      "assets/images/ghe-tan-co-dien-don-da-than-chan-kim-loai.jpg"
    ],
    colors: [
      { name: "Xám Than", hex: "#334155" },
      { name: "Đen Mờ", hex: "#1e293b" },
      { name: "Nâu Đất", hex: "#78350f" }
    ],
    description: "Sự kết hợp tinh tế giữa phong cách tân cổ điển rút cúc quả trám và đường nét tối giản hiện đại. Tay vịn thẳng thanh mảnh cùng chân kim loại thanh thoát tạo cảm giác thông thoáng, lịch lãm cho phòng khách hoặc văn phòng giám đốc."
  },
  {
    id: "ghe-tan-co-dien-wingback-chesterfield-da-den",
    name: "Ghế Bành Đơn Wingback Chesterfield Da Đen Quý Tộc",
    code: "SOFA-TC07",
    category: "ghe-tan-co-dien",
    categoryName: "Ghế tân cổ điển",
    subtitle: "Tựa tai voi cao rút cúc quả trám toàn thân, nẹp viền đinh đồng chạy dọc tay cuộn",
    price: "Tư Vấn Báo Giá Tận Xưởng",
    originalPrice: "",
    dimensions: "920 x 900 x 1120 mm (May đo theo yêu cầu)",
    material: "Da bò tự nhiên cao cấp hoặc Da Microfiber đen bóng quý phái, bền đẹp vượt thời gian",
    frame: "Khung Gỗ: Sồi, Thông, Keo sấy khô tuyển chọn lõi chắc chắn, chân gỗ tiện cổ điển sơn đen",
    cushion: "Mút Việt Nhật nguyên khối nhiều tầng kết hợp lò xo cối đàn hồi êm ái trọn vẹn",
    badge: "QUÝ TỘC",
    isFeatured: true,
    image: "assets/images/ghe-tan-co-dien-wingback-chesterfield-da-den.jpg",
    gallery: [
      "assets/images/ghe-tan-co-dien-wingback-chesterfield-da-den.jpg"
    ],
    colors: [
      { name: "Đen Quý Tộc", hex: "#0f172a" },
      { name: "Nâu Xì Gà", hex: "#451a03" },
      { name: "Đỏ Rượu Vang", hex: "#881337" }
    ],
    description: "Đỉnh cao quyền lực và sự sang trọng với mẫu ghế Wingback phong cách Chesterfield da đen bóng bẩy. Tựa lưng cao uốn lượn hình tai voi ôm trọn người ngồi, từng múi rút cúc sâu hút mắt cùng hàng đinh tán thủ công sắc sảo khẳng định đẳng cấp gia chủ."
  },

  // 5. Mẫu đệm
  {
    id: "mau-dem-multi-layer",
    name: "Mẫu Đệm Mút Việt Nhật Đàn Hồi Cao",
    code: "DEM-01",
    category: "mau-dem",
    categoryName: "Mẫu đệm",
    subtitle: "Cắt may mút đệm theo kích thước sofa, chống xẹp lún",
    price: "Tư Vấn Báo Giá Tận Xưởng",
    originalPrice: "",
    dimensions: "Cắt may đo theo đúng kích thước sofa của khách",
    material: "Áo đệm bọc Da hoặc Nỉ (Tháo rời giặt hoặc bọc liền)",
    frame: "Áo lót vải cotton thoáng khí",
    cushion: "Mút Việt Nam hoặc Mút Việt Nhật (Tùy chọn đệm ngồi có lò xo hoặc không lò xo)",
    badge: "CHUYÊN ĐỆM SOFA",
    isFeatured: true,
    image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=1200&q=80"
    ],
    colors: [
      { name: "Đệm Mút Việt Nhật D40", hex: "#293241" },
      { name: "Đệm Mút Việt Nam", hex: "#e0fbfc" }
    ],
    description: "Dịch vụ làm đệm sofa ghế gỗ, bọc mới đệm sofa cũ. Sử dụng mút Việt Nam hoặc mút Việt Nhật tỷ trọng cao, đệm ngồi có lò xo hoặc không lò xo theo yêu cầu."
  },
  {
    id: "mau-dem-latex-hybrid",
    name: "Mẫu Đệm Tích Hợp Lò Xo Cối Chịu Lực",
    code: "DEM-02",
    category: "mau-dem",
    categoryName: "Mẫu đệm",
    subtitle: "Kết hợp hệ lò xo cối và mút Việt Nhật đàn hồi êm ái",
    price: "Tư Vấn Báo Giá Tận Xưởng",
    originalPrice: "",
    dimensions: "Gia công theo thông số khung ghế thực tế",
    material: "Bọc Da hoặc Nỉ cao cấp",
    frame: "Khung lò xo cối thép tôi cao tần",
    cushion: "Mút Việt Nhật + Lò xo cối thép đàn hồi nhún êm ái",
    badge: "CÓ LÒ XO",
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=1200&q=80"
    ],
    colors: [
      { name: "Đệm Lò Xo Việt Nhật", hex: "#d8c7a6" }
    ],
    description: "Độ bật nảy đàn hồi tốt, nâng đỡ trọng lượng cơ thể phân tán đều, ngồi lâu không bị mỏi."
  }
];
// Danh mục chuẩn theo ảnh user và yêu cầu
const CATEGORIES_DATA = [
  {
    id: "sofa-chu-l",
    name: "Sofa chữ L (Sofa góc)",
    shortName: "SOFA CHỮ L",
    description: "Sofa góc chữ L tối ưu diện tích, bọc Da hoặc Nỉ, khung Gỗ Sồi / Thông / Keo, mút Việt Nam / Việt Nhật có hoặc không lò xo.",
    iconSvg: `<svg viewBox="0 0 48 32" class="cat-svg" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M4 10h14v8H4z" fill="currentColor" fill-opacity="0.12"/>
      <path d="M18 10h26v8H18z" fill="currentColor" fill-opacity="0.12"/>
      <path d="M32 18v8h12v-8z" fill="currentColor" fill-opacity="0.12"/>
      <rect x="4" y="6" width="40" height="20" rx="2" />
      <path d="M4 14h40M18 6v12M32 18v8" />
      <path d="M4 26v4M44 26v4M18 26v4M32 26v4" stroke-width="2.2"/>
    </svg>`
  },
  {
    id: "sofa-don",
    name: "Sofa đơn",
    shortName: "SOFA ĐƠN",
    description: "Sofa đơn, sofa văng & băng may đo bọc Da hoặc Nỉ, khung Gỗ Sồi / Thông / Keo, đệm mút Việt Nam / Việt Nhật có hoặc không lò xo.",
    iconSvg: `<svg viewBox="0 0 36 32" class="cat-svg" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <rect x="6" y="8" width="24" height="18" rx="2" fill="currentColor" fill-opacity="0.12"/>
      <path d="M2 14v10a2 2 0 002 2h2V14a2 2 0 00-2-2 2 2 0 00-2 2zM30 14v10a2 2 0 002 2h2V14a2 2 0 00-2-2 2 2 0 00-2 2z"/>
      <path d="M6 18h24M10 8v10M26 8v10"/>
      <path d="M6 26v4M30 26v4" stroke-width="2.2"/>
    </svg>`
  },
  {
    id: "cac-mau-ghe-thu-gian",
    name: "Các mẫu ghế thư giãn",
    shortName: "GHẾ THƯ GIÃN",
    description: "Các mẫu ghế ngả lưng thư thái, đệm mút Việt Nhật êm ái nâng đỡ cột sống sau giờ làm việc.",
    iconSvg: `<svg viewBox="0 0 40 32" class="cat-svg" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M8 8c0-3 3-5 7-5h2c4 0 6 3 6 7l-2 10 9 2c2 1 3 3 2 5l-1 1-12-3-4-8-7-1c-2 0-3-1-3-3s1-5 3-5z" fill="currentColor" fill-opacity="0.12"/>
      <circle cx="16" cy="6" r="3"/>
      <path d="M15 9l-3 9 10 3 8-6"/>
      <path d="M12 18l-4 8M18 20l-2 8M28 26h8"/>
    </svg>`
  },
  {
    id: "ghe-tan-co-dien",
    name: "Ghế tân cổ điển",
    shortName: "TÂN CỔ ĐIỂN",
    description: "Ghế sofa tân cổ điển may rút cúc quả trám thủ công, khung Gỗ Sồi / Thông / Keo chạm khắc tinh xảo.",
    iconSvg: `<svg viewBox="0 0 40 32" class="cat-svg" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M6 8c2-4 8-5 14-5s12 1 14 5v14c0 3-3 5-6 5H12c-3 0-6-2-6-5V8z" fill="currentColor" fill-opacity="0.12"/>
      <path d="M13 9l7 7-7 7M27 9l-7 7 7 7M20 3v24M6 18h28"/>
      <circle cx="20" cy="16" r="1.5" fill="currentColor"/>
      <circle cx="13" cy="9" r="1.2" fill="currentColor"/>
      <circle cx="27" cy="9" r="1.2" fill="currentColor"/>
      <path d="M8 27v3M32 27v3" stroke-width="2.2"/>
    </svg>`
  },
  {
    id: "mau-dem",
    name: "Mẫu đệm",
    shortName: "MẪU ĐỆM",
    description: "Cắt may mút đệm theo yêu cầu: Mút Việt Nam hoặc Việt Nhật, đệm ngồi có lò xo hoặc không lò xo, bọc Da hoặc Nỉ.",
    iconSvg: `<svg viewBox="0 0 38 32" class="cat-svg" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <rect x="4" y="6" width="30" height="6" rx="2" fill="currentColor" fill-opacity="0.2"/>
      <rect x="4" y="14" width="30" height="6" rx="1.5" fill="currentColor" fill-opacity="0.12"/>
      <rect x="4" y="22" width="30" height="6" rx="2" fill="currentColor" fill-opacity="0.08"/>
      <path d="M8 6v22M30 6v22M19 6v22" stroke-dasharray="1.5 2"/>
    </svg>`
  }
];
