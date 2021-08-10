import { useState } from 'react'
import App from '../components/App'
import { signUpWithEmailAndPassword,signInWithEmailAndPassword,signOut } from '../firebase'
import {auth} from '../firebase'

export default function Home() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const emailValue=(e)=>{
    setEmail(e.target.value)
  }
  const passwordValue=(e)=>{
    setPassword(e.target.value)
  }

  const signUp =async() =>{
    const user=await signUpWithEmailAndPassword(email,password)
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
      <div>{auth.currentUser}</div>
      <h2>新規登録機能</h2>
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

      <div>

        <button onClick={signOut}>ログアウト</button>
      </div>
    </App>
  )
}
