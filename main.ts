// Display heading arrow on LEDs corresponding to heading parameter (in degrees).
function displayDirection (heading: number) {
    if (heading < 23) {
        basic.showArrow(ArrowNames.North)
    } else if (heading < 68) {
        basic.showArrow(ArrowNames.NorthEast)
    } else if (heading < 113) {
        basic.showArrow(ArrowNames.East)
    } else if (heading < 158) {
        basic.showArrow(ArrowNames.SouthEast)
    } else if (heading < 203) {
        basic.showArrow(ArrowNames.South)
    } else if (heading < 248) {
        basic.showArrow(ArrowNames.SouthWest)
    } else if (heading < 293) {
        basic.showArrow(ArrowNames.West)
    } else if (heading < 338) {
        basic.showArrow(ArrowNames.NorthWest)
    } else {
        basic.showArrow(ArrowNames.North)
    }
}
input.onGesture(Gesture.EightG, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        . # . # .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        . # . # .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    radio.sendString("happy")
    basic.pause(500)
    basic.clearScreen()
})
input.onGesture(Gesture.TiltLeft, function () {
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.sad), SoundExpressionPlayMode.UntilDone)
})
input.onGesture(Gesture.SixG, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        . # . # .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.clearScreen()
})
input.onGesture(Gesture.ScreenUp, function () {
    displayDirection(input.compassHeading())
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 3; index++) {
        basic.showIcon(IconNames.Happy)
        radio.sendString("happy")
        basic.pause(500)
        basic.showIcon(IconNames.Sad)
        radio.sendString("sad")
        basic.pause(500)
    }
    basic.clearScreen()
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "happy") {
        basic.showIcon(IconNames.Happy)
        basic.pause(500)
        basic.clearScreen()
    }
    if (receivedString == "sad") {
        basic.showIcon(IconNames.Sad)
        basic.pause(500)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sad)
    radio.sendString("sad")
    basic.pause(500)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.slide), SoundExpressionPlayMode.UntilDone)
})
input.onGesture(Gesture.TiltRight, function () {
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.happy), SoundExpressionPlayMode.UntilDone)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
})
input.onGesture(Gesture.ThreeG, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.clearScreen()
})
basic.showString("Fidget!")
radio.setGroup(1)
basic.clearScreen()
