<script>
export default {
    name: 'AppFooter',
    data() {
        return {
        }
    },
    methods: {
    }

}
</script>

<template>
    <footer class="mt-4">
        <nav class="bg-dark text-white">
            <ul class="list-style-none py-2">
                <li class="nav-item">
                    <router-link :to="{ name: 'home' }" aria-current="page" class="nav-link">
                        HomePage
                    </router-link>
                </li>
                <li class="nav-item">
                <li class="me-3">
                    <router-link :to="{ name: 'about' }" aria-current="page" class="nav-link">
                        Abou tUs
                    </router-link>
                </li>
                </li>
                <li class="nav-item">
                    <router-link :to="{ name: 'projects' }" aria-current="page" class="nav-link">
                        Latest Projects
                    </router-link>
                </li>
            </ul>
        </nav>
    </footer>
</template>

<style scoped lang="scss">
nav{
    height: 100px;
}
</style>