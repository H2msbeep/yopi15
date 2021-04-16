let C1 = 24
let C2 = 0
let MugenLock = 0
basic.showString("" + C1 + ":" + C2)
basic.showNumber(C1)
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
led.plot(0, 0)
basic.pause(500)
led.unplot(0, 0)
basic.showNumber(C2)
while (!(input.logoIsPressed())) {
    if (input.buttonIsPressed(Button.A)) {
        if (C2 == 60) {
            C2 = -1
        }
        C2 += 1
        basic.showString("" + (C2))
    }
    if (input.buttonIsPressed(Button.B)) {
        C2 += -1
        if (C2 == -1) {
            C2 = 60
        }
        basic.showString("" + (C2))
    }
}
basic.clearScreen()
MugenLock = 1
basic.forever(function () {
    if (MugenLock == 1) {
        basic.showString("" + C1 + ":" + C2)
        for (let index = 0; index < 55; index++) {
            basic.pause(1000)
        }
        if (C2 == 60) {
            C2 = -1
            if (C1 == 24) {
                C1 = 0
            }
            C1 += 1
        }
        C2 += 1
    }
})
