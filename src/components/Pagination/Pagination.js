import { useState } from 'react'
import {
  ArrowNarrowLeftIcon,
  ArrowNarrowRightIcon,
} from '@heroicons/react/solid'

export default function Pagination({ data, RenderComponent, dataLimit }) {
  const [pages] = useState(Math.ceil(data.length / dataLimit))
  const [currentPage, setCurrentPage] = useState(1)

  function goToNextPage() {
    if (pages > currentPage) {
      setCurrentPage((page) => page + 1)
    }
  }

  function goToPreviousPage() {
    if (currentPage > 1) {
      setCurrentPage((page) => page - 1)
    }
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent)
    setCurrentPage(pageNumber)
  }

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit
    const endIndex = startIndex + dataLimit
    return data.slice(startIndex, endIndex)
  }

  const getPaginationGroup = () => {
    let start = 0
    return new Array(Math.ceil(data.length / dataLimit))
      .fill()
      .map((_, idx) => start + idx + 1)
  }

  return (
    <div>
      <div>
        {getPaginatedData().map((d, idx) => (
          <RenderComponent key={idx} data={d} />
        ))}
      </div>

      <nav className='border-t border-gray-200 px-4 flex items-center justify-between sm:px-0'>
        <div onClick={goToPreviousPage} className='-mt-px w-0 flex-1 flex'>
          <a
            href='#'
            className='border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300'>
            <ArrowNarrowLeftIcon
              className='mr-3 h-5 w-5 text-gray-400'
              aria-hidden='true'
            />
            Previous
          </a>
        </div>
        <div className='hidden md:-mt-px md:flex'>
          {getPaginationGroup().map((item, index) => (
            <a
              key={index}
              onClick={changePage}
              href='#'
              className='border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium'>
              {item}
            </a>
          ))}
        </div>
        <div
          onClick={goToNextPage}
          className='-mt-px w-0 flex-1 flex justify-end'>
          <a
            href='#'
            className='border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300'>
            Next
            <ArrowNarrowRightIcon
              className='ml-3 h-5 w-5 text-gray-400'
              aria-hidden='true'
            />
          </a>
        </div>
      </nav>
    </div>
  )
}
