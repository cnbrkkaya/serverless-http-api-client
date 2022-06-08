// a custom hook that will return the value of the context
//Much more efficient than using React.useContext
import { useContext } from 'react'
import { NotesContext } from '../contexts/NotesContext'

export function useNotesContext() {
  const context = useContext(NotesContext)
  if (!context) {
    throw new Error(
      'useNotesContext must be used within a NotesContext Provider'
    )
  }
  return context
}
