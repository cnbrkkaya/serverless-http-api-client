import { Link, useNavigate } from 'react-router-dom'
import { API } from 'aws-amplify'
import { useNotesContext } from '../../hooks/useNotesContext'
import { RewindIcon } from '@heroicons/react/solid'

export default function CreatePage() {
  let navigate = useNavigate()
  const { setNotes } = useNotesContext()

  const handleCreate = async (event) => {
    event.preventDefault()

    try {
      const data = await API.post('dev-noteapp', '/note/create', {
        headers: {},
        body: {
          noteMessage: event.target.elements.message.value,
        },
      })

      setNotes((prev) => [...prev, data.item])
    } catch (error) {
      console.error(error)
    }

    navigate('/')
  }

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

      <form onSubmit={handleCreate} action=''>
        <input type='text' name='message' placeholder='Enter Note' />
        <button>Create Note</button>
      </form>
    </div>
  )
}
