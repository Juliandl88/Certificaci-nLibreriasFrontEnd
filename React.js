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

/* const MyComponent = function() {
  // Cambia el código debajo de esta línea
return (
  <div>Hello world</div>
)


  // Cambia el código encima de esta línea
} */

/* ------------------------------------------------------------- */

/* Crea un componente de React
La otra forma de definir un componente React es con la sintaxis de clase de ES6 class. En el siguiente ejemplo, Kitten hereda de React.Component:

class Kitten extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>Hi</h1>
    );
  }
}
Esto crea una clase de ES6 Kitten que hereda de la clase React.Component. Así que la clase Kitten ahora tiene acceso a muchas características útiles de React, como el estado local y el ciclo de vida de los "hooks". No te preocupes si aún no estás familiarizado con estos términos, ya que se tratarán con más detalle en los desafíos posteriores. También ten en cuenta que la clase Kitten tiene un constructor definido dentro de ella que llama a super(). Utiliza super() para llamar al constructor de la clase padre, en este caso React.Component. El constructor es un método especial utilizado durante la inicialización de objetos que se crean con la palabra clave class. Es una mejor práctica llamar al constructor de un componente con super, y pasar sus propiedades props a ambos. Esto asegura que el componente esté inicializado correctamente. Por ahora, sepan que es estándar que se incluya este código. Pronto verás otros usos para el constructor, así como las props.

MyComponent está definido en el editor de código usando la sintaxis de clase. Termina de escribir el método render para que devuelva un elemento div que contiene un h1 con el texto Hello React!.
 */

/* class Kitten extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>Hello React!</div>
    );
  }
} */

/* ------------------------------------------------------------- */

/* Crear un componente con composición
Ahora veremos cómo podemos componer múltiples componentes de React juntos. Imagina que estás construyendo una aplicación y has creado tres componentes: un Navbar, Dashboard y Footer.

Para componer estos componentes juntos, se podría crear un componente App parent que renderiza cada uno de estos tres componentes como children. Para renderizar un componente como hijo en un componente React, se incluye el nombre del componente escrito como una etiqueta HTML personalizada en el JSX. Por ejemplo, en el método render se puede escribir:

return (
 <App>
  <Navbar />
  <Dashboard />
  <Footer />
 </App>
)
Cuando React encuentra una etiqueta HTML personalizada que hace referencia a otro componente (un nombre de componente envuelto en < /> como en este ejemplo), renderiza el marcado de ese componente en la ubicación de la etiqueta. Esto debería ilustrar la relación padre/hijo entre el componente App y Navbar, Dashboard, y Footer.

En el editor de código, hay un componente funcional simple llamado ChildComponent y un componente de clase llamado ParentComponent. Compón los dos juntos renderizando el ChildComponent dentro del ParentComponent. Asegúrate de cerrar la etiqueta ChildComponent con una barra diagonal.

Nota: ChildComponent se define con una función de flecha ES6 porque es una práctica muy común al usar React. Sin embargo, has de saber que se trata de una función simple. Si no estás familiarizado con la sintaxis de la función flecha, consulta la sección de JavaScript. */

/* const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        
<ChildComponent />

</div>
);
}
}; */

/* ------------------------------------------------------------- */

/* Utiliza React para procesar componentes anidados
El último desafío mostró una manera simple de organizar dos componentes, pero hay muchas maneras diferentes de organizar componentes con React.

La composición de componentes es una de las características más poderosas de React. Cuando trabajas con React, es importante comenzar a pensar en tu interfaz de usuario en términos de componentes, como el ejemplo App del último desafío. Debes dividir tu UI en sus bloques básicos de construcción, y esas piezas se convierten en los componentes. Esto ayuda a separar el código responsable de la interfaz de usuario del código responsable de manejar la lógica de tu aplicación. Esto puede simplificar enormemente el desarrollo y el mantenimiento de proyectos complejos.

Hay dos componentes funcionales definidos en el editor de código, llamados TypesOfFruit y Fruits. Toma el componente TypesOfFruit y organízalo, o anídalo, dentro del componente Fruits. Luego toma el componente Fruits y anídalo dentro del componente TypesOfFood. El resultado debe ser un componente hijo, anidado dentro de un componente padre, ¡que a su vez está anidado dentro de un componente padre! */

/* const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      
      <TypesOfFruit />
      
    </div>
  );
};

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
       
          <Fruits />
        
      </div>
    );
  }
}; */

/* ------------------------------------------------------------- */

