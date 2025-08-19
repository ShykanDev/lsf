<template>
  <section class="relative px-0 py-3 min-h-dvh animate-fade">
    <h2 class="mb-1 text-3xl font-bold text-center text-indigo-600 font-redHat">Comentarios</h2>
    <h3 class="mb-2 text-2xl text-center font-redHat">Comparte tus experiencias y opiniones</h3>
    <div class="p-2 mb-2 bg-gray-100 rounded-2xl shadow-md">
      <div class="flex justify-center items-center mb-4 text-blue-600">
        <i class="mr-2 text-3xl fas fa-balance-scale"></i>
        <span class="text-xl font-semibold">El poder del karma positivo</span>
      </div>
      <p class="text-center text-gray-800">
        Compartir tu experiencia no solo te ayuda a alzar la voz, sino que también protege a otros de caer en
        situaciones similares.
        Al revelar la verdad y exponer actos injustos, contribuyes a crear una comunidad más segura y consciente.
        <span class="font-bold text-blue-700">El karma actúa cuando ayudamos a los demás:</span> al advertir a otros,
        estás generando un impacto positivo que, de manera natural, regresará a ti de forma favorable.
      </p>
      <button
        class="hidden px-4 py-2 text-sm font-medium text-white bg-cyan-600 rounded-lg font-redHat hover:bg-cyan-700">Add Mock
        Comment</button>
      <div class="flex justify-center mt-4 text-blue-600">
        <i class="mr-4 text-3xl fas fa-hand-holding-heart"></i>
        <i class="mr-4 text-3xl fas fa-shield-alt"></i>
        <i class="text-3xl fas fa-heart"></i>
      </div>
      <!-- Lista de Empresas y Servicios Reportados -->
      <div class="p-4 mb-6 bg-white rounded-xl border border-gray-100 shadow-sm">
        <h3 class="mb-4 text-lg font-semibold text-gray-800 font-redHat">
          Empresas y servicios reportados
        </h3>

        <!-- Contenedor flex responsivo -->
        <div class="flex flex-wrap gap-3">
          <!-- Iteración con v-for -->
          <div v-for="service in comments.filter((comment) => comment.serviceName)" :key="service.id"
            class="px-4 py-2 cursor-pointer transition-all duration-200 ease-in-out bg-gray-50 rounded-lg hover:bg-indigo-50 hover:shadow-sm hover:scale-[1.02]">
            <span class="text-sm font-medium text-gray-700">
              {{ service.serviceName }}
            </span>
          </div>
        </div>
      </div>

    </div>

    <!-- Sección para escribir y enviar comentarios -->
    <div class="p-6 mx-4 w-[96%] bg-gradient-to-br from-white to-gray-50 shadow-xl rounded-3xl border border-gray-100">
      <!-- Título con efecto de degradado -->
      <h3
        class="mb-2 text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-purple-600 font-redHat">
        Reportar estafa (<span v-show="comments.length > 0" class="text-indigo-600">{{ comments.length }}</span><v-icon
          v-show="comments.length === 0" name="ri-loader-5-line" scale="1.2" class="text-indigo-600 animate-spin" />)
      </h3>

      <div class="flex justify-end mb-2">
      </div>

      <!-- Formulario con diseño moderno -->
      <form class="flex flex-col gap-3 justify-center items-center w-full">
        <!-- Contenedor con altura fija y scroll -->
        <section class="flex overflow-y-auto relative flex-col gap-3 p-2 w-full rounded-3xl border-2 max-h-[75vh]">
          <!-- Botón sticky -->
          <a href="#comment" type="button"
            class="sticky top-0 right-1 z-10 self-end px-3 py-1.5 text-sm text-white bg-indigo-500 rounded-lg shadow-sm transition-colors hover:bg-indigo-600">
            <v-icon name="bi-skip-end-fill" scale="1" class="mr-1" /> Omitir y solo comentar
          </a>
          <!-- Nombre de la empresa/servicio -->
          <div class="space-y-1.5">
            <div class="flex gap-2 items-center">
              <div class="p-[1px] text-indigo-600 bg-indigo-50 rounded-lg">
                <v-icon name="fa-store-alt" scale="1" />
              </div>
              <label for="serviceName" class="text-base font-medium text-gray-800 font-redHat">Nombre de la
                empresa/servicio</label>
            </div>
            <input v-model="userCommentValues.serviceName" type="text" placeholder="Ej: Tienda XYZ, Servicio ABC..."
              class="px-4 py-2.5 w-full text-gray-700 bg-gray-50 rounded-lg border border-gray-200 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent">
          </div>
          <!-- Ciudad/Estado y Dirección exacta -->
          <div class="flex flex-col gap-3 md:flex-row">
            <div class="space-y-1.5 w-full md:w-1/2">
              <div class="flex gap-2 items-center">
                <div class="p-[1px] text-indigo-600 bg-indigo-50 rounded-lg">
                  <v-icon name="fa-map-marker-alt" scale="1" />
                </div>
                <label for="city" class="text-base font-medium text-gray-800 font-redHat">Ciudad/Estado</label>
              </div>
              <input v-model="userCommentValues.city" type="text" placeholder="Ej: Ciudad de México..."
                class="px-4 py-2.5 w-full text-gray-700 bg-gray-50 rounded-lg border border-gray-200 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent">
            </div>
            <div class="space-y-1.5 w-full md:w-1/2">
              <div class="flex gap-2 items-center">
                <div class="p-[1px] text-indigo-600 bg-indigo-50 rounded-lg">
                  <v-icon name="fa-map-pin" scale="1" />
                </div>
                <label for="address" class="text-base font-medium text-gray-800 font-redHat">Dirección
                  (opcional)</label>
              </div>
              <input v-model="userCommentValues.address" type="text" placeholder="Ej: Av. Reforma 123..."
                class="px-4 py-2.5 w-full text-gray-700 bg-gray-50 rounded-lg border border-gray-200 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent">
            </div>
          </div>
          <!-- Tipo de estafa y Fecha del incidente -->
          <div class="flex flex-col gap-3 md:flex-row">
            <div class="space-y-1.5 w-full md:w-1/2">
              <div class="flex gap-2 items-center">
                <div class="p-[1px] text-indigo-600 bg-indigo-50 rounded-lg">
                  <v-icon name="fa-exclamation-triangle" scale="1" />
                </div>
                <label for="scamType" class="text-base font-medium text-gray-800 font-redHat">Tipo de estafa</label>
              </div>
              <select v-model="userCommentValues.scamType"
                class="px-4 py-2.5 w-full text-gray-700 bg-gray-50 rounded-lg border border-gray-200 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent">
                <option value="" disabled selected>Selecciona una opción</option>
                <option value="venta_fraudulenta">Venta fraudulenta</option>
                <option value="servicio_no_entregado">Servicio no entregado</option>
                <option value="cobro_excesivo">Cobro excesivo</option>
                <option value="phishing">Phishing o suplantación</option>
                <option value="otro">Otro</option>
              </select>
            </div>
            <div class="space-y-1.5 w-full md:w-1/2">
              <div class="flex gap-2 items-center">
                <div class="p-[1px] text-indigo-600 bg-indigo-50 rounded-lg">
                  <v-icon name="fa-calendar-alt" scale="1" />
                </div>
                <label for="dateScam" class="text-base font-medium text-gray-800 font-redHat">Fecha del
                  incidente</label>
              </div>
              <input v-model="userCommentValues.dateScam" type="date"
                class="px-4 py-2.5 w-full text-gray-700 bg-gray-50 rounded-lg border border-gray-200 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent">
            </div>
          </div>
          <!-- Monto perdido y Método de contacto -->
          <div class="flex flex-col gap-3 md:flex-row">
            <div class="space-y-1.5 w-full md:w-1/2">
              <div class="flex gap-2 items-center">
                <div class="p-[1px] text-indigo-600 bg-indigo-50 rounded-lg">
                  <v-icon name="fa-dollar-sign" scale="1" />
                </div>
                <label for="amountLost" class="text-base font-medium text-gray-800 font-redHat">Monto perdido
                  (opcional)</label>
              </div>
              <input v-model="userCommentValues.amountLost" type="text" placeholder="Ej: $5,000 MXN"
                class="px-4 py-2.5 w-full text-gray-700 bg-gray-50 rounded-lg border border-gray-200 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent">
            </div>
            <div class="hidden space-y-1.5 w-full md:w-1/2">
              <div class="flex gap-2 items-center">
                <div class="p-[1px] text-indigo-600 bg-indigo-50 rounded-lg">
                  <v-icon name="fa-phone-alt" scale="1" />
                </div>
                <label for="contactMethod" class="text-base font-medium text-gray-800 font-redHat">Método de
                  contacto</label>
              </div>
              <input type="text" placeholder="Ej: WhatsApp, Facebook..."
                class="px-4 py-2.5 w-full text-gray-700 bg-gray-50 rounded-lg border border-gray-200 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent">
            </div>
          </div>
        </section>




        <section id="comment" class="flex flex-col gap-5 p-2 w-full rounded-3xl border border-indigo-200 scroll-mt-24">

          <!-- Asunto -->
          <div class="space-y-2">
            <div class="flex gap-3 items-center">
              <div class="p-2.5 text-indigo-600 bg-indigo-50 rounded-lg">
                <v-icon name="fa-pen-alt" scale="1.2" />
              </div>
              <label for="subject" class="text-lg font-medium text-gray-800 font-redHat">Asunto</label>
            </div>
            <input id="subject" v-model="userCommentValues.subject" type="text"
              placeholder="Ej: Estafadores en centro comercial..."
              class="px-5 py-3 w-full text-gray-700 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent">
          </div>

          <!-- Comentario -->
          <div class="space-y-2">
            <div class="flex gap-3 items-center">
              <div class="p-2.5 text-indigo-600 bg-indigo-50 rounded-lg">
                <v-icon name="pr-comments" scale="1.2" />
              </div>
              <label for="comment" class="text-lg font-medium text-gray-800 font-redHat">Detalles del incidente</label>
            </div>
            <textarea v-model="userCommentValues.comment"
              placeholder="Cuéntanos tu experiencia con detalle para ayudarte mejor..."
              class="px-5 py-3 w-full text-gray-700 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-200 ease-in-out focus:outline-none h-[50px] hover:h-[70px] hover:ring-2 hover:ring-indigo-300 hover:border-transparent focus:h-[110px] focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
              :rows="2"></textarea>

          </div>

          <!-- Botón con efecto hover y sombra -->
          <button @click.prevent="addComment" type="submit"
            class="w-full px-6 py-3 mt-2 text-white bg-gradient-to-r from-indigo-600 to-purple-700 rounded-xl hover:from-indigo-600 hover:to-purple-900 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 transition-all duration-200 transform hover:scale-[1.01] flex items-center justify-center gap-2 font-medium shadow-md">
            <i class="text-white fas fa-paper-plane" aria-hidden="true"></i>
            Enviar reporte
          </button>
        </section>
      </form>
    </div>


    <!--Comments section-->
    <div v-if="comments.length > 0" class="flex flex-col gap-4 px-2 mx-1 mt-4 sm:px-4">
      <!-- Contenedor de filtros -->
      <div class="p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <!-- Filtro de búsqueda -->
          <div class="flex flex-col gap-1.5">
            <label class="text-sm font-medium text-gray-700">Buscar</label>
            <div class="relative">
              <input v-model="filter" type="text" placeholder="Palabra clave en comentarios..."
                class="py-2.5 pr-4 pl-10 w-full text-sm rounded-lg border border-gray-200 transition-all outline-none focus:border-indigo-300 focus:ring-1 focus:ring-indigo-200" />
              <svg xmlns="http://www.w3.org/2000/svg" class="absolute top-2.5 left-3 w-5 h-5 text-gray-400" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>


          <!-- Filtro por categoría -->
          <div class="flex flex-col gap-1.5">
            <label class="text-sm font-medium text-gray-700">Ordenar por {{ filterBy }}</label>
            <select v-model="filterBy"
              class="px-4 py-2.5 w-full text-sm text-gray-700 bg-white rounded-lg border border-gray-200 transition-all appearance-none outline-none focus:border-indigo-300 focus:ring-1 focus:ring-indigo-200">
              <option value="" disabled selected>Selecciona una opción</option>
              <option value="asc">Más antiguas</option>
              <option value="desc">Más recientes</option>
            </select>
          </div>

          <div>

          </div>
        </div>
      </div>

      <!-- Lista de comentarios -->
      <div class="flex flex-col gap-3">
        <CommentCard v-for="comment in frontEndComments.filter(filterComments)" :key="comment.id"
          :comment="comment.comment" :subject="comment.subject" :creationDate="comment.creationDate"
          :userName="comment.userName" :cardId="comment.id" :answers="comment.answers"
          :serviceName="comment.serviceName" :city="comment.city" :address="comment.address"
          :scamType="comment.scamType" :dateScam="comment.dateScam" :amountLost="comment.amountLost"
          :contactMethod="comment.contactMethod" :fullComment="comment.fullComment" :userColor="comment.userColor"
          @getAnswers="getCommentsEmmit"
          class="bg-white rounded-xl border border-gray-100 shadow-sm transition-shadow hover:shadow-md" />
      </div>
    </div>

    <div v-else class="flex justify-center items-center w-full">
      <LoaderCircleYellow />
    </div>
  </section>
