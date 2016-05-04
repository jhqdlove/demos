<?php
header("Content-Type:text/json;charset=utf-8");


if($_SERVER["REQUEST_METHOD"]=="GET"){
    $type = $_GET["type"];
    if($type==1){
        getall();
    }else if($type==2){
       $time = $_GET["time"];
       gettime($time);
    }else if($type==3){
       $name = $_GET["name"];
       getname($name);
    }   
    
}else if($_SERVER["REQUEST_METHOD"]=="POST"){
    
    $type =  $_GET["type"];

    if($type==1){
     $content = $_GET["content"];
     $name = $_GET["name"];
     $weixin = $_GET["weixin"];
     addpoem($content,$name,$weixin);
    }else if($type==2){
        $ip=$_SERVER["REMOTE_ADDR"]; 
        
        $id = $_GET["id"];
        //echo '{"result":"'.$ip.'"}';
        

         addup($id,$ip);
    }
}

/*
result
0:正确
1:缺少信息
2:查询结果为空

*/
function getall(){

        $mysql = new SaeMysql();        
                
        $sql = "SELECT p.id, p.content, p.name, p.time, SUM( CASE up WHEN 1 THEN 1 ELSE 0 END ) AS sup FROM poem p LEFT JOIN upinfo u ON p.id = u.poemid GROUP BY p.id";
    
    
        
        $result = $mysql->getData($sql);

        if(empty($result)){        
        echo '[{"result":"2"}]';
            return;
        }
        
        $jsonre =  '[{"result":"0"}';
       
        for($i=0;$i<count($result);$i++)  //循环便利显示查询结果
        {
            $jsonre=$jsonre.',{"id":"'.$result[$i]["id"].'","content":"'.$result[$i]["content"].'","name":"'.$result[$i]["name"].'","time":"'.$result[$i]["time"].'","sup":"'.$result[$i]["sup"].'"}';

         }   
        
        
        $jsonre = $jsonre .']';
        $mysql->closeDb();
        echo $jsonre;
        
 
}


function getid($id){
        $mysql = new SaeMysql();     
    
      $sql = "SELECT p.id, p.content, p.name, p.time, SUM( CASE up WHEN 1 THEN 1 ELSE 0 END ) AS sup FROM poem p LEFT JOIN upinfo u ON p.id = u.poemid WHERE p.id='$id' GROUP BY p.id";
    
        
        $result = $mysql->getData($sql);

        if(empty($result)){        
        echo '[{"result":"2"}]';
            return;
        }
        
        $jsonre =  '[{"result":"0"}';
       
        for($i=0;$i<count($result);$i++)  //循环便利显示查询结果
        {
             $jsonre=$jsonre.',{"id":"'.$result[$i]["id"].'","content":"'.$result[$i]["content"].'","name":"'.$result[$i]["name"].'","time":"'.$result[$i]["time"].'","sup":"'.$result[$i]["sup"].'"}';

         }           
        
        $jsonre = $jsonre .']';
        $mysql->closeDb(); 
        
        echo $jsonre;
   
    }



function getname($name){
        $mysql = new SaeMysql();     
    
        $sql = 'SELECT p.id, p.content, p.name, p.time, SUM( CASE up WHEN 1 THEN 1 ELSE 0 END ) AS sup FROM poem p LEFT JOIN upinfo u ON p.id = u.poemid WHERE p.name like "%'.$name.'%" GROUP BY p.id';
    
        
        $result = $mysql->getData($sql);

        if(empty($result)){        
        echo '[{"result":"2"}]';
        return;
        }
        
        $jsonre =  '[{"result":"0"}';
       
        for($i=0;$i<count($result);$i++)  //循环便利显示查询结果
        {
            $jsonre=$jsonre.',{"id":"'.$result[$i]["id"].'","content":"'.$result[$i]["content"].'","name":"'.$result[$i]["name"].'","time":"'.$result[$i]["time"].'","sup":"'.$result[$i]["sup"].'"}';

         }          
        
        $jsonre = $jsonre .']';
        $mysql->closeDb(); 
        
        echo $jsonre;
   
    }

function gettime($time){
        $mysql = new SaeMysql();     
        
       
    
      $sql = 'SELECT p.id, p.content, p.name, p.time, SUM( CASE up WHEN 1 THEN 1 ELSE 0 END ) AS sup FROM poem p LEFT JOIN upinfo u ON p.id = u.poemid WHERE p.time>"'.$time.' 00:00:00" and p.time<"'.$time.' 24:00:00" GROUP BY p.id';
    
        
        $result = $mysql->getData($sql);

        if(empty($result)){        
        echo '[{"result":"2"}]';
        return;
        }
        
        $jsonre =  '[{"result":"0"}';
       
        for($i=0;$i<count($result);$i++)  //循环便利显示查询结果
        {
            $jsonre=$jsonre.',{"id":"'.$result[$i]["id"].'","content":"'.$result[$i]["content"].'","name":"'.$result[$i]["name"].'","time":"'.$result[$i]["time"].'","sup":"'.$result[$i]["sup"].'"}';

         }          
        
        $jsonre = $jsonre .']';
        $mysql->closeDb(); 
        
        echo $jsonre;
   
    }

//写入点击记录
function addup($id,$ip){


$mysql = new SaeMysql();

$sql = "select id from upinfo where poemid='$id' and ip='$ip'";   

$result = $mysql->getData($sql);

if(empty($result)){
$sql = "insert into upinfo(poemid,ip,up) values ('$id','$ip',1)"; 
$mysql->runSql($sql);
$mysql->closeDb();

//close db connection      
echo '{"result":"0"}';

}else{
    echo '{"result":"3"}';}      

}



//写入点击记录
function addpoem($content,$name,$weixin){    
if(!isset($_GET["content"])||empty($_GET["content"])){
     echo '{"result":"1"}';
return;
}

$mysql = new SaeMysql();      

$sql = "insert into poem(content,name,weixin) values ('$content','$name','$weixin')"; 
$mysql->runSql($sql);
$mysql->closeDb();

//close db connection      
echo '{"result":"0"}';
}
?>