// Landing Page
// app\events\page.tsx -> url/events

//Update page title metadata
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Branched | Events",
};

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-full flex-col items-center justify-center">
      events
    </main>
  );
}
