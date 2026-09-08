<script setup>
import Navbar from '@/components/navbar.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div class="layout">

    <Navbar />

    <main class="page-content">
      <RouterView />
    </main>

    <Footer />

  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.page-content {
  flex: 1;
}
</style>