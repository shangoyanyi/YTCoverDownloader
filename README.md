# YTCoverDownloader [chrome extension]
![logo](/logo.png)

快速下載 Youtube 影片的封面圖片。

## 專案說明
在使用Notion Web Clipper時發現擷取YouTube影片並不會包含封面圖片，導致在Gallery View下沒有封面圖片。
原本是手動找出YouTube的封面圖片下載連結，但因程序麻煩，因此做成擴充功能方便快速擷取。

## 開發說明
- 2020/04/13 (v1.0.0) 基本功能開發完成
- 2020/04/14 (v1.0.1) UI優化

## 使用說明
目前並不打算上架到chrome線上應用程式商店，請使用「開發人員模式」載入使用。

step1 下載專案
- 1.1 從 github 下載專案資料夾，選擇 Download ZIP
- 1.2 解壓縮ZIP檔案，專案資料夾名稱為 YTCoverDownloader

step2 載入專案
- 2.1 開啟 chrome，輸入URL: chrome://extensions
- 2.2 點選左上角「載入未封裝項目」
- 2.3 選擇 YTCoverDownloader 資料夾
- 2.4 瀏覽器右上角會顯示擴充功能icon (目前為反灰)

step3 抓取圖片
- 3.1 前往YouTube，點選任意影片
- 3.2 點擊擴充功能icon，會自動帶出影片的封面圖片links
![click icon](/images/readme1.png)
- 3.3 在 link 上點右鍵 -> 複製連結網址，即可取得目前影片封面圖片網址


## 後續維護
如果有任何建議，都歡迎隨時與我聯絡 :)



>本專案 Logo 使用 [DesignEvo](https://www.designevo.com/tw/logo-maker/) 設計製作
