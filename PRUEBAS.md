# Pruebas de los ajustes del editor

Apps Script v19 real ejecutado con simulación local de Sheets y Drive; sin acceso a Google. No se accedió a tu cuenta de Google.

## Comprobaciones aprobadas

- Dashboard: un botón al taller y sin pestañas Mesas/Plano
- 29 mesas, nombres y asignación anterior conservados
- Arrastre real de Stormhold y posición final 50,73
- 15 sillas sin variar dimensiones de mesa
- 2 emblemas temáticos por mesa
- Emblema personalizado guardado y recuperado desde Drive simulado
- Lienzo vacío conserva asignaciones; deshacer recupera piezas
- Pared estirada y girada; segmento dibujado con ratón
- PNG exportado y respaldo editable
- Vista estética dentro del editor
- Navegador sin datos: puerta, código 0123, pergamino solo Ana, huellas animadas al borde de las sillas de la mesa situada en 50,73 y tarjeta ampliada
- Segundo dispositivo recupera plano, asignación y emblema
- Conflicto de revisión conserva cambios de otro dispositivo
- Móvil 390px consulta posición nueva 49,73
- Acciones privadas sin clave rechazadas
- No búsqueda por nombre; códigos no asistentes, virtuales o inexistentes sin resultado
- Código 123 reconoce 0123
- Acceso a archivo de Drive arbitrario rechazado
- RSVP nuevo, duplicado y código usado
- Sin errores JavaScript ni peticiones a Google Apps Script real
- Lista lateral visible y asignación por selector y arrastre real
- Contadores globales y control de sillas junto a la mesa seleccionada
- Lienzo 1600 × 1000 guardado y recuperado desde otro dispositivo
- Paso lento mínimo 4,5 segundos con interpolación continua
- Llegada al borde de las sillas, sin entrar en el centro
- Tarjeta de llegada con número, nombre e imagen ampliados
- Dos emblemas PNG ilustrados por mesa

## Llegada del invitado

Stormhold conserva su centro en 50 %, 73 % durante el caso principal. La ruta termina en el borde exterior de las sillas, no en esas coordenadas centrales. El avance usa distancia física en el lienzo para mantener un ritmo uniforme, con una duración mínima de 4,5 segundos. Se verificaron las huellas completas, el primer nombre Ana, el resplandor y la tarjeta ampliada. Una captura adicional comprueba la nueva estrella ilustrada de Stormhold como emblema predeterminado.

## Personas y dimensiones

La prueba asignó desde una tarjeta lateral y después arrastró realmente a Ana hasta Stormhold. Los contadores mostraron 3 personas confirmadas para mesas, 3 con asiento, 0 sin mesa y las sillas libres correspondientes. Se cambió el lienzo a 1600 × 1000 y se comprobó que una mesa redonda conservara sus proporciones físicas. Se guardó y otro navegador recuperó esas dimensiones, la asignación y la imagen personalizada.

## Pendientes y límites

- Desplegar v19 en tu Google
- Autorizar Drive para guardar emblemas
- Verificar con tu hoja y dispositivos reales

La prueba de sincronización utilizó Sheets y Drive simulados con el Apps Script real. No se hizo una implementación ni una escritura en tu Google. El ejemplo del salón es ilustrativo, no un plano medido. La invitación y los formularios RSVP conservan su funcionamiento; únicamente se actualizó la URL de Apps Script al conectar la nueva implementación. Los dos nombres pendientes todavía tienen emblemas provisionales.

## Comprobación pública de Google

La nueva implementación real respondió ok:true a seatingMap y ok:false, no_autorizado, a seatingAdmin sin clave. No se le enviaron escrituras. Los datos privados, el guardado y Drive reales siguen pendientes de la entrada de la clave por la propietaria. La sustitución de URL se verificó como el único cambio en index.html y rsvp-narda-ivan.html durante este paso.

## Salida y tipografías: pruebas adicionales

- Cinco selecciones de mesa no modifican ni ensucian el plano
- Un movimiento de ratón menor que 7 px no cuenta como arrastre
- Escape y clic en vacío quitan la selección
- Las flechas siguen moviendo la mesa después de cada paso
- Escape cancela un arrastre activo y restaura la posición sin ensuciar el plano
- Al seleccionar otra mesa se conserva el texto pendiente en la mesa correcta
- Volver al dashboard sin cambios funciona sin avisos de salida
- El botón Atrás del navegador funciona con cambios y conserva el borrador sin aviso nativo
- Editar controles con estilo Montserrat/Cinzel y paleta exacta del dashboard
- Fuente y ocho tamaños generales aplicados al mapa
- Fuente y tamaños por pieza y restablecimiento al estilo general
- Letras guardadas y recuperadas en otro navegador
- Vista pública y llegada respetan fuente y tamaños elegidos
- Exportación PNG con textos configurados
- Seguir editando desde el diálogo conserva el editor
- Salir con borrador permite volver sin perder cambios
- Guardar y volver confirma el guardado antes de navegar
- No hubo errores JavaScript ni avisos nativos de salida durante estos recorridos

