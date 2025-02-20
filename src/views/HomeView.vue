<template>
   <MainLayout>
    <template #main>
  <!-- main page -->
<section>
    <!-- Site Header -->
    <div id="mainSectionHeader" class="text-white bg-gradient-to-br from-rose-500 to-orange-800 animate-fade">
        <div class="container px-4 py-20 mx-auto">
            <div class="flex items-start">
                <div class="w-full md:w-1/2 lg:pr-20">
                    <h1 class="mb-6 text-4xl font-bold leading-tight md:text-6xl">
                        <i class="mr-4 fas fa-shield-alt"></i>Protega sus transacciones digitales
                    </h1>
                    <p class="mb-8 text-lg opacity-90 animate-fade-right">Comunidad colaborativa contra estafas y fraudes digitales</p>
                    <p class="mb-8 text-lg opacity-90 animate-fade-right animate-delay-500">Por medio de experiencias de terceros, podrás saber por sus comentarios si una persona, empresa o servicio comete estafa o fraude</p>
                    <div class="flex gap-4 mb-12">
                        <RouterLink
                            :to="{name:'home'}"
                            class="px-8 py-3 transition-all rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 animate-fade-up animate-delay-500">
                            <i class="mr-2 fas fa-door-open"></i>Acceder
                        </RouterLink>
                        <RouterLink
                            :to="{name:'about'}"
                            class="px-8 py-3 transition-all border-2 rounded-full border-white/30 hover:bg-white/10 animate-fade-up animate-delay-1000">
                            <i class="mr-2 fas fa-search-dollar"></i>Investigaciones
                        </RouterLink>
                    </div>

                    <div class="p-6 bg-white/5 rounded-xl backdrop-blur-sm ">
                        <div class="flex items-center gap-4">
                            <div class="flex-1">
                                <h3 class="mb-2 font-bold"><i class="mr-2 fas fa-hand-holding-usd"></i>Protección Financiera</h3>
                                <p class="text-sm opacity-80">Verificación comunitaria de operaciones comerciales</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex-1 bg-zinc-700 rounded-3xl">
                  <img class="rounded-3xl" src="https://images.pexels.com/photos/6353683/pexels-photo-6353683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
                </div>
            </div>
        </div>
    </div>

    <!-- Franja Amarilla -->
    <div class="mx-4 mt-4 bg-gradient-to-l from-orange-500 to-orange-600 rounded-3xl">
        <div class="container flex items-end py-8 mx-auto space-x-7">
            <div class="w-7/10">
                <h2 class="text-2xl font-bold text-white"><span>¡Registro gratuito!</span></h2>
                <p class="text-gray-100">Al registrarse podrá comentar, indagar y responder comentarios acerca de las experiencias de estafa/fraude que han tenido los demás usuarios.</p>
            </div>
                <RouterLink :to="{ name: 'register' }" class="px-6 py-2 text-white bg-orange-500 border-2 border-white rounded-lg shadow">
                    <i class="fas fa-user-plus"></i> Registrarse
                </RouterLink>
        </div>
    </div>

    <!-- Bolas Azules -->
    <div class="flex justify-center">
        <div class="my-8 border-b border-gray-300 "></div>
        <div class="container ">
            <div class="flex p-2 py-6 mt-4 bg-sky-800 rounded-xl">
                <div class="flex flex-col items-center w-1/2 gap-2">
                    <h2 class="text-2xl font-bold text-white">¿Qué es losestafadores.com?</h2>
                    <p class="text-white">Es un sitio web, de registro gratuito, el cual almacena las experiencias de terceros con temas de fraude y estafas. Los comentarios son para ayudar a evitar estas malas prácticas y ayudar a tomar las mejores decisiones.</p>
                        <RouterLink :to="{ name: 'nosotros' }" class="px-6 py-2 text-black bg-white rounded-lg shadow my">
                            <i class="fas fa-users"></i> Nosotros
                        </RouterLink>
                </div>
                <div class="w-1/2">
                    <div class="p-4 rounded-lg shadow bg-slate-400">
                        <div class="flex">
                            <div class="w-1/2 p-2 m-2 text-center rounded-lg bg-sky-800">
                                <p class="font-bold text-white"><i class="mr-2 fas fa-hand-holding-usd"></i> SIN COSTO</p>
                            </div>
                            <div class="w-1/2 p-2 m-2 text-center rounded-lg bg-sky-800">
                                <p class="font-bold text-white"><i class="mr-2 fas fa-bolt"></i>FÁCIL Y RÁPIDO</p>
                            </div>
                        </div>
                        <div class="flex">
                            <div class="w-1/2 p-2 m-2 text-center rounded-lg bg-sky-800">
                                <p class="font-bold text-white"><i class="mr-2 fas fa-search"></i>BÚSQUEDA AVANZADA</p>
                            </div>
                            <div class="w-1/2 p-2 m-2 text-center rounded-lg bg-sky-800">
                                <p class="font-bold text-white"><i class="mr-2 fas fa-lock"></i>SEGURO</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Fondo People Walk -->
    <div class="bg-[#f0f0f0]">
        <div class="my-8 border-b border-gray-300"></div>
        <div class="py-8 text-center">
            <h2 class="text-2xl font-bold text-gray-800">Recopilación de comentarios y experiencias de personas que han sido víctimas del fraude y estafas</h2>
            <p class="px-6 text-gray-600">Todos los comentarios que podrás visualizar, responder y comentar, han sido de experiencias que pueden ayudarle a prevenir la misma situación y tomar una decisión diferente</p>
        </div>
    </div>

    <!-- Acciones -->
    <div class="container">
        <div class="my-8 border-b border-gray-300"></div>
        <div class="text-center">
            <strong><RouterLink :to="{ name: 'home' }"> <RouterLink :to="{ name: 'home' }" class="font-semibold underline text-sky-500">Inicie Sesión</RouterLink> </RouterLink> para desbloquear las siguientes acciones</strong>
            <div class="flex mt-8">
                <div class="flex flex-col items-center w-1/4 space-y-5">
                    <h2 class="text-xl font-bold text-gray-800">¿Desea escribir un comentario?</h2>
                    <i class="text-5xl text-sky-600 fas fa-comment-dots"></i>
                    <br>
                    <RouterLink :to="{ name: 'blog' }" class="px-6 py-2 mt-4 text-white rounded-lg shadow bg-sky-800">
                        <i class="fas fa-edit"></i> Comentar
                    </RouterLink>
                </div>
                <div class="flex flex-col items-center w-1/4 space-y-5">
                    <h2 class="text-xl font-bold text-gray-800">Revise los comentarios</h2>
                    <i class="text-5xl text-sky-900 fas fa-comments"></i>
                    <br>
                    <RouterLink :to="{ name: 'blog' }" class="px-6 py-2 mt-4 text-white rounded-lg shadow bg-sky-800">
                        <i class="fas fa-book-open"></i> Blog
                    </RouterLink>
                </div>
                <div class="flex flex-col items-center w-1/4 space-y-5">
                    <h2 class="text-xl font-bold text-gray-800">Filtro de búsqueda avanzado</h2>
                    <i class="text-5xl text-orange-600 fas fa-search"></i>
                    <br>
                    <RouterLink :to="{ name: 'blog' }" class="hidden px-6 py-2 mt-4 text-white rounded-lg shadow bg-sky-800">
                        <i class="fas fa-search"></i> Buscar
                    </RouterLink>
                </div>
                <div class="flex flex-col items-center w-1/4 space-y-5">
                    <h2 class="text-xl font-bold text-gray-800">¿Tiene dudas o requiere de ayuda?</h2>
                    <i class="text-5xl text-gray-600 fas fa-question-circle"></i>
                    <br>
                    <RouterLink :to="{ name: 'ayuda' }" class="px-6 py-2 mt-4 text-white rounded-lg shadow bg-sky-800">
                        <i class="fas fa-life-ring"></i> Ayuda
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>

    <!-- Fondo Woman Circles -->
    <div class="bg-[#f0f0f0]">
        <div class="my-8 border-b border-gray-300"></div>
        <div class="container py-8 text-center">
            <div class="flex">
                <div class="w-1/2">
                    <h2 class="text-2xl font-bold text-orange-600">Conozca los estafadores</h2>
                    <p class="text-gray-600">Con ayuda de los comentarios, indague quienes son los estafadores y evite problemas futuros en sus negocios</p>
                    <div class="mt-4 text-center">
                        <RouterLink :to="{ name: 'home' }" class="px-6 py-2 text-white bg-orange-600 rounded-lg shadow">
                            <i class="fas fa-book-open"></i> Blog
                        </RouterLink>
                    </div>
                </div>
                <div class="w-1/2">
                    <h2 class="text-2xl font-bold text-blue-500">Comente sus experiencias</h2>
                    <p class="text-gray-600">Comparta y atribuya con sus comentarios, contándonos su experiencia sobre alguna estafa o fraude que haya vivido</p>
                    <div class="mt-4 text-center">
                        <RouterLink :to="{ name: 'home' }" class="px-6 py-2 text-white bg-blue-500 rounded-lg shadow">
                            <i class="fas fa-edit"></i> Comentar
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Próximamente -->
    <div class="my-8 border-b border-gray-300"></div>
    <div class="container flex items-center justify-center w-full mx-auto ">
        <div class="w-2/5">
            <h2 class="text-2xl font-bold text-sky-700">Los comentarios que aportas y lees son valiosos</h2>
            <p class="text-gray-600">Al tener una recopilación se puede detectar a los estafadores y podrá actuar legalmente contra ellos</p>
            <div class="mt-4">
                <p class="font-bold text-gray-800">¡Próximamente...! <i class="fas fa-balance-scale"></i></p>
            </div>
            <p class="text-gray-600">Ofreceremos asesorías jurídicas gratuitas en el sitio para apoyo de las víctimas en los casos de Estafas y Fraudes</p>
        </div>
            <img src="../assets/img/contrato.png" alt="Contrato" class="w-2/4 h-auto rounded-2xl">
    </div>

    <!-- Diferentes tipos de Estafas y Fraudes -->
    <div class="my-8 border-b border-gray-300"></div>
    <div class="container p-5 mx-auto text-center bg-orange-500 rounded-2xl">
        <h2 class="text-2xl font-bold text-gray-100">Diferentes tipos de Estafas y Fraudes</h2>
        <p class="font-semibold text-white">Existen muchas formas en las cuales operan las personas que quieren realizar un abuso de confianza, haciendo estafas y/o fraudes. Te mostraremos algunas de ellas, las cuales son las más comunes y aparecen en los comentarios</p>
        <div class="flex mt-8">
            <div class="hidden w-2/5">
                <!-- <h2 class="text-2xl font-bold text-gray-800">Conozca los diferentes tipos de estafas</h2> -->
                <!-- <img src="../assets/img/woman-cash2.png" alt="Mujer con dinero" class="w-full h-auto"> -->
            </div>
            <div class="">
          <!-- Sección de Tipos de Estafas -->
