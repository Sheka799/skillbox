<template>
  <section class="catalog">
        <ProductList :products="products" />
        <BasePagination v-model="page" :count="countProducts" :per-page="productsPerPage" />
      </section>
</template>

<script>
import BasePagination from './components/BasePagination.vue';
import ProductList from './components/ProductList.vue';
import products from './data/products';

export default {
  components: { ProductList, BasePagination },
  name: 'App',
  data() {
    return {
      page: 1,
      productsPerPage: 3,
    };
  },
  computed: {
    products() {
      const offset = (this.page - 1) * this.productsPerPage;

      return products.slice(offset, offset + this.productsPerPage);
    },
    countProducts() {
      return products.length;
    },
  },
};
</script>
