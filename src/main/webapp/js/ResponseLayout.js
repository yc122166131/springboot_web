/**  检测浏览器/移动端, 响应式布局, 移动端相关 **/




/**
 * 电脑端页面全屏显示
 * <input id="send1" type="button" value="全屏显示"  onclick="fullscreen(document.documentElement)" />
 */
function fullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }
}



/**
 * 强制移动端页面横屏显示
 * $( window ).orientationchange();
 */
/*
  $(window).on( "orientationchange", function( event ) {
    if (event.orientation=='portrait') {
        $('body').css('transform', 'rotate(90deg)');
    } else {
        $('body').css('transform', 'rotate(0deg)');
    }
});

*/


/**
 * 检查浏览器内核
 */
function getInternet(){    
    if(navigator.userAgent.indexOf("MSIE")>0) {    
      return "MSIE";       //IE浏览器  
    }  
 
    if(isFirefox=navigator.userAgent.indexOf("Firefox")>0){    
      return "Firefox";     //Firefox浏览器  
    }  
 
    if(isSafari=navigator.userAgent.indexOf("Safari")>0) {    
      return "Safari";      //Safan浏览器  
    }  

    if(isCamino=navigator.userAgent.indexOf("Camino")>0){    
      return "Camino";   //Camino浏览器  
    }  
    if(isMozilla=navigator.userAgent.indexOf("Gecko/")>0){    
      return "Gecko";    //Gecko浏览器  
    }    

}



/**
 * 检测是否电脑端/移动端
 */
var browser={
	    versions:function(){
	        var u = navigator.userAgent, app = navigator.appVersion;
	        var sUserAgent = navigator.userAgent;
	        return {
		        trident: u.indexOf('Trident') > -1,
		        presto: u.indexOf('Presto') > -1,
		        isChrome: u.indexOf("chrome") > -1,
		        isSafari: !u.indexOf("chrome") > -1 && (/webkit|khtml/).test(u),
		        isSafari3: !u.indexOf("chrome") > -1 && (/webkit|khtml/).test(u) && u.indexOf('webkit/5')!= -1,
		        webKit: u.indexOf('AppleWebKit') > -1,
		        gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,
		        mobile: !!u.match(/AppleWebKit.*Mobile.*/),
		        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
		        android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
		        iPhone: u.indexOf('iPhone') > -1,
		        iPad: u.indexOf('iPad') > -1,
		        iWinPhone: u.indexOf('Windows Phone') > -1
	        };
	    }()
}

if(browser.versions.mobile || browser.versions.iWinPhone){
    window.location = "http:/www.baidu.com/m/";
}




/**
 * 检测是否移动端及浏览器内核
 */
var browser = {
	    versions: function() {
	        var u = navigator.userAgent;
	        return {
	            trident: u.indexOf('Trident') > -1, //IE内核
	            presto: u.indexOf('Presto') > -1, //opera内核
	            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
	            gecko: u.indexOf('Firefox') > -1, //火狐内核Gecko
	            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否移动终端
	            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios
	            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android
	            iPhone: u.indexOf('iPhone') > -1 , //iPhone
	            iPad: u.indexOf('iPad') > -1, //iPad
	            webApp: u.indexOf('Safari') > -1 //Safari
	        };
	    }
}
if (browser.versions.mobile() || browser.versions.ios() || browser.versions.android() ||browser.versions.iPhone() || browser.versions.iPad()) {
    alert('移动端');
}


/**
 * 检测是否是微信浏览器
 */

function isWeiXinClient() {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i)=="micromessenger") {
        return true;
    } else {
        return false;
    }
}


/**
 * 检测浏览器是否支持canvas
 */

function isSupportCanvas() {
    if(document.createElement('canvas').getContext){
        return true;
    }else{
        return false;
    }
}


/**
 * 检测浏览器是否支持svg
 */
function isSupportSVG() {
    var SVG_NS = 'http://www.w3.org/2000/svg';
    return !!document.createElementNS &&!!document.createElementNS(SVG_NS,'svg').createSVGRect;

}



/**
 * 禁止移动端浏览器页面滚动
 * <body ontouchmove="event.preventDefault()" >  HTML实现
 */
document.addEventListener('touchmove', function(event) { //JavaScript实现
    event.preventDefault();
});


