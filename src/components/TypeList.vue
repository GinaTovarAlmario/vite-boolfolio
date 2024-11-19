<script>
import axios from 'axios';
import AppLoader from './AppLoader.vue';
import TypeListCard from './TypeListCard.vue';
export default {
    name: 'TypeList',
    data() {
        return {
            typesList: [],
            loaded: false,
            apiUrl: 'http://127.0.0.1:8000/api/types',
        }
    },
    components: {
        TypeListCard,
        AppLoader
    },
    methods: {
        // metodo per recuperare i projects
        getTypes() {
            axios.get(this.apiUrl)
                .then((response) => {
                    console.log(response.data.results);
                    this.typesList = response.data.results;
                    this.loaded = true;
                })
                .catch(function (error) {
                    console.log(error);
                })
        },
        showSingleType(typeId){
            this.$router.push({ name:'types.show', params:{ id: typeId}})
        }
        
    },
    created() {
        this.getTypes();

    },
}
</script>

<template>
    <section class="loader mb-4 mt-4" v-if="!loaded">
        <AppLoader />
    </section>
    <section class="col-12" id="project-list" v-else>
        <TypeListCard v-for="type in typesList" 
        :key="type.id" 
        :typeObj="type" 
        @click="showSingleType(type.id)"/>
    </section>
    <section class="navigation">
        
    </section>
</template>

<style scoped lang="scss">
    
</style>