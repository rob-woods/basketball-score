let homeScore = 0
let guestScore = 0

function incrementHomeOne() {
  score = document.getElementById("home-score")
  homeScore += 1
  score.textContent = homeScore
}

function incrementHomeTwo() {
  score = document.getElementById("home-score")
  homeScore += 2
  score.textContent = homeScore
}

function incrementHomeThree() {
  score = document.getElementById("home-score")
  homeScore += 3
  score.textContent = homeScore
}

function incrementGuestOne() {
  score = document.getElementById("guest-score")
  guestScore += 1
  score.textContent = guestScore
}

function incrementGuestTwo() {
  score = document.getElementById("guest-score")
  guestScore += 2
  score.textContent = guestScore
}

function incrementGuestThree() {
  score = document.getElementById("guest-score")
  guestScore += 3
  score.textContent = guestScore
}