
//===============上传相关======================

/**
 * 获取上传的文件的大小
 * @param obj
 * @returns {String}
 */
function getFileSize(obj){
		
		alert(obj);
        var filesize;
        if(obj.files){
            filesize = obj.files[0].size;
        }else{
            try{
                var path,fso;
                path = document.getElementById('filePath').value;
                fso = new ActiveXObject("Scripting.FileSystemObject");
                filesize = fso.GetFile(path).size;
            }
            catch(e){
                // 在IE9及低版本浏览器，如果不容许ActiveX控件与页面交互，点击了否，就无法获取size
                console.log(e.message); // Automation 服务器不能创建对象
                filesize = 'error'; // 无法获取
            }
        }
     	console.log(change(filesize));
        return filesize;
    }
    
    
	
/**
 * 限制上传文件类型
 * 
 * 高版本浏览器 <input type="file" name="filePath" accept=".jpg,.jpeg,.doc,.docxs,.pdf"/> 限制格式
 * 			<input type="file" class="file" value="上传" accept="image/*">  限制图片
 * 
 * 低版本浏览器 <input type="file" id="filePath" onchange="limitTypes()">  需要下面的function
 * @param filePath
 * @param acceptFormat
 * @returns {Boolean}
 */
function checkFormat(filePath,acceptFormat){
    var resultBool= false,
        ex = filePath.substring(filePath.lastIndexOf('.') + 1);
        ex = ex.toLowerCase();

    for(var i = 0; i < acceptFormat.length; i++){

    	if(acceptFormat[i] == ex){
            resultBool = true;
            break;
        }
    }
    return resultBool;

};


function limitTypes(){
    var obj = document.getElementById('filePath');
    var path = obj.value;
    var result = checkFormat(path,['bmp','jpg','jpeg','png']);
    if(!result){
        alert('上传类型错误，请重新上传');
        obj.value = '';
    }

}



/**
 * 字节B转化成KB,MB,GB
 * @param limit
 * @returns
 */
function change(limit){
    var size = "";
    if(limit < 0.1 * 1024){                            //小于0.1KB，则转化成B
        size = limit.toFixed(2) + "B"
    }else if(limit < 0.1 * 1024 * 1024){            //小于0.1MB，则转化成KB
        size = (limit/1024).toFixed(2) + "KB"
    }else if(limit < 0.1 * 1024 * 1024 * 1024){        //小于0.1GB，则转化成MB
        size = (limit/(1024 * 1024)).toFixed(2) + "MB"
    }else{                                            //其他转化成GB
        size = (limit/(1024 * 1024 * 1024)).toFixed(2) + "GB"
    }

    var sizeStr = size + "";                        //转成字符串
    var index = sizeStr.indexOf(".");                    //获取小数点处的索引
    var dou = sizeStr.substr(index + 1 ,2)            //获取小数点后两位的值
    if(dou == "00"){                                //判断后两位是否为00，如果是则删除00                
        return sizeStr.substring(0, index) + sizeStr.substr(index + 3, 2)
    }
    return size;
}
    





  