</template>

<script lang="ts" setup>

import { computed, onMounted, reactive, ref } from "vue";
import "notyf/notyf.min.css";
import { Notyf } from "notyf";


import { sysValues } from "@/stores/sysVals";
import { addDoc, collection, getDocs, getFirestore, query, Timestamp } from "firebase/firestore";
import CommentCard from "../comments/CommentCard.vue";
import LoaderCircleYellow from "../animations/LoaderCircleYellow.vue";
import router from "@/router";



interface Answer {
  id: string;
  userName: string;
  answerUserColor: string;
  answerName: string;
  answerComment: string;
  answerCreationDate: Timestamp | string;
}

interface Comment {
  id: string;
  userName: string;
  comment: string;
  subject: string;
  creationDate: Timestamp | string;
  answers: Answer[];
  serviceName: string;
  city: string;
  address: string;
  scamType: string;
  dateScam: Timestamp;
  amountLost: string;
  fullComment: boolean;
  userColor: string;
}
const comments = ref<Comment[]>([]);
const notyf = new Notyf({
  duration: 3000,
  position: {
    x: "right",
    y: "top",
  },
})


// user values for send comment
const userCommentValues = reactive({
  userName: sysValues().getUserName,
  comment: '',
  subject: '',
  creationDate: Timestamp.now(),
  serviceName: '',
  city: '',
  address: '',
  scamType: '',
  dateScam: Timestamp.now(),
  amountLost: '',
  contactMethod: '',
  fullComment: false,
})

