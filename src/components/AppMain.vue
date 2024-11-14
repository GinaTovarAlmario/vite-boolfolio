<script>
import axios from 'axios';
import ProjectCard from './ProjectCard.vue';
export default {
    name: 'AppMain',
    data() {
        return {
            projectList :[],
        }
    },
    components:{
        ProjectCard,
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
                    <ProjectCard 
                    :cards="projectList"
                    />
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped lang="scss">
main{
    background-color: blueviolet;

}
</style>