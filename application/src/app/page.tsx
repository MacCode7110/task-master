"use client"
import { useState } from 'react'
import ManageBoard from './ManageBoard/page'
import { Manager, Model } from "./entity/model"

export default function Home() {
  const [model, setModel] = useState(new Model(new Manager([], [], [], 0, 0)))

  return (
    <main>
      <ManageBoard manager={model.manager}/>
    </main>
  )
}