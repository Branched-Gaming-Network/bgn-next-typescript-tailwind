// Landing Page
// app\projects\page.tsx -> url/projects

//Update page title metadata
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Branched | Projects",
};

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-full flex-col items-center justify-center">
      Projects
    </main>
  );
}
