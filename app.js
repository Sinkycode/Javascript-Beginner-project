let displayCount = document.getElementById("display-count")
let incrementButton = document.getElementById("increment-btn")
let saveBtn = document.getElementById("save-btn")
let savedEntries = document.getElementById("saved-entries")
const clear = document.getElementById('clear-entries')
let count = 0

function increment() {
  count += 1
  displayCount.textContent = count
}

function save() {
  console.log(count)
  savedEntries.textContent += ` ${count} - `
  count = 0
  displayCount.textContent = count
}

clear.addEventListener('click', () => {
  count = 0
  displayCount.textContent = count
  savedEntries.textContent = "Previous entries:"
})

// Basketball Scoreboard
let homeCount = 0
const homeScore = document.getElementById('home-score')
const homeOnePointBtn = document.getElementById('one-home-point')
const homeTwoPointBtn = document.getElementById('two-home-point')
const homeThreePointBtn = document.getElementById('three-home-point')

let awayCount = 0
const awayScore = document.getElementById('away-score')
const awayOnePointBtn = document.getElementById('one-away-point')
const awayTwoPointBtn = document.getElementById('two-away-point')
const awayThreePointBtn = document.getElementById('three-away-point')

const scoreCountReset = document.getElementById('reset')

homeOnePointBtn.addEventListener('click', () => {
  homeCount += 1
  homeScore.innerText = homeCount
})
homeTwoPointBtn.addEventListener('click', () => {
  homeCount += 2
  homeScore.innerText = homeCount
})
homeThreePointBtn.addEventListener('click', () => {
  homeCount += 3
  homeScore.innerText = homeCount
})

// Away function
awayOnePointBtn.addEventListener('click', () => {
  awayCount += 1
  awayScore.innerText = awayCount
})
awayTwoPointBtn.addEventListener('click', () => {
  awayCount += 2
  awayScore.innerText = awayCount
})
awayThreePointBtn.addEventListener('click', () => {
  awayCount += 3
  awayScore.innerText = awayCount
})

scoreCountReset.addEventListener('click', () => {
  homeCount = 0
  awayCount = 0
  homeScore.innerText = homeCount
  awayScore.innerText = awayCount
})
