'use strict'

const date = new Date()
const second = date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
const minute = ((second % 3600) / 60)
const hours = (second / 3600)

document.write(`
    <div>З початку доби пройшло ${second} секунд:</div>
    <div>це ${hours.toFixed()} годин ${minute.toFixed()} хвилин</div>
`)