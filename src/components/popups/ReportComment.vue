<template>
  <div class="flex fixed inset-0 z-50 justify-center items-center bg-black bg-opacity-50">
      <div v-show="!loading" class="p-4 max-w-sm bg-white rounded-lg shadow-lg animate-jump">
          <h2 class="mb-2 text-lg font-semibold">Reportar comentario</h2>

          <!-- Disclaimer -->
          <div class="p-2 mb-3 text-sm text-rose-700 bg-rose-50 border-l-4 border-rose-400">
              <p class="font-medium">⚠️ Normas de uso:</p>
              <p>Esta herramienta es <strong>solo para reportar comentarios ofensivos</strong> (discriminación, acoso, amenazas, etc.).</p>
              <p class="mt-1"><strong>El abuso puede resultar en la suspensión permanente de su cuenta.</strong></p>
          </div>

          <p class="mb-4">¿Está seguro de que quiere reportar este comentario?</p>

          <div class="flex gap-2 justify-end">
              <button @click="closeModal" class="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200">
                  Cancelar
              </button>
              <button @click="startReport" class="px-4 py-2 text-sm font-medium text-white bg-rose-500 rounded-lg hover:bg-rose-600">
                  Reportar
              </button>
          </div>
      </div>
      <div v-show="loading" class="p-4 max-w-sm bg-white rounded-lg shadow-lg animate-jump">
        <v-icon name="ri-loader-5-line" scale="1.2" class="absolute top-1 right-1 text-rose-600"  animation="spin" speed="fast" />
        <article class="flex relative flex-col gap-2 items-start">
            <h2 class="mb-2 text-lg font-medium text-rose-800 font-redHat">Reportando comentario...</h2>
            <p class="text-sm text-gray-600">Esto puede tomar unos momentos</p>
            <p class="text-sm text-gray-600 animate-fade-left animate-delay-[700ms]">Obteniendo el usuario</p>
            <p class="text-sm text-gray-600 animate-fade-left animate-delay-[1400ms]">Reportando el comentario</p>
            <p class="text-sm text-gray-600 animate-fade-left animate-delay-[2100ms]">Listo</p>
            <p>{{ reports().getReportCommentData }}</p>
          </article>
      </div>

  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import LoaderPink from '../animations/LoaderPink.vue';
import { Timestamp } from 'firebase/firestore';
import { reports } from '@/stores/reports';

const emit = defineEmits(['close', 'report', 'loading']);
const loading = ref(false);

const closeModal = () => {
  emit('close');
}



const startReport = () => {
  loading.value = true;
}

const props = defineProps({
  userId:{
    type:String,
    required:true
  },
  messageReported:{
    type:String,
    required:true
  },
  userReportedName:{
    type:String,
    required:true
  },
  dateReported:{
    type:Timestamp,
    required:true
  }
})
</script>

<style scoped>
/* Estilos adicionales si son necesarios */
</style>