/* Compón componentes de React
A medida que los desafíos continúan utilizando composiciones más complejas con componentes de React y JSX, hay un una cosa importante a tener en cuenta. Renderizar componentes de clase de estilo ES6 dentro de otros componentes es igual que renderizar los componentes simples que usaste en los últimos desafíos. Puedes renderizar elementos JSX, componentes funcionales sin estado y componentes de clase ES6, dentro de otros componentes.

En el editor de código, el componente TypesOfFood ya está incluyendo (renderizando) un componente llamado Vegetables. Además, también está el componente Fruits del último desafío.

Anida dos componentes dentro de Fruits: primero NonCitrus y luego Citrus. Ambos componentes se te proporcionan en segundo plano. A continuación, anida el componente de clase Fruits en el componente TypesOfFood, debajo del encabezado h1 y encima de Vegetables. El resultado debe ser una serie de componentes anidados, que utiliza dos tipos de componentes diferentes. */

/* class Fruits extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        
        <NonCitrus />
        <Citrus />
      
    </div>
  );
}
};

class TypesOfFood extends React.Component {
constructor(props) {
   super(props);
}
render() {
  return (
    <div>
      <h1>Types of Food:</h1>
      
        <Fruits />
      
      <Vegetables />
    </div>
  );
}
}; */

/* ------------------------------------------------------------- */

/* Renderiza un componente de clase al DOM
Puede que recuerdes haber usado la API ReactDOM en un desafío anterior para renderizar elementos JSX al DOM. El proceso para renderizar los componentes de React será muy similar. Los últimos desafíos se centraron en los componentes y la composición, por lo que el renderizado se ha realizado tras bambalinas. Sin embargo, ninguna parte de código de React que escribas se procesará en el DOM sin realizar una llamada a la API de ReactDOM.

Aquí va un recordatorio de la sintaxis: ReactDOM.render(componentToRender, targetNode). El primer argumento es el componente de React que deseas renderizar. El segundo argumento es el nodo del DOM en el que deseas renderizar ese componente.

Los componentes de React se pasan a ReactDOM.render() de manera un poco diferente a como se hace con los elementos JSX. Para los elementos JSX, pasas el nombre del elemento que deseas representar. Sin embargo, para los componentes de React, debes usar la misma sintaxis que si estuvieras renderizando un componente anidado, por ejemplo, ReactDOM.render(<ComponentToRender />, targetNode). Se utiliza esta sintaxis tanto para los componentes de clase ES6 como para los componentes funcionales.

Los componentes Fruits y Vegetables se definen por ti tras bambalinas. Renderiza ambos componentes como hijos del componente TypesOfFood, y luego renderiza TypesOfFood al DOM. Hay un div con id='challenge-node' disponible para que lo uses. */

/* class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        
        <Fruits/>
        <Vegetables/>
      
    </div>
  );
}
};

ReactDOM.render(<TypesOfFood />, document.getElementById('challenge-node')) */

/* ------------------------------------------------------------- */

/* Escribe un componente React desde cero
Ahora que has aprendido los conceptos básicos de JSX y componentes React, es el momento de escribir un componente por tu cuenta. Los componentes React son el bloque de construcción principal de las aplicaciones React, por lo que es importante familiarizarse con cómo escribirlos. Recuerda, un componente típico de React es una class ES6 que hereda de React.Component. Tiene un método de render que retorna HTML (de JSX) o null. Esta es la estructura básica de un componente React. Una vez que tengas un buen entendimiento de esto, estarás preparado para empezar a construir proyectos React más complejos.

Define una clase MyComponent que herede de React.Component. Su método render debe devolver un div que contenga una etiqueta h1 con el texto: My First React Component! en él. Utiliza este texto de manera exacta, las mayúsculas, minúsculas y puntuación son importantes. También asegúrate de llamar el constructor de tu componente.

Renderiza este componente al DOM usando ReactDOM.render(). Hay un div con id='challenge-node' disponible para que lo uses. */

/* // Cambia el código debajo de esta línea

// change code below this line
class MyComponent extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
          <div id="challenge-node">
                 <h1>My First React Component!</h1>
          </div>
    );
  }
};
ReactDOM.render(<MyComponent/>, document.getElementById("challenge-node")); */

/* ------------------------------------------------------------- */

