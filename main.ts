scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    info.setScore(0)
    if (info.score() == 0) {
        game.gameOver(false)
        game.reset()
    }
})
function doSomething () {
    if (info.score() == 1) {
        list = [tilemap`level2`, tilemap`level4`]
        tiles.setCurrentTilemap(list._pickRandom())
    }
    if (info.score() == 3) {
        game.gameOver(true)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    info.changeScoreBy(1)
    doSomething()
})
let list: tiles.TileMapData[] = []
tiles.setCurrentTilemap(tilemap`level1`)
let mySprite = sprites.create(img`
    . . . . . f f f f . . . . . 
    . . . f f e e e e f f . . . 
    . . f e e e e e e e e f . . 
    . f e e e e e e e e e e f . 
    . f e e e d b b d e e e f . 
    f e e e b 4 4 4 4 b e e e f 
    f e e c c 4 4 4 4 c c e e f 
    f b b f b f 4 4 f b f b b f 
    f b b 4 1 f d d f 1 4 b b f 
    . f b f d d d d d d f b f . 
    . f e f e 4 4 4 4 e f e f . 
    . e 4 f 6 9 9 9 9 6 f 4 e . 
    . 4 d c 9 9 9 9 9 9 c d 4 . 
    . 4 f b 3 b 3 b 3 b b f 4 . 
    . . f f 3 b 3 b 3 3 f f . . 
    . . . . f f b b f f . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
tiles.placeOnTile(mySprite, tiles.getTileLocation(18, 23))
controller.moveSprite(mySprite, 100, 100)
info.startCountdown(50)
