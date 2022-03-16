<template>
  <div class="home">
    <listingComponent />
  </div>
</template>

<script>
import listingComponent from "@/components/listingComponent.vue";

export default {
  name: "HomeView",
  components: {
    listingComponent,
  },
};
</script>
<style scoped lang="scss">
.home {
  padding: 2rem;
}
</style>
