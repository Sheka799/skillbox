<template>
  <section class="catalog">
        <ul class="catalog__list">
          <li class="catalog__item" v-for="{product, index} in products" :key="index">
            <a class="catalog__pic" href="#">
              <img :src="product.image" :alt="product.title">
            </a>

            <h3 class="catalog__title">
              <a href="#">
                {{ product.title }}
              </a>
            </h3>

            <span class="catalog__price">
              {{ product.price }} ₽
            </span>
            <ul class="colors colors--black">
              <li class="colors__item">
                <label class="colors__label">
                  <input class="colors__radio sr-only" type="radio" name="color-1"
                  value="#73B6EA" checked="">
                  <span class="colors__value" style="background-color: #73B6EA;">
                  </span>
                </label>
              </li>
              <li class="colors__item">
                <label class="colors__label">
                  <input class="colors__radio sr-only" type="radio" name="color-1" value="#8BE000">
                  <span class="colors__value" style="background-color: #8BE000;">
                  </span>
                </label>
              </li>
              <li class="colors__item">
                <label class="colors__label">
                  <input class="colors__radio sr-only" type="radio" name="color-1" value="#222">
                  <span class="colors__value" style="background-color: #222;">
                  </span>
                </label>
              </li>
            </ul>
          </li>

          <!-- <li class="catalog__item">
            <a class="catalog__pic" href="#">
              <img src="img/toothbrush.jpg" srcset="img/toothbrush@2x.jpg 2x" alt="Название товара">
            </a>

            <h3 class="catalog__title">
              <a href="#">
                Ультразвуковая зубная щётка Playbrush Smart Sonic
              </a>
            </h3>

            <span class="catalog__price">
              5 660 ₽
            </span>

            <ul class="colors colors--black">
              <li class="colors__item">
                <label class="colors__label">
                  <input class="colors__radio sr-only" type="radio" name="color-2"
                  value="#F0F0F0" checked="">
                  <span class="colors__value" style="background-color: #F0F0F0;">
                  </span>
                </label>
              </li>
              <li class="colors__item">
                <label class="colors__label">
                  <input class="colors__radio sr-only" type="radio" name="color-2" value="#8BE000">
                  <span class="colors__value" style="background-color: #8BE000;">
                  </span>
                </label>
              </li>
              <li class="colors__item">
                <label class="colors__label">
                  <input class="colors__radio sr-only" type="radio" name="color-2" value="#73B6EA">
                  <span class="colors__value" style="background-color: #73B6EA;">
                  </span>
                </label>
              </li>
            </ul>
          </li>

          <li class="catalog__item">
            <a class="catalog__pic" href="#">
              <img src="img/phone.jpg" srcset="img/phone-1@2x.jpg 2x" alt="Название товара">
            </a>

            <h3 class="catalog__title">
              <a href="#">
                Смартфон Xiaomi Mi Mix 3 6/128GB
              </a>
            </h3>

            <span class="catalog__price">
              21 790 ₽
            </span>

            <ul class="sizes">
              <li class="sizes__item">
                <label class="sizes__label">
                  <input class="sizes__radio sr-only" type="radio" name="sizes-1" value="32">
                  <span class="sizes__value">
                    32gb
                  </span>
                </label>
              </li>
              <li class="sizes__item">
                <label class="sizes__label">
                  <input class="sizes__radio sr-only" type="radio" name="sizes-1" value="64">
                  <span class="sizes__value">
                    64gb
                  </span>
                </label>
              </li>
              <li class="sizes__item">
                <label class="sizes__label">
                  <input class="sizes__radio sr-only" type="radio" name="sizes-1"
                  value="128" checked="">
                  <span class="sizes__value">
                    128gb
                  </span>
                </label>
              </li>
            </ul>
          </li>

          <li class="catalog__item">
            <a class="catalog__pic" href="#">
              <img src="img/board.jpg" srcset="img/board@2x.jpg 2x" alt="Название товара">
            </a>

            <h3 class="catalog__title">
              <a href="#">
                Электроскейт Razor Cruiser
              </a>
            </h3>

            <span class="catalog__price">
              24 690 ₽
            </span>

            <ul class="colors colors--black">
              <li class="colors__item">
                <label class="colors__label">
                  <input class="colors__radio sr-only" type="radio" name="color-3"
                  value="#939393" checked="">
                  <span class="colors__value" style="background-color: #939393;">
                  </span>
                </label>
              </li>
              <li class="colors__item">
                <label class="colors__label">
                  <input class="colors__radio sr-only" type="radio" name="color-3" value="#FF6B00">
                  <span class="colors__value" style="background-color: #FF6B00;">
                  </span>
                </label>
              </li>
              <li class="colors__item">
                <label class="colors__label">
                  <input class="colors__radio sr-only" type="radio" name="color-3" value="#222">
                  <span class="colors__value" style="background-color: #222;">
                  </span>
                </label>
              </li>
            </ul>
          </li>

          <li class="catalog__item">
            <a class="catalog__pic" href="#">
              <img src="img/phone-2.jpg" srcset="img/phone-2@2x.jpg 2x" alt="Название товара">
            </a>

            <h3 class="catalog__title">
              <a href="#">
                Смартфон Xiaomi Mi A3 4/64GB Android One
              </a>
            </h3>

            <span class="catalog__price">
              14 960 ₽
            </span>

            <ul class="sizes">
              <li class="sizes__item">
                <label class="sizes__label">
                  <input class="sizes__radio sr-only" type="radio" name="sizes-2" value="32">
                  <span class="sizes__value">
                    32gb
                  </span>
                </label>
              </li>
              <li class="sizes__item">
                <label class="sizes__label">
                  <input class="sizes__radio sr-only" type="radio" name="sizes-2" value="64">
                  <span class="sizes__value">
                    64gb
                  </span>
                </label>
              </li>
              <li class="sizes__item">
                <label class="sizes__label">
                  <input class="sizes__radio sr-only" type="radio" name="sizes-2"
                  value="128" checked="">
                  <span class="sizes__value">
                    128gb
                  </span>
                </label>
              </li>
            </ul>
          </li>

          <li class="catalog__item">
            <a class="catalog__pic" href="#">
              <img src="img/phone-3.jpg" srcset="img/phone-3@2x.jpg 2x" alt="Название товара">
            </a>

            <h3 class="catalog__title">
              <a href="#">
                Смартфон Xiaomi Redmi 6/128GB
              </a>
            </h3>

            <span class="catalog__price">
              8 960 ₽
            </span>

            <ul class="sizes">
              <li class="sizes__item">
                <label class="sizes__label">
                  <input class="sizes__radio sr-only" type="radio" name="sizes-3" value="32">
                  <span class="sizes__value">
                    32gb
                  </span>
                </label>
              </li>
              <li class="sizes__item">
                <label class="sizes__label">
                  <input class="sizes__radio sr-only" type="radio" name="sizes-3" value="64">
                  <span class="sizes__value">
                    64gb
                  </span>
                </label>
              </li>
              <li class="sizes__item">
                <label class="sizes__label">
                  <input class="sizes__radio sr-only" type="radio" name="sizes-3"
                  value="128" checked="">
                  <span class="sizes__value">
                    128gb
                  </span>
                </label>
              </li>
            </ul>
          </li>

          <li class="catalog__item">
            <a class="catalog__pic" href="#">
              <img src="img/bicycle.jpg" srcset="img/bicycle@2x.jpg 2x" alt="Название товара">
            </a>

            <h3 class="catalog__title">
              <a href="#">
                Электрический дрифт-карт Razor Crazy Cart
              </a>
            </h3>

            <span class="catalog__price">
              39 900 ₽
            </span>

            <ul class="colors colors--black">
              <li class="colors__item">
                <label class="colors__label">
                  <input class="colors__radio sr-only" type="radio" name="color-4"
                  value="#FFBE15" checked="">
                  <span class="colors__value" style="background-color: #FFBE15;">
                  </span>
                </label>
              </li>
              <li class="colors__item">
                <label class="colors__label">
                  <input class="colors__radio sr-only" type="radio" name="color-4" value="#8BE000">
                  <span class="colors__value" style="background-color: #8BE000;">
                  </span>
                </label>
              </li>
              <li class="colors__item">
                <label class="colors__label">
                  <input class="colors__radio sr-only" type="radio" name="color-4" value="#FF6B00">
                  <span class="colors__value" style="background-color: #FF6B00;">
                  </span>
                </label>
              </li>
            </ul>
          </li>

          <li class="catalog__item">
            <a class="catalog__pic" href="#">
              <img src="img/wheels.jpg" srcset="img/wheels@2x.jpg 2x" alt="Название товара">
            </a>

            <h3 class="catalog__title">
              <a href="#">
                Гироскутер Razor Hovertrax 2.0
              </a>
            </h3>

            <span class="catalog__price">
              34 900 ₽
            </span>

            <ul class="colors colors--black">
              <li class="colors__item">
                <label class="colors__label">
                  <input class="colors__radio sr-only" type="radio" name="color-5"
                  value="#939393" checked="">
                  <span class="colors__value" style="background-color: #939393;">
                  </span>
                </label>
              </li>
              <li class="colors__item">
                <label class="colors__label">
                  <input class="colors__radio sr-only" type="radio" name="color-5" value="#F0F0F0">
                  <span class="colors__value" style="background-color: #F0F0F0;">
                  </span>
                </label>
              </li>
            </ul>
          </li>

          <li class="catalog__item">
            <a class="catalog__pic" href="#">
              <img src="img/scooter.jpg" srcset="img/scooter@2x.jpg 2x" alt="Название товара">
            </a>

            <h3 class="catalog__title">
              <a href="#">
                Детский трюковой самокат Razor Grom
              </a>
            </h3>

            <span class="catalog__price">
              4 990 ₽
            </span>

            <ul class="colors colors--black">
              <li class="colors__item">
                <label class="colors__label">
                  <input class="colors__radio sr-only" type="radio" name="color-6"
                  value="#222" checked="">
                  <span class="colors__value" style="background-color: #222;">
                  </span>
                </label>
              </li>
              <li class="colors__item">
                <label class="colors__label">
                  <input class="colors__radio sr-only" type="radio" name="color-6" value="#73B6EA">
                  <span class="colors__value" style="background-color: #73B6EA;">
                  </span>
                </label>
              </li>
            </ul>
          </li>

          <li class="catalog__item">
            <a class="catalog__pic" href="#">
              <img src="img/ripstik.jpg" srcset="img/ripstik@2x.jpg 2x" alt="Название товара">
            </a>

            <h3 class="catalog__title">
              <a href="#">
                Роллерсёрф Razor RipStik Air Pro
              </a>
            </h3>

            <span class="catalog__price">
              6 690 ₽
            </span>

            <ul class="colors colors--black">
              <li class="colors__item">
                <label class="colors__label">
                  <input class="colors__radio sr-only" type="radio" name="color-7"
                  value="#FFBE15" checked="">
                  <span class="colors__value" style="background-color: #FFBE15;">
                  </span>
                </label>
              </li>
              <li class="colors__item">
                <label class="colors__label">
                  <input class="colors__radio sr-only" type="radio" name="color-7" value="#8BE000">
                  <span class="colors__value" style="background-color: #8BE000;">
                  </span>
                </label>
              </li>
              <li class="colors__item">
                <label class="colors__label">
                  <input class="colors__radio sr-only" type="radio" name="color-7" value="#222">
                  <span class="colors__value" style="background-color: #222;">
                  </span>
                </label>
              </li>
            </ul>
          </li>

          <li class="catalog__item">
            <a class="catalog__pic" href="#">
              <img src="img/airpods.jpg" srcset="img/airpods@2x.jpg 2x" alt="Название товара">
            </a>

            <h3 class="catalog__title">
              <a href="#">
                Наушники AirPods с беспроводным зарядным футляром
              </a>
            </h3>

            <span class="catalog__price">
              16 560 ₽
            </span>
          </li>

          <li class="catalog__item">
            <a class="catalog__pic" href="#">
              <img src="img/headphones.jpg" srcset="img/headphones@2x.jpg 2x" alt="Название товара">
            </a>

            <h3 class="catalog__title">
              <a href="#">
                Наушники Sony
              </a>
            </h3>

            <span class="catalog__price">
              30 690 ₽
            </span>

            <ul class="colors colors--black">
              <li class="colors__item">
                <label class="colors__label">
                  <input class="colors__radio sr-only" type="radio" name="color-6"
                  value="#222" checked="">
                  <span class="colors__value" style="background-color: #222;">
                  </span>
                </label>
              </li>
              <li class="colors__item">
                <label class="colors__label">
                  <input class="colors__radio sr-only" type="radio" name="color-6" value="#FF6B00">
                  <span class="colors__value" style="background-color: #FF6B00;">
                  </span>
                </label>
              </li>
            </ul>
          </li> -->
        </ul>

        <ul class="catalog__pagination pagination">
          <li class="pagination__item">
            <a class="pagination__link pagination__link--arrow pagination__link--disabled"
            aria-label="Предыдущая страница">
              <svg width="8" height="14" fill="currentColor">
                <use xlink:href="#icon-arrow-left"></use>
              </svg>
            </a>
          </li>
          <li class="pagination__item">
            <a class="pagination__link pagination__link--current">
              1
            </a>
          </li>
          <li class="pagination__item">
            <a class="pagination__link" href="#">
              2
            </a>
          </li>
          <li class="pagination__item">
            <a class="pagination__link" href="#">
              3
            </a>
          </li>
          <li class="pagination__item">
            <a class="pagination__link" href="#">
              4
            </a>
          </li>
          <li class="pagination__item">
            <a class="pagination__link" href="#">
              ...
            </a>
          </li>
          <li class="pagination__item">
            <a class="pagination__link" href="#">
              10
            </a>
          </li>
          <li class="pagination__item">
            <a class="pagination__link pagination__link--arrow" href="#"
            aria-label="Следующая страница">
              <svg width="8" height="14" fill="currentColor">
                <use xlink:href="#icon-arrow-right"></use>
              </svg>
            </a>
          </li>
        </ul>
      </section>
</template>

<script>
import products from './data/products';

export default {
  name: 'App',
  data() {
    return {
      products,
    };
  },
};
</script>
