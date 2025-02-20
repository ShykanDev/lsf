<template>
  <MainLayout>
    <template #main>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" />

<div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
  <!-- Sección Sobre nosotros -->
  <div class="flex flex-col items-center gap-8 mb-16 md:flex-row">
    <div class="md:w-7/12">
      <h2 class="mb-6 text-3xl font-bold text-center text-gray-800 md:text-left">
        <i class="mr-2 text-orange-500 fas fa-info-circle"></i>Sobre losestafadores.com
      </h2>
      <p class="text-lg leading-relaxed text-gray-600">
        Los estafadores.com es un sitio con registro gratuito, donde podrá descubrir a base de experiencias, las empresas, personas y/o servicios que cometen estafas o fraude.
      </p>
    </div>
    <div class="flex justify-center md:w-5/12">
      <img src="../assets/img/icono.png" alt="Logo" class="object-contain w-48 h-48">
    </div>
  </div>

  <div class="my-12 border-b-2 border-gray-200"></div>

  <!-- Sección Comenta/Indaga/Descubre -->
  <div class="p-8 mb-16 bg-gray-50 rounded-xl">
    <div class="flex flex-col gap-8 lg:flex-row">
      <div class="flex justify-center lg:w-1/5">
        <img src="../assets/img/man-call.png" alt="Contacto" class="w-48 h-auto">
      </div>
      <div class="lg:w-4/5">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div class="p-6 text-center bg-white rounded-lg shadow-sm">
            <i class="mb-4 text-4xl text-orange-500 fas fa-comment-dots"></i>
            <h3 class="mb-3 text-xl font-semibold">Comenta</h3>
            <p class="text-gray-600">Comparte tus comentarios mencionando con base a experiencias situaciones con estafas o fraudes.</p>
          </div>
          <div class="p-6 text-center bg-white rounded-lg shadow-sm">
            <i class="mb-4 text-4xl text-orange-500 fas fa-search"></i>
            <h3 class="mb-3 text-xl font-semibold">Indaga</h3>
            <p class="text-gray-600">Busca y conoce gracias a los comentarios, las personas que realizan estafas y fraudes.</p>
          </div>
          <div class="p-6 text-center bg-white rounded-lg shadow-sm">
            <i class="mb-4 text-4xl text-orange-500 fas fa-eye"></i>
            <h3 class="mb-3 text-xl font-semibold">Descubre</h3>
            <p class="text-gray-600">Antes de realizar una compra, contrato, préstamo, negocio y más. Descubre quienes son los estafadores.</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="my-12 border-b-2 border-gray-200"></div>

  <!-- Franja naranja -->
  <div class="p-8 mb-16 bg-orange-500 rounded-xl">
    <div class="grid grid-cols-1 gap-8 text-white md:grid-cols-4">
      <div class="text-center">
        <i class="mb-4 text-3xl fas fa-wallet"></i>
        <p class="mb-2 text-lg font-bold">Sin Costo</p>
        <p class="text-sm">No se requerirán datos de pago para el uso de la página</p>
      </div>
      <div class="text-center">
        <i class="mb-4 text-3xl fas fa-thumbs-up"></i>
        <p class="mb-2 text-lg font-bold">Fácil de Usar</p>
        <p class="text-sm">Sitio específico sin complicaciones para utilizar sus funciones</p>
      </div>
      <div class="text-center">
        <i class="mb-4 text-3xl fas fa-shield-alt"></i>
        <p class="mb-2 text-lg font-bold">Seguro</p>
        <p class="text-sm">Protección de datos y opción de mostrar/ocultar datos de usuario</p>
      </div>
      <div class="text-center">
        <i class="mb-4 text-3xl fas fa-check-circle"></i>
        <p class="mb-2 text-lg font-bold">Confiable</p>
        <p class="text-sm">Contamos con <a href="./privacidad.php" class="underline hover:text-orange-200">Avisos de Privacidad</a></p>
      </div>
    </div>
  </div>

  <div class="my-12 border-b-2 border-gray-200"></div>

  <!-- Bloques finales -->
  <div class="space-y-8">
    <div class="p-8 text-center text-white bg-orange-500 rounded-xl">
      <h2 class="mb-4 text-2xl font-bold">Comente sus experiencias</h2>
      <p class="mb-6">¿Ha sido directamente o indirectamente víctima de una estafa o fraude? Publique y comente acerca de esa experiencia.</p>
      <a href="./crear-entradas.php" class="inline-block px-6 py-3 text-white transition-colors bg-gray-800 rounded-lg hover:bg-gray-700">
        Comentar <i class="ml-2 fas fa-arrow-right"></i>
      </a>
    </div>

    <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
      <div class="p-8 text-center text-white bg-orange-400 rounded-xl">
        <h2 class="mb-4 text-2xl font-bold">Indague quienes son los estafadores</h2>
        <p class="mb-6"><a href="#miModal" class="underline hover:text-orange-200">Iniciar Sesión</a> para habilitar todas las funciones.</p>
        <a href="./blog.php" class="inline-block px-6 py-3 text-white transition-colors bg-gray-800 rounded-lg hover:bg-gray-700">
          Blog <i class="ml-2 fas fa-book-open"></i>
        </a>
      </div>

      <div class="p-8 text-center text-white bg-orange-300 rounded-xl">
        <h2 class="mb-4 text-2xl font-bold">Búsqueda directa</h2>
        <p class="mb-6">Utilice nuestro motor de búsqueda para filtrar los comentarios.</p>
        <a href="./#" class="inline-block px-6 py-3 text-white transition-colors bg-gray-800 rounded-lg hover:bg-gray-700">
          Buscar <i class="ml-2 fas fa-search"></i>
        </a>
      </div>
    </div>
  </div>

  <div class="my-12 border-b-2 border-gray-200"></div>

  <!-- Sección "Evita problemas" -->
  <div class="p-8 mb-16 bg-gray-100 rounded-xl">
    <div class="flex flex-col items-center gap-8 md:flex-row">
      <div class="flex justify-center md:w-1/2">
        <img src="../assets/img/ciculo-woman.png" alt="Mujer" class="object-contain w-64 h-64">
      </div>
      <div class="md:w-1/2">
        <h2 class="mb-6 text-3xl font-bold text-gray-800">Evita problemas</h2>
        <p class="mb-6 text-lg leading-relaxed text-gray-600">
          Empieza por indagar las personas, empresas, servicios, entre otros. Que hacen estafas y fraudes. Detecta si tu próxima compra o trato se encuentra en los comentarios y toma tu mejor elección.
        </p>
        <div class="text-center">
          <a href="./register.php" class="inline-block px-6 py-3 text-white transition-colors bg-orange-500 rounded-lg hover:bg-orange-600">
            Registro <i class="ml-2 fas fa-user-plus"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
    </template>
  </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';


</script>

<style scoped></style>
