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

/* Usa PropTypes para definir las props que esperas
React proporciona características útiles de validación de tipos para verificar que los componentes reciban las props del tipo correcto. Por ejemplo, tu aplicación hace una llamada a un API para obtener datos que se esperan que sea un arreglo, el cual es pasado al componente como una prop. Puedes establecer propTypes en tu componente para que los datos sean de tipo array. Esto arrojará una advertencia útil cuando los datos sean de otro tipo.

Se considera una muy buena práctica definir los propTypes cuando conoces el tipo de una propiedad con antelación. Puedes definir una propiedad propTypes para un componente de la misma manera que defines defaultProps. Al hacer esto, se validará que las props de una clave determinada están presentes con un tipo específico. Aquí hay un ejemplo para validar el tipo function para una prop llamada handleClick:

MyComponent.propTypes = { handleClick: PropTypes.func.isRequired }
En el ejemplo anterior, la parte de PropTypes.func verifica que handleClick es una función. Añadir isRequired le dice a React que handleClick es una propiedad obligatoria para ese componente. Verás una advertencia si no se proporciona esa propiedad. También ten en cuenta que func representa function. Entre los siete tipos primitivos de JavaScript, function y boolean (escrito como bool) son los únicos dos que utilizan ortografía diferente. Además de los tipos primitivos, hay otros tipos disponibles. Por ejemplo, puedes validar si una prop es un elemento React. Por favor, consulta la documentación para todas las opciones.

Nota: A partir de React v15.5.0, PropTypes se importa de manera independiente de React, así: import PropTypes from 'prop-types';

Define propTypes para el componente Items de tal manera que quantity sea una prop obligatoria y verificar que sea de tipo number. */

/* const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};

// Cambia el código debajo de esta línea
Items.propTypes = { quantity: PropTypes.number.isRequired }
// Cambia el código encima de esta línea

Items.defaultProps = {
  quantity: 0
};

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items />
  }
}; */

/* ------------------------------------------------------------- */

/* Accede a propiedades "props" usando this.props
Los últimos desafíos cubrieron las formas básicas de pasar propiedades a un componente hijo. Pero, ¿qué pasa si el componente hijo al que se le pasa una propiedad es un componente de clase ES6, en lugar de un componente funcional sin estado? Los componentes de clase ES6 usan una convención un poco diferente para acceder a las propiedades.

Cada vez que se hace referencia a un componente de clase en sí mismo, se utiliza la palabra clave this. Para acceder a las propiedades dentro de un componente de clase, se antepone al código que se utiliza para acceder a él con this. Por ejemplo, si un componente de clase de ES6 tiene una propiedad llamada data, se escribirá {this.props.data} en JSX.

Renderiza una instancia del componente Welcome en el componente padre App. Aquí, dale a Welcome un prop de name y asígnale un valor de una cadena. Dentro del hijo, Welcome, accede el prop name dentro de las etiquetas strong. */

/* class App extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
            
            <Welcome name="Julian"/>
            
        </div>
    );
  }
};

class Welcome extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
        
          <p>Hello, <strong>{this.props.name}</strong>!</p>
        
        </div>
    );
  }
}; */

/* ------------------------------------------------------------- */

/* Revisa el uso de "props" con componentes funcionales sin estado
Excepto por el último desafío, has estado pasando props a componentes funcionales sin estado. Estos componentes actúan como funciones puras. Aceptan props como entrada y devuelven la misma vista cada vez que se les pasa el mismo props. Tal vez te estes preguntando qué es estado, y el próximo desafío lo cubrirá con más detalle. Antes de eso, aquí hay una revisión de la terminología de los componentes.

Un componente funcional sin estado, es cualquier función que escribas que acepte props y devuelva JSX. Un componente sin estado, por otra parte, es una clase que extiende React.Component, pero no usa el estado interno (que será cubierto en el siguiente desafío). Finalmente, un componente con estado es un componente de clase que mantiene su propio estado interno. Puedes ver componentes con estado referidos simplemente como componentes de React.

Un patrón común es intentar minimizar el estado y crear componentes funcionales sin estado siempre que sea posible. Esto ayuda a contener tu administración de estado a un área específica de tu aplicación. A su vez, esto mejora el desarrollo y el mantenimiento de tu aplicación al facilitar el seguimiento de cómo los cambios de estado afectan a su comportamiento.

El editor de código tiene un componente CampSite que renderiza un componente Camper como un componente hijo. Define el componente Camper y asigna los props predeterminados de { name: 'CamperBot' }. Dentro del componente Camper, renderiza el código que quieras, pero asegúrate de tener un elemento p que incluya sólo el valor name que se pasa como un prop. Por último, define propTypes en el componente Camper para requerir que name sea proporcionado como un prop y verifique que sea de tipo string. */

/* const Camper = props => <p>{props.name}</p>;

Camper.defaultProps = {
  name: "CamperBot"
};

Camper.propTypes = {
  name: PropTypes.string.isRequired
}; */

/* ------------------------------------------------------------- */

/* Crea un componente de estado
Uno de los temas más importantes en React es state. El estado consiste en cualquier dato que tu aplicación necesite conocer y que pueda cambiar con el tiempo. Quieres que tus aplicaciones respondan a los cambios de estado y presenten una interfaz de usuario actualizada cuando sea necesario. React ofrece una buena solución para el manejo de estado de aplicaciones web modernas.

Creas un estado en un componente de React declarando una propiedad state en la clase del componente en su constructor. Esto inicializa el componente con state cuando se crea. La propiedad state debe establecerse en un object de JavaScript. Declararlo se ve así:

this.state = {

}
Tienes acceso al objeto state a lo largo de la vida de tu componente. Puedes actualizarlo, renderizarlo en tu interfaz de usuario y pasarlo como propiedades a componentes hijos. El objeto state puede ser tan complejo o simple como lo necesites. Ten en cuenta que debes crear un componente de clase heredando React.Component para crear un state como este.

Hay un componente en el editor de código que está intentando renderizar una propiedad firstName desde su state. Sin embargo, no hay ningún state definido. Inicia el componente con state en el constructor y asigna tu nombre a la propiedadfirstName. */

/* class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    // Cambia solo el código debajo de esta línea
    this.state = {
      firstName : "Julián"
}

    // Cambia solo el código encima de esta línea
  }
  render() {
    return (
      <div>
        <h1>{this.state.firstName}</h1>
      </div>
    );
  }
}; */

/* ------------------------------------------------------------- */

