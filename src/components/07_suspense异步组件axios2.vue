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
        /* 
        在异步请求中必须要作的一件事情，就是要捕获错误，因为我们没办法判断后端给我们返回的结果，
        也有可能服务不通，所以一定要进行捕获异常和进行处理。
        在vue3.x的版本中，可以使用onErrorCaptured这个钩子函数来捕获异常。在使用这个钩子函数前，需要先进行引入.
        */
        onErrorCaptured((error) => {
            console.log("error===>", error);
            return true; //钩子函数要求我们返回一个布尔值，代表错误是否向上传递，我们这里返回了true
        });
        return {};
    },
});
</script>
<style scoped></style>
