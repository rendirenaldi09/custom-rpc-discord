const ID = '1240384261068951642'; 
const DiscordRPC = require('discord-rpc');
const RPC = new DiscordRPC.Client({ transport: 'ipc' });

DiscordRPC.register(ID);

async function activity() {
  if (!RPC) return;

  RPC.setActivity({
    details: "RPC DETAILS",
    state: "RPC STATE",
    startTimestamp: new Date(),
    largeImageKey: "https://media.tumblr.com/tumblr_mcnvyynTMn1r9vm7f.gif",
    largeImageText: "LARGE IMAGE TEXT",
    smallImageKey: "https://c.tenor.com/TgKK6YKNkm0AAAAi/verified-verificado.gif",
    smallImageText: "SMALL IMAGE TEXT",
    instance: false,
    buttons: [
      { label: "Discord", url: "https://discord.com/invite/M53VjNcJWX" },
      { label: "Instagram", url: "https://www.instagram.com/highlife.rp" },
    ],
  });
}

RPC.on('ready', async () => {
    console.log('RPC Presence Up!');
    activity();

    setInterval(() => {
      activity();
    }, 5000)
});

RPC.login({ clientId: ID }).catch(console.error);

