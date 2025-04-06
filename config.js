require("dotenv").config();
const fs = require("fs");
const path = require("path");

//ALL GLOBAL
global.ownername = process.env.OWNER_NAME || "+｡:.(*∀TOM)ﾉﾟ𝙼Ꭷ𝙳𝓩𝓨ćѦѦﾟ.:｡𝐊𝐢𝐧𝐠_𝐚𝐭𝐨𝐦𝐢𝐜  🗿   ⇶✴☞ʍⲟԃƶ❈ +｡:.(*∀TOM)ﾉﾟ𝙼Ꭷ𝙳𝓩𝓨ćѦѦﾟ.:｡";
global.owner = process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.split(",") : [] || "254762654167";
global.packname = process.env.BOT_NAME || "+｡:.(*∀TOM)ﾉﾟ𝙼Ꭷ𝙳𝓩𝓨ćѦѦﾟ.:｡
    𝐊𝐢𝐧𝐠_𝐚𝐭𝐨𝐦𝐢𝐜  🗿   ⇶✴☞ʍⲟԃƶ
+｡:.(*∀TOM)ﾉﾟ𝙼Ꭷ𝙳𝓩𝓨ćѦѦﾟ.:｡";
global.author = process.env.OWNER_NAME || "+｡:.(*∀TOM)ﾉﾟ𝙼Ꭷ𝙳𝓩𝓨ćѦѦﾟ.:｡+｡:.(*∀TOM)ﾉﾟ𝙼Ꭷ𝙳𝓩𝓨ćѦѦﾟ.:｡";
global.channelChatId = process.env.CHANNEL_JID || "120363333589976873@newsletter";
global.logo = process.env.LOGO_URL || "https://files.catbox.moe/fqonna.jpg";
global.bench = process.env.BEN_CHANNEL || "https://whatsapp.com/channel/0029Vasu3qP9RZAUkVkvSv32";
global.benrepo = process.env.BEN_REPO || "https://github.com/NOTHING-MD420/Ben-bot";
global.benrepodl = process.env.BEN_REPODL || "https://github.com/NOTHING-MD420/Ben-bot/archive/refs/heads/main.zip";

//AUTO FUNCTIONER DONT CHANGE IT
global.antidelete = process.env.ANTIDELETE === "true";
global.ANTICALL = process.env.ANTICALL === "false";
global.ANTIVIEWONCE = process.env.ANTIVIEWONCE === "true";
global.antilink = process.env.ANTILINK === "true";
global.antilinkremove = process.env.ANTILINK_REMOVE === "true";
global.antilinkwarn = process.env.ANTILINK_WARN === "true";
global.antibad = process.env.ANTIBAD === "true";
global.antibadwarn = process.env.ANTIBAD_WARN === "true";
global.antibadremove = process.env.ANTIBAD_REMOVE === "true";
global.autodl = process.env.AUTO_DL === "true";
global.antibot = process.env.ANTIBOT === "true";
global.antibotwarn = process.env.ANTIBOT_WARN === "true";
global.antibotremove = process.env.ANTIBOT_REMOVE === "true";
global.antiforward = process.env.ANTI_FORWARD === "true";
global.antiforward_private = process.env.ANTI_FORWARDPRIVATE === "true";
global.antiforward_gc = process.env.ANTI_FORWARDGC === "true";
global.antiforward_gc_private = process.env.ANTI_FORWARDGC_PRIVATE === "true";
global.antiforward_all = process.env.ANTI_FORWARDALL === "true";
global.autoreadmessages = process.env.AUTO_READ_MESSAGES === "true";
global.autoRecord = process.env.AUTO_RECORD === "true";
global.available = process.env.AVAILABLE === "true";
global.unavailable = process.env.UNAVAILABLE === "true";
global.autoTyping = process.env.AUTO_TYPING === "true";
global.autoreact = process.env.AUTO_REACT === "true";
global.autoupdate = process.env.AUTO_UPDATE === "true";
global.autoViewStatus = process.env.AUTO_VIEW_STATUS === "true";
global.autobio = process.env.AUTO_BIO === "true";
global.autoreply = process.env.AUTO_REPLY === "true";
global.autoreplypr = process.env.AUTO_REPLYPR === "true";
global.autoreplygc = process.env.AUTO_REPLYGC === "true";
global.chatbot = process.env.CHATBOT === "true";
global.prefix = process.env.PREFIX || ".";
global.sudo_user = process.env.SUDO_USERS ? process.env.SUDO_USERS.split(",") : ["+93744215959", "93730285765"];
global.command = process.env.ALL_CMD || "1000+";
global.version = process.env.VERSION || "V1";
global.autosavestatus = false;
global.AUTOSTATUS_REACT = false;
global.autoLikeReply = false;
global.autoLikeEmoji = "💚";
global.welcome = false;
global.LEVELUP = true;


