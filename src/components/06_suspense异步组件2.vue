<template>
    <div>
        <suspense>
            <template #default>
                <asyncShow />
            </template>
            <template #fallback>
                <div>loading....</div>
            </template>
        </suspense>
    </div>
</template>

<script lang="ts">
/* 
Suspense提供两个template的位置，第一个default代表异步请求完成后，显示的模板内容。
fallback代表在加载中时，显示的模板内容。这样进行异步内容的渲染就会非常简单

注意点:如果你要使用Suspense的话，要返回一个promise对象，而不是原来的那种JSON对象。

defineComponent是用来解决TypeScript情况下，传统的Vue.extends无法对组件给出正确的参数类型推断的。
也就是说在TypeScript环境中如果参数类型推断不正常时，用defineComponent()组件来进行包装函数。
*/
import { defineComponent } from "vue";
import asyncShow from "./06_suspense异步组件1.vue";

export default defineComponent({
    components: { asyncShow },
    setup() {
        return {};
    },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
