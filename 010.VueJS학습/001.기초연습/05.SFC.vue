<template>
    <div class="mytemp">
        <span class="tit">{{ text }}</span>
    </div>
</template>

<script>
export default{
    name: "Mytemp",
    data(){
        return {
            text: "연습이예용~~!"
        }
    }
}
</script>

<style scoped>
    span.tit {color: red;}
</style>