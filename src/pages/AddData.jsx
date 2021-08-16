import React from 'react'
import firebase from "firebase/app";

import { db } from '../firebase'
import { Button } from '@material-ui/core';

export default function AddData() {
  const handleClickFetchButton=async()=>{
    const doc = await db.collection('users').doc('GmMn9BiFZAaaY0Mu1N4l').get()
    console.log(doc.data())

    console.log('Fetchボタンが押下されました')
  }
  return (
    <>
      <h1>FireeStore用とのデータのやり取り確認用のページです。</h1>
      {/* <button onClick={handleClickFetchButton}>取得</button> */}
      {/* <Button>Default</Button> */}
      <Button color="primary" onClick={handleClickFetchButton}>firestoreからデータの取得</Button>
      {/* <Button color="secondary">Secondary</Button>
      <Button disabled>Disabled</Button>
      <Button href="#text-buttons" color="primary">
        Link
      </Button> */}
    </>
  )
}