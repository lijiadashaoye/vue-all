export default {
    makeFocus: {
        bind(...k) {
            // 当指令绑定到 HTML 元素上时触发.**只调用一次**
            console.log(k)
            console.log(k[1].value) // 自定义指令传参
        },
        inserted(...k) {
            // 当绑定了指令的这个HTML元素插入到父元素上时触发.但不保证,父元素已经插入了 DOM 文档
            console.log(k)
            k[0].focus()
        },
        updated(...k) {
            // 所在组件的`VNode`更新时(标签发生变化)调用.
            console.log(k)
        },
        componentUpdated(...k) {
            // 指令所在组件的 VNode 及其子 VNode 全部更新后(value发生变动)调用。
            console.log(k)
        },
        unbind(...k) {
            // 只调用一次，指令与元素解绑时调用，一般指切换页面或隐藏元素.
            console.log(k)
        }
    }
}