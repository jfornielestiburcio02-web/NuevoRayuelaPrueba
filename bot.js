const { Client, GatewayIntentBits } = require('discord.js');
const { initializeApp } = require('firebase/app');
const { getFirestore, doc, setDoc } = require('firebase/firestore');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers] });

// Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA2VhWJq9mKGsLbHnWf7MUQhRuuvCodXsk",
  authDomain: "studio-6671023604-36e24.firebaseapp.com",
  projectId: "studio-6671023604-36e24",
  storageBucket: "studio-6671023604-36e24.firebasestorage.app",
  messagingSenderId: "852813372948",
  appId: "1:852813372948:web:a8ad29a18704806fed5101"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

client.on('ready', async () => {
  console.log(`Bot listo: ${client.user.tag}`);

  const guild = await client.guilds.fetch('1423872157808590920');
  const members = await guild.members.fetch();

  members.forEach(async member => {
    // Obtenemos roles del miembro
    const roles = member.roles.cache.map(r => r.name).filter(r => r !== '@everyone');

    // Guardamos en Firebase
    await setDoc(doc(db, "usuarios", member.id), { roles });
  });
});

client.login('token');