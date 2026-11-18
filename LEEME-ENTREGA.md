# Organizador del salón · versión 19

La entrega se hizo en archivos locales. El agente no publicó en GitHub ni escribió en tu cuenta de Google. La propietaria ya proporcionó la URL de su implementación de Apps Script, que está configurada en estos archivos.

## Revisión final: emblemas y centrado

El contenido se sitúa dentro del tablero ilustrado, cuyo centro está por encima del centro del archivo debido al mantel. En el editor, los nombres de mesas redondas siguen una curva interior; en las rectangulares se muestran en una línea interior. Número y emblema conservan el protagonismo. Los tamaños elegidos en **Letras del plano** son los preferidos: se reducen al espacio disponible si hace falta para que no sobresalgan. Los nombres completos y los tamaños ampliados se conservan en la tarjeta de llegada y en las propiedades.

En la vista del invitado y su previsualización, las mesas muestran número y emblema; el nombre aparece en la tarjeta ampliada cuando termina el recorrido. El ajuste no modifica posiciones, dimensiones, sillas, números ni asignaciones. El PNG utiliza la misma distribución de rótulos. La opción **Mantener número y emblema horizontales** actúa sobre ese bloque; el nombre interior de la mesa rectangular sigue la orientación de la pieza.

## Revisión del dashboard principal

- Códigos con ceros iniciales y encabezados de Sheets con tildes o mayúsculas se normalizan antes de unir los datos. Así, `123` coincide con `0123`.
- Al volver del editor, recuperar la pestaña o pulsar **Actualizar**, el dashboard vuelve a leer las asignaciones. No guarda una copia antigua del plano sobre Sheets. También descarta respuestas con una revisión anterior a la ya leída.
- El selector de asistencia guarda el cambio en Sheets y lo lee de nuevo para verificarlo. Si falla, mantiene el valor anterior. Los antiguos overrides locales siguen almacenados como respaldo, pero ya no sustituyen las confirmaciones de Sheets al leerlas.
- Las acciones de asignar y enviar el plano corresponden a confirmados con recepción presencial; virtuales, ausentes y asistentes solo a ceremonia no reciben esa acción.
- En **Ajustes → Link del plano** hay un botón **Copiar enlace para invitados**. No envía mensajes. El acceso al organizador tiene una fila completa en el celular y conserva los colores y la tipografía del dashboard.
- Se corrigió la representación de grupos con apóstrofes y caracteres especiales.

Consulta **REVISION-DASHBOARD.md** para el alcance de la revisión y **PRUEBAS.md** para los resultados. Se verificó con datos ficticios; aún faltan los permisos y guardados de tu Google real. Esta revisión no cambia el Apps Script ni los archivos de invitación o RSVP.

Esta corrección afecta los archivos del sitio; no requiere volver a desplegar Apps Script. Sube el contenido completo de **boda-ivan-narda-main**, conservando la carpeta **emblemas**. No subas los servidores ni pruebas de la carpeta superior. El enlace para invitados, una vez subidos los archivos, será **https://namynnel.github.io/boda-ivan-narda/mesas-invitados.html**.

Antes de enviar el enlace: guarda desde el editor conectado a Google y comprueba **Guardado y verificado en Sheets**. Luego abre el enlace del invitado desde otro navegador sin datos previos y consulta un código real asignado. La prueba automática equivalente pasó con datos ficticios; no confirma los permisos ni las escrituras en tu Google. La subida de un emblema personalizado a Drive también requiere esa comprobación real.

## Revisar primero

Ejecuta **node vista-previa.cjs** desde la carpeta que contiene boda-ivan-narda-main, google-sim.cjs y vista-previa.cjs. Abre http://127.0.0.1:8787/. La demostración entra automáticamente y muestra un aviso de datos ficticios. El servidor simula Sheets y Drive; sus datos se reinician al cerrarlo. El sitio real conserva la clave habitual del dashboard.

En el dashboard hay un único botón **Organizador del salón**. Abre el taller en **plano-editor.html**. Las antiguas pestañas Mesas y Plano ya no aparecen. Las acciones de asignar mesa desde Confirmaciones también abren el taller.