Se ejecutó además una prueba con **252 confirmaciones ficticias**. La carga inicial tardó 1021 ms y cinco selecciones tardaron 729, 240, 227, 253, 225 ms en este equipo. Son mediciones locales de esa ejecución, no una garantía de tiempo en todos los dispositivos. Seleccionar no modificó el plano y se pudo regresar al dashboard.

El acceso real se comprobó solo sirviendo los HTML: editor y dashboard responden 200, el enlace de regreso está presente y el dashboard es el actualizado. No se siguió una sesión privada ni se escribió en Google.

Las pruebas verifican configuración y reglas CSS; Google Fonts se bloqueó en el navegador de pruebas y se usaron los respaldos locales.

Se repitió la regresión de asignaciones, sillas, emblemas, recorrido, dimensiones, guardado, conflictos, móvil y RSVP con Sheets/Drive simulados.

## Giro e importación segura

- Controles visibles para mesas y objetos
- Botones de ±15°, 90° y Enderezar
- Ángulo numérico negativo
- Giro de 90° con arrastre real del tirador
- Posición, tamaño, número y asignaciones conservados al girar
- Deshacer y rehacer giro
- Número, nombre y emblema legibles al girar, con opción de girarlos también
- PNG exportado con los objetos girados
- Escenario a 45°
- Giro guardado y recuperado en otro navegador
- Vista pública conserva el giro sin controles del editor
- Recorrido público llega a las sillas de la mesa girada

Se probó un giro de 90° arrastrando físicamente el tirador de una mesa y un escenario a 45°. Los datos se guardaron mediante el script v19 simulado y se recuperaron en otro navegador. Se exportó un PNG del plano girado y se comprobó la llegada del invitado sin controles de edición.

La prueba de importación utilizó la numeración de mesas obtenida previamente de la respuesta pública real y un respaldo de la demo: Stormhold 4 se identificó como Stormhold 3, conservando el diccionario de asignaciones, nombres, revisión y emblemas personalizados actuales. Las asignaciones ficticias se ignoraron; un nombre desconocido se rechazó sin modificar el estado anterior. No se importó nada a Google real.

Las regresiones anteriores de sillas, contadores, dimensión, letras, salida del editor, guardado, conflictos, móvil y RSVP también pasaron en la simulación.

## Revisión final de centrado y nombres

Se ejecutaron **pruebas-centrado.cjs**, **pruebas-giro.cjs**, **pruebas-salida-textos.cjs**, **pruebas-ajustes.cjs**, **pruebas-lista-grande.cjs** y **pruebas-dashboard-final.cjs** durante esta revisión. Resultado: todas pasaron. Las evidencias del centrado están en **evidencias-centrado**, fuera de la carpeta del sitio; las del dashboard están en **evidencias-dashboard-final**.

- Posición del bloque número/emblema respecto a la zona del tablero, excluyendo el mantel: 16 combinaciones de mesa redonda/rectangular, giros de 0°, 45°, 90° y −135°, nombre corto y nombre largo. Desviación menor de 0,1 píxel respecto al anclaje previsto. Los nombres del editor permanecen visibles, curvos en las redondas y en una línea interior en las rectangulares. Los tamaños grandes se adaptan al espacio disponible.
- Stormhold de la demostración (mesa 4) movida mediante arrastre real, conservando su número, y asignada al confirmado ficticio 0123. Guardado y lectura de verificación contra el Apps Script v19 con Sheets simulado.
- Navegador nuevo sin almacenamiento: puerta ilustrada, búsqueda por código, posición actualizada, 29 números y emblemas visibles, nombres de las mesas ocultos y ausencia de controles de giro.
- Se dejó terminar la animación completa, sin saltarla: llegada a Stormhold, resplandor y tarjeta ampliada con nombre, número y emblema. También pasó la vista de 390 px con movimiento reducido.
- Regresiones de giro mediante tirador, controles de giro, asignaciones, importación segura, guardado y recuperación en otro navegador, PNG, tipografía, selección y salida del editor.

Se revisó también el dashboard principal: búsquedas, filtros, resumen, lista de invitados, Ajustes, enlace público, navegación al editor y regreso con la asignación actualizada; normalización de código 123/0123 y encabezados con tildes; grupos con apóstrofes; móvil de 390 px y ausencia de errores JavaScript. El selector de asistencia pasó un guardado con lectura posterior y un rechazo simulado que conservó el valor anterior y los acompañantes. No se comprobó el portapapeles del usuario ni se enviaron mensajes.

La prueba de lista grande cargó 252 confirmaciones y comprobó selección de mesas y salida sin bloqueo. Los tiempos obtenidos son locales y dependen de la máquina; no representan latencias de Google real.

No se publicaron archivos ni se escribieron datos en Google real. Quedan por comprobar con la cuenta de la propietaria: guardar en Sheets, recuperar en otro dispositivo, consultar un código real desde navegador limpio y subir una imagen personalizada a Drive. Los archivos de invitación, RSVP y Apps Script no cambiaron en esta revisión; sí se corrigieron comportamientos del dashboard principal, detallados en **REVISION-DASHBOARD.md**.
