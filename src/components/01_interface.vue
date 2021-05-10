<template>
    <div>
        <button v-for="(v, i) of girls" :key="i" @click="girlsFn(i)">
            {{ v }}
        </button>
        <p>欢迎选【{{ name }}】</p>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
interface dataProps {
    girls: Array<string>;
    name: string;
    girlsFn(index: number): void;
}
export default defineComponent({
    name: "HelloWorld",
    setup() {
        //把同一行为的变量和方法放在一起, 便于后期管理维护
        const data: dataProps = reactive({
            girls: ["张三", "李四", "王五"],
            name: "",
            girlsFn(index) {
                data.name = data.girls[index];
            },
        });
        //...名叫 扩展运算符
        return { ...toRefs(data) };
    },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
