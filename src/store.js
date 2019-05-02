// 忽略這個
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    userId: null,
    userEmail: null,
    userName: null,
    isHost: false,
    isBought: false,
    products: [],
    SYSTEMINFO: {
      hasNews: null,
      isHotfix: null,
      isRandoming: null,
      isPreparing: null,
      isNotifyToRandom: null,
      isNotifyRandomed: null,
      hasNewFeature: null
    }
  },
  mutations: {
    setProducts(state, payload) {
      for (var i = 0; i < state.products.length; i++) {
        console.log(state.products[i]);
        if (payload.id === state.products[i].id) {
          state.products[i].num = payload.num;
          state.products[i].name = payload.name;
          state.products[i].unit = payload.unit;
          state.products[i].price = payload.price;
          return;
        }
      }
      state.products.push({ id: payload.id, num: payload.num, unit: payload.unit, price: payload.price, name: payload.name });
    },
    setAllProducts(state, payload) {
      state.products = payload;
    },
    setIsLogin(state, payload) {
      state.isLogin = payload;
    },
    setUserInfo(state, payload) {
      state.userName = payload.name;
      state.userId = payload.id;
      state.isBought = payload.list.length > 0;
      state.products = (state.isBought) ? payload.list : [];
    },
    setUserEmail(state, payload) {
      state.userEmail = payload;
      state.isHost = (state.userEmail === 'host@gmail.com');
    },
    setSystemInfo(state, payload) {
      Object.assign(state.SYSTEMINFO, payload);
    }
  },
  actions: {
    async loginUser({ commit }, payload) {
      try {
        let { name, email, list, id } = payload;
        commit("setUserInfo", { name, list, id });
        commit("setUserEmail", email);
        commit("setIsLogin", true);
      }
      catch(err) {
        console.log(err);
      }
    },
    async updateStoreData({ commit }, payload) {
      try {
        let userInfo = payload.userData;

        commit("setUserInfo", userInfo);
        commit("setUserEmail", payload.userEmail);
        
        // 準備 parner 的 id
        if (userInfo.cur_thread !== "") {
          const partnerId = userInfo.cur_thread.split('-').find(id => id != userInfo.id);
          let partnerInfo = await payload.vm.$db.collection('users').where('id', '==', Number(partnerId)).get();

          commit("setPartnerInfo", partnerInfo.docs[0].data());
        }

        commit("setIsLogin", payload.isLogin);
      }
      catch(err) {
        console.log(err);
      }
    },
    async fetchSystemInfo({ commit }, vm) {
      try {
        // 取得系統遠端資料
        const sys = await vm.$db.collection('globalVariable').doc('SYSTEMINFO').get();
        
        // Add Event
        if (Object.values(vm.$store.state.SYSTEMINFO).indexOf(null) != -1) {
          vm.$db.collection('globalVariable').doc('SYSTEMINFO').onSnapshot((snapshot) => {
            commit('setSystemInfo', snapshot.data());
            console.log('[Info]: System info updated.');
          })
        }

        // 更新資料
        commit('setSystemInfo', sys.data());
      }
      catch (err) {
        console.error('[Error]: Fetch System Info Failed.');
      }
    }
  }
})
