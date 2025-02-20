<template>
   <MainLayout>
    <template #main>
      <section class="min-h-screen px-4 py-5 bg-gradient-to-br from-orange-600 to-orange-800">
  <div class="max-w-full mx-auto overflow-hidden bg-white shadow-2xl rounded-xl">
    <div class="p-8">
      <!-- Encabezado -->
      <div class="mb-10 text-center">
        <i class="mb-4 text-4xl text-orange-600 fas fa-user-plus"></i>
        <h2 class="text-3xl font-bold text-gray-800">Crea tu cuenta</h2>
        <p class="mt-2 text-gray-600">Únete para comentar y proteger a la comunidad</p>
      </div>

      <!-- Formulario -->
      <form class="space-y-6">
        <!-- Nombre -->
        <div>
          <label class="block mb-2 text-sm font-semibold text-gray-700">
            <i class="mr-2 text-orange-600 fas fa-user"></i>Nombre completo
          </label>
          <input
            type="text"
            class="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
            placeholder="Ej: Juan Pérez"
            required
          >
        </div>

        <!-- Correo -->
        <div>
          <label class="block mb-2 text-sm font-semibold text-gray-700">
            <i class="mr-2 text-orange-600 fas fa-envelope"></i>Correo electrónico
          </label>
          <input
            type="email"
            class="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
            placeholder="tucorreo@ejemplo.com"
            required
          >
        </div>

        <!-- Edad -->
        <div>
          <label class="block mb-2 text-sm font-semibold text-gray-700">
            <i class="mr-2 text-orange-600 fas fa-calendar-alt"></i>Edad
          </label>
          <input
            type="number"
            min="18"
            max="100"
            class="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
            required
          >
        </div>

        <!-- Contraseña -->
        <div>
          <label class="block mb-2 text-sm font-semibold text-gray-700">
            <i class="mr-2 text-orange-600 fas fa-lock"></i>Contraseña
          </label>
          <input
            type="password"
            class="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
            placeholder="••••••••"
            required
          >
        </div>

        <!-- Confirmar Contraseña -->
        <div>
          <label class="block mb-2 text-sm font-semibold text-gray-700">
            <i class="mr-2 text-orange-600 fas fa-check-circle"></i>Confirmar Contraseña
          </label>
          <input
            type="password"
            class="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
            placeholder="••••••••"
            required
          >
        </div>

        <!-- Botón Registro -->
        <button
          type="submit"
          class="w-full px-4 py-3 font-bold text-white transition-colors duration-300 bg-orange-600 rounded-lg hover:bg-orange-700"
        >
          Registrarse <i class="ml-2 fas fa-arrow-right"></i>
        </button>

        <!-- Enlace Login -->
        <p class="mt-6 text-center text-gray-600">
          ¿Ya tienes cuenta?
          <a href="#login" class="font-semibold text-orange-600 hover:text-orange-800">
            Inicia Sesión <i class="ml-1 fas fa-sign-in-alt"></i>
          </a>
        </p>
      </form>
    </div>

    <!-- Pie de formulario -->
    <div class="px-8 py-6 bg-orange-50">
      <div class="flex items-center justify-center space-x-2">
        <i class="text-orange-600 fas fa-shield-alt"></i>
        <p class="text-sm text-gray-600">Tus datos están protegidos con encriptación SSL</p>
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
