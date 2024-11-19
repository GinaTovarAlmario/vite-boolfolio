<script>
import axios from 'axios';
import ProjectListCard from './ProjectListCard.vue';
import AppLoader from './AppLoader.vue';
export default {
    name: 'ProjectList',
    data() {
        return {
            projectList: [],
        }
    },
    components: {
        ProjectListCard,
        AppLoader
    },
    methods: {
        // metodo per recuperare i projects
        getProjects() {
            axios.get('http://127.0.0.1:8000/api/projects')
                .then((response) => {
                    console.log(response.data.results);
                    this.projectList = response.data.results;
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    },
    created() {
        this.getProjects();

    }
}
</script>

<template>
    <section class="loader">
        <AppLoader/>
    </section>
    <section class="col-12" id="project-list">
        <ProjectListCard 
        v-for="projectItem in projectList" 
        :key="projectItem.id" 
        :card="projectItem" />
    </section>
</template>

<style scoped lang="scss">
main {
    background-color: blueviolet;

}
</style>