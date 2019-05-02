<template>
  <main role="main" class="container">
    <p class="title">New Production</p>
    <div class="my-3 p-3 bg-white rounded box-shadow new-post">
      <div class="info">
        <p>品項名稱</p>
        <el-input v-model="data.name" placeholder="必填"></el-input>
      </div>
      <div class="info">
        <p>商品價格</p>
        <el-input v-model="data.price" placeholder="必填"></el-input>
      </div>
      <div class="info">
        <p>商品單位</p>
        <el-select v-model="data.unit" filterable allow-create default-first-option placeholder="必填">
          <el-option v-for="unit in units" :key="unit" :label="unit" :value="unit"></el-option>
        </el-select></div>
      <div class="info">
        <p>店家名稱</p>
        <el-select v-model="shop" filterable allow-create default-first-option placeholder="必填">
          <el-option v-for="shop in shops" :key="shop" :label="shop" :value="shop"></el-option>
        </el-select>
      </div>
      <div class="info">
        <p>圖片</p>
        <input id="file-btn" ref="myFiles" type="file" name="pic" accept="image/*" @change="previewFiles">
      </div>
    </div>
    <div class="media text-muted pt-3">
      <button id="post-btn" type="button" class="btn btn-success" @click="submit">Submit</button>
    </div>
  </main>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      user: {
        email: 'test'
      },
      shops: [],
      units: ['包', '份', '支', '條', '個', '袋', '盒', '罐', '瓶'],
      shop: '',
      data: {
        unit: '',
        name: '',
        price: 0,
        img: ''
      },
      files: []
    }
  },
  methods: {
    goto(path) {
      console.log(path);
      this.$router.push({ path });
    },
    getShops() {
      this.$db.collection('products').get().then(res => {
        res.forEach(doc => {
          this.shops.push(doc.data().name);
        });
        console.log(this.shops);
      })
    },
    submit() {
      var productCllc = this.$db.collection('products');
      if (this.files.length > 0) {
        var file = this.files[0];
        var uploadTask = this.$firebase.storage.ref().child(file.name).put(file);
        uploadTask.on('state_changed', function(snapshot) {
          var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case this.$firebase.storage.TaskState.PAUSED: // or 'paused'

              console.log('Upload is paused');
              break;
            case this.$firebase.storage.TaskState.RUNNING: // or 'running'

              console.log('Upload is running');
              break;
          }
        }, function(error) {
          console.log(err);
        }, function() {
          this.data.img = uploadTask.snapshot.downloadURL;
        });

        this.data.img = '@/assets/img/' + this.data.img + 'metadata';
        console.log(this.data.img);
        const ref = this.$firebase.storage().ref();
        const file = document.getElementById("file-btn").files[0];
        const metadata = { contentType: file.type };
        const task = ref.child().put(file, metadata).then(url => {
          console.log(url);
        }).catch(err => {
          console.log(err);
        })
      }

      var { name, price, unit, img } = this.data;
      var shop = this.shop;
      var list = [];
      console.log(this.data, name, price, unit, shop , name != "", price != 0, unit != "", shop != "");

      // if (name != "" && price != 0 && unit != "" && shop != "") {
      console.log('yes');
      var isShopExist = this.shops.find(shopInList => {
        return shopInList === shop;
      })
      
      if (isShopExist) {
        var id= '';
        productCllc.where("name", "==", shop).get().then(querySnapshot => {
          querySnapshot.forEach(doc => {
            id = doc.id;
            list = doc.data().product_list;
            console.log(doc.data(), list);
            list.push(this.data);
          })
          productCllc.doc(id).update({ "product_list": list }).then(res => {
            console.log(res);
          }).catch(err => {
            console.log(err);
          })
        });
      } else {
        productCllc.doc().set({
          name: shop,
          product_list: [this.data]
        });
      }
    },
    previewFiles() {
      this.files = this.$refs.myFiles.files;
      console.log(this.files);
    }
  },
  mounted() {
    this.getShops();
    if (!this.$store.state.isLogin || this.$store.state.userEmail === 'host@gmail.com') this.goto('/');
  }
}
</script>


<style lang="scss" scoped>
main {
  padding-top: 20px;
}
.title {
  text-align: left;
  margin: 20px;
  padding: 10px;
  font-weight: 900;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
}
.new-post {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  .info {
    display: flex;
    flex-direction: row;
    padding: 10px;
    margin-right: 100px;
    p {
      width: 100px;
      text-align: left;
    }
    .el-input, .el-select {
      width: 200px;
    }
  }
}
#post-btn {
  margin-left: 20px;
}
</style>