import { generateWAMessageFromContent } from '@whiskeysockets/baileys'
let handler = async (m, { conn, text, participants, isOwner, isAdmin }) => {
let fakegif = { key: {participant: `0@s.whatsapp.net`, ...("6289643739077-1613049930@g.us" ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title": '『كرزة⊰🍒⊱بوت』', "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': '『كرزة⊰🍒⊱بوت』', 'jpegThumbnail': true }}}
let users = participants.map(u => conn.decodeJid(u.id))
let q = m.quoted ? m.quoted : m || m.text
let c = m.quoted ? await m.getQuotedObj() : m.msg || m.text
let msg = conn.cMod(m.chat, generateWAMessageFromContent(m.chat, { [m.quoted ? q.mtype : 'extendedTextMessage']: m.quoted ? c.message[q.mtype] : { text: '' || c }}, { quoted: fakegif, userJid: conn.user.id }), text || q.text, conn.user.jid, { mentions: users })
await conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id })
}
handler.help = ['hidetag']
handler.tags = ['group']
handler.command = /^(مخفي|جوطه)$/i
handler.register = true
handler.group = false 
handler.admin = true
export default handler
