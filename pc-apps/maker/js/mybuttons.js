/**
 * Created by vb on 2016/3/9.
 */

var bgc_click= false;

//���ģ���¼�
$(".button").bind("click",function() {
    var _this =$(this);
    var _theone = $("#theone");
    _theone.attr("style","");
    _theone.attr("class","");
    _theone.attr("class",(_this.attr('class')));
    
    //�������ı�
    bgc_click=true;

    setTimeout(function(){
        var _thisone =  $("#theone");
        //�ߵ�
        var width =_thisone.css("width");
        $("#width-span").html( width);
        $("#width").val( width.substr(0, width.length-2));

        var height =_thisone.css("height");
        $("#height-span").html( height);
        $("#height").val(height.substr(0, height.length-2));

        //����
        var colorhex =  rgb2hex(_thisone.css("background-color"));
        $("#bgc").val(colorhex);
        $("#bgc").minicolors("value",colorhex);

        if( _thisone.css("background-image") == "none"){
            $("#bgc1").attr("disabled",true);
            $("#bgc2").attr("disabled",true);
            $("#bgc1").minicolors("value","#fff");
            $("#bgc2").minicolors("value","#fff");
        }else{
            var imghex =  getrgb( _thisone.css("background-image"));
            $("#bgc1").attr("disabled",false);
            $("#bgc2").attr("disabled",false);
            $("#bgc1").val(imghex[1]);
            $("#bgc1").minicolors("value",imghex [1]);
            $("#bgc2").val(imghex[2]);
            $("#bgc2").minicolors("value",imghex [2]);
        }

        //�߿�
        var box_border_hex =  rgb2hex( _thisone.css("border-color").match(/rgb\(.{5,13}\)/)[0]);
        $("#border-color").val(box_border_hex);
        $("#border-color").minicolors("value",box_border_hex);

        var border_radius =_thisone.css("border-radius");
        $("#border-radius-span").html( border_radius);
        $("#border-radius").val( border_radius.substr(0, border_radius.length-2));

        var border_width =_thisone.css("border-width");
        $("#border-color-size-span").html( border_width);
        $("#border-color-size").val(border_width.substr(0, border_width.length-2));
        bgc_click=false;
    },500)
});



$(document).ready( function() {
    //��ɫѡ����ʼ��
    $('.colorbox').each( function() {
        $(this).minicolors({
            control: $(this).attr('data-control') || 'hue',
            defaultValue: $(this).attr('data-defaultValue') || '',
            inline: $(this).attr('data-inline') === 'true',
            letterCase: $(this).attr('data-letterCase') || 'lowercase',
            opacity: $(this).attr('data-opacity'),
            position: $(this).attr('data-position') || 'bottom left',
            change: function() {
                bgcchange($(this));
            },
            theme: 'bootstrap'
        });
    });

    $('.rangebox').each(function() {
        $(this).change(function(){
            rangechange($(this))
        });
    });

    /**
     * ������ɵ�ǰ����
     */
    $("#theone").click(function(){
            $("#css_text").html("");
            //��Ҫ���ɵĴ������
            var getCss = (function(_div,_space){
                var hasOwn = {}.hasOwnProperty;
                return function(){
                    var classes = [];

                    for (var i = 0; i < arguments.length; i++) {
                        var arg = arguments[i];
                        if (!arg) continue;
                        var argType = typeof arg;

                        if (argType === "string") {
                            classes.push(arg + _space + _div.css(arg));
                        } else if (Array.isArray(arg)) {
                            classes.push(getCss.apply(null, arg));
                        }else  if (argType === 'object') {
                            for (var key in arg) {
                                if (hasOwn.call(arg, key) && arg[arg]) {
                                    classes.push(key + _space + _div.css(key));
                                }
                            }
                        }
                    }
                    return classes.join('<br>');
                }
            })($("#theone"),":");


            var css_str = getCss([
                "width","height","background-color","background","border","border-radius","hover","active"
            ]);

            $("#css_text").html(css_str);

        }
    );
});


