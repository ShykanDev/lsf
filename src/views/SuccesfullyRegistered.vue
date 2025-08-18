<template>
  <MainLayout>
    <template #main>
      <section class="flex justify-center items-center p-4 min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div class="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden p-8 space-y-6 text-center transform transition-all duration-300 hover:scale-[1.01]">
          <!-- Icono dinámico según el estado -->
          <div class="flex justify-center">
            <div
              class="flex justify-center items-center mx-auto w-20 h-20 rounded-full"
              :class="{
                'bg-green-100 text-green-600': isSuccess,
                'bg-red-100 text-red-600': isError,
                'bg-blue-100 text-blue-600': isLoading
              }"
            >
              <svg
                v-if="isLoading"
                class="w-10 h-10 text-blue-600 animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              <svg
                v-else-if="isSuccess"
                class="w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <svg
                v-else-if="isError"
                class="w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>

          <!-- Mensaje principal -->
          <h1
            class="text-2xl font-bold text-gray-800 transition-all duration-300"
            :class="{
              'text-green-600': isSuccess,
              'text-red-600': isError,
              'text-blue-600': isLoading
            }"
          >
            {{ mensaje }}
          </h1>

          <!-- Mensaje de error (si existe) -->
          <p
            v-if="error"
            class="p-3 text-sm text-red-500 bg-red-50 rounded-lg border border-red-200 transition-all duration-300"
          >
            {{ error }}
          </p>

          <!-- Botón de acción -->
          <button
            v-if="!isLoading"
            @click="goToLogin"
            class="px-4 py-2 mt-6 w-full font-medium text-white bg-indigo-600 rounded-lg transition-colors duration-200 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            {{ isSuccess ? 'Ir a iniciar sesión' : 'Volver a intentar' }}
          </button>
        </div>
      </section>
    </template>
  </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';
import { onMounted, ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getAuth, applyActionCode } from 'firebase/auth';

const route = useRoute();
const router = useRouter();
const auth = getAuth();

const mensaje = ref('Verificando tu correo electrónico...');
const error = ref('');
const isLoading = ref(true);
const isSuccess = ref(false);
const isError = ref(false);

const goToLogin = () => {
  router.push({ name: 'login' });
};

onMounted(async () => {
  const mode = route.query.mode;
  const oobCode = route.query.oobCode;

  if (mode === 'verifyEmail' && oobCode) {
    try {
      await applyActionCode(auth, oobCode as string);
      mensaje.value = '¡Correo verificado con éxito! 🎉';
      isSuccess.value = true;
    } catch (err: any) {
      console.error(err);
      mensaje.value = 'Error al verificar el correo';
      error.value = err.message || 'Ocurrió un error desconocido';
      isError.value = true;
    } finally {
      isLoading.value = false;
    }
  } else {
    mensaje.value = 'Enlace inválido o incompleto';
    error.value = 'Asegúrate de que el enlace sea correcto y completo.';
    isError.value = true;
    isLoading.value = false;
  }
});
</script>

<style scoped>
/* Animación para el contenedor principal */
section {
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
