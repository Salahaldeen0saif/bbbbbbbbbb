import MessageType from '@whiskeysockets/baileys'
let handler = async (m, { conn, usedPrefix, command }) => {
let room = Object.values(conn.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
if (room == undefined) return conn.reply(m.chat, `أنت لست في أي لعبة \n\nلبدء غرفة جديدة, يمكنك استخدام: ${usedPrefix} مبارة جديدة`, m)
delete conn.game[room.id]
await m.reply('[ ✔ ] _تمت ازاله الغرفة_')}
handler.command = /^(delttt|deltt|delxo|كنسل)$/i
handler.fail = null
export default handler
