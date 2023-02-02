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