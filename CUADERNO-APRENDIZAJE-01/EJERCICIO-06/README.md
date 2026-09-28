# Ejercicio 06 - Dashboard de métricas

## Qué he aprendido
A crear un dashboard con grid layout usando flexDirection row y flexWrap para distribuir tarjetas en columnas. Aprendí que con 48% de ancho y márgenes se pueden alinear dos elementos por fila y que flexWrap automáticamente salta a la siguiente fila cuando no cabe el contenido.

## Respuesta a la pregunta de comprensión
¿Por qué un ancho del 48% puede ser más práctico que 50% cuando además existe separación entre tarjetas?

Porque si usas 50%, no hay espacio para márgenes o separación y se deforman o se cortan.

## Qué he modificado
He usado grid container con flexDirection row y flexWrap, tarjetas de 48% de ancho con marginRight 4%, en total cuatro tarjetas y una tarjeta extra de Ingresos que salta a nueva fila.

## Resultado
Un dashboard con dos columnas de tarjetas blancas. Las primeras cuatro se distribuyen en dos filas y la quinta tarjeta aparece en una tercera fila a la izquierda al no haber espacio.