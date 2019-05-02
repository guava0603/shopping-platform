<template>
  <div class="signin-container text-center">
    <div id="custom-alert">
    </div>
    <div class="form-signin">
      <el-tabs v-model="activeName">
        <el-tab-pane label="登入帳戶" name="signin">
          <div class="input-section">
            <el-input placeholder="請輸入帳號/電子信箱" v-model="email" clearable></el-input>
            <el-input placeholder="請輸入密碼" v-model="password" show-password></el-input>
          </div>
          <label>
            <input type="checkbox" value="remember-me"> Remember me
          </label>
          <button class="btn btn-lg btn-primary btn-block" id="btnLogin" @click="signin">Sign in</button>
          <button class="btn btn-lg btn-info btn-block" id="btngoogle">Sign in with Google</button>
        </el-tab-pane>
        <el-tab-pane label="註冊新帳戶" name="register">
          <div class="input-section">
            <el-input placeholder="請輸入姓名" v-model="name" clearable></el-input>
            <el-input placeholder="請輸入帳號/電子信箱" v-model="email" clearable></el-input>
            <el-input placeholder="請輸入密碼" v-model="password" show-password></el-input>
          </div>
          <label>
            <input type="checkbox" value="remember-me"> Remember me
          </label>
          <button class="btn btn-lg btn-secondary btn-block" id="btnSignUp" @click="register">New account</button>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: null,
      name: '',
      email: '',
      password: '',
      errMessage: '',
      activeName: 'signin'
    }
  },

  methods: {
    signin() {
      var isSuccess = false;
      var errMessage = '';
      this.$db.collection('users').get().then(res => {
        res.forEach(doc => {
          if(doc.data().email === this.email) {
            if (doc.data().password === this.password) {
              this.$store.commit('setAllProducts', doc.data().list);
              this.user = {
                name: doc.data().name,
                id: doc.id,
                email: this.email,
                list: doc.data().list
              }
              isSuccess = true;
            } else errMessage = '密碼輸入錯誤'
          }
        });
        if (isSuccess) {
          const { name, email, list, id } = this.user;
          this.$store.dispatch('loginUser', { name, email, list, id });
          this.displayResult(`登入成功，歡迎回來，${this.user.name}`, 'success');
          // console.log(this.$store.state);
          return;
        }

        if (errMessage === '') errMessage = '此帳號不存在';
        this.displayResult(errMessage, 'error');
      });
    },
    register() {
      if (this.email === '' || this.password === '' || this.name === '') {
        this.displayResult('請填寫完整資料', 'error');
        return;
      }
      this.$db.collection('users').get().then(res => {
        res.forEach(doc => {
          if(doc.data().email === this.email) {
            this.displayResult('此帳號已被註冊過', 'error');
            return;
          }
        });
        this.$db.collection('users').doc().set({
          name: this.name,
          email: this.email
        })
        this.$store.dispatch('loginUser', { name: this.name, email: this.email });
        this.displayResult(`註冊成功，歡迎您，${this.name}`, 'success');
      });
    },
    displayResult(errMessage, type) {
      this.$message({ message: errMessage, type });
    }
  },

  mounted() {
    console.log(this.$store.state);
  }
}
</script>

<style lang="scss" scoped>

body {
  display: -ms-flexbox;
  display: -webkit-box;
  display: flex;
  -ms-flex-align: center;
  -ms-flex-pack: center;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #ffb677;
}

.signin-container {
  margin-top: var(--header-height);
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: 0 auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.form-signin {
  .input-section {
    margin: 30px 0;
    .el-input {
      margin: 5px 0;
      .el-input__inner {
        border: none !important;
        border-bottom: 1px solid #aa7070;
      }
    }
  }
  .el-tab-pane {
    margin-top: 50px;
  }
}

#custom-alert {
  top: 10px;
  position: fixed;
}

</style>
