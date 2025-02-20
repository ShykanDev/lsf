<template>
   <MainLayout>
    <template #main>
      <section class="px-4 py-16 bg-gray-50 sm:px-6 lg:px-8">
  <div class="max-w-4xl mx-auto">
    <div class="mb-12 text-center">
      <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
        <i class="mr-3 text-blue-600 fas fa-life-ring"></i>
        Preguntas Frecuentes
      </h2>
      <p class="mt-4 text-lg text-gray-500">
        Estamos aquí para ayudarte. Revisa nuestras preguntas frecuentes o contáctanos si necesitas más ayuda.
      </p>
    </div>

    <div class="space-y-6">
      <!-- FAQ Items -->
      <div class="p-6 transition-shadow bg-white rounded-lg shadow-lg hover:shadow-xl">
        <div class="flex items-start">
          <i class="mt-1 mr-4 text-blue-500 fas fa-circle-question"></i>
          <div>
            <h3 class="text-lg font-semibold text-gray-900">¿Es gratis?</h3>
            <p class="mt-2 text-gray-600">Como bien lo hemos comentado, este sitio es completamente gratuito, apoyelo compartiendo</p>
          </div>
        </div>
      </div>

      <!-- Repetir este bloque para cada FAQ -->
      <div class="p-6 transition-shadow bg-white rounded-lg shadow-lg hover:shadow-xl">
        <div class="flex items-start">
          <i class="mt-1 mr-4 text-purple-500 fas fa-shield-alt"></i>
          <div>
            <h3 class="text-lg font-semibold text-gray-900">¿Necesito dar información delicada?</h3>
            <p class="mt-2 text-gray-600">Su información de registro no requiere de datos bancarios, íntimos o delicados</p>
          </div>
        </div>
      </div>

      <!-- Más preguntas aquí... -->

      <!-- Sección de Contacto -->
      <div class="p-8 mt-16 bg-white rounded-lg shadow-lg">
        <h3 class="mb-6 text-2xl font-bold text-gray-900">
          <i class="mr-3 text-green-500 fas fa-envelope-open-text"></i>
          ¿No hemos resuelto tu duda?
        </h3>

        <form class="space-y-6">
          <div>
            <label class="block text-sm font-medium text-gray-700">¿Cuál es su nombre?</label>
            <input type="text" class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500">
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">Su correo electrónico</label>
            <input type="email" class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500">
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">Escriba su comentario o solicitud</label>
            <textarea rows="4" class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
          </div>

          <button type="submit" class="flex items-center justify-center w-full px-6 py-3 text-white transition-colors bg-blue-600 rounded-md hover:bg-blue-700">
            <i class="mr-2 fas fa-paper-plane"></i>
            Enviar Mensaje
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
