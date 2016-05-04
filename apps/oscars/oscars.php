<?php
$array = array(
    array("最佳导演奖","出演了《港脚》中的蔡拉拉，你对自己的导演梦不抛弃不放弃，通过对自己姐夫的死缠烂打、不依不饶，搜集了包括街头暴力、寻找初恋、生离死别等一系列匪夷所思的素材，你用自己有限的智商创造了一部具有无限价值的电影，特此颁发“奥斯卡了”最佳导演奖。"),
   	array("最佳演技奖","出演了《功夫小熊猫》中的熊猫甲，你有着猥琐而又俏皮的笑容，妖娆而又性感的舞姿，你用甜死人不偿命的声音俘获了无数影迷的心。你向我们展示了除了知识以外，舞蹈也是一种力量的真理。希望你以后在选择配音的时候能够更加慎重……"),
    	array("最佳男主角","出演了《水星救援》中的马克 沃伦斯，你凭借出色的想象力和精湛的表演技巧，向观众展现了在绝境中不断创造奇迹的人物形象。人类还未到达水星，你却假装的很完美，敬佩你的职业素养，希望你在妄想的路上越走越远。"),
     array("最佳男三号","出演了《老炮外传》中的二环十三少，以其成熟稳重的形象，在剧中成为了最戏剧性的富二代。虽然你比六爷开的慢一环，但是你精美绝伦的侧颜成功俘获了年轻小粉丝的心。希望你在帅气酷炫的颜值担当的道路上继续奋发。"),
   array("最佳女主角","因为出演了《美人鱼儿》中的林姗姗，凭借着傻白甜“我平胸我骄傲，我为国家省布料”的气场成功碾压大波女神张雨绮，并且面对着逗逼的邓超不笑场，以你浮夸的演技和傻白甜的外貌征服了全国的直男癌患者，你就是当之无愧的女一号！"), 
   array("最佳坑队友奖","出演了《步行街探案》中的唐仁，你用大金牙诠释了你放荡不羁的生活态度，你用打麻将挥洒出自己的价值。虽然在人群中的你很狼狈，但在观众的眼里，你就是我们每一个人！最重要的是你坑队友的能力千变万化、五彩缤纷，让人始料不及，下次开黑的时候我们一定要向你学习！"),   
    array("最佳男配角","出演了《夏洛特别烦恼》中的板凳大爷，以其诙谐幽默的“马什么没呀，马东什么呀，什么冬梅呀”爆红网络，成功洗脑了一批又一批的脑残小青年，引领了一波老年痴呆的潮流，堪称史上最伟大的段子手，特颁发“最佳男配角”，以资鼓励。希望继续创造生命不息，段子不止。"),
 array("最佳煽情奖","出演了《翻滚吧 肿瘤君》中的熊顿，你用身残志坚的行为告诉我们，得肿瘤不可怕，可怕的是没有勾引帅哥的心。你用无辜的眼神、完美的身材、跳戏的幻想刻画了一个在被翻滚的肿瘤折磨的情况下，笑容美好、流泪自然的30岁女人形象。会哭就是生产力，为你点赞！") ,                  
    array("最佳炮灰奖","XXX出演了《右耳》中的黎吧啦，以其精湛的演技和令人喷血的颜值成功的征服了所有主角、配角和群众演员。唯美的ENDING POSE更是你表演中的亮点。希望你在炮灰的路上越走越远，我们爱你。"),
 array("终身成就奖","出演了《小圣归来》中的孙悟空，喜欢你在电影中的本色出演，你用奇葩的颜值告诉观众，孙悟空也是一枚糙汉子。你用偶像剧般的台词把自己和江流儿的基情演绎得淋漓尽致，，解答了世人千年来对你为什么要取经的疑问。虽然你没上春晚，但你永远活在我们的心中。"),     
	);
    $num= $_GET['typeid'];
    $name = $_GET['name'];
?>

<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="keywords" content="七点一刻">
    <meta name="description" content="七点一刻">
    <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no">

    <title><?php echo $name?>在奥斯卡了中荣获<?php echo $array[$num][0]?>，你也得到了提名哦！</title>
    <link href="../css/reset.css" rel="stylesheet">
    <style>
html,body{
    width:100%;
    height:100%;
}
/* 超小设备（手机，小于 768px） */
#body{
    width:100%;
    height:100%;
    background-image:url(bg.jpg);
    background-attachment: fixed;
    background-size:cover;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:flex-end; 
            box-sizing:border-box;
    padding:10px;
            
}

/* 小型设备（平板电脑，768px 起） *//* 中型设备（台式电脑，992px 起） *//* 大型设备（大台式电脑，1200px 起） */
@media (min-width:768px) {
    #body{
        width:768px;
        margin:0 calc((100% - 768px)/2);
    }
}


.gray{
    width:95%;
    margin:0 2.5%;
    height:100%;
    background-color:#eeebeb;
    color:#333;

}

.gray h1{
    font-size: 20px;
    font-weight: 700;
    line-height: 1.5;
    padding-top: 20px;
    margin-bottom: 10px;

}
#graya {
    margin:0 5% 0;
    display: block;
    width: 90%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background-color: red;
    text-decoration: none;
    color: #fff;
    font-size: 16pt;
    border-radius: 6px;
}
</style>
</head>
<body>
    <!-- 微信分享图片：抓取第一张大于300×300的,display不为none的图片-->
    <div  style="width:0px; height:0px; overflow:hidden"><img style="width:400px;height:400px;"src="share.jpg" ></div>
<div id="body">
    <div class="gray">
    <h1><?php echo $name?>在奥斯卡了中荣获<?php echo $array[$num][0]?></h1>
    <div style="border-bottom: 1px solid #d9d9d9;padding-bottom: 3px; font-size: 12px;color: grey;">头条新闻 &nbsp;发布于2016-02-29 23:03:32</div>
        <div style="font-size: 16px;text-indent:25px; line-height: 1.5;">
            <div style="width: 300px; height: 200px; margin: 0 auto 30px; position: relative; text-indent: 0;"><img src="<?php echo $num?>.jpg" alt="" width="300" height="200"></div>
<p><?php echo $name?><?php echo $array[$num][1]?></p>

<p>（来源：娱乐头条）</p>
        </div>
        <p style="color: #868686;margin: 5px 0 20px 30px;font-size: 12px;padding-left: 10px;">注：本文纯属虚构</p>
        <a href="index.html" id="graya" style="margin-bottom: 25px;"><span style="color: rgb(255, 255, 255);">我也要拿奥斯卡了</span></a>          
        <img src="bottom.jpg" style="width:100%;margin:5px 0"/>
    </div>
</div>

</body>
    
</html>