/* Renderiza el estado en la interfaz de usuario
Una vez que se define el estado inicial de un componente, se puede mostrar cualquier parte del mismo en la interfaz de usuario que se renderiza. Si un componente tiene estado, siempre tendrá acceso a los datos en state en su método render(). Puedes acceder a los datos con this.state.

Si quieres acceder a un valor de estado dentro del return del método de renderización, tienes que encerrar el valor entre llaves.

state es una de las características más poderosas de los componentes de React. Esto te permite realizar un seguimiento de los datos importantes en tu aplicación y generar una interfaz de usuario en respuesta a los cambios en estos datos. Si tus datos cambian, tu interfaz de usuario cambiará. React usa lo que se llama un DOM virtual, para realizar un seguimiento de los cambios detrás de escena. Cuando se actualizan los datos de estado, activa un re-renderizado de los componentes usando esos datos: incluyendo componentes hijos que recibieron los datos como un prop. React actualiza el DOM actual, pero solo cuando sea necesario. Esto significa que no tienes que preocuparte por cambiar el DOM. Tú simplemente declara cómo debe verse la interfaz de usuario.

Ten en cuenta que si creas un componente con estado, ningún otro componente es consciente de su state. Su state está completamente encapsulado, o local a ese componente, a menos que pases datos de estado a un componente hijo como props. Esta noción de state encapsulado, es muy importante porque te permite escribir cierta lógica, luego tener esa lógica contenida y aislada en un lugar de tu código.

En el editor de código, MyComponent ya tiene estado. Define una etiqueta h1 en el método de renderizado del componente que renderiza el valor del name desde el estado del componente.

Note: El h1 solo debe renderizar el valor de state y nada más. En JSX, cualquier código que escribas con llaves { } será tratado como JavaScript. Así que para acceder al valor desde el state solo hay que encerrar la referencia entre llaves. */

/* class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    return (
      <div>
        
        <h1>{this.state.name}</h1>
        
      </div>
    );
  }
}; */

/* ------------------------------------------------------------- */

/* Otra manera de renderizar el estado en la interfaz de usuario
Hay otra manera de acceder al state de un componente. En el método render(), antes de la sentencia return, se puede escribir JavaScript directamente. Por ejemplo, puedes declarar funciones, acceder a datos de state o props, realizar cálculos sobre estos datos, etc. Luego, puedes asignar cualquier dato a las variables, a las que tienes acceso en la sentencia return.

En el método de renderización de MyComponent, define una const llamada name y asígnalo igual al valor del nombre en el state del componente. Debido a que puedes escribir JavaScript directamente en esta parte del código, no tienes que incluir esta referencia entre llaves.

A continuación, en la sentencia return, renderiza este valor en una etiqueta h1 usando la variable name. Recuerda, necesitas usar la sintaxis JSX (llaves para JavaScript) en la sentencia return. */

/* class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    // Cambia el código debajo de esta línea
        const name = this.state.name;
    // Cambia el código encima de esta línea
    return (
      <div>
        
<h1>{name}</h1>
        
      </div>
    );
  }
}; */

/* ------------------------------------------------------------- */

/* Define el estado con this.setState
Los desafíos anteriores cubrieron el componente state y cómo inicializar el state en el constructor. También hay una forma de cambiar el state del componente. React proporciona un método para actualizar el componente state llamado setState. El método setState dentro de tu clase de componente se llama así: this.setState(), pasando un objeto con pares clave-valor. Las claves son tus propiedades de estado y los valores son datos de estado actualizados. Por ejemplo, si estuviéramos almacenando un username en estado y quisiéramos actualizarlo, se vería así:

this.setState({
  username: 'Lewis'
});
React espera que nunca modifiques state directamente. En su lugar, siempre usa this.setState() cuando ocurran cambios de estado. Además, ten en cuenta que React puede agrupar múltiples actualizaciones de estado con el fin de mejorar el rendimiento. Esto significa que las actualizaciones de estado a través del método setState pueden ser asíncronas. Existe una sintaxis alternativa para el método setState que proporciona una forma de evitar ese problema. Esto es raramente necesario, ¡pero es bueno tenerlo en cuenta! Por favor, consulte la documentación de React para más información.

Hay un elemento button en el editor de código que tiene un controlador onClick(). Este controlador es activado cuando el button recibe un evento clic en el navegador, y ejecuta el método handleClick definido en MyComponent. Dentro del método handleClick, actualiza el componente state usando this.setState(). Establece la propiedad name en el state para igualar la cadena React Rocks!.

Haz clic en el botón y observa la actualización de estado renderizada. No te preocupes si no entiendes completamente cómo funciona el código del controlador de clics hasta ahora. Será cubierto en los siguientes desafíos. */

/* class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Initial State'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // Cambia el código debajo de esta línea
    this.setState({
  name: 'React Rocks!'
});

    // Cambia el código encima de esta línea
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}; */

/* ------------------------------------------------------------- */

/* Vincula 'this' a un método de clase
Además de configurar y actualizar state, también puedes definir métodos para tu componente de clase. Un método de clase normalmente necesita usar la palabra clave this para que pueda acceder a propiedades de la clase (como state y props) dentro del ámbito del método. Hay algunas maneras de permitir que los métodos de tu clase accedan a this.

Una forma común es enlazar explícitamente this en el constructor para que this se vincule a los métodos de clase cuando el componente es inicializado. Habrás notado que el último desafío utilizó this.handleClick = this.handleClick.bind(this) para su método handleClick en el constructor. Luego, cuando llamas a una función como this.setState() dentro de su método de clase, this se refiere a la clase y no será undefined.

Nota: La palabra clave this es uno de los aspectos más confusos de JavaScript pero juega un papel importante en React. Aunque su comportamiento aquí es totalmente normal, estas lecciones no son el lugar para una revisión a profundidad de this, así que por favor, ¡consulta otras lecciones si lo anterior es confuso!

El editor de código tiene un componente con un state que mantiene un seguimiento del texto. También tiene un método que le permite establecer el texto a You clicked!. Sin embargo, el método no funciona porque está utilizando la palabra clave this que no está definida. Arréglalo explícitamente ligando this al método handleClick() en el constructor del componente.

A continuación, añade un click handler al elemento button en el método render. Debes activar el método handleClick() cuando el botón recibe un evento de clic. Recuerda que el método que pasas al onClick handler necesita llaves porque debe ser interpretado directamente como JavaScript.

Una vez que completes los pasos anteriores debes poder hacer clic en el botón y ver You clicked!. */

/* class MyComponent extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    name: 'Initial State'
  };
  this.handleClick = this.handleClick.bind(this);
}
handleClick() {
  // change code below this line
  this.setState({
    name: 'React Rocks!'
  });
  // change code above this line
}
render() {
  return (
    <div>
      <button onClick={this.handleClick}>Click Me</button>
      <h1>{this.state.name}</h1>
    </div>
  );
}
}; */

/* ------------------------------------------------------------- */

