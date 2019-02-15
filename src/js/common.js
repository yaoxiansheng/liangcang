/** 
 * 倒计时
 *  countDown  返回的是当前时间和目标时间的距离 用时分秒表示 
 * 
 *  参数 : 时间字符串 "yyyy/mm/dd[ hh:mm:ss]"
 * 
 *  返回值 : 
 *  {
 *    hour : string,
 *    minute : string,
 *    second : string
 *  }
 * */ 
//定时器封装
function countDown(dateString){
      var target = new Date(dateString);
      var now = Date.now();
      //差值时间(单位为ms);
      var Dtime = target.getTime() - now;

      var hour = parseInt(Dtime / 1000 / 3600) ;
      var minute = parseInt((Dtime - hour * 1000 * 3600) / 1000 / 60);
      var second = parseInt((Dtime - hour * 1000 * 3600 - minute * 1000 * 60) / 1000);
      var ms = Dtime % 1000;
      return {
            hour : buling(hour),
            minute : buling(minute),
            second :buling(second) ,
            ms : ms
      }
}
// 参数为时间;

//定时器封装2
function daojishi(dateString){
      var targer = new Date(dateString);
      var dater = Date.now();
      var cha = targer.getTime() - dater;
      var tian = parseInt(cha/1000/3600/24);
      var hover = parseInt((cha-tian*1000*3600*24)/1000/3600);
      var fen = parseInt((cha-tian*1000*3600*24-hover*1000*3600)/1000/60);
      var miao = parseInt((cha-tian*1000*3600*24-hover*1000*3600-fen*1000*60)/1000);
      return {
          "tian":buling(tian),
          "hover":buling(hover),
          "fen":buling(fen),
          "miao":buling(miao)
      }
  }

//计数器补零封装
function buling(num){
      return num < 10 ? "0" + num : num;
}

// 选择器封装
function _(select){
      // 如果选择的数组只有一项,直接返回这个项而不是数组;
      var doms = document.querySelectorAll(select);
      if(doms.length === 0){
            return null;
      }
      return doms.length === 1 ? doms[0] : doms;
}
// 参数为 .xx 或 #xx ;

// 伪数组转换成真数组的方法;
function _toArray(list){
      return Array.prototype.slice.call(list);
}
// 一般用于 querySelectorAll() 或元素组转化;


// 封装DOM2级事件
function _on(dom,event_type,fn){
      dom.addEventListener(event_type,fn);
}

// 封装取消(移除)DOM2级事件
function _off(dom,event_type,fn){
      dom.removeEventListener(event_type,fn);
}

// 封装只执行一次的DOM2级事件
function _once(dom,event_type,fn){
      dom.addEventListener(event_type,fn);
      // 当个事件执行的时候,移除掉当前监听的事件;
      dom.addEventListener(event_type,removeEvent)
      // 是清空参数函数及当前清空函数的功能;
      function removeEvent(){
            _off(dom,event_type,fn)
            _off(dom,event_type,removeEvent)
      }
}
//第一个是绑定的标签，第二个是哪个事件，第三个是事件处理函数；


//event兼容
function even(evt){
      var e = evt || window.event;
      return e;
}

// target兼容
function targe(even){
      var e = even || window.event;
      var target = e.target || e.srcElement;
      return target;
}

// 事件委托封装
function _delegation(parent_node,event_type,target_selector,fn){
      // 1. 绑定不同的事件;
     parent_node.addEventListener(event_type,handlerClick)
     // 2. 事件处理函数;
     function handlerClick(evt){
           // 2.1 判断部分;
           var e = evt || window.event;
           var target = e.target || e.srcElement;
           // 2.1.1 选择范围会改变
           var targets = document.querySelectorAll(target_selector);
           targets = Array.from(targets);
           if(targets.indexOf(target) === -1) return false;
           // 2.2 事件处理函数;
           fn(e);
     }
}
//第一个是绑定的标签，第二个是事件类型，第三个是要选择的范围（就是其子元素），第四个是事件处理函数；

// cookie封装
function _cookie(key,value,expires,path){
      value =  encodeURI(value);
      var str = "";
      str = key + "=" + value +";";

      if(typeof expires === "number"){
            var d = new Date();
           var s = d.setDate(d.getDate() + expires);
            console.log(s);
            str += "expires="+ d + ";";
      }
      str += "path=" + path + ";";
      document.cookie = str;
      return str;
}
// path (访问路径)不同也是两条不同的cookie的标识;
// expires 指的是几天后过期;
//删除 cookie 只要把时间改成 -1 即可;
// cookie 本身带有默认值;
// 没有设置过期时间的cookie => 叫做会话cookie; 关闭页面之后就会被删除的cookie;

// cooki删除封装
function _removecookie(key,path){
      _cookie(key,"",-1,path)
}

//封装克隆（不建议使用）一般使用cloneNode()
function deepClone(target){
      var clone = {};
      // 对象遍历;
      for(var attr in  target){
            // 如果当前要克隆的值为引用类型 , 我们再次调用 deepClone创建一个新对象;
            if(typeof target[attr] === "object"){
                  clone[attr] = deepClone(attr);
            }else if(typeof target[attr] === "function" ){
                  clone[attr] = eval("("+target[attr].toString()+")");
            }else{
                  clone[attr] = target[attr];
            }
      }
      return clone;
}

//encodeURI => 对字符串记性URI编码：
function cookiebianma(value){
      return encodeURI(value);
}

//decodeURI => 对字符串进行RUI解码;
function cookiejiema(document_cookie){
     return decodeURI(document_cookie);
}

