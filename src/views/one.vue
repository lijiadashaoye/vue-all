<template>
  <div>
    <h3>通过路由接收的参数：{{name}}</h3>
    <div class="wap">
      <div>
        <h3>自定义组件</h3>
        <selfInput :label="'自定义组件'" v-model="selfInput" @change="selfEmit" />
      </div>

      <div>
        <h3>插槽：在父组件里引用子组件，但要从父组件里添加一些标签与子组件混合显示时使用</h3>
        <h4>先要把子组件引入</h4>
        <slots>
          <template v-slot:header>
            <p
              style="color:red;"
            >父组件,v-slot:header 写法找到插槽, v-slot 只能添加在&lt;template&gt; 上，写在子组件插入的内容用</p>
          </template>
          <template v-slot:content="{jigou}">
            <p style="color:red;">父组件：父组件里定义好匹配到子组件里的插槽的名称，和要查到子组件里显示的内容</p>
            {{jigou}}
          </template>
          <template #footer="g">
            <p style="color:red;">父组件，#footer写法找到插槽，并传递参数</p>
            {{g}}
          </template>
        </slots>
      </div>

      <div>
        <h3>动态加载组件</h3>
        <AsyncComponent />
      </div>

      <div>
        <h3>依赖注入</h3>
        <p>provide/inject 是解决组件之间的通信问题的利器，不受层级结构的限制。</p>
        <button @click="seeFuWu">使用依赖注入</button>
        <br />
        {{seeFuWuData}}
      </div>

      <div>
        <h3>全局根数据</h3>
        <button @click="getRoot">获取main.js里定义的根的数据</button>
        <br />
        {{seeRootData}}
      </div>

      <div>
        <h3>过滤器</h3>
        <p>前一个过滤器返回的数据是后一个过滤器接收的参数</p>
        <p>先执行 filterZuJian，再执行 quanjuFilter</p>
        <h3>{{date|filterZuJian|quanjuFilter}}</h3>
      </div>

      <div>
        <h3>数据的监听</h3>
        <p>基本数据：{{val}}</p>
        <p>对象数据：{{wat.name}}</p>
        <p>数组数据：{{arr[0].one}}</p>
        <button @click="testWatch">深度监听</button>
      </div>

      <div>
        <h3>状态管理</h3>
        {{$store.state.age}}
        <button @click="testCommit">使用commit</button>
        <button @click="testDispatch">使用dispatch</button>
      </div>

      <div>
        <h3>使用命名空间</h3>
        <p>使用mapGetters拿到getter：{{oneGetter2}}</p>
        <p>使用可传参的方式拿到getter：{{oneGetter1}}</p>
        <p>使用mapState拿到state：{{num}}</p>
        <button @click="changeNum({n:3})">使用mapMutations触发commit</button>
        <br />
        <button @click="chongmingming({n:4})">使用mapActions触发action，并重命名在当前组件里使用的action名字</button>
        <br />
        <button @click="changeNum1({n:3})">触发commit</button>
        <br />
        <button @click="asyncChange1({n:4})">触发dispatch</button>
      </div>

      <div>
        <h3>使用自定义插件</h3>
        <button @click="chajian">插件</button>
        {{chanianData}}
      </div>

      <div>
        <h3>使用vue插件</h3>
        <button @click="usePlugin">插件</button>
        <div :plugInputData="plugData" :is="plugData.component"></div>
      </div>

      <div>
        <h3>动态参数路由</h3>
        <button @click="luyou(1)">参数：1</button>
        <button @click="luyou(2)">参数：2</button>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

// 动态按需加载组件写法一
import selfInput from "@/components/one/one1";
import slots from "@/components/one/one2";
import forMixin from "@/components/one/one4";

