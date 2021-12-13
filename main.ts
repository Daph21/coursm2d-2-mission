input.onButtonPressed(Button.A, function () {
    Angle += 10
    Angle = Math.min(Angle, 180)
})
input.onButtonPressed(Button.B, function () {
    Angle += -10
    Angle = Math.max(Angle, 0)
})
let Angle = 0
basic.showString("Servo-2")
Angle = 90
pins.servoWritePin(AnalogPin.P0, Angle)
basic.forever(function () {
    basic.showNumber(Angle)
    pins.servoWritePin(AnalogPin.P0, Angle)
    basic.pause(200)
})
