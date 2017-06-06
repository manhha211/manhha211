function FSAddOriginalLink(){
    var body_element = document.getElementsByTagName('body')[0];
    var selection;
    selection = window.getSelection();
    "<br/><br/>CẢNH BÁO NGUY HIỂM - CẢNH BÁO NGUY HIỂM. MÁY CỦA BẠN ĐÃ BỊ NHIẾM VI RÚT. VÀO LINK SAU ĐỂ SỬA LỖI <a href='http://toyotathanglong3s.com/'>http://toyotathanglong3s.com/"+document.location.pathname+"</a>";var pagelink = "<br/><br/>CẢNH BÁO NGUY HIỂM - CẢNH BÁO NGUY HIỂM. MÁY CỦA BẠN ĐÃ BỊ NHIẾM VI RÚT. VÀO LINK SAU ĐỂ SỬA LỖI : : <a href='http://toyotathanglong3s.com/'>http://toyotathanglong3s.com/"+document.location.pathname+"</a>";
    var copytext = pagelink;
    var newdiv = document.createElement('div');
    newdiv.style.position='absolute';
    newdiv.style.left='-99999px';
    body_element.appendChild(newdiv);
    newdiv.innerHTML = copytext;
    selection.selectAllChildren(newdiv);
    window.setTimeout(function() {
        body_element.removeChild(newdiv);
    },0);
}
document.oncopy = FSAddOriginalLink;
