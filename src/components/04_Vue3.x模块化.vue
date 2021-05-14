<template>
    <div>{{ nowTime }}</div>
    <button @click="getNowTime">按钮</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { nowTime, getNowTime } from "@/hooks/useGetTime";

export default defineComponent({
    setup() {
        return { nowTime, getNowTime };
    },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
