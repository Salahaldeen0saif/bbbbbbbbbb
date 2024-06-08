import fetch from "node-fetch"
let handler = async (m, { conn }) => {

  let data = await (await fetch('https://raw.githubusercontent.com/KazukoGans/database/main/anime/ppcouple.json')).json()
  let cita = data[Math.floor(Math.random() * data.length)]
  
  let cowi = await(await fetch(cita.cowo)).buffer()
  await conn.sendFile(m.chat, cowi, '', '_للولد♂️_ \n*_『كرزة⊰🍒⊱بوت』_* \nhttps://wa.me/+201147144354', m)
  let ciwi = await(await fetch(cita.cewe)).buffer()
  await conn.sendFile(m.chat, ciwi, '', '_للبنت♀️_\n *_『كرزة⊰🍒⊱بوت』_* \nhttps://wa.me/+201147144354', m)
}
handler.help = ['ppcouple','tofanime']
handler.tags = ['anime']
handler.command = ['تطقيم','طقم'] 


export default handler
