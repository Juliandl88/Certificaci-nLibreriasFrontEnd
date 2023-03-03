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

/* const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {
  // Cambia el código debajo de esta línea
   switch (action.type) {
    case "LOGIN":
      return {
        authenticated: true
      };

    case "LOGOUT":
      return {
        authenticated: false
      };

    default:
      return defaultState;
  }
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

/* Usa const para los tipos de acción
Una práctica común cuando se trabaja con Redux es asignar tipos de acción como constantes de sólo lectura, y luego hacer referencia a estas constantes dondequiera que se utilicen. Puedes refactorizar el código con el que estás trabajando para escribir los tipos de acción como declaraciones const.

Declara LOGIN y LOGOUT como valores const y asígnalos a las cadenas 'LOGIN' y 'LOGOUT', respectivamente. Luego, edita el authReducer() y los creadores de acción para que hagan referencia a estas constantes en lugar de valores de cadena.

Nota: Generalmente es una convención escribir las constantes en mayúsculas, y esto es una práctica estándar en Redux también.*/

/* const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {

  switch (action.type) {
    case LOGIN: 
      return {
        authenticated: true
      }
    case LOGOUT: 
      return {
        authenticated: false
      }

    default:
      return state;

  }

};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: LOGIN
  }
};

const logoutUser = () => {
  return {
    type: LOGOUT
  }
};*/

/* ---------------------------------------------------------------*/

/* Registra un escucha al almacén
Otro método al que tienes acceso en el objeto Redux store es store.subscribe(). Esto te permite suscribir funciones de escucha al almacén, que se llaman cada vez que se envía una acción contra el almacén. Un uso sencillo de este método es suscribir una función a tu almacén que simplemente registra un mensaje cada vez que se recibe una acción y se actualiza el almacén.

Escribe una función callback que incremente la variable global count cada vez que el almacén recibe una acción, y pasa esta función al método store.subscribe(). Verás que store.dispatch() es llamado tres veces seguidas, cada vez pasando directamente un objeto de acción. Observa la salida de la consola entre los envíos de acción para ver cómo se producen las actualizaciones.*/

/* const ADD = 'ADD';

const reducer = (state = 0, action) => {
  switch(action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

// Variable global count:
let count = 0;

// Cambia el código debajo de esta línea
store.subscribe(()=>count++)
// Cambia el código encima de esta línea

store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);*/

/* ---------------------------------------------------------------*/

/* Combina múltiples reductores
Cuando el estado de tu aplicación empieza a ser más complejo, puede ser tentador dividir el estado en varias piezas. En su lugar, recuerda el primer principio de Redux: todo el estado de la aplicación se mantiene en un único objeto de estado en el almacén. Por lo tanto, Redux proporciona la composición de reductores como una solución para un modelo de estado complejo. Se definen varios reductores para manejar diferentes partes del estado de tu aplicación, y luego se componen estos reductores juntos en un reductor raíz. El reductor raíz se pasa al método Redux createStore().

Para permitirnos combinar múltiples reductores juntos, Redux proporciona el método combineReducers(). Este método acepta un objeto como argumento en el que se definen las propiedades que asocian las claves a funciones reductoras específicas. El nombre que le des a las claves será utilizado por Redux como el nombre de la pieza de estado asociada.

Por lo general, es una buena práctica crear un reductor para cada pieza de estado de la aplicación cuando son distintas o únicas de alguna manera. Por ejemplo, en una aplicación para tomar notas con autenticación de usuario, un reductor podría encargarse de la autenticación, mientras que otro se encarga del texto y las notas que el usuario envía. Para tal aplicación, podríamos escribir el método combineReducers() así:

const rootReducer = Redux.combineReducers({
  auth: authenticationReducer,
  notes: notesReducer
});
Ahora, la clave notes contendrá todo el estado asociado a nuestras notas y manejado por nuestro notesReducer. Así es como se pueden componer múltiples reductores para gestionar un estado de aplicación más complejo. En este ejemplo, el estado mantenido en el almacén Redux sería entonces un único objeto que contiene las propiedades auth y notes.

Están las funciones counterReducer() y authReducer() proporcionadas en el editor de código, junto con un almacén Redux. Termina de escribir la función rootReducer() utilizando el método Redux.combineReducers(). Asigna counterReducer a una clave llamada count y authReducer a una clave llamada auth.*/

/* const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const authReducer = (state = {authenticated: false}, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        authenticated: true
      }
    case LOGOUT:
      return {
        authenticated: false
      }
    default:
      return state;
  }
};

const rootReducer = Redux.combineReducers({
  count:counterReducer, 
  auth:authReducer
});

const store = Redux.createStore(rootReducer);*/

/* ---------------------------------------------------------------*/

