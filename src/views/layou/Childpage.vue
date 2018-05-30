<template>
  <div class="childPage">
    <div class="childPageTitle">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
        <template v-if="routes.length">
          <el-breadcrumb-item
            v-for="item in routes"
            :key="item.path"
            v-if="item.name != 'Home'"
            :to="item.path">{{item.meta.title}}</el-breadcrumb-item>
        </template>
      </el-breadcrumb>
      <h3 class="comTitle">{{$route.meta.title}}</h3>
      <div class="info">
        <slot name="titleInfo"></slot>
      </div>
    </div>
    <div class="childPageBody">
      <slot></slot>
    </div>
  </div>
</template>

<script>
    export default {
        name: "childpage" ,
    }
</script>

<style scoped>

</style>
