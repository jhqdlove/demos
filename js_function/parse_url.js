
function parse_url_substring(url){
	//http://abc.com:8080/dir/index.html?id=255&m=hello#top

	//解析协议  
    var protocal = url.substr(0, url.indexOf(':'));  
      
    //解析域名和端口  
    var tmp = url.substr(url.indexOf('//') + 2);        
    var domain = tmp.substr(0, tmp.indexOf("/"));         
    var domainName,port;  
    var idx = domain.indexOf(":");  
      
    if(idx>0){  
        domainName = domain.substr(0,idx);  
        port = domain.substr(idx + 1);  
    } else{  
        domainName = domain;  
    }  
      

    tmp = tmp.substr(tmp.indexOf("/") + 1);
    //解析hash
    var hash;
    var idh =  tmp.indexOf("#");
    if(idh>0){
        hash = tmp.substr(idh+1);
        tmp=tmp.substr(0,idh);
    }
    //解析search
    var search; 
    var params={};   
    var ids =  tmp.indexOf("?");
    if(ids>0){
        search = tmp.substr(ids+1);
        tmp=tmp.substr(0,ids);
        var arr = search.split("&");
        for(var i=0;i<arr.length;i++){
            var pair = arr[i].split("=");
            params[pair[0]]=pair[1];
        }
    }
    //解析path
    var path = tmp;   
      
    return {  
        protocal: protocal,  
        domainName:domainName,  
        port: port,  
        path: path,  
        search: search,
        params: params,
        hash: hash 
    }  

}


function parse_url_reg(url){              
    var reg = /^(\w+):\/\/([^\/:]*)([^\/]*)([^\?#]*)([^\#]*)(.*)/  
    var value = reg.exec(url);  
    var protocal=value[1]; 
    var domainName=value[2];  
    var port=value[3]?value[3].substr(1):"";
    var path=value[4];  
    var search =value[5]?value[5].substr(1):"";
    var hash = value[6]?value[6].substr(1):"";
    var params = {};
    if(search){
    var arr = search.split("&");
    for(var i=0;i<arr.length;i++){
            var pair = arr[i].split("=");
            params[pair[0]]=pair[1];
    }
    }   
    var result = {  
        protocal: protocal,  
        domainName:domainName,  
        port: port,  
        path: path,  
        search: search,
        params: params,
        hash: hash 
    }  
    return result;
}   