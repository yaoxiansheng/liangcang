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

//首页主体数据
var setion3_1 = document.querySelector(".setion3_1");
var arr2 = [
    {
        img1:"../img/263887.jpg",
        img2:"../img/1500.jpg",
        p1:"¥298.00",
        p2:"玫瑰灵药甜蜜香薰礼盒 | 世界知名调香师合作研制",
        p3:"玫瑰香与粉晶石的神秘邂逅，让你多攒些恋爱的运气 ...",
        title:"玫瑰灵药甜蜜香薰礼盒 | 世界知名调香师合作研制",
        txt:"观夏SUMMER Lab",
        a1:"616",
        src:"../html/details.html"
    },
    {
        img1:"../img/263818.jpg",
        img2:"../img/1464.jpg",
        p1:"¥399.00",
        p2:"原创设计师 3D立体耳钉 | 耳畔的与众不同和时尚精致",
        p3:"性外观男女通用，银针耳钉防过敏，时尚出街单品...",
        title:"原创设计师 3D立体耳钉 | 耳畔的与众不同和时尚精致",
        txt:"MOBOH",
        a1:"626"
    },
    {
        img1:"../img/263878.jpg",
        img2:"../img/1498.jpg",
        p1:"¥849.00",
        p2:"放在哪里都好看置物架 | 随意收纳 与周围融为一体",
        p3:" 设计繁复而又优雅，高品质材料和精益求精的细节...",
        title:"放在哪里都好看置物架 | 随意收纳 与周围融为一体",
        txt:"AYTM",
        a1:"607"
    },
    {
        img1:"../img/263865.jpg",
        img2:"../img/1500.jpg",
        p1:"¥298.00",
        p2:"真丝睡眠眼罩 红心提花款 | 柔软桑蚕丝 安享亲肤睡眠",
        p3:"丝滑桑蚕丝，安享亲肤睡眠，Shape of Love系列，6A级桑蚕丝舒适亲肤，安享睡...",
        title:"真丝睡眠眼罩 红心提花款 | 柔软桑蚕丝 安享亲肤睡眠",
        txt:"MANITO",
        a1:"554"
    },
    {
        img1:"../img/263771.jpg",
        img2:"../img/1189.jpg",
        p1:"¥960.00",
        p2:"时尚双层加绒睡衣套装 | 精致 从一件舒适睡衣开始",
        p3:"选用中性风格，外观时尚挺括，让整体更加时尚精致...",
        title:"时尚双层加绒睡衣套装 | 精致 从一件舒适睡衣开始",
        txt:"Lucia Berutto",
        a1:"614"
    },
    {
        img1:"../img/263806.jpg",
        img2:"../img/1307.jpg",
        p1:"¥188.00",
        p2:"天然大豆手工香氛蜡烛 | 有故事的艺术香薰蜡烛",
        p3:"有神秘木质香，诱人玫瑰香，清甜浆果和浓郁晚玉香可选... ",
        title:"天然大豆手工香氛蜡烛 | 有故事的艺术香薰蜡烛",
        txt:"handhandhand",
        a1:"556"
    },
    {
        img1:"../img/263717.jpg",
        img2:"../img/1484.jpg",
        p1:"¥749.00",
        p2:"NIVA迷你入耳式蓝牙耳机 | 可连接2台不同的手机",
        p3:"指触操控，控制音乐，接听电话，激活多种语音功能... ",
        title:"NIVA迷你入耳式蓝牙耳机 | 可连接2台不同的手机",
        txt:"SUDIO",
        a1:"606"
    },
    {
        img1:"../img/263763.jpg",
        img2:"../img/1488_1547018946.jpg",
        p1:"¥419.00",
        p2:"首款声波吮吸式按摩器 | 直击敏感点 尽享身心愉悦",
        p3:"8种不同的设置，高配款cruise Control独有定速功能 ",
        title:"首款声波吮吸式按摩器 | 直击敏感点 尽享身心愉悦",
        txt:"LELO",
        a1:"633"
    },
    {
        img1:"../img/263746.jpg",
        img2:"../img/121_1525406408.jpg",
        p1:"¥1134.00",
        p2:"莫比乌斯系列全金手链 | 手腕间流动的精致优雅",
        p3:"通体18K真金材质，不会变质褪色，15+2cm延长链",
        title:"莫比乌斯系列全金手链 | 手腕间流动的精致优雅",
        txt:"YǏN隐",
        a1:"630"
    },
    {
        img1:"../img/263636.jpg",
        img2:"../img/1472.jpg",
        p1:"¥2399.00",
        p2:"小朋友的豆沙发+脚凳 | 环保、安全、舒适、颜值高",
        p3:"更适合小朋友的size，圆弧边角不磕碰，玩耍更舒服...",
        title:"小朋友的豆沙发+脚凳 | 环保、安全、舒适、颜值高",
        txt:"Larmoon小鬼当家",
        a1:"527"
    },
    {
        img1:"../img/263625.jpg",
        img2:"../img/547.jpg",
        p1:"¥1109.00",
        p2:"北欧简约 艺术水磨石吊灯 | 打造质感满满的时尚空间",
        p3:"天然不加雕饰的水磨石元素，与现代的家具都可以百搭...",
        title:"北欧简约 艺术水磨石吊灯 | 打造质感满满的时尚空间",
        txt:"本土创造",
        a1:"618"
    },
    {
        img1:"../img/263655.jpg",
        img2:"../img/1476.jpg",
        p1:"¥329.00",
        p2:"林允联名款负离子电吹风机 | 给你专业级造型体验",
        p3:"给你专业级造型体验，4款可选，负离子锁住水分、告别毛躁，打造百变发型...",
        title:"林允联名款负离子电吹风机 | 给你专业级造型体验",
        txt:"WULIKAA巫哩咔",
        a1:"659"
    },
    {
        img1:"../img/263524.jpg",
        img2:"../img/1459.jpg",
        p1:"¥1180.00",
        p2:"过山车长耳环 | 925银 锆石",
        p3:"精致的车厢，可滑动，不对称设计，内旋造型修饰脸型...",
        title:"过山车长耳环 | 925银 锆石",
        txt:"VIVALANDS",
        a1:"458"
    },
    {
        img1:"../img/263596.jpg",
        img2:"../img/1314.jpg",
        p1:"¥134.00",
        p2:"原创设计不锈钢刀叉勺套装 | 自带华丽光泽 使用舒适",
        p3:"食品级304不锈钢材质可靠，，拉丝表面品质一流",
        title:"原创设计不锈钢刀叉勺套装 | 自带华丽光泽 使用舒适",
        txt:"Moreover",
        a1:"621"
    },
    {
        img1:"../img/263600.jpg",
        img2:"../img/1463.jpg",
        p1:"¥320.00",
        p2:"法国撞色艺术香皂-催眠陀螺 | 自然香氛 巴黎工坊手工制作",
        p3:"自然香氛，巴黎工坊手工制作，充满创意的手工雕塑香皂，纯天然成分，180g/枚...",
        title:"法国撞色艺术香皂-催眠陀螺 | 自然香氛 巴黎工坊手工制作",
        txt:"Seem Soap",
        a1:"543"
    },
    {
        img1:"../img/263579.jpg",
        img2:"../img/739.jpg",
        p1:"¥249.00",
        p2:"可收藏的原木金属笔 | 不用墨水 却永远也写不完",
        p3:"金属笔头与纸面接触，瞬间氧化，留下类似铅笔的痕迹。倾泻如墨书写不止，温...",
        title:"可收藏的原木金属笔 | 不用墨水 却永远也写不完",
        txt:"本来设计",
        a1:"684"
    },
    {
        img1:"../img/263584.jpg",
        img2:"../img/1168.jpg",
        p1:"¥168.00",
        p2:"猪光宝气 会发光的猪小白 | 寂静的夜留一盏灯的风景",
        p3:" 小而精致的礼物，像小猪一样的多吃多睡，认真对待自己...",
        title:"猪光宝气 会发光的猪小白 | 寂静的夜留一盏灯的风景",
        txt:"逸间665",
        a1:""
    },
    {
        img1:"../img/263496.jpg",
        img2:"../img/1436.jpg",
        p1:"¥1999.00",
        p2:"可以陪你游泳的蓝牙耳机 | 轻轻一点 指尖上自由操控",
        p3:"随行充电，一次可连续播放21小时，可调节舒适档位...",
        title:"可以陪你游泳的蓝牙耳机 | 轻轻一点 指尖上自由操控",
        txt:"Sony",
        a1:"631"
    }
];
var html2 = "";
for(var j = 0; j < arr2.length; j ++){
    html2 += `<div class = "item first left" > 
    <div class="imgCon" style="height:316px;width:316px;">
        <a href="./details.html" target="_blank">
            <img src="${arr2[j].img1}" title="${arr2[j].title}"></a>
            <a href="${arr2[0].src}" class="goodsInfo" target="_blank">
                <p class="money">${arr2[j].p1}</p>
                <p class="tle">${arr2[j].p2}</p>
                <p class="desc">
                ${arr2[j].p3}
                </p>
            </a>
    </div>
    <div class="bar">
        <a class="who" href="#" target="_blank">
            <img src="${arr2[j].img2}">${arr2[j].txt}</a>
            <a href="#" class="goodsFavCount">${arr2[j].a1} </a>
            <img src="../img/8.png" style="float:right;margin-top: 9px;">
        </div>
</div>`;
}
setion3_1.innerHTML = html2;