// Routed page 
// app\colors\page.tsx -> url/colors

//Update page title metadata
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Next.js Template | Colors',
};

export default function Example() {
    return (
        <main className="h-min-screen flex">
            <div className="py-24 w-full text-center lg:grid lg:grid-cols-3 space-y-12 lg:space-y-0">
                <div className='flex flex-col justify-items-center '>
                    <h1 className="text-3xl font-sans font-semibold">Primary</h1>
                    <div className="bg-primary-50 w-5/6 h-24 mx-auto flex">
                        <h4 className='rounded-xl bg-background-800 h-fit w-fit m-auto p-4 text-lg'>#e8fcee</h4>
                    </div>
                    <div className="bg-primary-100 w-5/6 h-24 mx-auto flex">
                        <h4 className='rounded-xl bg-background-800 h-fit w-fit m-auto p-4 text-lg'>#d1fadc</h4>
                    </div>
                    <div className="bg-primary-200 w-5/6 h-24 mx-auto flex">
                        <h4 className='rounded-xl bg-background-800 h-fit w-fit m-auto p-4 text-lg'>#a4f4b9</h4>
                    </div>
                    <div className="bg-primary-300 w-5/6 h-24 mx-auto flex">
                        <h4 className='rounded-xl bg-background-800 h-fit w-fit m-auto p-4 text-lg'>#76ef96</h4>
                    </div>
                    <div className="bg-primary-400 w-5/6 h-24 mx-auto flex">
                        <h4 className='rounded-xl bg-background-800 h-fit w-fit m-auto p-4 text-lg'>#48ea73</h4>
                    </div>
                    <div className="bg-primary-500 w-5/6 h-24 mx-auto flex">
                        <h4 className='rounded-xl bg-background-800 h-fit w-fit m-auto p-4 text-lg'>#1be450</h4>
                    </div>
                    <div className="bg-primary-600 w-5/6 h-24 mx-auto flex">
                        <h4 className='rounded-xl bg-background-800 h-fit w-fit m-auto p-4 text-lg'>#15b740</h4>
                    </div>
                    <div className="bg-primary-700 w-5/6 h-24 mx-auto flex">
                        <h4 className='rounded-xl bg-background-800 h-fit w-fit m-auto p-4 text-lg'>#108930</h4>
                    </div>
                    <div className="bg-primary-800 w-5/6 h-24 mx-auto flex">
                        <h4 className='rounded-xl bg-background-800 h-fit w-fit m-auto p-4 text-lg'>#0b5b20</h4>
                    </div>
                    <div className="bg-primary-900 w-5/6 h-24 mx-auto flex">
                        <h4 className='rounded-xl bg-background-800 h-fit w-fit m-auto p-4 text-lg'>#052e10</h4>
                    </div>
                    <div className="bg-primary-950 w-5/6 h-24 mx-auto flex">
                        <h4 className='rounded-xl bg-background-800 h-fit w-fit m-auto p-4 text-lg'>#031708</h4>
                    </div>                    
                </div>
                
                <div className='flex flex-col justify-items-center'>
                    <h1 className="text-3xl font-sans font-semibold">Second</h1>
                    <div className="bg-secondary-50 w-5/6 h-24 mx-auto flex">
                        <h4 className='rounded-xl bg-background-800 h-fit w-fit m-auto p-4 text-lg'>#f7eded</h4>
                    </div>
                    <div className="bg-secondary-100 w-5/6 h-24 mx-auto flex">
                        <h4 className='rounded-xl bg-background-800 h-fit w-fit m-auto p-4 text-lg'>#f0dbdb</h4>
                    </div>
                    <div className="bg-secondary-200 w-5/6 h-24 mx-auto flex">
                        <h4 className='rounded-xl bg-background-800 h-fit w-fit m-auto p-4 text-lg'>#e0b8b8</h4>
                    </div>
                    <div className="bg-secondary-300 w-5/6 h-24 mx-auto flex">
                        <h4 className='rounded-xl bg-background-800 h-fit w-fit m-auto p-4 text-lg'>#d19494</h4>
                    </div>
                    <div className="bg-secondary-400 w-5/6 h-24 mx-auto flex">
                        <h4 className='rounded-xl bg-background-800 h-fit w-fit m-auto p-4 text-lg'>#c27070</h4>
                    </div>
                    <div className="bg-secondary-500 w-5/6 h-24 mx-auto flex">
                        <h4 className='rounded-xl bg-background-800 h-fit w-fit m-auto p-4 text-lg'>#b34d4d</h4>
                    </div>
                    <div className="bg-secondary-600 w-5/6 h-24 mx-auto flex">
                        <h4 className='rounded-xl bg-background-800 h-fit w-fit m-auto p-4 text-lg'>#8f3d3d</h4>
                    </div>
                    <div className="bg-secondary-700 w-5/6 h-24 mx-auto flex">
                        <h4 className='rounded-xl bg-background-800 h-fit w-fit m-auto p-4 text-lg'>#6b2e2e</h4>
                    </div>
                    <div className="bg-secondary-800 w-5/6 h-24 mx-auto flex">
                        <h4 className='rounded-xl bg-background-800 h-fit w-fit m-auto p-4 text-lg'>#471f1f</h4>
                    </div>
                    <div className="bg-secondary-900 w-5/6 h-24 mx-auto flex">
                        <h4 className='rounded-xl bg-background-800 h-fit w-fit m-auto p-4 text-lg'>#240f0f</h4>
                    </div>
                    <div className="bg-secondary-950 w-5/6 h-24 mx-auto flex">
                        <h4 className='rounded-xl bg-background-800 h-fit w-fit m-auto p-4 text-lg'>#120808</h4>
                    </div>
                </div>

                <div className='flex flex-col justify-items-center'>
                    <h1 className="text-3xl font-sans font-semibold">Accent</h1>
                    <div className="bg-accent-50 w-5/6 h-24 mx-auto flex">
                        <h4 className='rounded-xl bg-background-800 h-fit w-fit m-auto p-4 text-lg'>#f8eded</h4>
                    </div>
                    <div className="bg-accent-100 w-5/6 h-24 mx-auto flex">
                        <h4 className='rounded-xl bg-background-800 h-fit w-fit m-auto p-4 text-lg'>#f1dada</h4>
                    </div>
                    <div className="bg-accent-200 w-5/6 h-24 mx-auto flex">
                        <h4 className='rounded-xl bg-background-800 h-fit w-fit m-auto p-4 text-lg'>#e3b5b5</h4>
                    </div>
                    <div className="bg-accent-300 w-5/6 h-24 mx-auto flex">
                        <h4 className='rounded-xl bg-background-800 h-fit w-fit m-auto p-4 text-lg'>#d59090</h4>
                    </div>
                    <div className="bg-accent-400 w-5/6 h-24 mx-auto flex">
                        <h4 className='rounded-xl bg-background-800 h-fit w-fit m-auto p-4 text-lg'>#c76b6b</h4>
                    </div>
                    <div className="bg-accent-500 w-5/6 h-24 mx-auto flex">
                        <h4 className='rounded-xl bg-background-800 h-fit w-fit m-auto p-4 text-lg'>#b94646</h4>
                    </div>
                    <div className="bg-accent-600 w-5/6 h-24 mx-auto flex">
                        <h4 className='rounded-xl bg-background-800 h-fit w-fit m-auto p-4 text-lg'>#943838</h4>
                    </div>
                    <div className="bg-accent-700 w-5/6 h-24 mx-auto flex">
                        <h4 className='rounded-xl bg-background-800 h-fit w-fit m-auto p-4 text-lg'>#6f2a2a</h4>
                    </div>
                    <div className="bg-accent-800 w-5/6 h-24 mx-auto flex">
                        <h4 className='rounded-xl bg-background-800 h-fit w-fit m-auto p-4 text-lg'>#4a1c1c</h4>
                    </div>
                    <div className="bg-accent-900 w-5/6 h-24 mx-auto flex">
                        <h4 className='rounded-xl bg-background-800 h-fit w-fit m-auto p-4 text-lg'>#250e0e</h4>
                    </div>
                    <div className="bg-accent-950 w-5/6 h-24 mx-auto flex">
                        <h4 className='rounded-xl bg-background-800 h-fit w-fit m-auto p-4 text-lg'>#120707</h4>
                    </div>
                </div>
            </div>
        </main>
    )
}