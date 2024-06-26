import {search, download} from 'aptoide-scraper';
const handler = async (m, {conn, usedPrefix: prefix, command, text}) => {
 if (!text) throw ` هذا الأمر خاص بتحميل التطبيقات المجانية والمدفوعة منها نكتب هكذا على سبيل المثال \n*.d facebbok lite*`;
  try {    
    const searchA = await search(text);
    const data5 = await download(searchA[0].id);
    let response = `📲 تحميل التطبيقات 📲\n\n📌 *اسم التطبيق:* ${data5.name}\n📦 *الباكيدج:* ${data5.package}\n🕒 *تحديث رقم:* ${data5.lastup}\n📥 *حجم التطبيق:* ${data5.size}\n\n*_『كرزة⊰🍒⊱بوت』_* \nhttps://wa.me/+201147144354`
    await conn.sendMessage(m.chat, {image: {url: data5.icon}, caption: response}, {quoted: m});
 if (data5.size.includes('GB') || data5.size.replace(' MB', '') > 999) {
      return await conn.sendMessage(m.chat, {text: '*[ ❗ ]الملف كبير جدًا لذا لن يتم إرساله.'}, {quoted: m});
    }
    await conn.sendMessage(m.chat, {document: {url: data5.dllink}, mimetype: 'application/vnd.android.package-archive', fileName: data5.name + '.apk', caption: null}, {quoted: m});
  } catch {
    throw `*[⚠️] خطأ، لم يتم العثور على نتائج لبحثك.*`;
  }    
};
handler.help = ["apk"]
handler.tags = ["applications"]
handler.command = ["d"] 
export default handler;
