<script>
import ProjectList from '../components/ProjectList.vue';

export default {
    name: 'AppProjects',
    data() {
        return {
        }
    },
    components: {
        ProjectList,
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
                    <ProjectList/>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped lang="scss">

</style>