La página para enviar a invitados es **mesas-invitados.html**. En la demostración puedes buscar el código **0123** después de asignarle una mesa y guardar. Su titular ficticia es Ana María Prueba: el pergamino mostrará solo **Ana**.

## Crear tu plano

- Puedes empezar con el ejemplo o pulsar **Empezar en blanco**. El ejemplo es ilustrativo: no representa medidas verificadas del salón.
- El lienzo es un pergamino. La paleta contiene mesas redondas y rectangulares, escenario, barra, pista, columnas, paredes, entrada, gradas, árbol de huellas, caja para sobres, rótulos y baños separados para Damas y Caballeros.
- Pulsa una pieza de la paleta y luego el lugar del lienzo donde quieras colocarla. Arrástrala para moverla. En el panel derecho puedes cambiar nombre, ancho, alto, giro y coordenadas. El pequeño control de su esquina también cambia su tamaño. Las flechas del teclado desplazan la pieza seleccionada.
- **Dibujar paredes** permite trazar segmentos pulsando y arrastrando. Puedes estirarlos y girarlos después. Escape sale de la herramienta. No se hace un cálculo de metros: el plano usa posiciones porcentuales. El botón **Tamaño del plano** cambia ancho y alto entre 400 y 4000 píxeles. El formato inicial es 1000 × 1250. El mobiliario conserva su tamaño y sus proporciones; puedes adaptar las paredes al nuevo perímetro o conservar también su tamaño. Las posiciones relativas se reparten en el nuevo formato y puedes ajustarlas después.
- **Deshacer**, **Rehacer**, **Duplicar** y **Eliminar** operan sobre el borrador. Supr elimina la selección y Ctrl+Z deshace cuando no estás escribiendo en un campo.
- Cada mesa tiene entre **12 y 15 sillas**. Cambiar el número no cambia las dimensiones de la mesa ni las de las sillas. Si la haces demasiado pequeña manualmente, puede faltar separación visual entre las sillas: revísalo en la previsualización.
- Cada mesa con nombre temático tiene **dos emblemas predeterminados ilustrados en estilo de grabado sepia**. Los dos nombres pendientes tienen opciones provisionales. También puedes subir un PNG, JPG o WebP personalizado. Se reduce a un máximo de 400 píxeles de lado y se guarda como imagen en una carpeta de Drive creada por el script.
- La principal se llama **Mesa principal**. Hay 26 mesas de invitados con nombre y dos pendientes. Los números existentes se conservan al moverlas. El nombre se puede cambiar sin alterar el código de mesa ni sus asignaciones.
- Al añadir una mesa se reutiliza primero un número sin colocar; cuando ya están todos colocados se crea un número nuevo. Quitar una mesa del lienzo no borra sus invitados: su ubicación pública queda pendiente hasta que vuelvas a colocarla. Vaciar el lienzo conserva el catálogo de mesas y las asignaciones para reconstruir la distribución.

## Invitados y sincronización

El taller carga los invitados y las confirmaciones que ya existen en Sheets. La barra lateral **Invitados** está visible al abrir el taller. Puedes buscar por nombre, grupo o código y filtrar confirmados. Cada tarjeta muestra cuántas personas incluye y su mesa actual. Asigna desde el desplegable de la tarjeta, arrastra el nombre desde el asa de puntos hasta la mesa o usa el botón para sentarlo en la mesa seleccionada. La pestaña **Propiedades** contiene las medidas y emblemas. La asignación usa el mismo código que el dashboard. Los confirmados de recepción o de ambos eventos pueden asignarse; virtuales, pendientes y quienes no asisten quedan fuera del selector. Los acompañantes del mismo código van a la misma mesa. Se comprueba la capacidad al asignar y al reducir las sillas.

Arriba del lienzo están los contadores de personas confirmadas para mesas, con asiento en el plano, sin mesa asignada, sillas totales y disponibles. Si una mesa asignada no está colocada, se informa por separado. Al seleccionar una mesa se ven sus ocupantes, sillas libres y el control **Sillas (12–15)** en la barra lateral. Los acompañantes cuentan como personas, no como invitaciones separadas.

