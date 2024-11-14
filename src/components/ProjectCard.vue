<script>
export default {
    data() {
        return {

        }
    }
}
</script>
<template>
    <div class="card mb-3" v-for="singleProject in projectList" :key="singleProject.id">
        <div class="card-body">
            <h5 class="card-title">
                Title: {{ singleProject.title }}
            </h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">
                Author: {{ singleProject.author }}
            </h6>
            <p class="card-text">
                Date: {{ singleProject.date }}
            </p>
            <p class="card-text">
                Status: {{ singleProject.status }}
            </p>
            <p class="card-text">
                Type: {{ singleProject.type.name }}
            </p>
            <p class="card-text">
                Technologies: {{ singleProject.technologies.name }}
            </p>
            <p class="card-text">
                Description: {{ singleProject.description }}
            </p>
        </div>
    </div>
</template>
<style scoped lang="scss"></style>