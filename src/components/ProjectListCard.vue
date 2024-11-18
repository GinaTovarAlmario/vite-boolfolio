<script>


export default {
    name:'ProjectListCard',
    data() {
        return {

        }
    },
    props: {
        card: {
            type: Object,
            required: true
        }
    },

}
</script>
<template>
    <div class="card mb-3">
        <div class="card-body">
            <h5 class="card-title">
                Title: {{ card.title }}
            </h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">
                Author: {{ card.author }}
            </h6>
            <p class="card-tesxt">
                Date: {{ card.date }}
            </p>
            <p class="card-text">
                Status: {{ card.status }}
            </p>
            <p class="card-text">
                Type: {{ card.type ? card.type.name : 'None' }}
            </p>
            <p class="card-text">
                <!-- vorrei che fossero scritte uno accanto all'altra e gestire il caso in cui 
                venga modificata la validazione fatta nel backoffice e quindi gestire il caso in cui non ci sia -->
                Technologies:
                {{ card.technologies && card.technologies.length > 0
                    ? card.technologies.map(tech => tech.name).join(', ')
                    : 'None' }}
            </p>
            <p class="card-text">
                Description: {{ card.description }}
            </p>
        </div>
    </div>
</template>
<style scoped lang="scss"></style>