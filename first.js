var http=require("http");
var fs=require("fs");
var server=http.createServer(function(req,res){
    if(req.url=="/fang")
    {
        fs.readFile("./Test.html",function(err,data){
            res.writeHead(200,{"Content-Type":"text/html,charset=utf-8"});
            res.end(data);
        });
    }else if(req.url=="/yuan")
    {
        fs.readFile("./haha.html",function(err,data){
            res.writeHead(200,{"Content-Type":"text/html,charset=utf-8"});
            res.end(data);
        });
    }else if(req.url=="/123.jpg")
    {
        fs.readFile("./0.jpg",function(err,data){
            res.writeHead(200,{"Content-Type":"image/jpg"});
            res.end(data);
        });
    }else if(req.url=="/bbbb.css")
    {
        fs.readFile("./bbbb.css",function(err,data){
            res.writeHead(200,{"Content-Type":"text/css,charset=utf-8"});
            res.end(data);
        });
    }else{
        res.writeHead(404,{"Content-Type":"text/css,charset=utf-8"});
        res.end("嘻嘻，没有这个页面。");
    }
});
server.listen(3000,"127.0.0.1");