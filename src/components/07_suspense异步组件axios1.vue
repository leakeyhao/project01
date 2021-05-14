<template>
    <div>
        <img :src="rowData && rowData.imgUrl" />
    </div>
</template>

<script lang="ts">
/* 
async...await这种写法，它是promise的语法糖。建议你在工作中也尽量的使用async...await的写法
Suspense也是支持async...await的语法的
*/
import axios from "axios";
import { defineComponent } from "vue";

export default defineComponent({
    async setup() {
        ////promise 语法糖  返回之后也是promise对象
        const rowData = await axios.get("https://apiblog.jspang.com/default/getGirl");
        console.log(rowData);

        // .then((res) => {
        //     return res.data;
        // })
        // .catch((err) => {
        //     console.error(err);
        // });
        return { rowData: rowData.data };
    },
});
</script>

<style scoped></style>
