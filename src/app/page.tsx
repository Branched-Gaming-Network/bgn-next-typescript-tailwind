// Landing Page
// app\page.tsx -> url/
import TreeLeft from "../../brand-art/tree-left";
import TreeRight from "../../brand-art/tree-right";
import Link from "next/link";
import NewsletterSignUp from "./components/NewsletterSignUp";

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-full flex-col items-center justify-between py-24">
      <div className="min-w-full px-28 flex py-24">
        <div className="lg:w-3/5 w-full flex flex-col mt-24 ">
          <h1 className="font-black text-7xl text-left text-text-100">
            Branch Out...
          </h1>
          <p className="pl-12 pt-12 text-2xl text-text-200">
            Find your home for new and exciting experiences. Connect with our
            community of streamers, gamers, enthusiasts, and everyone in between
            and discover endless ventures to explore. Cultivate your experience
            to fit <span className="font-semibold italic">your tastes</span>{" "}
            using our array of community tags, roles, and bot commands.
          </p>
          <div className="flex min-w-full">
            <Link
              href="/discord"
              className="py-1 text-xl font-semibold drop-shadow-2xl shadow-background-50 w-1/4 rounded-xl ml-12 mt-12 bg-secondary-600 text-text-50 hover:bg-secondary-500 hover:text-text-950 transition ease-in-out hover:scale-105 duration-150"
            >
              <button className="w-full h-full">Join Now!</button>
            </Link>
            {/* <Link
              href="/projects"
              className="py-1 text-xl font-semibold outline outline-secondary-600 drop-shadow-xl w-1/4 rounded-xl ml-12 mt-12 hover:bg-secondary-300 text-text-100 hover:text-text-950 transition ease-in-out hover:scale-105 hover:outline-none duration-200"
            >
              <button className="w-full h-full">Projects</button>
            </Link> */}
          </div>
        </div>
        <div className="lg:w-2/5 w-full max-h-[600px] lg:visible invisible flex justify-center">
          <TreeRight className="w-4/5 fill-primary-500" />
        </div>
      </div>

      <div className="min-w-full  px-28 flex py-24 mb-24">
        <div className="lg:w-2/5 w-full max-h-[600px] lg:visible invisible flex justify-center">
          <TreeLeft className=" fill-primary-500" />
        </div>
        <div className="lg:w-3/5 w-full flex flex-col mt-24 ">
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
            {/* <Link
              href="/creators/join"
              className="py-1 text-xl font-semibold drop-shadow-2xl shadow-background-50 w-1/4 rounded-xl ml-12 mt-12 bg-secondary-600 text-text-50 hover:bg-secondary-500 hover:text-text-950 transition ease-in-out hover:scale-105 duration-150"
            >
              <button className="w-full h-full">Get Connected</button>
            </Link> */}
            {/* <Link
              href="/creators"
              className="py-1 text-xl font-semibold outline outline-secondary-600 drop-shadow-xl w-1/4 rounded-xl ml-12 mt-12 hover:bg-secondary-300 text-text-100 hover:text-text-950 transition ease-in-out hover:scale-105 hover:outline-none duration-200"
            >
              <button className="w-full h-full">Creators</button>
            </Link> */}
          </div>
        </div>
      </div>

      {/* <NewsletterSignUp/> */}
    </main>
  );
}
