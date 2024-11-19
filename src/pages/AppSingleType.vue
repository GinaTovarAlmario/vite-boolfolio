<script>
import AppLoader from '../components/AppLoader.vue';
import TypeListCard from '../components/TypeListCard.vue';
import axios from 'axios';
export default {
    name: 'AppSingleType',
    data() {
        return {
            singleType: null,
            apiUrl:'http://127.0.0.1:8000/api/types',
        }
    },
    methods: {
        getSingleType() {
            axios.get(`${this.apiUrl}/${this.$route.params.id}`)
                .then((response)=>{
                    // handle success
                    console.log(response.data.results);
                    this.singleType = response.data.results;
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                });
        }
    },
    created(){
        this.getSingleType();
    },
    components: {
        TypeListCard,
        AppLoader
    },
    computed:{
        loaded(){
            return this.singleType !== null;
        }
    }

}
</script>
<template>
    <TypeListCard :typeObj = "singleType" v-if="loaded"/> 
    <AppLoader v-else/>
</template>

<style scoped lang="scss">

</style>