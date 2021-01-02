let acc_x = 0
let item = images.iconImage(IconNames.Giraffe)
basic.forever(function () {
    acc_x = input.acceleration(Dimension.X)
    if (acc_x < -100) {
        item.scrollImage(1, 200)
    } else if (acc_x > 100) {
        item.scrollImage(-1, 200)
    }
})
