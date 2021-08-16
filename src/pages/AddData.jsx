import React, { useState } from 'react'
import firebase from "firebase/app";

import { db } from '../firebase'
import { Button } from '@material-ui/core';

export default function AddData() {
  const [users,setUsers] = useState([])
  
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

    const handleClickAddButton=()=>{
      db.collection('users').doc('1').set({
        name:'田中',
        age:'50',
        country:'JPN'
      })
      console.log('addボタンが押下されました')
    }
  
  return (
    <>
      <h1>FireeStore用とのデータのやり取り確認用のページです。</h1>
      <Button color="primary" onClick={handleClickFetchButton}>firestoreからデータの取得</Button>
      <Button color="secondary" onClick={handleClickAddButton}>firestoreへのデータの追加</Button>
    </>
  )
}