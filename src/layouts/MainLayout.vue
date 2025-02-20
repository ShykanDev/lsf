<template>
<!-- Sticky Header -->
<header ref="header" :class="{'bg-rose-900 border-b-white': !pageScrolled, 'bg-orange-500 border-b-blue-600': pageScrolled}" class="sticky top-0 z-50 text-white transition-all duration-700 ease-in-out border-b-2">
    <div class="container px-4 mx-auto">
        <nav class="flex items-center justify-between py-4 ">
            <!-- Logo -->
            <div class="flex items-center">
              <img src="https://www.sopletesorca.com/img/sslLogoV3.png" class="w-10 animate-shake" alt="">
                <RouterLink :to="{ name: 'home' }" class="ml-3 text-xl font-bold">
                  <img src="../assets/img/icono-blanco.png" class="w-10 animate-shake" alt="">
                      <span>www.</span><span>los</span><span class="text-rose-300">estafadores</span><span>.com</span>
                </RouterLink>
            </div>

            <div class="hidden">
              <!-- search bar -->
              <input :class="{'placeholder:text-orange-700': pageScrolled, 'placeholder:text-rose-800': !pageScrolled}" type="text" class="w-64 p-1 mr-3 text-black transition-all duration-300 ease-in-out bg-white outline-none rounded-3xl focus:w-72" placeholder="Comentario a buscar...">
              <button :class="{'text-orange-600 bg-white p-1 rounded-lg': pageScrolled, 'text-rose-800 bg-white p-1 rounded-lg': !pageScrolled}" class="transition-colors duration-300 ease-out"><i class="fas fa-search"></i>Buscar</button>
            </div>
            <!-- Navigation Links -->
            <div class="flex items-center space-x-4">
                <RouterLink :to="{ name: 'login' }" class="hover:text-gray-400 animate-fade-up animate-delay-0">
                    <i class="mr-2 fas fa-sign-in-alt"></i> Iniciar Sesión
                </RouterLink>
                <RouterLink :to="{ name: 'register' }" class="hover:text-gray-400 animate-fade-up animate-delay-0">
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
            </div>
        </nav>
    </div>
</header>

    <main class="">
      <slot name="main"></slot>
    </main>

 <!-- Footer -->
<footer class="py-8 text-white bg-orange-500 border-t-2 border-white">
    <div class="container mx-auto">
        <div class="flex flex-wrap justify-between">
            <!-- Links Section -->
            <div class="w-full md:w-1/3">
                <h3 class="mb-4 text-xl font-bold"><i class="mr-2 fas fa-sitemap"></i>Navegación</h3>
                <ul class="list-none">
                    <li class="mb-2">
                        <RouterLink :to="{ name: 'home' }" class="hover:text-gray-400">
                            <i class="mr-2 fas fa-users"></i> Nosotros
                        </RouterLink>
                    </li>
                    <li class="mb-2">
                        <RouterLink :to="{ name: 'home' }" class="hover:text-gray-400">
                            <i class="mr-2 fas fa-blog"></i> Blog
                        </RouterLink>
                    </li>
                    <li class="mb-2">
                        <RouterLink :to="{ name: 'home' }" class="hover:text-gray-400">
                            <i class="mr-2 fas fa-question-circle"></i> Ayuda
                        </RouterLink>
                    </li>
                    <li class="mb-2">
                        <RouterLink :to="{ name: 'home' }" class="hover:text-gray-400">
                            <i class="mr-2 fas fa-envelope"></i> Contacto
                        </RouterLink>
                    </li>
                    <li class="mb-2">
                        <RouterLink :to="{ name: 'home' }" class="hover:text-gray-400">
                            <i class="mr-2 fas fa-file-contract"></i> Términos y Condiciones
                        </RouterLink>
                    </li>
                </ul>
            </div>

            <!-- About Section -->
            <div class="w-full md:w-1/3">
                <h3 class="mb-4 text-xl font-bold"><i class="mr-2 fas fa-info-circle"></i>Sobre Nosotros</h3>
                <p class="mb-4">
                    Un sitio especial para publicar e indagar acerca de los fraudes y estafas. Comente, comparte e indague, las empresas, personas, servicios y/o productos que hacen fraude.
                </p>
            </div>

            <!-- Legal Section -->
            <div class="w-full md:w-1/3">
                <h3 class="mb-4 text-xl font-bold"><i class="mr-2 fas fa-file-contract"></i>Información Legal</h3>
                <p class="mb-4">
                    Los comentarios alojados en losestafadores.com son propiedad exclusiva del usuario/usuaria que los crea. Por lo cual, la autoría y manejo del comentario son responsabilidad del propietario del comentario. Losestafadores.com no asume ninguna responsabilidad por los comentarios creados en el sitio.
                </p>
            </div>
        </div>

        <!-- Bottom Bar -->
        <div class="pt-4 mt-8 border-t border-gray-50">
            <p class="text-sm text-center">
                Todos los derechos reservados losestafadores.com © 2025 Design by JAAC / <small>updated by PACA </small>
            </p>
        </div>
    </div>
</footer>
</template>

<script lang="ts" setup>

import { uiValues } from '@/stores/uiValues';
import { onMounted, onUnmounted, ref, computed } from 'vue';
import { useRoute } from 'vue-router';



// function to handle the scroll behavior based if user scrolls down more than 50px from the top of the page
const header = ref<null | HTMLElement>(null) ;
  const pageScrolled = computed(() => uiValues().getPageScrolled);
// changing the value of $pageScrolled based on the pinia getter: $getMainSectionHeight, this value will affect the color of the header
const changeColorHeader =() =>  (window.scrollY > uiValues().getMainSectionHeight) ? uiValues().setPageScrolled(true) : uiValues().setPageScrolled(false);
onMounted(() => window.addEventListener('scroll', changeColorHeader));

const route = useRoute();
</script>

<style scoped>

</style>
