import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { API_BASE_URL } from "./../config";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cartProducts: [],
    userAccessKey: null,
    cartProductsData: [],
  },
  mutations: {
    updateCartProductAmount(state, { productId, amount }) {
      const item = state.cartProducts.find((item) => item.productId === productId);

      if (item) {
        this.amount = amount;
      }
    },
    deleteCartProduct(state, productId) {
      state.cartProducts = state.cartProducts.filter((item) => item.productId !== productId);
    },
    addProduct(state, productId) {
      const item = state.cartProducts.find((item) => item.productId === productId);

      if (item) {
        item.amount += 1;
      }
    },
    removeProduct(state, productId) {
      const item = state.cartProducts.find((item) => item.productId === productId);

      if (item) {
        if (item.amount > 1) {
          item.amount -= 1;
        }
      }
    },
    updateUserAccessKey(state, accessKey) {
      state.userAccessKey = accessKey;
    },
    updateCartProductsData(state, items) {
      state.cartProductsData = items;
    },
    syncCartProducts(state) {
      state.cartProducts = state.cartProductsData.map((item) => {
        return {
          productId: item.product.id,
          amount: item.quantity,
        };
      });
    },
  },
  getters: {
    cartDetailProducts(state) {
      return state.cartProducts.map((item) => {
        const product = state.cartProductsData.find((p) => p.product.id === item.productId).product;

        return {
          ...item,
          product: {
            ...product,
            image: product.image.file.url,
          },
        };
      });
    },

    cartTotalPrice(state, getters) {
      return getters.cartDetailProducts.reduce(
        (acc, item) => item.product.price * item.amount + acc,
        0
      );
    },

    cartAmountAll(state, getters) {
      return getters.cartDetailProducts.reduce((acc, item) => item.amount + acc, 0);
    },
  },
  actions: {
    loadCart(contex) {
      return axios
        .get(API_BASE_URL + "/api/baskets", {
          params: {
            userAccessKey: contex.state.userAccessKey,
          },
        })
        .then((response) => {
          if (!contex.state.userAccessKey) {
            localStorage.setItem("userAccessKey", response.data.user.accessKey);
            contex.commit("updateUserAccessKey", response.data.user.accessKey);
          }

          contex.commit("updateCartProductsData", response.data.items);
          contex.commit("syncCartProducts");
        });
    },
    addProductToCart(contex, { productId, amount }) {
      return new Promise((resolve) => setTimeout(resolve, 2000)).then(() => {
        return axios
          .post(
            API_BASE_URL + "/api/baskets/products",
            {
              productId: productId,
              quantity: amount,
            },
            {
              params: {
                userAccessKey: contex.state.userAccessKey,
              },
            }
          )
          .then((response) => {
            contex.commit("updateCartProductsData", response.data.items);
            contex.commit("syncCartProducts");
          });
      });
    },
    updateCartProductAmount(contex, { productId, amount }) {
      contex.commit("updateCartProductAmount", { productId, amount });

      if (amount < 1) {
        return;
      }

      return axios
        .put(
          API_BASE_URL + "/api/baskets/products",
          {
            productId: productId,
            quantity: amount,
          },
          {
            params: {
              userAccessKey: contex.state.userAccessKey,
            },
          }
        )
        .then((response) => {
          contex.commit("updateCartProductsData", response.data.items);
        })
        .catch(() => {
          contex.commit("syncCartProducts");
        });
    },
    deleteCartProduct(contex, { productId }) {
      return axios
        .delete(
          API_BASE_URL + "/api/baskets/products",
          {
            productId: productId
          },
          {
            params: {
              userAccessKey: contex.state.userAccessKey,
            },
          }
        )
        .then((response) => {
          contex.commit("updateCartProductsData", response.data.items);
          contex.commit("syncCartProducts");
        });
    },
  },
});
