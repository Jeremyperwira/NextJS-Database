'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
import DashboardSkeleton from '@/app/ui/skeletons';
import { Suspense } from 'react';

 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    
    <div className='space-y-2 bg-slate-100 h-full max-h-full flex flex-col justify-center items-center rounded-md'>
      <h2 className='animate-typing overflow-hidden text-sm font-medium text-green-900 transition-colors'>Ups... Sepertinya ada Kesalahan!</h2>
      <button  className=' 
      rounded-lg bg-green-900 px-3 py-2 text-sm font-medium text-white transition-colors transition ease-in-out hover:-translate-y-0.5 hover:scale-105 delay-200 duration-300 hover:bg-yellow-500 md:text-base'
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Coba lagi
      </button>
    </div>

    
    
  )
}   