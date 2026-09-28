# Ejercicio 09 - Interfaz bancaria

## Qué he aprendido
A cómo dividir la interfaz en bloques visuales para verla clara. Creé dos componentes reutilizables: Movement para los movimientos y Action para las acciones rápidas. Lo importante es que Movement detecta si el monto es positivo o negativo y automáticamente cambia el color.

## Respuesta a la pregunta de comprensión
¿Qué partes de esta pantalla convertirías en componentes y cuáles dejarías directamente en App? Justifica.

Movement y Action deben ser componentes porque se repiten múltiples veces y cambian solo los datos, mientras que el saludo, el título y el sectionTitle pueden ir directamente en App porque aparecen una sola vez, así podemos evitar tener tanto codigo repetido.

## Qué he modificado
He añadido la fila de acciones entre el saldo y los movimientos, Movement detecta si el total es positivo o negativo y lo colorea automáticamente de verde o rojo. Agregué un quinto movimiento (Freelance) para demostrar que sin cambiar el componente, solo cambiando el prop amount, se renderiza un ingreso.

## Resultado
App de banca con saludo, tarjeta de saldo negra destacada, acciones rápidas en el medio, y lista de movimientos en verde o en rojo. 