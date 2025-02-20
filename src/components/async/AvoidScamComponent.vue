<template>
    <section class="container px-4 py-8 mx-auto animate-fade">
    <h2 class="mb-4 text-3xl font-bold text-center text-rose-800">Cómo Evitar Estafas</h2>
    <h3 class="mb-6 text-2xl text-center">Consejos prácticos para protegerte de las estafas más comunes</h3>

    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <!-- Verificar la Autenticidad -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-blue-500 fas fa-shield-alt" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">Verificar la Autenticidad</h3>
            <p class="text-base leading-relaxed">
                Antes de proporcionar información personal o realizar una transacción, verifica la autenticidad de la empresa o persona. Busca opiniones y reseñas en línea.
            </p>
        </div>

        <!-- Usar Contraseñas Seguras -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-green-500 fas fa-lock" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">Usar Contraseñas Seguras</h3>
            <p class="text-base leading-relaxed">
                Crea contraseñas fuertes y únicas para cada cuenta. Utiliza una combinación de letras, números y símbolos.
            </p>
        </div>

        <!-- Activar la Autenticación de Dos Factores -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-red-500 fas fa-key" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">Activar la Autenticación de Dos Factores</h3>
            <p class="text-base leading-relaxed">
                Activa la autenticación de dos factores en todas tus cuentas para añadir una capa extra de seguridad.
            </p>
        </div>

        <!-- No Hacer Clic en Enlaces Sospechosos -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-yellow-500 fas fa-mouse-pointer" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">No Hacer Clic en Enlaces Sospechosos</h3>
            <p class="text-base leading-relaxed">
                Evita hacer clic en enlaces de correos electrónicos o mensajes de texto de remitentes desconocidos o sospechosos.
            </p>
        </div>

        <!-- Mantener el Software Actualizado -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-pink-500 fas fa-sync-alt" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">Mantener el Software Actualizado</h3>
            <p class="text-base leading-relaxed">
                Asegúrate de que tu sistema operativo, navegador y aplicaciones estén siempre actualizados con las últimas versiones.
            </p>
        </div>

        <!-- Utilizar Software Antivirus -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-blue-500 fas fa-virus" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">Utilizar Software Antivirus</h3>
            <p class="text-base leading-relaxed">
                Instala y mantén actualizado un software antivirus confiable para proteger tu dispositivo de malware.
            </p>
        </div>

        <!-- Desconfiar de Ofertas Demasiado Buenas -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-green-500 fas fa-tags" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">Desconfiar de Ofertas Demasiado Buenas</h3>
            <p class="text-base leading-relaxed">
                Si una oferta parece demasiado buena para ser verdad, probablemente lo sea. Investiga antes de comprometerte.
            </p>
        </div>

        <!-- No Proporcionar Información Personal -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-red-500 fas fa-user-secret" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">No Proporcionar Información Personal</h3>
            <p class="text-base leading-relaxed">
                No compartas información personal como tu número de seguro social, contraseñas o datos bancarios a menos que sea absolutamente necesario y seguro.
            </p>
        </div>

        <!-- Verificar la URL del Sitio Web -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-yellow-500 fas fa-globe" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">Verificar la URL del Sitio Web</h3>
            <p class="text-base leading-relaxed">
                Antes de realizar una compra o ingresar información personal, verifica que la URL del sitio web sea segura (busca "https" y un candado en la barra de direcciones).
            </p>
        </div>

        <!-- Leer los Términos y Condiciones -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-pink-500 fas fa-file-contract" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">Leer los Términos y Condiciones</h3>
            <p class="text-base leading-relaxed">
                Antes de aceptar cualquier acuerdo o realizar una compra, lee detenidamente los términos y condiciones.
            </p>
        </div>

        <!-- Utilizar Tarjetas de Crédito en Línea -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-blue-500 fas fa-credit-card" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">Utilizar Tarjetas de Crédito en Línea</h3>
            <p class="text-base leading-relaxed">
                Las tarjetas de crédito ofrecen mayor protección contra fraudes en comparación con las tarjetas de débito.
            </p>
        </div>

        <!-- Revisar los Extractos Bancarios -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-green-500 fas fa-file-invoice-dollar" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">Revisar los Extractos Bancarios</h3>
            <p class="text-base leading-relaxed">
                Revisa regularmente tus extractos bancarios para detectar cualquier actividad sospechosa o cargos no autorizados.
            </p>
        </div>

        <!-- No Realizar Pagos por Adelantado -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-red-500 fas fa-hand-holding-usd" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">No Realizar Pagos por Adelantado</h3>
            <p class="text-base leading-relaxed">
                Desconfía de cualquier solicitud de pago por adelantado, especialmente si es para recibir un premio o servicio.
            </p>
        </div>

        <!-- Verificar la Identidad del Vendedor -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-yellow-500 fas fa-id-card" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">Verificar la Identidad del Vendedor</h3>
            <p class="text-base leading-relaxed">
                Antes de realizar una compra, verifica la identidad del vendedor y asegúrate de que sea una fuente confiable.
            </p>
        </div>

        <!-- Utilizar Redes Wi-Fi Seguras -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-pink-500 fas fa-wifi" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">Utilizar Redes Wi-Fi Seguras</h3>
            <p class="text-base leading-relaxed">
                Evita realizar transacciones financieras o ingresar información personal en redes Wi-Fi públicas o no seguras.
            </p>
        </div>

        <!-- Configurar Alertas de Seguridad -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-blue-500 fas fa-bell" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">Configurar Alertas de Seguridad</h3>
            <p class="text-base leading-relaxed">
                Configura alertas de seguridad en tus cuentas bancarias y de correo electrónico para recibir notificaciones de actividades sospechosas.
            </p>
        </div>

        <!-- No Descargar Archivos Adjuntos Sospechosos -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-green-500 fas fa-file-download" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">No Descargar Archivos Adjuntos Sospechosos</h3>
            <p class="text-base leading-relaxed">
                Evita descargar archivos adjuntos de correos electrónicos o mensajes de remitentes desconocidos o sospechosos.
            </p>
        </div>

        <!-- Utilizar Navegadores Seguros -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-red-500 fas fa-browser" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">Utilizar Navegadores Seguros</h3>
            <p class="text-base leading-relaxed">
                Utiliza navegadores web seguros y mantenlos actualizados con las últimas versiones.
            </p>
        </div>

        <!-- No Compartir Contraseñas -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-yellow-500 fas fa-lock" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">No Compartir Contraseñas</h3>
            <p class="text-base leading-relaxed">
                No compartas tus contraseñas con nadie y evita escribirlas en lugares visibles.
            </p>
        </div>

        <!-- Verificar la Legitimidad de las Organizaciones Benéficas -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-pink-500 fas fa-hand-holding-heart" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">Verificar la Legitimidad de las Organizaciones Benéficas</h3>
            <p class="text-base leading-relaxed">
                Antes de hacer una donación, verifica la legitimidad de la organización benéfica y asegúrate de que tu dinero llegue a los beneficiarios correctos.
            </p>
        </div>

        <!-- No Responder a Llamadas Sospechosas -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-blue-500 fas fa-phone-alt" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">No Responder a Llamadas Sospechosas</h3>
            <p class="text-base leading-relaxed">
                Si recibes una llamada sospechosa, cuelga y verifica la identidad del llamante antes de proporcionar cualquier información.
            </p>
        </div>

        <!-- Utilizar un Gestor de Contraseñas -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-green-500 fas fa-key" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">Utilizar un Gestor de Contraseñas</h3>
            <p class="text-base leading-relaxed">
                Utiliza un gestor de contraseñas para almacenar y gestionar tus contraseñas de manera segura.
            </p>
        </div>

        <!-- No Proporcionar Acceso Remoto a Desconocidos -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-red-500 fas fa-desktop" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">No Proporcionar Acceso Remoto a Desconocidos</h3>
            <p class="text-base leading-relaxed">
                No permitas el acceso remoto a tu dispositivo a personas desconocidas o no confiables.
            </p>
        </div>

        <!-- Verificar la Licencia de los Profesionales -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-yellow-500 fas fa-id-badge" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">Verificar la Licencia de los Profesionales</h3>
            <p class="text-base leading-relaxed">
                Antes de contratar a un profesional (como un abogado o un contratista), verifica su licencia y credenciales.
            </p>
        </div>

        <!-- No Realizar Compras en Sitios Web No Seguros -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-pink-500 fas fa-shopping-cart" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">No Realizar Compras en Sitios Web No Seguros</h3>
            <p class="text-base leading-relaxed">
                Evita realizar compras en sitios web que no tengan medidas de seguridad adecuadas, como el cifrado SSL.
            </p>
        </div>

        <!-- Utilizar una VPN -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-blue-500 fas fa-shield-alt" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">Utilizar una VPN</h3>
            <p class="text-base leading-relaxed">
                Utiliza una red privada virtual (VPN) para proteger tu privacidad y seguridad en línea, especialmente cuando uses redes Wi-Fi públicas.
            </p>
        </div>

        <!-- No Descargar Aplicaciones de Fuentes No Confiables -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-green-500 fas fa-mobile-alt" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">No Descargar Aplicaciones de Fuentes No Confiables</h3>
            <p class="text-base leading-relaxed">
                Evita descargar aplicaciones de fuentes no confiables o desconocidas para proteger tu dispositivo de malware.
            </p>
        </div>

        <!-- Verificar la Política de Privacidad -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-red-500 fas fa-file-contract" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">Verificar la Política de Privacidad</h3>
            <p class="text-base leading-relaxed">
                Antes de proporcionar información personal, lee y comprende la política de privacidad del sitio web o aplicación.
            </p>
        </div>

        <!-- No Compartir Información Personal en Redes Sociales -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-yellow-500 fas fa-share-square" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">No Compartir Información Personal en Redes Sociales</h3>
            <p class="text-base leading-relaxed">
                Evita compartir información personal sensible en redes sociales, ya que puede ser utilizada para estafas.
            </p>
        </div>

        <!-- Utilizar un Firewall -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-pink-500 fas fa-fire-alt" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">Utilizar un Firewall</h3>
            <p class="text-base leading-relaxed">
                Instala y configura un firewall para proteger tu red y dispositivos de accesos no autorizados.
            </p>
        </div>

        <!-- No Responder a Mensajes de Texto Sospechosos -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-blue-500 fas fa-sms" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">No Responder a Mensajes de Texto Sospechosos</h3>
            <p class="text-base leading-relaxed">
                Si recibes un mensaje de texto sospechoso, no respondas ni hagas clic en ningún enlace. Verifica la identidad del remitente antes de tomar cualquier acción.
            </p>
        </div>

        <!-- Verificar la Autenticidad de los Correos Electrónicos -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-green-500 fas fa-envelope-open-text" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">Verificar la Autenticidad de los Correos Electrónicos</h3>
            <p class="text-base leading-relaxed">
                Antes de hacer clic en enlaces o descargar archivos adjuntos, verifica la autenticidad del correo electrónico y del remitente.
            </p>
        </div>

        <!-- No Proporcionar Información Personal por Teléfono -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-red-500 fas fa-phone-alt" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">No Proporcionar Información Personal por Teléfono</h3>
            <p class="text-base leading-relaxed">
                No proporciones información personal o financiera por teléfono a menos que estés seguro de la identidad del llamante.
            </p>
        </div>

        <!-- Utilizar Tarjetas de Regalo con Cuidado -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-yellow-500 fas fa-gift" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">Utilizar Tarjetas de Regalo con Cuidado</h3>
            <p class="text-base leading-relaxed">
                No compres tarjetas de regalo para desconocidos y no compartas los códigos de las tarjetas de regalo con nadie.
            </p>
        </div>

        <!-- Verificar la Autenticidad de las Ofertas de Empleo -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-pink-500 fas fa-briefcase" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">Verificar la Autenticidad de las Ofertas de Empleo</h3>
            <p class="text-base leading-relaxed">
                Antes de aceptar una oferta de empleo, verifica la autenticidad de la empresa y asegúrate de que no se trate de una estafa.
            </p>
        </div>

        <!-- No Realizar Inversiones sin Investigar -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-blue-500 fas fa-chart-line" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">No Realizar Inversiones sin Investigar</h3>
            <p class="text-base leading-relaxed">
                Antes de realizar una inversión, investiga a fondo la oportunidad y verifica la legitimidad de la empresa o persona que ofrece la inversión.
            </p>
        </div>

        <!-- Verificar la Autenticidad de las Organizaciones de Caridad -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-green-500 fas fa-hand-holding-heart" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">Verificar la Autenticidad de las Organizaciones de Caridad</h3>
            <p class="text-base leading-relaxed">
                Antes de hacer una donación, verifica la autenticidad de la organización de caridad y asegúrate de que tu dinero llegue a los beneficiarios correctos.
            </p>
        </div>

        <!-- No Proporcionar Información Personal en Encuestas Sospechosas -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-red-500 fas fa-clipboard-list" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">No Proporcionar Información Personal en Encuestas Sospechosas</h3>
            <p class="text-base leading-relaxed">
                No proporciones información personal en encuestas sospechosas o no solicitadas. Verifica la legitimidad de la encuesta antes de participar.
            </p>
        </div>

        <!-- Utilizar Contraseñas Diferentes para Cada Cuenta -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-yellow-500 fas fa-lock" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">Utilizar Contraseñas Diferentes para Cada Cuenta</h3>
            <p class="text-base leading-relaxed">
                Utiliza contraseñas diferentes para cada cuenta en línea para evitar que un solo incidente de seguridad comprometa múltiples cuentas.
            </p>
        </div>
    </div>
</section>
</template>

<script lang="ts" setup>

</script>

<style scoped>

</style>