//敏感词屏蔽
function sensitive(label,string1,string2){
      var value = label.value;
      value = value.replace(new RegExp(string1),string2);
      // 除了input 和 textarea 之外其余的内容获取我们都用 .innerHTM;
      return value;
}     
//第一个是获取哪个标签内容，第二个是敏感词，第三个是要替换的词；


//阻止默认事件封装
function _prevent(even){
      var e = even || window.event;
      e.preventDefault();
}

//获取cookie
function _getCookie(key){
      // 1. 目标  根据 key 值 获取cookie之中对应的value值;
      // 2. 有啥 ? 1. cookie字符串 2. key;  3. some ;

      // 1. 获取cookie字符串;
      var cookieString = document.cookie;
      // 2. 把字符串转换成数组;
      var cookieArray = cookieString.split("; ");
      // console.log(cookieArray);
      // 3. 利用some 只要有一个ture就终止的特性; 判定是否存在这个key;
      
      var res = "";
      var hasKey = cookieArray.some(function(item){
            // 4. 判定当前字符串之中是否存在这个key值;
            // console.log(item.split("=")[0]);
            res = item.split("=")[1];
            return item.split("=")[0] === key
      })

      if(hasKey){
            return res;
      }else{
            return "";
      }
}

//移动框架封装
//三个参数分别是元素，属性，目标点
function animate(dom,attr,target){
      // if(timer !== null) return false;
      clearInterval(dom.timer);
      dom.timer = setInterval(()=>{
            let distance = target - getStyle(dom,attr,"number");
            let speed = distance > 0 ? Math.ceil(distance/10) : Math.floor(distance / 10);
            dom.style[attr] = getStyle(dom,attr,"number") + speed + "px";
            if(distance === 0){
                  clearInterval(dom.timer);
                  timer = null;
            }
      },50)
}

//移动框架取值的封装
//三个参数分别是元素，属性，类型
function getStyle(dom,attr,type){
      // 用 新方法取值;
      var res_attr = getComputedStyle(dom)[attr];
      // 如果要求转换成数字,那么就转换;
      if(type === "number"){
            return parseInt(res_attr);
      }
      // 如果不要求就原样返回;
      return res_attr;
}

//移动框架升级封装（加了回调函数）
function animate(dom,attr,target,callback){
      var count = 0;
      // if(timer !== null) return false;
      clearInterval(dom.timer);
      dom.timer = setInterval(()=>{
            count ++;
            let distance = target - getStyle(dom,attr,"number");
            let speed = distance > 0 ? Math.ceil(distance/10) : Math.floor(distance / 10);
            dom.style[attr] = getStyle(dom,attr,"number") + speed + "px";
            if(distance === 0){
                  clearInterval(dom.timer);
                  timer = null;
                  // 动画结束时会执行的逻辑;
                  if(callback){
                        callback();
                  }
            }
      },50)
}

//get请求封装
//参数是数据路径
function ajaxGet(url){
      return new Promise(function(resolve,reject){
            var xhr = new XMLHttpRequest();
            xhr.open("GET",url);
            xhr.send(null);
            xhr.onreadystatechange = function(){
                  if(xhr.readyState === 4 && xhr.status === 200){
                        resolve(xhr.response);
                  }
            }
      })
 }

//post请求封装
 //第一个参数是数据路径，第二个参数是用户输入的数据（一般是json对象）
function ajaxPost(url,data){
      return new Promise(function(resolve,reject){
            var xhr = new XMLHttpRequest();
            xhr.open("POST",url);
            // 让http协议识别当前我的发送规则;
            // 设置http协议发送数据的规则;
            xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");

            // 对对象进行二次处理;

            // 只要不是我们想要的结果（原因），那么我们就做某些事情;
            var data_str = "";
            for(var attr in data){
                  if(data_str.length !== 0){
                        data_str += "&";
                  }
                  data_str += attr+"="+data[attr]
            }

            // console.log(data_str);
            xhr.send(data);
            xhr.onreadystatechange = function(){
                  if(xhr.readyState === 4 && xhr.status === 200){
                        resolve(xhr.response);
                  }
            }
      })
 }

 //jsonp封装
 //第一个参数是数据路径，第二个参数是前后端约定的字段名
 function jsonp(url,jsonp_key){
      return new Promise(function(resolve,reject){

            // 函数名随机处理避免占用命名空间，避免冲突;

            var randomName = "_" + Date.now()
            console.log(randomName);

            window[randomName] = function(res){
                  // console.log(res);
                  resolve(res);
            }
            // 2. 创建并插入script标签;
            var script = document.createElement("script");

            // 当前url之中是否存在 ? （存在问好表示已经有数据了），我应该用& 去拼接数据，反之则用 ?;
            url = url + (/\?/.test(url) ? "&" : "?") + jsonp_key + "=" + randomName;

            script.src = url;
            // 3. 标签放入页面之中;
            document.body.appendChild(script);
            // 4. 清理垃圾;
            script.onload = function(){
                  this.remove();

                  window[randomName] = null;
                  delete window[randomName];
            }
      })
}

// 函数去抖封装;
//第一个参数是回调函数，第二个参数是多少秒获取一遍数据
function _throttle(callback,dealy){
      // 利用闭包，让 timer 私有化;
      var timer = null;
      return function(){
            clearTimeout(timer);
            // 如果已经过了规定的时间可以再次执行代码了;
            timer = setTimeout(function(){
                 callback(); 
            },dealy)
      }
}









































