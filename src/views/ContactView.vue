<template>
  <MainLayout>
    <template #main>
      <section class="px-4 py-5 bg-gray-50 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-7xl">
          <!-- Encabezado -->
          <div class="mb-16 text-center">
            <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">
              <i class="mr-3 text-indigo-600 fas fa-envelope-open-text"></i>Contáctanos
            </h2>
            <p class="mt-4 text-lg text-gray-600">¿Tiene alguna pregunta? Escríbenos y te responderemos en menos de 24
              horas</p>
          </div>

          <div class="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <!-- Información de Contacto -->
            <div class="space-y-8">
              <!-- Teléfono -->
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <div class="flex justify-center items-center w-12 h-12 bg-indigo-600 rounded-full">
                    <i class="text-xl text-white fas fa-phone"></i>
                  </div>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-semibold text-gray-900">Teléfono</h3>
                  <p class="mt-2 text-gray-600">+52 55 6395 0178</p>
                  <p class="text-sm text-gray-500">Lunes a Viernes: 9am - 6pm</p>
                </div>
              </div>

              <!-- Email -->
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <div class="flex justify-center items-center w-12 h-12 bg-indigo-600 rounded-full">
                    <i class="text-xl text-white fas fa-envelope"></i>
                  </div>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-semibold text-gray-900">Correo Electrónico</h3>
                  <p class="mt-2 text-gray-600">informes@grupochimex.com</p>
                  <p class="text-sm text-gray-500">+52 55 6395 0179</p>
                </div>
              </div>

              <!-- Dirección -->
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <div class="flex justify-center items-center w-12 h-12 bg-indigo-600 rounded-full">
                    <i class="text-xl text-white fas fa-map-marker-alt"></i>
                  </div>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-semibold text-gray-900">Oficina Principal</h3>
                  <p class="mt-2 text-gray-600">Gutenberg #128 Anzures, Miguel Hidalgo, 11590 </p>
                  <p class="text-gray-600">Ciudad de México, CDMX</p>
                </div>
              </div>


            </div>

            <!-- Formulario de Contacto -->
            <div class="col-span-2 p-8 bg-white rounded-xl shadow-lg">
              <form class="space-y-6">
                <div>
                  <label class="block text-sm font-medium text-gray-700">
                    <i class="mr-2 text-indigo-600 fas fa-user"></i>Nombre completo
                  </label>
                  <input type="text" v-model="name"
                    class="block px-4 py-3 mt-1 w-full rounded-lg border focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                    required>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700">
                    <i class="mr-2 text-indigo-600 fas fa-tag"></i>Asunto
                  </label>
                  <input type="text" v-model="subject"
                    class="block px-4 py-3 mt-1 w-full rounded-lg border focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                    required>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700">
                    <i class="mr-2 text-indigo-600 fas fa-envelope"></i>Correo electrónico
                  </label>
                  <input type="email" v-model="email"
                    class="block px-4 py-3 mt-1 w-full rounded-lg border focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                    required>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700">
                    <i class="mr-2 text-indigo-600 fas fa-phone"></i>Teléfono (opcional)

                  </label>
                  <input type="tel" v-model="phone"
                    class="block px-4 py-3 mt-1 w-full rounded-lg border focus:ring-2 focus:ring-indigo-600 focus:border-transparent">
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700">
                    <i class="mr-2 text-indigo-600 fas fa-comment-dots"></i>Mensaje
                  </label>
                  <textarea v-model="message" rows="4"
                    class="block px-4 py-3 mt-1 w-full rounded-lg border focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                    required></textarea>
                </div>

                <button @click.prevent="sendEmail" type="submit"
                  class="px-4 py-3 w-full font-semibold text-white bg-indigo-600 rounded-lg transition-colors duration-300 hover:bg-indigo-700">
                  <i class="mr-2 fas fa-paper-plane"></i>Enviar Mensaje
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
import { ref } from 'vue';
import emailjs from '@emailjs/browser';
// importing styles from notyf
import 'notyf/notyf.min.css';
import { Notyf } from 'notyf';

const notyf = new Notyf({
  duration: 4000,
  position: {
    x: 'right',
    y: 'top',
  },
});


emailjs.init({
  publicKey: 'fXlbInB-wrOGPiUbH',
  // Do not allow headless browsers
  blockHeadless: true,
  blockList: {
    // Block the suspended emails
    list: ['foo@emailjs.com', 'bar@emailjs.com'],
    // The variable contains the email address
    watchVariable: 'userEmail',
  },
  limitRate: {
    // Set the limit rate for the application
    id: 'app',
    // Allow 1 request per 10s
    throttle: 10000,
  },
});


const name = ref('');
const email = ref('');
const phone = ref('');
const subject = ref('');
const message = ref('');

const sendEmail = async () => {
  if (name.value === '' || email.value === '' || message.value === '') {
    notyf.error('Por favor ingresa todos los campos');
    return
  }
  try {
    const result = emailjs.send('service_3nl9wkf.', 'template_2q2mc52', {
      subject: subject.value,
      message: message.value,
      name: name.value,
      email: email.value,
      phone: phone.value,
      url: 'losestafadores.com'
    })

    if ((await result).status === 200) {
      notyf.success('Correo enviado correctamente, tan pronto nos sea posible le responderemos');
      // cleaning the form
      name.value = '';
      email.value = '';
      phone.value = '';
      subject.value = '';
      message.value = '';
    }
  } catch (error) {
    notyf.error('Error al enviar el correo, por favor inténtalo de nuevo mas tarde' + error);
    console.log(error);

  }
}
</script>

<style scoped></style>