/* Usa el estado para alternar un elemento
A veces puedes necesitar conocer el estado anterior al actualizar el estado. Sin embargo, las actualizaciones del estado pueden ser asíncronas: esto significa que React puede procesar múltiples llamadas a setState() en una sola actualización. Esto significa que no puedes confiar en el valor anterior de this.state o this.props al calcular el siguiente valor. Por lo tanto, no debes usar código como este:

this.setState({
  counter: this.state.counter + this.props.increment
});
En su lugar, debes pasar una función a setState que te permitirá acceder al estado y props. El usar una función con setState te garantiza que estás trabajando con los valores más actuales del estado y props. Esto significa que lo anterior debe reescribirse así:

this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
También puedes usar un formulario sin props si necesitas solo el state:

this.setState(state => ({
  counter: state.counter + 1
}));
Ten en cuenta que tienes que encapsular el objeto literal entre paréntesis, de lo contrario JavaScript pensará que es un bloque de código.

MyComponent tiene una propiedad visibility que se inicializa con el valor false. El método de renderización devuelve un resultado si el valor de visibility es verdadero, y un resultado diferente si es falso.

Actualmente, no hay forma de actualizar la propiedad visibility en el state del componente. El valor debe cambiar entre verdadero y falso. Hay un manejador para el evento clic en el botón que activa un método de clase llamado toggleVisibility(). Pasa una función a setState para definir este método, de tal forma que el state de visibility cambie al valor opuesto cuando se llame el método. Si visibility es false, el método lo cambia a true y viceversa.

Finalmente, haz clic en el botón para ver la renderizado condicional del componente basado en su state.

Pista: ¡No olvides enlazar la palabra clave this al método en el constructor! */

/* class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    // Cambia el código debajo de esta línea
    this.toggleVisibility = this.toggleVisibility.bind(this);

    // Cambia el código encima de esta línea
  }
  // Cambia el código debajo de esta línea
  toggleVisibility() {
    this.setState(state => {
      if (state.visibility === true) {
         return { visibility: false };
       } else {
         return { visibility: true };
      }
    });
  }


  // Cambia el código encima de esta línea
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
} */

/* ------------------------------------------------------------- */

/* Escribe un contador simple CONTADOR
Puedes diseñar un componente con un estado más complejo combinando los conceptos cubiertos hasta ahora. Estos incluyen inicializar el state, escribir métodos que establezcan state y asignar manejadores de eventos clic para activar estos métodos.

El componente Counter mantiene un seguimiento de un valor count en el state. Hay dos botones que llaman a métodos increment() y decrement(). Escribe estos métodos para que el valor del contador sea incrementado o disminuyendo por 1 cuando se haga clic en el botón apropiado. También, crea un método reset() para que cuando se haga clic en el botón reset, el contador se establezca a 0.

Nota: Asegúrate de no modificar el classNamede los botones. Además, recuerda agregar en el constructor los enlaces necesarios para los métodos recién creados. */

/* class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    // Cambia el código debajo de esta línea
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
    // Cambia el código encima de esta línea
  }
  // Cambia el código debajo de esta línea
  increment() {
    this.setState(state => ({
      count: state.count + 1
    }));
  }
  decrement() {
    this.setState(state => ({
      count: state.count - 1
    }));
  }
  reset() {
    this.setState(state => ({
      count: 0
    }));
  }

  // Cambia el código encima de esta línea
  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
}; */

/* ------------------------------------------------------------- */

/* Crea una entrada controlada
Tu aplicación puede tener interacciones más complejas entre state y la interfaz de usuario renderizada. Por ejemplo, elementos de control de formulario para la entrada de texto, tales como input y textarea, mantienen su propio estado en el DOM como los tipos de usuario. Con React, puedes mover este estado mutable hacia el state de un componente de React. La entrada del usuario se convierte en parte del state de la aplicación, así que React controla el valor de ese campo de entrada. Por lo general, si tienes componentes de React con campos de entrada en los que el usuario puede escribir, será un formulario de entrada controlado.

El editor de código tiene el esqueleto de un componente llamado ControlledInput para crear un elemento input controlado. El state del componente ya está inicializado con una propiedad input que contiene una cadena vacía. Este valor representa el texto que un usuario escribe en el campo input.

Primero, crea un método llamado handleChange() que tiene un parámetro llamado event. Cuando el método es llamado, este recibe un objeto event que contiene una cadena de texto del elemento input. Puedes acceder a esta cadena con event.target.value dentro del método. Actualiza la propiedad input del state del componente con esta nueva cadena.

En el método render, crea el elemento input encima de la etiqueta h4. Añade un atributo value que es igual a la propiedad input del state del componente. Luego añade un manejador de eventos onChange() establecido al método handleChange().

Cuando escribes en el cuadro de entrada, ese texto es procesado por el método handleChange(), establecido como la propiedad input en el state local, y renderizado como el valor en el cuadro input de la página. El state del componente es la única fuente de verdad con respecto a los datos de entrada.

Por último, pero no menos importante, no olvides añadir los enlaces necesarios en el constructor. */

/* class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    // Cambia el código debajo de esta línea
    this.handleChange = this.handleChange.bind(this);

    // Cambia el código encima de esta línea
  }
  // Cambia el código debajo de esta línea
  handleChange(event) {
    this.setState(state => ({
      input: event.target.value
    }));
  }

  // Cambia el código encima de esta línea
  render() {
    return (
      <div>
        
        <input value={this.state.input} onChange={this.handleChange}></input>
        

        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
}; */

/* ------------------------------------------------------------- */

/* Crea un formulario controlado
El último desafío mostró que React puede controlar el estado interno de ciertos elementos como input y textarea, lo que los hace componentes controlados. Esto también se aplica a otros elementos del formulario, incluyendo el elemento regular HTML form.

El componente MyForm está configurado con un form vacío, con un manejador de envío. El manejador de envío será llamado cuando se envíe el formulario.

Hemos añadido un botón que envía el formulario. Puedes ver que tiene el type establecido en submit indicando que es el botón que controla el formulario. Añade el elemento input en el formulario form y establece sus atributos value y onChange() como el último desafío. A continuación, debes completar el método handleSubmit para que establezca la propiedad de estado del componente submit al valor de entrada actual en el state local.

Nota: También debes llamar a event.preventDefault() en el controlador de envío, para evitar el comportamiento predeterminado de envío de formulario que actualizará la página web. Para la comodidad de los campistas, el comportamiento predeterminado se ha desactivado aquí para evitar que las actualizaciones restablezcan el código de desafío.

Por último, crea una etiqueta h1 después del form que renderiza el valor de submit del state del componente. A continuación, puedes escribir en el formulario y hacer clic en el botón (o pulsar intro), y deberías ver tu entrada renderizada en la página. */

/* class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    // Cambia el código debajo de esta línea
    this.setState({
      submit: this.state.input
    })
    event.preventDefault();
    // Cambia el código encima de esta línea
  }
  render() {
    return (

      <div>

        <form onSubmit={this.handleSubmit}>
          <h1>{this.state.submit}</h1>
          
          <input value={this.state.input} onChange={this.handleChange}></input>
         
          <button type='submit'>Submit!</button>
        </form>
        

        
      </div>
    );
  }
} */

/* ------------------------------------------------------------- */

