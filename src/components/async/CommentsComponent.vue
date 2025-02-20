<template>
<section class="relative px-4 py-8 ">
    <h2 class="mb-4 text-3xl font-bold text-center text-rose-800">Comentarios</h2>
    <h3 class="mb-6 text-2xl text-center">Comparte tus experiencias y opiniones</h3>

    <!-- Sección para mostrar comentarios existentes -->
    <div class="mb-8">
        <!-- Comentario 1 -->
        <div class="p-4 mb-4 bg-white rounded-lg shadow-md">
            <div class="flex items-center mb-2">
                <i class="text-2xl text-blue-500 fas fa-user-circle" aria-hidden="true"></i>
                <h4 class="ml-2 text-lg font-semibold">Juan Pérez</h4>
            </div>
            <p class="text-base leading-relaxed">
                ¡Gracias por los consejos! Me han ayudado mucho a evitar estafas en línea.
            </p>
        </div>

        <!-- Comentario 2 -->
        <div class="p-4 mb-4 bg-white rounded-lg shadow-md">
            <div class="flex items-center mb-2">
                <i class="text-2xl text-green-500 fas fa-user-circle" aria-hidden="true"></i>
                <h4 class="ml-2 text-lg font-semibold">María López</h4>
            </div>
            <p class="text-base leading-relaxed">
                Excelente información. Ahora me siento más segura al navegar por internet.
            </p>
        </div>

        <!-- Comentario 3 -->
        <div class="p-4 mb-4 bg-white rounded-lg shadow-md">
            <div class="flex items-center mb-2">
                <i class="text-2xl text-red-500 fas fa-user-circle" aria-hidden="true"></i>
                <h4 class="ml-2 text-lg font-semibold">Carlos Gómez</h4>
            </div>
            <p class="text-base leading-relaxed">
                Muy útiles los consejos sobre la autenticación de dos factores. ¡Gracias!
            </p>
        </div>
    </div>

    <!-- Sección para escribir y enviar comentarios -->
    <div class="absolute bottom-0 left-0 right-0 w-full p-4 bg-white shadow-lg">
        <h3 class="mb-2 text-xl font-bold text-rose-800">Deja tu comentario</h3>
        <form class="flex flex-col space-y-4">
            <div class="flex items-center">
                <i class="mr-2 text-xl text-blue-500 fas fa-user" aria-hidden="true"></i>
                <input type="text" placeholder="Tu nombre" class="flex-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required>
            </div>
            <div class="flex items-center">
                <i class="mr-2 text-xl text-green-500 fas fa-comment" aria-hidden="true"></i>
                <textarea placeholder="Escribe tu comentario aquí..." class="flex-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" rows="3" required></textarea>
            </div>
            <button type="submit" class="w-full px-4 py-2 text-white rounded-lg bg-rose-800 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500">
                <i class="mr-2 text-xl text-white fas fa-paper-plane" aria-hidden="true"></i>
                Enviar
            </button>
        </form>
    </div>
</section>

</template>

<script lang="ts" setup>

</script>

<style scoped>

</style>
