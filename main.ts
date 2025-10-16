/* Copyright (c) 2025 MTHS All rights reserved
 *
 * Created by: Caleb Campbell
 * Created on: Oct 2025
 * This program will make an RGB LED light up.
*/

basic.clearScreen()
basic.showIcon(IconNames.Happy)
basic.pause(1000)

// This turns off an LED
    basic.showIcon(IconNames.Yes)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)

// This turns on an LED
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    basic.showString("Red")
    basic.pause(1000)

    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.showString("Blue")
    basic.pause(1000)

    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 0)
    basic.showString("Green")
    basic.pause(1000)

    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.showString("Magenta")
    basic.pause(1000)

    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 0)
    basic.showString("Yellow")
    basic.pause(1000)

    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.showString("Cyan")
    basic.pause(1000)

    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.showString("White")
    basic.pause(1000)

})
