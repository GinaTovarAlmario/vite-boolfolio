<script>
export default {
    name:'ApLoader',
    data() {
        return {

        }
    }
   

}
</script>
<template>
    <div id="loader-cube">
        <div class="cube">

        </div>
    </div>
</template>
<style scoped lang="scss">
#loader-cube{
    background-color: blueviolet;
    --cube-side-length: 15vw;

    .cube{
        height:var(--cube-side-length) ;
        width:var(--cube-side-length) ;
        position: relative;
    }

}

</style>