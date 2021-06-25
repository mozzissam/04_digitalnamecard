input.onButtonPressed(Button.A, function () {
    나이 += 1
})
input.onButtonPressed(Button.AB, function () {
    나이 = 2020 - 생년
})
input.onButtonPressed(Button.B, function () {
    나이 += -1
})
let 생년 = 0
let 나이 = 0
나이 = 0
생년 = 2007
basic.forever(function () {
    basic.showString("LEE")
    basic.pause(2000)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        # . . . #
        # # # # #
        `)
    basic.pause(2000)
    basic.showString("010-1234-5678")
    basic.pause(2000)
    basic.showNumber(나이)
    basic.pause(2000)
})
