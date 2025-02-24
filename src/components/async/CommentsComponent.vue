<template>
  <section class="relative px-4 py-8 min-h-dvh">
    <h2 class="mb-4 text-3xl font-bold text-center text-rose-800">Comentarios</h2>
    <h3 class="mb-6 text-2xl text-center">Comparte tus experiencias y opiniones</h3>
    <div class="p-6 mb-6 bg-gray-100 shadow-md rounded-2xl">
      <div class="flex items-center justify-center mb-4 text-blue-600">
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
      <div class="flex justify-center mt-4 text-blue-600">
        <i class="mr-4 text-3xl fas fa-hand-holding-heart"></i>
        <i class="mr-4 text-3xl fas fa-shield-alt"></i>
        <i class="text-3xl fas fa-heart"></i>
      </div>
    </div>


    <!-- Sección para mostrar comentarios existentes -->
    <div v-if="comments.length > 0" class="flex flex-wrap my-12 overflow-y-scroll pb-36 max-h-96 mb-44">
      <CommentComponent v-for="(comment, index) in comments.sort((a, b) => b.date.toDate() - a.date.toDate())"
        :key="index" :msg="comment.msg" :date="comment.date" :name="comment.name" :subject="comment.subject">
      </CommentComponent>
    </div>

    <!-- Sección para escribir y enviar comentarios -->
    <div class="absolute bottom-0 left-0 right-0 w-full p-4 bg-white shadow-lg">
      <h3 class="mb-2 text-xl font-bold text-rose-800">Deja tu comentario</h3>
      <form class="flex flex-col space-y-4">
        <div class="flex items-center">
          <i class="mr-2 text-xl text-blue-500 fas fa-user" aria-hidden="true"></i>
          <input v-model="comment" type="text" placeholder="Estafadores en centro comercial"
            class="flex-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required>
        </div>
        <div class="flex items-center">
          <i class="mr-2 text-xl text-green-500 fas fa-comment" aria-hidden="true"></i>
          <textarea v-model="subject" placeholder="Escribe tu comentario aquí..."
            class="flex-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            rows="3" required></textarea>
        </div>
        <button @click.prevent="addComment" type="submit"
          class="w-full px-4 py-2 text-white rounded-lg bg-rose-800 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500">
          <i class="mr-2 text-xl text-white fas fa-paper-plane" aria-hidden="true"></i>
          Enviar
        </button>
      </form>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { sysValues } from "@/stores/sysVals";
import { addDoc, collection, getDocs, getFirestore, Timestamp } from "firebase/firestore";
import { onMounted, ref } from "vue";
import CommentComponent from "../CommentComponent.vue";
import "notyf/notyf.min.css";
import { Notyf } from "notyf";


const notyf = new Notyf({
  duration: 3000,
  position: {
    x: "right",
    y: "top",
  },
})
// user values for send comment
const comment = ref('');
const subject = ref('');

// firebase values
const db = getFirestore();
const commentsCollection = collection(db, "comments");

// verify that fields of the message to send are valid
const messageValid = (): boolean => (!comment.value || !subject.value || !sysValues().getUserName) ? false : true;

// clean input values for valid messages once the message is sent
const clearInputs = (values: Array<{ value: string }>): void => values.forEach(e => e.value = '');

const addComment = async () => {

  if (!sysValues().getUserLogged) {
    notyf.error('Necesita iniciar sesión para comentar');
    return;
  }
  if (!messageValid()) {
    console.log('Please verify your data, there is something wrong');
    notyf.error('Por favor, verifique sus datos, hay algo mal');
    return;
  }
  try {
    await addDoc(commentsCollection, {
      subject: subject.value,
      msg: comment.value,
      name: sysValues().getUserName,
      date: Timestamp.now(),
    });
    notyf.success('Comentario enviado con exito');
    console.log('Comment sent successfully!');
    clearInputs([subject, comment]);
    await getComments(); // Refresh comments after adding a new one
  } catch (e) {
    console.log('Error while sending the message:', e);
    notyf.error('Error al enviar el comentario' + e);
  }
};

// getting comments
const comments = ref([]);
const getComments = async () => {
  comments.value = []; // Clear existing comments
  try {
    const querySnapshot = await getDocs(commentsCollection);
    querySnapshot.forEach((doc) => {
      comments.value.push({ ...doc.data() });
    });
    console.log(comments.value);
  } catch (e) {
    console.log('Error while getting comments:', e);
  }
};

onMounted(() => {
  getComments();
});
</script>

<style scoped></style>