//firestore
const db = getFirestore()

//User Comments collection
const commentsCollection = collection(db, 'usersComments');

const filter = ref('');

const getComments = async () => {
  const qGetDocs = query(commentsCollection);
  try {
    const snapshot = await getDocs(qGetDocs);
    if (snapshot.empty) {
      notyf.error('No se encontraron comentarios')
      return
    }
    snapshot.forEach((doc) => {
      console.log(doc.data());

      comments.value.push({
        id: doc.id,
        userName: doc.data().userName,
        comment: doc.data().comment,
        subject: doc.data().subject,
        creationDate: doc.data().creationDate,
        answers: doc.data().answers,
        serviceName: doc.data().serviceName,
        city: doc.data().city,
        address: doc.data().address,
        scamType: doc.data().scamType,
        dateScam: doc.data().dateScam,
        amountLost: doc.data().amountLost,
        fullComment: doc.data().fullComment,
        userColor: doc.data().userColor
      })
    })

  } catch (error) {
    const e = error as Error;
    notyf.error(e);
  }
}

onMounted(() => {
  getComments()
})

const getCommentsEmmit = async () => {
  comments.value = [];
  getComments()
}

// In your script section
const filterComments = (comment: Comment): boolean => {
  if (!filter.value) return true;
  const searchTerm = filter.value.toLowerCase();
  const fieldsToSearch = [
    comment.comment || '',
    comment.subject || '',
    comment.userName || '',
    comment.serviceName || '',
    comment.city || '',
    comment.scamType || '',
    comment.dateScam || '',
    comment.amountLost || '',
    comment.fullComment || ''
  ];
  return fieldsToSearch.some(field =>
    String(field).toLowerCase().includes(searchTerm)
  );
};

