//获取标签
var search = document.querySelector("#search_baidu");
var listul = document.querySelector("#list");

//声明变量
var timer = null;

//事件（在 <input> 或 <textarea> 元素的值发生改变时触发）
search.addEventListener("input", searchinput);

//去抖函数
function searchinput() {
    if (timer !== null) 
        return false;
    timer = setInterval(() => {
        //路径一般在控制台 --> Network --> js 里
        var url = `https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=${search.value}&json=1&p=3&sid=1422_21089_28131_26350_28266&req=2&csor=2`;
        jsonp(url, "cb").then(function (res) {
            //拼接字符串
            var html = '';
            //判断index < 4是否成立
            res
                .s
                .every(function (item, index) {
                    html += `<li>${item}</li>`;
                    return index < 4;
                })
            listul.innerHTML = html;
        })
    }, 100)
    search.addEventListener("blur", searchblur);
}

//停止定时器
function searchblur() {
    clearInterval(timer);
    timer = null;
}
