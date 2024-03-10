const contoh = `*أسماء الله الحسنى*`
// data here
const anjuran = `

عن ابي هريره رضي الله عنه قال رسول الله صلي اله عليه وسلم : "إِنَّ لِلَّهِ تَعَالَى تِسْعَةً وَتِسْعِينَ اسْمًا، مِائَةٌ إِلَّا وَاحِدًا، مَنْ أَحْصَاهَا دخل الجنة، وهو وتر يُحِبُّ الْوِتْرَ".`

let handler = async (m, { args, usedPrefix, command }) => {
    let json = JSON.parse(JSON.stringify(global.asmaulhusna))
    let data = json.map((v, i) => `${i + 1}. ${v.latin}\n${v.arabic}\n${v.translation_id}`).join('\n\n')
    if (isNaN(args[0])) throw `مثال:\n${usedPrefix + command} 1`
    if (args[0]) {
        if (args[0] < 1 || args[0] > 99) throw `الحد الادني 1 و الاقصي 99!`
        let { index, latin, arabic, translation_id, translation_en } = json.find(v => v.index == args[0].replace(/[^0-9]/g, ''))
        return m.reply(`الله ${index}
${arabic}
${translation_id}
`.trim())
    }
    m.reply(contoh + data + anjuran)
}
handler.help = ['الله [1-99]']
handler.tags = ['قران']
handler.command = /^الله$/i
export default handler

global.asmaulhusna = [
    {
        index: 1,
        arabic: "الاسم :الرَّحْمَنُ",
        translation_id: "المعني:واسع الرحمة في خلقه مؤمنهم وكافرهم",
        
    },
    {
        index: 2,
        arabic: "الاسم : الرَّحِيمُ",
