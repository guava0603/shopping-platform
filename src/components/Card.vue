<template>
  <div class='rounded product-card'>
    <div class="cover"></div>
    <div class="uncover">
      <div class="purchased" :class="{'active': num}">{{ num }}</div>
      <img :src="product.img" class='img-background rounded'>
      <div class='words'>
        <p class='name'>
          <strong class='d-block text-gray-dark'>{{ product.name }}</strong>
        </p>
        <p class='price'>${{ product.price }} / {{ product.unit }}</p>
        <span class="purchase" v-if="!isPurchase" @click="isPurchase = true">想買！</span>
        <div class="number" v-if="isPurchase">
          <!-- <div>購買數量</div> -->
          <i class="fas fa-caret-square-down" @click="subNum()"></i>{{ num }}<i class="fas fa-caret-square-up" @click="addNum()"></i>
          <div class="check" @click="handleChange()"><i class="fas fa-check"></i></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 0,
      isPurchase: false
    }
  },
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    goto(path) {
      console.log(path);
      // this.$router.push({ path });
    },
    subNum() {
      this.num = Math.max(0, this.num-1);
    },
    addNum() {
      this.num ++;
    },
    handleChange() {
      this.isPurchase = false;
      this.$store.commit('setProducts', { id: this.product.id, num: this.num, name: this.product.name, price: this.product.price, unit: this.product.unit });
      console.log(this.$store.state);
    }
  }
}
</script>

<style lang="scss">
.product-card {
  display: flex;
  position: relative;
  align-items: center;
  width: 300px;
  height: 400px;
  background-color: #e3c4a8;
  z-index: 10;
  display: inline-flex;
  width: 300px;
  height: 400px;
  margin: 5% 3%;
  flex-direction: column;
}
.product-card > .uncover > .img-background {
  width: 96%;
  height: 72%;
}

.product-card > .uncover > div > p {
  color: #5e0a0a;
  text-align: center;
}

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
.uncover {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
}

.purchased {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -10px;
  right: -10px;
  width: 35px;
  height: 35px;
  background-color: #69779b;
  color: white;
  border-radius: 50%;
  &.active {
    background-color: #cd4545;
  }
}

.words {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.purchase {
  padding: 6px 15px;
  background-color: #6d3939;
  color: #e3c4a8;
  border-radius: 5px;
  &:hover, &:active {
    color: #6d3939;
    background-color: transparent;
    font-weight: 900;
  }
}

.number {
  display: flex;
  position: relative;
  align-items: center;
  align-self: center;
  flex-direction: row;
  color: #6d3939;
  border: 1px solid #6d3939;
  div {
    background-color: #6d3939;
    color: #e3c4a8;
  }
  > i {
    margin: 0 10px;
    cursor: pointer;
    transition: all .5s;
    &:hover, &:active {
      color: #2b2726;
    }
  }
  .check {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: -10px;
    right: -20px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: #085f63;
    cursor: pointer;
    transition: all .5s;
    &:hover, &:active {
      transform: scale(1.1);
    }
  }
}

@media (max-width: 414px) {
  .product-card {
    width: 35vw;
    height: 60vw;
    margin: -0.9vw;
    p, span {
      font-size: 12px;
    }
    .uncover > .img-background {
      width: 95%;
      height: 57%;
    }
    .purchased {
      width: 18px;
      height: 18px;
      top: 4px;
      right: 8px;
      font-size: 8px;
    }
  }
  .product-card .name {
    margin-top: 8px;
    margin-bottom: 0;
  }
  .uncover {
    padding: 10px 5px;
  }
  .price {
    margin-bottom: 5px;
    font-size: 12px;
  }
  .purchase {
    padding: 4px 10px;
  }
  .name {
    overflow-x: hidden;
    white-space: nowrap;
  }
}


@media (min-width: 415px) {
  .product-card {
    display: inline-flex;
    width: 300px;
    height: 400px;
    margin: 65px 3%;
    flex-direction: column;
    box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, .5);
  }
  .uncover {
    padding: 25px 10px;
  }
  .product-card > .uncover > .img-background {
    width: 90%;
    height: 62.5%;
    // border: 4px dashed #6d3939;
  }
  .product-card > div > p {
    text-align: center;
  }
  .product-card .name {
    margin-top: 20px;
    margin-bottom: 5px;
  }
}
</style>

