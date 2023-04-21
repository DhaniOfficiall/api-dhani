require('../settings')
const express = require('express')
var isUrl = require("is-url")
var fetch = require('node-fetch')
const isImageURL = require('image-url-validator').default
const textpro = require('../lib/textpro')
const photooxy = require('../lib/photooxy')
const { fetchJson, runtime, getBuffer } = require('../lib/functions')
const { set } = require('lodash')
var router = express.Router()


// - DOWNLOADER MENU - \\
router.get('/downloader/fbdl', async (req, res, next) => {
var url = req.query.url
var apikey = req.query.apikey
if (!url) return res.json(loghandler.noturl)  
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
let anu = await fetchJson(`https://api.botcahx.biz.id/api/dowloader/fbdown?url=${url}&apikey=Admin`)
res.json({
status: true,
creator: `${creator}`,
result: anu.result
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/downloader/tiktok', async (req, res, next) => {
var url = req.query.url
var apikey = req.query.apikey
if (!url) return res.json(loghandler.noturl)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
let anu = await fetchJson(`https://api.botcahx.biz.id/api/dowloader/tikok?url=${url}&apikey=Admin`)
res.json({
status: true,
creator: `${creator}`,
result: anu.result
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/downloader/ytplay', async (req, res, next) => {
var q = req.query.q
var apikey = req.query.apikey
if (!q) return res.json(loghandler.notq)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
let anu = await fetchJson(`https://api.lolhuman.xyz/api/ytplay?apikey=${lolkey}&query=${q}`)
res.json({
status: true,
creator: `${creator}`,
result: anu.result
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/downloader/ytsearch', async (req, res, next) => {
var q = req.query.q
var apikey = req.query.apikey
if (!q) return res.json(loghandler.notq)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
let anu = await fetchJson(`https://api.lolhuman.xyz/api/ytsearch?apikey=${lolkey}&query=${q}`)
res.json({
status: true,
creator: `${creator}`,
result: anu.result
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/downloader/ytmp3', async (req, res, next) => {
var url = req.query.url
var apikey = req.query.apikey
if (!url) return res.json(loghandler.noturl)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
let anu = await fetchJson(`https://api.lolhuman.xyz/api/ytaudio?apikey=${lolkey}&url=${url}`)
res.json({
status: true,
creator: `${creator}`,
result: anu.result
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/downloader/ytmp4', async (req, res, next) => {
var url = req.query.url
var apikey = req.query.apikey
if (!url) return res.json(loghandler.noturl)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
let anu = await fetchJson(`https://api.lolhuman.xyz/api/ytvideo?apikey=${lolkey}&url=${url}`)
res.json({
status: true,
creator: `${creator}`,
result: anu.result
})
} else {
res.json(loghandler.notapikey)
}
})


// - STALKER MENU - \\
router.get('/stalker/instagram', async (req, res, next) => {
var username = req.query.username
var apikey = req.query.apikey
if (!username) return res.json(loghandler.notusername)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
let anu = await fetchJson(`https://saipulanuar.ga/api/stalk/ig?username=${username}`)
res.json({
status: true,
creator: `${creator}`,
result: anu.result
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/stalker/tiktok', async (req, res, next) => {
var username = req.query.username
var apikey = req.query.apikey
if (!username) return res.json(loghandler.notusername)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
let anu = await fetchJson(`https://saipulanuar.ga/api/download/tiktokstalk?username=${username}`)
res.json({
status: true,
creator: `${creator}`,
result: anu.result
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/stalker/npm', async (req, res, next) => {
var username = req.query.username
var apikey = req.query.apikey
if (!username) return res.json(loghandler.notusername)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
let anu = await fetchJson(`https://saipulanuar.ga/api/stalk/npm?username=${username}`)
res.json({
status: true,
creator: `${creator}`,
result: anu.result
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/stalker/freefire', async (req, res, next) => {
var id = req.query.id
var apikey = req.query.apikey
if (!id) return res.json(loghandler.notid)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
let anu = await fetchJson(`https://saipulanuar.ga/api/stalk/epep?id=${id}`)
res.json({
status: true,
creator: `${creator}`,
result: anu.result
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/stalker/mobilelegend', async (req, res, next) => {
var id = req.query.id
var server = req.query.server
var apikey = req.query.apikey
if (!id) return res.json(loghandler.notid)
if (!server) return res.json(loghandler.notserver)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
let anu = await fetchJson(`https://saipulanuar.ga/api/stalk/ml?id=${id}&server=${server}`)
res.json({
status: true,
creator: `${creator}`,
result: anu.result
})
} else {
res.json(loghandler.notapikey)
}
})


// - ISLAMIC MENU - \\
router.get('/islamic/jadwalsholat', async (req, res, next) => {
var q = req.query.q
var apikey = req.query.apikey
if (!q) return res.json(loghandler.notq)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
let anu = await fetchJson(`https://api.lolhuman.xyz/api/sholat/${q}?apikey=${lolkey}`)
res.json({
status: true,
creator: `${creator}`,
result: anu.result
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/islamic/kisahnabi', async (req, res, next) => {
var q = req.query.q
var apikey = req.query.apikey
if (!q) return res.json(loghandler.notq)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
let anu = await fetchJson(`https://api.lolhuman.xyz/api/kisahnabi/${q}?apikey=${lolkey}`)
res.json({
status: true,
creator: `${creator}`,
result: anu.result
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/islamic/niatsholat', async (req, res, next) => {
var q = req.query.q
var apikey = req.query.apikey
if (!q) return res.json(loghandler.notq)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
let anu = await fetchJson(`https://api.lolhuman.xyz/api/niatsholat/${q}?apikey=${lolkey}`)
res.json({
status: true,
creator: `${creator}`,
result: anu.result
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/islamic/ayat', async (req, res, next) => {
var surah = req.query.surah
var ayat = req.query.ayat
var apikey = req.query.apikey
if (!surah) return res.json(loghandler.notsurah)
if (!ayat) return res.json(loghandler.notayat)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
let anu = await fetchJson(`https://api.lolhuman.xyz/api/quran/${surah}/${ayat}?apikey=${lolkey}`)
res.json({
status: true,
creator: `${creator}`,
result: anu.result
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/islamic/surah', async (req, res, next) => {
var surah = req.query.surah
var apikey = req.query.apikey
if (!surah) return res.json(loghandler.notsurah)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){  
let anu = await fetchJson(`https://api.lolhuman.xyz/api/quran/${surah}?apikey=${lolkey}`)
res.json({
status: true,
creator: `${creator}`,
result: anu.result
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/islamic/ayat-audio', async (req, res, next) => {
var surah = req.query.surah
var ayat = req.query.ayat
var apikey = req.query.apikey
if (!surah) return res.json(loghandler.notsurah)
if (!ayat) return res.json(loghandler.notayat)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
let result = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/${surah}/${ayat}?apikey=${lolkey}`)
res.set({'Content-Type': 'audio/mp3'})
res.send(result)
} else {
res.json(loghandler.notapikey)
}
})
router.get('/islamic/surah-audio', async (req, res, next) => {
var surah = req.query.surah
var apikey = req.query.apikey
if (!surah) return res.json(loghandler.notsurah)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
let result = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=${lolkey}`)
res.set({'Content-Type': 'audio/mp3'})
res.send(result)
} else {
res.json(loghandler.notapikey)
}
})


// - SEARCH MENU - \\
router.get('/search/cuaca', async (req, res, next) => {
var q = req.query.q
var apikey = req.query.apikey
if (!q) return res.json(loghandler.notq)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
let anu = await fetchJson(`https://api.lolhuman.xyz/api/cuaca/${q}?apikey=${lolkey}`)
res.json({
status: true,
creator: `${creator}`,
result: anu.result
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/search/jadwaltv', async (req, res, next) => {
var q = req.query.q
var apikey = req.query.apikey
if (!q) return res.json(loghandler.notq)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
let anu = await fetchJson(`https://api.lolhuman.xyz/api/jadwaltv/${q}?apikey=${lolkey}`)
res.json({
status: true,
creator: `${creator}`,
result: anu.result
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/search/cekresi', async (req, res, next) => {
var q = req.query.q
var apikey = req.query.apikey
if (!q) return res.json(loghandler.notq)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
let anu = await fetchJson(`https://api.lolhuman.xyz/api/checkresi?apikey=${lolkey}&resi=${q}`)
res.json({
status: true,
creator: `${creator}`,
result: anu.result
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/search/pinterest', async (req, res, next) => {
var q = req.query.q
var apikey = req.query.apikey
if (!q) return res.json(loghandler.notq)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
let anu = await fetchJson(`https://api.botcahx.biz.id/api/search/pinterest?text=${q}&apikey=Admin`)
res.json({
status: true,
creator: `${creator}`,
result: anu.result
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/search/pinterest-video', async (req, res, next) => {
var url = req.query.url
var apikey = req.query.apikey
if (!url) return res.json(loghandler.noturl)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
let anu = await fetchJson(`https://api.lolhuman.xyz/api/pinterestvideo?apikey=${lolkey}&url=${url}`)
res.json({
status: true,
creator: `${creator}`,
result: anu.result
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/search/brainly', async (req, res, next) => {
var q = req.query.q
var apikey = req.query.apikey
if (!q) return res.json(loghandler.notq)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
let anu = await fetchJson(`https://api.lolhuman.xyz/api/brainly?apikey=${lolkey}&query=${q}`)
res.json({
status: true,
creator: `${creator}`,
result: anu.result
})
} else {
res.json(loghandler.notapikey)
}
})


// - MAKER MENU - \\
router.get('/maker/attp', async (req, res, next) => {
var q = req.query.q
var apikey = req.query.apikey
if (!q) return res.json(loghandler.notq)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
let result = await getBuffer(`https://api.lolhuman.xyz/api/attp2?apikey=${lolkey}&text=${q}`)
res.set({'Content-Type': 'image/webp'})
res.send(result)
} else {
res.json(loghandler.notapikey)
}
})
router.get('/maker/ttp', async (req, res, next) => {
var q = req.query.q
var apikey = req.query.apikey
if (!q) return res.json(loghandler.notq)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
let result = await getBuffer(`https://api.lolhuman.xyz/api/ttp?apikey=${lolkey}&text=${q}`)
res.set({'Content-Type': 'image/webp'})
res.send(result)
} else {
res.json(loghandler.notapikey)
}
})
router.get('/maker/carbon', async (req, res, next) => {
var q = req.query.q
var language = req.query.language
var apikey = req.query.apikey
if (!q) return res.json(loghandler.notq)
if (!language) return res.json(loghandler.notlanguage)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
let result = await getBuffer(`https://api.lolhuman.xyz/api/carbon?apikey=${lolkey}&code=${q}&language=${language}`)
res.set({'Content-Type': 'image/jpg'})
res.send(result)
} else {
res.json(loghandler.notapikey)
}
})
router.get('/maker/meme', async (req, res, next) => {
var q = req.query.q
var apikey = req.query.apikey
if (!q) return res.json(loghandler.notq)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
let result = await getBuffer(`https://api.lolhuman.xyz/api/meme1?apikey=${lolkey}&text=${q}`)
res.set({'Content-Type': 'image/jpg'})
res.send(result)
} else {
res.json(loghandler.notapikey)
}
})
router.get('/maker/meme2', async (req, res, next) => {
var q = req.query.q
var apikey = req.query.apikey
if (!q) return res.json(loghandler.notq)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
let result = await getBuffer(`https://api.lolhuman.xyz/api/meme4?apikey=${lolkey}&text=${q}`)
res.set({'Content-Type': 'image/jpg'})
res.send(result)
} else {
res.json(loghandler.notapikey)
}
})
router.get('/maker/meme3', async (req, res, next) => {
var q = req.query.q
var apikey = req.query.apikey
if (!q) return res.json(loghandler.notq)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
let result = await getBuffer(`https://api.lolhuman.xyz/api/meme5?apikey=${lolkey}&text=${q}`)
res.set({'Content-Type': 'image/jpg'})
res.send(result)
} else {
res.json(loghandler.notapikey)
}
})
router.get('/maker/meme4', async (req, res, next) => {
var text1 = req.query.text1
var text2 = req.query.text2
var apikey = req.query.apikey
if (!text1) return res.json(loghandler.nottext1)
if (!text2) return res.json(loghandler.nottext2)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
let result = await getBuffer(`https://api.lolhuman.xyz/api/meme2?apikey=${lolkey}&text1=${text1}&text2=${text2}`)
res.set({'Content-Type': 'image/jpg'})
res.send(result)
} else {
res.json(loghandler.notapikey)
}
})
router.get('/maker/meme5', async (req, res, next) => {
var text1 = req.query.text1
var text2 = req.query.text2
var apikey = req.query.apikey
if (!text1) return res.json(loghandler.nottext1)
if (!text2) return res.json(loghandler.nottext2)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
let result = await getBuffer(`https://api.lolhuman.xyz/api/meme7?apikey=${lolkey}&text1=${text1}&text2=${text2}`)
res.set({'Content-Type': 'image/jpg'})
res.send(result)
} else {
res.json(loghandler.notapikey)
}
})
router.get('/maker/meme6', async (req, res, next) => {
var text1 = req.query.text1
var text2 = req.query.text2
var apikey = req.query.apikey
if (!text1) return res.json(loghandler.nottext1)
if (!text2) return res.json(loghandler.nottext2)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
let result = await getBuffer(`https://api.lolhuman.xyz/api/meme8?apikey=${lolkey}&text1=${text1}&text2=${text2}`)
res.set({'Content-Type': 'image/jpg'})
res.send(result)
} else {
res.json(loghandler.notapikey)
}
})
router.get('/maker/meme7', async (req, res, next) => {
var text1 = req.query.text1
var text2 = req.query.text2
var text3 = req.query.text3
var apikey = req.query.apikey
if (!text1) return res.json(loghandler.nottext1)
if (!text2) return res.json(loghandler.nottext2)
if (!text3) return res.json(loghandler.nottext3)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
let result = await getBuffer(`https://api.lolhuman.xyz/api/meme3?apikey=${lolkey}&text1=${text1}&text2=${text2}&text3=${text3}`)
res.set({'Content-Type': 'image/jpg'})
res.send(result)
} else {
res.json(loghandler.notapikey)
}
})
router.get('/maker/meme8', async (req, res, next) => {
var text1 = req.query.text1
var text2 = req.query.text2
var text3 = req.query.text3
var apikey = req.query.apikey
if (!text1) return res.json(loghandler.nottext1)
if (!text2) return res.json(loghandler.nottext2)
if (!text3) return res.json(loghandler.nottext3)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
let result = await getBuffer(`https://api.lolhuman.xyz/api/meme6?apikey=${lolkey}&text1=${text1}&text2=${text2}&text3=${text3}`)
res.set({'Content-Type': 'image/jpg'})
res.send(result)
} else {
res.json(loghandler.notapikey)
}
})


// - TEXT PRO MENU - \\
router.get('/textpro/grunge', async(req, res, next) => {
var text = req.query.text
var apikey = req.query.apikey
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){ 
textpro("https://textpro.me/grunge-metallic-3d-text-effect-online-1115.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/textpro/typography', async(req, res, next) => {
var text = req.query.text
var apikey = req.query.apikey
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){ 
textpro("https://textpro.me/create-artistic-typography-online-1086.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/textpro/gradient-neon-light', async(req, res, next) => {
var text = req.query.text
var apikey = req.query.apikey
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
textpro("https://textpro.me/create-gradient-neon-light-text-effect-online-1085.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/textpro/white-gold', async(req, res, next) => {
var text = req.query.text
var apikey = req.query.apikey
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
textpro("https://textpro.me/elegant-white-gold-3d-text-effect-online-free-1070.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/textpro/light-glow-sliced', async(req, res, next) => {
var text = req.query.text
var apikey = req.query.apikey
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
textpro("https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/textpro/glowing-neon-light', async(req, res, next) => {
var text = req.query.text
var apikey = req.query.apikey
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
textpro("https://textpro.me/create-glowing-neon-light-text-effect-online-free-1061.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/textpro/deep-sea', async(req, res, next) => {
var text = req.query.text
var apikey = req.query.apikey
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
textpro("https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/textpro/metallic', async(req, res, next) => {
var text = req.query.text
var apikey = req.query.apikey
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
textpro("https://textpro.me/create-a-metallic-text-effect-free-online-1041.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/textpro/transformer', async(req, res, next) => {
var text = req.query.text
var apikey = req.query.apikey
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){ 
textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/textpro/thunder', async(req, res, next) => {
var text = req.query.text
var apikey = req.query.apikey
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/textpro/thunder2', async(req, res, next) => {
var text = req.query.text
var apikey = req.query.apikey
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
textpro("https://textpro.me/create-thunder-text-effect-online-881.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/textpro/neon-light-text', async(req, res, next) => {
var text = req.query.text
var apikey = req.query.apikey
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
textpro("https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/textpro/matrix', async(req, res, next) => {
var text = req.query.text
var apikey = req.query.apikey
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
textpro("https://textpro.me/matrix-style-text-effect-online-884.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/textpro/neon-text', async(req, res, next) => {
var text = req.query.text
var apikey = req.query.apikey
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
textpro("https://textpro.me/neon-text-effect-online-879.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/textpro/road-warning', async(req, res, next) => {
var text = req.query.text
var apikey = req.query.apikey
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){ 
textpro("https://textpro.me/road-warning-text-effect-878.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/textpro/bokeh', async(req, res, next) => {
var text = req.query.text
var apikey = req.query.apikey
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
textpro("https://textpro.me/bokeh-text-effect-876.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/textpro/advanced-glow', async(req, res, next) => {
var text = req.query.text
var apikey = req.query.apikey
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
textpro("https://textpro.me/free-advanced-glow-text-effect-873.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/textpro/break-wall', async(req, res, next) => {
var text = req.query.text
var apikey = req.query.apikey
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
textpro("https://textpro.me/break-wall-text-effect-871.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/textpro/blackpink', async(req, res, next) => {
var text = req.query.text
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/textpro/blackpink2', async(req, res, next) => {
var text = req.query.text
var apikey = req.query.apikey
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
textpro("https://textpro.me/create-neon-light-blackpink-logo-text-effect-online-1081.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/textpro/blackpink3', async(req, res, next) => {
var text = req.query.text
var apikey = req.query.apikey
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
textpro("https://textpro.me/create-a-blackpink-logo-decorated-with-roses-online-free-1080.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/textpro/blackpink4', async(req, res, next) => {
var text = req.query.text
var apikey = req.query.apikey
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
textpro("https://textpro.me/create-blackpink-style-logo-effects-online-1079.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/textpro/blackpink5', async(req, res, next) => {
var text1 = req.query.text1
var text2 = req.query.text2
var apikey = req.query.apikey
if (!text1) return res.json(loghandler.nottext1)
if (!text2) return res.json(loghandler.nottext2)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
textpro("https://textpro.me/create-blackpink-s-born-pink-album-theme-logo-online-1092.html", [text1,text2]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/textpro/glitch', async(req, res, next) => {
var text1 = req.query.text1
var text2 = req.query.text2
var apikey = req.query.apikey
if (!text1) return res.json(loghandler.nottext1)
if (!text2) return res.json(loghandler.nottext2)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [text1,text2]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/textpro/pornhub', async(req, res, next) => {
var text1 = req.query.text1
var text2 = req.query.text2
var apikey = req.query.apikey
if (!text1) return res.json(loghandler.nottext1)
if (!text2) return res.json(loghandler.nottext2)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [text1,text2]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/textpro/marvel-studio', async(req, res, next) => {
var text1 = req.query.text1
var text2 = req.query.text2
var apikey = req.query.apikey
if (!text1) return res.json(loghandler.nottext1)
if (!text2) return res.json(loghandler.nottext2)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
textpro("https://textpro.me/create-logo-style-marvel-studios-online-971.html", [text1,text2]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/textpro/marvel-studio2', async(req, res, next) => {
var text1 = req.query.text1
var text2 = req.query.text2
var apikey = req.query.apikey
if (!text1) return res.json(loghandler.nottext1)
if (!text2) return res.json(loghandler.nottext2)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
textpro("https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html", [text1,text2]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/textpro/avengers-logo', async(req, res, next) => {
var text1 = req.query.text1
var text2 = req.query.text2
var apikey = req.query.apikey
if (!text1) return res.json(loghandler.nottext1)
if (!text2) return res.json(loghandler.nottext2)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
textpro("https://textpro.me/create-3d-avengers-logo-online-974.html", [text1,text2]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/textpro/thor-logo', async(req, res, next) => {
var text1 = req.query.text1
var text2 = req.query.text2
var apikey = req.query.apikey
if (!text1) return res.json(loghandler.nottext1)
if (!text2) return res.json(loghandler.nottext2)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
textpro("https://textpro.me/create-thor-logo-style-text-effect-online-1064.html", [text1,text2]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})


// - PHOTOOXY MENU - \\
router.get('/photooxy/dark-metal', async(req, res, next) => {
var text = req.query.text
var apikey = req.query.apikey
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
photooxy("https://photooxy.com/elegant-3d-neon-dark-metal-text-effect-online-free-416.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/photooxy/white-stone', async(req, res, next) => {
var text = req.query.text
var apikey = req.query.apikey
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
photooxy("https://photooxy.com/online-3d-white-stone-text-effect-utility-411.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/photooxy/shadow', async(req, res, next) => {
var text = req.query.text
var apikey = req.query.apikey
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
photooxy("https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/photooxy/white-cube', async(req, res, next) => {
var text = req.query.text
var apikey = req.query.apikey
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
photooxy("https://photooxy.com/logo-and-text-effects/3d-text-effect-under-white-cube-217.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/photooxy/gradient', async(req, res, next) => {
var text = req.query.text
var apikey = req.query.apikey
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
photooxy("https://photooxy.com/logo-and-text-effects/gradient-avatar-text-effect-207.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/photooxy/fur-text', async(req, res, next) => {
var text = req.query.text
var apikey = req.query.apikey
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
photooxy("https://photooxy.com/logo-and-text-effects/fur-text-effect-generator-198.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/photooxy/flaming', async(req, res, next) => {
var text = req.query.text
var apikey = req.query.apikey
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
photooxy("https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/photooxy/scary-cemetery', async(req, res, next) => {
var text = req.query.text
var apikey = req.query.apikey
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
photooxy("https://photooxy.com/logo-and-text-effects/text-on-scary-cemetery-gate-172.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/photooxy/harry-potter', async(req, res, next) => {
var text = req.query.text
var apikey = req.query.apikey
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
photooxy("https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/photooxy/3d-wood', async(req, res, next) => {
var text = req.query.text
var apikey = req.query.apikey
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
photooxy("https://photooxy.com/logo-and-text-effects/3d-wood-text-black-style-182.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/photooxy/illuminated-metallic', async(req, res, next) => {
var text = req.query.text
var apikey = req.query.apikey
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
photooxy("https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/photooxy/put-your', async(req, res, next) => {
var text = req.query.text
var apikey = req.query.apikey
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
photooxy("https://photooxy.com/logo-and-text-effects/put-your-text-on-a-coffee-cup--174.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/photooxy/8-bit', async(req, res, next) => {
var text1 = req.query.text1
var text2 = req.query.text2
var apikey = req.query.apikey
if (!text1) return res.json(loghandler.nottext1)
if (!text2) return res.json(loghandler.nottext2)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
photooxy("https://photooxy.com/logo-and-text-effects/8-bit-text-on-arcade-rift-175.html", [text1,text2]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})


// - TOOLS MENU - \\
router.get('/tools/ssweb', async (req, res, next) => {
var url = req.query.url
var apikey = req.query.apikey
if (!url) return res.json(loghandler.noturl)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
let result = await getBuffer(`https://saipulanuar.ga/api/download/ssweb?url=${url}`)
res.set({'Content-Type': 'image/jpg'})
res.send(result)
} else {
res.json(loghandler.notapikey)
}
})

module.exports = router