let handler = async (m, { conn, text }) => {
  if (!text) throw '*_⚠️ أضف النص الذي سيرسله البوت_.*'
  m.reply(text, true, {
    contextInfo: {
      mentionedJid: conn.parseMention(text)
    }
  })
}
handler.help = ['mention *<texto>*']
handler.tags = ['tools']

handler.command = /^احا$/i

export default handler