//AUTO MESSAGE RESPONSE
global.mess = {
    success: process.env.MESSAGE_SUCCESS || '𝙳𝚘𝚗𝚎',
    wait: process.env.MESSAGE_WAIT || '*`⏰ 𝙷𝚘𝚕𝚍 𝙾𝚗 𝙿𝚛𝚘𝚌𝚎𝚜𝚜𝚒𝚗𝚐...`*',
    admin: process.env.MESSAGE_ADMIN || '_*❗This Command Can Only Be Used By Group Admins !*_',
    botAdmin: process.env.MESSAGE_BOT_ADMIN || '_*❗This Command Can Only Be Used When Bot Becomes Group Admin !*_',
    OnlyOwner: process.env.MESSAGE_OWNER || '_*❗Yooh motherfucker ..This Command Can Only Be Used By My Owner+｡:.(*∀TOM)ﾉﾟ𝙼Ꭷ𝙳𝓩𝓨ćѦѦﾟ.:｡ !*_',
    OnlyGrup: process.env.MESSAGE_GROUP || '_*❗This Command Can Only Be Used In Group Chat !*_',
    private: process.env.MESSAGE_PRIVATE || '_*❗This Command Can Only Be Used In Private Chat !*_',
    notregist: process.env.MESSAGE_NOT_REGIST || '_*You are not registered in the Bot Database. Please register first*_',
    premium: process.env.MESSAGE_PREMIUM || '_*Premium only" Want Premium? Chat Owner*_',
    endLimit: process.env.MESSAGE_END_LIMIT || '_*Your Daily Limit Has Been Used Up, The Limit Will Be Reset Every 00:00 AM_*.',
    capvid: process.env.CAPTION_VIDEO || '> © 𝑷𝑶𝑾𝑬𝑹𝑬𝑫 𝑩𝒀 +｡:.(*∀TOM)ﾉﾟ𝙼Ꭷ𝙳𝓩𝓨ćѦѦﾟ.:｡𝐊𝐢𝐧𝐠_𝐚𝐭𝐨𝐦𝐢𝐜  🗿   ⇶✴☞ʍⲟԃƶ',
};
    
//DONT CHANGE IT API KEY
global.api = {
    screenshotapi: 'd539a7b1cd55ebccba702c2a0f96eff9',
    fgmods: 'm2XBbNvz',
    screenshotapiv2: '054b4800d6664f8fb79e63e419b3c834',
    removebg: '829301093',
};


//DON'T DELETE IT
global.apilinode = '' // apikey vps account linode
global.apitokendo = '' 
global.urldb = '';
global.limitawal = {
    premium: "Infinity",
    monayawal: 0,
    free: 100
}
//RPG LIMIT
global.buruan = {
   ikan: 5,
   ayam: 5,
   kelinci: 5,
   domba: 5,
   sapi: 5,
   gajah: 5
}
global.rpg = {
   darahawal: 100,
   energyawal: 252,
   besiawal: 5,
   goldawal: 1,
   emeraldawal: 1,
   umpanawal: 1,
   potionawal: 1
}

//—————「 RUNNING 」—————//
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
