<template>
  <main class="d-flex flex-column" style="row-gap: 5rem;">
    <the-welcome />
    <my-skills />
    <my-projects />
    <div class="container">
      <div class="row">
        <div class="col">
          <h1>My Biography</h1>
        </div>
        <div class="col">
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum provident labore excepturi eos enim dolore suscipit consequatur omnis. Ab earum asperiores provident eum, consequatur odio iste voluptate perferendis vel et!</div>
        </div>
      </div>
    </div>
    <footer class="footer container py-2">This is footer.</footer>
  </main>
</template>

<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import MySkills from '../components/MySkills.vue'
import MyProjects from '../components/MyProjects.vue'
</script>

<style scoped>
</style>