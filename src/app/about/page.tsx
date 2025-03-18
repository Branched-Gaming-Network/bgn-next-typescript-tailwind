// Landing Page
// app\about\page.tsx -> url/about

//Update page title metadata
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Branched | About",
};

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-full flex-col items-center justify-center">
      about
    </main>
  );
}
