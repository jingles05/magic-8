input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    randomNumber = randint(0, 3)
    if (randomNumber == 0) {
        basic.showString("Yes")
    } else if (randomNumber == 3) {
        basic.showString("No")
    } else {
        basic.showString("Maybe so")
    }
})
let randomNumber = 0
basic.showString("Ask a ?")
