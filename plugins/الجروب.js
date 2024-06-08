//import db from '../lib/database.js'

let handler = async (m, { conn, participants, groupMetadata }) => {
    const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/avatar_contact.png'
    const { isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, delete: del } = global.db.data.chats[m.chat]
    const groupAdmins = participants.filter(p => p.admin)
    const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
    const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
    let text = `*⌬─ ─━ ━━ •〘🍒〙• ━━ ━─ ─⌬*
*✦⌈⇖ مــعـلــومـات الــجـروب ⇘⌋✦*

*❖↫ الــأسـم : ${groupMetadata.subject}* 

*❖↫ الــأعـضاء : ${participants.length}*

*❖↫ الــمـالك : @${owner.split('@')[0]}* 

*❖↫ الــمشـرفــين :*
 ${listAdmin}
 
*⌬─ ─━ ━━ •〘🍒〙• ━━ ━─ ─⌬*

❖↫ *تــكـويـن الــمـجمـوعـه :*
*• ${isBanned ? '✅' : '❎'} الــحـظـر*
*• ${welcome ? '✅' : '❎'} الــترحـيـب*
*• ${detect ? '✅' : '❎'} الــكـاشـف*
*• ${del ? '❎' : '✅'} الــحذف*
*• ${antiLink ? '✅' : '❎'} حــذف الـروابــط*

*⌬─ ─━ ━━ •〘🍒〙• ━━ ━─ ─⌬*

*❖↫ إعــدادات الــرسـالـه :*
*• الــتـرحـيب:* ${sWelcome}
*• الـوداع:* ${sBye}
*• الـتــرقـيه:* ${sPromote}
*• الــاعـفاء:* ${sDemote}

*❖↫ الــوصــف :*
${groupMetadata.desc?.toString() || '*لــا يـوجـد وصــف !*} 

  *⌬─ ─━ ━━ •〘🍒〙• ━━ ━─ ─⌬*
            *_『كرزة⊰🍒⊱بوت』_*
`.trim()
    conn.sendFile(m.chat, pp, 'pp.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}

handler.help = ['infogp']
handler.tags = ['group']
handler.command = ['infogrupo', 'groupinfo', 'الجروب'] 
handler.group = true

export default handler
