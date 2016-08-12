function particle(){
    /*!
     * 动画模块
     * t 动画执行到当前帧所进过的时间
     * b 起始的值
     * c 总的位移值
     * d 持续时间
     */
    var animate = {
        easeInQuad: function ( t, b, c, d) {
            return c*(t/=d)*t + b;
        },
        easeOutQuad: function ( t, b, c, d) {
            return -c *(t/=d)*(t-2) + b;
        },
        easeInOutQuad: function ( t, b, c, d) {
            if ((t/=d/2) < 1) return c/2*t*t + b;
            return -c/2 * ((--t)*(t-2) - 1) + b;
        },
        easeInCubic: function ( t, b, c, d) {
            return c*(t/=d)*t*t + b;
        },
        easeOutCubic: function ( t, b, c, d) {
            return c*((t=t/d-1)*t*t + 1) + b;
        },
        easeInOutCubic: function ( t, b, c, d) {
            if ((t/=d/2) < 1) return c/2*t*t*t + b;
            return c/2*((t-=2)*t*t + 2) + b;
        },
        easeInQuart: function ( t, b, c, d) {
            return c*(t/=d)*t*t*t + b;
        },
        easeOutQuart: function ( t, b, c, d) {
            return -c * ((t=t/d-1)*t*t*t - 1) + b;
        },
        easeInOutQuart: function ( t, b, c, d) {
            if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
            return -c/2 * ((t-=2)*t*t*t - 2) + b;
        },
        easeInQuint: function ( t, b, c, d) {
            return c*(t/=d)*t*t*t*t + b;
        },
        easeOutQuint: function ( t, b, c, d) {
            return c*((t=t/d-1)*t*t*t*t + 1) + b;
        },
        easeInOutQuint: function ( t, b, c, d) {
            if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
            return c/2*((t-=2)*t*t*t*t + 2) + b;
        },
        easeInSine: function ( t, b, c, d) {
            return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
        },
        easeOutSine: function ( t, b, c, d) {
            return c * Math.sin(t/d * (Math.PI/2)) + b;
        },
        easeInOutSine: function ( t, b, c, d) {
            return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
        },
        easeInExpo: function ( t, b, c, d) {
            return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
        },
        easeOutExpo: function ( t, b, c, d) {
            return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
        },
        easeInOutExpo: function ( t, b, c, d) {
            if (t==0) return b;
            if (t==d) return b+c;
            if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
            return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
        },
        easeInCirc: function ( t, b, c, d) {
            return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
        },
        easeOutCirc: function ( t, b, c, d) {
            return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
        },
        easeInOutCirc: function ( t, b, c, d) {
            if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
            return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
        },
        easeInElastic: function ( t, b, c, d) {
            var s=1.70158;var p=0;var a=c;
            if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
            if (a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
        },
        easeOutElastic: function ( t, b, c, d) {
            var s=1.70158;var p=0;var a=c;
            if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
            if (a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
        },
        easeInOutElastic: function ( t, b, c, d) {
            var s=1.70158;var p=0;var a=c;
            if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
            if (a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
            return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
        },
        easeInBack: function ( t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            return c*(t/=d)*t*((s+1)*t - s) + b;
        },
        easeOutBack: function ( t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
        },
        easeInOutBack: function ( t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
            return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
        },
        easeOutBounce: function ( t, b, c, d) {
            if ((t/=d) < (1/2.75)) {
                return c*(7.5625*t*t) + b;
            } else if (t < (2/2.75)) {
                return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
            } else if (t < (2.5/2.75)) {
                return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
            } else {
                return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
            }
        },

        easeInBounce: function ( t, b, c, d) {
            return c - animate.easeOutBounce ( d-t, 0, c, d) + b;
        },
        easeInOutBounce: function ( t, b, c, d) {
            if (t < d/2) return animate.easeInBounce (x, t*2, 0, c, d) * .5 + b;
            return animate.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
        }
    }

    /*需要接收的参数*/
    var defalt = {
        canvasId:"",//canvas 节点的id
        imgPath:"",//图片路径
        rgba:[],//颜色阈值
        offsetDist:10,//粒子位置偏移
        animate:"",//动画函数
        orginPos:[],//动画起始点
        duration:100,//动画持续时间
        delay:10//动画起始时间浮动值
    }

    var createparticle

    /**/
    var canvas = {},
        image = {};
    var particles = [];//目标位置，颜色，
    //获取canvas元素
    canvas.obj = document.getElementById('myCanvas');

    if(canvas.obj.getContext) {

        //获取渲染上下文
        canvas.ctx = canvas.obj.getContext('2d');

        //设置画布大小为屏幕宽高
        canvas.w = canvas.obj.width = document.body.clientWidth;
        canvas.h = canvas.obj.height = document.body.clientHeight;

        //新建一个image对象
        var img = new Image();

        //图像加载完后
        img.onload = function() {
            //把图像信息保存在image里面
            image.obj = img;
            image.w = img.width;
            image.h = img.height;
            image.x = parseInt(canvas.w/2 - image.w/2);//x轴坐标
            image.y = 200;//y轴坐标

            canvas.ctx.drawImage(image.obj,image.x,image.y,image.w,image.h);
            image.imageData = canvas.ctx.getImageData(image.x,image.y,image.w,image.h);

            //计算出符合要求的像素
            calculate();

            //计算后绘到画布上
            draw();
        };

        //设置image的source
        img.src = 'test.png';
    }


    //计算并保存坐标
    function calculate() {
        var len = image.imageData.length;
        //只保存150行，100列的像素值
        var cols = 150,
            rows = 200;
        //设成150行，100列后每个单元的宽高
        var s_width = parseInt(image.w/cols),
            s_height = parseInt(image.h/rows);
        var pos = 0; //数组中的位置
        var data = image.imageData.data;  //像素值数组
        for(var i = 0; i < cols; i++) {
            for(var j = 0; j < rows; j++) {
                //计算(i,j)在数组中的R的坐标值
                pos = [(j*s_height - 1)*image.w + (i*s_width - 1)]*4 + 1;
                //判断R值是否符合要求
                if(data[pos] > 250)	{
                    var particle = {
                        //x,y值都随机一下
                        x: image.x + i*s_width + (Math.random() - 0.5)*20,//目标x
                        y: image.y + j*s_height + (Math.random() - 0.5)*20,//目标y
                        x0:500,//起始x
                        y0:500,//起始y
                        currTime:0,//当前时间
                        delayTime:0,//延迟等待时间
                        delay:Math.floor(Math.random()*50),//延迟时间
                        duration:500,//动画时间
                        fillStyle: 'white'
                    }
                    //符合要求的粒子保存到数组里
                    particles.push(particle);
                }
            }
        }
    }


    var requestId;
    //绘图案
    function draw() {

        var len = particles.length;
        if(particles[len - 1].duration <= particles[len - 1].currTime) {
            // 停止动画
            console.log("cancel");
            cancelAnimationFrame(requestId);
            return;
        }
        //清空画布
        canvas.ctx.clearRect(0,0,canvas.w,canvas.h);


        var cur_particle = null;
        var cur_x,cur_y;
        var cur_time = 0,duration = 0;

        for(var i = 0; i < len; i++) {
            //当前粒子
            cur_particle = particles[i];
            // 如果单位时间超过delay,开始
            if(cur_particle.delayTime++> cur_particle.delay) {
                // 设置画布的填充色
                canvas.ctx.fillStyle = cur_particle.fillStyle;
                //获取当前的time和持续时间和延时
                cur_time = cur_particle.currTime;
                duration = cur_particle.duration;

                // 如果最后一个粒子动画也执行完了则停止动画并return
                if(cur_time < duration){
                    // 当前粒子正在运动
                    // 计算出此刻x的坐标
                    cur_x = animate.easeOutElastic(cur_time, cur_particle.x0, cur_particle.x - cur_particle.x0, duration);
                    // 计算此刻y的坐标
                    cur_y = animate.easeOutElastic(cur_time, cur_particle.y0, cur_particle.y - cur_particle.y0, duration);
                    // 绘制到画布上
                    canvas.ctx.fillRect(cur_x,cur_y,1,1);
                    //当前时间++
                    cur_particle.currTime++;
                } else {
                    // 终点绘制在画布
                    canvas.ctx.fillRect(cur_particle.x,cur_particle.y,1,1);
                }
            }

        }
        requestId = requestAnimationFrame(draw);
    }





}
