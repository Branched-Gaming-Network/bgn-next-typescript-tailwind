const DiscordEmbed = () => {
  return (
    <iframe
      src="https://discord.com/widget?id=705103840776683581&theme=dark"
      className="rounded-3xl px-3 md:px-0"
      title="Discord Invite Widget"
      width="500"
      height="500"
    //   allowTransparency={true}
      sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
    ></iframe>
  );
};

export default DiscordEmbed;
