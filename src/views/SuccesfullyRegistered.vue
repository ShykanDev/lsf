<template>
   <MainLayout>
    <template #main>
      <section>
        <div class="p-8 text-center">
    <h1 class="mb-4 text-2xl font-bold">{{ mensaje }}</h1>
    <p v-if="error" class="text-red-500">{{ error }}</p>
  </div>
      </section>
    </template>
   </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';

import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getAuth, applyActionCode } from 'firebase/auth'

const route = useRoute()
const router = useRouter()
const auth = getAuth()

const mensaje = ref('Verificando correo...')
const error = ref('')

onMounted(async () => {
  const mode = route.query.mode
  const oobCode = route.query.oobCode

  if (mode === 'verifyEmail' && oobCode) {
    try {
      await applyActionCode(auth, oobCode as string)
      mensaje.value = '✅ ¡Tu correo ha sido verificado con éxito!'
    } catch (err) {
      console.error(err)
      mensaje.value = '❌ Hubo un problema al verificar tu correo.'
      error.value = err as string
    }
  } else {
    mensaje.value = '❗ Enlace inválido o incompleto.'
  }
})

</script>

<style scoped>

</style>
