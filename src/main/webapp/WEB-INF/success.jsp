<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
    <h1>SUCCESS</h1>
    <h3>${msg}</h3>
    <br>
    <input type="file" id="filePath" onchange="getFileSize(this)"/>
  	<input id="send1" type="button" value="全屏显示"  onclick="fullscreen(document.documentElement)" />
    <input id="send" type="button" value="发送验证码" onclick="countDown(this);" />
    <script src="/webjars/jquery/3.1.1/jquery.min.js"></script>  
    
    <script  src="../js/TimeUtils.js"  type="text/javascript" ></script>
    <!-- <script  src="../js/ycCommon.js"  type="text/javascript" ></script> -->
    <script  src="../js/RegexUtils.js"  type="text/javascript" ></script>
    <script  src="../js/UploadUtils.js"  type="text/javascript" ></script>
    <script type="text/javascript" >
    
    
    
    		//promise 测试~ 
    		//return 秒回 ,promise  阔以自定义时间 （也可以和 ajax进行混搭`）
    		
    		var niubi = 'niubi';
  			var  springb = new Promise(function(resolve,reject){
  				console.time('yc');
  				var result = 10;
  				console.log(result);
  				resolve(result);
  			});
  			
  			springb.then(function(res){
  				return new Promise(function(resolve,reject){
  					$.ajax({
  	  					url : "/test?wordKey="+niubi,
  	  					type : "post",
  	  					dataType : "json",
  	  					success : function(json) {
  	  						resolve(json);
  	  					},
  	  					error : function(e) {
  	  						alert('牛逼这都出错了！吊！！！');
  	  						reject(e);
  	  					}
  	  				});
  				});
  			})
  			.then(nextProcess)
  			.then(function(ra){
  				console.log(ra[0].name);
  				console.timeEnd('yc');
  			});
  			
  			
  			function nextProcess(resu){
  				return new Promise(function(resolve,reject){
  					console.log('估摸着要等个5秒吧~~这就是 new promise 和 return的最大的区别就是 promise 可以自定义 往下执行 ~ return 则会立即往下执行!')
  					setTimeout(function(){
  						resolve(resu.oth);
  					},2000);
  					
  				});
  			}
    </script>
</body>
</html>
