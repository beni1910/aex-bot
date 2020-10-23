/**
 * about menu
 * @param {String} name
 */

const About = (name) => new Promise((resolve, reject) => {
    let list = ` Halo ${name} 👋
- about *BOT STYLE whatsapp*
Bot ini merupakan program open-source yang dibuat menggunakan Javascript, kamu Bisa Menggunakan Bot ini sesuai layak dan nyaman jika anda DONASI seikhlasnya saja.
Terimakasih Assalamualaikum.
author: Benniismael
    `
    resolve(list)
})

module.exports = About
