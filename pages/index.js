import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {useState, useEffect} from "react"
import axios from "axios"
import Emoji from "react-emoji-render"

export default function Home() {
  const [nome, setNome] = useState()
  const[emoji, setEmoji] = useState(":heart:")
  const responseData = async function(){
   const res = await axios.get("https://hello-world-next-js.vercel.app/api/hello")
   setNome(res.data.name)
  }
  const trocaEmoji = function(){
    const i = Math.floor(Math.random()*listaEmojis.length)
    console.log(i)
    setEmoji(listaEmojis[i])
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
      <h1>
        Oi Jamille!
      </h1>
      <h2>
        Tudo bom?
      </h2>
      <Emoji className="emoji" text={emoji} onlyEmojiClassName="make-emojis-large" />
      <p></p>
      <button onClick={trocaEmoji}>Clique aqui</button>
    </div>
  )
}
