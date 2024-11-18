<script>
export default {
    name: 'AppHeader',
    data() {
        return {
        }
    },
    methods: {
    }

}
</script>

<template>
   <header>
        <nav>
            <ul class="d-flex justify-content-center">
                <li class="me-3">
                    <router-link :to="{name:'home'}">
                        HomePage
                    </router-link>
                </li>
                <li class="me-3">
                    <router-link :to="{name:'about'}">
                        Abou tUs
                    </router-link>
                </li>
            </ul>
        </nav>
   </header>
</template>

<style scoped lang="scss">

</style>