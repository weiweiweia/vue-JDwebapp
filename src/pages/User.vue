<template>
    <div class="user">
        <h1>我的</h1>
        <TabBar></TabBar>
    </div>
</template>

<script>
export default {
    name:'User',
    components:{
        TabBar: () => import("@/components/common/TabBar.vue")
    }
}
</script>

<style>

</style>