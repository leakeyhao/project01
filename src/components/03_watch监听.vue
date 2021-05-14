<template>
    <div>
        <button v-for="(v, i) of girls" :key="i" @click="girlsFn(i)">
            {{ v }}
        </button>
        <p>欢迎选【{{ name }}】</p>
        <button @click="overFunc">完成</button>
        <p>{{ overText }}</p>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref, watch } from "vue";
interface dataProps {
    girls: Array<string>;
    name: string;
    girlsFn: (index: number) => void;
}
export default defineComponent({
    name: "HelloWorld",

    setup() {
        //把同一行为的变量和方法放在一起, 便于后期管理维护
        let data: dataProps = reactive({
            girls: ["张三", "李四", "王五"],
            name: "",
            girlsFn(index) {
                data.name = data.girls[index];
            },
        });

        let overText = ref(" | 东东");
        let overFunc = () => {
            overText.value = "订阅完成" + overText.value;
            // document.title = overText.value;
        };

        //watch的第一个参数 : 监听的变量, 如果有多个变量就写在数组里, 第二个参数是一个回调函数
        //() => data.name 这种写法是为了兼容Vue2.x, 才能监听到
        // [Vue warn]: Invalid watch source:   A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.
        watch([overText, () => data.name], (newValue, oldValue) => {
            console.log(newValue, oldValue);
            document.title = newValue[0];
        });

        //...名叫 扩展运算符
        return { ...toRefs(data), overText, overFunc };
    },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