<section class="py-20 bg-gray-50 rounded-xl">
    <div class="container px-4 mx-auto">
        <!-- Título y Descripción -->
        <div class="max-w-2xl mx-auto mb-16 text-center">
            <h2 class="mb-6 text-4xl font-bold">
                <i class="mr-3 text-yellow-500 fas fa-exclamation-triangle"></i>
                Diferentes tipos de Estafas y Fraudes
            </h2>
            <p class="text-gray-600">
                Existen muchas formas en las cuales operan las personas que quieren realizar un abuso de confianza, haciendo estafas y/o fraudes. Te mostraremos algunas de ellas, las cuales son las más comunes y aparecen en los comentarios.
            </p>
        </div>

        <!-- Grid de Tipos de Estafas -->
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <!-- Tarjeta Hipotecario -->
            <div class="overflow-hidden transition-shadow bg-white border border-orange-400 shadow-lg rounded-2xl hover:shadow-xl">
                <div class="flex items-center justify-center h-48 bg-gray-200">
                    <img src="../assets/img/mortgage.jpg" alt="Hipotecario" class="object-cover w-full h-full">
                </div>
                <div class="p-6">
                    <h3 class="mb-4 text-xl font-bold">
                        <i class="mr-2 text-blue-500 fas fa-file-contract"></i>
                        Hipotecario
                    </h3>
                    <p class="mb-4 text-gray-600">
                        Venta o renta de un inmueble, el cual puede tener los siguientes problemas de fraude: Documentación ilegítima, deudas y/o procesos legales, ventas/rentas con robo de identidad, inmueble dañado o no cumple con las características mencionadas.
                    </p>
                </div>
            </div>

            <!-- Tarjeta Compras por Internet -->
            <div class="overflow-hidden transition-shadow bg-white border border-orange-400 shadow-lg rounded-2xl hover:shadow-xl">
                <div class="flex items-center justify-center h-48 bg-gray-200">
                  <img src="../assets/img/internet_shopping.jpg" alt="Compras por Internet" class="object-cover w-full h-full">
                </div>
                <div class="p-6">
                    <h3 class="mb-4 text-xl font-bold">
                        <i class="mr-2 text-purple-500 fas fa-globe"></i>
                        Compras por Internet
                    </h3>
                    <p class="mb-4 text-gray-600">
                        Las compras en línea se han convertido en uno de los puntos más fuertes hablando de fraudes y estafas. En la compra en línea se pueden ver los siguientes problemas: Producto erróneo, defectuoso, usado, sin garantía, robo de dinero, entre muchos otros.
                    </p>
                </div>
            </div>

            <!-- Tarjeta Servicios -->
            <div class="overflow-hidden transition-shadow bg-white border border-orange-400 shadow-lg rounded-2xl hover:shadow-xl">
                <div class="flex items-center justify-center h-48 bg-gray-200">
                  <img src="../assets/img/fake_ads.jpg" alt="Servicios" class="object-cover w-full h-full">
                </div>
                <div class="p-6">
                    <h3 class="mb-4 text-xl font-bold">
                        <i class="mr-2 text-green-500 fas fa-tools"></i>
                        Servicios
                    </h3>
                    <p class="mb-4 text-gray-600">
                        Los servicios dan publicidad engañosa, manejan un precio con ciertos beneficios, pero con ciertas condiciones que obstruyen para tener las garantías prometidas. Los problemas e incidentes más comunes son: Precio por tiempo limitado, no cumplen con los beneficios, aumento de precio constantemente, contratos engañosos y más.
                    </p>
                </div>
            </div>

            <!-- Tarjeta Productos -->
            <div class="overflow-hidden transition-shadow bg-white border border-orange-400 shadow-lg rounded-2xl hover:shadow-xl">
                <div class="flex items-center justify-center h-48 bg-gray-200">
                  <img src="../assets/img/products.jpg" alt="Productos" class="object-cover w-full h-full">
                </div>
                <div class="p-6">
                    <h3 class="mb-4 text-xl font-bold">
                        <i class="mr-2 text-red-500 fas fa-tags"></i>
                        Productos
                    </h3>
                    <p class="mb-4 text-gray-600">
                        Existen diversidad de productos, ya sea en comida, tecnología, belleza, salud, entre otros. Cada uno maneja ciertos beneficios, pero algunos no cumplen con lo que mencionan. Los productos regularmente realizan este tipo de estafas: Utilidad y resultados no correctos como se promete, compras falsas donde nunca llega el pedido, ingredientes y/o materiales no auténticos como se promociona, entre otros.
                    </p>
                </div>
            </div>

            <!-- Tarjeta Bancarios o Prestamistas -->
            <div class="overflow-hidden transition-shadow bg-white border border-orange-400 shadow-lg rounded-2xl hover:shadow-xl">
                <div class="flex items-center justify-center h-48 bg-gray-200">
                  <img src="../assets/img/banking.jpg" alt="Bancarios o Prestamistas" class="object-cover w-full h-full">
                </div>
                <div class="p-6">
                    <h3 class="mb-4 text-xl font-bold">
                        <i class="mr-2 text-yellow-500 fas fa-landmark"></i>
                        Bancarios o Prestamistas
                    </h3>
                    <p class="mb-4 text-gray-600">
                        En esta parte existen estafas de las dos partes, como el que solicita el préstamo y el prestamista. Algunos contratos son engañosos y confusos para realizar otro tipo de cargo, aumento de intereses entre otros. Y su contraparte, hace promesas falsas para posteriormente no pagar.
                    </p>
                </div>
            </div>

            <!-- Tarjeta Trabajos -->
            <div class="overflow-hidden transition-shadow bg-white border border-orange-400 shadow-lg rounded-2xl hover:shadow-xl">
                <div class="flex items-center justify-center h-48 bg-gray-200">
                  <img src="../assets/img/working.jpg" alt="Trabajos" class="object-cover w-full h-full">
                </div>
                <div class="p-6">
                    <h3 class="mb-4 text-xl font-bold">
                        <i class="mr-2 text-indigo-500 fas fa-user-tie"></i>
                        Trabajos
                    </h3>
                    <p class="mb-4 text-gray-600">
                        Existen trabajos o empleos que no son lo que parecen, estafan a las personas con falsas ofertas de empleo como lo son: Engaños ofreciendo sueldos y áreas que no se cumplen, solicitan dinero para comprar producto o requerimiento para continuar con los filtros, pruebas de compromiso o fidelidad donde se incluye dinero, tiempo y diferentes recursos.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
            </div>
        </div>
    </div>

    <!-- Fondo Saludo -->
    <div class="my-8 border-b border-gray-300"></div>
    <div class="container text-center">
        <h2 class="text-2xl font-bold text-orange-600"><span>Comencemos con el registro para poder utilizar todas las funciones</span></h2>
        <p class="text-gray-600">Al realizar el registro e iniciar sesión podrás <strong>Comentar, Visualizar, Responder y descubrir los fraudes y estafas por experiencia de otros</strong></p>
        <div class="mt-4 text-center">
            <RouterLink :to="{ name: 'home' }" class="px-6 py-2 text-white bg-orange-500 rounded-lg shadow">
                <i class="fas fa-user-plus"></i> Nuevo registro
            </RouterLink>
        </div>
    </div>
    <div class="my-8 border-b border-gray-300"></div>
    <div class="bg-[#f0f0f0]"></div>
