<template>
    <div>
                <router-link to="/">Home</router-link><br>
        
        <h1>This is the home page</h1>
        <page-header></page-header>
    </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'
    export default {
  components: { PageHeader },
        
    }
</script>

<style scoped>
h1 {
    background-color: red
}
</style>