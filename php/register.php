<?php

     header("Content-Type: text/html;charset=utf-8");
     header("Access-Control-Allow-Origin:*");
     #注册;

     #.目标 -> 获取数据;

     $username = @$_REQUEST["username"];
     $password = @$_REQUEST["password"];
     
     echo $username;
     echo $password;
     # 验证 -> 数据是否存在;

     if(!$username || !$password){
           die('{"state":"error","errorType":"参数不能为空","stateCode":"2"}');
     }

     # 验证 -> 数据是否重复;

     $con = mysql_connect("localhost","root","root");
      
      if(!$con){
            die('{"state":"error","errorType":"数据库错误","stateCode":"3"}');
      }

      mysql_select_db("liangcang");
     $select_query = "SELECT username FROM Username";
     $select_res = mysql_query($select_query);

     while($row = mysql_fetch_array($select_res)){
           // $username => 代表用户输入的用户名;
           // $row => 代表数据库里面的每一行;
           if($username === $row["username"]){
                 mysql_close($con);
                 die('{"state":"error","stateCode":"用户名重复","errorState":"4"}');
           }
     }

     #3. 插入数据;
     $password = md5($password);
     $inster_query = "INSERT INTO Username (username , password) VALUES ('$username','$password')";

     $insert_res =  mysql_query($inster_query);

     if($insert_res){
      
      echo "<script>alert('注册成功！去登陆');window.location.href='http://127.0.0.1/liangcang/html/login.html'</script>";
     }else{
           die('{"state":"error","errorType":"数据库写入失败","stateCode":"5"}');
     }
?>