/* Pasa el estado como "props" a componentes hijos
Has visto varios ejemplos que pasaban props a elementos JSX hijos y a componentes React hijos en desafíos anteriores. Te preguntarás de dónde vienen esos props. Un patrón común es tener un componente con estado que contenga el state importante para tu aplicación, que luego renderiza los componentes hijos. Quieres que estos componentes tengan acceso a algunas partes de ese state, el cual se pasa como props.

Por ejemplo, tal vez tengas un componente App que renderiza una Navbar, entre otros componentes. En tu App, tienes un state que contiene mucha información del usuario, pero la Navbar sólo necesita acceder al nombre de usuario para poder mostrarlo. Pasas esa parte del state al componente Navbar como prop.

Este patrón ilustra algunos paradigmas importantes en React. El primero es unidirectional data flow. El componente de estado fluye en una sola dirección descendiendo en el árbol de componentes de tu aplicación, desde el componente padre hasta los componentes hijos. Los componentes hijos únicamente reciben los datos del componente de estado que ellos necesitan. La segunda es que las aplicaciones con estado pueden ser divididas en solo algunos, o tal vez un solo, componente con estado. El resto de tus componentes simplemente reciben el estado del padre como props, y renderizan la interfaz de usuario a partir de ese estado. Esto comienza a crear una separación donde la administración de estado es manejada en una parte del código y la renderización de la interfaz de usuario en otra. Este principio de separar la lógica de estado de la lógica de la interfaz de usuario es uno de los principios clave de React. Cuando se utiliza correctamente, hace que el diseño de aplicaciones complejas y de estado sea mucho más fácil de gestionar.

El componente MyApp es de estado y renderiza un componente Navbar como un componente hijo. Pasa la propiedad name en su state al componente hijo, luego muestra el name en la etiqueta h1 que es parte del método de renderizado de Navbar. name debe aparecer luego del texto Hello, my name is:. */

/* class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'CamperBot'
    }
  }
  render() {
    return (
       <div>
        
         <Navbar name={this.state.name} />
        
       </div>
    );
  }
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
   
      <h1>Hello, my name is: {this.props.name}</h1>
      
    </div>
    );
  }
}; */

/* ------------------------------------------------------------- */

/* Pasa una función callback como "props"
Puedes pasar state como "props" a los componentes hijos, pero no estás limitado a pasar datos. También puedes pasar funciones manejadoras o cualquier método que se defina en un componente React a un componente hijo. Así es como tú permites que los componentes hijos interactúen con sus componentes padres. Pasas métodos a un hijo igual que un "prop" normal. Se le asigna un nombre y tienes acceso a ese nombre de método en this.props en el componente hijo.

Hay tres componentes descritos en el editor de código. El componente MyApp es el padre que renderizará los componentes hijos GetInput y RenderInput. Añade el componente GetInput al método de renderizar en MyApp, luego pásale un "prop" llamado input asignado a inputValue desde el estado state de MyApp. También crea un "prop" llamado handleChange y pasa el controlador de entrada handleChange a este.

A continuación, añade RenderInput al método de renderizar en MyApp, luego crea un "prop" llamado input y pasa el inputValue desde el estado state a este. Una vez que hayas terminado podrás escribir en el campo input en el componente GetInput, que luego llama al método manejador en su padre a través de "props". Esto actualiza la entrada en el state del padre, que se pasa como "props" a ambos hijos. Observa cómo fluyen los datos entre los componentes y cómo la única fuente de verdad sigue siendo el state del componente padre. Es cierto que este ejemplo es un poco inventado, pero debe servir para ilustrar cómo los datos y las funciones callback pueden ser pasados entre componentes React. */

/* class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  render() {
    return (
       <div>
        
        <GetInput
        input={this.state.inputValue}
        handleChange={this.handleChange}/>
      <RenderInput
        input={this.state.inputValue}/>
     
    </div>
 );
}
};

class GetInput extends React.Component {
constructor(props) {
 super(props);
}
render() {
 return (
   <div>
     <h3>Get Input:</h3>
     <input
       value={this.props.input}
       onChange={this.props.handleChange}/>
   </div>
 );
}
};

class RenderInput extends React.Component {
constructor(props) {
 super(props);
}
render() {
 return (
   <div>
     <h3>Input Render:</h3>
     <p>{this.props.input}</p>
   </div>
 );
}
}; */

/* ------------------------------------------------------------- */

/* Usa el método de ciclo de vida componentWillMount
Los componentes React tienen varios métodos especiales que proporcionan oportunidades para realizar acciones en puntos específicos en el ciclo de vida de un componente. Estos se llaman métodos de ciclo de vida, o interceptores (hooks) de ciclo de vida, y te permiten interceptar componentes en determinados momentos del tiempo. Esto puede ser antes de que se rendericen, antes de que se actualicen, antes de que reciban las props, antes de que se desmonten, etc. Aquí hay una lista de algunos de los métodos principales del ciclo de vida: componentWillMount() componentDidMount() shouldComponentUpdate() componentDidUpdate() componentWillUnmount(). Las siguientes lecciones cubrirán algunos de los casos de uso básicos para estos métodos del ciclo de vida.

Nota: El método de ciclo de vida componentWillMount se desaprobará en una versión futura de 16.X y se eliminará en la versión 17. Más información en este artículo

El método componentWillMount() es invocado antes del método render() cuando un componente está siendo montado en el DOM. Imprime algo en la consola dentro de componentWillMount() - puede que quieras tener la consola del navegador abierta para ver el resultado. */

/* class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    // Cambia el código debajo de esta línea
  console.log('Hola Mundo');

    // Cambia el código encima de esta línea
  }
  render() {
    return <div />
  }
}; */

/* ------------------------------------------------------------- */

/* Usa el método de ciclo de vida componentDidMount
La mayoría de los desarrolladores web, en algún momento, necesitan llamar al endpoint de un API para obtener datos. Si estás trabajando con React, es importante saber dónde realizar esta acción.

La mejor práctica con React es ubicar las llamadas API o cualquier llamada a tu servidor en el método de ciclo de vida componentDidMount(). Este método se llama después de que un componente es montado (mounted) en el DOM. Cualquier llamada a setState() aquí desencadenará un re-renderizado de tu componente. Cuando se llame a una API en este método, y se modifique el estado con los datos que la API devuelve, automáticamente se ejecutará una actualización una vez que los datos sean recibidos.

Hay una llamada simulada al API en componentDidMount(). Esta llamada modifica el estado después de 2.5 segundos para simular una llamada a un servidor para obtener datos. Este ejemplo consulta el total de usuarios activos actual para un sitio. En el método render, se renderiza el valor de activeUsers en el h1 después del texto Active Users:. Mira lo que sucede en la vista previa, y siéntete libre de cambiar el tiempo de espera para ver los diferentes efectos. */

/* class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: null
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        activeUsers: 1273
      });
    }, 2500);
  }
  render() {
    return (
      <div>
        
        <h1>Active Users: {this.state.activeUsers} </h1>
        
      </div>
    );
  }
} */

/* ------------------------------------------------------------- */

