<?php 
$num= $_GET['num'];
$name = $_GET['name'];
$school = $_GET['school'];

$s = new showChinaText($num,$name,$school);  

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
    var $size = 12; 
    
    var $num = '4'; 
    var $name = '我';     
    var $school='加里敦大学';
    var $result = array(array(99,0,0,99),
array(100,25,38,37),
array(101,20,38,43),
array(19,47,67,85),
array(150,38,50,62),
array(200,78,56,66),
array(250,250,0,0),
array(250,50,145,55),
array(249,59,98,92),
array(299,250,38,2),
array(300,127,88,85),
array(333,142,98,93),
array(380,164,99,117),
array(426,198,98,130),
array(424,160,115,149),
array(500,193,139,108),
array(520,197,216,107),
array(525,189,203,133),
array(561,206,192,163),
array(666,233,210,223),
array(617,213,234,170),
array(644,222,222,200),
array(710,250,250,210),
array(425,173,105,147),
array(534,198,202,134),
array(575,206,211,158),
array(582,197,204,181),
array(599,212,209,178),
array(603,211,203,189),
array(609,230,211,168),
array(622,218,206,176),
array(637,224,222,191),
array(655,236,227,182)                       
);

    var $angle = 0;  
    var $showX = 180;
    
    var $showY0 = 80;   
    var $showY1 = 105;  
    var $showY2 = 130;  
    
    var $showX1 = 220;
    
    var $showY3 = 196;   
    var $showY4 = 219;  
    var $showY5 = 242; 
    var $showY6 = 267; 
      
    function showChinaText($num='',$name='',$school='') {  
        $this->name = isset ( $name ) ?$name : $this->name; 
        $this->num = isset ( $num ) ?$num : $this->num; 
        $this->school = isset ( $school ) ?$school : $this->school; 
        
        $this->show ();  
    } 
    
    
    function show() {  
        //输出头内容  
        header( "content-type:image/png");  
        //建立图象  
        //$image = imagecreate(400,300);  
        $image = imagecreatefrompng ( "cetresult.png" ); //这里的图片，换成你的图片路径
        
        //定义颜色  
        $red = ImageColorAllocate ( $image, 255, 0, 0 );  
        $white = ImageColorAllocate ( $image, 255, 255, 255 );  
        $black = ImageColorAllocate ( $image, 0, 0, 0 );  
         $gray= ImageColorAllocate ( $image, 100, 100, 100 );  
        
        //填充颜色  
        //ImageFilledRectangle($image,0,0,200,200,$red);  
        //显示文字,写入文字 
        
        imagettftext ( $image, $this->size, $this->angle, $this->showX, $this->showY0,  $gray, $this->font, $this->name); 
        imagettftext ( $image, $this->size, $this->angle, $this->showX, $this->showY1,  $gray, $this->font, $this->school); 
        imagettftext ( $image, $this->size, $this->angle, $this->showX, $this->showY2,  $gray, $this->font, $this->num); 
        
        
        //随机生成成绩
        $thisnum = rand(0,32);
        
        imagettftext ( $image, $this->size, $this->angle, $this->showX1, $this->showY3,  $gray, $this->font, $this->result[$thisnum][0]); 
        imagettftext ( $image, $this->size, $this->angle, $this->showX1, $this->showY4,  $gray, $this->font, $this->result[$thisnum][1]); 
        imagettftext ( $image, $this->size, $this->angle, $this->showX1, $this->showY5,  $gray, $this->font, $this->result[$thisnum][2]); 
        imagettftext ( $image, $this->size, $this->angle, $this->showX1, $this->showY6,  $gray, $this->font, $this->result[$thisnum][3]); 
        

        //ImageString($image,5,50,10,$txt,$white);  
        //显示图形  
        imagepng ( $image );  
        // imagegif ( $image, "a2.jpg" );  
        ImageDestroy ( $image );  
    }  
}  
?> 
