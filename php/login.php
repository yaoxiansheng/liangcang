<?php

header("Content-Type: text/html;charset=utf-8");
header("Access-Control-Allow-Origin:*");
     //获取数据
     $username = $_POST["username"];
     $password = $_POST["password"];

     //判断
     if(!$username && !$password){
        die("用户名或密码为空或不完整");
     }

     //连接数据库
     $con = mysql_connect("localhost","root","root");

     if(!$con){
        die("数据库连接失败");
     }

     //选择数据库
     mysql_select_db("liangcang");

     //语句
     $sql = " SELECT * FROM Usename ";
        
     //执行
     $res = mysql_query($sql);
     echo($res);
     while($row = mysql_fetch_array($res)){
    
        if(md5($password) === $row["password"]){
            if($username === $row["username"]){
                die("登录成功");
            }
        }
        else{
            die("用户名或密码错误");
        }
     }
     mysql_close($con);
?>