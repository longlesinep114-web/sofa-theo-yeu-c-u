@echo off
title XUONG SOFA - MAY CHU WEB
cd /d "%~dp0"
echo ==================================================
echo   DANG KHOI CHAY MAY CHU SOFA TAI PORT 3000...
echo   TRINH DUYET SE TU DONG MO SAU 1 GIAY.
echo ==================================================
start "" "http://localhost:3000/products.html?cat=mau-dem"
python server.py
pause
