import React, { useState } from 'react'
import firebase from "firebase/app";

import { db } from '../firebase'
import { Button, TextField } from '@material-ui/core';
import Link from 'next/link';

export default function AddData() {
  const [users,setUsers] = useState([])
  const [name,setName] = useState('')
  const [age,setAge] = useState('')
  const [location,setLocation] = useState('')
  
  const handleClickFetchButton=async()=>{
    // ドキュメントの取得
    // const doc = await db.collection('users').doc('GmMn9BiFZAaaY0Mu1N4l').get()
    // console.log(doc.data())
    // ドキュメントの取得

    // コレクションの取得
    const snapshot = await db.
    collection('users')
    .where('age','<=',20)
    .limit(1)
    .get()
    snapshot.forEach(doc=>{
      console.log(doc.id,'=>',doc.data()) 
    })
    // コレクションの取得
  }

    const handleClickAddButton=async()=>{
      // db.collection('users').doc('1').set({
      //   name:'田中',
      //   age:'50',
      //   country:'JPN'
      // },{merge:true})
      /*mergeをsetの第二引数に指定することで、ドキュメント全体への変更を防ぐことができる。
      */

      if(!name || !age || !location){
        return(
          alert('空欄を埋めてください')
        )
      }

      // 年齢は半角数字で入力するメソッド
      const parsedAge = parseInt(age,10)
      if(isNaN(parsedAge)){
        alert('年齢は半角数字で入力してだくさい')
        return
      }
      // 年齢は半角数字で入力するメソッド


        await db.collection('users').add({
        name:name,
        age:parsedAge,
        location:location
      })

      setName('')
      setAge('')
      setLocation('')
      alert('データを追加しました')
    }
  
  return (
    <>
      <h1>FireeStore用とのデータのやり取り確認用のページです。</h1>
      <Button color="primary" onClick={handleClickFetchButton}>firestoreからデータの取得</Button>
      <Button color="secondary" onClick={handleClickAddButton}>firestoreへのデータの追加</Button>
      <h1>ユーザ情報の保存</h1>
      {/* <formnoValidate autoComplete="off"> */}
      <TextField
        label="名前" 
        value={name} 
        onChange={(e)=>{setName(e.target.value)}}/>
      <br />
      <TextField
        label="年齢" 
        value={age} 
        onChange={(e)=>{setAge(e.target.value)}} />
      <br />
      <TextField
        label="住所" 
        value={location}
        onChange={(e)=>{setLocation(e.target.value)}} />
    {/* </formnoValidate> */}
    <br />
    <br />
      <Button onClick={handleClickAddButton}>firestoreへのデータの追加</Button>
      <br/>
      <Link href="/">
        <Button>ホームへ</Button>
      </Link>
    </>
  )
}