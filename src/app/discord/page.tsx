// Landing Page
// app\discord\page.tsx -> url/discord

import DiscordEmbed from "../components/DiscordEmbed";

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-full flex-col items-center justify-center">
      <DiscordEmbed/>
    </main>
  );
}
