<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
        <meta name="description" content="中秋节，贺卡">
    <meta name="keywords" content="中秋节，贺卡">
    <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no">
  <title>给你的一份中秋祝福</title>    
    
    <style>
          html,body{
            width:100%;
            height:100%;
        }
        /* 超小设备（手机，小于 768px） */
        #body{
            width:100%;
            height:100%;
            position:relative;
            top:0;
            left:0;
            background-color:#fff;
        }
        @media (min-width:768px) {
            #body{
                width:768px;
                margin:0 calc((100% - 768px)/2);
                font-size:14px;
            }
        }

        
        img{
            width:80%;}
        p{
            text-align:center;
}
        input{
            width:60%;
            font-size: 2.5em;
            border:1px solid  #85d2c1;
            background-color:white;
        }
        




    </style>
</head>
<body> 
    <div id="body">   
<p>    
 
<?php  
$num = $_GET['num'];
$you = $_GET['you'];
$text = $_GET['text'];
$me = $_GET['me'];
$cardsrc = "cardpng.php?num=".$num."&you=".$you."&text=".$text."&me=".$me;
$img='<img src="'.$cardsrc.'">';
echo  $img
?>  
    </p>
    <p> <a href="makecard.html"><input type="button" value="点击这里，制作贺卡" /></a> </p> 
      <p> <a href="http://mp.weixin.qq.com/s?__biz=MzAwMTMxODA4OQ==&mid=212577420&idx=1&sn=41490e6ed18e4f756f3621f6cd919bef#rd"><input type="button" value="关注我们" /></a> </p> 

    </div>
</body>
</html>