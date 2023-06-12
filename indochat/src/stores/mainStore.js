import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
// const showsData = require("../datas/shows");
import { showsData } from "../datas/shows";

export const useMainStore = defineStore("mainStore", {
  state: () => ({
    dataSlider: [],
    dataSwiper: [],
  }),
  actions: {
    async getSliderData() {
      try {
        const { data } = await axios.get(
          `https://api.tvmaze.com/shows/82/episodes`
        );

        let randomShows = [];

        for (let i = 0; i < 5; i++) {
          let randomIndex = Math.floor(Math.random() * data.length) + 1;
          randomShows.push(data[randomIndex]);
        }

        this.dataSlider = randomShows;

        // console.log(this.dataSlider);
      } catch (error) {
        console.log(error);
      }
    },

    async getSwiperData() {
      try {
        const { data } = await axios.get(
          `https://api.tvmaze.com/shows/82/seasons`
        );

        this.dataSwiper = data;
        console.log(this.dataSwiper);
      } catch (error) {}
    },
  },
});
