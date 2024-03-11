let handler  = async (m, { conn }) => {
conn.reply(m.chat,`*┌────「 سؤال 」─*\n*“${pickRandom(global.bucin)}”*\n*└────「 ايتاتشي 」─*`, m)
}
handler.help = ['reto']
handler.tags = ['fun']
handler.command = /سوال انمي$i
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
 global.bucin = [
    {
        "question": "من هم ابناء حكيم المسارات السته ؟",
        "response": "اندر و اشورا"
    },
    {
        "question": "من الذي اخترع تقنية الايدو تنسي ؟",
        "response": "توبيراما"
    },
    {
        "question": "كم مرة مات غوكو ؟",
        "response": "ثمانية"
    },
    {
        "question": "ما اسم اخت جوي ؟",
        "response": "سنيرتي"
    },
    {
        "question": "ما اسم عائلة شيكامارو ؟",
        "response": "نارا"
    },
    {
        "question": "ما هوا اسم همستر لورا ؟",
        "response": "همتارو"
    },
    {
        "question": "ما اسم ام روبين التي ماتت ؟",
        "response": "الويفيا"
    },
    {
        "question": "من هو افضل شخص في العالم ؟",
        "response": "انا"
    },
    {
        "question": "من هوا اليد اليمني لملك القراصنه ؟",
        "response": "رايلي"
    },
    {