/* Agrega detectores de eventos (Event Listeners)
El método componentDidMount() es también el mejor lugar para adjuntar cualquier detector de eventos que necesites agregar para una funcionalidad específica. React proporciona un sistema de eventos sintético que envuelve el sistema de eventos nativo presente en los navegadores. Esto significa que el sistema de eventos sintético se comporta exactamente igual independientemente del navegador del usuario, incluso si los eventos nativos se comportan diferentes entre diferentes navegadores.

Ya has estado usando algunos de estos controladores de eventos sintéticos como onClick(). El sistema de eventos sintéticos de React es excelente para usar en la mayoría de las interacciones que administrarás en elementos DOM. Sin embargo, si quieres adjuntar un controlador de eventos al documento o objetos de la ventana, debes hacerlo directamente.

Agrega un detector de eventos en el método componentDidMount() para los eventos keydown y haz que estos eventos ejecuten la función callback handleKeyPress(). Puedes usar document.addEventListener() el cual toma el evento (en comillas) como primer argumento y la función callback como segundo argumento.

Posteriormente, en componentWillUnmount(), remueve este mismo detector de eventos. Puedes pasar los mismos argumentos al document.removeEventListener(). Es buena práctica usar este método del ciclo de vida para hacer cualquier limpieza en un componente de React antes de que estos sean desmontados y destruidos. Removiendo los detectores de eventos es un ejemplo de una limpieza de este tipo. */

/* class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  // Cambia el código debajo de esta línea
  componentDidMount() {
    document.addEventListener("keydown",this.handleKeyPress)
  }
  componentWillUnmount() {
    document.removeEventListener("keydown",this.handleKeyPress)
  }
  // Cambia el código encima de esta línea
  handleEnter() {
    this.setState((state) => ({
      message: state.message + 'You pressed the enter key! '
    }));
  }
  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.handleEnter();
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}; */

/* ------------------------------------------------------------- */

/* Optimiza re-renderizadores con shouldComponentUpdate
Hasta ahora, si cualquier componente recibe un nuevo state o un nuevo props, se vuelve a renderizar a sí mismo y a todos sus hijos. Normalmente, esto está bien. Pero React proporciona un método de ciclo de vida al que puedes llamar cuando los componentes hijos reciben nuevos state o props, y declarar específicamente si los componentes deben actualizarse o no. El método es shouldComponentUpdate(), y toma nextProps y nextState como parámetros.

Este método es una forma útil de optimizar el rendimiento. Por ejemplo, el comportamiento predeterminado es que el componente re-renderiza cuando recibe nuevos props, incluso si los props no han cambiado. Puedes usar shouldComponentUpdate() para evitar esto comparando los props. El método debe devolver un valor boolean que le diga a React si actualizar o no el componente. Puedes comparar los "props" actuales (this.props) a los siguientes "props" (nextProps) para determinar si necesita actualizar o no, y devuelve true o false en consecuencia.

El método shouldComponentUpdate() se añade en un componente llamado OnlyEvens. Actualmente, este método devuelve true, así que OnlyEvens re-renderiza cada vez que recibe nuevos props. Modifica el método para que OnlyEvens se actualice sólo si el value de sus nuevos "props" es par. Haz clic en el botón Add y observa el orden de los eventos en la consola de tu navegador mientras se activan los "hooks" del ciclo de vida. */

/* class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should I update?');
    // Cambia el código debajo de esta línea
    if(nextProps.value % 2 === 0){
    return true;
    } return false;
    // Cambia el código encima de esta línea
  }
  componentDidUpdate() {
    console.log('Component re-rendered.');
  }
  render() {
    return <h1>{this.props.value}</h1>;
  }
}

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.addValue = this.addValue.bind(this);
  }
  addValue() {
    this.setState(state => ({
      value: state.value + 1
    }));
  }
  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value} />
      </div>
    );
  }
} */

/* ------------------------------------------------------------- */

/* Introducción a los estilos en línea
Hay otros conceptos complejos que añaden poderosas capacidades a tu código de React. Pero tal vez te estés preguntando sobre el problema más sencillo de cómo dar estilo a esos elementos JSX que creas en React. Probablemente sepas que no será exactamente lo mismo que trabajar con HTML debido a la manera en que aplicas clases a los elementos JSX.

Si importas estilos desde una hoja de estilos, esto no es muy diferente. Aplica una clase a tu elemento JSX usando el atributo className, y aplica estilos a la clase en tu hoja de estilos. Otra opción es aplicar estilos en línea, los cuales son muy comunes en el desarrollo de ReactJS.

Los estilos en línea se aplican a los elementos JSX de forma similar a como se hace en HTML, pero con algunas diferencias en JSX. Aquí hay un ejemplo de un estilo en línea en HTML:

<div style="color: yellow; font-size: 16px">Mellow Yellow</div>
Los elementos JSX usan el atributo style, pero debido a la forma en que JSX es transpilado, no puede establecer el valor a un string. Es su lugar, lo establece igual a un object de JavaScript. Aquí un ejemplo:

<div style={{color: "yellow", fontSize: 16}}>Mellow Yellow</div>
¿Notas cómo ponemos en camelCase la propiedad fontSize? Esto es porque React no aceptará claves kebab-case en el objeto de estilo. React aplicará el nombre correcto de la propiedad por nosotros en el HTML.

Agrega un atributo style al div en el editor de código para darle al texto un color rojo y un tamaño de fuente de 72px.

Ten en cuenta que puedes establecer opcionalmente el tamaño de la fuente para que sea un número, omitiendo las unidades px, o escribirlo como 72px. */

/* class Colorful extends React.Component {
  render() {
    return (
      <div style={{color: "red", fontSize: "72px"}}>Big Red</div>
    );
  }
}; */

/* ------------------------------------------------------------- */

/* Agrega inline styles en React
Es posible que hayas notado en el último desafío que había otras diferencias de sintaxis con respecto a los "inline styles" (estilos en línea) de HTML, además del atributo style establecido en un objeto de JavaScript. En primer lugar, los nombres de ciertas propiedades de estilo CSS utilizan camel case. Por ejemplo, el último desafío establece el tamaño de la fuente con fontSize en lugar de font-size. Palabras que incluyen guion como font-size son sintaxis inválidas para propiedades de objetos de JavaScript, por lo que React utiliza camel case. Como regla, cualquier propiedad de estilo que usa guion se escribe usando camel case en JSX.

Todas las unidades de longitud del valor de la propiedad (como height, width, y fontSize) se supone que están en px a menos que se especifique lo contrario. Si quieres utilizar em, por ejemplo, debes envolver el valor y las unidades entre comillas, como {fontSize: "4em"}. Aparte de los valores de longitud que por defecto son px, todos los demás valores de las propiedades deben estar envueltos entre comillas.

Si tienes una gran cantidad de estilos, puedes asignar un object de estilos a una constante para mantener tu código organizado. Declara tu constante "styles" como una variable global al principio del archivo. Inicializa la constante styles y asígnale un object con tres propiedades de estilo y sus valores. Dale al div un color purple, un tamaño de fuente de 40 y un borde 2px solid purple. Luego asigna al atributo style la constante styles. */

/* 
// Cambia el código encima de esta línea

const styles={color:"purple", fontSize:40, border: "2px solid purple" }

class Colorful extends React.Component {
  render() {
    // Cambia el código debajo de esta línea
    return (
      <div style={styles}>Style Me!</div>
    );
    // Cambia el código encima de esta línea
  }
}; */