</section>
    </template>
  <!--
      <div class="text-white bg-gradient-to-br from-blue-600 to-purple-700">
        <div class="container px-4 py-20 mx-auto">
            <div class="flex items-center ">
                <div class="w-full md:w-1/2 lg:pr-20">
                    <h1 class="mb-6 text-4xl font-bold leading-tight md:text-6xl">
                        <i class="mr-4 fas fa-shield-alt"></i>Protega sus transacciones digitales
                    </h1>
                    <p class="mb-8 text-lg opacity-90">Comunidad colaborativa contra estafas y fraudes digitales</p>
                    <p class="mb-8 text-lg opacity-90">Por medio de experiencias de terceros, podrás saber por sus comentarios si una persona, empresa o servicio comete estafa o fraude</p>
                    <div class="flex gap-4 mb-12">
                        <RouterLink
                            :to="{name:'home'}"
                            class="px-8 py-3 transition-all rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20">
                            <i class="mr-2 fas fa-door-open"></i>Acceder
                        </RouterLink>
                        <RouterLink
                            :to="{name:'about'}"
                            class="px-8 py-3 transition-all border-2 rounded-full border-white/30 hover:bg-white/10">
                            <i class="mr-2 fas fa-search-dollar"></i>Investigaciones
                        </RouterLink>
                    </div>

                    <div class="p-6 bg-white/5 rounded-xl backdrop-blur-sm bg-sky-400">
                        <div class="flex items-center gap-4">
                            <div class="flex-1">
                                <h3 class="mb-2 font-bold"><i class="mr-2 fas fa-hand-holding-usd"></i>Protección Financiera</h3>
                                <p class="text-sm opacity-80">Verificación comunitaria de operaciones comerciales</p>
                            </div>
                            <div class="w-20">
                                <img src="../assets/img/security-badge.png" alt="Escudo de seguridad" class="w-full">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex-1 bg-zinc-700 rounded-3xl">
                  <img class="rounded-3xl" src="https://images.pexels.com/photos/6353683/pexels-photo-6353683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
                </div>
            </div>
        </div>
    </div>

  -->
   </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';
import { uiValues } from '@/stores/uiValues';
import { onMounted } from 'vue';


onMounted(()=>{
uiValues().setMainSectionHeight(document.getElementById('mainSectionHeader').offsetHeight)
})

</script>

<style scoped>

</style>