export default {
  // 同名钩子函数将合并为一个数组，因此都将被调用。
  // 另外，混入对象的钩子将在组件自身钩子之前调用。
  // 写法一，混入子组件会自动执行(created、mounted 等）但如果混入组件里有 this.minMethods()这种调取方法的
  // 如果两个组件有同名的methods，则调用当前组件里的方法，如 minMethods
  mixins: [forMixin],
  // 写法二，混入子组件会被封装成同名对象(forMixin)，之后按需调用
  // mixins: ["forMixin"],
  // 依赖注入
  inject: ["fuwu"],
  components: {
    selfInput,
    slots,
    // 动态按需加载组件写法二
    AsyncComponent: () => {
      // 只是为了体现异步延迟
      return new Promise(res => {
        setTimeout(() => {
          res(import("@/components/one/one3")); // import() 其实也是 Promise
        }, 3000);
      });
    }
  },
  data() {
    return {
      chanianData: "", // 获取插件的值
      selfInput: 44, // 给自定义组件的传入值
      seeRootData: "", // 查看根数据
      seeFuWuData: "", // 查看依赖注入数据
      date: new Date(), // 过滤器使用的数据

      val: 1,
      wat: {
        name: 10
      },
      arr: [{ one: 100 }],

      name: "",
      plugData: {
        component: null,
        data: "传给插件的数据"
      }
    };
  },
  created() {
    // 获取路由传参
    this.name = this.$route.query.name;

    // 值为对象的选项，例如 methods、components 和 directives，将被合并为同一个对象。
    this.minMethods(); // 两个组件有同名的方法，则调用当前组件里的方法

    // 混入写法二时的使用方法
    // forMixin.created();
    // forMixin.methods.minMethods();

    // console.log(forMixin);
  },
  filters: {
    // 组件内的管道、过滤器
    filterZuJian: function(val) {
      return {
        year: val.getFullYear(),
        month: val.getMonth() + 1,
        day: val.getDate()
      };
    }
  },
  mounted() {
    // 如果data里的数据是引用类型的数据(对象、数组)，需要进行深度监听
    // 深度监听写法一：
    // this.$watch(
    //   "wat",
    //   function(...d) {
    //     // 参数是一个数组，但没太大实际意义
    //     console.log(d);
    //   },
    //   { deep: true, immediate: true }
    // );
  },
  watch: {
    // 表层监听组件内的值类型(数字、字符串、布尔值)数据变动
    val: (...d) => {
      // 参数是一个数组，[新值，旧值]
      console.log(d);
    },
    // 如果值被重新赋值了，也可以监听到
    arr: (...d) => {
      // 参数是一个数组，[新值，旧值]
      console.log(d);
    },
    // 深度监听写法二：
    wat: {
      handler: e => {
        console.log(e);
      },
      deep: true,
      // 如果不设置immediate，或者将immediate设为false的话，则刷新页面后不会立即监听此对象
      immediate: false
    }
  },
  computed: {
    // getter 就是将state执行过getter方法后的结果返回，使得fromGetter在组件内用作属性来读值
    ...mapGetters("oneStore", ["oneGetter2"]), // 只能用来读取数据
    // 使用可传参方式获取getter，用到this，不能用箭头函数
    oneGetter1: function() {
      return this.$store.getters["oneStore/oneGetter1"](2);
    },

    // 使用 mapState 辅助函数帮助我们生成计算属性，直接将store里的状态作为组件属性使用
    // 使用命名空间方式区分不同的 state，但不能重名（即num必须唯一）
    ...mapState("oneStore", ["num"])
  },
  methods: {
    // 自定义组件的事件监听
    selfEmit(e) {
      console.log(e);
    },
    // 获取全局依赖注入服务提供的数据
    getRoot() {
      this.seeRootData = this.$root.data;
    },
    // 查看依赖注入数据
    seeFuWu() {
      this.seeFuWuData = this.fuwu();
    },
    // 混入时重复出现的方法
    minMethods() {
      console.log("父组件中的对象型选项");
    },
    // 数据的深度监听使用
    testWatch() {
      this.wat.name++;
      this.arr[0].one++; // 只能通过this.$watch监听到
      // this.arr = [{ one: 3234 }]; // 如果 arr 指向被重新赋值了，也可以通过 watch 监听到
      this.val++;
    },
    // 状态管理
    testCommit() {
      // this.$store.commit("getAge");
      this.$store.commit({ type: "getAge" });
    },
    testDispatch() {
      // this.$store.dispatch("getAge1");
      this.$store.dispatch({ type: "getAge1" }).then(v => {
        console.log("action 后可接 then，参数：", v);
      });
    },
    // 使用 mapMutations 辅助函数将 mutations 的方法映射为 store.commit 调用
    // 直接写，省略了 this.$store.commit
    // 使用命名空间方式区分不同的 mutations
    ...mapMutations("oneStore", ["changeNum"]),
    // 使用 mapActions 辅助函数将 actions 的方法映射为 store.dispatch 调用
    // 直接写，省略了 this.$store.dispatch
    // 使用命名空间方式区分不同的 actions
    // 并重命名在当前组件里使用的action名字
    ...mapActions("oneStore", {
      chongmingming: "asyncChange"
    }),
    // 以载荷形式分发
    changeNum1() {
      this.$store.commit({
        type: "oneStore/changeNum",
        n: 7
      });
    },
    // 以载荷形式分发
    asyncChange1() {
      this.$store.dispatch({
        type: "oneStore/asyncChange",
        n: 5
      });
    },
    // 使用自定义插件
    chajian() {
      this.chanianData = this.$pluginFn(9);
    },
    // 使用vue插件
    usePlugin() {
      // 可以动态切换使用的全局插件
      this.plugData.component = this.plugData.show
        ? "testPlugPage1"
        : "testPlugPage2";
      this.plugData.show = !this.plugData.show;
    },
    
    // 根据参数决定路由 path/:canshu 形式
    luyou(num) {
      new Promise(res => {
        this.$router.push({
          name: "one"
        });
        res(num);
      }).then(t => {
        this.$router.push({
          name: "canshu",
          params: { kk: t } // kk只是一个标识，只要和路由配置处用的名字相同即可
        });
      });
    }
  }
};
</script>