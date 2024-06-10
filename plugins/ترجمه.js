import translate from '@vitalets/google-translate-api'
import fetch from 'node-fetch'
let handler = async (m, { args, usedPrefix, command }) => {
let msg = `*⚠️ لاستخدام الامر بشكل صحيح ${usedPrefix + command} (idioma) (texto)*\n*📌 مثال:*\n*${usedPrefix + command} ar Hi brother*\n\n*`
if (!args || !args[0]) return m.reply(msg)  
let lang = args[0]
let text = args.slice(1).join(' ')
const defaultLang = 'es'
if ((args[0] || '').length !== 2) {
lang = defaultLang
text = args.join(' ')}
if (!text && m.quoted && m.quoted.text) text = m.quoted.text
try {      
let result = await translate(`${text}`, { to: lang, autoCorrect: true })
await m.reply('*Traducción:* ' + result.text)
} catch {
try {    
let lol = await fetch(`https://api.lolhuman.xyz/api/translate/auto/${lang}?apikey=${lolkeysapi}&text=${text}`)
let loll = await lol.json()
let result2 = loll.result.translated
await m.reply('*Traducción:* ' + result2)
} catch { 
await m.reply('*⚠️ 404, حاول مره اخرى*')    
}}}
handler.command = /^(translate|ترجمة|ترجمه|ترجم)$/i
export default handler
