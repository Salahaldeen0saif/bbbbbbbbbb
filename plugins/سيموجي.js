import * as emoji from 'emoji-api'
import { Sticker, StickerTypes } from 'wa-sticker-formatter'

var handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `تحويل إيموجي الى ملصق مثال :\n*.semoji* 😍`
    let name = await conn.getName(m.sender)
    let emonya = args[1] ? await emoji.get(args[1]).twemoji() : await emoji.get(args[0]).twemoji()
    const sticker = new Sticker(emonya, { pack: packname, author: name, type: StickerTypes.DEFAULT })
    const jadi = await sticker.toBuffer()
    await conn.sendFile(m.chat, jadi, 'sticker.webp', '', m)
  }
handler.help = ['semoji']
handler.tags = ['sticker'] 
handler.command = /^(سيم)$/i
export default handler
