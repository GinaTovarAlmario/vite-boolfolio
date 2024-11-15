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
                Type: {{ cardItem.type ? cardItem.type.name : 'None' }}
            </p>
            <p class="card-text">
                <!-- vorrei che fossero scritte uno accanto all'altra e gestire il caso in cui 
                venga modificata la validazione fatta nel backoffice e quindi gestire il caso in cui non ci sia -->
                Technologies:
                {{ cardItem.technologies && cardItem.technologies.length > 0
                    ? cardItem.technologies.map(tech => tech.name).join(', ')
                    : 'None' }}
            </p>
            <p class="card-text">
                Description: {{ cardItem.description }}
            </p>
        </div>
    </div>
</template>
<style scoped lang="scss"></style>