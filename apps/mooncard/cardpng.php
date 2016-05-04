<?php  
$num = $_GET['num'];
$you = $_GET['you'];
$text = $_GET['text'];
$me = $_GET['me'];
$s = new showChinaText($num,$you,$text,$me);  
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
    var $font = '../fonts/lhxs.ttf';   
    var $size = 20; 
    
    var $num = '0';  
    
    var $head = 'Dear You';  
    var $angle0 = 0;  
    var $showX0 = 100;  
    var $showY0 = 150;  
      
    
    var $text = 'content';  
    var $angle = 0; 
    var $line = 40;  
    var $showX = 150;  
    var $showY = 200; 
      

    var $name = 'From Me';  
    var $angle1 = 0;  
    var $showX1 = 350;  
    var $showY1 = 300;  
      

      
    function showChinaText($num,$head='',$showText = '',$name='') {  
        $this->num = isset ( $num) ? $num : $this->num;
        $this->head = isset ( $head ) ? $head : $this->head;  
        $this->text = isset ( $showText ) ? '      '.$showText : $this->text;
        $this->name = isset ( $name ) ? '来自    '.$name : $this->name; 
        
        switch($this->num){
        	case 1:
        		$this->showX0 = 50;
        		$this->showY0 = 200;
        		$this->line = 36;
        		$this->showX = 50;
        		$this->showY = 250;
        		$this->showX1 = 400;
        		$this->showY1 = 550;
        		break;
            case 2:
            	$this->showX0 = 50;
            	$this->showY0 = 50;
            	$this->line = 36;
            	$this->showX = 50;
            	$this->showY = 100;
            	$this->showX1 = 400;
            	$this->showY1 = 500;
        	    break;
        	case 3:
        	    $this->showX0 = 50;
        		$this->showY0 = 250;
        		$this->line = 36;
        		$this->showX = 50;
        		$this->showY = 300;
        		$this->showX1 = 400;
        		$this->showY1 = 650;
        		break;
        	case 4:
        	    $this->showX0 = 50;
        		$this->showY0 = 300;
        		$this->line = 36;
        		$this->showX = 50;
        		$this->showY = 350;
        		$this->showX1 = 300;
        		$this->showY1 = 650;
        		break;
        	case 5:
        		$this->showX0 = 50;
        		$this->showY0 = 50;
        		$this->line = 36;
        		$this->showX = 50;
        		$this->showY = 100;
        		$this->showX1 = 400;
        		$this->showY1 = 400;
        		break;
        	case 6:
        		$this->showX0 = 50;
        		$this->showY0 = 400;
        		$this->line = 36;
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
        $image = imagecreatefromjpeg ( "moon". $this->num.".jpg" ); //这里的图片，换成你的图片路径
        //定义颜色  
        $red = ImageColorAllocate ( $image, 255, 0, 0 );  
        $white = ImageColorAllocate ( $image, 255, 255, 255 );  
        $black = ImageColorAllocate ( $image, 0, 0, 0 );  
        //填充颜色  
        //ImageFilledRectangle($image,0,0,200,200,$red);  
        //显示文字,写入文字 
        $head = $this->createText ( $this->head );  
        imagettftext ( $image, $this->size, $this->angle0, $this->showX0, $this->showY0, $black, $this->font, $head ); 
        
     
        $txtlen = strlen($this->text); 
        $count = ceil($txtlen/$this->line);      
        
          for($i = 0; $i< $count; $i++) {  
          $c=$this->msubText($this->text,0,$i*$this->line);
          $c1=$this->msubText($this->text,0,($i+1)*$this->line);  
          imagettftext ( $image, $this->size, $this->angle, $this->showX, $this->showY+35*$i, $black, $this->font,substr($c1,strlen($c),strlen($c1)-strlen($c)));
          }
    
        $name = $this->createText ( $this->name );  
        imagettftext ( $image, $this->size, $this->angle1, $this->showX1-strlen($this->name)*10, $this->showY+$count*35+5, $black, $this->font, $name );  

        //ImageString($image,5,50,10,$txt,$white);  
        //显示图形  
        imagejpeg ( $image );  
        // imagegif ( $image, "a2.jpg" );  
        ImageDestroy ( $image );  
    }  
}  
?> 


