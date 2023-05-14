basic.showIcon(IconNames.Heart)
serial.writeString("cold hot")
serial.writeLine("")
loops.everyInterval(5000, function () {
    basic.showIcon(IconNames.SmallHeart)
    serial.writeNumbers([Math.round(dstemp.celsius(DigitalPin.P0) * 10) / 10, Math.round(dstemp.celsius(DigitalPin.P1) * 10) / 10])
})
