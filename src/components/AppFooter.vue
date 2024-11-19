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
    <footer class="mt-4 bg-dark text-white">
        <nav>
            <ul class="list-style-none py-2 d-flex justify-content-evenly">
                <li class="nav-item">
                    <router-link :to="{ name: 'home' }" aria-current="page" class="nav-link">
                        HomePage
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{ name: 'about' }" aria-current="page" class="nav-link">
                        Abou tUs
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{ name: 'projects' }" aria-current="page" class="nav-link">
                        Latest Projects
                    </router-link>
                </li>
            </ul>
            <div class="credit text-center">
                <p class="mb-2">Made with 🤓</p>
            </div>
        </nav>
    </footer>
</template>

<style scoped lang="scss">
footer {
    height: 100px;
}
</style>