<template>
  <div class="container">
    <main role="main">
        <div id="product_list">
          <Slider v-for="shop in shops" :shop="shop" :key="shop.name" />
        </div>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import Slider from '@/components/Slider.vue';
import Banner from '@/assets/banner.png';

export default {
  name: 'home',
  components: {
    Slider,
    Banner
  },
  data() {
    return {
      user: null,
      shops: []
    }
  },
  methods: {
    getProducts() {
      var result = [];
      this.$db.collection('products').get().then(res => {
        res.forEach(doc => {
          this.shops.push(doc.data());
        });
        console.log(this.shops);
        // return result;
      })
    },
    getUser() {
      
    }
  },
  mounted() {
    // this.$firebase.auth().onAuthStateChanged(function (user) {
    //   console.log(user);
    //   this.user = user;
    // });
    console.log(this.$store.state); 
    this.getProducts();
  }
}
</script>


<style lang="scss" scoped>
main {
  overflow-x: hidden; /* Prevent scroll on narrow devices */
  background-color: rgba(#5b2e35, .8);
}
.container {
  width: 100vw;
  max-width: 100vw;
  margin-left: 0;
  margin-right: 0;
  margin-top: 10vh;
  padding: 0;
  background-image: url('https://firebasestorage.googleapis.com/v0/b/kga-food-week.appspot.com/o/banner.png?alt=media&token=763475af-4b91-4b0b-8900-2d59b5dae1d8');
  background-repeat: repeat;
  background-size: contain;
}

.text-white-50 { color: rgba(255, 255, 255, .5); }

.bg-purple { background-color: var(--purple); }

.border-bottom { border-bottom: 1px solid #e5e5e5; }

.box-shadow { box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05); }

.lh-100 { line-height: 1; }
.lh-125 { line-height: 1.25; }
.lh-150 { line-height: 1.5; }

#product_list {
  display: flex;
  flex-direction: column;
  padding: 40px 0 200px 0;
  flex-wrap: wrap;
}
</style>
