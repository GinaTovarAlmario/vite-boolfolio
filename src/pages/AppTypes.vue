<script>
import TypeList from '../components/TypeList.vue';
export default {
    name: 'AppProjects',
    data() {
        return {
        }
    },
    components: {
        TypeList,
    }

}
</script>

<template>
    <main>
        <div class="container">
            <div class="row">
                <div class="col-12 mt-3 text-center">
                    <h2>
                        Types List:
                    </h2>
                </div>
                <div class="col-8 m-auto">
                    <TypeList/>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped lang="scss">

</style>