// Landing Page
// app\creators\page.tsx -> url/creators

//Update page title metadata
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Branched | Creators",
};

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-full flex-col items-center justify-center">
      Creators
    </main>
  );
}
