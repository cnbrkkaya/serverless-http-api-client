import { Link } from 'react-router-dom'
import { API } from 'aws-amplify'

export default function CreatePage() {
  const handleCreate = async (event) => {
    event.preventDefault()

    const data = await API.post('dev-noteapp', '/note/create', {
      headers: {},
      body: {
        noteMessage: event.target.elements.message.value,
      },
    })
    console.log(data)
  }

  return (
    <div>
      <Link to='/'> Return to List</Link>

      <form onSubmit={handleCreate} action=''>
        <input type='text' name='message' placeholder='Enter Note' />
        <button>Create Note</button>
      </form>
    </div>
  )
}
