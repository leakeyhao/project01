<template>
    <div>
        <telePort></telePort>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import telePort from "./05_teleport(瞬移组件)1.vue";

export default defineComponent({
    components: { telePort },
    setup() {
        return {};
    },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