/* Envía datos de acción al almacén
A estas alturas ya has aprendido a enviar acciones al almacén de Redux, pero hasta ahora estas acciones no contenían más información que un type. También puedes enviar datos específicos junto con sus acciones. De hecho, esto es muy común porque las acciones suelen originarse a partir de alguna interacción del usuario y suelen llevar consigo algunos datos. El almacén Redux a menudo necesita conocer estos datos.

Hay un notesReducer() básico y un creador de acción addNoteText() definido en el editor de código. Termina el cuerpo de la función addNoteText() para que devuelva un objeto action. El objeto debe incluir una propiedad type con un valor de ADD_NOTE, y también una propiedad text establecida a los datos de note que se pasa al creador de acción. Cuando llames al creador de acción, pasarás información específica de la nota a la que puedes acceder para el objeto.

A continuación, termina de escribir la sentencia switch en el notesReducer(). Necesitas añadir un caso que maneje las acciones addNoteText(). Este caso debe activarse siempre que haya una acción de tipo ADD_NOTE y debe devolver la propiedad text de la action entrante como el nuevo state.

La acción es enviada en la parte inferior del código. Una vez que hayas terminado, ejecuta el código y observa la consola. Eso es todo lo que se necesita para enviar datos específicos de la acción al almacén y utilizarlos cuando se actualiza el state del almacén.*/

/* const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
    // Cambia el código debajo de esta línea
    case ADD_NOTE:
      return action.text;
    // Cambia el código encima de esta línea
    default:
      return state;
  }
};

const addNoteText = (note) => {
  // Cambia el código debajo de esta línea
  return {
  type: ADD_NOTE,
  text: note
  }
  // Cambia el código encima de esta línea
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello!'));
console.log(store.getState());*/

/* ---------------------------------------------------------------*/

/* Usa middleware para manejar acciones asíncronas
Hasta ahora hemos evitado hablar de las acciones asíncronas, pero son una parte inevitable del desarrollo web. En algún momento necesitarás llamar a endpoints asíncronos en tu aplicación Redux, así que ¿cómo manejas este tipo de peticiones? Redux proporciona un middleware diseñado específicamente para este propósito, llamado Redux Thunk middleware. Aquí hay una breve descripción de cómo usar esto con Redux.

Para incluir el Redux Thunk middleware, lo pasas como argumento a Redux.applyMiddleware(). Esta declaración se proporciona entonces como un segundo parámetro opcional a la función createStore(). Echa un vistazo al código en la parte inferior del editor para ver esto. Entonces, para crear una acción asíncrona, se devuelve una función en el creador de acción que toma dispatch como argumento. Dentro de esta función, se pueden enviar acciones y realizar peticiones asíncronas.

En este ejemplo, se simula una petición asíncrona con una llamada setTimeout(). Es común enviar una acción antes de iniciar cualquier comportamiento asíncrono para que el estado de tu aplicación sepa que se están solicitando algunos datos (este estado podría mostrar un icono de carga, por ejemplo). Luego, una vez que recibes los datos, envía otra acción que lleva los datos como carga útil junto con la información de que la acción se ha completado.

Recuerda que estás pasando dispatch como parámetro a este creador de acciones especiales. Esto es lo que usarás para enviar tus acciones, simplemente pasas la acción directamente a dispatch y el middleware se encarga del resto.

Escribe ambos envíos en el creador de acción handleAsync(). Envía requestingData() antes del setTimeout() (la llamada al API simulada). A continuación, después de recibir los datos (fingidos), envía la acción receivedData(), pasando estos datos. Ahora ya sabes cómo manejar las acciones asíncronas en Redux. Todo lo demás sigue comportándose como antes.*/

/* const REQUESTING_DATA = 'REQUESTING_DATA'
const RECEIVED_DATA = 'RECEIVED_DATA'

const requestingData = () => { return {type: REQUESTING_DATA} }
const receivedData = (data) => { return {type: RECEIVED_DATA, users: data.users} }

const handleAsync = () => {
  return function(dispatch) {
    // Despacha la acción request aquí
    dispatch(requestingData());

    setTimeout(function() {
      let data = {
        users: ["Jeff", "William", "Alice"]
      };
      // dispatch received data action here

      dispatch(receivedData(data));
    }, 2500);
  }
};

const defaultState = {
  fetching: false,
  users: []
};

const asyncDataReducer = (state = defaultState, action) => {
  switch(action.type) {
    case REQUESTING_DATA:
      return {
        fetching: true,
        users: []
      }
    case RECEIVED_DATA:
      return {
        fetching: false,
        users: action.users
      }
    default:
      return state;
  }
};

const store = Redux.createStore(
  asyncDataReducer,
  Redux.applyMiddleware(ReduxThunk.default)
); */

/* ---------------------------------------------------------------*/

/* Escribe un contador con Redux
¡Ahora ya has aprendido todos los principios básicos de Redux! Has visto cómo crear acciones y creadores de acción, crear un almacén Redux, enviar tus acciones contra el almacén y diseñar actualizaciones de estado con reductores puros. Incluso has visto cómo gestionar estados complejos con la composición de reductores y manejar acciones asíncronas. Estos ejemplos son simplistas, pero estos conceptos son los principios básicos de Redux. Si los entiendes bien, estás listo para empezar a crear tu propia aplicación Redux. Los próximos desafíos cubren algunos de los detalles relacionados con la inmutabilidad de state, pero primero, aquí hay un repaso de todo lo que has aprendido hasta ahora.

En esta lección, implementarás un simple contador con Redux desde cero. El editor de código proporciona lo básico, ¡pero tendrás que completar los detalles! Utiliza los nombres que se proporcionan y define los creadores de acciones incAction y decAction, el counterReducer(), los tipos de acción INCREMENT y DECREMENT, y finalmente el store de Redux. Una vez que hayas terminado deberías poder enviar acciones INCREMENT o DECREMENT para incrementar o disminuir el estado mantenido en el store. ¡Buena suerte construyendo tu primera aplicación Redux!*/

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