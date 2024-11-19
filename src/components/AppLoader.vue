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
            <div class="face face-one">1</div>
            <div class="face face-two">2</div>
            <div class="face face-three">3</div>
            <div class="face face-four">4</div>
            <div class="face face-five">5</div>
            <div class="face face-six">6</div>
        </div>
    </div>
</template>
<style scoped lang="scss">
#loader-cube{
    background-color: white;
    --cube-side-length: 15vw;
    display: flex;
    justify-content: center;
    align-items: center;

    .cube{
        height:var(--cube-side-length) ;
        width:var(--cube-side-length) ;
        position: relative;
        transform-style: preserve-3d;
        transform: rotate3d(1,1,1,0deg);

        .face{
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            border: 5px solid white;
            font-size: 10vw;
            color: white;
            display: flex;
            justify-content: center;
            background-color: rgba($color: blueviolet, $alpha: 0.85);
        }
        .face-two{
            transform: rotateY(90deg) translateZ(calc(var(--cube-side-length) / 2)) translateX(calc(var(--cube-side-length) / 2));
        }
        .face-three{
            transform: rotateY(90deg) translateZ(calc(var(--cube-side-length) / -2)) translateX(calc(var(--cube-side-length) / 2));
        }
        .face-four{
            transform: rotateY(0deg) translateZ(calc(var(--cube-side-length) / -1)) translateX(0);
        }
        .face-five{
            transform: rotateX(90deg) translateY(calc(var(--cube-side-length) / -2)) translateZ(calc(var(--cube-side-length) / -2));
        }
        .face-five{
            transform: rotateX(90deg) translateY(calc(var(--cube-side-length) / -2)) translateZ(calc(var(--cube-side-length) / 2));
        }
    }
}
@keyframes rotate360{
    to{
        transform: rotateX(360deg) rotateY(360deg);
    }
}

</style>