//��ɫѡ�����ɫ�ı��¼�
function bgcchange(_this){
    if(bgc_click){
        return;
    }
    var this_id = _this.attr("id");
    console.log(" bgcchange"+ this_id);
    switch(this_id){
        case "bgc":
            $("#theone").css("background-color", _this.val());
            break;
        case "bgc1":
            var thisattr =  $("#theone").css("background-image");
            thisattr=thisattr.replace(/rgb\(.{5,13}\)/,_this.val());
            $("#theone").css("background-image", thisattr);
            break;
        case "bgc2":
            var thisattr =  $("#theone").css("background-image");
            var first =  thisattr.indexOf("rgb");
            thisattr=thisattr.substring(0,first+1)+thisattr.substring(first+1).replace(/rgb\(.{5,13}\)/,_this.val());
            $("#theone").css("background-image", thisattr);
            break;
        case "box-shadow":
            var thisattr =  $("#theone").css("box-shadow");
            thisattr=thisattr.replace(/rgb\(.{5,13}\)/,_this.val());
            $("#theone").css("box-shadow", thisattr);
            break;
        case "border-color":
            var thisattr =  $("#theone").css("border-color");
            thisattr=thisattr.replace(/rgb\(.{5,13}\)/,_this.val());
            $("#theone").css("border-color", thisattr);
            break;
    }
};

//��ɫѡ�����ɫ�ı��¼�
function rangechange(_this){
    console.log( _this.attr("id")+"  "+ _this.val());
    var this_id = _this.attr("id");
    switch(this_id){
        case "box-shadow-size":
            $("#theone").css("box-shadow-width", _this.val()+"px");
            $("#box-shadow-size-span").html( _this.val()+"px");
            break;
        case "border-color-size":
            $("#theone").css("border-width", _this.val()+"px");
            $("#border-color-size-span").html( _this.val()+"px");
            break;
        case "border-radius":
            $("#theone").css("border-radius", _this.val()+"px");
            $("#border-radius-span").html( _this.val()+"px");
            break;
        case "width":
            $("#theone").css("width", _this.val()+"px");
            $("#theone").css("margin-left", -_this.val()/2+"px");
            $("#width-span").html( _this.val()+"px");
            break;
        case "height":
            $("#theone").css("height", _this.val()+"px");
            $("#theone").css("margin-top", -_this.val()/2+"px");
            $("#height-span").html( _this.val()+"px");
            break;
    }
};

//ʹ������ƥ����ȡ�����䱳���е�rgb��ɫ  linear-gradient(rgb(92, 191, 42) 5%, rgb(68, 199, 103) 100%)
function getrgb(str){
    //��ȡ��������linear/radial
    var gradient_type=0;
    gradient_type =str.indexOf("linear")==-1?gradient_type:"linear";
    gradient_type =str.indexOf("radial")==-1? gradient_type:"radial";

    var result = [];
    result.push(gradient_type);

    var rgbs=str.match(/rgb\(.{5,13}\)/g);
    switch (rgbs.length){
        case 0:
            console.log("rgbs.length 0");
            break;
        case 1:
            console.log("rgbs.length 1");
            break;
        case 2:
            result.push( rgb2hex(rgbs[0]));
            result.push( rgb2hex(rgbs[1]));
            break;
        default :
            console.log(rgbs);
            break;
    }
    console.log(result);
    return result;

}

//����rgb(92, 191, 42),����#XXXXXX
function rgb2hex(rgb){
    if(rgb.indexOf("rgba")!=-1){
        rgb = rgb.substring(5,rgb.length-1);
    }else{
        rgb = rgb.substring(4,rgb.length-1);
    }

    rgb = rgb.split(', ');
    var pad = function(char){
        if( char.length == 1 ){
            return '0' + char;
        }
        return char;
    };
    var arr = [];
    arr.push( pad(parseInt( rgb[0], 10).toString(16) ));
    arr.push( pad(parseInt( rgb[1], 10).toString(16) ));
    arr.push( pad(parseInt( rgb[2], 10).toString(16) ));
    return '#' + arr.join('').toUpperCase();
}
