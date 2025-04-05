<template>
  <div>
    <!-- Overlay -->
    <div class="overlay" />
    <div :class="['side-overlay', { show: menuActive || activeCategory }]" />

    <!-- Search Box Start Here -->
    <form action="#" class="search-box" :class="{ active: activeSearch }">
      <button
        @click="handleSearchToggle"
        type="button"
        class="search-box__close position-absolute inset-block-start-0 inset-inline-end-0 m-16 w-48 h-48 border border-gray-100 rounded-circle flex-center text-white hover-text-gray-800 hover-bg-white text-2xl transition-1"
      >
        <i class="ph ph-x" /> Icon
      </button>
      <div class="container">
        <div class="position-relative">
          <input
            type="text"
            class="form-control py-16 px-24 text-xl rounded-pill pe-64"
            placeholder="Search for a product or brand"
          />
          <button
            type="submit"
            class="w-48 h-48 bg-main-600 rounded-circle flex-center text-xl text-white position-absolute top-50 translate-middle-y inset-inline-end-0 me-8"
          >
            <i class="ph ph-magnifying-glass" />
          </button>
        </div>
      </div>
    </form>
    <!-- Search Box End Here -->
  </div>

  <!-- ======================= Middle Top Start ========================= -->
  <div class="header-top bg-main-600 flex-between">
    <div class="container container-lg">
      <div class="flex-between flex-wrap gap-8">
        <ul class="flex-align flex-wrap d-none d-md-flex">
          <li class="border-right-item">
            <router-link
              to="#"
              class="text-white text-sm hover-text-decoration-underline"
            >
              Become A Seller
            </router-link>
          </li>
          <li class="border-right-item">
            <router-link
              to="#"
              class="text-white text-sm hover-text-decoration-underline"
            >
              About us
            </router-link>
          </li>
          <li class="border-right-item">
            <router-link
              to="#"
              class="text-white text-sm hover-text-decoration-underline"
            >
              Free Delivery
            </router-link>
          </li>
          <li class="border-right-item">
            <router-link
              to="#"
              class="text-white text-sm hover-text-decoration-underline"
            >
              Returns Policy
            </router-link>
          </li>
        </ul>
        <ul class="header-top__right flex-align flex-wrap">
          <li
            class="on-hover-item border-right-item border-right-item-sm-space has-submenu arrow-white"
          >
            <router-link to="#" class="text-white text-sm py-8">
              Help Center
            </router-link>
            <ul
              class="on-hover-dropdown common-dropdown common-dropdown--sm max-h-200 scroll-sm px-0 py-8"
            >
              <li class="nav-submenu__item">
                <router-link
                  to="#"
                  class="nav-submenu__link hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                >
                  <span class="text-sm d-flex">
                    <i class="ph ph-headset" />
                  </span>
                  Call Center
                </router-link>
              </li>
              <li class="nav-submenu__item">
                <router-link
                  to="#"
                  class="nav-submenu__link hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                >
                  <span class="text-sm d-flex">
                    <i class="ph ph-chat-circle-dots" />
                  </span>
                  Live Chat
                </router-link>
              </li>
            </ul>
          </li>
          <li
            class="on-hover-item border-right-item border-right-item-sm-space has-submenu arrow-white"
          >
            <!-- Display the selected language here -->
            <router-link to="#" class="selected-text text-white text-sm py-8">
              {{ activeLanguage }}
            </router-link>
            <ul
              class="selectable-text-list on-hover-dropdown common-dropdown common-dropdown--sm max-h-200 scroll-sm px-0 py-8"
            >
              <li>
                <router-link
                  to="#"
                  class="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                  @click="handleLanguageChange('English')"
                >
                  <img
                    src="/assets/images/thumbs/flag1.png"
                    alt=""
                    class="w-16 h-12 rounded-4 border border-gray-100"
                  />
                  English
                </router-link>
              </li>
              <li>
                <router-link
                  to="#"
                  class="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                  @click="handleLanguageChange('Japan')"
                >
                  <img
                    src="/assets/images/thumbs/flag2.png"
                    alt=""
                    class="w-16 h-12 rounded-4 border border-gray-100"
                  />
                  Japan
                </router-link>
              </li>
              <li>
                <router-link
                  to="#"
                  class="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                  @click="handleLanguageChange('French')"
                >
                  <img
                    src="/assets/images/thumbs/flag3.png"
                    alt=""
                    class="w-16 h-12 rounded-4 border border-gray-100"
                  />
                  French
                </router-link>
              </li>
              <li>
                <router-link
                  to="#"
                  class="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                  @click="handleLanguageChange('Germany')"
                >
                  <img
                    src="/assets/images/thumbs/flag4.png"
                    alt=""
                    class="w-16 h-12 rounded-4 border border-gray-100"
                  />
                  Germany
                </router-link>
              </li>
              <li>
                <router-link
                  to="#"
                  class="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                  @click="handleLanguageChange('Bangladesh')"
                >
                  <img
                    src="/assets/images/thumbs/flag6.png"
                    alt=""
                    class="w-16 h-12 rounded-4 border border-gray-100"
                  />
                  Bangladesh
                </router-link>
              </li>
              <li>
                <router-link
                  to="#"
                  class="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                  @click="handleLanguageChange('South Korea')"
                >
                  <img
                    src="/assets/images/thumbs/flag5.png"
                    alt=""
                    class="w-16 h-12 rounded-4 border border-gray-100"
                  />
                  South Korea
                </router-link>
              </li>
            </ul>
          </li>
          <li
            class="on-hover-item border-right-item border-right-item-sm-space has-submenu arrow-white"
          >
            <!-- Display the selected currency -->
            <router-link to="#" class="selected-text text-white text-sm py-8">
              {{ activeCurrency }}
            </router-link>
            <ul
              class="selectable-text-list on-hover-dropdown common-dropdown common-dropdown--sm max-h-200 scroll-sm px-0 py-8"
            >
              <li>
                <router-link
                  to="#"
                  class="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                  @click="handleCurrencyChange('USD')"
                >
                  <img
                    src="/assets/images/thumbs/flag1.png"
                    alt=""
                    class="w-16 h-12 rounded-4 border border-gray-100"
                  />
                  USD
                </router-link>
              </li>
              <li>
                <router-link
                  to="#"
                  class="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                  @click="handleCurrencyChange('Yen')"
                >
                  <img
                    src="/assets/images/thumbs/flag2.png"
                    alt=""
                    class="w-16 h-12 rounded-4 border border-gray-100"
                  />
                  Yen
                </router-link>
              </li>
              <li>
                <router-link
                  to="#"
                  class="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                  @click="handleCurrencyChange('Franc')"
                >
                  <img
                    src="/assets/images/thumbs/flag3.png"
                    alt=""
                    class="w-16 h-12 rounded-4 border border-gray-100"
                  />
                  Franc
                </router-link>
              </li>
              <li>
                <router-link
                  to="#"
                  class="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                  @click="handleCurrencyChange('EURO')"
                >
                  <img
                    src="/assets/images/thumbs/flag4.png"
                    alt=""
                    class="w-16 h-12 rounded-4 border border-gray-100"
                  />
                  EURO
                </router-link>
              </li>
              <li>
                <router-link
                  to="#"
                  class="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                  @click="handleCurrencyChange('BDT')"
                >
                  <img
                    src="/assets/images/thumbs/flag6.png"
                    alt=""
                    class="w-16 h-12 rounded-4 border border-gray-100"
                  />
                  BDT
                </router-link>
              </li>
              <li>
                <router-link
                  to="#"
                  class="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                  @click="handleCurrencyChange('WON')"
                >
                  <img
                    src="/assets/images/thumbs/flag5.png"
                    alt=""
                    class="w-16 h-12 rounded-4 border border-gray-100"
                  />
                  WON
                </router-link>
              </li>
            </ul>
          </li>
          <li class="border-right-item">
            <router-link
              to="/account"
              class="text-white text-sm py-8 flex-align gap-6"
            >
              <span class="icon text-md d-flex">
                <i class="ph ph-user-circle" />
              </span>
              <span class="hover-text-decoration-underline"> My Account </span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!-- ======================= Middle Top End ========================= -->

  <!-- ======================= Middle Header Start ========================= -->
  <header class="header-middle bg-color-one border-bottom border-gray-100">
    <div class="container container-lg">
      <nav class="header-inner flex-between">
        <!-- Logo Start -->
        <div class="logo">
          <router-link to="/" class="link">
            <img src="/assets/images/logo/logo.png" alt="Logo" />
          </router-link>
        </div>
        <!-- Logo End  -->

        <!-- form location Start -->
        <form action="#" class="flex-align flex-wrap form-location-wrapper">
          <div
            class="search-category d-flex h-48 select-border-end-0 radius-end-0 search-form d-sm-flex d-none"
          >
            <select
              v-model="selectedCategory"
              class="js-example-basic-single border border-gray-200 border-end-0"
              name="state"
            >
              <option value="1">All Categories</option>
              <option value="1">Grocery</option>
              <option value="1">Breakfast & Dairy</option>
              <option value="1">Vegetables</option>
              <option value="1">Milks and Dairies</option>
              <option value="1">Pet Foods & Toy</option>
              <option value="1">Breads & Bakery</option>
              <option value="1">Fresh Seafood</option>
              <option value="1">Frozen Foods</option>
              <option value="1">Noodles & Rice</option>
              <option value="1">Ice Cream</option>
            </select>
            <div class="search-form__wrapper position-relative">
              <input
                type="text"
                class="search-form__input common-input py-13 ps-16 pe-18 rounded-end-pill pe-44"
                placeholder="Search for a product or brand"
                v-model="searchQuery"
              />
              <button
                type="submit"
                class="w-32 h-32 bg-main-600 rounded-circle flex-center text-xl text-white position-absolute top-50 translate-middle-y inset-inline-end-0 me-8"
                @click.prevent="handleSearch"
              >
                <i class="ph ph-magnifying-glass" />
              </button>
            </div>
          </div>

          <div
            class="location-box bg-white flex-align gap-8 py-6 px-16 rounded-pill border border-gray-100"
          >
            <span class="text-gray-900 text-xl d-xs-flex d-none">
              <i class="ph ph-map-pin" />
            </span>
            <div class="line-height-1">
              <span class="text-gray-600 text-xs">Your Location</span>
              <div class="line-height-1">
                <select
                  v-model="selectedLocation"
                  class="js-example-basic-single border border-gray-200 border-end-0"
                  name="state"
                >
                  <option value="1">Alabama</option>
                  <option value="1">Alaska</option>
                  <option value="1">Arizona</option>
                  <option value="1">Delaware</option>
                  <option value="1">Florida</option>
                  <option value="1">Georgia</option>
                  <option value="1">Hawaii</option>
                  <option value="1">Indiana</option>
                  <option value="1">Marzland</option>
                  <option value="1">Nevada</option>
                  <option value="1">New Jersey</option>
                  <option value="1">New Mexico</option>
                  <option value="1">New York</option>
                </select>
              </div>
            </div>
          </div>
        </form>
        <!-- form location start -->

        <!-- Header Middle Right start -->
        <div class="header-right flex-align d-lg-block d-none">
          <div class="flex-align flex-wrap gap-12">
            <button
              type="button"
              class="search-icon flex-align d-lg-none d-flex gap-4 item-hover"
            >
              <span
                class="text-2xl text-gray-700 d-flex position-relative item-hover__text"
              >
                <i class="ph ph-magnifying-glass" />
              </span>
            </button>
            <router-link to="/wishlist" class="flex-align gap-4 item-hover">
              <span
                class="text-2xl text-gray-700 d-flex position-relative me-6 mt-6 item-hover__text"
              >
                <i class="ph ph-heart" />
                <span
                  class="w-16 h-16 flex-center rounded-circle bg-main-600 text-white text-xs position-absolute top-n6 end-n4"
                >
                  2
                </span>
              </span>
              <span
                class="text-md text-gray-500 item-hover__text d-none d-lg-flex"
              >
                Wishlist
              </span>
            </router-link>
            <router-link to="/cart" class="flex-align gap-4 item-hover">
              <span
                class="text-2xl text-gray-700 d-flex position-relative me-6 mt-6 item-hover__text"
              >
                <i class="ph ph-shopping-cart-simple" />
                <span
                  class="w-16 h-16 flex-center rounded-circle bg-main-600 text-white text-xs position-absolute top-n6 end-n4"
                >
                  2
                </span>
              </span>
              <span
                class="text-md text-gray-500 item-hover__text d-none d-lg-flex"
              >
                Cart
              </span>
            </router-link>
          </div>
        </div>
        <!-- Header Middle Right End  -->
      </nav>
    </div>
  </header>
  <!-- ======================= Middle Header End ========================= -->
</template>

<script>
export default {
  data() {
    return {
      // Category control
      activeCategory: false,
      // Mobile menu control
      menuActive: false,
      activeIndex: null,
      // Search control
      activeSearch: false,
      activeLanguage: "English",
      activeCurrency: "USD",
    };
  },
  methods: {
    // Toggle category
    handleCategoryToggle() {
      this.activeCategory = !this.activeCategory;
    },
    // Toggle menu
    handleMenuClick(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    },
    handleMenuToggle() {
      this.menuActive = !this.menuActive;
    },
    // Toggle search
    handleSearchToggle() {
      this.activeSearch = !this.activeSearch;
    },
    // Toggle language
    handleLanguageChange(language) {
      this.activeLanguage = language;
    },
    // Toggle currency
    handleCurrencyChange(currency) {
      this.activeCurrency = currency;
    },
  },
};
</script>
