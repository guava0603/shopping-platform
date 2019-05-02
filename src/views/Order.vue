<template>
  <div class="check-container">
    <div class="cover"></div>
    <div class="uncover">
      <p style="color: #e3c4a8;">訂單總覽</p>
      <div class="card">
        <div class="list" v-for="listtt in product_list" :key="listtt.name" :title="listtt.name">
          <p class="name">{{ listtt.name }}</p>
          <div v-for="item in listtt.list" :key="item.id" class="item">
            {{ item.name }} {{ item.num }} {{ item.unit }}共 ${{ item.price*item.num }}
          </div>
        </div>
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
      product: {},
      activeNames: [],
      product_list: [],
      total: 0,
      names: []
    }
  },
  methods: {
    getOrders() {
      this.$db.collection('order').get().then(res => {
        res.forEach(doc => {
          this.product_list.push(doc.data());
          // console.log(this.$db.collection('users').doc(doc.id).get())
          this.$db.collection('users').doc(doc.data().user_id).get().then(docc => {
            this.product_list.name = docc.data().name;
          });
        console.log(this.product_list);
        });
      })
    }
  },
  mounted() {
    this.getOrders();
    if (!this.$store.state.isLogin || this.$store.state.userEmail === 'host@gmail.com') this.goto('/');
  }
}
</script>

<style lang="scss" scoped>
.check-container {
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
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 100px;
  top: 0;
  width: 100%;
  height: 100%;
}
.card {
  width: 300px;
  max-width: 80%;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  background: #e3c4a8;
}
.item {
  color: #6d3939;
  margin: 10px 0;
}
.submit {
  background-color: #6d3939;
  color: #e3c4a8;
  padding: 5px;
  :hover, :active {
    color: #6d3939;
    background-color: #e3c4a8;
  }
}
.list {

}
</style>

