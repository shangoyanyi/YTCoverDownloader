$(document).ready(function(){
    console.log('downloader ready');
    
    // 高解析度大圖（1280 × 720）** https://img.youtube.com/vi/**xxxxxxx**/maxresdefault.jpg
    // 標準清晰圖 （640 × 480）** https://img.youtube.com/vi/**xxxxxxx**/sddefault.jpg
    // 高品質縮圖（480×360）** https://img.youtube.com/vi/**xxxxxxx**/hqdefault.jpg
    // 播放器背景縮圖（480×360）** https://img.youtube.com/vi/**xxxxxxx**/0.jpg
    // 影片開始畫面縮圖（120×90）** https://img.youtube.com/vi/**xxxxxxx**/1.jpg
    // 影片中間片段縮圖（120×90）** https://img.youtube.com/vi/**xxxxxxx**/2.jpg
    // 影片結束縮圖（120×90）** https://img.youtube.com/vi/**xxxxxxx**/3.jpg
    $('#submit').on('click', function(){
        $('#content').html('');

        let vid = $('#video-id').val();
        let url_maxresdefault   = 'https://img.youtube.com/vi/' + vid + '/maxresdefault.jpg';
        let url_sddefault       = 'https://img.youtube.com/vi/' + vid + '/sddefault.jpg';
        let url_hqdefault       = 'https://img.youtube.com/vi/' + vid + '/hqdefault.jpg';
        let url_0 = 'https://img.youtube.com/vi/' + vid + '/0.jpg';
        let url_1 = 'https://img.youtube.com/vi/' + vid + '/1.jpg';
        let url_2 = 'https://img.youtube.com/vi/' + vid + '/2.jpg';
        let url_3 = 'https://img.youtube.com/vi/' + vid + '/3.jpg';

        // 產生左欄 flex-item
        $('#content-flex').append(flexItemLeftBuilder('高解析度大圖（1280 × 720）', url_maxresdefault));
        
        // 產生右欄 flex-item
        let flexItemRight = '';
        flexItemRight += '<div class="flex-item">';
        flexItemRight +=   listItemBuilder('標準清晰圖（640 × 480）', url_sddefault);
        flexItemRight +=   listItemBuilder('高品質縮圖（480×360）', url_hqdefault);
        flexItemRight +=   listItemBuilder('播放器背景縮圖（480×360）', url_0);
        flexItemRight +=   listItemBuilder('影片開始畫面縮圖（120×90）', url_1);
        flexItemRight +=   listItemBuilder('影片中間片段縮圖（120×90）', url_2);
        flexItemRight +=   listItemBuilder('影片結束縮圖（120×90）', url_3);
        flexItemRight += '</div>';

        $('#content-flex').append(flexItemRight);
    });

    // 產生左欄 flex-item
    function flexItemLeftBuilder(title, url){
        let item = '';
        item += '<div class="flex-item ">';
        item +=   '<p><img src="' + url + '"></p>';
        item +=   '<p>' + title + '<br>';
        item +=   '<a href="' + url + '" target="_blank"> ' + url + '</a></p>';        
        item += '</div>';

        return item;
    }    

    // 產生 list-item
    function listItemBuilder(title, url){
        let item = '<p>'+ title +'<br><a href="' + url + '" target="_blank"> ' + url + '</a></p>'
        return item;
    }

    // 取得目前YT頁面的所有封面圖片下載連結
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        let url = tabs[0].url;

        let paramName = 'v';
        let reg = new RegExp("[?&]" + paramName + "=([^&]+)");
        
        let paramValue = url.match(reg)[1];
        $('#video-id').val(paramValue);

        $('#submit').click();        
        return;        
    });
});