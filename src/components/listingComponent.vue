<template>
  <main>
    <div class="listing-title">{{ msg }}</div>
    <router-link
      :to="'/details?id=' + post.id"
      v-for="post in posts"
      :key="post.id"
    >
      <div class="list-component-body">
        <div class="list-component-body__leftside">
          <div class="image-area">
            <img :src="getPhotoUrl(post.photo)" alt="" />
          </div>
          <div class="model-title">
            <p>
              {{ post.modelName }}
            </p>
          </div>
        </div>
        <div class="list-component-body__center">
          <div class="post-title">{{ post.title }}</div>
          <div class="post-year">2022</div>
        </div>
        <div class="list-component-body__rightside">
          <div class="post-price">{{ post.price }}</div>
          <div class="post-date">{{ post.dateFormatted }}</div>
          <div class="post-location">
            <span>{{ post.location.cityName }}</span>
            /
            <span>{{ post.location.townName }}</span>
          </div>
        </div>
      </div>
    </router-link>
  </main>
</template>

<script>
export default {
  name: "listingPage",
  data() {
    return {
      msg: "İkinci El Satılık Araç Fiyatları",
    };
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
  },
  mounted() {
    this.$store.dispatch("getPosts");
  },
  methods: {
    getPhotoUrl(url) {
      return url.replace("{0}", "120x90");
    },
    getDetailUrl(id) {
      return "http://sandbox.arabamd.com/api/v1/detail?id=" + id;
    },
  },
};
</script>
<style scoped lang="scss">
.listing-title {
  color: red;
  font-size: 24px;
  font-weight: 500;
}
.list-component-body {
  background-color: #f3f3f3;
  display: flex;
  justify-content: center;
  margin: 0.5rem 0;
  height: 70px;

  &__leftside {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1;
    border-right: 1px solid #fff;
    height: 100%;

    .image-area {
      flex: 1;
      border-right: 1px solid #fff;
      padding: 0 1rem;

      img {
        width: 70px;
      }
    }
    .model-title {
      flex: 2;
      font-size: 13px;
      padding: 0 1rem;
      color: #000;
    }
  }
  &__center {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex: 2;
    border-right: 1px solid #fff;

    .post-title {
      display: flex;
      align-items: center;
      height: 100%;
      padding: 0 4rem;
      border-right: 1px solid #fff;
      flex: 1;
      font-size: 15px;
      color: #000;
    }

    .post-year {
      display: flex;
      align-items: center;
      padding: 1rem;
      font-size: 13px;
      color: #000;
    }
  }
  &__rightside {
    display: flex;
    align-items: center;
    flex: 1;

    .post-price {
      display: flex;
      border-right: 1px solid #fff;
      height: 100%;
      align-items: center;
      padding: 0 1rem;
      font-size: 13px;
      color: #000;
    }
    .post-date {
      display: flex;
      border-right: 1px solid #fff;
      height: 100%;
      align-items: center;
      padding: 0 1rem;
      font-size: 13px;
      color: #000;
    }
    .post-location {
      display: flex;
      height: 100%;
      align-items: center;
      padding: 0 1rem;
      font-size: 13px;
      color: #000;
    }
  }
}
</style>
