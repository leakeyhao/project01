<template>
    <div>
        <suspense>
            <template #default>
                <showGirl />
            </template>
            <template #fallback>
                <div>loading....</div>
            </template>
        </suspense>
    </div>
</template>

<script lang="ts">
import { defineComponent, onErrorCaptured } from "vue";
import showGirl from "./07_suspense异步组件axios1.vue";

export default defineComponent({
    components: { showGirl },
    setup() {
        onErrorCaptured((error) => {
            console.log("error===>", error);
            return true;
        });
        return {};
    },
});
</script>
<style scoped></style>
