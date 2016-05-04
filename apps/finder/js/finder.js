/**
 * Created by jh on 2015/12/1.
 */

var level=0;
var colornum = 8;
var colors=new Array("red","yellow","green","blue","gray","purple","brown","black");

var commentnum = 4;
var comments=new Array("真爱无敌","王太太就是你","我是美丽又机智的王太太","我是\"大陆\"三世情人");

var numbersnum = 9;
var numbers=new Array(2,4,5,6,7,8,9,10,11);
var starttime;
var leveltime;
var currenttime;
var dtime=15;

var alive;
function game(){
    init();

}
function init(){
    $("#start").hide();
    $("#end").hide();
    $("#game").show();
    starttime=getTime();
    currenttime=starttime;
    leveltime=starttime;
    level=0;
    alive=true;
    timer();
    nextLevel();
}

function timer(){
    currenttime=getTime();
    var thistime=dtime-Math.floor((currenttime-leveltime)/1000);
    $("#time span").html(thistime);
    if(thistime<=0){
        alive=false;
    }
    if(alive){
        setTimeout('timer()',500);
    }else{
        gameover();
    }
}

function gameover(){
    $("#start").hide();
    $("#rank").hide();
    $("#game").hide();
    $("#result").hide();
    $("#upload").hide();
    
    $("#levelnum").html(level);
    $("#timenum").html(Math.floor((currenttime-starttime)/1000));
    $("#comment").html(comments[Math.floor(Math.random()*commentnum)]);
    $("#end").show();
            $("#result").slideDown("slow");
    
}

function getform(){
 $("#result").hide();
 $("#upload").slideDown("slow");
}



function upload(){


     $("#list").html("");
    var tt=currenttime-starttime;

    if($("#name").val()&&$("#phone").val()){
        alert("上传暂不可用");
    $("#result").hide();
    $("#upload").hide();
    $("#rank").show(); 
    $("#rank").slideDown("slow");
    }else{
        alert("信息没有填写哦");
    }
}


function nextLevel(){
    if(!alive){
        return;
    }
    leveltime = getTime();
    $("#level span").html(level);
    console.log("nextLevel");
    
    var colorx=Math.floor(Math.random()*colornum);
    var backcolor =colors[colorx];
    
     var picx=1;
    if(level<numbersnum){
        picx=1;   
        $("#round span").html("第一轮");
    }else if(level<numbersnum*2){
        $("#round span").html("第二轮");
        picx=2;
    }else if(level<numbersnum*3){
        $("#round span").html("第三轮");
        picx=3;
    }else{
        $("#round span").html("第四轮");
        picx=Math.floor(Math.random()*3)+1;
    }
    
    var len=0; 
    if(level<numbersnum*3){
        len= numbers[level%numbersnum];
    }else{
        len = numbers[Math.floor(Math.random()*numbersnum)];
    }
    var rightx = Math.floor(Math.random()*len);
    var righty = Math.floor(Math.random()*len);
    
    var x=100/len;
    
    console.log(colorx+" "+len+" "+rightx+" "+righty);
    
    $("#main").empty();
    
    for(var i=0;i<len;i++){
        for(var j=0;j<len;j++){
            if(i==rightx&&j==righty){
                $("#main").append("<div class=\"item\"><img class=\"right\" src=\"images/"+picx+"_right.png\"/></div>");
                $(".right").click(function(){
                    if(!alive){
                        return;
                    }
                    level++;
                    nextLevel();
                });
            }else{
                $("#main").append("<div class=\"item\"><img class=\"fault pic\" src=\"images/"+picx+"_fault.png\"/></div>");
            }
        }
    }
    
    var w = x-2; 

    
    $(".item").css( {"background-color":backcolor,"width":w+"%","height":w+"%","margin":"1%"});
    $(".fault").click(function(){
        alive=false;
    });

}



