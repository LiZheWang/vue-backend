<template>
  <Childpage>
    <div>sadasdasdasd</div>
    <router-link :to="{name:'Store1'}">store1</router-link>
    <router-link :to="{name:'Store2'}">store2</router-link>
  </Childpage>
</template>

<script>
    export default {
        name: "store2"  ,
      components:{},


      created(){

      }
    }
</script>

<style scoped>

</style>
