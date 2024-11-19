<script>
import axios from 'axios';
import ProjectListCard from './ProjectListCard.vue';
import AppLoader from './AppLoader.vue';
export default {
    name: 'ProjectList',
    data() {
        return {
            projectList: [],
            loaded: false,
            apiUrl: 'http://127.0.0.1:8000/api/projects',
            lastPageNumber:1,
            currentPageNumber:1,
        }
    },
    components: {
        ProjectListCard,
        AppLoader
    },
    methods: {
        // metodo per recuperare i projects
        getProjects(pageNumber) {
            axios.get(this.apiUrl, {
                params: {
                    page:pageNumber,
                }

                })
                .then((response) => {
                    console.log(response.data.results.data);
                    this.projectList = response.data.results.data;
                    this.lastPageNumber = response.data.results.last_page;
                    this.currentPageNumber = response.data.results.pageNumber;
                    this.loaded = true;
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    },
    created() {
        this.getProjects(1);

    }
}
</script>

<template>
    <section class="loader mb-4 mt-4" v-if="!loaded">
        <AppLoader />
    </section>
    <section class="col-12" id="project-list" v-else>
        <ProjectListCard v-for="projectItem in projectList" :key="projectItem.id" :card="projectItem" />
    </section>
</template>

<style scoped lang="scss">
main {
    background-color: blueviolet;

}
</style>