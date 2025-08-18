<template>
  <MainLayout>
    <template #main>
      <section class="relative z-10 px-4 py-5 min-h-screen">
        <img src="https://images.pexels.com/photos/221179/pexels-photo-221179.jpeg" alt="" class="object-cover absolute top-0 left-0 w-full h-full -z-10">
        <div class="overflow-hidden z-10 mx-auto max-w-full rounded-xl shadow-2xl bg-indigo-50/95">
          <div class="p-8">
            <!-- Encabezado -->
            <div class="mb-10 text-center">
              <i class="mb-4 text-4xl text-indigo-600 fas fa-user-plus"></i>
              <h2 class="text-3xl font-bold text-gray-800">Cree su cuenta</h2>
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

              <!--Avatar Color Picker-->
              <div>
                <label class="block mb-2 text-sm font-semibold text-gray-700">
                  <i class="mr-2 text-indigo-600 fas fa-user"></i>Color de avatar
                </label>
                <div class="flex gap-2">
                  <article
                    v-for="item in avatarColors"
                    :key="item.id"
                    @click="selectColor(item.color)"
                    class="flex justify-center items-center w-8 h-8 rounded-full transition-all duration-200 cursor-pointer"
                    :style="{
                      backgroundColor: !selectedColor ? item.color : (selectedColor === item.color ? item.color : '#e5e7eb'),
                      border: `2px solid ${!selectedColor ? item.color : (selectedColor === item.color ? item.color : '#d1d5db')}`,
                      transform: selectedColor === item.color ? 'scale(1.1)' : 'scale(1)'
                    }"
                  >
                    <span
                      class="text-sm font-semibold"
                      :style="{ color: !selectedColor ? '#ffffff' : (selectedColor === item.color ? '#ffffff' : '#6b7280') }"
                    >
                      {{ userName.charAt(0).toUpperCase() }}
                    </span>
                  </article>
                </div>
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
                ¿Ya tiene cuenta?
                <RouterLink :to="{ name: 'login' }" class="font-semibold text-indigo-600 hover:text-indigo-800">
                  Iniciar Sesión <i class="ml-1 fas fa-sign-in-alt"></i>
                </RouterLink>
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
const createUser = async (): Promise<void> => {
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
        url: 'http://localhost:5173/successfullyRegistered',
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

const avatarColors = [
  { id: 1, color: '#f4b853' },
  { id: 2, color: '#998bf1' },
  { id: 3, color: '#1c144c' },
  { id: 4, color: '#c7a0ca' },
  { id: 5, color: '#4b4590' },
  { id: 6, color: '#3c3c64' },
];

const selectedColor = ref('');

const selectColor = (color: string) => {
  selectedColor.value = selectedColor.value === color ? '' : color;
};
</script>

<style scoped></style>
