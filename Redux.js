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

/* Define una acción Redux
Dado que Redux es un framework de gestión de estado, la actualización del estado es una de sus tareas principales. En Redux, todas las actualizaciones de estado se activan mediante acciones de envío. Una acción es simplemente un objeto de JavaScript que contiene información sobre un evento de acción que ha ocurrido. El almacén Redux recibe estos objetos de acción, y luego actualiza su estado de acuerdo a ello. A veces una acción Redux también lleva algunos datos. Por ejemplo, la acción lleva un nombre de usuario después de que un usuario inicia sesión. Aunque los datos son opcionales, las acciones deben llevar una propiedad type que especifica el "tipo" de acción que se ha producido.

Piensa en las acciones Redux como mensajeros que entregan información sobre los eventos que ocurren en tu aplicación al almacén Redux. A continuación, el almacén se encarga de actualizar el estado en función de la acción realizada.

Escribir una acción Redux es tan sencillo como declarar un objeto con una propiedad de tipo. Declara un objeto action y dale una propiedad type establecida a la cadena 'LOGIN'.

*/

/* // Define una acción aquí:

const action = {
  type: "LOGIN"
}*/

/* ---------------------------------------------------------------*/

/* Define un creador de acción
Después de crear una acción, el siguiente paso es enviar la acción al almacén Redux para que pueda actualizar su estado. En Redux, se definen creadores de acción para lograr esto. Un creador de acción es simplemente una función de JavaScript que devuelve una acción. En otras palabras, los creadores de acción crean objetos que representan eventos de acción.

Define una función llamada actionCreator() que devuelve el objeto action cuando es llamado.*/

/* const action = {
  type: 'LOGIN'
}
// Define un creador de acción aquí:

const actionCreator = () => action;*/

/* ---------------------------------------------------------------*/

/* Envía un evento de acción
El método dispatch (enviar) es el que se utiliza para enviar acciones al almacén Redux. Llamar a store.dispatch() y pasar el valor devuelto por un creador de acción envía una acción de regreso al almacén.

Recordemos que los creadores de acción devuelven un objeto con una propiedad de tipo que especifica la acción que se ha producido. Luego, el método envía un objeto de acción al almacén Redux. Basándonos en el ejemplo del desafío anterior, las siguientes líneas son equivalentes, y ambas envían la acción de tipo LOGIN:

store.dispatch(actionCreator());
store.dispatch({ type: 'LOGIN' });
El almacén Redux en el editor de código tiene un estado inicializado que es un objeto que contiene una propiedad login actualmente establecida a false. También hay un creador de acción llamado loginAction() que devuelve una acción de tipo LOGIN. Envía la acción LOGIN al almacén Redux llamando al método dispatch, y pasa la acción creada por loginAction().*/

/* const store = Redux.createStore(
  (state = {login: false}) => state
);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

// Despacha la acción aquí:

store.dispatch(loginAction());*/

/* ---------------------------------------------------------------*/

/* Maneja una acción en el almacén
Después de crear y enviar una acción, el almacén Redux necesita saber cómo responder a esa acción. Este es el trabajo de una función reducer (reductor). Los reductores en Redux son responsables de las modificaciones de estado que tienen lugar en respuesta a las acciones. Un reducer toma state y action como argumentos, y siempre devuelve un nuevo state. Es importante ver que esta es la única función del reductor. No tiene efectos secundarios: nunca llama a un endpoint del API y nunca tiene sorpresas ocultas. El reductor es simplemente una función pura que toma el estado y la acción, y luego devuelve el nuevo estado.

Otro principio clave en Redux es que state es de sólo lectura. En otras palabras, la función reducer debe siempre devolver una nueva copia de state y nunca modificar el estado directamente. Redux no impone la inmutabilidad del estado, sin embargo, tú eres responsable de imponerla en el código de tus funciones reductoras. Practicarás esto en desafíos posteriores.

El editor de código tiene el ejemplo anterior, así como el inicio de una función reducer para ti. Rellena el cuerpo de la función reducer para que si recibe una acción de tipo 'LOGIN' devuelva un objeto de estado con login establecido a true. De lo contrario, devuelve el state actual. Ten en cuenta que el state actual y la action enviada se pasan al reductor, por lo que puedes acceder al tipo de la acción directamente con action.type.*/

/* const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {
    if (action.type === "LOGIN") {
    return {
      login: true
    };
  } else {
    return state;
  }
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};*/

/* ---------------------------------------------------------------*/

/* Usa una sentencia Switch para manejar múltiples acciones
Puedes decirle al almacén Redux cómo manejar múltiples tipos de acción. Digamos que estás gestionando la autenticación de usuarios en tu almacén Redux. Quieres tener una representación de estado para cuando los usuarios están conectados y cuando están desconectados. Esto se representa con un único objeto de estado con la propiedad authenticated. También se necesitan creadores de acción que creen acciones correspondientes al inicio y cierre de sesión de los usuarios, junto con los propios objetos de acción.

El editor de código tiene un almacén, acciones y creadores de acción configurados para ti. Rellena la función reducer para manejar múltiples acciones de autenticación. Usa una sentencia switch de JavaScript en el reducer para responder a diferentes eventos de acción. Este es un patrón estándar en la escritura de reductores Redux. La sentencia switch debe cambiar sobre action.type y devolver el estado de autenticación apropiado.

Nota: En este punto, no te preocupes por la inmutabilidad del estado, ya que es pequeña y simple en este ejemplo. Para cada acción, puedes devolver un nuevo objeto, por ejemplo, {authenticated: true}. Además, no olvides escribir un caso default en tu sentencia switch que devuelva el state actual. Esto es importante porque una vez que tu aplicación tiene múltiples reductores, todos ellos se ejecutan cada vez que se realiza un envío de acción, incluso cuando la acción no está relacionada con ese reductor. En tal caso, querrás asegurarte de que devuelves el state actual.*/

/* const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {
  // Cambia el código debajo de esta línea

  // Cambia el código encima de esta línea
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};

const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
};*/

/* ---------------------------------------------------------------*/

/* Usa una sentencia Switch para manejar múltiples acciones
Puedes decirle al almacén Redux cómo manejar múltiples tipos de acción. Digamos que estás gestionando la autenticación de usuarios en tu almacén Redux. Quieres tener una representación de estado para cuando los usuarios están conectados y cuando están desconectados. Esto se representa con un único objeto de estado con la propiedad authenticated. También se necesitan creadores de acción que creen acciones correspondientes al inicio y cierre de sesión de los usuarios, junto con los propios objetos de acción.

El editor de código tiene un almacén, acciones y creadores de acción configurados para ti. Rellena la función reducer para manejar múltiples acciones de autenticación. Usa una sentencia switch de JavaScript en el reducer para responder a diferentes eventos de acción. Este es un patrón estándar en la escritura de reductores Redux. La sentencia switch debe cambiar sobre action.type y devolver el estado de autenticación apropiado.

Nota: En este punto, no te preocupes por la inmutabilidad del estado, ya que es pequeña y simple en este ejemplo. Para cada acción, puedes devolver un nuevo objeto, por ejemplo, {authenticated: true}. Además, no olvides escribir un caso default en tu sentencia switch que devuelva el state actual. Esto es importante porque una vez que tu aplicación tiene múltiples reductores, todos ellos se ejecutan cada vez que se realiza un envío de acción, incluso cuando la acción no está relacionada con ese reductor. En tal caso, querrás asegurarte de que devuelves el state actual.*/

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