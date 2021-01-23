import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {useState, useEffect} from "react"
import axios from "axios"
import Emoji from "react-emoji-render"

export default function Home() {
  const [nome, setNome] = useState("Bruno")
  const[emoji, setEmoji] = useState(":heart:")

  useEffect(()=>{
    trocaEmoji()

  },[nome])

  const trocaEmoji = function(){
    const i = Math.floor(Math.random()*listaEmojis.length)
    console.log(i)
    setEmoji(listaEmojis[i])
  }

  function handleChange(e){
    setNome(e.target.value)
  }

  const listaEmojis = [
    ":heart:",
    ":heart_eyes_cat:",
    ":purple_heart:",
    ":sparkles:",
    ":heart_eyes:",
    ":kissing_heart:",
    ":rainbow:"
  ]

  return (
    <div className={styles.container}>
      <div className="appMain">
        <h1>
          Oi Jamille!
        </h1>
        <h2>
          Tudo bom?
        </h2>
        <div className="containerEmoji">
          <Emoji className="emoji" text={emoji} options onlyEmojiClassName="make-emojis-large" />
        </div>
        <p>Meu nome é {nome}</p>
        <button onClick={trocaEmoji}>Clique aqui</button>
        <input className="nameInput" onChange={handleChange} value={nome}></input>
        </div>
      
    </div>
  )
}
