/**
 * Created by jh on 2015/12/1.
 */

var level;

var larray = new Array("上海","重庆","天津",
		"河北","山西","吉林","辽宁",
		"黑龙江","陕西","甘肃","青海",
		"山东","福建","浙江","台湾",
		"河南","湖北","湖南","江西",
		"江苏","安徽","广东","海南",
		"四川","贵州","云南省","西藏",
		"广西","内蒙古","新疆","宁夏","香港");


var pic12306 = function() {
    this.alive = [];
    this.all=[["安南","annan",2],["奥巴马","aobama",4],["阿尔扎","azhaer",2],["白", "bai",3],
        ["草泥马","caonima",2],["陈冠希","chenguanxi", 1],["陈赫","chenhe", 5],["尔康","erkang",4],
        ["exo", "exo",6],["范伟","fanwei", 3],["好男人","haonanren",1],["姐姐","jiejie",6],
        ["刘翔","liuxiang", 4 ],[ "马","ma",3],[ "美", "mei", 3],["诺维茨基","nuoweiciji", 4],
        [ "热狗","regou",3],["人形狗","renxinggou",4],["如花","ruhua", 3],["三胖","sanpang",3],
        ["少女时代","snsd", 7],["王大陆","wangdalu",7],["汪峰","wangfeng",2],["王尼玛","wangnima",6],
        ["王祖蓝","wangzulan", 2],["相声演员","xiangshengyanyuan",2],["杨臣刚","yangchengang",3],["姚明","yaoming",4],
        ["张翰","zhanghan",5],["真货","zhenhuo",1] ,["周杰伦","zhoujielun",6] , ["周星驰","zhouxingchi",2]
    ];
}

pic12306.prototype.number = 32;

pic12306.prototype.init = function() {
    for (var i = 0; i < this.number; i++) {
        this.alive[i] = i;
    }
}

var items;
var picr;
var right=0;
var starttime;
var leveltime;
var currenttime;
var dtime=15;
var alive;

function game(){
    init();
}

function init(){
	$("#bg").removeClass("back");  
  	$("#bg").addClass("backwhite");  
    $("#start").hide();
    $("#result").hide();
    $("#attention").hide();
    $("#game").show();
    starttime=getTime();
    currenttime=starttime;
    leveltime=starttime;
    level=0;
    alive=true;
    timer();
    items=new pic12306();
    items.init();  
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
    $("#attention").hide();
    $("#game").hide();
	$("#bg").removeClass("backwhite");  
  	$("#bg").addClass("back");
  	
  	var thissrc = "images/game12306/share"+(Math.floor(level/8)+1)+".png";
	$("#resultimg").attr('src',thissrc);
    var tt=currenttime-starttime;
    $("#pnum").html(level+"个");
    $("#snum").html(Math.floor(tt/1000));
    $("#end").show();
    $("#result").show();
}

function levelsubmit(){
	if(($(".right.checked").length==picr)&&($(".fault.checked").length==0)){
		level++;
		nextLevel();
	}else{
		alive=false;
	}
}


function nextLevel(){
    if(!alive){
        return;
    }
    
    if(level==32){
    	alive=false;
    }
    leveltime = getTime();
    
    if(level<31){
    	 $("#level span").html(level+1);
    }else{
    	$("#level span").html("boss");
    }
   
    $("#des").html(larray[level]);
    console.log("nextLevel");
    
    var gidex = Math.floor(Math.random()*(items.number-level));
    console.log(gidex);
    console.log(items.alive[0]);
    var thisgroup = items["alive"][gidex];
    console.log(thisgroup);
    items["alive"][gidex] = items["alive"][items.number-level-1];
    items["alive"][items.number-level-1] = thisgroup;
   
    //var thisgroup=level;
    
    var picname = items["all"][thisgroup][1];
    picr = items["all"][thisgroup][2];
    
    $("#question span").html(items["all"][thisgroup][0]);
    
    var temp = [1,2,3,4,5,6,7,8];
    var tempnum=8;
        
    for(var i=0;i<picr;i++){    	
    	var idex = Math.floor(Math.random()*tempnum);
    	var itemp = temp[idex];
    	temp[idex]=temp[tempnum-1];
    	temp[tempnum-1]= itemp;
    	tempnum--;
    }
    
    
    for(var i=0;i<8-picr;i++){
    	var thisid = "img"+temp[i];
    	var thatid = "imgc"+temp[i];
    	var thissrc ="images/"+picname+"/"+picname+"_f"+(i+1)+".png";
      	$("#"+thisid).attr('src',thissrc);  
      	$("#"+thatid).removeClass("fault");   
      	$("#"+thatid).removeClass("right"); 
      	$("#"+thatid).removeClass("checked"); 
      	$("#"+thatid).addClass("fault");        
    }
    for(var i=8-picr;i<8;i++){
    	var thisid = "img"+temp[i];
    	var thatid = "imgc"+temp[i];
    	var thissrc ="images/"+picname+"/"+picname+"_t"+(8-i)+".png";
   	    $("#"+thisid).attr('src',thissrc); 
      	$("#"+thatid).removeClass("fault");   
      	$("#"+thatid).removeClass("right");  
      	$("#"+thatid).removeClass("checked");  
      	$("#"+thatid).addClass("right");  
   	    
    }    
    
}

function showmiji(){
    $("#start").hide();
    $("#result").hide();
    $("#game").hide();
    $("#attention").show();

}



