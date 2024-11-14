<script>
import axios from 'axios';
export default {
    name: 'AppMain',
    data() {
        return {
            projectList :[],
        }
    },
    methods: {
        // metodo per recuperare i projects
        getProjects() {
            axios.get('http://127.0.0.1:8000/api/projects')
                .then((response)=> {
                    console.log(response.data.results);
                    this.projectList = response.data.results;
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    },
    created(){
        this.getProjects();

    }
}
</script>

<template>
    <main>
        <div class="container">
            <div class="row">
                <div class="col-12 mt-3">
                    <h2 class="mt-3 text-center fw-bold">
                        Projects List:
                    </h2>
                </div>
                <div class="col-12">
                    <div class="card mb-3" v-for="singleProject in projectList" :key="singleProject.id">
                        <div class="card-body">
                            <h5 class="card-title">
                               Title: {{singleProject.title}}
                            </h5>
                            <h6 class="card-subtitle mb-2 text-body-secondary">
                                Author: {{singleProject.author}}
                            </h6>
                            <p class="card-text">
                                Date: {{singleProject.date}}
                            </p>
                            <p class="card-text">
                               Status: {{singleProject.status}}
                            </p>
                            <p class="card-text">
                                Type: {{singleProject.type.name}}
                            </p>
                            <p class="card-text">
                                Technologies: {{singleProject.technologies.name}}
                            </p>
                            <p class="card-text">
                                Description: {{singleProject.description}}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped lang="scss"></style>