<script setup lang="ts">
import UserInflow from '@/views/DashBoard/UserInflow.vue'
import PaymentInfo from '@/views/DashBoard/PaymentInfo.vue'
import ProductInfo from '@/views/DashBoard/ProductInfo.vue'
</script>

<template>
  <div class="dashboard">
    <UserInflow/>
    <PaymentInfo/>
    <ProductInfo/>
  </div>
</template>
<style lang="scss">
.dashboard {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 2rem;
  gap: var(--dashboard-section-gap);
  @include mobile {
    padding: 0.5rem;
  }
  @include tablet {
    padding: 1rem;
  }
}
</style>