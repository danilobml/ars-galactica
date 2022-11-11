<template>
    <div class="bg-burcuGray">
      <nav
        class="
          container
          px-6
          py-2
          mx-auto
          md:flex md:justify-between md:items-center
        "
      >
        <div class="flex items-center justify-between">
          <NuxtLink
            to="/"
            ><img width="200" src="/images/logo.png" alt="Ars Galactica logo">
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
            md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0
          "
        >
          <li class="text-white-100 hover:text-indigo-400"><NuxtLink to="/">Home</NuxtLink></li>
          <li class="text-white-100 hover:text-indigo-400"><NuxtLink to="/about">About</NuxtLink></li>
          <li class="text-white-100 hover:text-indigo-400" v-if="auth.isAuthenticated"><NuxtLink to="/profile">Profile</NuxtLink></li>
          <li class="text-white-100 hover:text-indigo-400" v-if="auth.isAuthenticated"><NuxtLink to="/cart">Cart</NuxtLink></li>
          <li class="text-white-100 hover:text-indigo-400" v-if="auth.isAuthenticated"><span @click="logout">Logout</span></li>
          <li class="text-white-100 hover:text-indigo-400" v-else><NuxtLink to="/login">Login</NuxtLink></li>
        </ul>
      </nav>
    </div>
  </template>

  <script setup>
    const auth = useAuth()

    let showMenu = ref(false);

    function toggleNav(showMenu = !showMenu.value){ 
        return { showMenu, toggleNav };
    }

    function logout() {
        auth.value.isAuthenticated = false
    }

  </script>