import { useNotesContext } from '../../hooks/useNotesContext'

export default function Notes({ data }) {
  const { notes } = useNotesContext()

  return (
    <div
      className='relative block w-full border-2 border-gray-300 border-dashed rounded-lg p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
      key={data.notesId}>
      <span className='text-red '>X</span>
      <h3> {data.noteMessage} </h3>
    </div>
  )
}
