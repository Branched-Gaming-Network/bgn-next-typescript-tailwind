import Link from 'next/link';

export default function NotFound() {
    return(
        <main className='text-center h-screen flex'>
            <div className='m-auto px-12'>
                <h1 className='text-2xl lg:text-5xl font-bold'>404 | There was a problem.</h1>
                <p className='text-lg lg:text-2xl'>We couldn't find the page you were looking for.</p>
                <p className='text-md lg:text-xl'>Go back to the <Link href='/' className='text-blue-500 underline'>Landing Page</Link></p>
            </div>
        </main>
    )
}