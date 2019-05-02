<template>
  <div class="product-container">
    <div class="cover"></div>
    <div class="uncover">
      <div class="image-section">
        <img :src="product.img">
      </div>
      <div class="desc-section">
        <p class="name">{{ product.name }}</p>
        <p class="price">{{ product.price }} / {{ product.unit }}</p>
        <p class="desc">{{ product.desc }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: [],
      shop: '',
      product: {}
    }
  },
  methods: {
    goto(path) {
      console.log(path);
      this.$router.push({ path });
    },
    getProduct() {
      var result = [];
      this.$db.collection('products').get().then(res => {
      console.log(res.docs[Number(this.id[0])].data());
        this.shop = res.docs[Number(this.id[0])].data().name;
        this.product = res.docs[Number(this.id[0])].data().product_list[this.id[1]];
      })
    }
  },
  mounted() {
    this.id = this.$route.params.id.split("-");
    this.getProduct();
  }
}
</script>

<style lang="scss">
.product-container {
  position: relative;
  width: 100vw;
  height: calc(100vh - var(--header-height));
  margin-top: var(--header-height);
  // background-color: black;
  background-color: #6d3939;
  .cover {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    background-image: url('https://firebasestorage.googleapis.com/v0/b/kga-food-week.appspot.com/o/wood.jpg?alt=media&token=480e204f-6c92-4ee8-9584-5fffde10f6a0');
    background-size: cover;
    opacity: 0.2;
    * {
      opacity: 1;
    }
  }
}
.uncover {
  position: absolute;
  display: flex;
  top: 0;
  width: 100%;
  height: 100%;
}
.image-section {
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--image-width);
  height: 100%;
  img {
    width: var(--image-width);
    max-width: calc(100vh - var(--header-height) - 50px);
    height: var(--image-width);
    max-height: calc(100vh - var(--header-height) - 50px);
  }
  // background-color: rgba(0, 0, 0, .5);
}
.desc-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 40vw;
  height: 100%;
  padding: 50px;
  // background-color: rgba(255, 255, 255, .5);
  p {
    color: white;
    &.name {
      font-size: 28px;
    }
  }
}
</style>

