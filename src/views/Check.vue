<template>
  <div class="check-container">
    <div class="cover"></div>
    <div class="uncover">
      <p style="color: #e3c4a8;">商品總覽</p>
      <div class="card">
        <div v-for="item in list" :key="item.id" class="item">
          {{ item.name }} {{ item.num }} {{ item.unit }}共 ${{ item.price*item.num }}
        </div>
        <div style="align-self: flex-end; margin-top: 50px; margin-right: 10px;">總額 ${{ total }}</div>
        <div class="submit" @click="submit">送出訂單</div>
      </div>
      <!-- <el-tabs v-model="activeName">
        <el-tab-pane label="已購商品清單" name="list">
          
        </el-tab-pane>
        <el-tab-pane label="個人資料確認">

        </el-tab-pane>
      </el-tabs> -->
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
      activeName: '',
      activeNames: [],
      list: [],
      total: 0
    }
  },
  methods: {
    goto(path) {
      console.log(path);
      this.$router.push({ path });
    },
    price(item) {
      return item.price * item.num;
    },
    submit() {
      this.$db.collection('order').doc().set({
        user_id: this.$store.state.userId,
        list: this.list,
        total_price: this.total
      });
      this.$message('訂單送出成功！請耐心等候', 'success');
    }
  },
  mounted() {
    console.log(this.$store.state);
    this.list = this.$store.state.products;
    for(var i in this.list) {
      this.total += Number(this.list[i].price) * Number(this.list[i].num);
    }
    console.log(this.list);
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
</style>

