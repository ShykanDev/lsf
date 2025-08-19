<template>
  <!-- comment card (MAIN) -->
  <section class="p-4 w-full bg-white rounded-2xl border border-gray-100 shadow-sm transition-shadow duration-200 font-poppins hover:shadow-md">
    <!-- Header del comentario -->
    <div class="flex gap-3 items-center mb-4">

      <article
        class="flex justify-center items-center w-8 h-8 rounded-full text-slate-100"
        :style="{ backgroundColor:  userColor }"
      >
        <h5 class="text-sm font-semibold">{{ userName.charAt(0).toUpperCase() }}</h5>
      </article>
      <div>
        <h3 class="text-sm font-medium text-gray-800">{{ userName }}</h3>
        <h4 class="text-xs text-gray-500">{{ convertedDate(creationDate)  }}</h4>
      </div>
    </div>

    <div v-if="props.fullComment" class="p-4 mb-4 bg-gradient-to-r from-indigo-50 to-white rounded-lg border border-indigo-100 shadow-sm">
  <div class="grid grid-cols-1 gap-4 text-sm md:grid-cols-2">
    <!-- Empresa -->
    <div class="flex gap-3 items-start p-2 bg-white rounded-lg border border-indigo-50 shadow-xs">
      <div class="flex-shrink-0">
        <v-icon name="fa-store-alt" scale="1" class="mt-0.5 text-indigo-600" />
      </div>
      <div>
        <span class="block font-medium text-gray-700">Empresa</span>
        <span class="text-gray-800">{{ serviceName }}</span>
      </div>
    </div>

    <!-- Ciudad -->
    <div class="flex gap-3 items-start p-2 bg-white rounded-lg border border-indigo-50 shadow-xs">
      <div class="flex-shrink-0">
        <v-icon name="fa-map-marker-alt" scale="1" class="mt-0.5 text-indigo-600" />
      </div>
      <div>
        <span class="block font-medium text-gray-700">Ciudad</span>
        <span class="text-gray-800">{{ city }}</span>
      </div>
    </div>

    <!-- Dirección -->
    <div class="flex gap-3 items-start p-2 bg-white rounded-lg border border-indigo-50 shadow-xs">
      <div class="flex-shrink-0">
        <v-icon name="fa-map-pin" scale="1" class="mt-0.5 text-indigo-600" />
      </div>
      <div>
        <span class="block font-medium text-gray-700">Dirección</span>
        <span class="text-gray-800">{{ address || 'No especificada' }}</span>
      </div>
    </div>

    <!-- Tipo de estafa -->
    <div class="flex gap-3 items-start p-2 bg-white rounded-lg border border-indigo-50 shadow-xs">
      <div class="flex-shrink-0">
        <v-icon name="fa-exclamation-triangle" scale="1" class="mt-0.5 text-indigo-600" />
      </div>
      <div>
        <span class="block font-medium text-gray-700">Tipo de estafa</span>
        <span class="text-gray-800">{{ scamTypeLabel }}</span>
      </div>
    </div>

    <!-- Fecha -->
    <div class="flex gap-3 items-start p-2 bg-white rounded-lg border border-indigo-50 shadow-xs">
      <div class="flex-shrink-0">
        <v-icon name="fa-calendar-alt" scale="1" class="mt-0.5 text-indigo-600" />
      </div>
      <div>
        <span class="block font-medium text-gray-700">Fecha</span>
        <span class="text-gray-800">{{ convertedDate(dateScam) }}</span>
      </div>
    </div>

    <!-- Monto perdido -->
    <div class="flex gap-3 items-start p-2 bg-white rounded-lg border border-indigo-50 shadow-xs">
      <div class="flex-shrink-0">
        <v-icon name="fa-dollar-sign" scale="1" class="mt-0.5 text-indigo-600" />
      </div>
      <div>
        <span class="block font-medium text-gray-700">Monto perdido</span>
        <span class="font-semibold text-gray-800">{{ amountLost || 'No especificado' }}</span>
      </div>
    </div>
  </div>
</div>


    <!-- Contenido del comentario -->
    <div class="space-y-3">
      <h3 class="text-lg italic font-semibold text-indigo-800 font-redHat">"{{ subject }}"</h3>
      <p class="text-sm leading-relaxed text-gray-700">{{ comment }}</p>
    </div>

    <!-- Acciones -->
    <div class="mt-4 space-y-3">
      <!-- Botón de responder y respuestas rápidas -->
      <div v-show="!answering" class="flex flex-wrap gap-2 items-center">
        <button
          @click="toggleAnswering(true)"
          class="flex gap-1 items-center px-3 py-1.5 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-lg transition-colors hover:bg-indigo-100"
        >
          <v-icon name="io-chatbubble-ellipses-outline" scale="1.1" />
          Responder
        </button>
      <!-- Respuestas rápidas -->
