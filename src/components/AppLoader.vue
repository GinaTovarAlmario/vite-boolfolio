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
            <div class="face face-one"></div>
            <div class="face face-two"></div>
            <div class="face face-three"></div>
            <div class="face face-four"></div>
            <div class="face face-five"></div>
            <div class="face face-six"></div>
        </div>
    </div>
</template>
<style scoped lang="scss">
#loader-cube{
    background-color: blueviolet;
    --cube-side-length: 15vw;
    display: flex;
    justify-content: center;
    align-items: center;

    .cube{
        height:var(--cube-side-length) ;
        width:var(--cube-side-length) ;
        position: relative;
        transform-style: preserve-3d;

        .face{
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            border: 5px solid white;
        }
    }


}

</style>