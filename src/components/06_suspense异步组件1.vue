<template>
    <div>{{ result }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    setup() {
        return new Promise((reslove) => {
            setTimeout(() => {
                return reslove({ result: "海草" });
            }, 2000);
        });
    },
});
</script>

<style scoped></style>