<div class="flex flex-wrap gap-2">
  <!-- Apoyo a la víctima -->
  <button
    @click="addDefaultAnswer(1)"
    class="flex gap-1 items-center px-3 py-1.5 text-xs bg-white rounded-lg border border-indigo-200 transition-colors hover:bg-indigo-50"
  >
    <span>¡Gracias por alertar!</span>
    <v-icon name="bi-reply-fill" scale="0.9" class="text-indigo-500" />
  </button>
  <button
    @click="addDefaultAnswer(2)"
    class="flex gap-1 items-center px-3 py-1.5 text-xs bg-white rounded-lg border border-indigo-200 transition-colors hover:bg-indigo-50"
  >
    <span>Me pasó algo similar</span>
    <v-icon name="bi-reply-fill" scale="0.9" class="text-indigo-500" />
  </button>
  <button
    @click="addDefaultAnswer(3)"
    class="flex gap-1 items-center px-3 py-1.5 text-xs bg-white rounded-lg border border-indigo-200 transition-colors hover:bg-indigo-50"
  >
    <span>¡Denunciemos juntos!</span>
    <v-icon name="bi-reply-fill" scale="0.9" class="text-indigo-500" />
  </button>

  <!-- Rechazo a la estafa -->
  <button
    @click="addDefaultAnswer(4)"
    class="flex gap-1 items-center px-3 py-1.5 text-xs bg-white rounded-lg border border-indigo-200 transition-colors hover:bg-indigo-50"
  >
    <span>¡Qué asco esta gente!</span>
    <v-icon name="bi-reply-fill" scale="0.9" class="text-indigo-500" />
  </button>
  <button
    @click="addDefaultAnswer(5)"
    class="flex gap-1 items-center px-3 py-1.5 text-xs bg-white rounded-lg border border-indigo-200 transition-colors hover:bg-indigo-50"
  >
    <span>¡Cuidado con esta empresa!</span>
    <v-icon name="bi-reply-fill" scale="0.9" class="text-indigo-500" />
  </button>

</div>

      </div>
      <!-- Área de respuesta -->
      <div v-show="answering" class="mt-4 space-y-3">
        <div class="flex justify-between items-center">
          <span class="text-sm text-gray-600">
            <v-icon name="bi-reply-all" scale="1.1" class="text-indigo-500" />
            Respondiendo a <span class="font-medium text-indigo-600">{{ userName }}</span>
          </span>
          <button
            @click="toggleAnswering(false)"
            class="flex gap-1 items-center px-3 py-1 text-sm text-red-500 bg-red-50 rounded-lg transition-colors hover:bg-red-100"
          >
            <i class="text-xs fas fa-times" aria-hidden="true"></i>
            Cancelar
          </button>
        </div>
        <textarea
          ref="$answerTextArea"
          v-model="answerValue"
          placeholder="Escriba su respuesta aquí..."
          class="p-3 w-full text-sm bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          rows="3"
        ></textarea>
        <button
          @click="addAnswer"
          :class="answerValue.trim() ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-gray-300 cursor-not-allowed'"
          class="flex gap-2 justify-center items-center px-4 py-2 text-sm text-white rounded-lg transition-colors"
        >
          <i class="text-xs fas fa-paper-plane" aria-hidden="true"></i>
          Enviar respuesta
        </button>
      </div>
    </div>

    <!-- Divisor -->
    <div class="my-5 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

    <!-- Respuestas -->
    <article class="bg-white">
      <TransitionGroup name="list" tag="div" class="answers-container">
        <div
          v-for="answer in visibleAnswers.sort((a, b) => Number(a.answerCreationDate) - Number(b.answerCreationDate))"
          :key="answer.id || answer.answerCreationDate?.toMillis() || Math.random()"
          class="list-item pl-4 mt-4 ml-3 border-l-2 border-indigo-100"
        >
          <div class="flex gap-3 items-center mb-3">
            <article
              class="flex justify-center items-center w-8 h-8 rounded-full text-slate-100"
              :style="{ backgroundColor: answer.answerUserColor }"
            >
              <h5 class="text-sm font-semibold">{{ answer.answerName.charAt(0).toUpperCase() }}</h5>
            </article>
            <div>
              <h3 class="text-sm font-medium text-gray-800">{{ answer.answerName }}</h3>
              <h4 class="text-xs text-gray-500">{{ convertedDate(answer.answerCreationDate) }}</h4>
            </div>
          </div>
          <p class="pl-9 text-sm text-gray-700">{{ answer.answerComment }}</p>
        </div>
      </TransitionGroup>
      <div v-if="!limitReached && answers.length > answersLimit" class="flex justify-start items-center p-3 my-1">
        <button @click="loadMoreMessages()" class="px-4 py-2 text-sm font-medium text-white bg-indigo-500 rounded-lg font-redHat hover:bg-indigo-700">
          Ver más respuestas
        </button>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>
import { sysValues } from '@/stores/sysVals';
import { arrayUnion, doc, getFirestore, Timestamp, updateDoc } from 'firebase/firestore';
import { nextTick, ref, computed, type PropType } from 'vue';
import "notyf/notyf.min.css";
import { Notyf } from "notyf";

