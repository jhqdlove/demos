
var list;

function sendpoem(){
 console.log("sendpoem"); 
    if($("#content").val()&&$("#name").val()&&$("#weixin").val()){    
        
        var str=$("#content").val();
      str= str.replace(new RegExp("\n","g"),"<br>")
        
        console.log(str);
            
        
         $.ajax({
        type:"POST",
        url:"poem.php?type=1&content="+str+"&name="+$("#name").val()+"&weixin="+$("#weixin").val(),
        dataType:"json",
        success:function(data){                
           var obj = data;
           console.log(obj.result);//json name
           $(".cardbody").hide();
            $(".success").show();
           

        },
        error:function(){
           console.log("error_all");
        }
 });
}
}

function addup(obj){
     
    var name = obj.className;
    var num = name.substr(1);
    console.log("addup:"+name+","+num);
     $.ajax({
        type:"POST",
        url:"poem.php?type=2&id="+num+"&timestamp="+new Date().getTime(),
        dataType:"json",
        success:function(data){ 
          
            if(data.result==0){
  
                $("."+name+":first").attr("src","red.png"); 
                var num= $("."+name+":last").html(); 
                num=parseInt(num)+1;
                 $("."+name+":last").html(num);

            }else{
            alert("你已经给TA点过赞了");
            }

        },
        error:function() {
           console.log("error");

     }
 });

}


function getall(){  
    console.log("getall"); 
     $("#alllist > ul").html("");

  //  $("#alllist > ul").hide();

      
         $.ajax({
        type:"GET",
        url:"poem.php?type=1&timestamp="+new Date().getTime() ,
        dataType:"json",
        success:function(data){
            //data=eval("("+data+")");                             
            $.each(data, function(i, n){
                if(i==0){    
                    if( n.result!=0){
                        console.log( n.result);
                        return;
                    }             
               }else{
                     $("#alllist > ul").append("<li><div><p  class=\"licontent\"><img class=\"loading\" src=\"loading0.gif\"><br>"+n.content+"</p><p class=\"liname\">-"+n.name+"-</p><p  class=\"lisup\"><input  class=\"a"+n.id+"\" type=\"image\" src=\"white.png\" onclick=\"addup(this)\"><span class=\"a"+n.id+"\">"+n.sup+"</span></p></div></li>");
                    } 
            });
            
            $(".loading").fadeOut(3000);
        },
        error:function(data){
           console.log("error_all");
            //  console.log(data);

        }
 });
   
          
     //setTimeout("$(\".loading\").hide()",3000);
    //$("#alllist > ul").show();

}

function gettime(){  
    console.log("gettime");
         $("#timelist > ul").html("");
 
    if($("#datepicker").val()){        
         $.ajax({
        type:"GET",
        url:"poem.php?type=2&time="+$("#datepicker").val()+"&timestamp="+new Date().getTime() ,
        dataType:"json",
        success:function(data){
            //data=eval("("+data+")");                             
            $.each(data, function(i, n){
                if(i==0){  
                    if( n.result!=0){
                       console.log( n.result);
                        return;
                    }             
               }else{
                     $("#timelist > ul").append("<li><div><p  class=\"licontent\">"+n.content+"</p><p class=\"liname\">-"+n.name+"-</p><p  class=\"lisup\"><input  class=\"t"+n.id+"\" type=\"image\" src=\"images/white.png\" onclick=\"addup(this)\"><span class=\"t"+n.id+"\">"+n.sup+"</span></p></div></li>");
                    
                    } 
                
                
            });
        },
        error:function(data){
            console.logt("error_all");
            //  console.log(data);

        }
 });

    }else{
         console.log("no time"); 
    }
}


function getname(){ 
        console.log("gettime");
       $("#namelist > ul").html("")
 
    if($("#namepicker").val()){        
         $.ajax({
        type:"GET",
        url:"poem.php?type=3&name="+$("#namepicker").val()+"&timestamp="+new Date().getTime() ,
        dataType:"json",
        success:function(data){
            //data=eval("("+data+")");                             
            $.each(data, function(i, n){
                if(i==0){  
                    if( n.result!=0){
                        console.log( n.result);
                        return;
                    }             
               }else{
                   $("#namelist > ul").append("<li><div><p  class=\"licontent\">"+n.content+"</p><p class=\"liname\">-"+n.name+"-</p><p  class=\"lisup\"><input  class=\"n"+n.id+"\" type=\"image\" src=\"images/white.png\" onclick=\"addup(this)\"><span class=\"n"+n.id+"\">"+n.sup+"</span></p></div></li>");
                    
                    } 
                
                
            });
        },
        error:function(data){
            console.logt("error_all");
            //  console.log(data);

        }
 });

    }else{
         console.log("no time"); 
    }
}

