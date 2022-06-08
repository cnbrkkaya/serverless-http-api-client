import { createContext, useEffect, useState } from 'react'
//Amplify imports
import { API } from 'aws-amplify'

export const NotesContext = createContext()

export default function NotesContextProvider(props) {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    async function fetchData() {
      const data = await API.get('dev-noteapp', '/note/list', {
        headers: {},
      })
      setNotes(data.items)
    }
    fetchData()
  }, [])

  return (
    <NotesContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NotesContext.Provider>
  )
}
