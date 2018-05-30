<template>
    <div>

        <h1>测试store</h1>
		
		<div>显示：{{index}}</div>
		
        <el-button type="primary" @click="addIndex">出发storeIndex</el-button>

    </div>
</template>

<script>
	import { mapGetters } from 'vuex'
	
    export default {
        name: "Store" ,
        
        created(){
        	console.log( this.$store );
        } ,
        
        methods : {
        	addIndex(){
        		this.$store.dispatch("weixin/addIndex") ;
        	}
        } ,
        
        computed : {
        	index(){
        		return this.$store.state.weixin.index ;
        	}
        }
    }
</script>

<style scoped>

</style>