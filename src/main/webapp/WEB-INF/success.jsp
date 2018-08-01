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
    
    <script  src="../js/ResponseLayout.js"  type="text/javascript" ></script>
    <script  src="../js/TimeUtils.js"  type="text/javascript" ></script>
    <script  src="../js/ycCommon.js"  type="text/javascript" ></script>
    <script  src="../js/RegexUtils.js"  type="text/javascript" ></script>
    <script  src="../js/UploadUtils.js"  type="text/javascript" ></script>
    <script type="text/javascript" >
  	
    </script>
</body>
</html>
