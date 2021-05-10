<template>
    <div>
        <button v-for="(v, i) of girls" :key="i" @click="girlsFn(i)">
            {{ v }}
        </button>
        <p>欢迎选【{{ name }}】</p>
        <button type="button" @click="change">按钮</button>
    </div>
</template>

<script lang="ts">
/*
vue3.x生命周期钩子函数(都写在 setup 函数里 , 钩子函数前面都统一加上 on 表示监听的意思) :
  setup(()=>{}) // 在beforeCreate 和 created 之前执行 , vue3.x中已经取消了 beforeCreate 和 created 这两个钩子函数 , 这时 data 和 methods 还没创建好 -->vue2.x写法 : beforeCreate created
  onBeforeMount(()=>{}) // 组件挂载到页面之前执行 -->vue2.x写法 : beforeMount
  onMounted(()=>{}) // 组件挂载到页面之后执行 -->vue2.x写法 : mounted
  onBeforeUpdate(()=>{}) // 组件更新之前执行 -->vue2.x写法 : beforeUpdate
  onUpdated(()=>{}) // 组件更新之后执行 -->vue2.x写法 : updated
  onBeforeUnmount(()=>{}) // 组件卸载之前执行 -->vue2.x写法 : beforeDestory
  onUnmounted(()=>{}) // 组件卸载之后执行 -->vue2.x写法 : destroyed

  onActived(()=>{}) // <keep-alive>缓存</keep-alive>被激活时触发
  onDeactived(()=>{}) // <keep-alive>缓存</keep-alive>比如从A组件切换到B组件, A组件消失时执行

  onErrorCaptured(()=>{}) //当捕获一个来自子孙组件的异常时激活钩子函数
*/
import {
    defineComponent,
    onBeforeMount,
    onBeforeUnmount,
    onBeforeUpdate,
    onMounted,
    // onRenderTracked,
    onRenderTriggered,
    onUnmounted,
    onUpdated,
    reactive,
    toRefs,
} from "vue";
interface dataProps {
    girls: Array<string>;
    name: string;
    girlsFn(index: number): void;
}
export default defineComponent({
    name: "HelloWorld",

    setup() {
        console.log("1-开始创建组件-------setup()");

        //把同一行为的变量和方法放在一起, 便于后期管理维护
        const data: dataProps = reactive({
            girls: ["张三", "李四", "王五"],
            name: "",
            girlsFn(index) {
                data.name = data.girls[index];
            },
        });

        let change = () => {
            data.girls[0] = "小林";
        };

        onBeforeMount(() => {
            console.log("2-组件挂载到页面之前执行-------onBeforeMount()");
        });

        onMounted(() => {
            console.log("3-组件挂载到页面之后执行-------onMounted()");
        });

        onBeforeUpdate(() => {
            console.log("4-组件更新之前执行-------onBeforeUpdate()");
        });

        onUpdated(() => {
            console.log("5-组件更新之后执行-------onUpdated()");
        });

        onBeforeUnmount(() => {
            console.log("6-组件卸载之前执行-------onBeforeUnmount()");
        });

        onUnmounted(() => {
            console.log("7-组件卸载之后执行-------onUnmounted()");
        });

        // onRenderTracked((event) => {
        //     console.log("状态跟踪钩子函数--------->", event); //跟踪所有响应式数据和函数 , 常用来调试使用(不推荐调试使用)
        // });

        onRenderTriggered((event) => {
            console.log("状态跟踪钩子函数--------->", event); //跟踪单个响应式数据和函数 , 点哪个就跟踪哪个 , 常用来调试使用(推荐调试使用)
        });

        //...名叫 扩展运算符
        return { ...toRefs(data), change };
    },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
