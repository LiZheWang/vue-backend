<template>
    <div class="notFoundBox">
        <h1>4<i class="fa fa-bandcamp"></i>4</h1>
        <div class="info">您访问的页面不存在!
            <router-link to="/">
                <el-button type="text">返回首页</el-button>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NotFound"
    }
</script>

<style scoped lang="less">
    .notFoundBox{
        text-align: center;
        h1{
            font-size: 140px;
            i{
                font-size: 130px;
                margin-left: 10px;
                margin-right: 10px;
                animation: rotateA ease-out infinite 3s;
            }
        }
    }
    
    @keyframes rotateA {
        0%{
            transform: rotate(0deg);
        }
        20%{
            transform: rotate(40deg);
        }
        40%{
            transform: rotate(80deg);
        }
        50%{
            transform: rotate(100deg);
        }
        70%{
            transform: rotate(70deg);
        }
        90%{
            transform: rotate(30deg);
        }
        100%{
            transform: rotate(0deg);
        }
    }
    
</style>