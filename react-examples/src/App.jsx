
import { TwitterFollowCard } from './TwitterFollowCard'
import './App.css'
import { useState } from 'react'
//los estilos siempre van importados
//chakra UI para componentes de react hechos
function App() {
//  const format = (userName)=>`@${userName}` // se puede pasa funciones como parametros
  //const formatedUserName = <span>@eudortiz</span>

//un componente es una funcion que el ejecutarla te devuelve un elemento
// el elemento es el que renderiza react

//tambien se puede pasar un elemento como children


const eudo = {initialIsFollowing: true, userName: 'eudortiz'} //es bueno es ciertos casos usar el spread operator pero es mejor declarar que le damos como prop al componente 

const [name,setName] = useState('Eudosio Ortiz') //posicion[valor del estado, forma de actualizar el estado]
//los cambios se propagan hacia abajo
//en cada cambio de estado reenderiza todo al mismo tiempo aunque no cambie algun otro hijo

const users = [
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true
  },
  {
    userName: 'pheralb',
    name: 'Pablo H.',
    isFollowing: false
  },
  {
    userName: 'PacoHdezs',
    name: 'Paco Hdez',
    isFollowing: true
  },
  {
    userName: 'TMChein',
    name: 'Tomas',
    isFollowing: false
  }
]

//siempre hacer la logica y funciones de javascript arriba del reenderizado
  return (
    <section className='App'>
      {
        users.map(({userName, name, isFollowing} )=>{
          return(
            <TwitterFollowCard
              key={userName}
              userName={userName} 
              initialIsFollowing={isFollowing}
            >
              {name}
            </TwitterFollowCard>
          )
        })
      }
    </section>
  )
}

export default App

/* renderrizado(props) con funcion
const format = (userName)=>`@${userName}` // se puede 

<TwitterFollowCard 
  formatUserName={format} 
  userName={"eudortiz1"} 
  name={"Eudosio Ortiz"} 
  isFollowing={true}>
</TwitterFollowCard>
      */

/*renderrizado(props) con elemento
const formatedUserName = <span>@eudortiz</span> 

<TwitterFollowCard 
  formatUserName={formatedUserName} 
  userName={"eudortiz1"} 
  name={"Eudosio Ortiz"} 
  isFollowing={true}>
</TwitterFollowCard>
      */

/*
<TwitterFollowCard 
  userName={"eudortiz2"} 
  isFollowing={true}>Eudosio Ortiz //propiedad children
</TwitterFollowCard>
*/

/*
return (
    <section className='App'>
      <TwitterFollowCard {...eudo}
        >Eudosio Ortiz 
      </TwitterFollowCard>
      
      <TwitterFollowCard {...eudo}
        >Eudosio Ortiz 2
      </TwitterFollowCard>
      
      <TwitterFollowCard 
        userName={"eudortiz3"} 
        initialIsFollowing={false}>Eudosio Ortiz 3
      </TwitterFollowCard>

      <TwitterFollowCard 

        userName={"eudortiz4"} 
        initialIsFollowing={false}>{name}
      </TwitterFollowCard>
      <button onClick={()=>setName("Thor")}>
        Cambio nombre
      </button>
    </section>
  )
}
*/