input.onButtonPressed(Button.A, function () {
    MugenLock = 0
    While_lock = 1
    Menu += 1
    while (While_lock == 1) {
        if (Menu == 1) {
            basic.showString("Compass")
        }
    }
})
let Menu = 0
let While_lock = 0
let MugenLock = 0
music.playMelody("C D E F G F E D ", 120)
led.setBrightness(69)
basic.showString("YOPI15")
let C1 = 24
let C2 = 0
let Mivar1 = 55
MugenLock = 0
basic.showString("" + C1 + ":" + C2)
basic.showNumber(C1)
while (!(input.logoIsPressed())) {
    if (input.buttonIsPressed(Button.A)) {
        if (C1 == 24) {
            C1 = 0
        }
        C1 += 1
        basic.clearScreen()
        basic.showString("" + (C1))
    }
    if (input.buttonIsPressed(Button.B)) {
        C1 += -1
        if (C1 == 0) {
            C1 = 24
        }
        basic.clearScreen()
        basic.showString("" + (C1))
    }
}
led.plot(0, 0)
basic.pause(500)
led.unplot(0, 0)
basic.showNumber(C2)
while (!(input.logoIsPressed())) {
    if (input.buttonIsPressed(Button.A)) {
        if (C2 == 59) {
            C2 = -1
        }
        C2 += 1
        basic.clearScreen()
        basic.showString("" + (C2))
    }
    if (input.buttonIsPressed(Button.B)) {
        C2 += -1
        if (C2 == -1) {
            C2 = 59
        }
        basic.clearScreen()
        basic.showString("" + (C2))
    }
}
basic.clearScreen()
MugenLock = 1
basic.forever(function () {
    if (MugenLock == 1) {
        basic.clearScreen()
        music.playTone(262, music.beat(BeatFraction.Sixteenth))
        basic.showString("" + C1 + ":" + C2)
        Mivar1 = 56
        for (let index = 0; index < Mivar1; index++) {
            basic.pause(1000)
            if (input.logoIsPressed()) {
                basic.showString("" + C1 + ":" + C2)
                Mivar1 += -5
            }
        }
        if (C2 == 59) {
            C2 = -1
            if (C1 == 24) {
                C1 = 0
            }
            C1 += 1
        }
        C2 += 1
    }
})
