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
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk
                                of the card's content.</p>
                            <a href="#" class="card-link">Card link</a>
                            <a href="#" class="card-link">Another link</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped lang="scss"></style>