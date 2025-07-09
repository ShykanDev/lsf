<template>
  <section class="relative px-4 py-8 min-h-dvh">
    <h2 class="mb-4 text-3xl font-bold text-center text-rose-800">Comentarios</h2>
    <h3 class="mb-6 text-2xl text-center">Comparte tus experiencias y opiniones</h3>
    <div class="p-6 mb-6 bg-gray-100 rounded-2xl shadow-md">
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
      <div class="flex justify-center mt-4 text-blue-600">
        <i class="mr-4 text-3xl fas fa-hand-holding-heart"></i>
        <i class="mr-4 text-3xl fas fa-shield-alt"></i>
        <i class="text-3xl fas fa-heart"></i>
      </div>
    </div>


    <!-- Sección para mostrar comentarios existentes -->
    <div v-if="comments" class="box-border flex overflow-y-scroll flex-wrap gap-3 justify-evenly p-2 pb-36 my-12 mb-44 w-full max-h-96 min-h-80 bg-slate-200">
      <CommentComponent v-for="(comment, index) in comments.sort((a, b) => b.date.toDate() - a.date.toDate())"
        :key="index" :msg="comment.comment" :date="comment.date" :name="comment.name" :subject="comment.subject">
      </CommentComponent>
    </div>

    <!-- Sección para escribir y enviar comentarios -->
    <div class="absolute right-0 bottom-0 left-0 p-4 w-full bg-white shadow-lg">
      <h3 class="mb-2 text-xl font-bold text-rose-800">Deja tu comentario</h3>
      <form class="flex flex-col space-y-4">
        <div class="flex items-center">
          <i class="mr-2 text-xl text-blue-500 fas fa-user" aria-hidden="true"></i>
          <input v-model="comment" type="text" placeholder="Estafadores en centro comercial"
            class="flex-1 px-4 py-2 w-full rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
            required>
        </div>
        <div class="flex items-center">
          <i class="mr-2 text-xl text-green-500 fas fa-comment" aria-hidden="true"></i>
          <textarea v-model="subject" placeholder="Escribe tu comentario aquí..."
            class="flex-1 px-4 py-2 w-full rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-500"
            rows="3" required></textarea>
        </div>
        <button @click.prevent="addComment" type="submit"
          class="px-4 py-2 w-full text-white bg-rose-800 rounded-lg hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500">
          <i class="mr-2 text-xl text-white fas fa-paper-plane" aria-hidden="true"></i>
          Enviar
        </button>
      </form>
    </div>
  </section>
</template>

<script lang="ts" setup>

import { onMounted, ref } from "vue";
import CommentComponent from "../CommentComponent.vue";
import "notyf/notyf.min.css";
import { Notyf } from "notyf";
import { collection, doc, getDocs, getFirestore, query, setDoc, Timestamp } from "firebase/firestore";
import { sysValues } from "@/stores/sysVals";

const comments = ref([]);
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

//Firebase stuff
const db = getFirestore();
const commentsCollection = collection(db, 'comments');

const getComments = async () => {
try {
  const qGetComments = query(commentsCollection);
  const data = await getDocs(qGetComments);

  //If data is empty
  if (data.empty) {
    notyf.error('No se encontraron comentarios')
    return;
  }

  data.docs.forEach(doc => {
    console.log(doc.data());
    comments.value.push({
      id: doc.id,
      ...doc.data()
    })
  })


} catch (error) {
  notyf.error('Error al obtener los comentarios' + error)
    console.log(error);

}
}

const addComment = async () => {
try {
  const docRef = doc(collection(db, "comments"));
  await setDoc(docRef, {
    name: sysValues().getUserName,
    comment: comment.value,
    subject: subject.value,
    date: Timestamp.now(),
  });
  getComments();
  comment.value = '';
  subject.value = '';
  notyf.success('Comentario agregado correctamente')


} catch (error) {
  notyf.error('Error al agregar el comentario' + error)
    console.log(error);

}
}

onMounted(() => {
  getComments();
})

</script>

<style scoped></style>
