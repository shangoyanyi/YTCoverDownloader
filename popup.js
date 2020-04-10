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

        $('#content').append('<p>高解析度大圖（1280 × 720）:<br><a href="' + url_maxresdefault + '" target="_blank"> ' + url_maxresdefault + '</a></p>');
        $('#content').append('<p>標準清晰圖（640 × 480）:<br> <a href="' + url_sddefault + '" target="_blank"> ' + url_sddefault + '</a></p>');
        $('#content').append('<p>高品質縮圖（480×360）:<br> <a href="' + url_hqdefault + '" target="_blank"> ' + url_hqdefault + '</a></p>');
        $('#content').append('<p>播放器背景縮圖（480×360）:<br> <a href="' + url_0 + '" target="_blank"> ' + url_0 + '</a></p>');
        $('#content').append('<p>影片開始畫面縮圖（120×90）:<br> <a href="' + url_1 + '" target="_blank"> ' + url_1 + '</a></p>');
        $('#content').append('<p>影片中間片段縮圖（120×90）:<br> <a href="' + url_2 + '" target="_blank"> ' + url_2 + '</a></p>');
        $('#content').append('<p>影片結束縮圖（120×90）:<br> <a href="' + url_3 + '" target="_blank"> ' + url_3 + '</a></p>');
    });

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