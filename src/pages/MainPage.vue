<template>
  <main class="content container">
    <div class="content__top content__top--catalog">
      <h1 class="content__title">Каталог</h1>
      <span class="content__info"> 152 товара </span>
    </div>

    <div class="content__catalog">
      <ProductFilter
        :price-from.sync="filterPriceFrom"
        :price-to.sync="filterPriceTo"
        :category-id.sync="filterCategoryId"
        :colors-id.sync="filterColorsId"
      />
      <section class="catalog">
        <ProductList :products="products" />
        <BasePagination
          v-model="page"
          :count="countProducts"
          :per-page="productsPerPage"
        />
      </section>
    </div>
  </main>
</template>

<script>
import BasePagination from "@/components/BasePagination.vue";
import ProductList from "@/components/ProductList.vue";
import ProductFilter from "@/components/ProductFilter.vue";
import products from "@/data/products";
import axios from "axios";

export default {
  components: { ProductList, BasePagination, ProductFilter },
  data() {
    return {
      filterPriceFrom: 0,
      filterPriceTo: 0,
      filterCategoryId: 0,
      filterColorsId: 0,

      page: 1,
      productsPerPage: 3,

      productsData: null
    };
  },
  computed: {
    filteredProducts() {
      let filteredProducts = products;

      if (this.filterPriceFrom > 0) {
        filteredProducts = filteredProducts.filter(
          (product) => product.price > this.filterPriceFrom
        );
      }

      if (this.filterPriceTo > 0) {
        filteredProducts = filteredProducts.filter(
          (product) => product.price < this.filterPriceTo
        );
      }

      if (this.filterCategoryId) {
        filteredProducts = filteredProducts.filter(
          (product) => product.categoryId === this.filterCategoryId
        );
      }

      if (this.filterColorsId) {
        filteredProducts = filteredProducts.filter((product) => {
          for (let i = 0; i < product.colorsId.length; i++) {
            if (product.colorsId[i] == this.filterColorsId) {
              return product.colorsId[i] === this.filterColorsId;
            }
          }
        });
      }

      return filteredProducts;
    },
    products() {
      return this.productsData
      ? this.productsData.items.map(product => {
        return {
          ...product,
          image: product.image.file.url
        }
      })
      : [];
    },
    countProducts() {
      return this.productsData ? this.productsData.pagination.total : 0;
    },
  },
  methods: {
    loadProducts() {
      axios.get(`https://vue-study.skillbox.cc/api/products?page=${this.page}&limit=${this.productsPerPage}`)
        .then(response => this.productsData = response.data);
    }
  },
  watch: {
    page() {
      this.loadProducts();
    }
  },
  created() {
    this.loadProducts();
  }
};
</script>
