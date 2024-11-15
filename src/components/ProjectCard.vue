<script>


export default {
    data() {
        return {

        }
    },
    props: {
        cards: {
            type: Array,
            required: true
        }
    },

}
</script>
<template>
    <div class="card mb-3" v-for="cardItem in cards" :key="cardItem.id">
        <div class="card-body">
            <h5 class="card-title">
                Title: {{ cardItem.title }}
            </h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">
                Author: {{ cardItem.author }}
            </h6>
            <p class="card-tesxt">
                Date: {{ cardItem.date }}
            </p>
            <p class="card-text">
                Status: {{ cardItem.status }}
            </p>
            <p class="card-text">
                Type: {{ cardItem.type.name }}
            </p>
            <p class="card-text">
                <!-- vorrei che fossero scritte uno accanto all'altra -->
                Technologies: {{ cardItem.technologies.map(tech => tech.name).join(', ') }}
            </p>
            <p class="card-text">
                Description: {{ cardItem.description }}
            </p>
        </div>
    </div>
</template>
<style scoped lang="scss"></style>