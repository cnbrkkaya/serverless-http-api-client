import { Link } from 'react-router-dom'
//components

export default function MainPage() {
  return (
    <div className='w-3/12'>
      <Link to='/create'>
        <button
          type='button'
          className='relative block w-full border-2 border-gray-300 border-dashed rounded-lg p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
          <span className='mt-2 block text-sm font-medium text-gray-900'>
            + CREATE NOTE
          </span>
        </button>
      </Link>
      {/* {bookmarks.length > 0 && (
        <Pagination data={bookmarks} RenderComponent={Bookmark} dataLimit={3} />
      )} */}
    </div>
  )
}
