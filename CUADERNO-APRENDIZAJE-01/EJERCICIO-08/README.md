# Ejercicio 08 - Catálogo con FlatList

## Qué he aprendido
FlatList Recorre un array y renderiza cada elemento sin tener que duplicar código, con numColumns se elige el numero de columnas que se deseen y ColumnWrapperStyle te deja separar las columnas de forma fácil.

## Respuesta a la pregunta de comprensión
¿Qué ventaja tiene cambiar un producto en el array en lugar de buscar su tarjeta manualmente dentro del JSX?

Si cambias el array, todo se actualiza solo. Si tuvieras que duplicar JSX para cada producto, tendrías que andar buscando y editando en múltiples partes de codigo cada vez, mientras que con FlatList solo necesitas cambiar los datos.

## Qué he modificado
Hice un array de 8 productos (6 iniciales + 2 nuevos) y use FlatList con numColumns={2}, keyExtractor y renderItem, agregando camara y smartwatch. 

## Resultado
Un catálogo de 8 productos en dos columnas, cada uno muestra emoji, nombre y precio. Lo importante es que al agregar más productos al array se pintan solos, sin duplicar código.