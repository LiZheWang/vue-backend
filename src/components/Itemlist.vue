<template>
    <div class="itemListBox">
        <div class="label"><slot name="label"></slot></div>
        <div class="con">
            <slot></slot>
        </div>
        <div class="tools">
            <slot name="tools"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Itemlist"
    }
</script>

<style scoped>
.itemListBox{
    display: flex;
    align-items: center;
    padding: 10px 15px;
}
.itemListBox .label{
    width: 35px;
    height: 35px;
    overflow: hidden;
    border-radius: 50%;
    background: #FE5D58;
    color:#fff ;
    display: flex;
    justify-content: center;
    align-items: center;

    flex: none;

}
.itemListBox .tools{

}
.itemListBox .con{
    padding: 0 15px;
    flex: 1;
}
.itemListBox .con .title{
    font-weight: normal;
    margin: 0px;
    margin-bottom: 2px;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    line-height: 22px;

}
.itemListBox .con .info{
    font-size: 12px;
    color: rgba(0,0,0,.6);
}


</style>