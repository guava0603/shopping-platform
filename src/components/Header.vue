<template>
  <nav class="navbar navbar-expand-md fixed-top navbar-dark">
    <a class="navbar-brand" @click="goto('/')">清大雄友週 - 購物網站</a>
    <i class="mobile fas fa-shopping-cart" @click="goto('/check')"></i>
    <button class="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas">
      <span class="navbar-toggler-icon" @click="isMenuOpen = !isMenuOpen"></span>
    </button>
    <div class="navbar-collapse offcanvas-collapse" :class="{'open': isMenuOpen}" id="navbarsExampleDefault">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item dropdown" :class="{'show': isMenuListOpen}">
          <a class="nav-link dropdown-toggle" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" :aria-expanded="isMenuListOpen" @click="isMenuListOpen = !isMenuListOpen">Account</a>
          <div id="dynamic-menu" class="dropdown-menu" aria-labelledby="dropdown01" :class="{'show': isMenuListOpen}">
            <a v-if="!isLogin" class="dropdown-item" @click="goto('signin')">Login</a>
            <!-- <span v-if="isLogin" class='dropdown-item'>{{ user.email }}</span> -->
            <span v-if="isLogin" class='dropdown-item' id='logout-btn' @click="logout">Logout</span>
            <span v-if="isLogin" class='dropdown-item' id='dashboard-btn' @click="goto('dashboard')">Dashboard</span>
            <span v-if="isLogin" class='dropdown-item' id='order-btn' @click="goto('order')">Order</span>
          </div>
        </li>
      </ul>
    </div>
    <i class="desktop fas fa-shopping-cart" @click="goto('/check')"></i>
    <img id="info_card" src="https://firebasestorage.googleapis.com/v0/b/kga-food-week.appspot.com/o/circle_info.png?alt=media&token=0b971f2c-9ff7-4cc4-bf07-e45f6583b56f">
  </nav>
</template>


<script>
// @ is an alias to /src

export default {
  name: 'home',
  data() {
    return {
      isMenuOpen: false,
      isMenuListOpen: false
    }
  },
  methods: {
    logout() {
      this.$store.commit('setIsLogin', false);
      this.$router.push({ path: '/signin' });
    },
    goto(path) {
      this.$router.push({ path });
    }
  },
  computed: {
    isLogin() {
      return this.$store.state.isLogin;
    },
    isHost() {
      return this.$store.state.isHost;
    }
  },
  mounted() {
    // this.$firebase.auth().onAuthStateChanged(function (user) {
    //   console.log(user);
    //   this.user = user;
    // });
  }
}
</script>


<style lang="scss" scoped>
.navbar {
  background-color: #ffb677;
  height: var(--header-height);
}

#info_card {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 200px;
  height: 200px;
  animation-name: info-adjust;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}

@keyframes info-adjust {
  0% {
    transform: rotate(0);
  }
  25% {
    transform: rotate(-3deg);
  }
  50% {
    transform: rotate(3deg);
  }
  75% {
    transform: rotate(0);
  }
}

@media (min-width: 767.99px) {
  .mobile {
    display: none;
  }
}

@media (max-width: 767.98px) {
  .desktop {
    display: none;
  }
  .fa-shopping-cart {
    margin-left: 30vw;
  }
  .offcanvas-collapse {
    position: fixed;
    top: 56px; /* Height of navbar */
    bottom: 0;
    width: 100%;
    padding-right: 1rem;
    padding-left: 1rem;
    overflow-y: auto;
    background-color: var(--gray-dark);
    transition: -webkit-transform .3s ease-in-out;
    transition: transform .3s ease-in-out;
    transition: transform .3s ease-in-out, -webkit-transform .3s ease-in-out;
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
  .offcanvas-collapse.open {
    -webkit-transform: translateX(-1rem);
    transform: translateX(-1rem); /* Account for horizontal padding on navbar */
  }
  #info_card {
    width: 150px;
    height: 150px;
  }
}

.nav-scroller {
  position: relative;
  z-index: 2;
  height: 2.75rem;
  overflow-y: hidden;
}

.nav-scroller .nav {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  padding-bottom: 1rem;
  margin-top: -1px;
  overflow-x: auto;
  color: rgba(255, 255, 255, .75);
  text-align: center;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}

.nav-underline .nav-link {
  padding-top: .75rem;
  padding-bottom: .75rem;
  font-size: .875rem;
  color: var(--secondary);
}

.nav-underline .nav-link:hover {
  color: var(--blue);
}

.nav-underline .active {
  font-weight: 500;
  color: var(--gray-dark);
}
</style>