const verifyFields = () => {
  if (userCommentValues.comment && userCommentValues.subject) {
    return true;
  } else {
    return false
  }
}

const verifyLogged = () => {
  if (sysValues().getUserLogged) {
    return true;
  } else {
    return false
  }
}
const verifyFullComment = () => {
  if (userCommentValues.serviceName && userCommentValues.city && userCommentValues.scamType && userCommentValues.dateScam && userCommentValues.amountLost && userCommentValues.contactMethod) {
    return true;
  } else {
    return false
  }
}

const addComment = async () => {
  if (!verifyFields()) {
    notyf.error('Por favor, completa todos los campos')
    return
  }
  if (!verifyLogged()) {
    notyf.success('Por favor, inicie sesión para agregar un comentario')
    setTimeout(() => {
      router.push({ name: 'login' })
    }, 3000)
    return
  }
  try {
    await addDoc(commentsCollection, {
      userName: sysValues().getUserName,
      comment: userCommentValues.comment,
      subject: userCommentValues.subject,
      creationDate: Timestamp.now(),
      answers: [],
      serviceName: userCommentValues.serviceName,
      city: userCommentValues.city,
      address: userCommentValues.address,
      scamType: userCommentValues.scamType,
      dateScam: userCommentValues.dateScam,
      amountLost: userCommentValues.amountLost,
      contactMethod: userCommentValues.contactMethod,
      fullComment: verifyFullComment(),
      userColor: sysValues().getUserColor,
    })
    notyf.success('Comentario agregado correctamente')
    userCommentValues.userName = '';
    userCommentValues.comment = '';
    userCommentValues.subject = '';
    userCommentValues.creationDate = '';

    getCommentsEmmit()
  } catch (error) {
    const e = error as Error;
    notyf.error(e.message)
  }
}

