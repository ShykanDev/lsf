<template>
  <!-- Sticky Header -->
  <header ref="header"
    :class="{ 'bg-indigo-900 border-b-white text-white': !pageScrolled, 'bg-white border-b-indigo-600 text-indigo-500': pageScrolled }"
    class="sticky top-0 z-50 border-b-2 transition-all duration-700 ease-in-out">
    <div class="container px-4 mx-auto">
      <nav class="flex justify-between items-center py-4">
        <!-- Logo -->
        <div class="flex items-center mr-8 md:mr-0">
          <img src="https://www.sopletesorca.com/img/sslLogoV3.png" class="w-10 animate-shake" alt="">
          <RouterLink :to="{ name: 'home' }" class="ml-3 text-sm font-bold md:text-xl">
            <img src="../assets/img/icono-blanco.png" class="w-10 animate-shake" alt="">
            <span>www.</span><span>los</span><span class="text-indigo-300">estafadores</span><span>.com</span>
          </RouterLink>
        </div>

        <div class="hidden">
          <!-- search bar -->
          <input :class="{ 'placeholder:text-orange-700': pageScrolled, 'placeholder:text-indigo-800': !pageScrolled }"
            type="text"
            class="p-1 mr-3 w-64 text-black bg-white rounded-3xl transition-all duration-300 ease-in-out outline-none focus:w-72"
            placeholder="Comentario a buscar...">
          <button
            :class="{ 'text-orange-600 bg-white p-1 rounded-lg': pageScrolled, 'text-indigo-800 bg-white p-1 rounded-lg': !pageScrolled }"
            class="transition-colors duration-300 ease-out"><i class="fas fa-search"></i>Buscar</button>
        </div>
        <!-- Navigation Links -->
        <div class="flex flex-wrap items-center space-x-4 md:flex-nowrap">
          <RouterLink :to="{ name: 'home' }" class="hover:text-gray-400 animate-fade-up animate-delay-0">
            <i class="mr-2 fas fa-home"></i> Inicio
          </RouterLink>
          <RouterLink v-if="!sysValues().getUserLogged" :to="{ name: 'login' }"
            class="hover:text-gray-400 animate-fade-up animate-delay-0">
            <i class="mr-2 fas fa-sign-in-alt"></i> Iniciar Sesión
          </RouterLink>
          <RouterLink v-if="!sysValues().getUserLogged" :to="{ name: 'register' }"
            class="hover:text-gray-400 animate-fade-up animate-delay-0">
            <i class="mr-2 fas fa-user"></i> Registrarse
          </RouterLink>
          <RouterLink :to="{ name: 'nosotros' }" class="hover:text-gray-400 animate-fade-up animate-delay-75">
            <i class="mr-2 fas fa-users"></i> Nosotros
          </RouterLink>
          <RouterLink :to="{ name: 'blog' }" class="hover:text-gray-400 animate-fade-up animate-delay-200">
            <i class="mr-2 fas fa-blog"></i> Blog
          </RouterLink>
          <RouterLink :to="{ name: 'contacto' }" class="hover:text-gray-400 animate-fade-up animate-delay-300">
            <i class="mr-2 fas fa-envelope"></i> Contacto
          </RouterLink>
          <RouterLink :to="{ name: 'ayuda' }" class="hover:text-gray-400 animate-fade-up animate-delay-300">
            <i class="mr-2 fas fa-question-circle"></i> Ayuda
          </RouterLink>
          <button v-if="sysValues().getUserLogged" @click="logout()" class="p-1 bg-indigo-500 rounded-lg transition-colors duration-300 ease-out hover:text-indigo-800 hover:bg-indigo-100 animate-fade-up animate-delay-300" :class="{ 'text-indigo-600 border border-indigo-600 bg-white p-1 rounded-lg': pageScrolled, 'text-indigo-800 bg-white p-1 rounded-lg': !pageScrolled }">
            <i class="fas fa-sign-out-alt"></i> Cerrar Sesión
          </button>
        </div>
      </nav>
    </div>
  </header>

  <main class="">
    <!-- cookies request -->
    <div v-if="!sysValues().getCookiesAccepted"
      class="flex fixed right-0 bottom-0 left-0 z-50 justify-between items-center p-4 text-white bg-indigo-500 border-t-2 border-white">
      <div class="flex items-center">
        <i class="mr-2 text-xl fas fa-cookie"></i>
        <span>Este sitio web utiliza cookies para mejorar la experiencia del usuario.</span>
      </div>
      <button @click="sysValues().setCookiesAccepted(true)"
        class="px-4 py-2 font-bold text-indigo-500 bg-white rounded hover:bg-indigo-800 hover:text-white">
        Aceptar
      </button>
    </div>
    <slot name="main"></slot>
  </main>

  <!-- Footer -->
  <footer class="py-4 text-white border-t border-white"
  :class="{ 'bg-indigo-500': !pageScrolled, 'bg-indigo-900': pageScrolled }">
  <div class="container mx-auto">
    <div class="flex flex-wrap justify-center">
      <!-- Links Section -->
      <ul class="flex flex-wrap gap-6 text-sm">
        <li>
          <RouterLink :to="{ name: 'blog' }" class="hover:text-gray-300">
            <i class="mr-1 fas fa-blog"></i> Blog
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'ayuda' }" class="hover:text-gray-300">
            <i class="mr-1 fas fa-question-circle"></i> Ayuda
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'contacto' }" class="hover:text-gray-300">
            <i class="mr-1 fas fa-envelope"></i> Contacto
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'home' }" class="hover:text-gray-300">
            <i class="mr-1 fas fa-file-contract"></i> Términos y Condiciones
          </RouterLink>
        </li>
      </ul>
    </div>

    <!-- Bottom Bar -->
    <div class="pt-2 mt-4 border-t border-gray-50">
      <p class="text-xs text-center">
        © 2025 losestafadores.com — Design by JAAC / <small>updated by PACA</small>
      </p>
    </div>
  </div>
</footer>

</template>

<script lang="ts" setup>

import { sysValues } from '@/stores/sysVals';
import { uiValues } from '@/stores/uiValues';
import { onMounted, onUnmounted, ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';



// function to handle the scroll behavior based if user scrolls down more than 50px from the top of the page
const header = ref<null | HTMLElement>(null);
const pageScrolled = computed(() => uiValues().getPageScrolled);
// changing the value of $pageScrolled based on the pinia getter: $getMainSectionHeight, this value will affect the color of the header
const changeColorHeader = () => (window.scrollY > uiValues().getMainSectionHeight) ? uiValues().setPageScrolled(true) : uiValues().setPageScrolled(false);
onMounted(() => window.addEventListener('scroll', changeColorHeader));

const router = useRouter();
const logout = () => {
  sysValues().setUserLogged(false);
  sysValues().setUserName('');
  router.push('/');
  setTimeout(() => {
    window.location.reload();
  }, 100);
};
</script>

<style scoped></style>
