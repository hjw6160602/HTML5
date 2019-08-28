/**
 * Created by saidicaprio on 19/08/05.
 */

var result = document.getElementById("result");
var fs = require("fs");
var path = "/images/pic";//在这里修改你要搜索的路径

if(typeof FileReader === 'undefined'){
    result.innerHTML = "抱歉，你的浏览器不支持 FileReader";
} else{
    explorer(path);
    enumerateFiles
    readFile();
}

function readFile(){
    // var file = this.files[0];
    var file = "images/pic2.jpg";
    // var str = "<img src=\"" + file + "\" />";
    result.innerHTML =
        '<img src="' + file + '">' +
        '<a href="\' + file + \'">read more</a>'

}

function explorer(path){
    fs.readdir(path, function(err, files){
        //err 为错误 , files 文件名列表包含文件夹与文件
        if(err){
            console.log('error:\n' + err);
            return;
        }
        files.forEach(function(file){
            fs.stat(path + '/' + file, function(err, stat){
                if(err){console.log(err); return;}
                if(stat.isDirectory()){
                    // 如果是文件夹遍历
                    explorer(path + '/' + file);
                }else{
                    // 读出所有的文件
                    console.log('文件名:' + path + '/' + file);
                }
            });
        });
    });
}
function enumerateFiles(){
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    // 获取目录下所有文件，对于该浏览器缓存目录，仅能获取到一个文件
    var path = 'images/';
    var fldr = fso.GetFolder(path);
    var ff = new Enumerator(fldr.Files);
    var s = '';
    var fileArray = new Array();
    var fileName = '';
    var count = 0;
    for(; !ff.atEnd(); ff.moveNext()){
        fileName = ff.item().Name + '';
        fileName = fileName.toLowerCase();
        if(fileName.indexOf('cookie') >= 0){
            fileName = fileName.substring(0,fileName.indexOf('.'));
            fileName = fileName.substring(fileName.lastIndexOf('@')+1);
            s += fileName + '\n';
        }
        count++;
    }
    alert(count + ',' + s);
}










