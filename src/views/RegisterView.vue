<template>
  <MainLayout>
    <template #main>
      <section class="px-4 py-5 min-h-screen bg-gradient-to-br from-indigo-600 to-indigo-800">
        <div class="overflow-hidden mx-auto max-w-full bg-white rounded-xl shadow-2xl">
          <div class="p-8">
            <!-- Encabezado -->
            <div class="mb-10 text-center">
              <i class="mb-4 text-4xl text-indigo-600 fas fa-user-plus"></i>
              <h2 class="text-3xl font-bold text-gray-800">Cree su cuenta</h2>
              <p class="mt-2 text-gray-600">Únase para comentar y proteger a la comunidad</p>
            </div>

            <!-- Formulario -->
            <form class="space-y-6">
              <!-- Nombre -->
              <div>
                <label class="block mb-2 text-sm font-semibold text-gray-700">
                  <i class="mr-2 text-indigo-600 fas fa-user"></i>Nombre completo
                </label>
                <input type="text" v-model="userName" name="name"
                  class="px-4 py-3 w-full rounded-lg border focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                  placeholder="Ej: Juan Pérez" required>
              </div>

              <!-- Correo -->
              <div>
                <label class="block mb-2 text-sm font-semibold text-gray-700">
                  <i class="mr-2 text-indigo-600 fas fa-envelope"></i>Correo electrónico
                </label>
                <input type="email" v-model="userEmail" name="email"
                  class="px-4 py-3 w-full rounded-lg border focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                  placeholder="correo@ejemplo.com" required>
              </div>

              <!-- Edad -->
              <div class="hidden">
                <label class="hidden mb-2 text-sm font-semibold text-gray-700">
                  <i class="mr-2 text-indigo-600 fas fa-calendar-alt"></i>Edad
                </label>
                <input type="number" min="18" max="100"
                  class="px-4 py-3 w-full rounded-lg border focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                  required>
              </div>

              <!-- Contraseña -->
              <div>
                <label class="block mb-2 text-sm font-semibold text-gray-700">
                  <i class="mr-2 text-indigo-600 fas fa-lock"></i>Contraseña
                </label>
                <input type="password" v-model="password" name="password"
                  class="px-4 py-3 w-full rounded-lg border focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                  placeholder="••••••••" required>
              </div>

              <!-- Confirmar Contraseña -->
              <div>
                <label class="block mb-2 text-sm font-semibold text-gray-700">
                  <i class="mr-2 text-indigo-600 fas fa-check-circle"></i>Confirmar Contraseña
                </label>
                <input type="password" v-model="confirmPassword" name="confirmPassword"
                  class="px-4 py-3 w-full rounded-lg border focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                  placeholder="••••••••" required>
              </div>

              <!-- Botón Registro -->
              <button @click.prevent="createUser" type="submit"
                class="px-4 py-3 w-full font-bold text-white bg-indigo-600 rounded-lg transition-colors duration-300 hover:bg-indigo-700">
                Registrarse <i class="ml-2 fas fa-arrow-right"></i>
              </button>

              <!-- Enlace Login -->
              <p class="mt-6 text-center text-gray-600">
                ¿Ya tienes cuenta?
                <a href="#login" class="font-semibold text-indigo-600 hover:text-indigo-800">
                  Inicia Sesión <i class="ml-1 fas fa-sign-in-alt"></i>
                </a>
              </p>
            </form>
          </div>

          <!-- Pie de formulario -->
          <div class="px-8 py-6 bg-indigo-50">
            <div class="flex justify-center items-center space-x-2">
              <i class="text-indigo-600 fas fa-shield-alt"></i>
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
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateCurrentUser, updateProfile, type UserCredential } from 'firebase/auth';
import { ref } from 'vue';
import { Notyf } from 'notyf';
import "notyf/notyf.min.css";
import { sysValues } from '@/stores/sysVals';
import { useRouter } from 'vue-router';

const notyf = new Notyf({
  duration: 3000,
  position: {
    x: "right",
    y: "top",
  },
})

// values to register the user
const userName = ref('');
const userEmail = ref('');
const password = ref('');
const confirmPassword = ref('');

// verifying that user values are valid
const verifyValues = (): boolean => (!userEmail.value || !password.value || !confirmPassword.value || !userName.value || password.value !== confirmPassword.value) ? false : true;

// values to login the user trough firebase
const auth = getAuth();

const router = useRouter();
const createUser = async (): Promise<any> => {
  if (!verifyValues()) {
    notyf.error('Por favor verifique los valores ingresados, verifique que no haya faltantes')
    return;
  };

  try {
    const credentials = await createUserWithEmailAndPassword(auth, userEmail.value, password.value);
    updateProfile(credentials.user, {
      displayName: userName.value,
    })


    if (credentials.user) {
      const actionCodeSettings = {
        url: 'https://losestafadores.com/succesfullyRegistered',
        handleCodeInApp: true,
      };
      await sendEmailVerification(credentials.user, actionCodeSettings);
      console.log(credentials.user);
    }
    sysValues().setUserName(userName.value)
    // clear input values for valid messages once the message is sent
    userName.value = '';
    userEmail.value = '';
    password.value = '';
    confirmPassword.value = '';

    notyf.success(`${sysValues().getUserName}, su cuenta se ha creado correctamente, por favor vaya al al inicio de sesión`)
    setTimeout(() => {
      router.push({ name: 'login' })
    }, 5000)
  } catch (error) {
    console.log(error);
  }
}

</script>

<style scoped></style>
