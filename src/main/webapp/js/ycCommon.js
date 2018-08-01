/**
 * 阻止冒泡
 */
document.getElementById('btn').addEventListener('click', function (event) {  // JavaScript
    event = event || window.event;
    if (event.stopPropagation){
        // W3C
        event.stopPropagation();
    } else{
        // IE
        event.cancelBubble = true;
    }
}, false);


$('#btn').on('click', function (event) {    // jQuery
    event.stopPropagation();
});



/**
 * 阻止默认行为
 */
document.getElementById('btn').addEventListener('click', function (event) {   //JavaScript
    event = event || window.event;
    if (event.preventDefault){
        // W3C
        event.preventDefault();
    } else{
        // IE
        event.returnValue = false;
    }
}, false);


$('#btn').on('click', function (event) {   // jQuery
    event.preventDefault();
});



/**
 * 限制字符数
 * @param val
 * @param max
 * @returns {String}
 */

function getByteVal(val, max) 
{
	var returnValue = '';
    var byteValLen = 0;
    for (var i = 0; i < val.length; i++) { if (val[i].match(/[^\x00-\xff]/ig) != null) byteValLen += 2;else byteValLen += 1; if (byteValLen > max) break;
        returnValue += val[i];
    }
    return returnValue;

}

//使用
//  <input id="txt" type="text">
/*  $('#txt').on('keyup', function () {
    var val = this.value;
    if (val.replace(/[^\x00-\xff]/g, "**").length > 14) {
        this.value = getByteVal(val, 14);
    }
}); */

