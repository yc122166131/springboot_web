/**       图片 音频 视频等 相关  **/

/**
 * 自动修复破坏的图像
 */
$("img").on('error',function(){
	if(!$(this).hasClass('broken-img')){
		$(this).prop('src','img/broken.png').addClass('broken-img');
	}
});

/**
 * 判断图像是否加载完毕
 */
$('img').load(function(){
	console.log('图片加载已经完毕');
});


