
/**
 * 验证码倒计时
 * <input id="send" type="button" value="发送验证码" onclick="countDown(this);" />
 */
var times = 60, // 时间设置60秒
timer = null;
function countDown(send) {
	 // 计时开始
	 timer = setInterval(function () {
		 times--;
		 if (times <= 0) {
			 send.value = '发送验证码';
			 clearInterval(timer);
			 send.disabled = false;
			 times = 60;
		 } else {
			 send.value = times + '秒后重试';
			 send.disabled = true;
		 }
	 }, 1000);
}


/**
 * 倒计时跳转
 * <div id="showtimes"></div>
 */
var t = 10;  //设置倒计时秒数  
function showTime(){  
    t -= 1;  
    document.getElementById('showtimes').innerHTML= t;  
    if(t==0){  
        location.href='error404.jsp';  
    }  
    //每秒执行一次 showTime()  
    setTimeout("showTime()",1000);  
}  


/**
 * 时间戳、毫秒格式化
 * var nowDate = new Date(1442978789184);
 * alert(formatDate(nowDate));
 * @param now  {Date类型}
 * @returns {String}
 */
function formatDate(now) {
    var y = now.getFullYear();
    var m = now.getMonth() + 1; // 注意 JavaScript 月份+1
    var d = now.getDate();
    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();
    return y + "-" + m + "-" + d + " " + h + ":" + m + ":" + s;
}


/**
 * 时间格式化
 * calculateDate()
 * 2018年8月1日 15时16分48秒   星期三
 */
var calculateDate = function(){
    var date = new Date();
    var weeks = ["日","一","二","三","四","五","六"];
    return date.getFullYear()+"年"+(date.getMonth()+1)+"月"+
    date.getDate()+"日 " + date.getHours()+"时"+date.getMinutes()+"分"+date.getSeconds()+"秒"+ "   星期"+weeks[date.getDay()];
}


/**
 * 获取当前时间戳 
 * @returns
 */
function getTimeStamp(){
	return new Date().getTime();
}










