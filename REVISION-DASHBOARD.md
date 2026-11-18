# Revisión del dashboard y de los rótulos

## Corregido

| Problema observado en código o en pantalla | Resultado |
| --- | --- |
| El bloque de la mesa se centraba respecto al archivo, incluyendo el mantel. | Número y emblema se ajustan al tablero real de la ilustración. |
| El nombre recto sobresalía y competía con el emblema. | Nombre curvo interior en mesas redondas del editor; línea interior en rectangulares. En la vista pública se reserva para la llegada. |
| Los tamaños grandes podían exceder una mesa pequeña. | El contenido se adapta al espacio y al giro; se conservan los tamaños ampliados al llegar. |
| La confirmación 123 no coincidía con el invitado 0123. | Los códigos se normalizan antes de unir confirmaciones, invitados y asignaciones. |
| Una primera normalización descartaba encabezados alternativos antes de intentar leerlos. | Se conservan campos con tildes, mayúsculas y los alias contemplados por el dashboard. |
| Cambiar la asistencia desde el selector solo creaba un override local. | El cambio usa la acción existente de Apps Script y se verifica leyendo Sheets. Un rechazo no se presenta como guardado. |
| Volver desde el editor podía dejar asignaciones antiguas hasta la siguiente recarga. | Se vuelven a leer al regresar, recuperar la pestaña o actualizar; una respuesta antigua no pisa otra más reciente. |
| Había acciones de mesa para personas sin recepción presencial. | Se ofrecen para both/reception, excluyendo internacionales y virtuales. |
| Apóstrofes en nombres de grupo podían romper su botón de eliminar. | Texto y argumentos se escapan al construir los controles. |
| El acceso al organizador se comprimía y desplazaba las pestañas en el celular. | Navegación en tres columnas y organizador en su propia fila. |

## Comprobado con datos de prueba

- Búsqueda por código, filtros de confirmaciones, lista de invitados y resumen del evento.
- Apertura de Ajustes y del enlace público; presencia del control para copiarlo. El uso real del portapapeles depende del navegador y dispone de alternativa manual.
- Cambio de asistencia guardado y leído de nuevo, conservando acompañantes. Rechazo simulado: se restaura el valor anterior.
- Asignar un confirmado desde el editor, guardar y ver el nombre de su mesa al volver al dashboard. Los datos utilizados para mensajes y listas de ingreso reflejan ese nombre.
- Una revisión de mesas anterior se ignora. El dashboard antiguo no escribe admin_mesas.
- Vista de 390 px, navegación y ausencia de errores JavaScript durante estas operaciones.
- Selección, salida, borradores, giro, importación segura, contadores, 12–15 sillas, tamaños del lienzo, emblemas personalizados, PNG y RSVP según las suites incluidas.
- Stormhold movida por arrastre, asignada al código confirmado ficticio 0123, guardada y consultada en un contexto sin datos previos; recorrido animado completo, llegada a las sillas, resplandor y tarjeta ampliada.

Los resultados y capturas están en las carpetas de evidencias del ZIP, fuera de la carpeta del sitio. Las fuentes de Google Fonts se bloquearon en las pruebas automatizadas: se comprobaron sus familias configuradas y estilos con fuentes de respaldo, no la descarga de Google Fonts.

## Pendiente en la cuenta de la propietaria

Guardar en la implementación real y comprobar la lectura desde otro dispositivo; consultar un código real desde un navegador limpio; subir un emblema para verificar los permisos y la carpeta de Drive. Después de subir los archivos, comprobar invitación, RSVP y enlace público en el sitio final.

No se enviaron WhatsApps ni correos, no se probaron acciones destructivas con datos reales, no se publicó en GitHub y no se escribió en Google real. No hace falta desplegar otro Apps Script para estas correcciones: se utilizan las acciones ya presentes en v19.
