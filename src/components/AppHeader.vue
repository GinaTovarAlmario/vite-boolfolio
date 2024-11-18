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
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <router-link :to="{ name: 'home' }" aria-current="page" class="nav-link">
                                HomePage
                            </router-link>
                        </li>
                        <li class="nav-item">
                        <li class="me-3">
                            <router-link :to="{ name: 'about' }"aria-current="page" class="nav-link">
                                Abou tUs
                            </router-link>
                        </li>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{ name: 'projects' }"aria-current="page" class="nav-link">
                                Latest Projects
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<style scoped lang="scss"></style>