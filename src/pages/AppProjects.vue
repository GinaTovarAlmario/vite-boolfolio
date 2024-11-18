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
                <div class="col-12 mt-3">
                    <h2>
                        Project List:
                    </h2>
                    <ProjectList/>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped lang="scss">

</style>