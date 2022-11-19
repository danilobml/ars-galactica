<template>
    <div class="navbar bg-transparent sticky shadow-lg">
      <nav
        class="
          container
          px-4
          pt-2
          mx-auto
          md:flex md:justify-between md:items-center
        "
      >
        <div class="flex items-center justify-between">
          <NuxtLink
            to="/"
            ><img width="150" src="/images/Burcu_logo.png" alt="Ars Galactica logo">
          </NuxtLink>
          <!-- Mobile menu button -->
          <div @click="toggleNav" class="flex md:hidden">
            <button
              type="button"
              class="
                text-white-100
                hover:text-white-400
                focus:outline-none focus:text-white-400
              "
            >
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
  
        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <ul
          :class="showMenu ? 'flex' : 'hidden'"
          class="
            flex-col
            mt-8
            space-y-4
            md:flex md:space-y-0 md:flex-row sm:items-center md:space-x-10 md:mt-0
          "
        >
          <li class="font-bold hover:text-indigo-400"><NuxtLink to="/">Home</NuxtLink></li>
          <li class="font-bold hover:text-indigo-400"><NuxtLink to="/about">My Bio</NuxtLink></li>
          <li class="font-bold hover:text-indigo-400" v-if="auth.isAuthenticated"><NuxtLink to="/profile">User</NuxtLink></li>
          <li class="font-bold hover:text-indigo-400" v-if="auth.isAuthenticated"><NuxtLink to="/cart"><div class="flex"><img src="/images/cart-icon.png" alt="cart icon"> ({{cart.length}})</div></NuxtLink></li>
          <li class="font-bold hover:text-indigo-400" v-if="auth.isAuthenticated"><span @click="logout">Logout</span></li>
          <li class="font-bold hover:text-indigo-400" v-else><NuxtLink to="/login">Login</NuxtLink></li>
        </ul>
      </nav>
    </div>
  </template>

  <script setup>
    const auth = useAuth()

    const cart = useCart()

    let showMenu = ref(false);

    function toggleNav(){ 
      showMenu.value = !showMenu.value
    }

    function logout() {
        auth.value.isAuthenticated = false
    }

  </script>

<style>
  .navbar {
    box-shadow: inset 0 0 0 1000px rgba(255, 255, 255, 0.3)
  }
</style>