// 获取设备电池状态，只有 chrome 支持
// BatteryManager.charging 只读，一个布尔值，说明当前电池是否正在充电。
// BatteryManager.chargingTime 只读，一个数字，代表距离充电完毕还需多少秒，如果为0则充电完毕。
// BatteryManager.dischargingTime 只读,一个数字，代表距离电池耗电至空且挂起需要多少秒。
// BatteryManager.level 只读，一个数字，代表电量的放大等级，这个值在 0.0 至 1.0 之间。

function dianchi() {
    navigator.getBattery().then(battery => {
        console.log("电池是否正在充电：" + (battery.charging ? "是" : "否"));
        console.log("电量: " + battery.level * 100 + "%");
        console.log("代表距离充电完毕还需多少秒: " + battery.chargingTime + " s");
        console.log("代表距离电池耗电至空: " + battery.dischargingTime + " s");

        // 电池充电状态更新事件。
        battery.addEventListener("chargingchange", () => {
            console.log("电池是否正在充电：" + (battery.charging ? "是" : "否"));
        });
        // 电池电量更新事件。
        battery.addEventListener("levelchange", () => {
            console.log("电量: " + battery.level * 100 + "%");
        });
        // 电池充电时间更新事件。
        battery.addEventListener("chargingtimechange", () => {
            console.log("代表距离充电完毕还需多少秒: " + battery.chargingTime + " s");
        });
        // 电池断开充电事件。
        battery.addEventListener("dischargingtimechange", () => {
            console.log("代表距离电池耗电至空: " + battery.dischargingTime + " s");
        });
    });
}

// BroadcastChannel 接口通过创建一个 BroadcastChannel 对象，
// 一个客户端就加入了某个指定的频道，
// 它可用于检测同源网站环境中其他浏览器选项卡下的用户操作
// 之后无论创建多少 BroadcastChannel 对象，只要频道名称相同，就会互通
// 只要这个页面打开着，就会收到消息
// 连接到广播频道，唯一的参数是：频道名称
var bc = new BroadcastChannel('11');
// 发送数据到频道，从而使同频道内都能接受数据
function guangbo() {
    bc.postMessage('This is a test message.');
}
// 关闭频道 
function guangbo2() {
    bc.close()
}
// 广播方法二
function postmessage() {
    // 发送广播数据
    window.postMessage(99999);
}
// post 类型的fetch请求：
// fetch(url, {
//     method: 'POST',
//     body: {datas}   // body是存放要上传的数据，要是对象或formData
//     headers: new Headers({
//         'Content-Type': 'application/json'
//     })
// }).then(res => res.json())


function fetchs() {
    let url = 'https://api.coindesk.com/v1/bpi/currentprice.json'
    fetch(url)
        .then(t => t.blob()) // 必须加的，主要使用 json() 和 text() 
        .then(data => console.log(data)) // 这一步才真正能看到请求结果数据
}

// 隐藏元素，但在dom树中还是存在的
function yincang() {
    var k = document.getElementById("yincang");
    k.hidden = true
    setTimeout(() => k.hidden = false, 2000)
}

function quanping() {
    var k = document.getElementById("quanping");
    k.requestFullscreen(); // 使元素全屏
    setTimeout(() => {
        document.exitFullscreen(); // 退出全屏
    }, 2000) // 退出全屏
    // 监听全屏事件
    k.onfullscreenchange = function (e) {
        console.log(e)
    }
}

// 监测网络变化，可以拔掉网线看到效果
function wangluo() {
    var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    connection.addEventListener('change', connection => {
        console.log(connection);
    });
}

function test() {

    
}


let arr = [{
        name: '查看电池',
        fn: dianchi
    },
    {
        name: '广播',
        fn: guangbo
    },
    {
        name: '关闭广播',
        fn: guangbo2
    },
    {
        name: '广播方法二',
        fn: postmessage
    },
    {
        name: '使用 fetch',
        fn: fetchs
    },
    {
        name: '隐藏DOM元素',
        fn: yincang
    },
    {
        name: '全屏',
        fn: quanping
    },
    {
        name: '监测网络',
        fn: wangluo
    },






    {
        name: '测试',
        fn: test
    },



]

export default {
    arr

}