import { useState } from 'react'
import ManageTaskAssignment from './ManageTaskAssignment/page'
import { Manager, Model } from "./entity/model"

export default function Home() {
  const [model, setModel] = useState(new Manager([], [], []))
  
  return (
    <main>
      <ManageTaskAssignment />
    </main>
  )
}