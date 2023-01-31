
/* jQuery
jQuery es una de las librerías de JavaScript más utilizadas en el mundo.

En 2006, cuando se lanzó, los principales navegadores manejaban JavaScript de forma ligeramente diferente. jQuery simplificó el proceso de escribir JavaScript del lado del cliente, y también garantizó que tu código funcionara de la misma manera en todos los navegadores.

En este curso, aprenderás a usar jQuery para seleccionar, eliminar, copiar y modificar diferentes elementos de la página. */

/* Dentro de tu elemento script, agrega este código: $(document).ready(function() { a tu script. Luego ciérralo en la siguiente línea (todavía dentro de tu elemento script) con: });
Esto es importante porque sin tu document ready function, tu código podría ejecutarse antes de que se procese tu HTML, lo que causaría errores. */

/* <script>
$(document).ready(function() {});
</script> */

/* ------------------------------------------------------------- */

/* Hagamos que todos tus elementos button reboten. Simplemente agrega este código dentro de tu función document ready:

$("button").addClass("animated bounce"); */

/* <script>
  $(document).ready(function() {
$("button").addClass("animated bounce");
  });
</script> */

/* ------------------------------------------------------------- */

/* Primero, apuntemos tus elementos div con la clase well usando el selector $(".well").

Ten en cuenta que, al igual que con las declaraciones CSS, escribes un . antes del nombre de la clase.

Luego usa la función .addClass() de jQuery para agregar las clases animated y shake.

Por ejemplo, puedes hacer que todos los elementos con la clase text-primary se agiten agregando lo siguiente a tu función document ready function:

$(".text-primary").addClass("animated shake"); */

/* <script>
  $(document).ready(function() {
    $(".well").addClass("animated shake");
    $(".text-primary").addClass("animated shake");
  });
</script> */

/* ------------------------------------------------------------- */

/* También puedes apuntar a elementos por su atributo id.

Primero apunta a tu elemento button con el id target3 usando el selector $("#target3").

Ten en cuenta que, al igual que con las declaraciones CSS, escribes un # antes del nombre del id.

Luego usa la función .addClass() de jQuery para agregar las clases animated y fadeOut.

Así es como harás que el elemento button con el id target6 se desvanezca: */

/* <script>
  $(document).ready(function() {
    $("button").addClass("animated bounce");
    $(".well").addClass("animated shake");
$("#target3").addClass("animated fadeOut")
$("#target6").addClass("animated fadeOut");
  });
</script> */

/* ------------------------------------------------------------- */

/* Elimina las tres funciones de jQuery que están dentro de tu document ready function, pero deja intacta tu función document ready function en sí. */

/* <script>
  $(document).ready(function() {
 

  });
</script> */

/* ------------------------------------------------------------- */

/* Usando .addClass(), agrega solo una clase a la vez al mismo elemento, de tres maneras diferentes:

Agrega la clase animated a todos los elementos con el tipo button.

Agrega la clase shake a todos los botones con la clase .btn.

Agrega la clase btn-primary al botón con id #target1. */

/* <script>
  $(document).ready(function() {
    $("button").addClass("animated")
    $(".btn").addClass("shake")
    $("#target1").addClass("btn-primary")
  });
</script> */

/* ------------------------------------------------------------- */

/* De la misma manera en que puedes agregar clases a un elemento con la función addClass() de jQuery, 
puedes eliminarlos con la función removeClass() de jQuery. */

/* <script>
  $(document).ready(function() {
    $("button").addClass("animated bounce");
    $(".well").addClass("animated shake");
    $("#target3").addClass("animated fadeOut");
    $(".btn").removeClass("btn-default");

  });
</script> */

/* ------------------------------------------------------------- */

/* Elimina tus selectores de jQuery, dejando document ready function vacío.

Selecciona target1 y cambia su color a rojo. */

/* <script>
  $(document).ready(function() {
   $("#target1").css("color", "red");

  });
</script> */

/* ------------------------------------------------------------- */

/* Query tiene una función llamada .prop() que te permite ajustar las propiedades de los elementos.

Así es como deshabilitarías todos los botones:

$("button").prop("disabled", true);
Deshabilita solo el botón target1. */

/* <script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true)
  });
</script> */

/* ------------------------------------------------------------- */

/* jQuery tiene una función llamada .html() que te permite agregar etiquetas HTML y texto dentro de un elemento. Cualquier contenido anterior dentro del elemento será completamente reemplazado con el contenido que proporciones usando esta función.

Así es como reescribirías y enfatizarías el texto de nuestro título:

$("h3").html("<em>jQuery Playground</em>");
jQuery también tiene una función similar llamada .text() que solamente altera el texto sin agregar etiquetas. En otras palabras, esta función no evaluará ninguna etiqueta HTML que le pasemos, pero en cambio, la tratará como el texto por el que quieres reemplazar el contenido existente. */

/* <script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target4").html("<em>#target4</em>");

  });
</script> */

/* ------------------------------------------------------------- */

/* jQuery tiene una función llamada .remove() que eliminará completamente un elemento HTML

Remueve el elemento #target4 de la página utilizando la función .remove(). */

/* <script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);

    $("#target4").remove()

  });
</script> */

/* ------------------------------------------------------------- */

/* jQuery tiene una función llamada appendTo() que te permite seleccionar elementos HTML y agregarlos a otro elemento.

Por ejemplo, si quisiéramos mover target4 desde nuestro "right well" a nuestro "left well", usaríamos:

$("#target4").appendTo("#left-well");
Mueve tu elemento target2 desde tu left-well a tu right-well. */

/* ------------------------------------------------------------- */

/* ------------------------------------------------------------- */

/* ------------------------------------------------------------- */

/* ------------------------------------------------------------- */

/* ------------------------------------------------------------- */

/* ------------------------------------------------------------- */