const filterBy = ref('')


const frontEndComments = computed(() => {
  if (filterBy.value === 'asc') {
    return comments.value.sort((a, b) => b.creationDate - a.creationDate)
  } else if (filterBy.value === 'desc') {
    return comments.value.sort((a, b) => a.creationDate - b.creationDate)
  } else {
    return comments.value
  }
})


const bbvaComment = {
  id: "bbva-001",
  userName: "Daniel Herrera",
  comment: "Me hicieron un cargo no reconocido de $3,500 y cuando lo reclamé, BBVA me dijo que 'sí fue válido' sin mostrar pruebas. Nunca me devolvieron el dinero.",
  subject: "Cargos no reconocidos",
  creationDate: Timestamp.fromDate(new Date("2025-06-15T09:20:00")),
  answers: [
    {
      answerComment: "A mí me cargaron $800 de Spotify y ni siquiera tengo cuenta ahí.",
      answerCreationDate: Timestamp.fromDate(new Date("2025-06-15T11:45:00")),
      answerName: "María González",
      answerUserColor: "#998bf1"
    },
    {
      answerComment: "Me clonaron la tarjeta y el banco se lavó las manos, pésimo servicio.",
      answerCreationDate: Timestamp.fromDate(new Date("2025-06-15T14:10:00")),
      answerName: "Roberto Sánchez",
      answerUserColor: "#c7a0ca"
    },
    {
      answerComment: "Lo peor es que te hacen esperar meses para darte una respuesta negativa.",
      answerCreationDate: Timestamp.fromDate(new Date("2025-06-15T18:30:00")),
      answerName: "Fernanda Castillo",
      answerUserColor: "#4b4590"
    },
    {
      answerComment: "Yo metí queja en Condusef y hasta entonces me hicieron caso.",
      answerCreationDate: Timestamp.fromDate(new Date("2025-06-16T09:00:00")),
      answerName: "Jorge Pérez",
      answerUserColor: "#1c144c"
    },
    {
      answerComment: "También me aplicaron cargos de Amazon que nunca autoricé.",
      answerCreationDate: Timestamp.fromDate(new Date("2025-06-16T12:15:00")),
      answerName: "Patricia López",
      answerUserColor: "#f4b853"
    },
    {
      answerComment: "Yo terminé cancelando mi tarjeta, es la única forma de librarte.",
      answerCreationDate: Timestamp.fromDate(new Date("2025-06-16T15:40:00")),
      answerName: "Antonio Ramírez",
      answerUserColor: "#3c3c64"
    },
    {
      answerComment: "El call center solo te da vueltas, nunca solucionan nada.",
      answerCreationDate: Timestamp.fromDate(new Date("2025-06-17T08:25:00")),
      answerName: "Claudia Navarro",
      answerUserColor: "#998bf1"
    },
    {
      answerComment: "Me cargaron Netflix dos veces en el mismo mes y no reconocieron el error.",
      answerCreationDate: Timestamp.fromDate(new Date("2025-06-17T12:50:00")),
      answerName: "Mario Fuentes",
      answerUserColor: "#c7a0ca"
    },
    {
      answerComment: "Con BBVA siempre hay cargos fantasmas, ya no confío en ellos.",
      answerCreationDate: Timestamp.fromDate(new Date("2025-06-17T17:15:00")),
      answerName: "Diana Paredes",
      answerUserColor: "#4b4590"
    },
    {
      answerComment: "Yo llevo tres meses esperando mi reembolso de un cargo fraudulento.",
      answerCreationDate: Timestamp.fromDate(new Date("2025-06-18T10:05:00")),
      answerName: "José Medina",
      answerUserColor: "#f4b853"
    }
  ],
  serviceName: "BBVA México",
  city: "Ciudad de México",
  address: "Sucursal BBVA Reforma 222",
  scamType: "cargos_no_reconocidos",
  dateScam: Timestamp.fromDate(new Date("2025-06-14T21:30:00")),
  amountLost: "$3,500",
  fullComment: true,
  userColor: "#3c3c64"
}






const uploadMockComment = async () => {
  try {
    await addDoc(commentsCollection, bbvaComment)
    getCommentsEmmit()
  } catch (error) {
    const e = error as Error;
    notyf.error(e.message)
  }
}
</script>

<style scoped></style>