/* ------------------------------------------------------------- */

/* Usa JavaScript avanzado en el método render de React
En desafíos anteriores, aprendiste cómo inyectar código JavaScript en código JSX usando llaves, { }, para tareas como acceder a props, pasar props, acceder al state, insertar comentarios en tu código y, más recientemente, diseñar tus componentes. Todos estos son casos de uso común para poner JavaScript en JSX, pero no son la única manera de utilizar código JavaScript en tus componentes React.

También puedes escribir JavaScript directamente en los métodos render, antes de la sentencia return, sin insertarlo dentro de llaves. Esto es porque aún no está dentro del código JSX. Cuando quieras utilizar una variable en el código JSX dentro de la sentencia return, colocas el nombre de la variable dentro de llaves.

En el código proporcionado, el método render tiene un arreglo que contiene 20 frases para representar las respuestas encontradas en el clásico juego "Magic Eight Ball" de los años ochenta. El evento clic del botón está vinculado al método ask, por lo que cada vez que se haga clic en el botón se generará un número aleatorio y se almacenará como el randomIndex en el state. En la línea 52, elimina la cadena change me! y reasigna la constante answer para que tu código acceda aleatoriamente a un índice diferente del arreglo possibleAnswers cada vez que se actualiza el componente. Finalmente, inserta la constante answer dentro de las etiquetas p. */

/* const inputStyle = {
  width: 235,
  margin: 5
};

class MagicEightBall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      randomIndex: ''
    };
    this.ask = this.ask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  ask() {
    if (this.state.userInput) {
      this.setState({
        randomIndex: Math.floor(Math.random() * 20),
        userInput: ''
      });
    }
  }
  handleChange(event) {
    this.setState({
      userInput: event.target.value
    });
  }
  render() {
    const possibleAnswers = [
      'It is certain',
      'It is decidedly so',
      'Without a doubt',
      'Yes, definitely',
      'You may rely on it',
      'As I see it, yes',
      'Outlook good',
      'Yes',
      'Signs point to yes',
      'Reply hazy try again',
      'Ask again later',
      'Better not tell you now',
      'Cannot predict now',
      'Concentrate and ask again',
      "Don't count on it",
      'My reply is no',
      'My sources say no',
      'Most likely',
      'Outlook not so good',
      'Very doubtful'
    ];
    const answer = possibleAnswers[this.state.randomIndex]; // Cambia esta línea
    return (
      <div>
        <input
          type='text'
          value={this.state.userInput}
          onChange={this.handleChange}
          style={inputStyle}
        />
        <br />
        <button onClick={this.ask}>Ask the Magic Eight Ball!</button>
        <br />
        <h3>Answer:</h3>
        <p>
          
          {answer}
          
        </p>
      </div>
    );
  }
} */

/* ------------------------------------------------------------- */

/* Renderiza con una condición If-Else
Otra aplicación del uso de JavaScript para controlar la vista renderizada es vincular los elementos que se renderizan a una condición. Cuando la condición es verdadera (true), se renderiza una vista. Cuando es falso (false), es una vista diferente. Puedes hacer esto con una sentencia estándar if/else en el método render() de un componente React.

MyComponent contiene un boolean en su estado que rastrea si deseas mostrar algún elemento en la interfaz de usuario o no. El button alterna el estado de este valor. Actualmente, renderiza la misma interfaz de usuario cada vez. Reescribir el método render() con una sentencia if/else de modo que si display es true, devuelvas el marcado actual. De lo contrario, devuelve el marcado sin el elemento h1.

Note: Debes escribir un if/else para pasar las pruebas. El uso del operador ternario no pasará aquí. */

/* class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState((state) => ({
      display: !state.display
    }));
  }
  render() {
    // Cambia el código debajo de esta línea
    if (this.state.display) {
      return (
        <div>
          <button onClick={this.toggleDisplay}>Toggle Display</button>
          <h1>Displayed!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleDisplay}>Toggle Display</button>

        </div>
      );
    }

  }
}; */

/* ------------------------------------------------------------- */

/* Usa && para una condicional más concisa
Las sentencias if/else funcionaron en el último desafío, pero hay una manera más concisa de lograr el mismo resultado. Imagina que estás rastreando varias condiciones en un componente y deseas que diferentes elementos se rendericen dependiendo de cada una de estas condiciones. Si escribes un montón de sentencias else if para devolver UIs ligeramente diferentes, puedes repetir código que deja espacio para el error. En su lugar, puedes usar el operador lógico && para realizar lógica condicional de una manera más concisa. Esto es posible porque quieres comprobar si una condición es true, y si es así, devuelve algún código. A continuación un ejemplo:

{condition && <p>markup</p>}
Si la condition es true, el código será devuelto. Si la condición es false, la operación devolverá inmediatamente false después de evaluar la condition y no devolverá nada. Puedes incluir estas sentencias directamente en tu JSX y encadenar varias condiciones juntas escribiendo && después de cada uno. Esto te permite manejar una lógica condicional más compleja en tu método render() sin repetir un montón de código.

Resuelve el ejemplo anterior de nuevo, de este modo el h1 solo renderiza si display es true, pero usa el operador lógico && en lugar de una sentencia if/else.- */

/* class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState(state => ({
      display: !state.display
    }));
  }
  render() {
    // Cambia el código debajo de esta línea
    return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
         {this.state.display && <h1>Displayed!</h1>}
       </div>
    );
  }
}; */

/* ------------------------------------------------------------- */

/* Utiliza una expresión ternaria para el renderizado condicional
Antes de pasar a técnicas de renderizado dinámico, hay una última forma de usar condicionales de JavaScript incorporados para representar lo que quieres: el operador ternario. El operador ternario a menudo es utilizado como un acceso directo para las sentencias if/else en JavaScript. No son tan robustas como las sentencias tradicionales if/else, pero son muy populares entre los desarrolladores de React. Una de las razones de esto es debido a cómo se compila JSX, las sentencias if/else no se pueden insertar directamente en el código JSX. Puede que hayas notado esto hace un par de desafíos, cuando se requirió una sentencia if/else, siempre estaba fuera de la sentencia return. Las expresiones ternarias pueden ser una excelente alternativa si deseas implementar lógica condicional dentro de tu JSX. Recuerda que un operador ternario tiene tres partes, pero puedes combinar varias expresiones ternarias juntas. Aquí está la sintaxis básica:

condition ? expressionIfTrue : expressionIfFalse;
El editor de código tiene tres constantes definidas dentro del método render() del componente CheckUserAge. Estas se llaman buttonOne, buttonTwo y buttonThree. A cada una de estas se le asigna una expresión JSX simple que representa un elemento de botón. Primero, inicializa el estado de CheckUserAge con input y userAge ambos configurados a valores de una cadena vacía.

Una vez que el componente está renderizando información a la página, los usuarios deberían tener una forma de interactuar con ella. Dentro de la declaración return del componente, configura una expresión ternaria que implementa la siguiente lógica: cuando la página carga por primera vez, renderiza el botón de envío, buttonOne, a la página. Luego, cuando un usuario ingrese su edad y haga clic en el botón, renderiza un botón diferente basado en la edad. Si un usuario introduce un número menor que 18, renderiza buttonThree. Si un usuario introduce un número mayor o igual a 18, renderiza buttonTwo. */

