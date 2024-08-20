// Routed page 
// app\example\page.tsx -> url/example

//Update page title metadata
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Next.js Template | Example',
};

export default function Example() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-between pt-24">
            <div className="bg-primary-50/40 dark:bg-primary-950/40 text-secondary-950 dark:text-secondary-50 z-10 flex flex-col w-full items-center justify-between text-center font-mono h-full">
                <div className="bg-primary-200 dark:bg-primary-800 text-secondary-950 dark:text-secondary-50 max-w-5xl h-content w-full items-end justify-center lg:static ">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti vel quos, nostrum et suscipit iure quia consectetur expedita! Ex minima soluta distinctio. Natus ex laudantium quas minima necessitatibus quam suscipit?
                </div>
                <div className="bg-primary-300 dark:bg-primary-700 text-secondary-950 dark:text-secondary-50 max-w-5xl h-content w-full items-end justify-center lg:static ">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti vel quos, nostrum et suscipit iure quia consectetur expedita! Ex minima soluta distinctio. Natus ex laudantium quas minima necessitatibus quam suscipit?
                </div>
                <div className="bg-primary-400 dark:bg-primary-600 text-secondary-950 dark:text-secondary-50 max-w-5xl h-content w-full items-end justify-center lg:static ">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti vel quos, nostrum et suscipit iure quia consectetur expedita! Ex minima soluta distinctio. Natus ex laudantium quas minima necessitatibus quam suscipit?
                </div>
            </div>
        </main>
    )
}