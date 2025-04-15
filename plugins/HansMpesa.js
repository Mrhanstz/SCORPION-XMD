const axios = require("axios");
const { cmd } = require("../command");


cmd({
    pattern: "hanspayment",
    alias: ["pesa"],
    desc: "menu the bot",
    category: "menu",
    react: "♦️",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `
╭───❍SUPPORT🥹🫡❍*
‎├⬡ .ᴍᴘᴇsᴀ*
‎├⬡ .ᴀɪʀᴛᴇʟᴍᴏɴᴇʏ*
‎╰──────────❍*`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://github.com/Mrhanstz/VORTEX-XMD/raw/refs/heads/main/HansTz/HansTz.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363352087070233@newsletter',
                        newsletterName: "HANSTZ PAYMENT METHOD ",
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
