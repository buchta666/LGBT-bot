const { Client, GatewayIntentBits } = require('discord.js');
const express = require('express');
const app = express();

// --- Webserver pre Render ---
app.get('/', (req, res) => {
  res.send('Bot je online!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🌐 Webserver beží na porte ${PORT}`));

// --- Discord Bot ---
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.once('ready', () => {
  console.log(`✅ Prihlásený ako ${client.user.tag}!`);
});

client.on('messageCreate', message => {
  if (message.content === '!ping') {
    message.reply('🏓 Pong!');
  }
});

// --- Token z Environment Variable ---
client.login(process.env.TOKEN);
