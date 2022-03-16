<template>
  <main>
    <div class="detail-container">
      <div class="detail-container__leftside">
        <img :src="getPhotoUrl(details.photos[0])" alt="" />
      </div>
      <div class="detail-container__rightside">
        <div class="cars-detail-title">{{ details.title }}</div>
        <div class="cars-detail-address">
          {{ details.location.cityName }} / {{ details.location.townName }}
        </div>
        <div class="cars-detail-info">
          <ul class="cars-detail-info__list">
            <li>
              <span class="cars-detail-info__list-titles"
                >{{ titleCategory }}
              </span>
              {{ details.category.name }}
            </li>
            <li>
              <span class="cars-detail-info__list-titles"
                >{{ titleModel }}
              </span>
              {{ details.modelName }}
            </li>
            <li>
              <span class="cars-detail-info__list-titles"
                >{{ titlePrice }}
              </span>
              {{ details.priceFormatted }}
            </li>
            <li>
              <span class="cars-detail-info__list-titles"
                >{{ titleDate }}
              </span>
              {{ details.date }}
            </li>

            <li>
              <span class="cars-detail-info__list-titles"
                >{{ titleUsername }}
              </span>
              {{ details.userInfo.nameSurname }}
            </li>
            <li>
              <span class="cars-detail-info__list-titles">{{
                titlePhone
              }}</span>
              {{ details.userInfo.phone }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "detailsPage",
  data() {
    return {
      titleCategory: "Kategori: ",
      titleModel: "Model: ",
      titlePrice: "Fiyat: ",
      titleDate: "Yayın Tarihi: ",
      titleUsername: "Kullanıcı Adı: ",
      titlePhone: "Telefon: ",
    };
  },
  computed: {
    details() {
      return this.$store.state.details;
    },
  },

  async created() {
    await this.$store.dispatch("getDetails", this.$route.query.id);
  },
  methods: {
    getPhotoUrl(url) {
      return url.replace("{0}", "800x600");
    },
  },
};
</script>

<style scoped lang="scss">
.detail-container {
  display: flex;
  justify-content: center;
  flex-direction: row;

  &__leftside {
    flex: 2;
    padding-right: 1rem;

    .detail-info-list {
      list-style: none;
      background: #f3e6e9;
      border-radius: 7px;
    }
  }

  &__rightside {
    flex: 1;

    .cars-detail-title {
      font-size: 24px;
      font-weight: 500;
      line-height: 1.5;
      color: #000;
    }

    .cars-detail-adress {
      font-size: 16px;
      font-weight: 500;
      line-height: 1.5;
      color: #5c5c5c;
    }

    .cars-detail-info {
      &__list {
        list-style: none;
        background: #e2dfcc;
        border-radius: 7px;
        padding: 0;
        line-height: 3;
        font-size: 16px;
        text-align: left;

        li {
          border-bottom: 1px solid #ccc;
          color: #364949;
          padding: 0 1rem;
        }
        &-titles {
          font-weight: 600;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
