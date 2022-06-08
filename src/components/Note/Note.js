import { useNotesContext } from '../../hooks/useNotesContext'
import { TrashIcon } from '@heroicons/react/solid'
import { API } from 'aws-amplify'
import { Link, useParams } from 'react-router-dom'
export default function Notes({ data }) {
  const { setNotes } = useNotesContext()

  const handleDeleteNote = async () => {
    try {
      const result = await API.del(
        'dev-noteapp',
        `note/delete/${data.noteId}`,
        {
          headers: {},
          body: {},
        }
      )
      console.log(result)
      setNotes((prev) => prev.filter((note) => note.noteId !== data.noteId))
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div
      className='relative block w-full border-2 border-gray-300 border-dashed rounded-lg p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
      key={data.notesId}>
      <TrashIcon
        onClick={handleDeleteNote}
        className='flex-shrink-0 h-5 w-5 text-green-500 left-max top-auto'
        aria-hidden='true'
      />
      <Link to={`/notes/${data.noteId}`}>
        <h3> {data.noteMessage} </h3>
      </Link>
    </div>
  )
}