const notyf = new Notyf({
  duration: 3000,
  position: {
    x: "right",
    y: "top",
  },
  ripple: true,
  dismissible: true,
});

const answering = ref(false);

interface Answer {
  id: string;
  answerName: string;
  answerComment: string;
  answerCreationDate: Timestamp;
  answerUserColor: string;
  answerUserUid: string;
}

const props = defineProps({
  cardId: {
    type: String,
    default: ''
  },
  userName: {
    type: String,
    default: 'Juan Perez García'
  },
  comment: {
    type: String,
    default: 'Los estafadores suelen ser muy convincentes y utilizan tácticas sofisticadas para engañar a sus víctimas. Siempre desconfía de ofertas que parecen demasiado buenas para ser verdad.'
  },
  subject: {
    type: String,
    default: 'Estafadores en centro comercial'
  },
  creationDate: {
    type: Object as PropType<Timestamp>,
    default: () => Timestamp.now()
  },
  serviceName: {
    type: String,
    default: 'Tienda XYZ'
  },
  city: {
    type: String,
    default: 'Ciudad de México'
  },
  address: {
    type: String,
    default: ''
  },
  scamType: {
    type: String,
    default: 'venta_fraudulenta'
  },
  dateScam: {
    type: Date,
    default: new Date()
  },
  amountLost: {
    type: String,
    default: ''
  },
  answers: {
    type: Array as () => Answer[],
    default: () => []
  },
  fullComment: {
    type: Boolean,
    default: false
  },
  userColor: {
    type: String,
    default: '#f4b853'
  },
});

const scamTypeLabel = computed(() => {
  const types: Record<string, string> = {
    venta_fraudulenta: 'Venta fraudulenta',
    servicio_no_entregado: 'Servicio no entregado',
    cobro_excesivo: 'Cobro excesivo',
    phishing: 'Phishing o suplantación',
    otro: 'Otro'
  };
  return types[props.scamType] || props.scamType;
});

const emmits = defineEmits(['getAnswers']);
const db = getFirestore();
const commentDocReference = doc(db, `usersComments/${props.cardId}`);
const answerValue = ref('');

const toggleAnswering = (value: boolean) => {
  if (value) {
    answering.value = true;
    answerValue.value = '';
    nextTick(() => {
      $answerTextArea.value?.focus();
    });
  } else {
    answering.value = false;
    answerValue.value = '';
  }
};

const verifyAnswer = () => (answerValue.value.trim() !== '') ? true : false;
const verifyLogged = () => sysValues().getUserLogged;

const addAnswer = async () => {
  if (!verifyAnswer()) {
    notyf.error('Por favor ingrese un comentario');
    return;
  }
  if (!verifyLogged()) {
    notyf.error('Por favor inicie sesión para poder responder');
    return;
  }
  try {
    await updateDoc(commentDocReference, {
      answers: arrayUnion({
        answerName: sysValues().getUserName,
        answerComment: answerValue.value,
        answerCreationDate: Timestamp.now(),
        answerUserColor: sysValues().getUserColor,
        answerUserUid: sysValues().getUserUid,

      })
    });
    callGetAnswers();
  } catch (error) {
    const e = error as Error;
    alert(e);
  }
};

const convertedDate = (dateParam: Timestamp) => dateParam.toDate().toLocaleString('es-ES', { hour12: true, hour: '2-digit', minute: '2-digit', day: '2-digit', month: 'long', year: 'numeric', weekday: 'long' });

const defaultAnswerValue = ref(1);
const $answerTextArea = ref<HTMLElement | null>(null);

const addDefaultAnswer = async (defaultAnswer: number) => {
  switch (defaultAnswer) {
    case 1:
      answerValue.value = '¡Gracias por alertar!';
      break;
    case 2:
      answerValue.value = 'Me pasó algo similar';
      break;
    case 3:
      answerValue.value = '¡Denunciemos juntos!';
      break;
    case 4:
      answerValue.value = '¡Qué asco esta gente!';
      break;
    case 5:
      answerValue.value = '¡Cuidado con esta empresa!';
      break;
  }
  answering.value = true;
  await nextTick();
  $answerTextArea.value?.focus();
};

const callGetAnswers = () => emmits('getAnswers');

// Limit for answers stuff
const limitReached = ref(false);
const answersLimit = ref(3);
const visibleAnswers = computed(() => {
  return props.answers.slice(0, answersLimit.value);
});

const loadMoreMessages = () => {
  const totalAnswers = props.answers.length;
  limitReached.value = false;
  answersLimit.value += 3;
  if (answersLimit.value >= totalAnswers) {
    answersLimit.value = totalAnswers;
    limitReached.value = true;
  }
};

const randomColor = () => {
  const colors = ['#f4b853', '#998bf1', '#1c144c', '#4b4590', '#c7a0ca', '#3c3c64'];
  return colors[Math.floor(Math.random() * colors.length)];

};
</script>

<style scoped>
.list-item {
  list-style-type: none;
}
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.28s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.list-leave-active {
  position: absolute;
}
</style>
