__path = process.cwd()

var express = require('express');
var router = express.Router();
const { runtime,fetchJson } = require('../lib/functions')

router.get('/', (req, res) => {
    res.sendFile(__path + '/view/home.html')
})

router.get('/docs', (req, res) => {
    res.sendFile(__path + '/view/index.html')
})

router.get('/status', async (req, res, next) => {
	let hits = await fetchJson('https://api.countapi.xyz/hit/api-bot.com/visitor')
	res.json({
	status: true,
	creator: `${creator}`,
	runtime: runtime(process.uptime()),
	visitor: hits.value,
	})
})

module.exports = router
