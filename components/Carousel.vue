<template>
    <swiper
      :modules="modules"
      :slides-per-view="3"
      :space-between="50"
      navigation
      :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      autoplay

      class="mt-10 mx-12"
    >
        <swiper-slide v-for="image in images" :key="image.title">
            <NuxtLink :to="`/images/${image.title}`" class="block w-full image-link m-2 transform transition duration-500 hover:scale-110">
                <ImageCard :image="image"/>
            </NuxtLink>
        </swiper-slide>
      ...
    </swiper>
  </template>

  <script>
    // import Swiper core and required modules
    import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
  
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
  
    // Import Swiper styles
    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
    import 'swiper/css/scrollbar';
    import 'swiper/css/autoplay';
    import 'swiper/css/effect-cards';
  
    // Import Swiper styles
    export default {
      components: {
        Swiper,
        SwiperSlide,
      },
      setup() {
        const images = ref([]);

        onMounted(async () => {
	        const { allPaintings } = await GqlAllPaintings()
          images.value = allPaintings
        })
        
        const onSwiper = (swiper) => {
          console.log(swiper);
        };
        const onSlideChange = () => {
          console.log('slide change');
        };
        return {
          onSwiper,
          onSlideChange,
          modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay, ],
          images
        };
      },
    };
  </script>

  <style scoped>
  
  </style>