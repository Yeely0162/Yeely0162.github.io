setInterval(function(){
    let LTime,NowTime,H,S,M,i,d,T,h,D,m,s;
    LTime=new Date("11/07/2020 0:0:00");//设定的时间点
    NowTime=new Date();//获取现在的时间
    T=(NowTime.getTime()-LTime.getTime());//现在的时间 - 过去的时间
    i=24*60*60*1000;//24小时*60分钟*60秒*1000毫秒
    d=T/i;
    D=Math.floor(d);
    h=(d-D)*24;
    H=Math.floor(h);
    m=(h-H)*60;
    M=Math.floor(m);
    s=(m-M)*60
    S=Math.floor(s);
    // RunTime.innerHTML= "🧡我们在一起已经"+D + "天 " + H + " 时 " + M + " 分 " + S + " ″ "
    RunTime.innerHTML= "服务已经运行💨"+D + "天 " + H + " 时 " + M + " 分 " + S + " ″ "
},1000);//一秒刷新一次