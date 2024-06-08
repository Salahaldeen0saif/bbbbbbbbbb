import db from '../lib/database.js'
import { createHash } from 'crypto'
import fs from 'fs'

let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  if (user.registered === true) throw `✳️ انت مسجل مسبقا\n\nهل تريد التسجيل مرة أخرى؟\n\n 📌 استخدم هذا الأمر لحذف السجل الخاص بك \n*${usedPrefix}غير منتظم* <الرقم السري>`
  if (!Reg.test(text)) throw `⚠️ تنسيق غير صحيح\n\n ✳️ استخدم الاوامر: *${usedPrefix + command} اللقب.العمر*\n📌مثال : *${usedPrefix + command}* ${name2}.16`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw '*_✳️ لا يمكن أن يكون اللقب فارغًا_*'
  if (!age) throw '*_✳️ لا يمكن أن يكون العمر فارغًا_*'
  if (name.length >= 30) throw '*_✳️ اللقب طويل جدا_*' 
  age = parseInt(age)
  if (age > 100) throw '*_👴🏻 دييييم الحاج لسه يستخدم البوت حاسبو بيكون بايدينا_*'
  if (age < 5) throw '*_🚼  اوباااا بالله رجع التلفون لصاحبه وروح ارضع_*'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let str = `
*◈「 •📇مسجل📇•」◈*
*┃›* *اللقب:* ${name}
*┃›* *العمر* : ${age} سنة
*┃›* *الرقم السري* :
*┃•* ${sn}
*╰━━⬣*`
await conn.sendUrl(m.chat, str, m, {
         externalAdReply: {
            mediaType: 1,
            renderLargerThumbnail: true,
            thumbnail: nyanregis,
            thumbnailUrl: nyanregis,
            title: `${saludo}`,
         }
      })
}
handler.help = ['reg'].map(v => v + ' *<nombre.edad>*')
handler.tags = ['rg']

handler.command = ['تسجيل', 'reg', 'register', 'سجليني'] 

export default handler


var ase = new Date();
                        var waktoonyabro = ase.getHours();
                        switch(waktoonyabro){
                case 0: waktoonyabro = `*اتمنى لك ليلة هانئة 🌙*`; break;
                case 1: waktoonyabro = `*اتمنى لك ليلة هانئة 💤*`; break;
                case 2: waktoonyabro = `*اتمنى لك ليلة هانئة 🦉*`; break;
                case 3: waktoonyabro = `*اتمنى لك صباحا سعيدا ✨*`; break;
                case 4: waktoonyabro = `*اتمنى لك صباحا سعيدا 💫*`; break;
                case 5: waktoonyabro = `*اتمنى لك صباحا سعيدا 🌅*`; break;
                case 6: waktoonyabro = `*اتمنى لك صباحا سعيدا 🌄*`; break;
                case 7: waktoonyabro = `*اتمنى لك صباحا سعيدا 🌅*`; break;
                case 8: waktoonyabro = `*اتمنى لك صباحا سعيدا 💫*`; break;
                case 9: waktoonyabro = `*اتمنى لك صباحا سعيدا ✨*`; break;
                case 10: waktoonyabro = `*طاب يومك 🌞*`; break;
                case 11: waktoonyabro = `*طاب يومك 🌨*`; break;
                case 12: waktoonyabro = `*طاب يومك ❄*`; break;
                case 13: waktoonyabro = `*طاب يومك 🌤*`; break;
                case 14: waktoonyabro = `*تمتع بظهيره جميلة 🌇*`; break;
                case 15: waktoonyabro = `*تمتع بظهيره جميلة 🍁*`; break;
                case 16: waktoonyabro = `*تمتع بظهيره جميلة 🌹*`; break;
                case 17: waktoonyabro = `*تمتع بظهيره جميلة 🌆*`; break;
                case 18: waktoonyabro = `*اتمنى لك ليلة هانئة 🌙*`; break;
                case 19: waktoonyabro = `*اتمنى لك ليلة هانئة 🌃*`; break;
                case 20: waktoonyabro = `*اتمنى لك ليلة هانئة 🌌*`; break;
                case 21: waktoonyabro = `*اتمنى لك ليلة هانئة 🌃*`; break;
                case 22: waktoonyabro = `*اتمنى لك ليلة هانئة 🌙*`; break;
                case 23: waktoonyabro = `*اتمنى لك ليلة هانئة 🌃*`; break;
            }
            var saludo = "" + waktoonyabro;
