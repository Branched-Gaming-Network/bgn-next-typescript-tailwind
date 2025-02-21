// Landing Page
// app\discord\page.tsx -> url/discord

//Component Imports
import DiscordEmbed from "../components/DiscordEmbed";

//Update page title metadata
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Branched | Discord',
};

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-full flex-col items-center justify-center">
      <DiscordEmbed/>
    </main>
  );
}
