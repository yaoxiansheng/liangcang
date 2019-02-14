// 二级导航商店数据
var store_dt = document.querySelector(".store_dt");
var arr = [
    {
        img : "../img/23687.png",
        a1:"家居"
    },
    {
        img : "../img/23686.png",
        a1:"文具"
    },
    {
        img : "../img/23683.png",
        a1:"数码"
    },
    {
        img : "../img/23682.png",
        a1:"玩乐"
    },
    {
        img : "../img/23684.png",
        a1:"餐厨"
    },
    {
        img : "../img/23680.png",
        a1:"美食"
    },
    {
        img : "../img/23678.png",
        a1:"服装"
    },
    {
        img : "../img/23676.png",
        a1:"鞋包"
    },
    {
        img : "../img/23675.png",
        a1:"配饰"
    },
    {
        img : "../img/23681.png",
        a1:"美护"
    },
    {
        img : "../img/23674.png",
        a1:"出行"
    },
    {
        img : "../img/23668.png",
        a1:"图书"
    },
    {
        img : "../img/23672.png",
        a1:"艺术"
    },
    {
        img : "../img/30074.png",
        a1:"水具"
    },
    {
        img : "../img/30029.png",
        a1:"运动"
    },
    {
        img : "../img/30028.png",
        a1:"情趣"
    }
    
]

var html = "";
for( var i = 0; i < arr.length; i ++){
    html += `<dt style="height:62px;width:122px;margin-left:-10px; float: left; margin-bottom:20px">
    <div class="cat_img" style="margin-top:23px;margin-left:17px;margin-right:67px;padding-bottom:36px;width:40px;height:54px;">
        <img src="${arr[i].img}" style="width:40px;height:40px">
        <div class="cat_name" style="width:50px;height:20px;margin-top:-30px;margin-left:6px;font-size:14px;">
            <a href="#" style="color:rgb(97, 96, 96);font-weight:bold">${arr[i].a1}</a>
        </div>
    </div>
</dt>`;
}
store_dt.innerHTML = html;