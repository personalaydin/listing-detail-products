<template>
  <div class="about">
    <h1>This is an about page</h1>
    <detailComponent />
  </div>
</template>

<script>
import detailComponent from "@/components/detailComponent.vue";

export default {
  name: "AboutView",
  components: {
    detailComponent,
  },
};
</script>
<style scoped lang="scss">
.home {
  padding: 2rem;
}
</style>
