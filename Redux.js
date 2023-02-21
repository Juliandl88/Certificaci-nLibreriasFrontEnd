/* REDUX */

/* Primeros pasos con React Redux
Esta serie de desafíos presenta cómo usar Redux con React. Primero, aquí hay una revisión de algunos de los principios clave de cada tecnología. React es una biblioteca de vistas que proporcionas con datos, luego representa la vista de una manera eficiente y predecible. Redux es un marco de gestión de estado que puede usar para simplificar la gestión del estado de su aplicación. Por lo general, en una aplicación React Redux, crea una única tienda Redux que administra el estado de toda su aplicación. Sus componentes de React se suscriben solo a los datos de la tienda que son relevantes para su función. Luego, envía acciones directamente desde los componentes de React, que luego activan las actualizaciones de la tienda.

Aunque los componentes de React pueden administrar su propio estado localmente, cuando tiene una aplicación compleja, generalmente es mejor mantener el estado de la aplicación en una sola ubicación con Redux. Hay excepciones cuando los componentes individuales pueden tener un estado local específico solo para ellos. Finalmente, debido a que Redux no está diseñado para funcionar con React de fábrica, debe usar el react-reduxpaquete. Proporciona una forma de pasar Redux statey dispatcha sus componentes React como props.

En los próximos desafíos, primero, creará un componente React simple que le permitirá ingresar nuevos mensajes de texto. Estos se agregan a una matriz que se muestra en la vista. Esta debería ser una buena revisión de lo que aprendiste en las lecciones de React. A continuación, creará una tienda Redux y acciones que administren el estado de la matriz de mensajes. Finalmente, usará react-reduxpara conectar la tienda Redux con su componente, extrayendo así el estado local a la tienda Redux.

Comience con un DisplayMessagescomponente. Agregue un constructor a este componente e inicialícelo con un estado que tenga dos propiedades: input, que se establece en una cadena vacía y messages, que se establece en una matriz vacía. */

/* class DisplayMessages extends React.Component {
  // Change code below this line
  constructor(props) {
    super(props)
    this.state = {
      input: "",
      messages: []
    }
  }
  // Change code above this line
  render() {
    return <div />
  }
}; */

/* ------------------------------------------------------------- */

/* Administre el estado localmente primero
Aquí terminará de crear el DisplayMessagescomponente.

Primero, en el render()método, haga que el componente represente un inputelemento, buttonelemento y ulelemento. Cuando el inputelemento cambia, debe desencadenar un handleChange()método. Además, el inputelemento debe representar el valor de inputque está en el estado del componente. El buttonelemento debe activar un submitMessage()método cuando se hace clic en él.

En segundo lugar, escriba estos dos métodos. El handleChange()método debe actualizar inputcon lo que el usuario está escribiendo. El submitMessage()método debe concatenar el mensaje actual (almacenado en input) a la messagesmatriz en el estado local y borrar el valor de input.

Finalmente, use el ulpara mapear sobre la matriz messagesy representarlo en la pantalla como una lista de lielementos. */

/* class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
  }
  // add handleChange() and submitMessage() methods here
  handleChange(event){
    this.setState({
      input: event.target.value,
      messages: this.state.messages
    })
  }

  submitMessage(){
    this.setState({
      input: '',
      messages: [...this.state.messages, this.state.input]
    })
  }

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        
        <input onChange={this.handleChange.bind(this)} value={this.state.input}/>
        <button onClick={this.submitMessage.bind(this)}>Submit</button>
        <ul>
          {this.state.messages.map((x, i)=>{
            return <li key={i}>{x}</li>
          })}
        </ul>
       
      </div>
    );
  }
}; */

/* ------------------------------------------------------------- */

