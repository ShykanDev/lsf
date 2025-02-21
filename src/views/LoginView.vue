<template>
  <MainLayout>
    <template #main>
      <section class="min-h-screen px-4 py-5 bg-gradient-to-br from-orange-50 to-orange-100">
        <div class="mx-auto overflow-hidden bg-white shadow-xl max-w-7xl rounded-xl">
          <div class="p-8">
            <!-- Encabezado -->
            <div class="mb-10 text-center">
              <div class="mb-6">
                <i class="text-4xl text-orange-600 fas fa-user-lock"></i>
              </div>
              <h2 class="text-3xl font-bold text-gray-800">Bienvenido de vuelta</h2>
              <p class="mt-2 text-gray-600">Ingresa tus credenciales para continuar</p>
            </div>

            <!-- Formulario -->
            <form class="space-y-6">
              <!-- Email -->
              <div>
                <label class="block mb-2 text-sm font-semibold text-gray-700">
                  <i class="mr-2 text-orange-600 fas fa-envelope"></i>Correo electrónico
                </label>
                <input type="email" v-model="email" name="email"
                  class="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                  placeholder="correo@ejemplo.com" required>
              </div>

              <!-- Contraseña -->
              <div>
                <label class="block mb-2 text-sm font-semibold text-gray-700">
                  <i class="mr-2 text-orange-600 fas fa-lock"></i>Contraseña
                </label>
                <input type="password" v-model="password"
                  class="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                  placeholder="••••••••" required>
              </div>

              <!-- Recordar y Olvidé contraseña -->
              <div class="flex flex-col items-center justify-between space-y-6">
                <div class="text-sm">
                  <p @click="toggleResetPassword"
                    class="font-medium text-orange-600 cursor-pointer hover:text-orange-800">
                    {{ showResetPassword ? 'Cancelar' : 'Olvidé mi contraseña' }}
                  </p>
                </div>
                <!-- section to show input to reset password if needed -->
                <div class="flex flex-col" v-if="showResetPassword">
                  <label for="remember">Ingrese su correo, le enviaremos un enlace para restablecer su
                    contraseña</label>
                  <input type="email" v-model="email" id="remember" name="remember"
                    class="p-2 border-2 border-orange-400 rounded-lg" placeholder="correo@ejemplo.com" />
                  <button type="button" @click="resetPassword"
                    class="px-4 py-3 mx-auto my-4 font-bold text-white transition-colors duration-300 bg-orange-600 rounded-lg w-3/ 4 hover:bg-orange-700"><i
                      class="mr-2 fas fa-sync-alt animate-spin"></i>Restablecer</button>
                </div>
              </div>

              <!-- Botón Login -->
              <button @click.prevent="signIn" type="submit"
                class="w-full px-4 py-3 font-bold text-white transition-colors duration-300 bg-orange-600 rounded-lg hover:bg-orange-700">
                Ingresar <i class="ml-2 fas fa-sign-in-alt"></i>
              </button>

              <!-- Registro -->
              <div class="mt-6 text-center">
                <p class="text-gray-600">
                  ¿No tienes cuenta?
                  <RouterLink :to="{ name: 'register' }" class="font-semibold text-orange-600 hover:text-orange-800">
                    Regístrate aquí <i class="ml-1 fas fa-user-plus"></i>
                  </RouterLink>
                </p>
              </div>
            </form>
          </div>

          <!-- Separador Social -->
          <div class="hidden px-8 pb-6">
            <div class="relative">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-gray-300"></div>
              </div>
              <div class="relative flex justify-center text-sm">
                <span class="px-2 text-gray-500 bg-white">O ingresa con</span>
              </div>
            </div>

            <!-- Botones Sociales -->
            <div class="grid grid-cols-2 gap-3 mt-6">
              <button
                class="flex items-center justify-center w-full px-4 py-2 transition-colors border border-gray-300 rounded-lg hover:bg-gray-50">
                <i class="mr-2 text-orange-600 fab fa-google"></i>
                <span class="text-sm font-medium text-gray-700">Google</span>
              </button>

              <button
                class="flex items-center justify-center w-full px-4 py-2 transition-colors border border-gray-300 rounded-lg hover:bg-gray-50">
                <i class="mr-2 text-orange-600 fab fa-facebook"></i>
                <span class="text-sm font-medium text-gray-700">Facebook</span>
              </button>
            </div>
          </div>

          <!-- Pie de seguridad -->
          <div class="px-8 py-4 bg-orange-50">
            <div class="flex items-center justify-center space-x-2">
              <i class="text-orange-600 fas fa-shield-alt"></i>
              <p class="text-sm text-gray-600">Conexión segura SSL</p>
            </div>
          </div>
        </div>
      </section>
    </template>
  </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';
import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import { ref } from 'vue';

// alert values
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css'; // for React, Vue and Svelte
import { sysValues } from '@/stores/sysVals';
import { useRouter } from 'vue-router';

// router
const router = useRouter();

// Create an instance of Notyf
const notyf = new Notyf({
  position: {
    x: 'right',
    y: 'top'
  },
  ripple: true,
  dismissible: true,
  duration: 7000
});

// const sign in values
const email = ref('');
const password = ref('');

const auth = getAuth();
const signIn = async () => {
  if (!email.value || !password.value) {
    notyf.error('Por favor ingresa tu correo y contraseña');
    return;
  }
  try {
    const credentials = await signInWithEmailAndPassword(auth, email.value, password.value);
    if (!credentials.user.emailVerified) {
      notyf.error('El correo no ha sido verificado, por favor verifica tu correo, si no lo ves en tu bandeja de entrada, revisa la bandeja de spam');
      sysValues().setUserLogged(false);
      return;
    } else {
      if (credentials.user.displayName) {
        sysValues().setUserName(credentials.user.displayName);
        notyf.success('Bienvenido nuevamente ' + credentials.user.displayName);
        sysValues().setUserLogged(true);
        router.push({ name: 'blog' });
      }
    }
  } catch (error) {
    console.log(error);
    sysValues().setUserLogged(false);
    notyf.error('Error al iniciar sesión' + error);

  }
}

// reset password values
// variable to show/hidde the field to reset password
const showResetPassword = ref(false);
const toggleResetPassword = () => showResetPassword.value = !showResetPassword.value;
const resetPassword = async () => {
  try {
    await sendPasswordResetEmail(auth, email.value);
    notyf.success('Le hemos enviado un correo para restablecer tu contraseña');
    email.value = '';
  } catch (error) {
    notyf.error(`Hubo un error intentando restablecer tu contraseña ${error}`);
  }
}
</script>

<style scoped></style>
