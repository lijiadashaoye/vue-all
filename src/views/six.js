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

// IndexDB 学习
// IndexedDB遵循同源策略。因此，尽管您可以访问域中存储的数据，但不能跨不同域访问数据。
// IndexedDB是一个异步 API，可以在大多数上下文中使用，包括  Web Workers
// IndexedDB 在浏览器的隐私模式下是被完全禁止的。 
// 尝试创建一个与已存在的对象仓库重名（或删除一个不存在的对象仓库）会抛出错误。

let db, dbName = "the_name";

function openDB() {
    // 新建数据库
    // 如果数据库不存在，open 操作会创建该数据库，然后 onupgradeneeded 事件被触发，
    // 你需要在该事件的处理函数中创建数据库模式。
    // 如果数据库已经存在，但你指定了一个更高的数据库版本，会直接触发 onupgradeneeded 事件，
    // 允许你在处理函数中更新数据库模式
    // 第二个参数，就是数据库的版本号，只能用正整数，而且，同名称的数据库，版本号只能越来越大
    let request = window.indexedDB.open(dbName, 1);
    // indexedDB.deleteDatabase(dbName);   // 删除某一个数据库

    // 在打开数据库时常见的可能出现的错误之一是 VER_ERR。
    // 这表明存储在磁盘上的数据库的版本高于你试图打开的版本。
    // 这是一种必须要被错误处理程序处理的一种出错情况。
    // 尝试创建一个与已存在的对象仓库重名（或删除一个不存在的对象仓库）会抛出错误。
    request.onerror = function () {
        console.log('有错误')
    };
    // 如果数据库创建成功，打开数据库请求的 onsuccess 处理函数会被触发。
    request.onsuccess = function (event) {
        db = event.target.result; // indexDB 对象仓库
        console.log('打开数据库');
        db.onversionchange = function (event) {
            db.close();
            console.log(event)
        };
    };

    return request
}

function makeIndexDB() {
    const customerData = [{
            ssn: "100-100-100",
            name: "Bill1",
            age: 100,
            email: "100@company.com"
        },
        {
            ssn: "60-60-60",
            name: "Bill2",
            age: 60,
            email: "60@home.org"
        },
        {
            ssn: "30-30-30",
            name: "Bill3",
            age: 30,
            email: "30@home.org"
        },
        {
            ssn: "10-10-10",
            name: "Bill",
            age: 10,
            email: "10@home.org"
        }
    ];

    // 打开数据库
    openDB()
        // onupgradeneeded 是我们唯一可以修改数据库结构的地方。
        // 在这里面，我们可以创建和删除对象存储空间以及构建和删除索引。
        .onupgradeneeded = function (event) {
            db = db ? db : event.target.result; // indexDB 对象仓库
            // 建立一个对象仓库来存储我们客户的相关信息（事务），并选择 ssn 作为默认键路径
            // 这个方法第一个参数是仓库的名称，第二个是一个参数对象
            var objectStore = db.createObjectStore("customers", {
                keyPath: "ssn"
            });

            // 建立一个索引来通过姓名来搜索客户。名字可能会重复，所以我们不能使用 unique 索引
            // 通过在创建索引时设置 unique 标记，索引可以确保不会有两个具有同样索引
            // createIndex() 提供了一个可选地 options 对象，该对象细化了我们希望创建的索引类型
            objectStore.createIndex("name", "name", {
                unique: false
            });

            // 使用邮箱建立索引，我们向确保客户的邮箱不会重复，所以我们使用 unique 索引
            objectStore.createIndex("email", "email", {
                unique: true
            });

            // 使用事务的 oncomplete 事件确保在插入数据前对象仓库已经创建完毕
            objectStore.transaction.oncomplete = function () {

                // IDBDatabase.transaction 启动一个事务。用于访问对象存储。在单独的线程中运行。
                // 该方法接受两个参数：storeNames (作用域，一个你想访问的对象仓库的数组），事务模式 mode（readonly 或 readwrite）
                // 使用 readonly 或 readwrite 模式都可以从已存在的对象仓库里读取记录。但只有在 readwrite 事务中才能修改对象仓库。
                // 你可以同时执行多个 readnoly 事务，哪怕它们的作用域有重叠；但对于在一个对象仓库上你只能运行一个 readwrite 事务
                let store = db.transaction("customers", "readwrite").objectStore("customers"); // 打开某一个数据对象

                customerData.forEach(function (customer) {
                    // add() 方法的调用时，对象仓库中不能存在相同键的对象。
                    // 如果你想修改一个已存在的条目，或者你不关心该数据是否已存在，你可以使用 put() 方法
                    store.add(customer);
                });
            };
        }
}
// 删除数据
function deleteData() {
    // 打开数据库
    let store = db.transaction("customers", "readwrite")
        .objectStore("customers");
    // 操作数据
    store.delete("30-30-30").onsuccess = function () {
        //    操作成功的回调
        console.log('删除数据成功！')
    };
}

// 获取数据
function getData() {
    // 打开数据库
    let store = db.transaction("customers", "readwrite")
        .objectStore("customers");
    // 操作数据
    store.get("60-60-60").onsuccess = function (event) {
        console.log(event.target.result)
        //    操作成功的回调
        console.log('获取数据成功！')
    };
}

// 修改数据
function putData() {
    // 打开数据库
    let store = db.transaction("customers", "readwrite")
        .objectStore("customers");
    // 操作数据
    store.get("60-60-60").onsuccess = (t) => {
        let data = t.target.result;
        data.age = 65;
        store.put(data);
    }
}

// 使用游标
function useCursor() {
    // 打开目标对象
    let store = db.transaction("customers", "readwrite")
        .objectStore("customers");
    // 获取一条
    store.openCursor().onsuccess = function (event) {
        var result = event.target.result;
        if (result) {
            console.log(result.value);
            event.target.result.continue(); // 类似循环，会继续向下逐条读取所有数据
        }

    };
    // 获取全部数据
    store.getAll().onsuccess = function (event) {
        var value = event.target.result;
        console.log(value);
    };

}

// 使用索引
// “name” 索引不是唯一的，查找"Bill" 的记录可能不止一条。在这种情况下，你总是得到键值最小的那个。
function useIndex() {
    // 打开目标对象
    let store = db.transaction("customers", "readwrite")
        .objectStore("customers").index("name").get("Bill");
    // 获取数据
    store.onsuccess = function (event) {
        console.log(event.target.result.ssn)
    };
}

function useRoundCursor() {
    // 打开目标对象
    let store = db.transaction("customers", "readwrite")
        .objectStore("customers").index('name'),
        round = IDBKeyRange.bound('Bill', 'Bill3', false, true);
    // 获取一条
    store.openCursor(round, "prev").onsuccess = function (event) {
        var value = event.target.result.value;
        console.log(value);
    };
}


function test() {}


let arr = [{
        name: '使用范围游标',
        fn: useRoundCursor
    },
    {
        name: '使用游标',
        fn: useCursor
    }, {
        name: '使用索引',
        fn: useIndex
    }, {
        name: '修改数据',
        fn: putData
    }, {
        name: '获取数据',
        fn: getData
    },
    {
        name: '删除数据',
        fn: deleteData
    }, {
        name: '打开数据',
        fn: openDB
    },
    {
        name: '创建并打开数据库',
        fn: makeIndexDB
    },

    {
        name: '测试',
        fn: test
    },


    {
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
    }
]

export default {
    arr

}