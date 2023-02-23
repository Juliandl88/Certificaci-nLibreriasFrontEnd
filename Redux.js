/* ---------------------------------------------------------------*/

/* Redux
A medida que las aplicaciones crecen en tamaño y alcance, la gestión de datos compartidos se vuelve mucho más difícil. Redux se define como un "contenedor de estado predecible para aplicaciones de JavaScript" que ayuda a asegurar que tus aplicaciones funcionen de manera predecible, y sean más fáciles de probar.

Aunque puedes usar Redux con cualquier librería de vistas, aquí introducimos Redux antes de combinarlo con React en los siguientes capítulos del curso.

En este curso, aprenderás los fundamentos de almacenamiento en Redux, así como de las acciones, reductores e intermediarios para administrar datos a lo largo de tu aplicación.*/

/* ---------------------------------------------------------------*/

/* Crea un almacén Redux
Redux es un framework de gestión de estados que se puede utilizar con un número de diferentes tecnologías web, incluyendo React.

En Redux, hay un único objeto de estado que es responsable de todo el estado de tu aplicación. Esto significa que si tuvieras una aplicación React con diez componentes, y cada componente tuviera su propio estado local, todo el estado de tu aplicación estaría definido por un único objeto de estado alojado en el store (almacén) de Redux. Este es el primer principio importante a entender cuando se aprende Redux: el almacén Redux es la única fuente de verdad cuando se trata del estado de la aplicación.

Esto también significa que cada vez que cualquier pieza de tu aplicación quiera actualizar el estado, debe hacerlo a través del almacén Redux. El flujo de datos unidireccional facilita el seguimiento de la gestión de estados en tu aplicación.

El store (almacén) de Redux es un objeto que guarda y gestiona el state (estado) de la aplicación. Hay un método llamado createStore() en el objeto Redux, que se utiliza para crear el store Redux. Este método toma una función reducer como argumento obligatorio. La función reducer se trata en un desafío posterior, y ya está definida para ti en el editor de código. Simplemente toma state como argumento y devuelve state.

Declara una variable store y asígnala al método createStore(), pasando el reducer como argumento.

Nota: El código del editor utiliza la sintaxis de los argumentos por defecto de ES6 para inicializar este estado y mantener un valor de 5. Si no está familiarizado con los argumentos predeterminados, puede consultar elES6 section in the Curriculum que cubre este tema.*/

/* const reducer = (state = 5) => {
  return state;
}

// Los métodos Redux están disponibles desde un objeto Redux
// Por ejemplo: Redux.createStore()
// Define el store aquí:

let store = Redux.createStore(reducer);*/

/* ---------------------------------------------------------------*/

/* Obtén el estado del almacén Redux
El objeto almacén Redux proporciona varios métodos que permiten interactuar con él. Por ejemplo, puedes recuperar el state actual que tiene el objeto almacén Redux con el método getState().

El código del desafío anterior se reescribe de forma más concisa en el editor de código. Utiliza store.getState() para recuperar el state del store, y asígnalo a una nueva variable currentState.*/

/* const store = Redux.createStore(
  (state = 5) => state
);

// Cambia el código debajo de esta línea

let currentState = store.getState()-*/

/* ---------------------------------------------------------------*/

/* ---------------------------------------------------------------*/

/* ---------------------------------------------------------------*/

/* ---------------------------------------------------------------*/

/* ---------------------------------------------------------------*/

/* ---------------------------------------------------------------*/

/* ---------------------------------------------------------------*/

/* ---------------------------------------------------------------*/

/* ---------------------------------------------------------------*/

/* ---------------------------------------------------------------*/

/* ---------------------------------------------------------------*/

/* ---------------------------------------------------------------*/

/* ---------------------------------------------------------------*/

/* ---------------------------------------------------------------*/

/* ---------------------------------------------------------------*/

/* ---------------------------------------------------------------*/

/* ---------------------------------------------------------------*/

/* ---------------------------------------------------------------*/

/* ---------------------------------------------------------------*/

/* ---------------------------------------------------------------*/

/* ---------------------------------------------------------------*/

/* ---------------------------------------------------------------*/

/* ---------------------------------------------------------------*/

/* ---------------------------------------------------------------*/

/* ---------------------------------------------------------------*/

/* ---------------------------------------------------------------*/

/* ---------------------------------------------------------------*/

/* ---------------------------------------------------------------*/

/* ---------------------------------------------------------------*/

/* ---------------------------------------------------------------*/

/* ---------------------------------------------------------------*/

/* ---------------------------------------------------------------*/

/* ---------------------------------------------------------------*/

/* ---------------------------------------------------------------*/

/* ---------------------------------------------------------------*/

/* ---------------------------------------------------------------*/

/* ---------------------------------------------------------------*/

/* ---------------------------------------------------------------*/

/* ---------------------------------------------------------------*/

/* ---------------------------------------------------------------*/

/* ---------------------------------------------------------------*/

/* ---------------------------------------------------------------*/

/* ---------------------------------------------------------------*/

/* ---------------------------------------------------------------*/

/* ---------------------------------------------------------------*/

/* ---------------------------------------------------------------*/

/* ---------------------------------------------------------------*/

/* ---------------------------------------------------------------*/

/* ---------------------------------------------------------------*/

/* ---------------------------------------------------------------*/

/* ---------------------------------------------------------------*/

/* ---------------------------------------------------------------*/