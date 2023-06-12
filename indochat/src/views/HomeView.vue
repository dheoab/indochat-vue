<script>
import { mapActions, mapState } from 'pinia'
import { useMainStore } from '../stores/mainStore'
import { RouterLink } from 'vue-router'
import StarRating from 'vue-star-rating'

export default {
  name: "HomeView",
  data() {
    return {

    }
  },
  computed: {
    ...mapState(useMainStore, ['dataSlider', 'dataSwiper'])
  },

  components: {
    RouterLink,
    StarRating
  },
  methods: {
    ...mapActions(useMainStore, ['getSliderData', 'getSwiperData'])
  },
  created() {
    this.getSliderData()
    this.getSwiperData()
  }
}

</script>

<template>
  <div id="container" class=" d-flex flex-row justify-content-center">
    <div id="main-content" class="col d-flex flex-column" style="margin-bottom: 100px;">
      <div id="home-navigation" class="row d-flex flex-row p-5">
        <div class="d-flex justify-content-start col-2" style="font-size: 24px; font-weight: 600; margin-left: ;">Home
        </div>
        <div class="d-flex justify-content-start col-5" style="font-size: 24px; font-weight: 600;">
          <span style="color: #F8B319;  border-bottom: 3px solid #F8B319;">Game of
            Throne</span>
        </div>
        <div id="input-container" class="col-5 d-flex justify-content-end">
          <input id="search-bar" type="text" class="form-control" placeholder="Search" />
          <i class="fas fa-search"></i>
        </div>
      </div>

      <div id="carouselExampleIndicators" class="carousel slide mb-5">
        <div class="carousel-indicators">
          <button v-for="(item, index) in dataSlider" :key="index" type="button"
            :data-bs-target="'#carouselExampleIndicators'" :data-bs-slide-to="index" :class="{ 'active': index === 0 }"
            :aria-current="index === 0" :aria-label="'Slide ' + (index + 1)"></button>
        </div>
        <div class="carousel-inner">
          <div v-for="(item, index) in dataSlider" :key="index" :class="{ 'carousel-item': true, 'active': index === 0 }">


            <div class="card bg-dark text-white" style="overflow: hidden; border-radius: 15px;">
              <img class="card-img" :src="item.image.original" :alt="item.name"
                style="border-radius: 15px; overflow: hidden;">
              <div class="card-img-overlay">
                <div
                  style="background: rgba(255, 255, 255, 0.06); border-radius: 5px; box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); backdrop-filter: blur(4px); width: fit-content;">
                  <h1 class="card-title" style="margin-top: 10px; text-shadow: 5px; font-size: 36px; padding: 0px 10px;">
                    {{
                      item.name }}</h1>
                </div>
                <star-rating :rating="item.rating.average / 2" :show-rating="false" :star-size="20" />
              </div>
            </div>
            <div id="watchnow-button" class="d-flex justify-content-end" style="margin-top: -80px;">
              <RouterLink to="" class="btn btn-warning" style="font-weight: 800; font-size: 18px;">
                Watch Now
              </RouterLink>
            </div>


          </div>
        </div>
        <button class="carousel-control-prev" type="button" :data-bs-target="'#carouselExampleIndicators'"
          data-bs-slide="prev" style="height: 480px; width: 100px; position: absolute;">
          <span class="btn btn-secondary" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left"
              viewBox="0 0 16 16">
              <path fill-rule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
            </svg>
          </span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" :data-bs-target="'#carouselExampleIndicators'"
          data-bs-slide="next" style="height: 300px; width: 100px;">
          <span class="btn btn-secondary" aria-hidden="true" style="position: absolute; bottom: 50px; left: 25px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right"
              viewBox="0 0 16 16">
              <path fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div>
        <h1 style="color: white; margin-bottom: 30px;">List Seasons</h1>
      </div>
      <div id="list-seasons" style="width: auto;">
        <div class="card"
          style="min-width: 237px; padding: 0px; border-width: 0px; border-radius: 15px; margin-right: 30px;"
          v-for="(item, index) in dataSwiper" :key="index">
          <h2
            style="color: white; position: absolute; top: 25px; left: 15px; text-shadow: 2px 4px 4px rgba(0, 0, 0, 0.9 );">
            Season {{ item.number
            }}
          </h2>
          <button class="btn btn-warning"
            style="position: absolute; font-weight: 800; font-size: 18px; left: 120px; bottom: 40px;">More
            info</button>
          <img class=" card-img-top" :src="item.image.original" alt="Card image cap" style="border-radius: 15px">
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#container {
  background-color: #000;
  padding-left: 335px;
  padding-right: 335px;
}

#main-content {
  padding: 0px 80px;
  background-color: #000;
  border-color: black;
  border-width: 1px;
  width: 870px;
}

#home-navigation {
  color: white;
}

#slider-content {
  color: white;
}

#list-seasons {
  color: white;
}

#search-bar {
  width: 315px;
  background-color: #21242D;
  border: 0px;
  border-radius: 12px;
  color: #F9F9F9
}

::placeholder {
  color: #F9F9F9 !important;
  opacity: 0.67;
}

#input-container {
  position: relative;
}

#input-container input {
  padding-left: 35px;

}

#input-container i {
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  color: #F9F9F9;
}

#watchnow-button {
  position: absolute;
  /* left: 20px; */
  bottom: 20px;
  right: 20px;
}

#list-seasons {
  display: flex;
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

#list-seasons::-webkit-scrollbar {
  display: none;
}


/* #slider-content {} */
</style>
