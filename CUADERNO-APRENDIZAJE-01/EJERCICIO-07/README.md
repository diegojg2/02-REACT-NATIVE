# Ejercicio 07 - Feed de noticias

## Qué he aprendido
A usar ScrollView como contenedor para listas de contenido. He aprendido a crear componentes reutilizables (NewsCard) con un contenido personalizado. 

## Respuesta a la pregunta de comprensión
¿Qué parte debe cambiar entre una noticia y otra y qué parte debería permanecer igual?

Deben cambiar: la categoría, el título y la fecha, la estructura visual , el componente NewsCard y su forma de renderizarse deben mantenerse igual.

## Qué he modificado
Un ScrollView como contenedor principal, las NewsCard con categoría, título y fecha, extrayendo la estructura a un componente que recibe category y title, reutilizando el componente para crear la quinta tarjeta

## Resultado
Un feed de noticias desplazable con cuatro tarjetas de noticia idénticas pero con distinto contenido. Cada tarjeta muestra categoría en azul, título y fecha. El ScrollView permite desplazarse si hay más noticias de las que caben en pantalla.