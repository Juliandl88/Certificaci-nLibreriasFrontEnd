/* ------------------------------------------------------------- */

/* Crea un elemento JSX simple
React es una librería de vistas de código abierto creada y mantenida por Facebook. Es una gran herramienta para hacer la interfaz de usuario (UI) de aplicaciones web modernas.

React usa una extensión de sintaxis de JavaScript llamada JSX que te permite escribir HTML directamente dentro de JavaScript. Esto tiene muchos beneficios. Te permite utilizar el poder programático completo de JavaScript dentro de HTML, y ayuda a mantener tu código legible. En su mayor parte, JSX es similar al HTML que ya has aprendido. Sin embargo, hay algunas diferencias clave que se abordarán a lo largo de estos desafíos.

Por ejemplo, dado que JSX es una extensión sintáctica de JavaScript, se puede escribir JavaScript directamente dentro de JSX. Para hacer esto, simplemente incluye el código que deseas que sea tratado como JavaScript entre llaves: { 'this is treated as JavaScript code' }. Ten esto en cuenta, ya que se utiliza en varios desafíos futuros.

Sin embargo, debido a que JSX no es JavaScript válido, el código JSX debe ser compilado en JavaScript. El transpilador Babel es una herramienta muy popular para este proceso. Para tu comodidad, ya se ha añadido tras bambalinas para estos desafíos. Si escribes JSX no válido sintácticamente, verás que la primera prueba de estos desafíos falla.

Vale la pena señalar que por debajo los desafíos están llamando ReactDOM.render(JSX, document.getElementById('root')). Esta llamada de función es la que coloca tu JSX en la representación ligera del DOM de React. React entonces utiliza capturas instantáneas de su propio DOM para optimizar actualizando sólo partes específicas del DOM.

El código actual utiliza JSX para asignar un elemento div a la constante JSX. Reemplaza el div por un elemento h1 y añade el texto Hello JSX! dentro de él. */

/* const JSX = <h1>Hello JSX!</h1>; */

/* ------------------------------------------------------------- */

/* Crea un elemento JSX complejo
El último desafío fue un ejemplo sencillo de JSX, pero JSX también puede representar HTML más complejo.

Una cosa importante que debes saber sobre JSX anidado es que debe devolver un solo elemento.

Este elemento principal contendría a todos los demás niveles de elementos anidados.

Por ejemplo, varios elementos JSX escritos al mismo nivel sin elemento contenedor principal no se transpilarán.

Aquí va un ejemplo:

JSX válido:

<div>
  <p>Paragraph One</p>
  <p>Paragraph Two</p>
  <p>Paragraph Three</p>
</div>
JSX inválido:

<p>Paragraph One</p>
<p>Paragraph Two</p>
<p>Paragraph Three</p>
Define una nueva constante JSX que renderice un div que contenga los siguientes elementos en orden:

Un h1, un p y una lista desordenada que contiene tres elementos li. Puedes incluir cualquier texto que desees dentro de cada elemento.

**Nota: ** Al renderizar varios elementos de esta forma, puedes envolverlos todos entre paréntesis, pero no es estrictamente necesario. Observa también que este desafío usa una etiqueta div para envolver a todos los elementos hijos dentro de un solo elemento principal. Si eliminas el div, JSX ya no se podrá transpilar. Ten esto en cuenta, ya que también será así cuando devuelvas elementos JSX en los componentes de React. */

/* const JSX = <div>
  <h1>Titulo</h1>
  <p>Parrafo</p>
  <ul>
    <li>elemento1</li>
    <li>elemento2</li>
    <li>elemento3</li>
  </ul>
</div>
 */

/* ------------------------------------------------------------- */

/* Agrega comentarios en JSX
JSX es una sintaxis que se compila en JavaScript válido. A veces, para facilitar la lectura, es necesario añadir comentarios al código. Como la mayoría de los lenguajes de programación, JSX tiene su propia manera de hacerlo.

Para agregar comentarios dentro de JSX, se utiliza la sintaxis / * * / para envolver el texto del comentario.

El editor de código tiene un elemento JSX similar al que creaste en el último desafío. Agrega un comentario en algún lugar dentro del elemento div, sin modificar los elementos h1 o p. */

/* const JSX = (
  <div>
{/ * Comentario * /}
  <h1>This is a block of JSX</h1>
  <p>Here's a subtitle</p>
</div>
); */

/* ------------------------------------------------------------- */

/* Renderiza elementos HTML al DOM
Hasta ahora, has aprendido que JSX es una herramienta conveniente para escribir HTML legible dentro de JavaScript. Con React, podemos renderizar este JSX directamente al DOM HTML usando la API de renderizado de React conocida como ReactDOM.

ReactDOM ofrece un método simple para renderizar elementos React al DOM que se ve así: ReactDOM.render(componentToRender, targetNode), donde el primer argumento es el elemento o componente React que deseas renderizar, y el segundo argumento es el nodo DOM al que se quiere renderizar el componente.

Como era de esperarse, ReactDOM.render() debe llamarse después de las declaraciones de los elementos JSX, al igual que hay que declarar las variables antes de usarlas.

El editor de código tiene un componente JSX simple. Usa el método ReactDOM.render() para renderizar este componente a la página. Puedes pasar elementos JSX definidos directamente como el primer argumento y utilizar document.getElementById() para seleccionar el nodo DOM al que renderizar. Hay un div con id='challenge-node' disponible para que lo uses. Asegúrate de no cambiar la constante JSX. */

/* const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
// Cambia el código debajo de esta línea

ReactDOM.render(JSX, document.getElementById('challenge-node')) */

