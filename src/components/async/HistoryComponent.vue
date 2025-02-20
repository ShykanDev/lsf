<template>
<section class="px-4 py-12 bg-gray-50 animate-fade">
  <div class="mx-auto max-w-7xl">
    <!-- Encabezado -->
    <div class="mb-12 text-center">
      <h2 class="mb-4 text-3xl font-bold text-rose-900 font-poppins md:text-4xl">
        Historia de los Estafadores
      </h2>
      <h3 class="mb-6 text-xl text-gray-600 md:text-2xl">
        Un recorrido por el origen y evolución de las estafas a lo largo del tiempo
      </h3>
      <div class="max-w-3xl mx-auto prose-lg">
        <p class="leading-relaxed text-gray-700">
          Desde los albores de la civilización, los estafadores han sido una constante en la historia de la humanidad. Su capacidad para adaptarse a los cambios sociales, económicos y tecnológicos los ha convertido en una amenaza persistente.
        </p>
      </div>
    </div>

    <!-- Cards con información completa -->
    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      <!-- Card 1: Origen -->
      <div class="p-6 transition-shadow bg-white rounded-lg shadow-lg hover:shadow-xl">
        <div class="flex flex-col h-full">
          <div class="w-full h-48 mb-4 bg-gray-200 rounded-lg">
            <img src="../../assets/img/papiro.jpg" alt="Papiro egipcio antiguo" class="object-cover w-full h-full rounded-lg">
          </div>
          <div class="flex-grow">
            <div class="flex items-center mb-4">
              <i class="mr-3 text-3xl text-blue-600 fas fa-history"></i>
              <h3 class="text-xl font-bold text-gray-900">Origen de las Estafas</h3>
            </div>
            <p class="mb-4 leading-relaxed text-gray-700">
              En el antiguo Egipto se registraron fraudes con tierras y documentos. Los romanos enfrentaron estafas financieras donde banqueros manipulaban depósitos. Durante la Edad Media, alquimistas estafaban prometiendo crear oro, sentando bases para esquemas Ponzi modernos.
            </p>
          </div>
        </div>
      </div>

      <!-- Card 2: Evolución -->
      <div class="p-6 transition-shadow bg-white rounded-lg shadow-lg hover:shadow-xl">
        <div class="flex flex-col h-full">
          <div class="w-full h-48 mb-4 bg-gray-200 rounded-lg">
            <img src="../../assets/img/gold.jpg" alt="Evolución tecnológica de estafas" class="object-cover w-full h-full rounded-lg">
          </div>
          <div class="flex-grow">
            <div class="flex items-center mb-4">
              <i class="mr-3 text-3xl text-green-600 fas fa-sync-alt"></i>
              <h3 class="text-xl font-bold text-gray-900">Evolución de Métodos</h3>
            </div>
            <p class="mb-4 leading-relaxed text-gray-700">
              En el siglo XIX el "salting" engañaba buscadores de oro. El siglo XX trajo timos telefónicos. La era digital popularizó phishing y ransomware. Actualmente, deepfakes con IA permiten suplantaciones hiperrealistas para extorsiones.
            </p>
          </div>
        </div>
      </div>

      <!-- Card 3: Impacto Social -->
      <div class="p-6 transition-shadow bg-white rounded-lg shadow-lg hover:shadow-xl">
        <div class="flex flex-col h-full">
          <div class="w-full h-48 mb-4 bg-gray-200 rounded-lg">
            <img src="../../assets/img/dating.jpg" alt="Impacto en relaciones sociales" class="object-cover w-full h-full rounded-lg">
          </div>
          <div class="flex-grow">
            <div class="flex items-center mb-4">
              <i class="mr-3 text-3xl text-red-600 fas fa-users"></i>
              <h3 class="text-xl font-bold text-gray-900">Impacto Social</h3>
            </div>
            <p class="mb-4 leading-relaxed text-gray-700">
              Las estafas románticas en línea dejan trauma emocional y desconfianza. Grupos vulnerables como ancianos son objetivos frecuentes. El 68% de víctimas reporta ansiedad persistente tras ser estafadas según estudios psicológicos.
            </p>
          </div>
        </div>
      </div>

      <!-- Card 4: Impacto Económico -->
      <div class="p-6 transition-shadow bg-white rounded-lg shadow-lg hover:shadow-xl">
        <div class="flex flex-col h-full">
          <div class="w-full h-48 mb-4 bg-gray-200 rounded-lg">
            <img src="../../assets/img/moneyLost.jpg" alt="Gráficos-economicos afectados" class="object-cover w-full h-full rounded-lg">
          </div>
          <div class="flex-grow">
            <div class="flex items-center mb-4">
              <i class="mr-3 text-3xl text-purple-600 fas fa-money-bill-wave"></i>
              <h3 class="text-xl font-bold text-gray-900">Impacto Económico</h3>
            </div>
            <p class="mb-4 leading-relaxed text-gray-700">
              Según el FBI (2022): $10.3 mil millones en pérdidas solo en EE.UU. A nivel global: $6 billones anuales en fraudes cibernéticos. Empresas gastan hasta 15% de su presupuesto TI en seguridad para prevenir estafas.
            </p>
          </div>
        </div>
      </div>

      <!-- Card 5: Era Digital -->
      <div class="p-6 transition-shadow bg-white rounded-lg shadow-lg hover:shadow-xl">
        <div class="flex flex-col h-full">
          <div class="w-full h-48 mb-4 bg-gray-200 rounded-lg">
            <img src="../../assets/img/digitaVirus.jpg" alt="Tecnología y ciberamenazas" class="object-cover w-full h-full rounded-lg">
          </div>
          <div class="flex-grow">
            <div class="flex items-center mb-4">
              <i class="mr-3 text-3xl text-indigo-600 fas fa-laptop-code"></i>
              <h3 class="text-xl font-bold text-gray-900">Era Digital</h3>
            </div>
            <p class="mb-4 leading-relaxed text-gray-700">
              Phishing afecta al 94% de organizaciones (2023). Ransomware crece un 62% anual. Deepfakes: +900% de aumento en casos desde 2020. Los cibercriminales usan IA para perfeccionar sus ataques.
            </p>
          </div>
        </div>
      </div>

      <!-- Card 6: Conclusión -->
      <div class="p-6 transition-shadow bg-white rounded-lg shadow-lg hover:shadow-xl">
        <div class="flex flex-col h-full">
          <div class="w-full h-48 mb-4 bg-gray-200 rounded-lg">
            <img src="../../assets/img/study.jpg" alt="Prevención y concienciación" class="object-cover w-full h-full rounded-lg">
          </div>
          <div class="flex-grow">
            <div class="flex items-center mb-4">
              <i class="mr-3 text-3xl text-yellow-600 fas fa-lightbulb"></i>
              <h3 class="text-xl font-bold text-gray-900">Conclusión</h3>
            </div>
            <p class="mb-4 leading-relaxed text-gray-700">
              La lucha contra estafas requiere educación continua: 70% de reducción en víctimas con programas de concienciación. Colaboración internacional y regulaciones más estrictas son clave para el futuro digital seguro.
            </p>
          </div>
        </div>
      </div>

      <!-- Card 7: Estafas Románticas -->
  <div class="p-6 transition-shadow bg-white rounded-lg shadow-lg hover:shadow-xl">
    <div class="flex flex-col h-full">
      <div class="w-full h-48 mb-4 bg-gray-200 rounded-lg">
        <img src="../../assets/img/datingV2.jpg" alt="Estafas románticas en línea" class="object-cover w-full h-full rounded-lg">
      </div>
      <div class="flex-grow">
        <div class="flex items-center mb-4">
          <i class="mr-3 text-3xl text-pink-600 fas fa-heart"></i>
          <h3 class="text-xl font-bold text-gray-900">Estafas Románticas</h3>
        </div>
        <p class="mb-4 leading-relaxed text-gray-700">
          En 2022, las estafas románticas generaron pérdidas de $1.3 mil millones en EE.UU. Los estafadores crean perfiles falsos en apps de citas, ganan confianza y luego piden dinero para "emergencias".
        </p>
      </div>
    </div>
  </div>

  <!-- Card 8: Fraudes Corporativos -->
  <div class="p-6 transition-shadow bg-white rounded-lg shadow-lg hover:shadow-xl">
    <div class="flex flex-col h-full">
      <div class="w-full h-48 mb-4 bg-gray-200 rounded-lg">
        <img src="../../assets/img/scam.jpg" alt="Fraudes en empresas" class="object-cover w-full h-full rounded-lg">
      </div>
      <div class="flex-grow">
        <div class="flex items-center mb-4">
          <i class="mr-3 text-3xl text-teal-600 fas fa-building"></i>
          <h3 class="text-xl font-bold text-gray-900">Fraudes Corporativos</h3>
        </div>
        <p class="mb-4 leading-relaxed text-gray-700">
          El 43% de empresas medianas reportaron fraudes internos en 2023. Tácticas comunes incluyen falsificación de facturas, malversación de fondos y sobornos.
        </p>
      </div>
    </div>
  </div>

  <!-- Card 9: Estafas a Ancianos -->
  <div class="p-6 transition-shadow bg-white rounded-lg shadow-lg hover:shadow-xl">
    <div class="flex flex-col h-full">
      <div class="w-full h-48 mb-4 bg-gray-200 rounded-lg">
        <img src="../../assets/img/elder.jpg" alt="Protección a adultos mayores" class="object-cover w-full h-full rounded-lg">
      </div>
      <div class="flex-grow">
        <div class="flex items-center mb-4">
          <i class="mr-3 text-3xl text-orange-600 fas fa-user-shield"></i>
          <h3 class="text-xl font-bold text-gray-900">Estafas a Ancianos</h3>
        </div>
        <p class="mb-4 leading-relaxed text-gray-700">
          Los mayores de 60 años pierden $3 mil millones anuales en estafas telefónicas y online. Tácticas comunes: premios falsos, soporte técnico falso y fraudes de inversión.
        </p>
      </div>
    </div>
  </div>

  <!-- Card 10: Criptoestafas -->
  <div class="p-6 transition-shadow bg-white rounded-lg shadow-lg hover:shadow-xl">
    <div class="flex flex-col h-full">
      <div class="w-full h-48 mb-4 bg-gray-200 rounded-lg">
        <img src="../../assets/img/money_bitcoin.jpg" alt="Estafas con criptomonedas" class="object-cover w-full h-full rounded-lg">
      </div>
      <div class="flex-grow">
        <div class="flex items-center mb-4">
          <i class="mr-3 text-3xl text-yellow-500 fas fa-coins"></i>
          <h3 class="text-xl font-bold text-gray-900">Criptoestafas</h3>
        </div>
        <p class="mb-4 leading-relaxed text-gray-700">
          En 2023, se reportaron $4.3 mil millones en pérdidas por fraudes con criptomonedas. Incluyen esquemas Ponzi, wallets falsos y phishing dirigido a exchanges.
        </p>
      </div>
    </div>
  </div>

  <!-- Card 11: Deepfakes -->
  <div class="p-6 transition-shadow bg-white rounded-lg shadow-lg hover:shadow-xl">
    <div class="flex flex-col h-full">
      <div class="w-full h-48 mb-4 bg-gray-200 rounded-lg">
        <img src="../../assets/img/aideep.jpg" alt="Tecnología deepfake" class="object-cover w-full h-full rounded-lg">
      </div>
      <div class="flex-grow">
        <div class="flex items-center mb-4">
          <i class="mr-3 text-3xl text-blue-500 fas fa-robot"></i>
          <h3 class="text-xl font-bold text-gray-900">Deepfakes</h3>
        </div>
        <p class="mb-4 leading-relaxed text-gray-700">
          Los deepfakes aumentaron un 900% desde 2020. Se usan para suplantar CEOs en videollamadas, extorsionar con videos falsos y manipular mercados financieros.
        </p>
      </div>
    </div>
  </div>

  <!-- Card 12: Prevención -->
  <div class="p-6 transition-shadow bg-white rounded-lg shadow-lg hover:shadow-xl">
    <div class="flex flex-col h-full">
      <div class="w-full h-48 mb-4 bg-gray-200 rounded-lg">
        <img src="" alt="Medidas de prevención" class="object-cover w-full h-full rounded-lg">
      </div>
      <div class="flex-grow">
        <div class="flex items-center mb-4">
          <i class="mr-3 text-3xl text-green-600 fas fa-shield-alt"></i>
          <h3 class="text-xl font-bold text-gray-900">Prevención</h3>
        </div>
        <p class="mb-4 leading-relaxed text-gray-700">
          Educación reduce estafas en un 70%. Herramientas clave: verificación en 2 pasos, IA anti-phishing y programas de concienciación para grupos vulnerables.
        </p>
      </div>
    </div>
  </div>
  <!-- Card 13: Estafas en Redes Sociales -->
  <div class="p-6 transition-shadow bg-white rounded-lg shadow-lg hover:shadow-xl">
    <div class="flex flex-col h-full">
      <div class="w-full h-48 mb-4 bg-gray-200 rounded-lg">
        <img src="../../assets/img/fakeSocialMedia.jpg" alt="Estafas en redes sociales" class="object-cover w-full h-full rounded-lg">
      </div>
      <div class="flex-grow">
        <div class="flex items-center mb-4">
          <i class="mr-3 text-3xl text-blue-400 fas fa-hashtag"></i>
          <h3 class="text-xl font-bold text-gray-900">Estafas en Redes Sociales</h3>
        </div>
        <p class="mb-4 leading-relaxed text-gray-700">
          En 2023, el 60% de las estafas digitales comenzaron en plataformas como Instagram y Facebook. Incluyen perfiles falsos, sorteos fraudulentos y ventas de productos inexistentes.
        </p>
      </div>
    </div>
  </div>

  <!-- Card 14: Estafas de Inversión -->
  <div class="p-6 transition-shadow bg-white rounded-lg shadow-lg hover:shadow-xl">
    <div class="flex flex-col h-full">
      <div class="w-full h-48 mb-4 bg-gray-200 rounded-lg">
        <img src="../../assets/img/invest.jpg" alt="Fraudes de inversión" class="object-cover w-full h-full rounded-lg">
      </div>
      <div class="flex-grow">
        <div class="flex items-center mb-4">
          <i class="mr-3 text-3xl text-green-500 fas fa-chart-line"></i>
          <h3 class="text-xl font-bold text-gray-900">Estafas de Inversión</h3>
        </div>
        <p class="mb-4 leading-relaxed text-gray-700">
          Los fraudes de inversión generaron $4.6 mil millones en pérdidas en 2022. Incluyen esquemas Ponzi, forex falsos y ofertas de criptomonedas fraudulentas.
        </p>
      </div>
    </div>
  </div>

  <!-- Card 15: Estafas de Soporte Técnico -->
  <div class="p-6 transition-shadow bg-white rounded-lg shadow-lg hover:shadow-xl">
    <div class="flex flex-col h-full">
      <div class="w-full h-48 mb-4 bg-gray-200 rounded-lg">
        <img src="../../assets/img/fakeSupport.jpg" alt="Soporte técnico falso" class="object-cover w-full h-full rounded-lg">
      </div>
      <div class="flex-grow">
        <div class="flex items-center mb-4">
          <i class="mr-3 text-3xl text-purple-500 fas fa-headset"></i>
          <h3 class="text-xl font-bold text-gray-900">Soporte Técnico Falso</h3>
        </div>
        <p class="mb-4 leading-relaxed text-gray-700">
          Los estafadores se hacen pasar por empleados de Microsoft o Apple, alegando problemas en tu computadora. En 2023, este fraude afectó a 1 de cada 5 usuarios de tecnología.
        </p>
      </div>
    </div>
  </div>

  <!-- Card 16: Estafas de Phishing -->
  <div class="p-6 transition-shadow bg-white rounded-lg shadow-lg hover:shadow-xl">
    <div class="flex flex-col h-full">
      <div class="w-full h-48 mb-4 bg-gray-200 rounded-lg">
        <img src="../../assets/img/phishing.jpg" alt="Correos de phishing" class="object-cover w-full h-full rounded-lg">
      </div>
      <div class="flex-grow">
        <div class="flex items-center mb-4">
          <i class="mr-3 text-3xl text-red-500 fas fa-envelope"></i>
          <h3 class="text-xl font-bold text-gray-900">Phishing</h3>
        </div>
        <p class="mb-4 leading-relaxed text-gray-700">
          El 94% de los ciberataques comienzan con phishing. Los correos falsos de bancos y servicios populares son la táctica más usada para robar credenciales.
        </p>
      </div>
    </div>
  </div>

  <!-- Card 17: Estafas de Trabajo desde Casa -->
  <div class="p-6 transition-shadow bg-white rounded-lg shadow-lg hover:shadow-xl">
    <div class="flex flex-col h-full">
      <div class="w-full h-48 mb-4 bg-gray-200 rounded-lg">
        <img src="../../assets/img/fakeJobs.jpg" alt="Ofertas de trabajo falsas" class="object-cover w-full h-full rounded-lg">
      </div>
      <div class="flex-grow">
        <div class="flex items-center mb-4">
          <i class="mr-3 text-3xl text-indigo-500 fas fa-laptop-house"></i>
          <h3 class="text-xl font-bold text-gray-900">Trabajos Falsos</h3>
        </div>
        <p class="mb-4 leading-relaxed text-gray-700">
          Ofertas de empleo falsas engañan a víctimas para pagar "tarifas de inscripción" o compartir datos personales. En 2023, se reportaron $2 mil millones en pérdidas.
        </p>
      </div>
    </div>
  </div>

  <!-- Card 18: Estafas de Premios y Loterías -->
  <div class="p-6 transition-shadow bg-white rounded-lg shadow-lg hover:shadow-xl">
    <div class="flex flex-col h-full">
      <div class="w-full h-48 mb-4 bg-gray-200 rounded-lg">
        <img src="../../assets/img/prizes.jpg" alt="Premios falsos" class="object-cover w-full h-full rounded-lg">
      </div>
      <div class="flex-grow">
        <div class="flex items-center mb-4">
          <i class="mr-3 text-3xl text-yellow-400 fas fa-trophy"></i>
          <h3 class="text-xl font-bold text-gray-900">Premios Falsos</h3>
        </div>
        <p class="mb-4 leading-relaxed text-gray-700">
          "¡Ganaste un premio!" es la táctica clásica. Las víctimas deben pagar "impuestos" o "gastos de envío" para reclamar premios que nunca llegan.
        </p>
      </div>
    </div>
  </div>
    </div>
  </div>
</section>

</template>

<script lang="ts" setup>

</script>

<style scoped>

</style>
