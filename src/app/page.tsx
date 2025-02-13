// Landing Page
// app\page.tsx -> url/
import BrandLogo from "../../brand-art/brandlogo";
import { Connect } from "../../brand-art/connect";
import TreeSVG from "../../brand-art/TreeSVG";

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-full flex-col items-center justify-between">
      <div className="min-w-full px-28 pt-40 flex ">
        <div className="lg:w-3/5 w-full h-full flex flex-col mt-24 ">
          <h1 className="font-black text-7xl text-left text-text-100">
            Branch Out...
          </h1>
          <p className="pl-12 pt-12 text-2xl text-text-200">
            Find your home for new and exciting experiences. Connect with our
            community of streamers, gamers, enthusiasts, and everyone in
            between and discover endless ventures to explore. Cultivate your
            experience to fit{" "}
            <span className="font-semibold italic">your tastes</span> using our
            array of community tags, roles, and bot commands.
          </p>
          <div className="flex min-w-full">
            <button className="py-1 text-xl font-semibold drop-shadow-2xl shadow-background-50 w-1/4 rounded-xl ml-12 mt-12 bg-secondary-600 text-text-50 hover:bg-secondary-500 hover:text-text-950 transition ease-in-out hover:scale-105 duration-150">
              Join Now!
            </button>
            <button className="py-1 text-xl font-semibold outline outline-secondary-600 drop-shadow-xl w-1/4 rounded-xl ml-12 mt-12 hover:bg-secondary-300 text-text-100 hover:text-text-950 transition ease-in-out hover:scale-105 hover:outline-none duration-200">
              Projects
            </button>
          </div>
        </div>
        <div className="lg:w-2/5 w-full lg:visible invisible flex justify-center">
          <TreeSVG className="w-4/5 fill-primary-500 "/>
        </div>
      </div>
      <div className="min-w-full px-12 flex">
        <div className="lg:w-2/5 w-full lg:visible invisible flex justify-center">
          {/* Connected svg placeholder */}
          <Connect className="w-4/5" fill="#15b740"/>
        </div>
        <div className="lg:w-3/5 w-full h-full flex flex-col mt-24 ">
          <h1 className="font-black text-7xl text-left text-text-100">
            Get Connected...
          </h1>
          <p className="pl-12 pt-12 text-2xl text-text-200">
            Looking to create versatile content for your audience? Check out our
            tiered collaboration system. Explore our selection of tools,
            tutorials, and opportunities. Also read through our partner list to
            find other like-minded content creators to collaborate with.
          </p>
          <div className="flex min-w-full">
            <button className="py-1 text-xl font-semibold drop-shadow-2xl shadow-background-50 w-1/4 rounded-xl ml-12 mt-12 bg-secondary-600 text-text-50 hover:bg-secondary-500 hover:text-text-950 transition ease-in-out hover:scale-105 duration-150">
              Get Connected
            </button>
            <button className="py-1 text-xl font-semibold outline outline-secondary-600 drop-shadow-xl w-1/4 rounded-xl ml-12 mt-12 hover:bg-secondary-300 text-text-100 hover:text-text-950 transition ease-in-out hover:scale-105 hover:outline-none duration-200">
              Partners
            </button>
          </div>
        </div>
      </div>
      <div className="w-full px-12 flex justify-center space-x-4">
        <h1 className="text-xl font-semibold my-auto ">Stay up to date:</h1>
        <textarea className="bg-transparent resize-none outline outline-1 rounded-md outline-background-600 text-left pl-2 flex justify-center" placeholder="johndoe@email.com" rows={1}></textarea>
        <button className="ml-8 px-8 font-semibold font-mono outline outline-secondary-600 drop-shadow-xl rounded-xl text-text-100 transition ease-in-out hover:scale-105 duration-300">Submit</button>
      </div>
      {/* <div className="static top-0">
        <BrandLogo className="min-h-screen min-w-screen opacity-100" fill="#121212"/>
      </div> */}
      {/* <div className="mb-12 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold ">
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */}
    </main>
  );
}