Pulsa **Guardar en Sheets** para publicar el borrador. El aviso de éxito aparece después de leer de vuelta el comprobante y la revisión guardada. La estructura editable completa —piezas, paredes, tamaños, giros, sillas, nombres, emblemas y asignaciones— se almacena en **Config → admin_mesas**. No se guarda solamente una fotografía del plano.

En otro dispositivo abre el taller e ingresa tu clave del dashboard. Cargará la versión guardada en Sheets. Si otro dispositivo guardó primero, se rechaza la escritura de una revisión antigua. Conserva el borrador local, descárgalo como JSON, recarga Sheets y combina los cambios manualmente. No hay combinación automática de ediciones simultáneas.

**Descargar plano editable** crea un respaldo JSON. **Importar plano** importa solo la distribución como borrador. Identifica las mesas por nombre y conserva los números, nombres, asignaciones, sillas y emblemas personalizados actuales. No restaura asignaciones de una demostración o de un respaldo antiguo. **Exportar imagen PNG** descarga una imagen del plano actual; no sustituye al archivo editable. El PNG se descarga en tu dispositivo, no se publica ni se sube automáticamente a Drive.

Usa el dashboard actualizado en todos los dispositivos: una versión antigua no conoce el esquema nuevo y podría sobrescribir la entrada admin_mesas.

## Vista del invitado

La pestaña **Vista del invitado** dentro del taller muestra el aspecto del borrador sin controles de edición sobre el lienzo. El botón **Ver entrada y recorrido** abre una previsualización de la experiencia completa y permite introducir el código de uno de tus confirmados.

La página pública empieza por la puerta ilustrada y el caballete. Debajo está el campo del código. No se busca por nombre para evitar homónimos. Al validar el código se muestra el plano guardado: las huellas avanzan a un ritmo pausado y continuo desde la entrada, el pergamino muestra solo el primer nombre y el recorrido termina junto a las sillas, sin entrar en el centro. La cámara sigue el recorrido; al llegar la mesa brilla y aparece una tarjeta ampliada con número, nombre y emblema. También existe el botón **Ir directamente a mi mesa** para omitir la animación. El botón de repetir reinicia la animación. Si no hay entrada, no se ha colocado la mesa o no existe un camino despejado, se informa al invitado.

El cálculo evita paredes, mobiliario, otras mesas y su espacio de sillas; es una orientación visual y no una validación de accesibilidad ni de circulación real. Si dibujas una pared continua sin puerta no se inventa un camino a través de ella. Si colocas varias entradas, se usa la primera del plano como inicio del recorrido.

La página pública no carga los controles administrativos, la clave, el padrón completo, los códigos de otros invitados ni contactos. Los emblemas personalizados son visibles para quien consulte el mapa; usa imágenes que quieras mostrar a los asistentes.

## Desplegar en tu Google: pendiente

1. Abre la hoja que utiliza tu boda y ve a **Extensiones → Apps Script**. Conserva una copia del script actual.
2. Reemplaza el script completo por **apps-script-COMPLETO-v19.js**. Debe quedar una sola definición de doGet y doPost; no dejes v17, v18 y v19 duplicados en el mismo proyecto.
3. Conserva **CLAVE_PANEL** y, si la usas, **CLAVE_PUERTA**, en las propiedades del script. Nunca copies estas claves al HTML publicado.
4. Guarda. En **Implementar → Administrar implementaciones**, edita tu aplicación web existente, selecciona **Nueva versión** y pulsa **Implementar**. Mantén la ejecución como propietaria y el acceso para cualquier persona, también sin sesión de Google.
5. Autoriza los permisos que Google solicite. Esta versión incorpora acceso a Drive para los emblemas. Al subir el primer emblema creará **Boda · Emblemas del plano** y guardará su identificador en la propiedad **CARPETA_PLANO_BODA**. No tienes que hacer pública la carpeta: el script sirve únicamente las imágenes que él registró. No borres las propiedades PLANO_ASSET_… si deseas conservar esos vínculos.
6. Actualiza la implementación existente para conservar la URL /exec. Si creas una distinta, cambia la URL en **mesas-api.js**, dashboard, invitación y RSVP que todavía apunten a la antigua. No uses la dirección /dev para los invitados.
7. Cuando tú decidas publicar, sube el contenido de **boda-ivan-narda-main** a tu repositorio, conservando la estructura y todos los archivos originales. Los archivos del servidor local, simulación y pruebas que están fuera de esa carpeta son para revisión y no necesitan publicarse.
8. En el sitio publicado, abre el taller, verifica tus datos reales, ajusta la distribución y guarda. En otro dispositivo o navegador privado consulta un código real con mesa y verifica el recorrido. Repite también una subida de emblema personalizado: el permiso y la carpeta reales de Drive no se pudieron probar sin entrar a tu cuenta.