/* const inputStyle = {
  width: 235,
  margin: 5
};

class CheckUserAge extends React.Component {
  constructor(props) {
    super(props);
    // Cambia el código debajo de esta línea
    this.state = {
      input: "",
      userAge: ""
    }

    // Cambia el código encima de esta línea
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      input: e.target.value,
      userAge: ''
    });
  }
  submit() {
    this.setState(state => ({
      userAge: state.input
    }));
  }
  render() {
    const buttonOne = <button onClick={this.submit}>Submit</button>;
    const buttonTwo = <button>You May Enter</button>;
    const buttonThree = <button>You Shall Not Pass</button>;
    return (
      <div>
        <h3>Enter Your Age to Continue</h3>
        <input
          style={inputStyle}
          type='number'
          value={this.state.input}
          onChange={this.handleChange}
        />
        <br />
        
        {
          this.state.userAge === ''
            ? buttonOne
            : this.state.userAge >= 18
              ? buttonTwo
              : buttonThree
        }
        
      </div>
    );
  }
} */

/* ------------------------------------------------------------- */

/* Renderiza condicionalmente a partir de "props"
Hasta ahora, has visto cómo utilizar if/else, &&, y el operador ternario (condition ? expressionIfTrue : expressionIfFalse) para tomar decisiones condicionales sobre qué renderizar y cuándo. Sin embargo, queda un tema importante por discutir que te permite combinar cualquiera o todos estos conceptos con otra poderosa característica de React: las props. El uso de props para renderizar condicionalmente el código es muy común entre los desarrolladores de React, es decir, utilizan el valor de una prop dada para automáticamente tomar decisiones sobre qué renderizar.

En este desafío, configurarás un componente hijo para tomar decisiones de renderizado basadas en props. También usarás el operador ternario, pero puedes ver cómo varios de los otros conceptos que se cubrieron en los últimos desafíos podrían ser igual de útiles en este contexto.

El editor de código tiene dos componentes que están parcialmente definidos para ti: un padre llamado GameOfChance, y un hijo llamado Results. Se utilizan para crear un juego sencillo en el que el usuario presiona un botón para ver si gana o pierde.

Primero, necesitarás una expresión simple que devuelva al azar un valor diferente cada vez que se ejecute. Puedes usar Math.random(). Este método devuelve un valor entre 0 (inclusivo) y 1 (exclusivo) cada vez que se llama. Así que para las probabilidades de 50/50, usa Math.random() >= .5 en tu expresión. Estadísticamente hablando, esta expresión devolverá true 50% de las veces, y false el otro 50%. En el método de renderizado, reemplaza null con la expresión anterior para completar la declaración de variables.

Ahora tienes una expresión que puedes usar para tomar una decisión aleatoria en el código. A continuación, debes implementar esto. Renderiza el componente Results como hijo de GameOfChance, y pásalo a expression como un prop llamado fiftyFifty. En el componente Results, escribe una expresión ternaria para renderizar el elemento h1 con el texto You Win! o You Lose! basado en el prop fiftyFifty que está siendo pasado desde GameOfChance. Finalmente, asegúrate de que el método handleClick() está contando correctamente cada turno para que el usuario sepa cuántas veces ha jugado. Esto también sirve para que el usuario sepa que el componente se ha actualizado en caso de que gane o pierda dos veces seguidas. */

/* class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    
    return <h1>{this.props.fiftyFifty ? "You Win!" : "You Lose!"}</h1>;

    
  }
}

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => {
      // Completa la sentencia return:
      return {
        counter: this.state.counter + 1
      }
    });
  }
  render() {
    const expression = Math.random() >= .5 ? true : false; // Cambia esta línea
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
   
        <Results fiftyFifty={expression} />
       
        <p>{'Turn: ' + this.state.counter}</p>
      </div>
    );
  }
} */

/* ------------------------------------------------------------- */

/* Cambia el CSS inline condicionalmente según el estado del componente
Hasta ahora has visto varias aplicaciones de renderizado condicional y el uso de inline styles. Aquí va un ejemplo más que combina los dos temas. También puedes renderizar CSS condicionalmente según el estado de un componente de React. Para hacer esto, tienes que verificar una condición, y si esa condición se cumple, modificas el objeto de estilos que está asignado a los elementos JSX del método render.

Este paradigma es importante entenderlo porque es un cambio dramático del enfoque más tradicional de aplicar estilos modificando elementos del DOM directamente (muy común con jQuery, por ejemplo). Con ese enfoque, debes hacer un seguimiento de cuándo cambian los elementos y también manejar directamente la manipulación. Puede resultar difícil hacer un seguimiento de los cambios, lo que podría hacer que tu interfaz de usuario sea impredecible. Cuando configuras un objeto de estilo en función de una condición, estás describiendo cómo debería verse la interfaz de usuario en función del estado de la aplicación. Existe un flujo claro de información que sólo se mueve en una dirección. Este es el método preferido para escribir aplicaciones con React.

El editor de código tiene un simple componente de entrada controlado, con un estilo de borde. Quieres aplicar un estilo rojo a este borde si el usuario escribe más de 15 caracteres de texto en la casilla de entrada. Agrega una condición para verificarlo y, si la condición es válida, establece el estilo del borde de la casilla de entrada como 3px solid red. Puedes probarlo introduciendo texto en la casilla de entrada. */

/* class GateKeeper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ input: event.target.value })
  }
  render() {
    let inputStyle = {
      border: '1px solid black'
    };
    // Cambia el código debajo de esta línea
    let redStyle = {
      border: '3px solid red'
    };

    // Cambia el código encima de esta línea
    return (
      <div>
        <h3>Don't Type Too Much:</h3>
        <input
          type="text"
          style={this.state.input.length>15 ? redStyle : inputStyle}
          value={this.state.input}
          onChange={this.handleChange} />
      </div>
    );
  }
}; */

/* ------------------------------------------------------------- */

/* TODO LIST */

