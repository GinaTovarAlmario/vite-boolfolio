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
            lastPageNumber: 1,
            currentPageNumber: 1,
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
                    page: pageNumber,
                }

            })
                .then((response) => {
                    console.log(response.data.results.data);
                    this.projectList = response.data.results.data;
                    this.lastPageNumber = response.data.results.last_page;
                    this.currentPageNumber = pageNumber;
                    this.loaded = true;
                })
                .catch(function (error) {
                    console.log(error);
                })
        },
        previousPage() {
            if (this.currentPageNumber > 1) {
                // aggiorna
                this.currentPageNumber--;
                this.getProjects(this.currentPageNumber);
            }
        },
        nextPage() {
            if (this.currentPageNumber < this.lastPageNumber) {
                // aggiorna
                this.currentPageNumber++;
                this.getProjects(this.currentPageNumber);
            }
        },
        showSingleProject(projectId){
            this.$router.push({ name:this.projects.show, params:{ id:projectId}})
        }
        
    },
    created() {
        this.getProjects(1);

    },
    computed:{
        
        firstPage(){
            return this.currentPageNumber === 1;
        },
        lastPage(){
            return this.currentPageNumber >= this.lastPageNumber;
        }
    }
}
</script>

<template>
    <section class="loader mb-4 mt-4" v-if="!loaded">
        <AppLoader />
    </section>
    <section class="col-12" id="project-list" v-else>
        <ProjectListCard v-for="projectItem in projectList" 
        :key="projectItem.id" 
        :card="projectItem" />
    </section>
    <section class="navigation">
        <nav>
            <ul class="d-flex justify-content-between">
                <li>
                    <button class="btn btn-primary" @click="previousPage"
                    :class="{ 'disabled': firstPage}">
                    >
                        < Prev
                    </button>
                </li>
                <li>
                    <button class="btn btn-primary" @click="nextPage"
                        :class="{ 'disabled': lastPage}">
                        Next > 
                    </button>
                </li>
            </ul>
        </nav>
    </section>
</template>

<style scoped lang="scss">
    
</style>