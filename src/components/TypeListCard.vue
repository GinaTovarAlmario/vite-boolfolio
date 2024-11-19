<script>
export default {
    name:'TypeListCard',
    data() {
        return {

        }
    },
    props: {
        typeObj: {
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
                name: {{ typeObj.name }}
            </h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">
                id: {{ typeObj.id }}
            </h6>
        </div>
    </div>
</template>
<style scoped lang="scss"></style>