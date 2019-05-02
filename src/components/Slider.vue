<template>
  <div class='slider-outter'>
    <div class='title-section'>
      <div class="space-border"></div>
      <div class="title">{{ shop.name }}</div>
      <div class="space-border"></div>
    </div>
    <div class='slider-wrapper'>
      <Card v-for="product in shop.product_list" :product="product" :key="product.id" />
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  components: {
    Card
  },
  props: {
    shop: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

.title-section {
  display: flex;
  height: 60px;
  flex-direction: row;
  margin-left: 15px;
  position: relative;
  z-index: 100;
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: -webkit-linear-gradient(left, #e3c4a8, transparent);
    background-image: -moz-linear-gradient(left, #e3c4a8, transparent);
    background-image: -o-linear-gradient(left, #e3c4a8, transparent);
    background-image: linear-gradient(left, #e3c4a8, transparent);
    // background-color: #572121;
    color: #fffde8;
    padding: 10px 70px 10px 30px;
    font-size: 20px;
    font-weight: 900;
  }
  .space-border {
    width: 5px;
    background-color: #e3c4a8;
    margin-right: 5px;
  }
}

@media all and (max-width: 414px) {
  .desktop {
    display: none;
  }
  .slider-outter {
    width: 100vw;
    // height: 350px;
  }
  .slider-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    top: 10px;
  }
  .title-section {
    margin-top: 15px;
    margin-left: 0;
    z-index: 0;
    .space-border {
      position: relative;
    }
    .title {
      width: 90%;
      justify-content: flex-start;
    }
  }
}

@media all and (min-width: 415px) {
  .mobile {
    display: none;
  }

  .slider-outter {
    position: relative;
    display: block;
    height: 500px;
    padding: 10px 0;
    overflow-y: hidden;
  }

  .slider-wrapper {
    display: block;
    position: absolute;
    top: -20px;
    width: 100vw;
    height: 105%;
    white-space: nowrap;
    background-image: -webkit-linear-gradient(left, transparent, rgba(255, 255, 255, .5), transparent);
    background-image: -moz-linear-gradient(left, transparent, rgba(255, 255, 255, .5), transparent);
    background-image: -o-linear-gradient(left, transparent, rgba(255, 255, 255, .5), transparent);
    background-image: linear-gradient(left, transparent, rgba(255, 255, 255, .5), transparent);
    margin: 10px 0;
    overflow-x: scroll;
    overflow-y: hidden;
  }
}
</style>