/* ------------------------------------------------------------- */

/* Define una clase HTML en JSX
Ahora que te sientes cómodo escribiendo JSX, te preguntarás cuanto difiere de HTML.

Hasta ahora, puede parecer que HTML y JSX son exactamente iguales.

Una diferencia clave en JSX es que ya no puedes usar la palabra class para definir clases HTML. Esto es debido a que class es una palabra reservada en JavaScript. En su lugar, JSX utiliza className.

De hecho, la convención de nomenclatura para todos los atributos HTML y referencias a eventos en JSX se convierte a camelCase. Por ejemplo, un evento de clic en JSX es onClick, en lugar de onclick. Del mismo modo, onchange se convierte en onChange. Si bien se trata de una diferencia sutil, es importante tenerlo en cuenta de ahora en adelante.

Aplica una clase myDiv al div proporcionado en el código JSX. */

/* const JSX = (
  <div className="myDiv">
    <h1>Add a class to this div</h1>
  </div>
); */

/* ------------------------------------------------------------- */

/* Aprende sobre las etiquetas JSX auto-cerradas
Hasta ahora, has visto cómo JSX difiere de HTML de una manera clave con el uso de className vs. class para definir clases HTML.

Otra forma importante en la que JSX difiere de HTML está en la idea de la etiqueta de auto-cierre.

En HTML, casi todas las etiquetas tienen una etiqueta de apertura y cierre: <div></div>; la etiqueta de cierre siempre tiene una barra inclinada antes del nombre de la etiqueta que está cerrando. Sin embargo, hay instancias especiales en HTML llamadas “etiquetas auto-cerradas”, o etiquetas que no requieren una etiqueta de apertura y cierre antes de que otra etiqueta pueda comenzar.

Por ejemplo, la etiqueta de salto de línea puede escribirse como <br> o como <br />, pero nunca debe escribirse como <br></br>, ya que no contiene ningún contenido.

En JSX, las reglas son un poco diferentes. Cualquier elemento JSX se puede escribir con una etiqueta de auto-cierre, y cada elemento debe ser cerrado. La etiqueta de salto de línea, por ejemplo, siempre debe escribirse como <br /> para ser un JSX válido que puede ser transpilado. Por otra parte, un <div> puede escribirse como <div /> o <div></div>. La diferencia es que en la primera versión de sintaxis no hay forma de incluir nada en la <div />. Verás en desafíos posteriores que esta sintaxis es útil al renderizar componentes de React.

Corrige los errores en el editor de código para que sea JSX válido y se transpile exitosamente. Asegúrate de no cambiar nada del contenido: sólo tienes que cerrar las etiquetas donde se necesite. */

/* const JSX = (
  <div>
    <h2>Welcome to React!</h2> <br />
    <p>Be sure to close all tags!</p>
    <hr />
  </div>
); */

/* ------------------------------------------------------------- */

/* Crea un componente funcional sin estado
Los componentes son el núcleo de React. Todo en React es un componente y aquí aprenderás a crear uno.

Hay dos maneras de crear un componente React. La primera forma es utilizar una función JavaScript. Definir un componente de esta manera crea un componente funcional sin estado. El concepto de estado en una solicitud se abordará en retos posteriores. Por ahora, piensa en un componente sin estado como uno que puede recibir datos y renderizarlos, pero no administra o rastrea los cambios en esos datos. (Cubriremos la segunda manera de crear un componente React en el siguiente desafío.)

Para crear un componente con una función, simplemente escribe una función JavaScript que devuelva ya sea JSX o null. Una cosa importante a tener en cuenta es que React requiere que tu nombre de función comience con una letra mayúscula. Aquí hay un ejemplo de un componente funcional sin estado que asigna una clase HTML en JSX:

const DemoComponent = function() {
  return (
    <div className='customClass' />
  );
};
Después de ser transpilado, el <div> tendrá una clase CSS de customClass.

Debido a que un componente JSX representa HTML, podrías poner varios componentes juntos para crear una página HTML más compleja. Esta es una de las ventajas clave de la arquitectura de componentes que React proporciona. Te permite componer tu interfaz de usuario de muchos componentes separados y aislados. Esto hace más fácil construir y mantener complejas interfaces de usuario.

El editor de código tiene una función llamada MyComponent. Completa esta función para que retorne un único elemento div que contiene alguna cadena de texto.

Nota: El texto se considera hijo del elemento div, por lo que no podrás utilizar una etiqueta de autocierre. */

/* ------------------------------------------------------------- */

/* ------------------------------------------------------------- */

/* ------------------------------------------------------------- */

/* ------------------------------------------------------------- */

/* ------------------------------------------------------------- */

/* ------------------------------------------------------------- */

/* ------------------------------------------------------------- */

/* ------------------------------------------------------------- */

/* ------------------------------------------------------------- */

/* ------------------------------------------------------------- */

/* ------------------------------------------------------------- */

/* ------------------------------------------------------------- */

/* ------------------------------------------------------------- */

/* ------------------------------------------------------------- */

/* ------------------------------------------------------------- */

/* ------------------------------------------------------------- */

/* ------------------------------------------------------------- */

/* ------------------------------------------------------------- */

/* ------------------------------------------------------------- */

/* ------------------------------------------------------------- */

/* ------------------------------------------------------------- */

/* ------------------------------------------------------------- */

/* ------------------------------------------------------------- */

/* ------------------------------------------------------------- */

/* ------------------------------------------------------------- */

/* ------------------------------------------------------------- */

/* ------------------------------------------------------------- */

/* ------------------------------------------------------------- */

/* ------------------------------------------------------------- */