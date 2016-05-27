/**
 * Created by jh on 2015/10/31.
 */
/*window.requestAnimFrame*/
window.requestAnimFrame = (function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
        function( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element) {
            return window.setTimeout(callback, 1000 / 60);
        };
})();

/*kid类*/
var kid=function(){
    this.alive;
    this.x;
    this.y;
    this.kidWidth;
    this.kidHeight;
    this.kidpic=new Image();
}

kid.prototype.init=function(){
    this.alive=true;
    this.x=0;
    this.kidWidth=winWidth*kidWidthP;
    this.kidHeight=winHeight*kidHeightP;
    this.y=winHeight*(1-kidHeightP);
    this.kidpic.src="images/kid.png";
}

kid.prototype.draw=function(){
    ctx1.drawImage(this.kidpic,this.x,this.y,this.kidWidth,this.kidHeight);
}

/*turkey类*/
var turkey=function(){
    this.alive =[];
    this.x=[];
    this.y=[];
    this.turkeyWidth=0;
    this.turkeyHeight=0;
    this.spd=[];
    this.type=[];
    this.alivepic=new Image();
    this.deadpic=new Image();
}

turkey.prototype.num=30;

turkey.prototype.init=function(){
    for(var i=0;i<this.num;i++){
        this.alive[i]=false;
        this.x[i]=0;
        this.y[i]=0;
        this.spd[i]=Math.random()*0.02+0.005;//[0.005-0.025];
        //console.log(i+" "+this.spd[i]);
        this.type[i]="";
    }
    this.turkeyWidth=winWidth*turkeyWidthP;
    this.turkeyHeight=winHeight*turkeyHeightP;
    this.alivepic.src="images/turkey_alive.png";
    this.deadpic.src="images/turkey_dead.png";
}

turkey.prototype.draw=function(){
    for(var i=0;i<this.num;i++){
        //移动活着的火鸡
        if(this.alive[i]){
            if(this.type[i]=="alive"){
                var pic=this.alivepic;
            }else{
                var pic=this.deadpic;
            }
            // console.log(i+" "+this.spd[i]);
            this.y[i]+=this.spd[i]*10*deltaTime*(1+score/40);
            //console.log(i+" "+this.y[i]);

            ctx2.drawImage(pic,this.x[i],this.y[i],this.turkeyWidth,this.turkeyHeight);
            if(this.y[i]>winHeight*(1-turkeyHeightP)){
                this.alive[i]=false;
            }
        }
    }
}

turkey.prototype.born=function(i){
    this.x[i]=Math.random()*winWidth*(1-turkeyWidthP);
    console.log(i+" born "+this.x[i]);
    this.y[i]=0;

    this.alive[i]=true;
    var ran = Math.random();
    var p=0.3;

    if(score<50){
        p=0.3+score/200;
    }else{
        p=0.6;
    }
    if(ran<0.3){
        this.type[i]="dead";
    }else{
        this.type[i]="alive";
    }

}
/*game loop*/
var winWidth = 0;
var winHeight = 0;

var kidWidthP = 0.1;
var kidHeightP = 0.1;

var turkeyWidthP = 0.1;
var turkeyHeightP = 0.1;

var score=0;

var can1;
var can2;
var ctx1;
var ctx2;

var mx=0;
//var my=0;

var lastTime;
var deltaTime;

var mykid;
var myturkey;


function game(){
    init();
    gameloop();
}

function  init(){
    document.getElementById("start").setAttribute("style","display:none");
    document.getElementById("all_canvas").setAttribute("style","display:block");
    document.getElementById("imgshare").setAttribute("style","display:none");
    document.getElementById("imglogo").setAttribute("style","display:block");
    document.getElementById("result").setAttribute("style","display:none");

    mx = winWidth/2;
    score=0;
    kidWidth = winWidth * 0.1;
    kidHeight = winHeight * 0.1;
    can1 = document.getElementById("canvas1");//kid
    ctx1=can1.getContext('2d');
    if("ontouchend" in document ){
        can1.addEventListener("touchmove",touchMoveFunc, false);
    }else {
        can1.addEventListener('mousemove',onMouseMove,false);
    }
    can2 = document.getElementById("canvas2");//turkey
    ctx2=can2.getContext('2d');
    mykid=new kid();
    mykid.init();
    myturkey=new turkey();
    myturkey.init();

}

function onMouseMove(e){
    if(e.offsetX|| e.layerX){
        mx= e.offsetX==undefined? e.layerX: e.offsetX;
        if(mx<0){
        mx=0;
        }
        if(mx>winWidth){
        mx=winWidth-mykid.kidWidth;
        }
    }
    console.log(mx);
}
//touchmove事件 
function touchMoveFunc(e) {  
    e.preventDefault(); //阻止触摸时浏览器的缩放、滚动条滚动等  
    var touch = e.touches[0];
    mx = touch.pageX-mykid.kidWidth/2;
     if(mx<0) {
         mx = 0;
     }
        if(mx>winWidth){
        mx=winWidth-mykid.kidWidth;
        }
}
function setScreen(){
    winHeight = document.documentElement.clientHeight;
    winWidth = document.documentElement.clientWidth;
    document.body.setAttribute("style","width:"+winWidth+"px;height:"+winHeight+"px");
    document.body.setAttribute("class","back");
    document.getElementById("all_canvas").setAttribute("style","width:"+winWidth+"px;height:"+winHeight+"px");
    document.getElementById("canvas1").setAttribute("width",winWidth);
    document.getElementById("canvas1").setAttribute("height", winHeight);
    document.getElementById("canvas2").setAttribute("width",winWidth);
    document.getElementById("canvas2").setAttribute("height", winHeight);
}

function gameloop(){
    if(!mykid.alive){
        gameover();
        return;
    }
    requestAnimFrame(gameloop);
    var now = Date.now();
    deltaTime = now - lastTime;
    lastTime = now;
//清理画布
    ctx2.clearRect(0,0,winWidth,winHeight);
    ctx1.clearRect(0,0,winWidth,winHeight);
//绘制新图

    isCrash();

    mykid.x=mx;

    mykid.draw();
    turkeyMonitor();
    myturkey.draw();

    document.getElementById("score").innerHTML=score;
}


function turkeyMonitor(){
    var num=0;
    for(var i=0;i<myturkey.num;i++){
        if(myturkey.alive[i]) num++;
    }
    if(num<15){
        sendturkey();
    }

    //console.log(num);
}

function sendturkey(){
    for(var i=0;i<myturkey.num;i++){
        if(!myturkey.alive[i]){
           // console.log(i);
            myturkey.born(i);
            break;
        }
    }
}


function  isCrash(){
    for(var i=0;i<myturkey.num;i++){
        if(myturkey.alive[i]){
            if((myturkey.y[i]+myturkey.turkeyHeight>mykid.y)&&(myturkey.x[i]+myturkey.turkeyWidth>mykid.x)&&(myturkey.x[i]<mykid.x+mykid.kidWidth)){
                if(myturkey.type[i]=="alive"){
                    myturkey.alive[i]=false;
                    score++;
                }else{
                   mykid.alive=false;
                }
            }
        }
    }
}

function  gameover(){
    document.getElementById("all_canvas").setAttribute("style","display:none");
    document.getElementById("result_score").innerHTML=score;
    document.getElementById("result").setAttribute("style","display:block");
}

function IsPC()
{
    var userAgentInfo = navigator.userAgent;
    var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }
    }
    return flag;
}







