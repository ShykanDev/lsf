<template>
   <MainLayout>
    <template #main>
      <section class="px-4 py-5 bg-gray-50 sm:px-6 lg:px-8">
  <div class="mx-auto max-w-7xl">
    <!-- Encabezado -->
    <div class="mb-16 text-center">
      <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">
        <i class="mr-3 text-orange-600 fas fa-envelope-open-text"></i>Contáctanos
      </h2>
      <p class="mt-4 text-lg text-gray-600">¿Tiene alguna pregunta? Escríbenos y te responderemos en menos de 24 horas</p>
    </div>

    <div class="grid grid-cols-1 gap-12 lg:grid-cols-3">
      <!-- Información de Contacto -->
      <div class="space-y-8">
        <!-- Teléfono -->
        <div class="flex items-start">
          <div class="flex-shrink-0">
            <div class="flex items-center justify-center w-12 h-12 bg-orange-600 rounded-full">
              <i class="text-xl text-white fas fa-phone"></i>
            </div>
          </div>
          <div class="ml-4">
            <h3 class="text-lg font-semibold text-gray-900">Teléfono</h3>
            <p class="mt-2 text-gray-600">+52 55 6395 0178</p>
            <p class="text-sm text-gray-500">Lunes a Viernes: 9am - 6pm</p>
          </div>
        </div>

        <!-- Email -->
        <div class="flex items-start">
          <div class="flex-shrink-0">
            <div class="flex items-center justify-center w-12 h-12 bg-orange-600 rounded-full">
              <i class="text-xl text-white fas fa-envelope"></i>
            </div>
          </div>
          <div class="ml-4">
            <h3 class="text-lg font-semibold text-gray-900">Correo Electrónico</h3>
            <p class="mt-2 text-gray-600">informes@grupochimex.com</p>
            <p class="text-sm text-gray-500">+52 55 6395 0179</p>
          </div>
        </div>

        <!-- Dirección -->
        <div class="flex items-start">
          <div class="flex-shrink-0">
            <div class="flex items-center justify-center w-12 h-12 bg-orange-600 rounded-full">
              <i class="text-xl text-white fas fa-map-marker-alt"></i>
            </div>
          </div>
          <div class="ml-4">
            <h3 class="text-lg font-semibold text-gray-900">Oficina Principal</h3>
            <p class="mt-2 text-gray-600">Gutenberg #128 Anzures, Miguel Hidalgo, 11590 </p>
            <p class="text-gray-600">Ciudad de México, CDMX</p>
          </div>
        </div>


      </div>

      <!-- Formulario de Contacto -->
      <div class="col-span-2 p-8 bg-white shadow-lg rounded-xl">
        <form class="space-y-6">
          <div>
            <label class="block text-sm font-medium text-gray-700">
              <i class="mr-2 text-orange-600 fas fa-user"></i>Nombre completo
            </label>
            <input
              type="text"
              class="block w-full px-4 py-3 mt-1 border rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
              required
            >
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">
              <i class="mr-2 text-orange-600 fas fa-envelope"></i>Correo electrónico
            </label>
            <input
              type="email"
              class="block w-full px-4 py-3 mt-1 border rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
              required
            >
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">
              <i class="mr-2 text-orange-600 fas fa-phone"></i>Teléfono (opcional)
            </label>
            <input
              type="tel"
              class="block w-full px-4 py-3 mt-1 border rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
            >
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">
              <i class="mr-2 text-orange-600 fas fa-comment-dots"></i>Mensaje
            </label>
            <textarea
              rows="4"
              class="block w-full px-4 py-3 mt-1 border rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            class="w-full px-4 py-3 font-semibold text-white transition-colors duration-300 bg-orange-600 rounded-lg hover:bg-orange-700"
          >
            <i class="mr-2 fas fa-paper-plane"></i>Enviar Mensaje
          </button>
        </form>
      </div>
    </div>
  </div>
</section>
    </template>
   </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';


</script>

<style scoped>

</style>
