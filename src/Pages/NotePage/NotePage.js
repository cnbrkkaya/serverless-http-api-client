import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { API } from 'aws-amplify'
import { RewindIcon } from '@heroicons/react/solid'

export default function NotePage() {
  const [singleNote, setSingleNote] = useState(null)
  let { id } = useParams()

  useEffect(() => {
    const handleGetNote = async () => {
      try {
        const data = await API.get('dev-noteapp', `/note/${id}`, {
          headers: {},
          body: {
            noteId: id,
          },
        })

        setSingleNote(data.item[0])
      } catch (error) {
        console.error(error)
      }
    }
    handleGetNote()
  }, [])

  console.log(singleNote)

  return (
    <div>
      <Link to='/'>
        <span>
          <RewindIcon
            className='flex-shrink-0 h-5 w-5 text-blue-500 left-max top-auto'
            aria-hidden='true'
          />
          Return to List
        </span>
      </Link>
      <p>Note : {singleNote && <div>{singleNote.noteMessage}</div>}</p>
    </div>
  )
}