/* Extraer lógica de estado a Redux
Ahora que terminó el componente React, necesita mover la lógica que está realizando localmente stateen Redux. Este es el primer paso para conectar la sencilla aplicación React a Redux. La única funcionalidad que tiene su aplicación es agregar nuevos mensajes del usuario a una lista desordenada. El ejemplo es simple para demostrar cómo funcionan juntos React y Redux.

Primero, defina un tipo de acción ADDy configúrelo en const ADD. A continuación, defina un creador de acciones addMessage()que cree la acción para agregar un mensaje. Deberá pasar un correo electrónico messagea este creador de acciones e incluir el mensaje en el archivo action.

Luego, cree un reductor llamado messageReducer()que maneje el estado de los mensajes. El estado inicial debe ser igual a una matriz vacía. Este reductor debe agregar un mensaje a la matriz de mensajes mantenidos en el estado o devolver el estado actual. Por último, crea tu tienda Redux y pásale el reductor. */

/* // define ADD, addMessage(), messageReducer(), and store here:
const ADD = "ADD";
const addMessage = message => {
  return {
    type: ADD,
    message
  };
};

// Use ES6 default paramter to give the 'previousState' parameter an initial value.
const messageReducer = (previousState = [], action) => {
  // Use switch statement to lay out the reducer logic in response to different action type
  switch (action.type) {
    case ADD:
      // Use ES6 spread operator to return a new array where the new message is added to previousState
      return [...previousState, action.message];
      break;

    default:
      // A default case to fall back on in case if the update to Redux store is not for this specific state.
      return previousState;
  }
};

const store = Redux.createStore(messageReducer); */

/* ------------------------------------------------------------- */

/* Use el proveedor para conectar Redux para reaccionar
En el último desafío, creó una tienda Redux para manejar la matriz de mensajes y creó una acción para agregar nuevos mensajes. El siguiente paso es proporcionar acceso a React a la tienda Redux y las acciones que necesita para enviar actualizaciones. React Redux proporciona su react-reduxpaquete para ayudar a realizar estas tareas.

React Redux proporciona una pequeña API con dos características clave: Providery connect. Otro desafío cubre connect. Es Providerun componente contenedor de React Redux que envuelve su aplicación React. Este contenedor le permite acceder a Redux storey dispatchfunciones en todo su árbol de componentes. Providertoma dos accesorios, la tienda Redux y los componentes secundarios de su aplicación. La definición Providerde un componente de la aplicación podría tener este aspecto:

<Provider store={store}>
  <App/>
</Provider>
El editor de código ahora muestra todo su código Redux y React de los últimos desafíos. Incluye la tienda Redux, las acciones y el DisplayMessagescomponente. La única pieza nueva es el AppWrappercomponente en la parte inferior. Use este componente de nivel superior para representar Providerfrom ReactReduxy pase la tienda Redux como accesorio. A continuación, renderice el DisplayMessagescomponente como un elemento secundario. Una vez que haya terminado, debería ver su componente React representado en la página.

Nota: React Redux está disponible aquí como una variable global, por lo que puede acceder al proveedor con notación de puntos. El código en el editor aprovecha esto y lo establece en una constante Providerpara que lo use en el AppWrappermétodo de renderizado.

 */

/* // Redux:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};



const store = Redux.createStore(messageReducer);

// React:

class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {
    this.setState((state) => {
      const currentMessage = state.input;
      return {
        input: '',
        messages: state.messages.concat(currentMessage)
      };
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange} /><br />
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map((message, idx) => {
            return (
              <li key={idx}>{message}</li>
            )
          })
          }
        </ul>
      </div>
    );
  }
};

const Provider = ReactRedux.Provider;

class AppWrapper extends React.Component {
  // Render the Provider below this line
  render() {
    return (
      <Provider store={store}>
        <DisplayMessages />
      </Provider>
    )
  };
  // Change code above this line
}; */

/* ------------------------------------------------------------- */

