import Link from 'next/link'
import { useState } from 'react'
import App from '../components/App'
import { signUpWithEmailAndPassword,signInWithEmailAndPassword,signOut,createUser } from '../firebase'
import {auth} from '../firebase'

export default function Home() {

  // const [username,setUsername]=useState('')
  const [name,setName]=useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // const usernameValue=(e)=>{
  //   setUsername(e.target.value)
  // }

  const nameValue=(e)=>{
    setName(e.target.value)
  }
  const emailValue=(e)=>{
    setEmail(e.target.value)
  }
  const passwordValue=(e)=>{
    setPassword(e.target.value)
  }

  const signUp =async() =>{
    const user=await signUpWithEmailAndPassword(
      // username,
      email,
      password)
    // setUsername('')
    setEmail('')
    setPassword('')
  }
  const signUpNew =async() =>{
    const user=await createUser(
      name,
      email,
      password)
    // setUsername('')
    setName('')
    setEmail('')
    setPassword('')
  }
  const signIn =async() =>{
    const user = await signInWithEmailAndPassword(email,password)
    console.log(user)
    setEmail('')
    setPassword('')
  }

  return (
    <App>
      <p>認証機能の実装</p>
      <h1>認証機能</h1>
      {auth.currentUser===null ? 
      <div>
      <h2>新規登録機能</h2>
      <br />
      <input
        type="displayName"
        value={name}
        onChange={nameValue}
        placeholder="表示名"
      />
      < br />
      <input
        type="email"
        value={email}
        onChange={emailValue}
        placeholder="E-mail"
      />
      < br />
      <input
      type="password"
      value={password}
      onChange={passwordValue}
      placeholder="Password"
      />
      <button onClick={signUp}>登録</button>
      <br />
      <button onClick={signUpNew}>登録</button>

      <h2>サインイン機能</h2>
      <input
        type="email"
        value={email}
        onChange={emailValue}
        placeholder="E-mail"
      />
      < br />
      <input
      type="password"
      value={password}
      onChange={passwordValue}
      placeholder="Password"
      />
      <button onClick={signIn}>ログイン</button>
      </div>
      : 
      <div>
        {auth.currentUser===null ? '現在ログインしているユーザーはいません' : '現在、ログインしています'}
        <br />
        <button onClick={signOut}>ログアウト</button>
      </div>
      
      
      }

      <Link href="/AddData">
        <a>データ追加用のページへ</a>
      </Link>

      
    </App>
  )
}
