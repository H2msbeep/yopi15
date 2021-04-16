let C1 = 24
let C2 = 1
basic.showString("" + C1 + ":" + C2)
while (!(input.logoIsPressed())) {
    if (input.buttonIsPressed(Button.A)) {
        if (C1 == 24) {
            C1 = 0
        }
        C1 += 1
        basic.showString("" + (C1))
    }
    if (input.buttonIsPressed(Button.B)) {
        C1 += -1
        if (C1 == 0) {
            C1 = 24
        }
        basic.showString("" + (C1))
    }
}
basic.pause(500)
while (!(input.logoIsPressed())) {
    if (input.buttonIsPressed(Button.A)) {
        if (C2 == 60) {
            C2 = 0
        }
        C2 += 1
        basic.showString("" + (C2))
    }
    if (input.buttonIsPressed(Button.B)) {
        C2 += -1
        if (C2 == 0) {
            C2 = 60
        }
        basic.showString("" + (C2))
    }
}
basic.clearScreen()
basic.forever(function () {
	
})
