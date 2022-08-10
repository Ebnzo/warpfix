module.exports = function sorcwarpfix(mod) {

	mod.hook('S_ABNORMALITY_BEGIN', 4, {order: -1000000, filter: {fake: null, modified: null}}, event => {
		if(mod.game.me.class !== 'sorcerer') return
		if(event.target !== mod.game.me.gameId) return		
		if(event.id == 501650) event.id = 501600
		return true
	})
}
