/** 运动 **/

/**
 * javascript实现 
 * 鼠标坐标 (相当于 pageX 即当前鼠标所在位置离 "文档" 的距离)
 */
function mousePosition(ev){
    if(ev.pageX || ev.pageY){
        return {x:ev.pageX, y:ev.pageY};
    }
    return {
        x:ev.clientX + document.body.scrollLeft - document.body.clientLeft,
        y:ev.clientY + document.body.scrollTop - document.body.clientTop
    };

}


/**
 * 鼠标滚轮 (向某处滚动！)
 */
$('#content').on("mousewheel DOMMouseScroll", function (event) {
    // chrome & ie || // firefox
    var delta = (event.originalEvent.wheelDelta && (event.originalEvent.wheelDelta > 0 ? 1 : -1)) ||
        (event.originalEvent.detail && (event.originalEvent.detail > 0 ? -1 : 1));  
    if (delta > 0) {
        console.log('mousewheel top');
    } else if (delta < 0) {
        console.log('mousewheel bottom');
    }

});