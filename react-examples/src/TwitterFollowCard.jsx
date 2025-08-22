import { useState } from "react" //

//hooks utilidades

export function TwitterFollowCard({children, userName = "unkhown",initialIsFollowing}) {
    //nunca modificar una prop(parametros)
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing) // el valor del estado solo se inicializa una vez


    const text = isFollowing ? 'Siguendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' :'tw-followCard-button'

    const handleClick = ()=>{
        setIsFollowing(!isFollowing)
    }

    return(
        <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img className='tw-followCard-avatar' src="https://scontent-dfw5-3.xx.fbcdn.net/v/t39.30808-1/408276432_6761679910627779_8283495543322416131_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_ohc=zy3St_89jqoQ7kNvwEQPNYi&_nc_oc=AdmU4QbcT7NPaXWNJpU9_J9aR19epq_0KD253k_vFfwO2VweQw-21M8O_6mJeg57Y_U&_nc_zt=24&_nc_ht=scontent-dfw5-3.xx&_nc_gid=MCaslC_JZsr_kpG48cZf1A&oh=00_AfX-MFrgEuQIgYkBm3UHxW8MJv7CQ_nzRnqd6esc3Q0k5w&oe=68AD7AC4" alt="Avatar Eudo" />
        <div className='tw-followCard-info'>
          <strong >{children}</strong>
          <span className='tw-followCard-infoUserName'>@{userName}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
            <span className='tw-followCard-text'>{text}</span>
            <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
        </button>
      </aside>
    </article>
    )
}