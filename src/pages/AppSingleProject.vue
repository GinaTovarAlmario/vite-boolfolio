<script>
import ProjectListCard from '../components/ProjectListCard.vue';
import axios from 'axios';
export default {
    name: 'AppSinglePost',
    data() {
        return {
            singleProject:null,
            apiUrl:'http://127.0.0.1:8000/api/projects',
        }
    },
    methods: {
        getSingleProject() {
            axios.get(`${this.apiUrl}/${this.$route.params.id}`)
                .then(function (response) {
                    // handle success
                    console.log(response.data.results);
                    this.singleProject = response.data.results;
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                });
        }
    },
    created(){
        this.getSingleProject();
    },
    components: {
        ProjectListCard,
    }

}
</script>
<template>
    <ProjectListCard singleProjectObj = "singleProject"/> 
</template>

<style scoped lang="scss"></style>