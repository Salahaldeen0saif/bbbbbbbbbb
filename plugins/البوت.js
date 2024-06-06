import { createHash } from 'crypto'
import { canLevelUp, xpRange } from '../lib/levelling.js'
import fetch from 'node-fetch'
import fs from 'fs'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
import { promises } from 'fs'
import { join } from 'path'
const time = moment.tz('Egypt').format('HH')
let wib = moment.tz('Egypt').format('HH:mm:ss')
//import db from '../lib/database.js'

let handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
await conn.sendMessage(m.chat, {
   react: {
 text: "🍒",
 key: m.key,
   }
  })
    let d = new Date(new Date + 3600000)
    let locale = 'ar'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`
let videoUrl = 'https://telegra.ph/file/086de8b6c9c8d2f790426.mp4';
  let vn = './media/menu.mp3';
  const user = global.db.data.users[m.sender];
  const {money, joincount} = global.db.data.users[m.sender];
  const {exp, limit, level, role} = 
    global.db.data.users[m.sender];
let { min, xp, max } = xpRange(user.level, global.multiplier)
let username = conn.getName(who)
let math = max - xp
let sn = createHash('md5').update(who).digest('hex')
let totalreg = Object.keys(global.db.data.users).length;
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(900) 
  const taguser = '@' +  m.sender.split('@s.whatsapp.net')[0];
let str = `*◞♥️بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ♥️◜*
 *↻╍╍━┛🕋┗━╍╍↺*
*◞{إِنَّمَا ٱلتَّوۡبَةُ عَلَى ٱللَّهِ لِلَّذِينَ يَعۡمَلُونَ ٱلسُّوٓءَ بِجَهَٰلَةٖ ثُمَّ يَتُوبُونَ مِن قَرِيبٖ فَأُوْلَٰٓئِكَ يَتُوبُ ٱللَّهُ عَلَيۡهِمۡۗ وَكَانَ ٱللَّهُ عَلِيمًا حَكِيمٗا}◜*
*↻╍╍━┛🕋┗━╍╍↺*
*◞❐ أهـلا وسـهـلاً بـك يـا ${taguser}
*◞❐ إسـم الـبـوت ⇠『『كرزة⊰🍒⊱بوت』』◈◜*
*◞❐ إسـم الـمـنـصـة ⇠『HEROKU』◈◜*
*◞❐ الـمـطـور ⇠『𝑺𝑨𝑳𝑨𝑯』◈◜*
*◞❐ عـدد الـمـسـتـخـدمـيـن ${rtotalreg}
*◞❐ وقـت الـتـشـغـيـل ${uptime}
*◞❐ الـتـوقـيـت ${date}
*◞❐ الـإصـدار الـجـديـد ⇠『v.1』◈◜*

          *『اوامر⊰🍒⊱كرزة 』*

*⌬─ ─━ ━━ •〘🍒〙• ━━ ━─ ─⌬*

*『•ك1 ⇠ قسم ⊰👥⊱ الجروبات』*
*『•ك2 ⇠ قسم ⊰📿⊱ الدين』*
*『•ك3 ⇠ قسم ⊰🎮⊱الترفيه』*
*『•ك4 ⇠ قسم ⊰🔄⊱ التحويل』*
*『•ك5 ⇠ قسم ⊰⏯️⊱ التنزيل』*
*『•ك6 ⇠ قسم ⊰🔊⊱ الصوتيات』*
*『•ك7 ⇠ قسم ⊰🤖⊱ المطور』*
*『•كرزه   ⇠ جميع ⊰🍒⊱ الاقسام』*

*⌬─ ─━ ━━ •〘🍒〙• ━━ ━─ ─⌬*

*◞❐ مـلاحـظـة 🛑 ◈◜*
*◞❐ يـجـب عـلـيـك كـتـابـة نـقـطـة قـبـل كـل أمـر مـثـل ⇠ 『 .ك1 』◈◜*`


conn.sendMessage(m.chat, {
        video: { url: videoUrl }, caption: str,
  mentions: [m.sender,global.conn.user.jid],
  gifPlayback: true,gifAttribution: 0
    }, { quoted: m });
}; 
handler.help = ['main']
handler.tags = ['group']
handler.command = ['قلبي','اوامر','المهام'] 

export default handler
function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

    function ucapan() {
      const time = moment.tz('Egypt').format('HH')
      let res = "بداية يوم سعيده ☀️"
      if (time >= 4) {
        res = "صباح الخير 🌄"
      }
      if (time >= 10) {
        res = "مساء الخير ☀️"
      }
      if (time >= 15) {
        res = "مساء الخير 🌇"
      }
      if (time >= 18) {
        res = "مساء الخير 🌙"
      }
      return res
      }