En **Ajustes → Link del plano** se propone la URL mesas-invitados.html. Sustituye cualquier enlace antiguo de Drive y activa su publicación en la invitación únicamente cuando quieras mostrarlo. No se activó ni se enviaron mensajes a invitados.

Documentación oficial: [actualizar una implementación](https://developers.google.com/apps-script/concepts/deployments), [aplicaciones web y acceso](https://developers.google.com/apps-script/guides/web), [servicio de Drive y autorización](https://developers.google.com/apps-script/reference/drive/drive-app).

## Pruebas y límites

Consulta **PRUEBAS.md** y evidencias-ajustes/resultado.json de la entrega. Se probó el Apps Script v19 real con dobles locales de Sheets, Drive y los servicios de Google. No se probó el despliegue real, sus permisos, cuotas o redirecciones ni se leyó tu hoja actual. La invitación y los formularios RSVP conservan su código de funcionamiento; solo se sustituyó su URL de Apps Script.

Esta revisión mantiene el archivo de servidor **apps-script-COMPLETO-v19.js** con dimensiones de lienzo variables. La propietaria proporcionó la URL del despliegue. El agente no ha comprobado la escritura real ni la sincronización entre dispositivos contra esa implementación.

## Comprobación de la implementación real

Se recibió la nueva URL /exec y se actualizó en dashboard, invitación, RSVP (dos referencias) y mesas-api.js. Se comprobó que seatingMap responde correctamente y que seatingAdmin sin clave rechaza el acceso. El servidor real devuelve los nombres de mesas existentes y aún no tiene un plano guardado. Stormhold es la mesa **3** de los datos reales; la mesa 4 utilizada en las pruebas pertenecía a la demostración.

Para leer los datos privados sin publicar en GitHub, ejecuta **node probar-sheets-real.cjs** y abre http://127.0.0.1:8789/plano-editor.html. Este puerto se conecta directamente a Google y pide tu clave habitual. No utiliza la clave demo, no comparte el almacenamiento del puerto 8787 y no escribe automáticamente. Primero verifica que carguen tus confirmados y asignaciones. La lectura privada y las escrituras reales todavía no han sido comprobadas: requieren que ingreses tu clave en ese formulario. No envíes tu clave por el chat.

La distribución de ejemplo y sus números no deben sustituir las asignaciones reales al trasladar un respaldo de la demostración. Primero hay que comprobar la correspondencia de las mesas por nombre, puesto que su numeración real difiere de la demo.

## Salida, rendimiento y letras

La interfaz del editor usa la paleta del dashboard: oliva, crema, eucalipto y dorado, con Montserrat para los controles, Cinzel para los títulos y Cormorant Garamond en la cabecera. El pergamino y sus piezas conservan una tipografía independiente.

- Seleccionar una mesa no marca el plano como modificado. El arrastre empieza tras mover el puntero al menos siete píxeles. Escape cancela un arrastre y restaura la posición; también quita la selección, al igual que pulsar un espacio vacío o **Quitar selección**.
- **Dashboard de boda** permite volver. Con cambios pendientes puedes **Guardar y volver**, **Volver conservando el borrador local** o **Seguir editando**. También puedes usar Atrás del navegador: se conserva el borrador y no se muestra un aviso nativo que bloquee la navegación. Al regresar puedes recuperar el borrador. El borrador local no equivale a guardar en Sheets.
- En el acceso real de prueba, el dashboard y el editor se sirven desde el mismo puerto 8789. La ruta del dashboard ya no redirige al editor y conserva el acceso a los archivos actualizados. Tu sitio publicado no fue modificado.
- **Letras del plano**, encima del lienzo, permite elegir entre Cormorant Garamond, Cinzel, IM Fell English, IM Fell English SC, Georgia y Montserrat. Puedes ajustar nombres, números, rótulos, nombre del invitado en el pergamino, emblemas y los tamaños ampliados al llegar.
- Para una pieza concreta, selecciónala y ve a **Propiedades → Letras de esta pieza**. Puedes sustituir su fuente y tamaño; los campos vacíos usan los valores generales. **Usar letras generales** elimina esa excepción.
- Las letras se guardan dentro del plano editable y se aplican al invitado y al PNG exportado. Las fuentes web se cargan de Google Fonts, como en el dashboard original; si no están disponibles, se usan las fuentes de respaldo.

Estos cambios no añaden acciones nuevas a Apps Script. No necesitas volver a desplegarlo por esta revisión de interfaz. Se verificó el guardado de las propiedades con el mismo script v19 en la simulación; no se hicieron nuevas escrituras reales en tu Google.

## Giro de objetos e importación antes de publicar

Al seleccionar cualquier pieza aparecen controles de giro encima del lienzo: **−15°**, **+15°**, **Girar 90°**, **Enderezar** y un ángulo numérico. También puedes arrastrar el tirador **↻** que sale de la pieza; Shift ajusta el giro en pasos de 15°. La tecla R gira 15° y Shift+R gira en sentido contrario cuando no estás escribiendo en un campo. Deshacer y Rehacer conservan el giro.

Al girar una mesa se conservan su número, posición, tamaño e invitados. Por defecto el número y el emblema se mantienen horizontales para que se puedan leer. Puedes cambiarlo en **Propiedades → Letras de esta pieza → Mantener número y emblema horizontales**. El giro se conserva al guardar, en el PNG y en la vista del invitado. El nombre curvo sigue el borde interior de las mesas redondas; el nombre de las rectangulares sigue la orientación de la pieza.

La importación ya no reemplaza la lista de asignaciones: conserva los datos actuales y trae únicamente la distribución y su estilo. Si el respaldo usa otro número para una mesa con el mismo nombre, se respeta el número actual; por ejemplo, la Stormhold 4 de la demo puede identificarse con la Stormhold 3 de la hoja real. Si hay un nombre desconocido o ambiguo, se detiene la importación antes de modificar el estado. Los emblemas personalizados de la configuración actual se conservan; las imágenes de otra demostración deben subirse de nuevo.

Los nombres The Basement y The Cathedral reconocen los emblemas ilustrados de Basement y Cathedral. Los grupos Amigos Papás reciben opciones decorativas provisionales hasta que elijas sus nombres o imágenes definitivos.

### Prueba pendiente con tu Google

La propietaria indicó que todavía no había probado Guardar. Antes de dar por cerrada la integración, queda comprobar en el acceso real: guardar una distribución, ver el aviso de guardado verificado, recargar y abrir la vista de invitado en un navegador limpio con un código real confirmado. Conviene probar también una imagen personalizada para verificar Drive. Estas acciones no fueron realizadas por el agente en tu cuenta.

Después de subir tú los archivos a GitHub, comprueba el enlace público desde un celular y que la invitación y el RSVP sigan respondiendo. Se sube el contenido de boda-ivan-narda-main manteniendo sus carpetas, no el ZIP como archivo del sitio. Los respaldos JSON con asignaciones son para tu uso personal, no para publicarlos como datos del sitio. Los archivos de simulación y pruebas están fuera de esa carpeta.
