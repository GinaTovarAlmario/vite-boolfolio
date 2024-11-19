<script>
import AppLoader from '../components/AppLoader.vue';
import ProjectListCard from '../components/ProjectListCard.vue';
import axios from 'axios';
export default {
    name: 'AppSinglePost',
    data() {
        return {
            singleProject: null,
            apiUrl:'http://127.0.0.1:8000/api/projects',
        }
    },
    methods: {
        getSingleProject() {
            axios.get(`${this.apiUrl}/${this.$route.params.id}`)
                .then((response)=>{
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
        AppLoader
    },
    computed:{
        loaded(){
            return this.singleProject !== null;
        }
    }

}
</script>
<template>
    <ProjectListCard :card = "singleProject" v-if="loaded"/> 
    <AppLoader v-else/>
</template>

<style scoped lang="scss">

</style>