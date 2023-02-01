
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

/* <script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();
    $("#target2").appendTo("#right-well")

  });
</script> */

/* ------------------------------------------------------------- */

/* Clona tu elemento target5 y agrégalo a tu left-well. */

/* <script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();
    $("#target2").appendTo("#right-well");
    $("#target5").clone().appendTo("#left-well")

  });
</script> */

/* ------------------------------------------------------------- */

/* Cada elemento HTML tiene un elemento parent (padre) del cual inherits (hereda) propiedades.

Por ejemplo, tu elemento jQuery Playground h3 tiene el elemento padre de <div class="container-fluid">, que en sí mismo tiene el padre body.

jQuery tiene una función llamada parent() que te permite acceder al padre del elemento que hayas seleccionado.

Dale al padre del elemento #target1 un color de fondo rojo.*/

/* <script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();
    $("#target2").appendTo("#right-well");
    $("#target5").clone().appendTo("#left-well");
    $("#target1").parent().css("background-color", "red");

  });
</script> */

/* ------------------------------------------------------------- */

/* jQuery tiene una función llamada children() que te permite acceder a los hijos del elemento que hayas seleccionado. 

Dale a todos los hijos de tu elemento right-well el color naranja.*/


/* <script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();
    $("#target2").appendTo("#right-well");
    $("#target5").clone().appendTo("#left-well");
    $("#target1").parent().css("background-color", "red");
    $("#right-well").children().css("color", "orange")

  });
</script> */

/* ------------------------------------------------------------- */

/* jQuery usa selectores de CSS para apuntar elementos. El selector target:nth-child(n) de CSS, te permite seleccionar todos los enésimos elementos con el tipo de elemento o la clase apuntada.

Así es como le darías al tercer elemento en cada "well" la clase de rebote:

$(".target:nth-child(3)").addClass("animated bounce");
Haz que el segundo niño en cada uno de sus elementos de "well" rebote. Debes seleccionar los hijos de los elementos con la clase target. */

/* <script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();
    $("#target2").appendTo("#right-well");
    $("#target5").clone().appendTo("#left-well");
    $("#target1").parent().css("background-color", "red");
    $("#right-well").children().css("color", "orange");
    $(".target:nth-child(2)").addClass("animated bounce");

  });
</script> */

/* ------------------------------------------------------------- */

/* Apunta a elementos pares utilizando jQuery
También puedes apuntar a elementos basado en sus posiciones, usando los selectores :odd o :even.

Ten en cuenta que jQuery es indexado desde el cero, lo que significa que el primer elemento de una selección tiene la posición 0. Esto puede ser un poco confuso, ya que contra-intuitivamente, :odd selecciona el segundo elemento (posición 1), cuarto elemento (posición 3), y así sucesivamente.

Así es como apuntas a todos los elementos impares con la clase target y les das clases:

$(".target:odd").addClass("animated shake");
Intenta seleccionar todos los elementos pares target y darle las clases de animated y shake. Recuerda que even se refiere a la posición de los elementos con un sistema de indexado desde cero en mente. */

/* <script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();
    $("#target2").appendTo("#right-well");
    $("#target5").clone().appendTo("#left-well");
    $("#target1").parent().css("background-color", "red");
    $("#right-well").children().css("color", "orange");
    $("#left-well").children().css("color", "green");
    $(".target:nth-child(2)").addClass("animated bounce");
    $(".target:even").addClass("animated shake"); // even es a los impares

  });
</script> */

/* ------------------------------------------------------------- */

/* jQuery también puede seleccionar al elemento body.

Así es como haríamos que el cuerpo entero se desvaneciera: $("body").addClass("animated fadeOut");

Pero hagamos algo más dramático. Agrega las clases animated y hinge a tu elemento body. */

/* <script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();
    $("#target2").appendTo("#right-well");
    $("#target5").clone().appendTo("#left-well");
    $("#target1").parent().css("background-color", "red");
    $("#right-well").children().css("color", "orange");
    $("#left-well").children().css("color", "green");
    $(".target:nth-child(2)").addClass("animated bounce");
    $(".target:even").addClass("animated shake");
    $("body").addClass("animated hinge");

  });
</script> */

/* ------------------------------------------------------------- */