/* Pasa "props" a un componente funcional sin estado
Los desafíos anteriores cubrieron varios casos de creación y composición de elementos de JSX, componentes funcionales y componentes de clase estilo ES6 en React. Con estos cimientos, ha llegado la hora de observar otro patrón de uso muy común en React: props. En React, se pueden pasar props, o propiedades a componentes hijos. Digamos, que tienes un componente App que devuelve un componente hijo llamado Welcome, el cual es un componente funcional sin estado. Puedes pasarle una propiedad llamada user a Welcome escribiendo:

<App>
  <Welcome user='Mark' />
</App>
Puedes utilizar atributos personalizados de HTML creados por ti y soportados por React para ser pasados por props a tu componente. En este caso, la propiedad creada user es pasada como atributo al componente Welcome. Dado que Welcome es un componente funcional sin estado, tiene acceso a este valor de la siguiente manera:

const Welcome = (props) => <h1>Hello, {props.user}!</h1>
Este valor es llamado props por convención y, cuando se trata de componentes funcionales sin estado, se lo considera como un argumento pasado a una función que retorna JSX. Puedes acceder el valor del argumento en el cuerpo de la función. En los componentes de clase, verás que esto es un poco diferente.

Hay componentes Calendar y CurrentDate en el editor de código. Al prensentar CurrentDate desde el componente Calendar, pasa una propiedad de date asignada a la fecha actual desde el objeto Date de JavaScript. Luego, accede a este prop dentro del componente CurrentDate, mostrando su valor dentro de las etiquetas p. Tenga en cuenta que los valores prop se evalúen como JavaScript, deben estar encerrados dentro de corchetes, por ejemplo date={Date()}. */

/* const CurrentDate = (props) => {
  return (
    <div>
      
      <p>The current date is: {props.date} </p>
      
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        
        <CurrentDate date={Date()} />
        
      </div>
    );
  }
}; */

/* ------------------------------------------------------------- */

/* Pasa un arreglo como "props"
El último desafío demostró cómo pasar información desde un componente padre a un componente hijo como props o propiedades. Este desafío busca demostrar cómo se pueden pasar arreglos como props. Para pasar un arreglo a un elemento JSX, debe ser tratado como JavaScript y envolverlo entre llaves.

<ParentComponent>
  <ChildComponent colors={["green", "blue", "red"]} />
</ParentComponent>
El componente hijo entonces tiene acceso a la propiedad del arreglo colors. Los métodos de arreglo, como join() pueden ser usados al acceder a la propiedad. const ChildComponent = (props) => <p>{props.colors.join(', ')}</p> Esto unirá a todos elementos colors del arreglo en una cadena separada por comas y se convertirá en: <p>green, blue, red</p> Más tarde, aprenderemos sobre otros métodos comunes para representar arreglos de datos en React.

Están los componentes List y ToDo en el editor de código. Al renderizar cada List del componente ToDo, pasa una propiedad tasks asignada a un arreglo de tareas pendientes, por ejemplo ["walk dog", "workout"]. Luego, accede a este arreglo de tasks en el componente List, mostrando su valor dentro del elemento p. Usa join(", ") para mostrar el arreglo props.tasks en el elemento p como una lista separada por comas. La lista de hoy debe tener al menos 2 tareas y la de mañana debe tener al menos 3 tareas.

 */

/* const List = (props) => {
  
  return <p>{props.tasks.join(', ')}</p>
  
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        
        <List tasks={["walk dog", "workout", "eat"]}/>
        <h2>Tomorrow</h2>
        <List tasks={["bedtime", "shouder", "study"]}/>
        
      </div>
    );
  }
}; */

/* ------------------------------------------------------------- */

/* Usa props predeterminadas
React también tiene una opción para establecer props predeterminadas. Puedes asignar props predeterminadas a un componente como si fueran una propiedad dentro del propio componente y React asigna la prop predeterminada si es necesario. Esto te permite especificar cuál debe ser el valor de una prop si no se provee un valor específico. Por ejemplo, si declaras MyComponent.defaultProps = { location: 'San Francisco' }, has definido una prop de localización que se establece en la cadena San Francisco, a menos que especifiques lo contrario. React asigna props predeterminadas si estas no están definidas, pero si pasas el valor null como valor para una prop, este permanecerá null.

El editor de código muestra un componente ShoppingCart. Define props predeterminadas en este componente que especifican una prop items con un valor de 0. */

/* const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
    </div>
  )
};

ShoppingCart.defaultProps = { items: 0 } */

/* ------------------------------------------------------------- */

/* Reemplaza las "props" predeterminadas
La capacidad de establecer valores por defecto para las props es una característica útil en React. La manera de reemplazar las props predeterminadas es establecer explícitamente los valores de las props para un componente.

El componente ShoppingCart ahora renderiza un componente hijo Items. Este componente Items tiene una prop predeterminada quantity establecida al entero 0. Reemplaza la prop predeterminada pasando un valor de 10 para quantity.

Nota: Recuerda que la sintaxis para agregar una prop a un componente se parece a la sintaxis para agregar atributos en un elemento HTML. Sin embargo, dado que el valor de quantity es un entero, no irá entre comillas pero debe estar envuelto entre llaves. Por ejemplo, {100}. Esta sintaxis le dice a JSX que interprete el valor dentro de las llaves directamente como JavaScript. */

/* const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
}

Items.defaultProps = {
  quantity: 0
}

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
   
    return <Items quantity={10}/>
   
  }
}; */

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
