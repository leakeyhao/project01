<template>
    <teleport to="#popup">
        <div>666.com</div>
    </teleport>
</template>
<script lang="ts">
/* 
使用Teleport函数(方法) //瞬移组件/独立组件  teleport : 传送
Teleport方法，可以把Dialog组件渲染到你任意想渲染的外部Dom上，不必嵌套再#app里了,
这样就不会互相干扰了。你可以把Teleport看成一个传送门，把你的组件传送到你需要的地方。
teleport组件和其它组件没有任何其它的差异，用起来都是一样的。

使用的第一步是把你编写的组件用<teleport>标签进行包裹，在组件上有一个to属性，这个就是要写你需要渲染的DOMID了。
比如要渲染到 id='app' 旁边, 就增加一个model节点
<div id="app"></div>
<div id="modal"></div>
*/
export default {};
</script>
<style scoped>
div {
    width: 200px;
    height: 200px;
    background: red;
    position: absolute;
    left: 50px;
    top: 0;
}
</style>