/* Asignar estado a accesorios
El Providercomponente le permite proporcionar statea dispatchsus componentes React, pero debe especificar exactamente qué estado y qué acciones desea. De esta manera, se asegura de que cada componente solo tenga acceso al estado que necesita. Esto se logra creando dos funciones: mapStateToProps()y mapDispatchToProps().

En estas funciones, declara a qué partes del estado desea tener acceso y qué creadores de acciones necesita poder enviar. Una vez que estas funciones estén en su lugar, verá cómo usar el connectmétodo React Redux para conectarlas a sus componentes en otro desafío.

Nota: Detrás de escena, React Redux usa el store.subscribe()método para implementar mapStateToProps().

Crear una función mapStateToProps(). Esta función debe tomar statecomo argumento y luego devolver un objeto que asigna ese estado a nombres de propiedad específicos. Estas propiedades serán accesibles para su componente a través de props. Dado que este ejemplo mantiene el estado completo de la aplicación en una sola matriz, puede pasar ese estado completo a su componente. Cree una propiedad messagesen el objeto que se devuelve y establézcala en state.

 */

/* const state = [];

// Change code below this line

const mapStateToProps = (state) => {

  return { messages: state }
} */

/* ------------------------------------------------------------- */

/* Envío de mapas a accesorios - Ejercicio 60
La mapDispatchToProps()función se usa para proporcionar creadores de acciones específicas a sus componentes React para que puedan enviar acciones contra la tienda Redux. Es similar en estructura a la mapStateToProps()función que escribiste en el último desafío. Devuelve un objeto que asigna acciones de envío a nombres de propiedades, que se convierten en componentes props. Sin embargo, en lugar de devolver una parte de state, cada propiedad devuelve una función que llama dispatchcon un creador de acción y cualquier dato de acción relevante. Tiene acceso a esto dispatchporque se pasa a mapDispatchToProps()como un parámetro cuando define la función, tal como lo pasó statea mapStateToProps(). Detrás de escena, React Redux está usando Redux store.dispatch()para realizar estos despachos con mapDispatchToProps(). Esto es similar a cómo se usastore.subscribe()para los componentes que están asignados a state.

Por ejemplo, tiene un loginUser()creador de acciones que toma usernamecomo carga útil una acción. El objeto devuelto mapDispatchToProps()por este creador de acciones se vería así:

{
  submitLoginUser: function(username) {
    dispatch(loginUser(username));
  }
}
El editor de código proporciona un creador de acciones llamado addMessage(). Escriba la función mapDispatchToProps()que toma dispatchcomo argumento y luego devuelve un objeto. El objeto debe tener una propiedad submitNewMessageestablecida en la función de envío, que toma un parámetro para que el nuevo mensaje se agregue cuando se envía addMessage(). */

/* const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

// Change code below this line

// change code below this line
const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message))
    }
  }
} */

/* ------------------------------------------------------------- */

/* Conecta Redux para Reaccionar
Ahora que ha escrito las funciones mapStateToProps()y mapDispatchToProps(), puede usarlas para mapear statey dispatchpara propsuno de sus componentes de React. El connectmétodo de React Redux puede manejar esta tarea. Este método toma dos argumentos opcionales mapStateToProps()y mapDispatchToProps(). Son opcionales porque puede tener un componente al que solo necesita acceso statepero no necesita enviar ninguna acción, o viceversa.

Para usar este método, pase las funciones como argumentos e inmediatamente llame al resultado con su componente. Esta sintaxis es un poco inusual y parece:

connect(mapStateToProps, mapDispatchToProps)(MyComponent)
Nota: si desea omitir uno de los argumentos del connectmétodo, pase nullen su lugar.

El editor de código tiene las funciones mapStateToProps()y mapDispatchToProps()y un nuevo componente React llamado Presentational. Conecte este componente a Redux con el connectmétodo del ReactReduxobjeto global y llámelo inmediatamente en el Presentationalcomponente. Asigne el resultado a una nueva constllamada ConnectedComponentque represente el componente conectado. Eso es todo, ¡ahora estás conectado a Redux! Intente cambiar cualquiera de connectlos argumentos a nully observe los resultados de la prueba. */

/* const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

const mapStateToProps = (state) => {
  return {
    messages: state
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message));
    }
  }
};

class Presentational extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h3>This is a Presentational Component</h3>
  }
};

const connect = ReactRedux.connect;
// Change code below this line

const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Presentational) */

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