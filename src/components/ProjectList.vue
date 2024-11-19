<script>
import axios from 'axios';
import ProjectListCard from './ProjectListCard.vue';
import AppLoader from './AppLoader.vue';
export default {
    name: 'ProjectList',
    data() {
        return {
            projectList: [],
            loaded:false,
        }
    },
    components: {
        ProjectListCard,
        AppLoader
    },
    methods: {
        // metodo per recuperare i projects
        getProjects() {
            axios.get('http://127.0.0.1:8000/api/projectss')
                .then((response) => {
                    console.log(response.data.results);
                    this.projectList = response.data.results;
                    this.loaded = true;
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
    <section class="loader" v-if="!loaded">
        <AppLoader/>
    </section>
    <section class="col-12" id="project-list"  v-else>
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