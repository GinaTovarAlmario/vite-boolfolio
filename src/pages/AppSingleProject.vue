<script>
import ProjectListCard from '../components/ProjectListCard.vue';
import axios from 'axios';
export default {
    name: 'AppSinglePost',
    data() {
        return {
            apiUrlSinglePost:' ',
        }
    },
    methods: {
        getSingleProject() {
            axios.get('/user?ID=12345')
                .then(function (response) {
                    // handle success
                    console.log(response);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
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
    <!-- <ProjectListCard /> -->
    <h1>single post with ID :{{ $route.params.id }}</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim odio, amet distinctio sapiente assumenda itaque
        maxime qui ratione rem totam aliquam nemo reiciendis ex, repellat necessitatibus ullam quaerat at rerum.
        Nisi harum dolore animi, ratione similique ipsum deserunt sit iste? Deleniti, iusto similique! Perspiciatis
        voluptatem minus rem nostrum facere. Nulla dolorum voluptatibus reprehenderit explicabo! Laborum ipsa saepe
        dolor ipsum nobis.
        Neque iure suscipit numquam enim voluptatibus maiores illum! Laborum molestias dolore totam minus doloribus
        nulla fugit, impedit debitis quo veritatis, amet voluptatem voluptate libero sint vitae perferendis voluptatum
        iure molestiae.
        Distinctio laboriosam minus deleniti consectetur necessitatibus soluta, iusto debitis tenetur vero voluptate
        corrupti, expedita nesciunt, quisquam magnam assumenda quaerat rem aut? Earum nulla asperiores molestias
        suscipit similique ipsam hic pariatur?
        Beatae nihil nostrum velit, ullam tempora libero eum voluptatem totam dolore sapiente itaque odio repellendus
        aspernatur temporibus aut est eius architecto assumenda minus necessitatibus distinctio rem laboriosam quasi
        maiores? Explicabo.</p>
</template>

<style scoped lang="scss"></style>