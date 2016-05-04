<?php 
$num= $_GET['num'];
$name = $_GET['name'];
$s = new showChinaText($num,$name);  

/* 
param $image   图象资源 
param size     字体大小 
param angle    字体输出角度 
param showX    输出位置x坐标 
param showY    输出位置y坐标 
param font    字体文件位置 
param content 要在图片里显示的内容 
*/  
class showChinaText {  
    var $font = '../fonts/simsun.ttf';   
    var $size = 18; 
    
    var $num = '1';       

    var $name = '无名氏';  
    var $mydate='2016年2月14日';
      var $number= 'JH430404-20';
     var $picname = 'myjiehun';  
    var $angle1 = 0;  
    var $showX = 0;  
    var $showY = 0; 
    var $showX1 = 0;  
    var $showY1 = 0; 
    var $showX2 = 0;  
    var $showY2 = 0;  

      
    function showChinaText($num='',$name='') {  
        $this->name = isset ( $name ) ?$name : $this->name; 
         $this->num = isset ( $num ) ?$num : $this->num; 
        
        switch($this->num){
        	case 1:
        		$this->showX0 = 200;
        		$this->showY0 = 87;
        		$this->showX = 205;
        		$this->showY = 180;
        		$this->showX1 = 230;
        		$this->showY1 = 275;
        		break;
            case 2:
                $this->picname = "mylihun";
            	$this->showX0 = 200;
        		$this->showY0 = 87;
        		$this->showX = 205;
        		$this->showY = 180;
        		$this->showX1 = 225;
        		$this->showY1 = 275;
        	    break;
        	case 3:
             $this->picname = "mydanshen";
             $this->number="JH1111";
              $this->size = 12;
            	$this->showX0 = 350;
        		$this->showY0 = 150;
        		$this->showX = 358;
        		$this->showY = 275;
        		$this->showX1 = 395;
        		$this->showY1 = 290;
        		break;
        	case 4:
        	    $this->showX0 = 50;
        		$this->showY0 = 300;
        		$this->showX = 50;
        		$this->showY = 350;
        		$this->showX1 = 300;
        		$this->showY1 = 650;
        		break;
        	case 5:
        		$this->showX0 = 50;
        		$this->showY0 = 50;
        		$this->showX = 50;
        		$this->showY = 100;
        		$this->showX1 = 400;
        		$this->showY1 = 400;
        		break;
        	case 6:
        		$this->showX0 = 50;
        		$this->showY0 = 400;
        		$this->showX = 50;
        		$this->showY = 450;
        		$this->showX1 = 400;
        		$this->showY1 = 850;
        		break;
        	default:
        		break;
        }
        
        $this->show ();  
    } 
    
    
    function createText($instring) {  
        $outstring = "";  
        $max = strlen ( $instring );  
        for($i = 0; $i < $max; $i ++) {  
            $h = ord ( $instring [$i] );  
            if ($h >= 160 && $i < $max - 1) {  
                $outstring .= substr ( $instring, $i, 2 );  
                $i ++;  
            } else {  
                $outstring .= $instring [$i];  
            }  
        }  
        return $outstring;  
    } 
    
    function msubText($instring,$start,$len){
        $strlen = $start +$len;
         for($i = 0; $i < $strlen; $i++) {  
            $h = ord ( $instring[$i] );             
        if($h < 192) {
            $outstring .= $instring [$i];  
        } elseif($h <224) {
            $outstring .= substr ( $instring, $i, 2 );  
            $i += 1;
        } else {
           $outstring .= substr ( $instring, $i, 3 );  
            $i += 2;
        }
        }  
        return $outstring;
    }

    
    function show() {  
        //输出头内容  
        header( "content-type:image/png");  
        //建立图象  
        //$image = imagecreate(400,300);  
        $image = imagecreatefromjpeg ( $this->picname.".jpg" ); //这里的图片，换成你的图片路径  
        //定义颜色  
        $red = ImageColorAllocate ( $image, 255, 0, 0 );  
        $white = ImageColorAllocate ( $image, 255, 255, 255 );  
        $black = ImageColorAllocate ( $image, 0, 0, 0 );  
         $gray= ImageColorAllocate ( $image, 100, 100, 100 );  
        //填充颜色  
        //ImageFilledRectangle($image,0,0,200,200,$red);  
        //显示文字,写入文字 
         $head = $this->name;
        imagettftext ( $image, $this->size, $this->angle0, $this->showX0, $this->showY0,  $gray, $this->font, $head ); 
        
          $date =  $this->mydate;
        imagettftext ( $image, $this->size, $this->angle0, $this->showX, $this->showY, $gray, $this->font, $date ); 
        
          $number = $this->number;
        imagettftext ( $image, $this->size, $this->angle0, $this->showX1, $this->showY1, $gray, $this->font, $number ); 
        

        //ImageString($image,5,50,10,$txt,$white);  
        //显示图形  
        imagejpeg ( $image );  
        // imagegif ( $image, "a2.jpg" );  
        ImageDestroy ( $image );  
    }  
}  
?> 
