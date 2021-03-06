let handler = function (m) {
  this.sendContact(m.chat, '5566992272931', 'Nurutomo', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
