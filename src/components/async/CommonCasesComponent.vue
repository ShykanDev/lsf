<template>
<section class="container px-4 py-8 mx-auto animate-fade">
    <h2 class="mb-4 text-3xl font-bold text-center text-rose-800">Tipos Comunes de Estafas</h2>
    <h3 class="mb-6 text-2xl text-center">Conoce las estafas más frecuentes y cómo protegerte</h3>

    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <!-- Phishing -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-blue-500 fas fa-envelope-open-text" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">Phishing</h3>
            <p class="text-base leading-relaxed">
                El phishing es una técnica de estafa en la que los delincuentes se hacen pasar por entidades confiables para obtener información personal y financiera. Suelen enviar correos electrónicos o mensajes que parecen legítimos.
            </p>
            <p class="text-base leading-relaxed">
                <strong>Cómo protegerse:</strong> No haga clic en enlaces sospechosos y verifique la autenticidad de los remitentes.
            </p>
        </div>

        <!-- Vishing -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-green-500 fas fa-phone-alt" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">Vishing</h3>
            <p class="text-base leading-relaxed">
                El vishing es una forma de phishing que se realiza a través de llamadas telefónicas. Los estafadores se hacen pasar por representantes de bancos o instituciones para obtener información personal.
            </p>
            <p class="text-base leading-relaxed">
                <strong>Cómo protegerse:</strong> No proporcione información personal por teléfono y cuelgue si sospecha de la llamada.
            </p>
        </div>

        <!-- Smishing -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-red-500 fas fa-sms" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">Smishing</h3>
            <p class="text-base leading-relaxed">
                El smishing es una estafa que utiliza mensajes de texto (SMS) para engañar a las víctimas y obtener información personal. Los mensajes suelen contener enlaces maliciosos.
            </p>
            <p class="text-base leading-relaxed">
                <strong>Cómo protegerse:</strong> No haga clic en enlaces de mensajes de texto de remitentes desconocidos.
            </p>
        </div>

        <!-- Estafas de Inversiones -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-yellow-500 fas fa-chart-line" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">Estafas de Inversiones</h3>
            <p class="text-base leading-relaxed">
                Las estafas de inversiones prometen altos rendimientos con poco riesgo. Los estafadores utilizan esquemas Ponzi o piramidales para atraer a las víctimas.
            </p>
            <p class="text-base leading-relaxed">
                <strong>Cómo protegerse:</strong> Investigue antes de invertir y desconfíe de ofertas que parezcan demasiado buenas para ser verdad.
            </p>
        </div>

        <!-- Estafas de Lotería -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-pink-500 fas fa-ticket-alt" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">Estafas de Lotería</h3>
            <p class="text-base leading-relaxed">
                Las estafas de lotería informan a las víctimas que han ganado un premio y les piden que paguen una tarifa para recibirlo. En realidad, no hay premio.
            </p>
            <p class="text-base leading-relaxed">
                <strong>Cómo protegerse:</strong> No pague por adelantado para recibir un premio y verifique la legitimidad de la lotería.
            </p>
        </div>

        <!-- Estafas de Empleo -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-green-500 fas fa-briefcase" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">Estafas de Empleo</h3>
            <p class="text-base leading-relaxed">
                Las estafas de empleo ofrecen trabajos falsos para obtener información personal o dinero. Los estafadores pueden pedir una tarifa por adelantado o datos bancarios.
            </p>
            <p class="text-base leading-relaxed">
                <strong>Cómo protegerse:</strong> Investigue a la empresa y desconfíe de ofertas de empleo que requieran pagos por adelantado.
            </p>
        </div>

        <!-- Estafas de Alquiler -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-blue-500 fas fa-home" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">Estafas de Alquiler</h3>
            <p class="text-base leading-relaxed">
                Las estafas de alquiler involucran propiedades falsas o inexistentes. Los estafadores piden depósitos o alquileres por adelantado y luego desaparecen.
            </p>
            <p class="text-base leading-relaxed">
                <strong>Cómo protegerse:</strong> Verifique la existencia de la propiedad y evite pagar por adelantado sin un contrato firmado.
            </p>
        </div>

        <!-- Estafas de Citas en Línea -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-red-500 fas fa-heart" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">Estafas de Citas en Línea</h3>
            <p class="text-base leading-relaxed">
                Las estafas de citas en línea involucran a personas que crean perfiles falsos para establecer relaciones y luego pedir dinero o información personal.
            </p>
            <p class="text-base leading-relaxed">
                <strong>Cómo protegerse:</strong> Sea cauteloso con las solicitudes de dinero y verifique la identidad de la persona.
            </p>
        </div>

        <!-- Estafas de Soporte Técnico -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-yellow-500 fas fa-laptop" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">Estafas de Soporte Técnico</h3>
            <p class="text-base leading-relaxed">
                Los estafadores se hacen pasar por técnicos de soporte y contactan a las víctimas para informarles de problemas falsos en sus dispositivos. Luego, piden acceso remoto o dinero para "solucionar" el problema.
            </p>
            <p class="text-base leading-relaxed">
                <strong>Cómo protegerse:</strong> No permita el acceso remoto a desconocidos y verifique la legitimidad del soporte técnico.
            </p>
        </div>

        <!-- Estafas de Compras en Línea -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-pink-500 fas fa-shopping-cart" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">Estafas de Compras en Línea</h3>
            <p class="text-base leading-relaxed">
                Las estafas de compras en línea involucran productos falsos o inexistentes. Los estafadores crean tiendas en línea falsas para obtener dinero y datos personales.
            </p>
            <p class="text-base leading-relaxed">
                <strong>Cómo protegerse:</strong> Compre en sitios web confiables y verifique las opiniones de otros compradores.
            </p>
        </div>

        <!-- Estafas de Donaciones -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-green-500 fas fa-hand-holding-usd" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">Estafas de Donaciones</h3>
            <p class="text-base leading-relaxed">
                Los estafadores crean campañas de donación falsas para causas ficticias o desastres naturales. Piden dinero que nunca llega a los beneficiarios reales.
            </p>
            <p class="text-base leading-relaxed">
                <strong>Cómo protegerse:</strong> Investigue la legitimidad de la organización y desconfíe de solicitudes urgentes de donaciones.
            </p>
        </div>

        <!-- Estafas de Préstamos -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-blue-500 fas fa-money-check-alt" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">Estafas de Préstamos</h3>
            <p class="text-base leading-relaxed">
                Las estafas de préstamos ofrecen dinero rápido a cambio de una tarifa por adelantado. Una vez pagada la tarifa, los estafadores desaparecen sin otorgar el préstamo.
            </p>
            <p class="text-base leading-relaxed">
                <strong>Cómo protegerse:</strong> Desconfíe de préstamos que requieran pagos por adelantado y verifique la legitimidad del prestamista.
            </p>
        </div>

        <!-- Estafas de Seguros -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-red-500 fas fa-file-contract" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">Estafas de Seguros</h3>
            <p class="text-base leading-relaxed">
                Los estafadores venden pólizas de seguro falsas o inexistentes. Las víctimas pagan primas sin recibir cobertura real.
            </p>
            <p class="text-base leading-relaxed">
                <strong>Cómo protegerse:</strong> Verifique la legitimidad de la compañía de seguros y lea detenidamente los términos de la póliza.
            </p>
        </div>

        <!-- Estafas de Viajes -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-blue-500 fas fa-plane" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">Estafas de Viajes</h3>
            <p class="text-base leading-relaxed">
                Las estafas de viajes involucran ofertas falsas de vacaciones o vuelos. Los estafadores piden pagos por adelantado y luego desaparecen.
            </p>
            <p class="text-base leading-relaxed">
                <strong>Cómo protegerse:</strong> Reserve a través de agencias de viajes confiables y verifique las opiniones de otros viajeros.
            </p>
        </div>

        <!-- Estafas de Criptomonedas -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-yellow-500 fas fa-coins" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">Estafas de Criptomonedas</h3>
            <p class="text-base leading-relaxed">
                Las estafas de criptomonedas prometen altos rendimientos en inversiones falsas. Los estafadores utilizan esquemas Ponzi o piramidales para atraer a las víctimas.
            </p>
            <p class="text-base leading-relaxed">
                <strong>Cómo protegerse:</strong> Investigue antes de invertir y desconfíe de ofertas que parezcan demasiado buenas para ser verdad.
            </p>
        </div>

        <!-- Estafas de Recuperación de Dinero -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-green-500 fas fa-money-bill-wave" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">Estafas de Recuperación de Dinero</h3>
            <p class="text-base leading-relaxed">
                Los estafadores se hacen pasar por abogados o agencias de recuperación de dinero y prometen recuperar fondos perdidos a cambio de una tarifa por adelantado.
            </p>
            <p class="text-base leading-relaxed">
                <strong>Cómo protegerse:</strong> Desconfíe de servicios que requieran pagos por adelantado y verifique la legitimidad de la agencia.
            </p>
        </div>

        <!-- Estafas de Tarjetas de Regalo -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-blue-500 fas fa-gift" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">Estafas de Tarjetas de Regalo</h3>
            <p class="text-base leading-relaxed">
                Los estafadores piden a las víctimas que compren tarjetas de regalo y les proporcionen los códigos. Luego, utilizan los códigos para realizar compras fraudulentas.
            </p>
            <p class="text-base leading-relaxed">
                <strong>Cómo protegerse:</strong> No compre tarjetas de regalo para desconocidos y desconfíe de solicitudes de códigos de tarjetas de regalo.
            </p>
        </div>

        <!-- Estafas de Impuestos -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-red-500 fas fa-file-invoice-dollar" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">Estafas de Impuestos</h3>
            <p class="text-base leading-relaxed">
                Los estafadores se hacen pasar por agentes del gobierno y exigen el pago inmediato de impuestos atrasados. Pueden amenazar con acciones legales si no se realiza el pago.
            </p>
            <p class="text-base leading-relaxed">
                <strong>Cómo protegerse:</strong> Verifique la legitimidad de la solicitud y no proporcione información personal o financiera por teléfono.
            </p>
        </div>

        <!-- Estafas de Servicios Públicos -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-yellow-500 fas fa-bolt" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">Estafas de Servicios Públicos</h3>
            <p class="text-base leading-relaxed">
                Los estafadores se hacen pasar por representantes de compañías de servicios públicos y amenazan con cortar el servicio si no se realiza un pago inmediato.
            </p>
            <p class="text-base leading-relaxed">
                <strong>Cómo protegerse:</strong> Verifique la legitimidad de la solicitud y no proporcione información personal o financiera por teléfono.
            </p>
        </div>

        <!-- Estafas de Inmigración -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-pink-500 fas fa-passport" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">Estafas de Inmigración</h3>
            <p class="text-base leading-relaxed">
                Los estafadores ofrecen servicios de inmigración falsos y piden pagos por adelantado. Las víctimas no reciben ningún servicio real.
            </p>
            <p class="text-base leading-relaxed">
                <strong>Cómo protegerse:</strong> Utilice servicios de inmigración autorizados y verifique la legitimidad del proveedor.
            </p>
        </div>

        <!-- Estafas de Salud -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-green-500 fas fa-heartbeat" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">Estafas de Salud</h3>
            <p class="text-base leading-relaxed">
                Las estafas de salud involucran productos o tratamientos falsos que prometen curas milagrosas. Los estafadores piden pagos por adelantado y no entregan ningún producto real.
            </p>
            <p class="text-base leading-relaxed">
                <strong>Cómo protegerse:</strong> Consulte a profesionales de la salud y desconfíe de ofertas que parezcan demasiado buenas para ser verdad.
            </p>
        </div>

        <!-- Estafas de Suscripciones -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-blue-500 fas fa-newspaper" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">Estafas de Suscripciones</h3>
            <p class="text-base leading-relaxed">
                Los estafadores ofrecen suscripciones falsas a revistas, servicios en línea o productos. Las víctimas pagan pero no reciben ningún servicio real.
            </p>
            <p class="text-base leading-relaxed">
                <strong>Cómo protegerse:</strong> Verifique la legitimidad del proveedor y lea detenidamente los términos de la suscripción.
            </p>
        </div>

        <!-- Estafas de Multinivel (MLM) -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-yellow-500 fas fa-network-wired" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">Estafas de Multinivel (MLM)</h3>
            <p class="text-base leading-relaxed">
                Las estafas de multinivel prometen grandes ganancias a cambio de reclutar nuevos miembros. Los estafadores se benefician de las cuotas de inscripción y las compras de los miembros.
            </p>
            <p class="text-base leading-relaxed">
                <strong>Cómo protegerse:</strong> Investigue la empresa y desconfíe de esquemas que se centran más en el reclutamiento que en la venta de productos.
            </p>
        </div>

        <!-- Estafas de Arrendamiento de Vehículos -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-pink-500 fas fa-car" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">Estafas de Arrendamiento de Vehículos</h3>
            <p class="text-base leading-relaxed">
                Los estafadores ofrecen vehículos en arrendamiento a precios muy bajos y piden un depósito por adelantado. Luego, desaparecen sin entregar el vehículo.
            </p>
            <p class="text-base leading-relaxed">
                <strong>Cómo protegerse:</strong> Verifique la legitimidad de la empresa de arrendamiento y desconfíe de ofertas demasiado buenas para ser verdad.
            </p>
        </div>

        <!-- Estafas de Bienes Raíces -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-green-500 fas fa-building" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">Estafas de Bienes Raíces</h3>
            <p class="text-base leading-relaxed">
                Los estafadores ofrecen propiedades falsas o inexistentes y piden depósitos o pagos por adelantado. Las víctimas pierden su dinero y no reciben ninguna propiedad.
            </p>
            <p class="text-base leading-relaxed">
                <strong>Cómo protegerse:</strong> Verifique la existencia de la propiedad y la legitimidad del vendedor o agente inmobiliario.
            </p>
        </div>

        <!-- Estafas de Préstamos Estudiantiles -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-blue-500 fas fa-graduation-cap" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">Estafas de Préstamos Estudiantiles</h3>
            <p class="text-base leading-relaxed">
                Los estafadores ofrecen préstamos estudiantiles falsos y piden una tarifa por adelantado. Las víctimas pagan la tarifa pero no reciben ningún préstamo.
            </p>
            <p class="text-base leading-relaxed">
                <strong>Cómo protegerse:</strong> Utilice instituciones financieras autorizadas y desconfíe de préstamos que requieran pagos por adelantado.
            </p>
        </div>

        <!-- Estafas de Seguros de Salud -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-red-500 fas fa-hospital" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">Estafas de Seguros de Salud</h3>
            <p class="text-base leading-relaxed">
                Los estafadores venden pólizas de seguro de salud falsas o inexistentes. Las víctimas pagan primas sin recibir cobertura real.
            </p>
            <p class="text-base leading-relaxed">
                <strong>Cómo protegerse:</strong> Verifique la legitimidad de la compañía de seguros y lea detenidamente los términos de la póliza.
            </p>
        </div>

        <!-- Estafas de Reparación de Crédito -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-yellow-500 fas fa-credit-card" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">Estafas de Reparación de Crédito</h3>
            <p class="text-base leading-relaxed">
                Los estafadores prometen mejorar el historial crediticio a cambio de una tarifa. Las víctimas pagan pero no reciben ningún servicio real.
            </p>
            <p class="text-base leading-relaxed">
                <strong>Cómo protegerse:</strong> Desconfíe de servicios que prometen resultados garantizados y verifique la legitimidad de la empresa.
            </p>
        </div>

        <!-- Estafas de Inversiones en Bienes Raíces -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-pink-500 fas fa-home" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">Estafas de Inversiones en Bienes Raíces</h3>
            <p class="text-base leading-relaxed">
                Los estafadores ofrecen inversiones en propiedades falsas o inexistentes. Las víctimas invierten dinero pero no reciben ningún retorno.
            </p>
            <p class="text-base leading-relaxed">
                <strong>Cómo protegerse:</strong> Investigue la legitimidad de la inversión y desconfíe de ofertas que parezcan demasiado buenas para ser verdad.
            </p>
        </div>

        <!-- Estafas de Inversiones en Oro -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-green-500 fas fa-coins" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">Estafas de Inversiones en Oro</h3>
            <p class="text-base leading-relaxed">
                Los estafadores ofrecen inversiones en oro falsas o inexistentes. Las víctimas invierten dinero pero no reciben ningún retorno.
            </p>
            <p class="text-base leading-relaxed">
                <strong>Cómo protegerse:</strong> Investigue la legitimidad de la inversión y desconfíe de ofertas que parezcan demasiado buenas para ser verdad.
            </p>
        </div>

        <!-- Estafas de Inversiones en Petróleo -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-blue-500 fas fa-oil-can" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">Estafas de Inversiones en Petróleo</h3>
            <p class="text-base leading-relaxed">
                Los estafadores ofrecen inversiones en petróleo falsas o inexistentes. Las víctimas invierten dinero pero no reciben ningún retorno.
            </p>
            <p class="text-base leading-relaxed">
                <strong>Cómo protegerse:</strong> Investigue la legitimidad de la inversión y desconfíe de ofertas que parezcan demasiado buenas para ser verdad.
            </p>
        </div>

        <!-- Estafas de Inversiones en Diamantes -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-red-500 fas fa-gem" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">Estafas de Inversiones en Diamantes</h3>
            <p class="text-base leading-relaxed">
                Los estafadores ofrecen inversiones en diamantes falsas o inexistentes. Las víctimas invierten dinero pero no reciben ningún retorno.
            </p>
            <p class="text-base leading-relaxed">
                <strong>Cómo protegerse:</strong> Investigue la legitimidad de la inversión y desconfíe de ofertas que parezcan demasiado buenas para ser verdad.
            </p>
        </div>

        <!-- Estafas de Inversiones en Vino -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-yellow-500 fas fa-wine-bottle" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">Estafas de Inversiones en Vino</h3>
            <p class="text-base leading-relaxed">
                Los estafadores ofrecen inversiones en vino falsas o inexistentes. Las víctimas invierten dinero pero no reciben ningún retorno.
            </p>
            <p class="text-base leading-relaxed">
                <strong>Cómo protegerse:</strong> Investigue la legitimidad de la inversión y desconfíe de ofertas que parezcan demasiado buenas para ser verdad.
            </p>
        </div>

        <!-- Estafas de Inversiones en Arte -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-pink-500 fas fa-palette" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">Estafas de Inversiones en Arte</h3>
            <p class="text-base leading-relaxed">
                Los estafadores ofrecen inversiones en arte falsas o inexistentes. Las víctimas invierten dinero pero no reciben ningún retorno.
            </p>
            <p class="text-base leading-relaxed">
                <strong>Cómo protegerse:</strong> Investigue la legitimidad de la inversión y desconfíe de ofertas que parezcan demasiado buenas para ser verdad.
            </p>
        </div>

        <!-- Estafas de Inversiones en Criptomonedas -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-green-500 fas fa-bitcoin" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">Estafas de Inversiones en Criptomonedas</h3>
            <p class="text-base leading-relaxed">
                Los estafadores ofrecen inversiones en criptomonedas falsas o inexistentes. Las víctimas invierten dinero pero no reciben ningún retorno.
            </p>
            <p class="text-base leading-relaxed">
                <strong>Cómo protegerse:</strong> Investigue la legitimidad de la inversión y desconfíe de ofertas que parezcan demasiado buenas para ser verdad.
            </p>
        </div>

        <!-- Estafas de Inversiones en Forex -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-blue-500 fas fa-chart-line" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">Estafas de Inversiones en Forex</h3>
            <p class="text-base leading-relaxed">
                Los estafadores ofrecen inversiones en Forex falsas o inexistentes. Las víctimas invierten dinero pero no reciben ningún retorno.
            </p>
            <p class="text-base leading-relaxed">
                <strong>Cómo protegerse:</strong> Investigue la legitimidad de la inversión y desconfíe de ofertas que parezcan demasiado buenas para ser verdad.
            </p>
        </div>

        <!-- Estafas de Inversiones en Bienes Raíces Internacionales -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-red-500 fas fa-globe" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">Estafas de Inversiones en Bienes Raíces Internacionales</h3>
            <p class="text-base leading-relaxed">
                Los estafadores ofrecen inversiones en propiedades internacionales falsas o inexistentes. Las víctimas invierten dinero pero no reciben ningún retorno.
            </p>
            <p class="text-base leading-relaxed">
                <strong>Cómo protegerse:</strong> Investigue la legitimidad de la inversión y desconfíe de ofertas que parezcan demasiado buenas para ser verdad.
            </p>
        </div>

        <!-- Estafas de Inversiones en Energías Renovables -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-yellow-500 fas fa-leaf" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">Estafas de Inversiones en Energías Renovables</h3>
            <p class="text-base leading-relaxed">
                Los estafadores ofrecen inversiones en energías renovables falsas o inexistentes. Las víctimas invierten dinero pero no reciben ningún retorno.
            </p>
            <p class="text-base leading-relaxed">
                <strong>Cómo protegerse:</strong> Investigue la legitimidad de la inversión y desconfíe de ofertas que parezcan demasiado buenas para ser verdad.
            </p>
        </div>

        <!-- Estafas de Inversiones en Tecnología -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-pink-500 fas fa-microchip" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">Estafas de Inversiones en Tecnología</h3>
            <p class="text-base leading-relaxed">
                Los estafadores ofrecen inversiones en tecnología falsas o inexistentes. Las víctimas invierten dinero pero no reciben ningún retorno.
            </p>
            <p class="text-base leading-relaxed">
                <strong>Cómo protegerse:</strong> Investigue la legitimidad de la inversión y desconfíe de ofertas que parezcan demasiado buenas para ser verdad.
            </p>
        </div>

        <!-- Estafas de Inversiones en Startups -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-green-500 fas fa-rocket" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">Estafas de Inversiones en Startups</h3>
            <p class="text-base leading-relaxed">
                Los estafadores ofrecen inversiones en startups falsas o inexistentes. Las víctimas invierten dinero pero no reciben ningún retorno.
            </p>
            <p class="text-base leading-relaxed">
                <strong>Cómo protegerse:</strong> Investigue la legitimidad de la inversión y desconfíe de ofertas que parezcan demasiado buenas para ser verdad.
            </p>
        </div>

        <!-- Estafas de Inversiones en Crowdfunding -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-blue-500 fas fa-hand-holding-usd" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">Estafas de Inversiones en Crowdfunding</h3>
            <p class="text-base leading-relaxed">
                Los estafadores ofrecen inversiones en proyectos de crowdfunding falsos o inexistentes. Las víctimas invierten dinero pero no reciben ningún retorno.
            </p>
            <p class="text-base leading-relaxed">
                <strong>Cómo protegerse:</strong> Investigue la legitimidad de la inversión y desconfíe de ofertas que parezcan demasiado buenas para ser verdad.
            </p>
        </div>

        <!-- Estafas de Inversiones en Bienes Raíces Comerciales -->
        <div class="p-6 bg-white rounded-lg shadow-md">
            <i class="mb-4 text-4xl text-red-500 fas fa-building" aria-hidden="true"></i>
            <h3 class="mb-2 text-2xl font-bold">Estafas de Inversiones en Bienes Raíces Comerciales</h3>
            <p class="text-base leading-relaxed">
                Los estafadores ofrecen inversiones en propiedades comerciales falsas o inexistentes. Las víctimas invierten dinero pero no reciben ningún retorno.
            </p>
            <p class="text-base leading-relaxed">
                <strong>Cómo protegerse:</strong> Investigue la legitimidad de la inversión y desconfíe de ofertas que parezcan demasiado buenas para ser verdad.
            </p>
        </div>


    </div>
</section>

</template>

<script lang="ts" setup>

</script>

<style scoped>

</style>