/* Utiliza Array.map() para renderizar dinámicamente los elementos
El renderizado condicional es útil, pero es posible que necesites tus componentes para renderizar un número desconocido de elementos. A menudo en la programación reactiva, un programador no tiene forma de saber cuál es el estado de una aplicación hasta el tiempo de ejecución, porque mucho depende de la interacción de un usuario con ese programa. Los programadores necesitan escribir su código para manejar correctamente ese estado desconocido antes de tiempo. Usar Array.map() en React ilustra este concepto.

Por ejemplo, crea una aplicación simple "To Do List". Como programador, no tienes forma de saber cuántos elementos puede tener un usuario en su lista. Necesitas configurar tu componente para renderizar dinámicamente el número correcto de elementos de la lista mucho antes de que alguien que use el programa decida que hoy es día de lavandería.

El editor de código tiene la mayoría del componente MyToDoList configurado. Parte de este código debería parecer familiar si completaste el desafío de formulario controlado. Vas a notar un textarea y un button, junto con un par de métodos que rastrean sus estados, pero aún no se muestra nada a la página.

Dentro del constructor, crea un objeto this.state y define dos estados: userInput que debe inicializarse como una cadena vacía, y toDoList que debe inicializarse como un arreglo vacío. Luego, elimina el valor null del método render() a un costado de la variable items. En su lugar, utiliza la función map() para recorrer el arreglo toDoList almacenado en el estado interno del componente y renderizar un li por cada artículo. Intenta introducir la cadena eat, code, sleep, repeat dentro del textarea, haz clic en el botón y ve qué sucede.

Nota: Puede que sepas que todos los elementos hijos hermanos creados por una operación map como ésta necesitan poseer un atributo key único. No te preocupes, este es el tema de nuestro próximo desafío.

 */

/* const textAreaStyles = {
  width: 235,
  margin: 5
};

class MyToDoList extends React.Component {
  constructor(props) {
    super(props);
    // Cambia el código debajo de esta línea
    this.state = {
      userInput: "",
      toDoList: []
    }

    // Cambia el código encima de esta línea
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit() {
    const itemsArray = this.state.userInput.split(',');
    this.setState({
      toDoList: itemsArray
    });
  }
  handleChange(e) {
    this.setState({
      userInput: e.target.value
    });
  }
  render() {
    const items = this.state.toDoList.map(i=> <li>{i}</li>); // Cambia esta línea
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          placeholder='Separate Items With Commas'
        />
        <br />
        <button onClick={this.handleSubmit}>Create List</button>
        <h1>My "To Do" List:</h1>
        <ul>{items}</ul>
      </div>
    );
  }
} */

/* ------------------------------------------------------------- */

/* Proporciona a los elementos hermanos un atributo de clave única
El último desafío mostró cómo el método map es usado para representar dinámicamente un número de elementos según la entrada del usuario. Sin embargo, faltaba una pieza importante de ese ejemplo. Cuando creas un arreglo de elementos, cada uno necesita un atributo key establecido en un valor único. React usa estas claves para realizar un seguimiento de los elementos que se agregan, cambian o eliminan. Esto ayuda a que el proceso de re-renderización sea más eficiente cuando la lista se modifica de alguna manera.

Nota: Las claves solo necesitan ser únicas entre elementos hermanos, no es necesario que sean globalmente únicas en tu aplicación.

El editor de código tiene un arreglo con algunos frameworks frontend y un componente funcional sin estado llamado Frameworks(). Frameworks() necesita mapear (asignar) el arreglo a una lista desordenada, como en el último desafío. Finaliza la escritura de la función callback map para devolver un elemento li por cada framework en el arreglo frontEndFrameworks. Esta vez, debes asegurarte de dar a cada elemento li un atributo key, establecido a un valor único. Los elementos li también deben contener texto de frontEndFrameworks.

Normalmente, deseas hacer que la clave sea algo que identifique de manera única el elemento que se está procesando. Como último recurso se puede utilizar el índice del arreglo, pero normalmente se debe intentar usar una identificación única. */

/* const frontEndFrameworks = [
  'React',
  'Angular',
  'Ember',
  'Knockout',
  'Backbone',
  'Vue'
];



function Frameworks() {
  const renderFrameworks = frontEndFrameworks.map(i=><li key={i}>{i}</li>); // Cambia esta línea
  return (
    <div>
      <h1>Popular Front End JavaScript Frameworks</h1>
      <ul>
        {renderFrameworks}
      </ul>
    </div>
  );
}; */

/* ------------------------------------------------------------- */

/* Usa Array.filter() para filtrar dinámicamente un arreglo
El método de arreglo map es una potente herramienta que puedes usar a menudo al trabajar con React. Otro método relacionado con map es filter, que filtra el contenido de un arreglo basado en una condición, luego devuelve un nuevo arreglo. Por ejemplo, si tienes un arreglo de usuarios que todos tienen una propiedad online que puede establecerse en true o false, puedes filtrar sólo aquellos usuarios que estén en línea escribiendo:

let onlineUsers = users.filter(user => user.online);
En el editor de código, el state de MyComponent es inicializado con un arreglo de usuarios. Algunos usuarios están conectados y otros no. Filtra el arreglo para que sólo veas a los usuarios que están en línea. Para hacer esto, primero usa filter para devolver un nuevo arreglo que contiene solo a los usuarios cuya propiedad online es true. Luego, en la variable renderOnline, asigna sobre el arreglo filtrado, y devuelve un elemento li para cada usuario que contiene el texto de su username. Asegúrate de incluir también una única key, como en los últimos desafíos.

 */

/* class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          username: 'Jeff',
          online: true
        },
        {
          username: 'Alan',
          online: false
        },
        {
          username: 'Mary',
          online: true
        },
        {
          username: 'Jim',
          online: false
        },
        {
          username: 'Sara',
          online: true
        },
        {
          username: 'Laura',
          online: true
        }
      ]
    };
  }
  render() {
    const usersOnline = this.state.users.filter(user => user.online === true); // Cambia esta línea
    const renderOnline = usersOnline.map(user => <li key={user.username}>{user.username}</li>); // Cambia esta línea
    return (
      <div>
        <h1>Current Online Users:</h1>
        <ul>{renderOnline}</ul>
      </div>
    );
  }
} */

/* ------------------------------------------------------------- */

/* Renderiza React en el servidor con renderToString
Hasta ahora, has estado renderizando componentes React en el cliente. Normalmente, esto es lo que siempre harás. Sin embargo, hay algunos casos de uso donde tiene sentido renderizar un componente React en el servidor. Dado que React es una librería de vistas de JavaScript y se puede ejecutar JavaScript en el servidor con Node, esto es posible. De hecho, React proporciona un método renderToString() que puedes usar para este propósito.

Hay dos razones clave por las que el renderizado en el servidor puede ser usado en una aplicación del mundo real. Primero, sin hacer esto, tus aplicaciones de React consistirían en un archivo HTML relativamente vacío y un gran paquete de JavaScript cuando se carga inicialmente en el navegador. Esto puede no ser ideal para motores de búsqueda que intentan indexar el contenido de tus páginas para que la gente pueda encontrarte. Si renderizas el código HTML inicial en el servidor y lo envía al cliente, la carga de la página inicial contiene todo el código de la página que los motores de búsqueda pueden rastrear. Segundo, esto crea una experiencia de carga de página inicial más rápida porque el HTML renderizado es más pequeño que el código JavaScript de toda la aplicación. React aún podrá reconocer tu aplicación y administrarla después de la carga inicial.

El método renderToString() se proporciona en ReactDOMServer, el cual está disponible aquí como un objeto global. El método toma un argumento que es un elemento React. Usa esto para renderizar App a una cadena. */

/* ------------------------------------------------------------- */

/* ------------------------------------------------------------- */

/* ------------------------------------------------------------- */

/* ------------------------------------------------------------- */
