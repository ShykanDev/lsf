<template>
  <!-- Comentario -->
  <div class="p-4 mb-4 bg-white rounded-lg shadow-md">
    <div class="flex items-center justify-between mb-2">
      <div class="flex items-center">
        <i class="text-2xl text-blue-500 fas fa-user-circle" aria-hidden="true"></i>
        <div class="ml-2">
          <h4 class="text-lg font-semibold">{{ props.name }}</h4>
          <p class="text-sm text-gray-500">{{ formattedDate }}</p>
        </div>
      </div>
      <div class="items-center hidden space-x-2 ">
        <i class="text-gray-500 cursor-pointer fas fa-thumbs-up hover:text-blue-500"></i>
        <i class="text-gray-500 cursor-pointer fas fa-thumbs-down hover:text-red-500"></i>
        <i class="text-gray-500 cursor-pointer fas fa-share-alt hover:text-green-500"></i>
      </div>
    </div>
    <h3 class="mb-2 text-xl font-bold">{{ props.subject }}</h3>
    <p class="text-base leading-relaxed">
      {{ props.msg }}
    </p>
  </div>
</template>

<script lang="ts" setup>
import { Timestamp } from 'firebase/firestore';
import { computed, type PropType } from 'vue';

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  msg: {
    type: String,
    required: true
  },
  date: {
    type: Object as PropType<Timestamp>,
    required: true
  },
  subject: {
    type: String,
    required: true
  }
})
const formattedDate = computed(() => {
  // Verifica si el timestamp es un objeto Timestamp de Firebase
  if (props.date instanceof Timestamp) {
    const date = props.date.toDate(); // Convierte el Timestamp a un objeto Date de JavaScript
    return date.toLocaleString(); // Formatea la fecha para que sea legible
  }

  // Si no es un objeto Timestamp válido, devuelve un mensaje de error
  return 'Invalid Date';
});
</script>

<style scoped></style>
