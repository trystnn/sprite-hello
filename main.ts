scene.setBackgroundColor(8)
console.log("Hello Console!")
let msg = "Hello."
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
    . 5 5 5 5 f 5 5 5 f 5 5 5 5 . . 
    . 5 5 5 5 f 5 5 5 f 5 5 5 5 . . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . 5 5 f 5 5 5 5 5 5 5 f 5 5 . . 
    . 5 5 5 f 5 5 5 5 5 f 5 5 5 . . 
    . 5 5 5 5 f f f f f 5 5 5 5 . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(114, 43)
mySprite.say(msg, 1200)
let msg2 = "Hi. How are you?"
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . 6 6 6 6 6 6 6 . . . . 
    . . . . 6 6 6 6 6 6 6 6 6 . . . 
    . . . 6 6 6 6 6 6 6 6 6 6 6 . . 
    . . 6 6 6 6 f 6 6 6 f 6 6 6 6 . 
    . . 6 6 6 6 f 6 6 6 f 6 6 6 6 . 
    . . 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
    . . 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
    . . 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
    . . 6 6 6 6 6 f f f 6 6 6 6 6 . 
    . . 6 6 6 6 f 6 6 6 f 6 6 6 6 . 
    . . . 6 6 f 6 6 6 6 6 f 6 6 . . 
    . . . . 6 6 6 6 6 6 6 6 6 . . . 
    . . . . . 6 6 6 6 6 6 6 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite2.setPosition(46, 75)
pause(2000)
mySprite2.say(msg2, 1200)
