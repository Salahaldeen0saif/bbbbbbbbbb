import { areJidsSameUser } from '@whiskeysockets/baileys'
import fetch from 'node-fetch' 
let handler = async (m, { conn, args }) => {
    let group = m.chat
    if (/^[0-9]{5,16}-?[0-9]+@g\.us$/.test(args[0])) group = args[0]
    if (!/^[0-9]{5,16}-?[0-9]+@g\.us$/.test(group)) throw '⚠️ لا يمكن استخدام هذا الامر إلا في المجموعات'
    let pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/avatar_contact.png'
    let groupMetadata = await conn.groupMetadata(group)
    if (!groupMetadata) throw 'بيانات تعريف المجموعة غير محددة :\\'
    if (!('participants' in groupMetadata)) throw 'لم يتم تعريف المشاركين :('
    let me = groupMetadata.participants.find(user => areJidsSameUser(user.id, conn.user.id))
    if (!me) throw '✳️ أنا لست في تلك المجموعة :('
    if (!me.admin) throw '✳️ البوت ليس مسؤول'
    await conn.reply(m.chat, global.wait, m)
    await conn.sendNyanCat(m.chat, 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group), await (await fetch(pp)).buffer(), `${groupMetadata.subject}`, null, 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group), m)
}
handler.help = ['Link']
handler.tags = ['group']
handler.command = ['link', 'لينك'] 
handler.Admin = true
handler.group = false 

export default handler
