	function getTime(id){
        var timer = null;//这里设置time为null，用于下面来清除计时器
        var obj = document.getElementById(id)//获取到放置时间数据的span的id
        timer = setInterval(function(){//设置定时器，来更新时间
                var a = new Date((obj.getAttribute("data-time"))).getTime();
                //上面这一步可能比较复杂，我们首先来看obj.getAttribute("data-time")这一句。这个是用来获取指定标签的data-time属性，
//即我们要使用的到期时间，然后来看new Date().getTime(),这一句是用来获取我们所设置到期时间的时间戳，用于下面的计算，这个获取的是固定的数值
                var b = new Date().getTime();//这是获取当前时间，是一个不固定的数值
                var d = 0,s=0,h=0,m=0;//定义变量
                var ee = obj.getElementsByTagName("em")//获取布局中的em标签用于存取数据
                d = Math.floor((a - b)/1000/60/60/24);//获取剩余天数
                h = Math.floor((a - b)/1000/60/60%24);//获取剩余小时
                m = Math.floor((a - b)/1000/60%60);//获取剩余分钟
                s = Math.floor((a - b)/1000%60);//获取剩余秒数
                       //中间这块区域是用来判断，当前时间数值小于10的时候给他前面加个0，这里可以根据具体情况可加可不加，以下同理
                if(d < 10){
                    d = "0" + d
                }else if(d < 0){
                    d = 0
                }
                if(h < 10){
                    h = "0" + h
                }else if(h < 0){
                    h = 0
                }
                if(m < 10){
                    m = "0" + m;
                }else if(m < 0){
                    m = 0;
                }
                if(s < 10){
                    s = "0" + s;
                }else if(s < 0){
                    s = 0;
                }
                     ee[0].innerHTML = d;
                ee[1].innerHTML = h;
                ee[2].innerHTML = m;
                ee[3].innerHTML = s;
                if(a <= b){//当我们的时间到期的时候，清除计时器，然后把当前标签的内容设置为0；
                    clearInterval(timer);
                    ee[0].innerHTML = 00;
                    ee[1].innerHTML = 00;
                    ee[2].innerHTML = 00;
                    ee[3].innerHTML = 00;
                }
            },1000)
}
getTime("time1")//这里用来调用这个函数，传入id