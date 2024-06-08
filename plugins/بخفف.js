let timeout = 60000
let poin = 500
let poin_lose = -100
let poin_bot = 200
let handler = async (m, { conn, usedPrefix }) => {
conn.suit = conn.suit ? conn.suit : {}
let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
if (Object.values(conn.suit).find(room => room.id.startsWith('suit') && [room.p, room.p2].includes(m.sender))) throw '⚠️ *_. أنهي لعبتك قبل أن تبدأ لعبة أخرى._*'
let textquien = `*من تريد تحديه؟!*\n*ضع علامة على شخص ما, 📌 مثال:*\n\n${usedPrefix}suitpvp @${owner[1]}`
if (!m.mentionedJid[0]) return m.reply(textquien, m.chat, { mentions: conn.parseMention(textquien)})
if (Object.values(conn.suit).find(room => room.id.startsWith('suit') && [room.p, room.p2].includes(m.mentionedJid[0]))) throw `⚠️ *_الشخص الذي تريد تحديه موجود في لعبة أخرى, انتظر لحظة حتى ينتهي من اللعب._*`
let id = 'بدلة_' + new Date() * 1
let caption = `🎮 𝙶𝙰𝙼𝙴𝚂 - 𝙿𝚅𝙿 - 𝙶𝙰𝙼𝙴𝚂 🎮\n\n—◉ @${m.sender.split`@`[0]} لقد تحدى @${m.mentionedJid[0].split`@`[0]} إلى معركة واحدة في حجرة،ورقة،مقص.`.trim()
let footer = `◉ اكتب "موافق" للعب\n◉ اكتب "انسحب" ان  كنت خائفا`
let imgplaygame = `https://www.merca2.es/wp-content/uploads/2020/05/Piedra-papel-o-tijera-0003318_1584-825x259.jpeg`
conn.suit[id] = {
chat: await conn.sendButton(m.chat, caption, footer, imgplaygame, [[`Aceptar`], [`Rechazar`]], null, {mentions: conn.parseMention(caption)}),
id: id,
p: m.sender,
p2: m.mentionedJid[0],
status: 'wait',
waktu: setTimeout(() => {
if (conn.suit[id]) conn.reply(m.chat, `⏳ *_انتهت المهلة, تم إلغاء اللعبة بسبب عدم الاستجابة._*`, m)
delete conn.suit[id]
}, timeout), poin, poin_lose, poin_bot, timeout
}}
handler.help = ['suitpvp *@tag*']
handler.tags = ['game']
handler.command = /^pvp|تحدي?$/i
handler.group = true
handler.game = true
export default handler
