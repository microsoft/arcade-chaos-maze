enum ActionKind {
    Walking,
    Idle,
    Jumping,
    walk_right
}
namespace SpriteKind {
    export const Item = SpriteKind.create()
    export const Artifact = SpriteKind.create()
    export const Gem = SpriteKind.create()
}
function defineArtifacts () {
    painting01 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . e e e e e e e e e e e e e e e e e . . . . . . 
. . . . . . e f f f f f f f f f f f f f f f e . . . . . . 
. . . . . . e f f f f f f f f f f f f f f f e . . . . . . 
. . . . . . e f f f f f f f f 5 5 5 5 f f f e . . . . . . 
. . . . . . e f f f f f 8 8 8 5 5 5 5 f f f e . . . . . . 
. . . . . . e f f f f 8 8 8 8 8 5 5 5 f f f e . . . . . . 
. . . . . . e f f f f d 8 8 8 8 8 5 5 5 f f e . . . . . . 
. . . . . . e f f f d d d d 8 8 8 5 5 5 f f e . . . . . . 
. . . . . . e f f f d f d d d 8 8 5 5 5 5 f e . . . . . . 
. . . . . . e f f f d d d f d d f 5 5 5 5 f e . . . . . . 
. . . . . . e f f f d d d d d 1 f 5 5 5 5 f e . . . . . . 
. . . . . . e f f f f d d d d f 4 5 5 5 5 6 e . . . . . . 
. . . . . . e f f f f f f d d 1 4 4 5 5 5 6 e . . . . . . 
. . . . . . e f f f f f f 1 1 1 4 4 5 6 6 6 e . . . . . . 
. . . . . . e f f f f f 1 1 4 4 4 4 6 6 f f e . . . . . . 
. . . . . . e f f f f f 4 4 4 4 4 4 4 4 f f e . . . . . . 
. . . . . . e f f f f 4 4 4 4 4 4 4 4 4 4 f e . . . . . . 
. . . . . . e f f f 4 4 4 4 4 4 4 4 4 4 4 f e . . . . . . 
. . . . . . e e e e e e e e e e e e e e e e e . . . . . . 
. . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . . 
. . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
f f f f f f f f f f f e e e e f f f f e e e f f f f f f f 
. . e e e e e e e e e e e e e e e e e e e e e e e e f . . 
. . f e e e e e e e e e e e e e e e e e e e e e e e f . . 
. . f e e e e e e d 1 1 1 1 1 1 1 1 1 d e e e e e e f . . 
. . f e e e e e e d 1 1 f f f f f 1 1 d e e e e e e f . . 
. . f e e e e e e d 1 1 1 1 1 1 1 1 1 d e e e e e e f . . 
. . f e e e e e e d d d d d d d d d d d e e e e e e f . . 
. . f e e e e e e f f f f f f f f f f f e e e e e e f . . 
. . f e e e e e e e e e e e e e e e e e e e e e e e f . . 
. . f f f f f f f f f f f f f f f f f f f f f f f f f . . 
. . f f f f f f f f f f f f f f f f f f f f f f f f f . . 
`, SpriteKind.Artifact)
    tiles.placeOnTile(painting01, tiles.getTileLocation(5, 9))
    painting02 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . e e e e e e e e e e e e e e e e e . . . . . . 
. . . . . . e 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 e . . . . . . 
. . . . . . e 6 6 6 6 6 6 e e e 6 6 6 6 6 6 e . . . . . . 
. . . . . . e 6 6 6 6 6 e d d d e 6 6 6 6 6 e . . . . . . 
. . . . . . e 6 6 6 6 e d d d d e e 6 6 6 6 e . . . . . . 
. . . . . . e 6 6 6 5 e f d f d e e 5 6 6 6 e . . . . . . 
. . . . . . e 6 5 5 5 e d d d d e e 5 5 6 6 e . . . . . . 
. . . . . . e 6 5 7 7 e d d d d e e 7 5 5 6 e . . . . . . 
. . . . . . e 5 5 7 7 e e d d d e e 7 7 5 5 e . . . . . . 
. . . . . . e 5 7 7 7 e e f d d e e f 7 7 5 e . . . . . . 
. . . . . . e 7 7 7 4 f e d d d d e f f 7 7 e . . . . . . 
. . . . . . e 4 4 4 f f d d d d e d f f f 4 e . . . . . . 
. . . . . . e 4 4 f f f f f f f f f f f f f e . . . . . . 
. . . . . . e 4 4 f f f f f f f f f f f f f e . . . . . . 
. . . . . . e 4 f f f f f f f f f f f f f f e . . . . . . 
. . . . . . e 4 f f f f f f f f f f f f f f e . . . . . . 
. . . . . . e 4 f f f d d d f f f f f f f f e . . . . . . 
. . . . . . e 4 f f f f d d d f f f f f f f e . . . . . . 
. . . . . . e e e e e e e e e e e e e e e e e . . . . . . 
. . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . . 
. . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
f f f f f f f f f f f e e e e f f f f e e e f f f f f f f 
. . e e e e e e e e e e e e e e e e e e e e e e e e f . . 
. . f e e e e e e e e e e e e e e e e e e e e e e e f . . 
. . f e e e e e e d 1 1 1 1 1 1 1 1 1 d e e e e e e f . . 
. . f e e e e e e d 1 1 f f f f f 1 1 d e e e e e e f . . 
. . f e e e e e e d 1 1 1 1 1 1 1 1 1 d e e e e e e f . . 
. . f e e e e e e d d d d d d d d d d d e e e e e e f . . 
. . f e e e e e e f f f f f f f f f f f e e e e e e f . . 
. . f e e e e e e e e e e e e e e e e e e e e e e e f . . 
. . f f f f f f f f f f f f f f f f f f f f f f f f f . . 
. . f f f f f f f f f f f f f f f f f f f f f f f f f . . 
`, SpriteKind.Artifact)
    tiles.placeOnTile(painting02, tiles.getTileLocation(7, 16))
    painting03 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . e e e e e e e e e e e e e e e e e . . . . . . 
. . . . . . e 9 9 9 9 9 9 f f f 9 9 9 9 9 1 e . . . . . . 
. . . . . . e 9 1 1 9 9 f f f f f 9 9 9 1 1 e . . . . . . 
. . . . . . e 1 1 9 9 9 f f f f f 9 9 9 1 1 e . . . . . . 
. . . . . . e 9 1 1 9 f f f 7 f f f 9 9 9 9 e . . . . . . 
. . . . . . e 9 9 9 9 9 d 7 7 7 d 9 9 9 9 9 e . . . . . . 
. . . . . . e 9 9 9 9 6 d 7 7 7 d 6 6 6 9 9 e . . . . . . 
. . . . . . e 6 6 6 6 6 d 7 7 7 d 8 8 6 6 6 e . . . . . . 
. . . . . . e 6 8 8 6 8 6 d d d 6 6 8 6 6 6 e . . . . . . 
. . . . . . e 6 6 6 6 f f 1 2 1 f f 8 6 6 6 e . . . . . . 
. . . . . . e 6 8 8 f f 1 1 2 1 1 f f 8 8 6 e . . . . . . 
. . . . . . e 6 8 f f f f 1 2 1 f f f f 8 6 e . . . . . . 
. . . . . . e 6 6 f f f f 2 2 2 f f f f 6 6 e . . . . . . 
. . . . . . e 6 8 f f f f f 2 f f f f f 8 8 e . . . . . . 
. . . . . . e 8 8 f f f f f f f f f f f 6 6 e . . . . . . 
. . . . . . e d d f f f f f f f f f f f d d e . . . . . . 
. . . . . . e c c f f f f f f f f f f f c c e . . . . . . 
. . . . . . e c c f f f f f f f f f f f c c e . . . . . . 
. . . . . . e e e e e e e e e e e e e e e e e . . . . . . 
. . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . . 
. . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
f f f f f f f f f f f e e e e f f f f e e e f f f f f f f 
. . e e e e e e e e e e e e e e e e e e e e e e e e f . . 
. . f e e e e e e e e e e e e e e e e e e e e e e e f . . 
. . f e e e e e e d 1 1 1 1 1 1 1 1 1 d e e e e e e f . . 
. . f e e e e e e d 1 1 f f f f f 1 1 d e e e e e e f . . 
. . f e e e e e e d 1 1 1 1 1 1 1 1 1 d e e e e e e f . . 
. . f e e e e e e d d d d d d d d d d d e e e e e e f . . 
. . f e e e e e e f f f f f f f f f f f e e e e e e f . . 
. . f e e e e e e e e e e e e e e e e e e e e e e e f . . 
. . f f f f f f f f f f f f f f f f f f f f f f f f f . . 
. . f f f f f f f f f f f f f f f f f f f f f f f f f . . 
`, SpriteKind.Artifact)
    tiles.placeOnTile(painting03, tiles.getTileLocation(17, 37))
    painting04 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . e e e e e e e e e e e e e e e e e . . . . . . 
. . . . . . e 8 5 8 8 8 8 5 8 8 8 5 5 5 5 5 e . . . . . . 
. . . . . . e 8 8 8 5 8 8 8 8 8 8 5 5 5 5 5 e . . . . . . 
. . . . . . e 8 8 5 5 8 f 8 8 5 8 8 5 5 5 8 e . . . . . . 
. . . . . . e 8 8 8 8 8 f 8 8 8 9 9 8 8 8 8 e . . . . . . 
. . . . . . e 9 9 8 8 8 f 8 9 9 9 9 9 8 8 6 e . . . . . . 
. . . . . . e 9 9 9 9 9 f 9 9 6 8 8 9 9 6 6 e . . . . . . 
. . . . . . e 6 9 9 f 9 f 9 6 6 9 8 9 9 8 6 e . . . . . . 
. . . . . . e 6 6 5 f f f 6 6 8 9 9 9 8 6 6 e . . . . . . 
. . . . . . e 8 5 5 f f f 8 8 8 8 5 5 5 5 5 e . . . . . . 
. . . . . . e 8 8 5 f f f 8 8 8 5 5 9 9 9 9 e . . . . . . 
. . . . . . e 8 6 8 f f f 8 f 9 9 9 6 6 6 6 e . . . . . . 
. . . . . . e 6 6 6 f f f 9 f 9 6 6 6 8 8 8 e . . . . . . 
. . . . . . e 8 8 f f f f f f 6 5 8 e e e 8 e . . . . . . 
. . . . . . e 6 6 f f f f f f 5 5 e e e e e e . . . . . . 
. . . . . . e 8 f f f f f f f 8 e c e e c e e . . . . . . 
. . . . . . e c f f f f f f f f e c c e c c e . . . . . . 
. . . . . . e c c f f f f f f f f c c c c c e . . . . . . 
. . . . . . e e e e e e e e e e e e e e e e e . . . . . . 
. . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . . 
. . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
f f f f f f f f f f f e e e e f f f f e e e f f f f f f f 
. . e e e e e e e e e e e e e e e e e e e e e e e e f . . 
. . f e e e e e e e e e e e e e e e e e e e e e e e f . . 
. . f e e e e e e d 1 1 1 1 1 1 1 1 1 d e e e e e e f . . 
. . f e e e e e e d 1 1 f f f f f 1 1 d e e e e e e f . . 
. . f e e e e e e d 1 1 1 1 1 1 1 1 1 d e e e e e e f . . 
. . f e e e e e e d d d d d d d d d d d e e e e e e f . . 
. . f e e e e e e f f f f f f f f f f f e e e e e e f . . 
. . f e e e e e e e e e e e e e e e e e e e e e e e f . . 
. . f f f f f f f f f f f f f f f f f f f f f f f f f . . 
. . f f f f f f f f f f f f f f f f f f f f f f f f f . . 
`, SpriteKind.Artifact)
    tiles.placeOnTile(painting04, tiles.getTileLocation(28, 2))
    painting05 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . e e e e e e e e e e e e e e e e e . . . . . . 
. . . . . . e 2 2 4 4 4 4 4 4 2 2 2 2 2 2 2 e . . . . . . 
. . . . . . e 5 2 2 2 2 2 2 2 2 4 4 4 4 4 4 e . . . . . . 
. . . . . . e 5 5 5 5 4 2 4 5 5 5 5 4 5 5 4 e . . . . . . 
. . . . . . e 2 4 4 4 4 4 5 5 2 2 2 2 2 5 5 e . . . . . . 
. . . . . . e 2 2 4 4 4 4 2 2 8 8 8 8 2 2 2 e . . . . . . 
. . . . . . e 7 2 2 2 2 2 2 8 8 8 8 8 8 8 8 e . . . . . . 
. . . . . . e 5 5 5 8 8 8 8 8 5 5 7 8 8 8 8 e . . . . . . 
. . . . . . e 7 7 5 5 5 5 5 d d d 7 8 8 8 8 e . . . . . . 
. . . . . . e e e 7 7 7 7 d d d d d 8 8 8 f e . . . . . . 
. . . . . . e c e e 8 8 8 d f d f d 8 8 f f e . . . . . . 
. . . . . . e c c e e 8 d d d d d d d f f f e . . . . . . 
. . . . . . e c c e e e d d d f d d d f f f e . . . . . . 
. . . . . . e c c b c e d f d d d f d f f f e . . . . . . 
. . . . . . e e c b b e f f f f f f f f f f e . . . . . . 
. . . . . . e c e c c f f f f f f f f f e f e . . . . . . 
. . . . . . e c c e e f f f f f f f f f c e e . . . . . . 
. . . . . . e c b b c f f f f f f f f f b c e . . . . . . 
. . . . . . e e e e e e e e e e e e e e e e e . . . . . . 
. . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . . 
. . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
f f f f f f f f f f f e e e e f f f f e e e f f f f f f f 
. . e e e e e e e e e e e e e e e e e e e e e e e e f . . 
. . f e e e e e e e e e e e e e e e e e e e e e e e f . . 
. . f e e e e e e d 1 1 1 1 1 1 1 1 1 d e e e e e e f . . 
. . f e e e e e e d 1 1 f f f f f 1 1 d e e e e e e f . . 
. . f e e e e e e d 1 1 1 1 1 1 1 1 1 d e e e e e e f . . 
. . f e e e e e e d d d d d d d d d d d e e e e e e f . . 
. . f e e e e e e f f f f f f f f f f f e e e e e e f . . 
. . f e e e e e e e e e e e e e e e e e e e e e e e f . . 
. . f f f f f f f f f f f f f f f f f f f f f f f f f . . 
. . f f f f f f f f f f f f f f f f f f f f f f f f f . . 
`, SpriteKind.Artifact)
    tiles.placeOnTile(painting05, tiles.getTileLocation(41, 40))
    sculpture01 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . 8 8 . . . . . 
. . . . . . . . . . . . . . . . . . . . 6 6 6 8 8 . . . . 
. . . . . . . . . . . . . . . . . . . 6 6 8 8 8 8 8 . . . 
. . . . . . . . . . . . . . . . . . 6 6 6 6 6 6 8 8 . . . 
. . . . . . . . . . . . . . . 6 6 6 6 6 6 6 6 6 6 . . . . 
. . . . . . . . . . . . . . 6 6 8 8 6 6 6 6 6 6 8 . . . . 
. . . . . . . . . . . . . 6 6 6 6 8 8 8 6 6 6 8 . . . . . 
. . . . . . . . . . . . 6 6 6 6 6 6 8 8 8 8 8 6 6 . . . . 
. . . . . . . . . . . 6 6 6 6 6 6 6 6 8 . 6 6 6 6 . . . . 
. . . . . . . . . . . 6 6 6 6 8 6 6 6 8 . . 8 6 6 . . . . 
. . . . . . . . . . 6 6 6 8 8 8 6 6 6 6 8 6 6 6 . . . . . 
. . . . . . . . . 6 6 6 6 6 6 6 8 6 6 6 8 6 6 6 . . . . . 
. . . . . . . . . 6 6 6 6 6 8 8 8 6 6 6 8 6 6 . . . . . . 
. . . . . . . . 6 6 6 6 6 8 8 8 8 8 6 6 6 6 8 . . . . . . 
. . . . . . . . 6 6 6 6 6 6 6 8 6 8 8 6 6 8 8 8 . . . . . 
. . . . . . . . 6 6 6 6 6 6 6 6 6 6 6 8 8 8 8 6 8 . . . . 
. . . . . . . . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 . . . . 
. . . . . . . . 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 . . . . 
. . . . . . . 8 8 8 8 8 8 8 8 . . . 8 8 6 6 6 6 . . . . . 
. . . . . . . 8 6 8 6 6 8 8 8 . . 8 8 6 6 6 6 . . . . . . 
. . . . . . . 8 6 6 6 6 8 6 8 . 8 8 6 6 6 6 . . . . . . . 
. . . . . . . . 6 6 6 6 8 6 6 8 8 8 6 6 6 . . . . . . . . 
. . . . . . . . 8 6 6 6 6 6 6 8 8 6 6 6 . . . . . . . . . 
. . . . . . . . 8 8 6 8 6 6 8 8 6 6 6 . . . . . . . . . . 
. . . . . . . . 8 6 8 8 6 6 6 8 8 6 6 6 . . . . . . . . . 
. . . . . . . . . 8 8 6 6 6 8 8 8 8 6 6 . . . . . . . . . 
. . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . . 
. . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
f f f f f f f f f f f e e e e f f f f e e e f f f f f f f 
. . e e e e e e e e e e e e e e e e e e e e e e e e f . . 
. . f e e e e e e e e e e e e e e e e e e e e e e e f . . 
. . f e e e e e e d 1 1 1 1 1 1 1 1 1 d e e e e e e f . . 
. . f e e e e e e d 1 1 f f f f f 1 1 d e e e e e e f . . 
. . f e e e e e e d 1 1 1 1 1 1 1 1 1 d e e e e e e f . . 
. . f e e e e e e d d d d d d d d d d d e e e e e e f . . 
. . f e e e e e e f f f f f f f f f f f e e e e e e f . . 
. . f e e e e e e e e e e e e e e e e e e e e e e e f . . 
. . f f f f f f f f f f f f f f f f f f f f f f f f f . . 
. . f f f f f f f f f f f f f f f f f f f f f f f f f . . 
`, SpriteKind.Artifact)
    tiles.placeOnTile(sculpture01, tiles.getTileLocation(10, 23))
    sculpture02 = sprites.create(img`
. . . . . . . . . . 3 3 1 3 3 . . . . . . . . . . . . . . 
. . . . . . . . . 3 3 1 1 1 3 . . . . . . . . . . . . . . 
. . . . . . . . . 3 1 3 1 1 1 . . . . . . . . . . . . . . 
. . . . . . . . . 3 3 1 3 1 1 . . . . . . . . . . . . . . 
. . . . . . . . . . 3 3 3 3 1 . . . . . . . . . . . . . . 
. . . . . . . . . . . 1 1 1 3 3 3 1 1 . . . . . . . . . . 
. . . . . . . . . 1 1 1 1 1 1 1 3 1 1 1 . . . . . . . . . 
. . . . . . . 1 1 1 3 3 1 1 1 3 3 1 1 1 . . . . . . . . . 
. . . . . . 1 1 1 1 1 1 3 1 3 1 3 3 1 1 . . . . . . . . . 
. . . . . . 1 1 1 1 1 1 1 1 1 1 1 3 1 1 3 . . . . . . . . 
. . . . . . 1 1 1 3 1 1 1 1 1 1 3 3 1 1 1 1 . . . . . . . 
. . . . . 1 1 1 3 1 1 1 1 1 1 1 . 3 3 1 1 1 1 . . . . . . 
. . . . . 1 1 1 3 1 1 1 1 1 1 1 . . . 3 1 1 1 . . . . . . 
. . . . . 1 1 3 3 3 1 1 1 1 1 1 . . . . . 1 3 . . . . . . 
. . . . . 3 1 . . 3 1 1 1 3 1 1 . . . . . . . . . . . . . 
. . . . . 3 3 . . . 3 1 1 1 1 1 . . . . . . . . . . . . . 
. . . . . 3 1 . . 3 3 1 1 1 1 1 1 . . . . . . . . . . . . 
. . . . . 1 1 . . 1 1 1 1 1 1 1 1 . . . . . . . . . . . . 
. . . . . 1 1 . . 3 1 1 1 1 3 3 1 . . . . . . . . . . . . 
. . . . . . 1 1 . 3 1 3 1 3 3 1 1 . . . . . . . . . . . . 
. . . . . . 1 1 1 3 1 1 3 3 3 1 1 . . . . . . . . . . . . 
. . . . . . . 1 1 3 1 1 . . 1 1 1 1 . . . . . . . . . . . 
. . . . . . . . . 3 1 1 . . 3 3 1 1 . . . . . . . . . . . 
. . . . . . . . . 1 1 1 . . 3 3 1 1 1 . . . . . . . . . . 
. . . . . . . . . 1 1 1 3 . 3 3 1 1 1 . . . . . . . . . . 
. . . . . . . . . 3 1 1 3 . . 3 3 1 1 . . . . . . . . . . 
. . . . . . . . . 3 1 1 1 . . . 3 3 3 . . . . . . . . . . 
. . . . . . . . . . 3 1 1 . . . 3 3 1 . . . . . . . . . . 
. . . . . . . . . . 3 1 1 . . . 3 1 1 . . . . . . . . . . 
. . . . . . . . . . 3 1 1 . . . 3 3 1 . . . . . . . . . . 
. . . . . . . . . . 3 1 1 . . . . 3 1 1 . . . . . . . . . 
. . . . . . . . . . 3 3 1 . . . . 3 1 1 . . . . . . . . . 
. . . . . . . . . 1 1 1 1 . . . . 1 1 1 1 . . . . . . . . 
. . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . . 
. . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
f f f f f f f f f f f e e e e f f f f e e e f f f f f f f 
. . e e e e e e e e e e e e e e e e e e e e e e e e f . . 
. . f e e e e e e e e e e e e e e e e e e e e e e e f . . 
. . f e e e e e e d 1 1 1 1 1 1 1 1 1 d e e e e e e f . . 
. . f e e e e e e d 1 1 f f f f f 1 1 d e e e e e e f . . 
. . f e e e e e e d 1 1 1 1 1 1 1 1 1 d e e e e e e f . . 
. . f e e e e e e d d d d d d d d d d d e e e e e e f . . 
. . f e e e e e e f f f f f f f f f f f e e e e e e f . . 
. . f e e e e e e e e e e e e e e e e e e e e e e e f . . 
. . f f f f f f f f f f f f f f f f f f f f f f f f f . . 
. . f f f f f f f f f f f f f f f f f f f f f f f f f . . 
`, SpriteKind.Artifact)
    tiles.placeOnTile(sculpture02, tiles.getTileLocation(26, 23))
    sculpture03 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 6 6 6 . . . . . . . . . . . . . . 
. . . . . . . . . . . 6 d 6 6 6 d . . . . . . . . . . . . 
. . . . . . . . . . . d d 6 d d d . . . . . . . . . . . . 
. . . . . . . . . . 6 d 6 6 d d d . . . . . . . . . . . . 
. . . . . . . . . . 6 d d d d d d . . . . . . . . . . . . 
. . . . . . . . . . 6 d d d d d d . . . . . . . . . . . . 
. . . . . . . . . . . 6 6 d d d 6 . . . . . . . . . . . . 
. . . . . . . . . . . . . 6 6 6 . . 6 6 . . . . . . . . . 
. . . . . . . . . . . . . 6 d d d d d d 6 . . . . . . . . 
. . . . . . . . . . . . d d d d d d d d 6 . . . . . . . . 
. . . . . . . . . . d d d 6 d d d d d d 6 . . . . . . . . 
. . . . . . . . . d d d d d d d d d d d . . . . . . . . . 
. . . . . . . . . d d d d d d d d d d 6 . . . . . . . . . 
. . . . . . . . . d d 6 d d d d d d d 6 . . . . . . . . . 
. . . . . . . . . d d d 6 d d d d d d 6 . . . . . . . . . 
. . . . . . . . . d d d 6 6 d d 6 d 6 d . . . . . . . . . 
. . . . . . . . . 6 6 6 6 6 6 6 d d d d . . . . . . . . . 
. . . . . . . . . . . . 6 d d d d d d d . . . . . . . . . 
. . . . . . . . . . . . 6 d d d d d d d . . . . . . . . . 
. . . . . . . . . . . . d d d d d d d d 6 . . . . . . . . 
. . . . . . . . . . . d d d d d 6 d d d 6 . . . . . . . . 
. . . . . . . . . . 6 d d d d d d d d d 6 . . . . . . . . 
. . . . . . . . . . 6 d d d d d d d d 6 6 . . . . . . . . 
. . . . . . . . . d d 6 6 6 d d d d d 6 d . . . . . . . . 
. . . . . . . . . d 6 6 6 6 6 6 6 6 d d 6 . . . . . . . . 
. . . . . . . . . 6 d 6 6 d d 6 6 6 d 6 d . . . . . . . . 
. . . . . . . . . 6 d d 6 6 6 d 6 6 6 d . . . . . . . . . 
. . . . . . . . . 6 6 d d d 6 6 6 d 6 6 . . . . . . . . . 
. . . . . . . . . d 6 6 d d d d d 6 6 d . . . . . . . . . 
. . . . . . . . . 6 6 6 6 6 d d d 6 d . . . . . . . . . . 
. . . . . . . . . . 6 6 6 d 6 6 6 6 d . . . . . . . . . . 
. . . . . . . . . . d d 6 6 6 d d 6 6 . . . . . . . . . . 
. . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . . 
. . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
f f f f f f f f f f f e e e e f f f f e e e f f f f f f f 
. . e e e e e e e e e e e e e e e e e e e e e e e e f . . 
. . f e e e e e e e e e e e e e e e e e e e e e e e f . . 
. . f e e e e e e d 1 1 1 1 1 1 1 1 1 d e e e e e e f . . 
. . f e e e e e e d 1 1 f f f f f 1 1 d e e e e e e f . . 
. . f e e e e e e d 1 1 1 1 1 1 1 1 1 d e e e e e e f . . 
. . f e e e e e e d d d d d d d d d d d e e e e e e f . . 
. . f e e e e e e f f f f f f f f f f f e e e e e e f . . 
. . f e e e e e e e e e e e e e e e e e e e e e e e f . . 
. . f f f f f f f f f f f f f f f f f f f f f f f f f . . 
. . f f f f f f f f f f f f f f f f f f f f f f f f f . . 
`, SpriteKind.Artifact)
    tiles.placeOnTile(sculpture03, tiles.getTileLocation(45, 16))
    sculpture04 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 6 6 6 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . 6 6 6 6 6 6 6 6 . . . . . . . . . 6 6 6 6 . 
. . . . . . . . . . . . . . . . . . . . 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . 6 6 6 6 6 6 
. . . . . . . . . . . . . . . . . . 6 6 6 6 6 6 6 a 6 6 6 6 6 . . . . . . 6 6 6 a . 6 6 
. . . . . . . . . . . . . . . . a 6 6 6 6 6 6 6 6 a a 6 6 6 6 6 . . . . 6 6 6 a . . . . 
. . . . . . . . . . . . . . . . . a 6 6 6 6 6 6 6 6 a 6 6 6 6 6 6 . 6 6 6 6 a . . . . . 
. . . . . . . . . . . . . . . . . a 6 6 6 6 6 6 6 6 a a 6 a 6 6 6 6 6 6 6 6 a . . . . . 
. . . . . . . . . . . . . a a a a a a a 6 6 6 6 6 6 6 a 6 6 6 6 6 6 6 6 6 a . . . . d . 
. . . . . . . . . . a a a a a a a a a a a 6 6 6 6 6 6 a 6 6 6 6 6 6 6 6 a d . . . d d . 
. . . . . . . . a a 6 6 6 6 6 6 6 6 a a a a 6 6 6 6 a a 6 6 6 6 6 6 a a a d d d 1 d . . 
. . . . . . . a 6 6 6 6 6 6 6 6 6 6 6 6 6 a a 6 6 6 a 6 6 6 6 1 1 a . . d d d 1 1 . . . 
. . . . . . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 a a a a a 6 6 6 a 1 1 1 1 . . . 1 1 . . . . 
. . . . . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 a a . 1 1 1 1 1 1 1 . . . . . 
. . . . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 a . . . 1 1 1 1 1 . . . . . . 
. . . 6 6 6 a 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 a a a a . . . . . . . . . . . . 
. . 6 6 6 a a 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 a a a a a . . . . . . . . . . . 
6 6 6 . . a a 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 a a a a a a . . . . . . . . . . 
. . . . . a 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 a 6 6 6 6 a a a a 6 . . . . . . . . . . 
. . . . . a 6 6 6 6 6 6 6 6 6 a 6 6 6 6 6 6 6 6 a 6 6 6 6 a a a a 6 6 . . . . . . . . . 
. . . . . a 6 6 6 6 6 6 6 6 a a 6 6 6 6 6 6 6 a a a 6 6 6 . . a a 6 6 . . . . . . . . . 
. . . . . a a 6 6 6 6 6 6 a a a 6 6 6 6 6 6 a a . a 6 6 6 . . . a 6 6 . . . . . . . . . 
. . . . . . a 6 6 6 6 6 a a a a a 6 6 6 a a . . . . a 6 6 6 . . a 6 6 . . . . . . . . . 
. . . . . . a 6 6 6 6 a a a a a a a a a a . . . . . a 6 6 6 . . a 6 6 . . . . . . . . . 
. . . . . . a 6 6 6 6 a a a a . . . . . . . . . . . a 6 6 6 . . a 6 6 . . . . . . . . . 
. . . . . . 6 6 6 6 a . a a a a . . . . . . . . . . a a 6 6 . a a 6 . . . . . . . . . . 
. . . . . . . 6 6 a . . a 6 6 a . . . . . . . . . . . a a 6 . a 6 6 . . . . . . . . . . 
. . . . . . . 6 6 a . . . 6 6 a a . . . . . . . . . . a a 6 . . . . . . . . . . . . . . 
. . . . . . . 6 6 6 a . . . 6 6 a . . . . . . . . . . a a 6 . . . . . . . . . . . . . . 
. . . . . . . . 6 6 a 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 a a a . . . . . . . . . . . . . . 
. . . . . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . . . . . . . . . . 
. . . . . e e e e e e e e e e e e e e e e e e e e e e e e e e e e e . . . . . . . . . . 
. . . . . e e e e e e e e e e e e e e e e e e e e e e e e e e e e e . . . . . . . . . . 
. . . . . f f f f f f f f f f f e e e e f f f f e e e f f f f f f f . . . . . . . . . . 
. . . . . . . e e e e e e e e e e e e e e e e e e e e e e e e f . . . . . . . . . . . . 
. . . . . . . f e e e e e e e e e e e e e e e e e e e e e e e f . . . . . . . . . . . . 
. . . . . . . f e e e e e e d 1 1 1 1 1 1 1 1 1 d e e e e e e f . . . . . . . . . . . . 
. . . . . . . f e e e e e e d 1 1 f f f f f 1 1 d e e e e e e f . . . . . . . . . . . . 
. . . . . . . f e e e e e e d 1 1 1 1 1 1 1 1 1 d e e e e e e f . . . . . . . . . . . . 
. . . . . . . f e e e e e e d d d d d d d d d d d e e e e e e f . . . . . . . . . . . . 
. . . . . . . f e e e e e e f f f f f f f f f f f e e e e e e f . . . . . . . . . . . . 
. . . . . . . f e e e e e e e e e e e e e e e e e e e e e e e f . . . . . . . . . . . . 
. . . . . . . f f f f f f f f f f f f f f f f f f f f f f f f f . . . . . . . . . . . . 
. . . . . . . f f f f f f f f f f f f f f f f f f f f f f f f f . . . . . . . . . . . . 
`, SpriteKind.Artifact)
    tiles.placeOnTile(sculpture04, tiles.getTileLocation(67, 33))
    sculpture05 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . 7 7 7 7 7 7 7 . . . . . . . . . . . . . 
. . . . . . . . 8 8 7 7 7 7 7 7 7 . . . . . . . . . . . . 
. . . . . . . 7 7 8 8 7 7 7 7 7 7 7 . . . . . . . . . . . 
. . . . . . . 7 7 7 8 7 7 7 7 7 7 7 7 . . . . . . . . . . 
. . . . . . . 7 7 7 8 7 7 7 7 7 7 7 7 7 . . . . . . . . . 
. . . . . . . 7 7 7 8 7 7 7 7 7 7 7 7 7 . . . . . . . . . 
. . . . . . . 7 7 7 8 7 7 7 7 7 7 7 7 7 7 . . . . . . . . 
. . . . . . . 7 7 7 8 8 7 7 7 7 8 8 8 8 8 8 . . . . . . . 
. . . . . . . 7 7 7 8 8 7 8 8 8 8 8 8 8 8 8 . . . . . . . 
. . . . . . . 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 . . . . . . . 
. . . . . . . 7 7 7 8 8 8 8 8 8 8 8 8 8 7 8 . . . . . . . 
. . . . . . . 7 7 7 8 8 8 8 8 8 8 8 8 7 7 . . . . . . . . 
. . . . . . . 7 7 7 8 8 8 8 8 8 8 8 8 7 7 . . . . . . . . 
. . . . . . . 7 7 7 8 7 7 7 7 7 7 8 8 7 7 . . . . . . . . 
. . . . . . . 7 7 7 8 7 7 7 7 7 7 7 8 7 7 7 . . . . . . . 
. . . . . . . 7 7 7 8 7 7 7 7 7 7 7 8 7 7 7 . . . . . . . 
. . . . . . . 7 7 7 8 7 7 7 7 7 7 7 8 7 7 7 7 . . . . . . 
. . . . . . . 7 7 8 8 7 7 7 7 7 7 7 8 8 8 8 8 . . . . . . 
. . . . . . . 7 7 8 8 7 7 7 7 7 7 7 8 8 8 8 . . . . . . . 
. . . . . . . 7 7 8 8 7 7 7 7 7 7 7 8 8 8 . . . . . . . . 
. . . . . . . 7 7 8 8 7 7 7 7 7 7 7 7 7 7 8 . . . . . . . 
. . . . . . . . 8 8 8 7 7 7 7 7 8 8 8 8 8 8 . . . . . . . 
. . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 8 8 . . . . . . . 
. . . . . . . . 7 7 7 7 7 7 7 7 7 8 8 8 8 8 . . . . . . . 
. . . . . . . . . 7 7 7 7 7 7 7 7 8 8 8 8 . . . . . . . . 
. . . . . . . . . 8 8 7 7 7 7 7 8 8 8 8 . . . . . . . . . 
. . . . . . . . 8 8 8 8 7 7 7 8 8 7 7 7 7 . . . . . . . . 
. . . . . . . . 8 8 8 7 7 7 7 7 7 7 8 8 8 . . . . . . . . 
. . . . . . . 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 . . . . . . . 
. . . . . . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . . . . . 
. . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . . 
. . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
f f f f f f f f f f f e e e e f f f f e e e f f f f f f f 
. . e e e e e e e e e e e e e e e e e e e e e e e e f . . 
. . f e e e e e e e e e e e e e e e e e e e e e e e f . . 
. . f e e e e e e d 1 1 1 1 1 1 1 1 1 d e e e e e e f . . 
. . f e e e e e e d 1 1 f f f f f 1 1 d e e e e e e f . . 
. . f e e e e e e d 1 1 1 1 1 1 1 1 1 d e e e e e e f . . 
. . f e e e e e e d d d d d d d d d d d e e e e e e f . . 
. . f e e e e e e f f f f f f f f f f f e e e e e e f . . 
. . f e e e e e e e e e e e e e e e e e e e e e e e f . . 
. . f f f f f f f f f f f f f f f f f f f f f f f f f . . 
. . f f f f f f f f f f f f f f f f f f f f f f f f f . . 
`, SpriteKind.Artifact)
    tiles.placeOnTile(sculpture05, tiles.getTileLocation(12, 30))
    smithsonian01 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . d 1 . . . . . . . . . . . . . . 
. . . . . . . . . . 1 d 5 . . d 1 d . . . . . . . . . . . 
. . . . . . . . d 1 d . . . . . . 5 d 1 . . . . . . . . . 
. . . . . . . d 5 . . . . . . . . . . . . . . . . . . . . 
. . . . . . d 1 . . . . . . . . . . . . . . . . . . . . . 
. . . . . . 1 . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . d . . . . . . 1 1 1 . . . . . . . . . . . . . 
. . . . . . 5 d . . . . . d d d . . . . . . . . . . . . . 
. . . . . . . 1 . . . . 1 1 1 1 1 . . . . . . . . . . . . 
. . . . . . . d 1 . . 1 5 5 5 5 5 1 . . . . . . . . . . . 
. . . . . . . . d . 1 5 1 1 1 1 1 d 1 1 . . . . . . . . . 
. . . . . . d f d 1 1 1 1 1 1 1 1 1 d . . . . . . . . . . 
. . . . . . . d 1 1 d 1 1 1 1 1 1 1 d . . . . . . . . . . 
. . . . . . . . 1 1 d 1 1 1 1 1 1 1 d . . . . . . . . . . 
. . . . . . . . . d d 1 1 1 1 1 1 1 1 d . . . . . . . . . 
. . . . . . . . . d d d d 1 1 1 1 d d d . . . . . . . . . 
. . . . . . . . 1 f 1 f 1 f 1 f 1 f 1 f 1 . . . . . . . . 
. . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . . 
. . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
f f f f f f f f f f f e e e e f f f f e e e f f f f f f f 
. . e e e e e e e e e e e e e e e e e e e e e e e e f . . 
. . f e e e e e e e e e e e e e e e e e e e e e e e f . . 
. . f e e e e e e d 1 1 1 1 1 1 1 1 1 d e e e e e e f . . 
. . f e e e e e e d 1 1 f f f f f 1 1 d e e e e e e f . . 
. . f e e e e e e d 1 1 1 1 1 1 1 1 1 d e e e e e e f . . 
. . f e e e e e e d d d d d d d d d d d e e e e e e f . . 
. . f e e e e e e f f f f f f f f f f f e e e e e e f . . 
. . f e e e e e e e e e e e e e e e e e e e e e e e f . . 
. . f f f f f f f f f f f f f f f f f f f f f f f f f . . 
. . f f f f f f f f f f f f f f f f f f f f f f f f f . . 
`, SpriteKind.Artifact)
    tiles.placeOnTile(smithsonian01, tiles.getTileLocation(33, 9))
    smithsonian02 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . e d d d . . d d d d . . . . . . . . . . . . 
. . . . . . . e e 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . 
. . . . . . . e e d d d d d d d d d . . . . . . . . . . . 
. . . . . . . e e d f f f f f f f d . . . . . . . . . . . 
. . . . . . . e e d 8 8 8 8 9 8 f d . . . . . . . . . . . 
. . . . . . . e e d 8 8 8 8 8 9 f d . . . . . . . . . . . 
. . . . . . . e e d 8 8 8 8 8 8 f d . . . . . . . . . . . 
. . . . . . . e e d 8 8 8 8 8 8 f d . . . . . . . . . . . 
. . . . . . . e e d d d d d d d d d . . . . . . . . . . . 
. . . . . . . e e d d d d d d f f d . . . . . . . . . . . 
. . . . . . . e e d d d d f c c f d . . . . . . . . . . . 
. . . . . . . e e d 2 d d d d d d d . . . . . . . . . . . 
. . . . . . . e e d d d d d d d d d . . . . . . . . . . . 
. . . . . . . . f e e e e e e e e . . . . . . . . . . . . 
. . . . . . . . e d d d d d d d d d . . . . . . . . . . . 
. . . . . . . . e d d e b e b e b e b e d . . . . . . . . 
. . . . . . . . e e d d e b e b e b e b e d . . . . . . . 
. . . . . . . . e e e d d d d d d d d d d d d . . . . . . 
. . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . . 
. . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
f f f f f f f f f f f e e e e f f f f e e e f f f f f f f 
. . e e e e e e e e e e e e e e e e e e e e e e e e f . . 
. . f e e e e e e e e e e e e e e e e e e e e e e e f . . 
. . f e e e e e e d 1 1 1 1 1 1 1 1 1 d e e e e e e f . . 
. . f e e e e e e d 1 1 f f f f f 1 1 d e e e e e e f . . 
. . f e e e e e e d 1 1 1 1 1 1 1 1 1 d e e e e e e f . . 
. . f e e e e e e d d d d d d d d d d d e e e e e e f . . 
. . f e e e e e e f f f f f f f f f f f e e e e e e f . . 
. . f e e e e e e e e e e e e e e e e e e e e e e e f . . 
. . f f f f f f f f f f f f f f f f f f f f f f f f f . . 
. . f f f f f f f f f f f f f f f f f f f f f f f f f . . 
`, SpriteKind.Artifact)
    tiles.placeOnTile(smithsonian02, tiles.getTileLocation(31, 16))
    smithsonian03 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f . . . . . . . . . . . . . . . . 
. . . . . . . . . f f f f f . . . . . . . . . . . . . . . 
. . . . . . . . f f 6 6 6 f . . . . . . . . . . . . . . . 
. . . . . . . f f 6 5 5 8 f . . . . . . . . . . . . . . . 
. . . . . . f f 6 5 1 5 8 f 8 . . . . . . . . . . . . . . 
. . . . . . f f 6 5 5 8 f 9 8 . . . . . . . . . . . . . . 
. . . . . . f f 6 8 8 f 8 8 f f . . . . . . . . . . . . . 
. . . . . . . f f f f 6 8 f f 9 8 . . . . . . . . . . . . 
. . . . . . . . . . f f f f 8 8 9 8 . . . . . . . . . . . 
. . . . . . . . . . . . f f 6 8 8 9 8 . . . . . . . . . . 
. . . . . . . . . . . . 4 f f 6 8 8 9 8 . . . . . . . . . 
. . . . . . . . . . . . 4 4 f f 6 8 8 9 8 . . . . . . . . 
. . . . . . . . . . . . . 4 4 f f 6 8 8 9 f . . . . . . . 
. . . . . . . . . . . . . 4 4 . f f 6 8 8 f . . . . . . . 
. . . . . . . . . . . . . 4 4 . . f f 6 8 f . . . . . . . 
. . . . . . . . . . . . . 4 4 . . . f f f . . . . . . . . 
. . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . . 
. . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
f f f f f f f f f f f e e e e f f f f e e e f f f f f f f 
. . e e e e e e e e e e e e e e e e e e e e e e e e f . . 
. . f e e e e e e e e e e e e e e e e e e e e e e e f . . 
. . f e e e e e e d 1 1 1 1 1 1 1 1 1 d e e e e e e f . . 
. . f e e e e e e d 1 1 f f f f f 1 1 d e e e e e e f . . 
. . f e e e e e e d 1 1 1 1 1 1 1 1 1 d e e e e e e f . . 
. . f e e e e e e d d d d d d d d d d d e e e e e e f . . 
. . f e e e e e e f f f f f f f f f f f e e e e e e f . . 
. . f e e e e e e e e e e e e e e e e e e e e e e e f . . 
. . f f f f f f f f f f f f f f f f f f f f f f f f f . . 
. . f f f f f f f f f f f f f f f f f f f f f f f f f . . 
`, SpriteKind.Artifact)
    tiles.placeOnTile(smithsonian03, tiles.getTileLocation(31, 33))
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Item, function (sprite, otherSprite) {
    music.magicWand.play()
    scene.cameraShake(4, 500)
    animation.stopAnimation(animation.AnimationTypes.All, wwSprite)
    if (otherSprite == lassoSprite) {
        lasso = 1
        lassoSprite.destroy()
        if (facingLeft) {
            animation.runImageAnimation(
            wwSprite,
            [img`
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . 8 8 8 8 8 8 8 . . . . . . . . . . . 
. . . . . . . 8 f f f f f f f 8 . . . . . . . . . . 
. . . . . . . f f f f f f f f f 8 . . . . . . . . . 
. . . . . . . f f f f f f f f f f 8 . . . . . . . . 
. . . . . . . f 5 5 5 f f f f f f f 8 . . . . . . . 
. . . . . . . f 5 d d d f f f f f f 8 . . . . . . . 
. . . . . . . . d d d d d f f f f f f 8 . . . . . . 
. . . . . . . . d d f d d d d f f f f 8 . . . . . . 
. . . . . . . . d d d d d d d f f f f f 8 . . . . . 
. . . . . . . . d d d d d d f f f f f f 8 . . . . . 
. . . . . . . . d d d d d d f f f f f f f 8 . . . . 
. . . . . . . . . d d d d f f f f f f f f 8 . . . . 
. . . . . . . . . . d d d f f f f f f f f f 8 . . . 
. . . . . . . . . d d d d d d e f f f f f f 8 . . . 
. . . . . . . d d d d d d d e e d d f f f f 8 . . . 
. . . . . d d d d d d 5 5 e e d d d f f f f 8 . . . 
. . . . . d d d 5 5 5 2 2 e e d d d f f f f 8 . . . 
. . . . . d d 5 5 2 2 e e e 2 d d d f f f f 8 . . . 
. . . . . d d 2 2 2 e e 2 2 2 d d d d f f 8 . . . . 
. . . . . d d 2 2 2 e 2 2 2 2 2 d d d f 8 . . . . . 
. . . . . d d 2 2 2 e 2 2 2 2 2 d d d f 8 . . . . . 
. . . . . d 5 2 2 e e 2 2 2 2 2 d d d d f . . . . . 
. . . . . d 5 2 e e 2 2 2 2 2 2 f d d d f . . . . . 
. . . . d d d e e 2 2 2 2 2 2 2 f d d d f . . . . . 
. . . . d d d e 2 2 2 2 2 2 2 f . d d d f . . . . . 
. . . . d d f e 2 2 2 2 2 2 f . . d d d f . . . . . 
. . . 5 5 5 f 5 5 2 2 2 2 2 8 8 f . 5 5 5 f . . . . 
. . . 5 5 5 f 8 5 5 5 2 5 5 8 8 8 f 5 5 5 f . . . . 
. . . 5 5 5 f 8 8 8 5 5 5 8 8 8 8 8 f 5 5 5 f . . . 
. . . 5 5 f . 8 8 8 8 5 5 8 f 8 8 8 f 5 5 5 f . . . 
. . . 5 5 f . 8 f 8 8 8 f 8 f 8 8 8 8 . 5 5 f . . . 
. . d d d f . 8 8 f 8 8 f 8 8 f 8 8 8 . 5 5 f . . . 
. . d d d f . 8 8 f 8 8 8 8 8 8 f 8 8 d d d f . . . 
. . d d d f . 8 8 f f 8 8 f 8 8 8 f 8 f d d f . . . 
. . . . . . . 8 8 f f f 8 f 8 8 8 8 f . d d f . . . 
. . . . . . . 8 8 d d f f 8 f 8 8 d f . . . . . . . 
. . . . . . . 8 d d d d f f f 8 d d f . . . . . . . 
. . . . . . . . d d d d f f d d d d f . . . . . . . 
. . . . . . . . d d d d f f d d d d f f . . . . . . 
. . . . . . . . d d d d d f . d d d d f . . . . . . 
. . . . . . . 5 5 5 d d d f . 5 d d d f . . . . . . 
. . . . . . . 2 2 5 5 5 d f 5 5 5 d d f . . . . . . 
. . . . . . . 2 2 2 5 5 f . 5 5 5 5 d f . . . . . . 
. . . . . . . 2 2 2 2 5 f . 2 2 2 5 5 f . . . . . . 
. . . . . . . . 2 2 2 2 f . 2 2 2 2 5 f . . . . . . 
. . . . . . . . 2 2 2 2 f . . 2 2 2 2 f . . . . . . 
. . . . . . . . 2 2 2 2 2 f . 2 2 2 2 f . . . . . . 
. . . . . . . . . 2 2 2 2 f . 2 2 2 2 2 f . . . . . 
. . . . . . . . . 2 2 2 2 f . . 2 2 2 2 f . . . . . 
. . . . . . . . . 2 2 2 2 f . . 2 2 2 2 f . . . . . 
. . . . . . . . . 2 2 2 f . . . 2 2 2 f . . . . . . 
. . . . . . . . . 2 2 2 f . . . 2 2 2 f . . . . . . 
. . . . . . . . . 2 2 2 f . . . 2 2 2 f . . . . . . 
. . . . . . . . 2 2 2 2 f . . 2 2 2 2 f . . . . . . 
. . . . . . . 2 2 2 2 f . . 2 2 2 2 f . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . 8 8 8 8 8 8 8 . . . . . . . . . . . . 
. . . . . . 8 f f f f f f f 8 . . . . . . . . . . . 
. . . . . . f f f f f f f f f 8 . . . . . . . . . . 
. . . . . . f f f f f f f f f f 8 . . . . . . . . . 
. . . . . . f 5 5 5 f f f f f f f 8 . . . . . . . . 
. . . . . . f 5 d d d f f f f f f 8 . . . . . . . . 
. . . . . . . d d d d d f f f f f f 8 . . . . . . . 
. . . . . . . d d f d d d d f f f f 8 . . . . . . . 
. . . . . . . d d d d d d d f f f f f 8 . . . . . . 
. . . . . . . d d d d d d f f f f f f 8 . . . . . . 
. . . . . . . d d d d d d f f f f f f f 8 . . . . . 
. . . . . . . . d d d d f f f f f f f f 8 . . . . . 
. . . . . . . . . d d d f f f f f f f f f 8 . . . . 
. . . . . . . . d d d d d d e f f f f f f 8 . . . . 
. . . . . . d d d d d d d e e d d f f f f 8 . . . . 
. . . . d d d d d d 5 5 e e d d d f f f f 8 . . . . 
. . . . d d d 5 5 5 2 2 e e d d d f f f f 8 . . . . 
. . . . d d 5 5 2 2 e e e 2 d d d f f f f 8 . . . . 
. . . . d d 2 2 2 e e 2 2 2 d d d d f f 8 . . . . . 
. . . . d d 2 2 2 e 2 2 2 2 2 d d d f 8 . . . . . . 
. . . . d d 2 2 2 e 2 2 2 2 2 d d d f 8 . . . . . . 
. . . . d 5 2 2 e e 2 2 2 2 2 d d d d f . . . . . . 
. . . . d 5 2 e e 2 2 2 2 2 2 f d d d f . . . . . . 
. . . d d d e e 2 2 2 2 2 2 2 f d d d f . . . . . . 
. . . d d d e 2 2 2 2 2 2 2 f . d d d f . . . . . . 
. . . d d f e 2 2 2 2 2 2 f . . d d d f . . . . . . 
. . 5 5 5 f 5 5 2 2 2 2 2 8 8 f . 5 5 5 f . . . . . 
. . 5 5 5 f 8 5 5 5 2 5 5 8 8 8 f 5 5 5 f . . . . . 
. . 5 5 5 f 8 8 8 5 5 5 8 8 8 8 8 f 5 5 5 f . . . . 
. . 5 5 f . 8 8 8 8 5 5 8 f 8 8 8 f 5 5 5 f . . . . 
. . 5 5 f . 8 f 8 8 8 f 8 f 8 8 8 8 . 5 5 f . . . . 
. d d d f . 8 8 f 8 8 f 8 8 f 8 8 8 . 5 5 f . . . . 
. d d d f . 8 8 f 8 8 8 8 8 8 f 8 8 d d d f . . . . 
. d d d f . 8 8 f f 8 8 f 8 8 8 f 8 f d d f . . . . 
. . . . . . 8 8 f f f 8 f 8 8 8 8 f . d d f . . . . 
. . . . . . 8 8 d d f f 8 f 8 8 d f . . . . . . . . 
. . . . . . 8 d d d d f f f 8 d d f . . . . . . . . 
. . . . . . . d d d d f f d d d d d f . . . . . . . 
. . . . . . . d d d d d f d d d d d f . . . . . . . 
. . . . . . . 5 5 5 d d f . 5 5 d d f . . . . . . . 
. . . . . . . 2 2 5 5 5 f . 5 5 5 d f . . . . . . . 
. . . . . . . 2 2 2 5 5 f . 2 5 5 5 f . . . . . . . 
. . . . . . . 2 2 2 2 5 f . 2 2 2 5 f . . . . . . . 
. . . . . . . . 2 2 2 2 f . 2 2 2 2 5 f . . . . . . 
. . . . . . . . 2 2 2 2 f . . 2 2 2 2 f . . . . . . 
. . . . . . . . . 2 2 2 2 f . 2 2 2 2 2 f . . . . . 
. . . . . . . . . 2 2 2 2 f . . 2 2 2 2 f . . . . . 
. . . . . . . . . 2 2 2 2 f . . 2 2 2 2 f . . . . . 
. . . . . . . . . 2 2 2 2 f . . 2 2 2 2 f . . . . . 
. . . . . . . . . 2 2 2 f . . . 2 2 2 f . . . . . . 
. . . . . . . . . 2 2 2 f . . . 2 2 2 f . . . . . . 
. . . . . . . . . 2 2 2 f . . . 2 2 2 f . . . . . . 
. . . . . . . . 2 2 2 2 f . . 2 2 2 2 f . . . . . . 
. . . . . . . 2 2 2 2 f . . 2 2 2 2 f . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . 8 8 8 8 8 8 8 . . . . . . . . . . . 
. . . . . . . 8 f f f f f f f 8 . . . . . . . . . . 
. . . . . . . f f f f f f f f f 8 . . . . . . . . . 
. . . . . . . f f f f f f f f f f 8 . . . . . . . . 
. . . . . . . f 5 5 5 f f f f f f f 8 . . . . . . . 
. . . . . . . f 5 d d d f f f f f f 8 . . . . . . . 
. . . . . . . . d d d d d f f f f f f 8 . . . . . . 
. . . . . . . . d d f d d d d f f f f 8 . . . . . . 
. . . . . . . . d d d d d d d f f f f f 8 . . . . . 
. . . . . . . . d d d d d d f f f f f f 8 . . . . . 
. . . . . . . . d d d d d d f f f f f f f 8 . . . . 
. . . . . . . . . d d d d f f f f f f f f 8 . . . . 
. . . . . . . . . . d d d f f f f f f f f f 8 . . . 
. . . . . . . . . d d d d d d e f f f f f f 8 . . . 
. . . . . . . d d d d d d d e e d d f f f f 8 . . . 
. . . . . d d d d d d 5 5 e e d d d f f f f 8 . . . 
. . . . . d d d 5 5 5 2 2 e e d d d f f f f 8 . . . 
. . . . . d d 5 5 2 2 e e e 2 d d d f f f f 8 . . . 
. . . . . d d 2 2 2 e e 2 2 2 d d d d f f 8 . . . . 
. . . . . d d 2 2 2 e 2 2 2 2 2 d d d f 8 . . . . . 
. . . . . d d 2 2 2 e 2 2 2 2 2 d d d f 8 . . . . . 
. . . . . d 5 2 2 e e 2 2 2 2 2 d d d d f . . . . . 
. . . . . d 5 2 e e 2 2 2 2 2 2 f d d d f . . . . . 
. . . . d d d e e 2 2 2 2 2 2 2 f d d d f . . . . . 
. . . . d d d e 2 2 2 2 2 2 2 f . d d d f . . . . . 
. . . . d d f e 2 2 2 2 2 2 f . . d d d f . . . . . 
. . . 5 5 5 f 5 5 2 2 2 2 2 8 8 f . 5 5 5 f . . . . 
. . . 5 5 5 f 8 5 5 5 2 5 5 8 8 8 f 5 5 5 f . . . . 
. . . 5 5 5 f 8 8 8 5 5 5 8 8 8 8 8 f 5 5 5 f . . . 
. . . 5 5 f . 8 8 8 8 5 5 8 f 8 8 8 f 5 5 5 f . . . 
. . . 5 5 f . 8 f 8 8 8 f 8 f 8 8 8 8 . 5 5 f . . . 
. . d d d f . 8 8 f 8 8 f 8 8 f 8 8 8 . 5 5 f . . . 
. . d d d f . 8 8 f 8 8 8 8 8 8 f 8 8 d d d f . . . 
. . d d d f . 8 8 f f 8 8 f 8 8 8 f 8 f d d f . . . 
. . . . . . . 8 8 f f f 8 f 8 8 8 8 f . d d f . . . 
. . . . . . . 8 8 d d f f 8 f 8 8 d f . . . . . . . 
. . . . . . . 8 d d d d f f f 8 d d f . . . . . . . 
. . . . . . . . d d d d f f d d d d f . . . . . . . 
. . . . . . . . d d d d f f d d d d f f . . . . . . 
. . . . . . . . d d d d d f . d d d d f . . . . . . 
. . . . . . . 5 5 5 d d d f . 5 d d d f . . . . . . 
. . . . . . . 2 2 5 5 5 d f 5 5 5 d d f . . . . . . 
. . . . . . . 2 2 2 5 5 f . 5 5 5 5 d f . . . . . . 
. . . . . . . 2 2 2 2 5 f . 2 2 2 5 5 f . . . . . . 
. . . . . . . . 2 2 2 2 f . 2 2 2 2 5 f . . . . . . 
. . . . . . . . 2 2 2 2 f . . 2 2 2 2 f . . . . . . 
. . . . . . . . 2 2 2 2 2 f . 2 2 2 2 f . . . . . . 
. . . . . . . . . 2 2 2 2 f . 2 2 2 2 2 f . . . . . 
. . . . . . . . . 2 2 2 2 f . . 2 2 2 2 f . . . . . 
. . . . . . . . . 2 2 2 2 f . . 2 2 2 2 f . . . . . 
. . . . . . . . . 2 2 2 f . . . 2 2 2 f . . . . . . 
. . . . . . . . . 2 2 2 f . . . 2 2 2 f . . . . . . 
. . . . . . . . . 2 2 2 f . . . 2 2 2 f . . . . . . 
. . . . . . . . 2 2 2 2 f . . 2 2 2 2 f . . . . . . 
. . . . . . . 2 2 2 2 f . . 2 2 2 2 f . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . 8 8 8 8 8 8 8 . . . . . . . . . . 
. . . . . . . . 8 f f f f f f f 8 . . . . . . . . . 
. . . . . . . . f f f f f f f f f 8 . . . . . . . . 
. . . . . . . . f f f f f f f f f f 8 . . . . . . . 
. . . . . . . . f 5 5 5 f f f f f f f 8 . . . . . . 
. . . . . . . . f 5 d d d f f f f f f 8 . . . . . . 
. . . . . . . . . d d d d d f f f f f f 8 . . . . . 
. . . . . . . . . d d f d d d d f f f f 8 . . . . . 
. . . . . . . . . d d d d d d d f f f f f 8 . . . . 
. . . . . . . . . d d d d d d f f f f f f 8 . . . . 
. . . . . . . . . d d d d d d f f f f f f f 8 . . . 
. . . . . . . . . . d d d d f f f f f f f f 8 . . . 
. . . . . . . . . . . d d d f f f f f f f f f 8 . . 
. . . . . . . . . . d d d d d d e f f f f f f 8 . . 
. . . . . . . . d d d d d d d e e d d f f f f 8 . . 
. . . . . . d d d d d d 5 5 e e d d d f f f f 8 . . 
. . . . . . d d d 5 5 5 2 2 e e d d d f f f f 8 . . 
. . . . . . d d 5 5 2 2 e e e 2 d d d f f f f 8 . . 
. . . . . . d d 2 2 2 e e 2 2 2 d d d d f f 8 . . . 
. . . . . . d d 2 2 2 e 2 2 2 2 2 d d d f 8 . . . . 
. . . . . . d d 2 2 2 e 2 2 2 2 2 d d d f 8 . . . . 
. . . . . . d 5 2 2 e e 2 2 2 2 2 d d d d f . . . . 
. . . . . . d 5 2 e e 2 2 2 2 2 2 f d d d f . . . . 
. . . . . d d d e e 2 2 2 2 2 2 2 f d d d f . . . . 
. . . . . d d d e 2 2 2 2 2 2 2 f . d d d f . . . . 
. . . . . d d f e 2 2 2 2 2 2 f . . d d d f . . . . 
. . . . 5 5 5 f 5 5 2 2 2 2 2 8 8 f . 5 5 5 f . . . 
. . . . 5 5 5 f 8 5 5 5 2 5 5 8 8 8 f 5 5 5 f . . . 
. . . . 5 5 5 f 8 8 8 5 5 5 8 8 8 8 8 f 5 5 5 f . . 
. . . . 5 5 f . 8 8 8 8 5 5 8 f 8 8 8 f 5 5 5 f . . 
. . . . 5 5 f . 8 f 8 8 8 f 8 f 8 8 8 8 . 5 5 f . . 
. . . d d d f . 8 8 f 8 8 f 8 8 f 8 8 8 . 5 5 f . . 
. . . d d d f . 8 8 f 8 8 8 8 8 8 f 8 8 d d d f . . 
. . . d d d f . 8 8 f f 8 8 f 8 8 8 f 8 f d d f . . 
. . . . . . . . 8 8 f f f 8 f 8 8 8 8 f . d d f . . 
. . . . . . . . 8 8 d d f f 8 f 8 8 d f . . . . . . 
. . . . . . . . 8 d d d d f f f 8 d d f . . . . . . 
. . . . . . . . . d d d d f f d d d d f . . . . . . 
. . . . . . . . . d d d d f . d d d d f . . . . . . 
. . . . . . . . . d d d d f . d d d d f . . . . . . 
. . . . . . . . . d d d d f . d d d d f . . . . . . 
. . . . . . . . 5 5 d d d f . 5 d d d f . . . . . . 
. . . . . . . . 2 5 5 5 d f . 5 5 d d f . . . . . . 
. . . . . . . . 2 2 5 5 5 f . 5 5 5 d f . . . . . . 
. . . . . . . . 2 2 2 5 5 f . 2 2 5 5 f . . . . . . 
. . . . . . . . 2 2 2 2 5 f . 2 2 2 5 5 f . . . . . 
. . . . . . . . 2 2 2 2 2 f . 2 2 2 2 5 f . . . . . 
. . . . . . . . . 2 2 2 2 f . 2 2 2 2 2 f . . . . . 
. . . . . . . . . 2 2 2 2 f . . 2 2 2 2 f . . . . . 
. . . . . . . . . 2 2 2 2 f . . 2 2 2 2 f . . . . . 
. . . . . . . . . 2 2 2 2 f . . 2 2 2 2 f . . . . . 
. . . . . . . . . 2 2 2 f . . . 2 2 2 f . . . . . . 
. . . . . . . . . 2 2 2 f . . . 2 2 2 f . . . . . . 
. . . . . . . . . 2 2 2 f . . . 2 2 2 f . . . . . . 
. . . . . . . . 2 2 2 2 f . . 2 2 2 2 f . . . . . . 
. . . . . . . 2 2 2 2 f . . 2 2 2 2 f . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
`],
            150,
            true
            )
        } else {
            animation.runImageAnimation(
            wwSprite,
            [img`
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 8 8 8 8 8 8 8 . . . . . . . . 
. . . . . . . . . . 8 f f f f f f f 8 . . . . . . . 
. . . . . . . . . 8 f f f f f f f f f . . . . . . . 
. . . . . . . . 8 f f f f f f f f f f . . . . . . . 
. . . . . . . 8 f f f f f f f 5 5 5 f . . . . . . . 
. . . . . . . 8 f f f f f f d d d 5 f . . . . . . . 
. . . . . . 8 f f f f f f d d d d d . . . . . . . . 
. . . . . . 8 f f f f d d d d f d d . . . . . . . . 
. . . . . 8 f f f f f d d d d d d d . . . . . . . . 
. . . . . 8 f f f f f f d d d d d d . . . . . . . . 
. . . . 8 f f f f f f f d d d d d d . . . . . . . . 
. . . . 8 f f f f f f f f d d d d . . . . . . . . . 
. . . 8 f f f f f f f f f d d d . . . . . . . . . . 
. . . 8 f f f f f f e d d d d d d . . . . . . . . . 
. . . 8 f f f f d d e e d d d d d d d . . . . . . . 
. . . 8 f f f f d d d e e 5 5 d d d d d d . . . . . 
. . . 8 f f f f d d d e e 2 2 5 5 5 d d d . . . . . 
. . . 8 f f f f d d d 2 e e e 2 2 5 5 d d . . . . . 
. . . . 8 f f d d d d 2 2 2 e e 2 2 2 d d . . . . . 
. . . . . 8 f d d d 2 2 2 2 2 e 2 2 2 d d . . . . . 
. . . . . 8 f d d d 2 2 2 2 2 e 2 2 2 d d . . . . . 
. . . . . f d d d d 2 2 2 2 2 e e 2 2 5 d . . . . . 
. . . . . f d d d f 2 2 2 2 2 2 e e 2 5 d . . . . . 
. . . . . f d d d f 2 2 2 2 2 2 2 e e d d d . . . . 
. . . . . f d d d . f 2 2 2 2 2 2 2 e d d d . . . . 
. . . . . f d d d . . f 2 2 2 2 2 2 e f d d . . . . 
. . . . f 5 5 5 . f 8 8 2 2 2 2 2 5 5 f 5 5 5 . . . 
. . . . f 5 5 5 f 8 8 8 5 5 2 5 5 5 8 f 5 5 5 . . . 
. . . f 5 5 5 f 8 8 8 8 8 5 5 5 8 8 8 f 5 5 5 . . . 
. . . f 5 5 5 f 8 8 8 f 8 5 5 8 8 8 8 . f 5 5 . . . 
. . . f 5 5 . 8 8 8 8 f 8 f 8 8 8 f 8 . f 5 5 . . . 
. . . f 5 5 . 8 8 8 f 8 8 f 8 8 f 8 8 . f d d d . . 
. . . f d d d 8 8 f 8 8 8 8 8 8 f 8 8 . f d d d . . 
. . . f d d f 8 f 8 8 8 f 8 8 f f 8 8 . f d d d . . 
. . . f d d . f 8 8 8 8 f 8 f f f 8 8 . . . . . . . 
. . . . . . . f d 8 8 f 8 f f d d 8 8 . . . . . . . 
. . . . . . . f d d 8 f f f d d d d 8 . . . . . . . 
. . . . . . . f d d d d f f d d d d . . . . . . . . 
. . . . . . f f d d d d f f d d d d . . . . . . . . 
. . . . . . f d d d d . f d d d d d . . . . . . . . 
. . . . . . f d d d 5 . f d d d 5 5 5 . . . . . . . 
. . . . . . f d d 5 5 5 f d 5 5 5 2 2 . . . . . . . 
. . . . . . f d 5 5 5 5 . f 5 5 2 2 2 . . . . . . . 
. . . . . . f 5 5 2 2 2 . f 5 2 2 2 2 . . . . . . . 
. . . . . . f 5 2 2 2 2 . f 2 2 2 2 . . . . . . . . 
. . . . . . f 2 2 2 2 . . f 2 2 2 2 . . . . . . . . 
. . . . . . f 2 2 2 2 . f 2 2 2 2 2 . . . . . . . . 
. . . . . f 2 2 2 2 2 . f 2 2 2 2 . . . . . . . . . 
. . . . . f 2 2 2 2 . . f 2 2 2 2 . . . . . . . . . 
. . . . . f 2 2 2 2 . . f 2 2 2 2 . . . . . . . . . 
. . . . . . f 2 2 2 . . . f 2 2 2 . . . . . . . . . 
. . . . . . f 2 2 2 . . . f 2 2 2 . . . . . . . . . 
. . . . . . f 2 2 2 . . . f 2 2 2 . . . . . . . . . 
. . . . . . f 2 2 2 2 . . f 2 2 2 2 . . . . . . . . 
. . . . . . . f 2 2 2 2 . . f 2 2 2 2 . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 8 8 8 8 8 8 8 . . . . . . . 
. . . . . . . . . . . 8 f f f f f f f 8 . . . . . . 
. . . . . . . . . . 8 f f f f f f f f f . . . . . . 
. . . . . . . . . 8 f f f f f f f f f f . . . . . . 
. . . . . . . . 8 f f f f f f f 5 5 5 f . . . . . . 
. . . . . . . . 8 f f f f f f d d d 5 f . . . . . . 
. . . . . . . 8 f f f f f f d d d d d . . . . . . . 
. . . . . . . 8 f f f f d d d d f d d . . . . . . . 
. . . . . . 8 f f f f f d d d d d d d . . . . . . . 
. . . . . . 8 f f f f f f d d d d d d . . . . . . . 
. . . . . 8 f f f f f f f d d d d d d . . . . . . . 
. . . . . 8 f f f f f f f f d d d d . . . . . . . . 
. . . . 8 f f f f f f f f f d d d . . . . . . . . . 
. . . . 8 f f f f f f e d d d d d d . . . . . . . . 
. . . . 8 f f f f d d e e d d d d d d d . . . . . . 
. . . . 8 f f f f d d d e e 5 5 d d d d d d . . . . 
. . . . 8 f f f f d d d e e 2 2 5 5 5 d d d . . . . 
. . . . 8 f f f f d d d 2 e e e 2 2 5 5 d d . . . . 
. . . . . 8 f f d d d d 2 2 2 e e 2 2 2 d d . . . . 
. . . . . . 8 f d d d 2 2 2 2 2 e 2 2 2 d d . . . . 
. . . . . . 8 f d d d 2 2 2 2 2 e 2 2 2 d d . . . . 
. . . . . . f d d d d 2 2 2 2 2 e e 2 2 5 d . . . . 
. . . . . . f d d d f 2 2 2 2 2 2 e e 2 5 d . . . . 
. . . . . . f d d d f 2 2 2 2 2 2 2 e e d d d . . . 
. . . . . . f d d d . f 2 2 2 2 2 2 2 e d d d . . . 
. . . . . . f d d d . . f 2 2 2 2 2 2 e f d d . . . 
. . . . . f 5 5 5 . f 8 8 2 2 2 2 2 5 5 f 5 5 5 . . 
. . . . . f 5 5 5 f 8 8 8 5 5 2 5 5 5 8 f 5 5 5 . . 
. . . . f 5 5 5 f 8 8 8 8 8 5 5 5 8 8 8 f 5 5 5 . . 
. . . . f 5 5 5 f 8 8 8 f 8 5 5 8 8 8 8 . f 5 5 . . 
. . . . f 5 5 . 8 8 8 8 f 8 f 8 8 8 f 8 . f 5 5 . . 
. . . . f 5 5 . 8 8 8 f 8 8 f 8 8 f 8 8 . f d d d . 
. . . . f d d d 8 8 f 8 8 8 8 8 8 f 8 8 . f d d d . 
. . . . f d d f 8 f 8 8 8 f 8 8 f f 8 8 . f d d d . 
. . . . f d d . f 8 8 8 8 f 8 f f f 8 8 . . . . . . 
. . . . . . . . f d 8 8 f 8 f f d d 8 8 . . . . . . 
. . . . . . . . f d d 8 f f f d d d d 8 . . . . . . 
. . . . . . . f d d d d d f f d d d d . . . . . . . 
. . . . . . . f d d d d d f d d d d d . . . . . . . 
. . . . . . . f d d 5 5 . f d d 5 5 5 . . . . . . . 
. . . . . . . f d 5 5 5 . f 5 5 5 2 2 . . . . . . . 
. . . . . . . f 5 5 5 2 . f 5 5 2 2 2 . . . . . . . 
. . . . . . . f 5 2 2 2 . f 5 2 2 2 2 . . . . . . . 
. . . . . . f 5 2 2 2 2 . f 2 2 2 2 . . . . . . . . 
. . . . . . f 2 2 2 2 . . f 2 2 2 2 . . . . . . . . 
. . . . . f 2 2 2 2 2 . f 2 2 2 2 . . . . . . . . . 
. . . . . f 2 2 2 2 . . f 2 2 2 2 . . . . . . . . . 
. . . . . f 2 2 2 2 . . f 2 2 2 2 . . . . . . . . . 
. . . . . f 2 2 2 2 . . f 2 2 2 2 . . . . . . . . . 
. . . . . . f 2 2 2 . . . f 2 2 2 . . . . . . . . . 
. . . . . . f 2 2 2 . . . f 2 2 2 . . . . . . . . . 
. . . . . . f 2 2 2 . . . f 2 2 2 . . . . . . . . . 
. . . . . . f 2 2 2 2 . . f 2 2 2 2 . . . . . . . . 
. . . . . . . f 2 2 2 2 . . f 2 2 2 2 . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 8 8 8 8 8 8 8 . . . . . . . . 
. . . . . . . . . . 8 f f f f f f f 8 . . . . . . . 
. . . . . . . . . 8 f f f f f f f f f . . . . . . . 
. . . . . . . . 8 f f f f f f f f f f . . . . . . . 
. . . . . . . 8 f f f f f f f 5 5 5 f . . . . . . . 
. . . . . . . 8 f f f f f f d d d 5 f . . . . . . . 
. . . . . . 8 f f f f f f d d d d d . . . . . . . . 
. . . . . . 8 f f f f d d d d f d d . . . . . . . . 
. . . . . 8 f f f f f d d d d d d d . . . . . . . . 
. . . . . 8 f f f f f f d d d d d d . . . . . . . . 
. . . . 8 f f f f f f f d d d d d d . . . . . . . . 
. . . . 8 f f f f f f f f d d d d . . . . . . . . . 
. . . 8 f f f f f f f f f d d d . . . . . . . . . . 
. . . 8 f f f f f f e d d d d d d . . . . . . . . . 
. . . 8 f f f f d d e e d d d d d d d . . . . . . . 
. . . 8 f f f f d d d e e 5 5 d d d d d d . . . . . 
. . . 8 f f f f d d d e e 2 2 5 5 5 d d d . . . . . 
. . . 8 f f f f d d d 2 e e e 2 2 5 5 d d . . . . . 
. . . . 8 f f d d d d 2 2 2 e e 2 2 2 d d . . . . . 
. . . . . 8 f d d d 2 2 2 2 2 e 2 2 2 d d . . . . . 
. . . . . 8 f d d d 2 2 2 2 2 e 2 2 2 d d . . . . . 
. . . . . f d d d d 2 2 2 2 2 e e 2 2 5 d . . . . . 
. . . . . f d d d f 2 2 2 2 2 2 e e 2 5 d . . . . . 
. . . . . f d d d f 2 2 2 2 2 2 2 e e d d d . . . . 
. . . . . f d d d . f 2 2 2 2 2 2 2 e d d d . . . . 
. . . . . f d d d . . f 2 2 2 2 2 2 e f d d . . . . 
. . . . f 5 5 5 . f 8 8 2 2 2 2 2 5 5 f 5 5 5 . . . 
. . . . f 5 5 5 f 8 8 8 5 5 2 5 5 5 8 f 5 5 5 . . . 
. . . f 5 5 5 f 8 8 8 8 8 5 5 5 8 8 8 f 5 5 5 . . . 
. . . f 5 5 5 f 8 8 8 f 8 5 5 8 8 8 8 . f 5 5 . . . 
. . . f 5 5 . 8 8 8 8 f 8 f 8 8 8 f 8 . f 5 5 . . . 
. . . f 5 5 . 8 8 8 f 8 8 f 8 8 f 8 8 . f d d d . . 
. . . f d d d 8 8 f 8 8 8 8 8 8 f 8 8 . f d d d . . 
. . . f d d f 8 f 8 8 8 f 8 8 f f 8 8 . f d d d . . 
. . . f d d . f 8 8 8 8 f 8 f f f 8 8 . . . . . . . 
. . . . . . . f d 8 8 f 8 f f d d 8 8 . . . . . . . 
. . . . . . . f d d 8 f f f d d d d 8 . . . . . . . 
. . . . . . . f d d d d f f d d d d . . . . . . . . 
. . . . . . f f d d d d f f d d d d . . . . . . . . 
. . . . . . f d d d d . f d d d d d . . . . . . . . 
. . . . . . f d d d 5 . f d d d 5 5 5 . . . . . . . 
. . . . . . f d d 5 5 5 f d 5 5 5 2 2 . . . . . . . 
. . . . . . f d 5 5 5 5 . f 5 5 2 2 2 . . . . . . . 
. . . . . . f 5 5 2 2 2 . f 5 2 2 2 2 . . . . . . . 
. . . . . . f 5 2 2 2 2 . f 2 2 2 2 . . . . . . . . 
. . . . . . f 2 2 2 2 . . f 2 2 2 2 . . . . . . . . 
. . . . . . f 2 2 2 2 . f 2 2 2 2 2 . . . . . . . . 
. . . . . f 2 2 2 2 2 . f 2 2 2 2 . . . . . . . . . 
. . . . . f 2 2 2 2 . . f 2 2 2 2 . . . . . . . . . 
. . . . . f 2 2 2 2 . . f 2 2 2 2 . . . . . . . . . 
. . . . . . f 2 2 2 . . . f 2 2 2 . . . . . . . . . 
. . . . . . f 2 2 2 . . . f 2 2 2 . . . . . . . . . 
. . . . . . f 2 2 2 . . . f 2 2 2 . . . . . . . . . 
. . . . . . f 2 2 2 2 . . f 2 2 2 2 . . . . . . . . 
. . . . . . . f 2 2 2 2 . . f 2 2 2 2 . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . 8 8 8 8 8 8 8 . . . . . . . . . 
. . . . . . . . . 8 f f f f f f f 8 . . . . . . . . 
. . . . . . . . 8 f f f f f f f f f . . . . . . . . 
. . . . . . . 8 f f f f f f f f f f . . . . . . . . 
. . . . . . 8 f f f f f f f 5 5 5 f . . . . . . . . 
. . . . . . 8 f f f f f f d d d 5 f . . . . . . . . 
. . . . . 8 f f f f f f d d d d d . . . . . . . . . 
. . . . . 8 f f f f d d d d f d d . . . . . . . . . 
. . . . 8 f f f f f d d d d d d d . . . . . . . . . 
. . . . 8 f f f f f f d d d d d d . . . . . . . . . 
. . . 8 f f f f f f f d d d d d d . . . . . . . . . 
. . . 8 f f f f f f f f d d d d . . . . . . . . . . 
. . 8 f f f f f f f f f d d d . . . . . . . . . . . 
. . 8 f f f f f f e d d d d d d . . . . . . . . . . 
. . 8 f f f f d d e e d d d d d d d . . . . . . . . 
. . 8 f f f f d d d e e 5 5 d d d d d d . . . . . . 
. . 8 f f f f d d d e e 2 2 5 5 5 d d d . . . . . . 
. . 8 f f f f d d d 2 e e e 2 2 5 5 d d . . . . . . 
. . . 8 f f d d d d 2 2 2 e e 2 2 2 d d . . . . . . 
. . . . 8 f d d d 2 2 2 2 2 e 2 2 2 d d . . . . . . 
. . . . 8 f d d d 2 2 2 2 2 e 2 2 2 d d . . . . . . 
. . . . f d d d d 2 2 2 2 2 e e 2 2 5 d . . . . . . 
. . . . f d d d f 2 2 2 2 2 2 e e 2 5 d . . . . . . 
. . . . f d d d f 2 2 2 2 2 2 2 e e d d d . . . . . 
. . . . f d d d . f 2 2 2 2 2 2 2 e d d d . . . . . 
. . . . f d d d . . f 2 2 2 2 2 2 e f d d . . . . . 
. . . f 5 5 5 . f 8 8 2 2 2 2 2 5 5 f 5 5 5 . . . . 
. . . f 5 5 5 f 8 8 8 5 5 2 5 5 5 8 f 5 5 5 . . . . 
. . f 5 5 5 f 8 8 8 8 8 5 5 5 8 8 8 f 5 5 5 . . . . 
. . f 5 5 5 f 8 8 8 f 8 5 5 8 8 8 8 . f 5 5 . . . . 
. . f 5 5 . 8 8 8 8 f 8 f 8 8 8 f 8 . f 5 5 . . . . 
. . f 5 5 . 8 8 8 f 8 8 f 8 8 f 8 8 . f d d d . . . 
. . f d d d 8 8 f 8 8 8 8 8 8 f 8 8 . f d d d . . . 
. . f d d f 8 f 8 8 8 f 8 8 f f 8 8 . f d d d . . . 
. . f d d . f 8 8 8 8 f 8 f f f 8 8 . . . . . . . . 
. . . . . . f d 8 8 f 8 f f d d 8 8 . . . . . . . . 
. . . . . . f d d 8 f f f d d d d 8 . . . . . . . . 
. . . . . . f d d d d f f d d d d . . . . . . . . . 
. . . . . . f d d d d . f d d d d . . . . . . . . . 
. . . . . . f d d d d . f d d d d . . . . . . . . . 
. . . . . . f d d d d . f d d d d . . . . . . . . . 
. . . . . . f d d d 5 . f d d d 5 5 . . . . . . . . 
. . . . . . f d d 5 5 . f d 5 5 5 2 . . . . . . . . 
. . . . . . f d 5 5 5 . f 5 5 5 2 2 . . . . . . . . 
. . . . . . f 5 5 2 2 . f 5 5 2 2 2 . . . . . . . . 
. . . . . f 5 5 2 2 2 . f 5 2 2 2 2 . . . . . . . . 
. . . . . f 5 2 2 2 2 . f 2 2 2 2 2 . . . . . . . . 
. . . . . f 2 2 2 2 2 . f 2 2 2 2 . . . . . . . . . 
. . . . . f 2 2 2 2 . . f 2 2 2 2 . . . . . . . . . 
. . . . . f 2 2 2 2 . . f 2 2 2 2 . . . . . . . . . 
. . . . . f 2 2 2 2 . . f 2 2 2 2 . . . . . . . . . 
. . . . . . f 2 2 2 . . . f 2 2 2 . . . . . . . . . 
. . . . . . f 2 2 2 . . . f 2 2 2 . . . . . . . . . 
. . . . . . f 2 2 2 . . . f 2 2 2 . . . . . . . . . 
. . . . . . f 2 2 2 2 . . f 2 2 2 2 . . . . . . . . 
. . . . . . . f 2 2 2 2 . . f 2 2 2 2 . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
`],
            150,
            true
            )
        }
    } else {
        armor = 1
        armorSprite.destroy()
        if (facingLeft) {
            animation.runImageAnimation(
            wwSprite,
            [img`
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . f f f f f f . . . . . . . . . . . . . 
. . . . . . f 5 5 5 5 5 5 f . . . . . . . . . . . . 
. . . . . . 5 1 5 5 5 4 5 5 f f . . . . . . . . . . 
. . . . . . 5 1 5 4 4 4 4 5 5 5 e e . . 5 5 . . . . 
. . . . . . 5 5 5 d d d 4 4 5 5 e e . . 4 4 4 . . . 
. . . . . . . 5 d d d d 4 4 5 5 e e e 4 4 5 5 5 . . 
. . . . . . . d d f d d 4 4 5 5 e e 5 4 5 5 5 5 5 . 
. . . . . . . d d d d d 4 5 5 4 e 5 4 5 5 5 5 5 5 . 
. . . . . . . d d d d 5 5 5 5 4 e 4 4 5 4 4 4 4 5 . 
. . . . . . . d d d 5 5 5 5 4 4 5 4 5 4 5 5 5 4 5 . 
. . . . . . . f d 5 5 5 5 4 f f f 5 4 4 5 5 5 5 5 . 
. . . . . . . f f d f f f f f f f f 5 5 5 4 5 5 5 . 
. . . . . 4 4 4 4 4 f f f f f 4 4 4 4 5 5 4 5 5 5 . 
. . . . . . 4 4 4 5 f f f f 4 4 4 4 5 5 4 4 5 5 5 . 
. . . . . 1 5 5 5 f f f f f 4 4 5 f 5 4 4 5 5 4 5 . 
. . . . . 5 5 4 5 f f f f f 4 5 5 f 5 4 5 5 5 4 5 . 
. . . . . 5 4 4 4 f f f f 4 4 5 5 5 f 5 5 5 5 4 5 . 
. . . . . 5 4 4 4 4 f f f 4 5 5 1 1 f 5 5 5 5 4 5 . 
. . . . . 5 4 4 4 f f f f 4 f 5 5 1 1 f 5 5 5 4 5 . 
. . . . . 5 4 4 4 f f f 4 4 f 5 5 5 1 5 f 5 5 4 5 . 
. . . . . 5 5 4 4 f f 4 4 4 4 e 5 5 1 1 f 5 5 4 5 . 
. . . . 5 5 5 4 4 4 4 4 4 4 4 e 5 5 5 1 f 5 5 4 5 . 
. . . . 1 5 5 4 4 4 4 4 4 4 4 e e 5 5 1 5 5 5 4 5 . 
. . . . 5 5 f 4 4 4 4 4 4 4 4 e e 5 5 5 5 f 5 4 5 . 
. . . . 5 5 f 4 4 4 4 4 4 4 4 e e e 5 4 4 f 5 4 5 . 
. . 4 4 4 4 f 4 4 4 4 4 4 4 4 e e e 4 5 4 4 f 4 5 . 
. . 4 5 4 f 5 4 4 4 4 4 4 5 5 5 e 4 4 5 5 4 f 4 5 . 
. . . 5 4 f 5 4 4 4 4 5 5 5 5 5 e e 4 4 4 4 f 4 5 . 
. . . 4 4 f 5 5 4 4 5 5 5 5 5 5 e e e 4 5 4 f 4 5 . 
. . . 4 4 f 5 5 4 4 5 1 5 5 5 5 e e e d 4 4 f 5 5 . 
. . . 4 4 f 5 5 f 5 5 1 5 5 5 5 e e e e 4 4 f 5 5 . 
. . . d d . 5 5 f f 5 1 1 5 5 5 e 4 f e d d f 5 5 . 
. . . . 4 . 5 5 5 f 5 5 1 5 5 5 4 f e e 5 5 4 5 5 . 
. . . . . 4 5 5 5 f f 5 1 1 5 4 4 f e e 5 5 4 5 5 . 
. . . . . 4 4 5 5 f f 5 5 5 4 4 4 f . e e 5 4 5 5 . 
. . . . . 4 4 4 5 f f f 5 4 4 4 f . . . e e 4 4 5 . 
. . . . . 4 4 4 4 f . . 4 4 4 4 f . . . . e 5 4 5 . 
. . . . . 4 5 4 4 f . . 4 4 4 4 f . . . . . 5 4 5 . 
. . . . . 4 5 4 4 f . . 4 5 4 4 f . . . . . 5 5 5 . 
. . . . . 4 5 5 4 f f . 4 5 4 4 f f . . . . . 5 5 . 
. . . . . 4 4 4 5 4 f . 4 4 5 5 4 f . . . . . . . . 
. . . . . . 4 5 5 4 f . . 4 4 5 4 f . . . . . . . . 
. . . . . . 4 5 4 4 f . . 4 4 4 4 f . . . . . . . . 
. . . . . . 4 5 4 4 f . . 4 5 4 4 f . . . . . . . . 
. . . . . . 4 5 4 4 f . . 4 4 4 4 f . . . . . . . . 
. . . . . . 4 5 4 4 f . . . 4 4 4 f . . . . . . . . 
. . . . . . 4 4 4 4 f . . . 4 4 4 f . . . . . . . . 
. . . . . . 4 4 4 4 f . . . 4 4 4 f . . . . . . . . 
. . . . . . 4 4 4 f . . . . 4 4 4 f . . . . . . . . 
. . . . . . 4 4 4 f . . . . 4 4 4 f . . . . . . . . 
. . . . . 4 4 5 4 f . . . . 4 5 4 f . . . . . . . . 
. . . . . 4 5 4 4 f . . . . 4 5 4 f . . . . . . . . 
. . . . . 4 5 4 4 f . . . . 4 5 4 f . . . . . . . . 
. . . . 4 4 4 4 4 . . . . 4 4 5 4 . . . . . . . . . 
. . . 4 4 4 4 4 . . . . 4 4 4 4 4 . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . f f f f f f . . . . . . . . . . . . . . 
. . . . . f 5 5 5 5 5 5 f . . . . . . . . . . . . . 
. . . . . 5 1 5 5 5 4 5 5 f f . . . . . . . . . . . 
. . . . . 5 1 5 4 4 4 4 5 5 5 e e . . 5 5 . . . . . 
. . . . . 5 5 5 d d d 4 4 5 5 e e . . 4 4 4 . . . . 
. . . . . . 5 d d d d 4 4 5 5 e e e 4 4 5 5 5 . . . 
. . . . . . d d f d d 4 4 5 5 e e 5 4 5 5 5 5 5 . . 
. . . . . . d d d d d 4 5 5 4 e 5 4 5 5 5 5 5 5 . . 
. . . . . . d d d d 5 5 5 5 4 e 4 4 5 4 4 4 4 5 . . 
. . . . . . d d d 5 5 5 5 4 4 5 4 5 4 5 5 5 4 5 . . 
. . . . . . f d 5 5 5 5 4 f f f 5 4 4 5 5 5 5 5 . . 
. . . . . . f f d f f f f f f f f 5 5 5 4 5 5 5 . . 
. . . . 4 4 4 4 4 f f f f f 4 4 4 4 5 5 4 5 5 5 . . 
. . . . . 4 4 4 5 f f f f 4 4 4 4 5 5 4 4 5 5 5 . . 
. . . . 1 5 5 5 f f f f f 4 4 5 f 5 4 4 5 5 4 5 . . 
. . . . 5 5 4 5 f f f f f 4 5 5 f 5 4 5 5 5 4 5 . . 
. . . . 5 4 4 4 f f f f 4 4 5 5 5 f 5 5 5 5 4 5 . . 
. . . . 5 4 4 4 4 f f f 4 5 5 1 1 f 5 5 5 5 4 5 . . 
. . . . 5 4 4 4 f f f f 4 f 5 5 1 1 f 5 5 5 4 5 . . 
. . . . 5 4 4 4 f f f 4 4 f 5 5 5 1 5 f 5 5 4 5 . . 
. . . . 5 5 4 4 f f 4 4 4 4 e 5 5 1 1 f 5 5 4 5 . . 
. . . 5 5 5 4 4 4 4 4 4 4 4 e 5 5 5 1 f 5 5 4 5 . . 
. . . 1 5 5 4 4 4 4 4 4 4 4 e e 5 5 1 5 5 5 4 5 . . 
. . . 5 5 f 4 4 4 4 4 4 4 4 e e 5 5 5 5 f 5 4 5 . . 
. . . 5 5 f 4 4 4 4 4 4 4 4 e e e 5 4 4 f 5 4 5 . . 
. 4 4 4 4 f 4 4 4 4 4 4 4 4 e e e 4 5 4 4 f 4 5 . . 
. 4 5 4 f 5 4 4 4 4 4 4 5 5 5 e 4 4 5 5 4 f 4 5 . . 
. . 5 4 f 5 4 4 4 4 5 5 5 5 5 e e 4 4 4 4 f 4 5 . . 
. . 4 4 f 5 5 4 4 5 5 5 5 5 5 e e e 4 5 4 f 4 5 . . 
. . 4 4 f 5 5 4 4 5 1 5 5 5 5 e e e d 4 4 f 5 5 . . 
. . 4 4 f 5 5 f 5 5 1 5 5 5 5 e e e e 4 4 f 5 5 . . 
. . d d . 5 5 f f 5 1 1 5 5 5 e 4 f e d d f 5 5 . . 
. . . 4 . 5 5 5 f 5 5 1 5 5 5 4 f e e 5 5 4 5 5 . . 
. . . . 4 5 5 5 f f 5 1 1 5 4 4 f e e 5 5 4 5 5 . . 
. . . . 4 4 5 5 f f 5 5 5 4 4 4 f . e e 5 4 5 5 . . 
. . . . 4 4 4 5 f f f 5 4 4 4 f . . . e e 4 4 5 . . 
. . . . 4 4 4 4 f . . 4 4 4 4 f . . . . e 5 4 5 . . 
. . . . 4 5 4 4 f . . 4 4 4 4 f . . . . . 5 4 5 . . 
. . . . 4 5 4 4 f . . 4 5 4 4 f . . . . . 5 5 5 . . 
. . . . 4 5 5 4 f . . 4 5 4 4 f . . . . . . 5 5 . . 
. . . . . 4 4 5 5 f . . 4 4 4 5 f . . . . . . . . . 
. . . . . 4 4 5 4 f . . 4 4 4 4 f . . . . . . . . . 
. . . . . . 4 5 4 4 f . . 4 5 4 4 f . . . . . . . . 
. . . . . . 4 5 4 4 f . . 4 4 4 4 f . . . . . . . . 
. . . . . . 4 5 4 4 f . . . 4 4 4 f . . . . . . . . 
. . . . . . 4 4 4 4 f . . . 4 4 4 f . . . . . . . . 
. . . . . . 4 4 4 4 f . . . 4 4 4 f . . . . . . . . 
. . . . . . 4 4 4 f . . . . 4 4 4 f . . . . . . . . 
. . . . . . 4 4 4 f . . . . 4 4 4 f . . . . . . . . 
. . . . . 4 4 5 4 f . . . . 4 5 4 f . . . . . . . . 
. . . . . 4 5 4 4 f . . . . 4 5 4 f . . . . . . . . 
. . . . . 4 5 4 4 f . . . . 4 5 4 f . . . . . . . . 
. . . . 4 4 4 4 4 . . . . 4 4 5 4 . . . . . . . . . 
. . . 4 4 4 4 4 . . . . 4 4 4 4 4 . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . f f f f f f . . . . . . . . . . . . . 
. . . . . . f 5 5 5 5 5 5 f . . . . . . . . . . . . 
. . . . . . 5 1 5 5 5 4 5 5 f f . . . . . . . . . . 
. . . . . . 5 1 5 4 4 4 4 5 5 5 e e . . 5 5 . . . . 
. . . . . . 5 5 5 d d d 4 4 5 5 e e . . 4 4 4 . . . 
. . . . . . . 5 d d d d 4 4 5 5 e e e 4 4 5 5 5 . . 
. . . . . . . d d f d d 4 4 5 5 e e 5 4 5 5 5 5 5 . 
. . . . . . . d d d d d 4 5 5 4 e 5 4 5 5 5 5 5 5 . 
. . . . . . . d d d d 5 5 5 5 4 e 4 4 5 4 4 4 4 5 . 
. . . . . . . d d d 5 5 5 5 4 4 5 4 5 4 5 5 5 4 5 . 
. . . . . . . f d 5 5 5 5 4 f f f 5 4 4 5 5 5 5 5 . 
. . . . . . . f f d f f f f f f f f 5 5 5 4 5 5 5 . 
. . . . . 4 4 4 4 4 f f f f f 4 4 4 4 5 5 4 5 5 5 . 
. . . . . . 4 4 4 5 f f f f 4 4 4 4 5 5 4 4 5 5 5 . 
. . . . . 1 5 5 5 f f f f f 4 4 5 f 5 4 4 5 5 4 5 . 
. . . . . 5 5 4 5 f f f f f 4 5 5 f 5 4 5 5 5 4 5 . 
. . . . . 5 4 4 4 f f f f 4 4 5 5 5 f 5 5 5 5 4 5 . 
. . . . . 5 4 4 4 4 f f f 4 5 5 1 1 f 5 5 5 5 4 5 . 
. . . . . 5 4 4 4 f f f f 4 f 5 5 1 1 f 5 5 5 4 5 . 
. . . . . 5 4 4 4 f f f 4 4 f 5 5 5 1 5 f 5 5 4 5 . 
. . . . . 5 5 4 4 f f 4 4 4 4 e 5 5 1 1 f 5 5 4 5 . 
. . . . 5 5 5 4 4 4 4 4 4 4 4 e 5 5 5 1 f 5 5 4 5 . 
. . . . 1 5 5 4 4 4 4 4 4 4 4 e e 5 5 1 5 5 5 4 5 . 
. . . . 5 5 f 4 4 4 4 4 4 4 4 e e 5 5 5 5 f 5 4 5 . 
. . . . 5 5 f 4 4 4 4 4 4 4 4 e e e 5 4 4 f 5 4 5 . 
. . 4 4 4 4 f 4 4 4 4 4 4 4 4 e e e 4 5 4 4 f 4 5 . 
. . 4 5 4 f 5 4 4 4 4 4 4 5 5 5 e 4 4 5 5 4 f 4 5 . 
. . . 5 4 f 5 4 4 4 4 5 5 5 5 5 e e 4 4 4 4 f 4 5 . 
. . . 4 4 f 5 5 4 4 5 5 5 5 5 5 e e e 4 5 4 f 4 5 . 
. . . 4 4 f 5 5 4 4 5 1 5 5 5 5 e e e d 4 4 f 5 5 . 
. . . 4 4 f 5 5 f 5 5 1 5 5 5 5 e e e e 4 4 f 5 5 . 
. . . d d . 5 5 f f 5 1 1 5 5 5 e 4 f e d d f 5 5 . 
. . . . 4 . 5 5 5 f 5 5 1 5 5 5 4 f e e 5 5 4 5 5 . 
. . . . . 4 5 5 5 f f 5 1 1 5 4 4 f e e 5 5 4 5 5 . 
. . . . . 4 4 5 5 f f 5 5 5 4 4 4 f . e e 5 4 5 5 . 
. . . . . 4 4 4 5 f f f 5 4 4 4 f . . . e e 4 4 5 . 
. . . . . 4 4 4 4 f . . 4 4 4 4 f . . . . e 5 4 5 . 
. . . . . 4 5 4 4 f . . 4 4 4 4 f . . . . . 5 4 5 . 
. . . . . 4 5 4 4 f . . 4 5 4 4 f . . . . . 5 5 5 . 
. . . . . 4 5 5 4 f f . 4 5 4 4 f f . . . . . 5 5 . 
. . . . . 4 4 4 5 4 f . 4 4 5 5 4 f . . . . . . . . 
. . . . . . 4 5 5 4 f . . 4 4 5 4 f . . . . . . . . 
. . . . . . 4 5 4 4 f . . 4 4 4 4 f . . . . . . . . 
. . . . . . 4 5 4 4 f . . 4 5 4 4 f . . . . . . . . 
. . . . . . 4 5 4 4 f . . 4 4 4 4 f . . . . . . . . 
. . . . . . 4 5 4 4 f . . . 4 4 4 f . . . . . . . . 
. . . . . . 4 4 4 4 f . . . 4 4 4 f . . . . . . . . 
. . . . . . 4 4 4 4 f . . . 4 4 4 f . . . . . . . . 
. . . . . . 4 4 4 f . . . . 4 4 4 f . . . . . . . . 
. . . . . . 4 4 4 f . . . . 4 4 4 f . . . . . . . . 
. . . . . 4 4 5 4 f . . . . 4 5 4 f . . . . . . . . 
. . . . . 4 5 4 4 f . . . . 4 5 4 f . . . . . . . . 
. . . . . 4 5 4 4 f . . . . 4 5 4 f . . . . . . . . 
. . . . 4 4 4 4 4 . . . . 4 4 5 4 . . . . . . . . . 
. . . 4 4 4 4 4 . . . . 4 4 4 4 4 . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . f f f f f f . . . . . . . . . . . . 
. . . . . . . f 5 5 5 5 5 5 f . . . . . . . . . . . 
. . . . . . . 5 1 5 5 5 4 5 5 f f . . . . . . . . . 
. . . . . . . 5 1 5 4 4 4 4 5 5 5 e e . . 5 5 . . . 
. . . . . . . 5 5 5 d d d 4 4 5 5 e e . . 4 4 4 . . 
. . . . . . . . 5 d d d d 4 4 5 5 e e e 4 4 5 5 5 . 
. . . . . . . . d d f d d 4 4 5 5 e e 5 4 5 5 5 5 5 
. . . . . . . . d d d d d 4 5 5 4 e 5 4 5 5 5 5 5 5 
. . . . . . . . d d d d 5 5 5 5 4 e 4 4 5 4 4 4 4 5 
. . . . . . . . d d d 5 5 5 5 4 4 5 4 5 4 5 5 5 4 5 
. . . . . . . . f d 5 5 5 5 4 f f f 5 4 4 5 5 5 5 5 
. . . . . . . . f f d f f f f f f f f 5 5 5 4 5 5 5 
. . . . . . 4 4 4 4 4 f f f f f 4 4 4 4 5 5 4 5 5 5 
. . . . . . . 4 4 4 5 f f f f 4 4 4 4 5 5 4 4 5 5 5 
. . . . . . 1 5 5 5 f f f f f 4 4 5 f 5 4 4 5 5 4 5 
. . . . . . 5 5 4 5 f f f f f 4 5 5 f 5 4 5 5 5 4 5 
. . . . . . 5 4 4 4 f f f f 4 4 5 5 5 f 5 5 5 5 4 5 
. . . . . . 5 4 4 4 4 f f f 4 5 5 1 1 f 5 5 5 5 4 5 
. . . . . . 5 4 4 4 f f f f 4 f 5 5 1 1 f 5 5 5 4 5 
. . . . . . 5 4 4 4 f f f 4 4 f 5 5 5 1 5 f 5 5 4 5 
. . . . . . 5 5 4 4 f f 4 4 4 4 e 5 5 1 1 f 5 5 4 5 
. . . . . 5 5 5 4 4 4 4 4 4 4 4 e 5 5 5 1 f 5 5 4 5 
. . . . . 1 5 5 4 4 4 4 4 4 4 4 e e 5 5 1 5 5 5 4 5 
. . . . . 5 5 f 4 4 4 4 4 4 4 4 e e 5 5 5 5 f 5 4 5 
. . . . . 5 5 f 4 4 4 4 4 4 4 4 e e e 5 4 4 f 5 4 5 
. . . 4 4 4 4 f 4 4 4 4 4 4 4 4 e e e 4 5 4 4 f 4 5 
. . . 4 5 4 f 5 4 4 4 4 4 4 5 5 5 e 4 4 5 5 4 f 4 5 
. . . . 5 4 f 5 4 4 4 4 5 5 5 5 5 e e 4 4 4 4 f 4 5 
. . . . 4 4 f 5 5 4 4 5 5 5 5 5 5 e e e 4 5 4 f 4 5 
. . . . 4 4 f 5 5 4 4 5 1 5 5 5 5 e e e d 4 4 f 5 5 
. . . . 4 4 f 5 5 f 5 5 1 5 5 5 5 e e e e 4 4 f 5 5 
. . . . d d . 5 5 f f 5 1 1 5 5 5 e 4 f e d d f 5 5 
. . . . . 4 . 5 5 5 f 5 5 1 5 5 5 4 f e e 5 5 4 5 5 
. . . . . . 4 5 5 5 f f 5 1 1 5 4 4 f e e 5 5 4 5 5 
. . . . . . 4 4 5 5 f f 5 5 5 4 4 4 f . e e 5 4 5 5 
. . . . . . 4 4 4 5 f f f 5 4 4 4 f . . . e e 4 4 5 
. . . . . . 4 4 4 4 f . . 4 4 4 4 f . . . . e 5 4 5 
. . . . . . 4 5 4 4 f . . 4 4 4 4 f . . . . . 5 4 5 
. . . . . . 4 5 4 4 f . . 4 5 4 4 f . . . . . 5 5 5 
. . . . . . 4 5 5 4 f . . 4 5 4 4 f . . . . . . 5 5 
. . . . . . 4 4 5 4 f . . 4 5 4 4 f . . . . . . . . 
. . . . . . 4 4 5 4 f . . 4 5 5 4 f . . . . . . . . 
. . . . . . 4 5 5 4 f . . 4 4 5 4 f . . . . . . . . 
. . . . . . 4 5 4 4 f . . 4 4 4 4 f . . . . . . . . 
. . . . . . 4 5 4 4 f . . 4 5 4 4 f . . . . . . . . 
. . . . . . 4 5 4 4 f . . 4 4 4 4 f . . . . . . . . 
. . . . . . 4 5 4 4 f . . . 4 4 4 f . . . . . . . . 
. . . . . . 4 4 4 4 f . . . 4 4 4 f . . . . . . . . 
. . . . . . 4 4 4 4 f . . . 4 4 4 f . . . . . . . . 
. . . . . . 4 4 4 f . . . . 4 4 4 f . . . . . . . . 
. . . . . . 4 4 4 f . . . . 4 4 4 f . . . . . . . . 
. . . . . 4 4 5 4 f . . . . 4 5 4 f . . . . . . . . 
. . . . . 4 5 4 4 f . . . . 4 5 4 f . . . . . . . . 
. . . . . 4 5 4 4 f . . . . 4 5 4 f . . . . . . . . 
. . . . 4 4 4 4 4 . . . . 4 4 5 4 . . . . . . . . . 
. . . 4 4 4 4 4 . . . . 4 4 4 4 4 . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
`],
            150,
            true
            )
        } else {
            animation.runImageAnimation(
            wwSprite,
            [img`
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f f f f f f . . . . . . . 
. . . . . . . . . . . . f 5 5 5 5 5 5 f . . . . . . 
. . . . . . . . . . f f 5 5 4 5 5 5 1 5 . . . . . . 
. . . . 5 5 . . e e 5 5 5 4 4 4 4 5 1 5 . . . . . . 
. . . 4 4 4 . . e e 5 5 4 4 d d d 5 5 5 . . . . . . 
. . 5 5 5 4 4 e e e 5 5 4 4 d d d d 5 . . . . . . . 
. 5 5 5 5 5 4 5 e e 5 5 4 4 d d f d d . . . . . . . 
. 5 5 5 5 5 5 4 5 e 4 5 5 4 d d d d d . . . . . . . 
. 5 4 4 4 4 5 4 4 e 4 5 5 5 5 d d d d . . . . . . . 
. 5 4 5 5 5 4 5 4 5 4 4 5 5 5 5 d d d . . . . . . . 
. 5 5 5 5 5 4 4 5 f f f 4 5 5 5 5 d f . . . . . . . 
. 5 5 5 4 5 5 5 f f f f f f f f d f f . . . . . . . 
. 5 5 5 4 5 5 4 4 4 4 f f f f f 4 4 4 4 4 . . . . . 
. 5 5 5 4 4 5 5 4 4 4 4 f f f f 5 4 4 4 . . . . . . 
. 5 4 5 5 4 4 5 f 5 4 4 f f f f f 5 5 5 1 . . . . . 
. 5 4 5 5 5 4 5 f 5 5 4 f f f f f 5 4 5 5 . . . . . 
. 5 4 5 5 5 5 f 5 5 5 4 4 f f f f 4 4 4 5 . . . . . 
. 5 4 5 5 5 5 f 1 1 5 5 4 f f f 4 4 4 4 5 . . . . . 
. 5 4 5 5 5 f 1 1 5 5 f 4 f f f f 4 4 4 5 . . . . . 
. 5 4 5 5 f 5 1 5 5 5 f 4 4 f f f 4 4 4 5 . . . . . 
. 5 4 5 5 f 1 1 5 5 e 4 4 4 4 f f 4 4 5 5 . . . . . 
. 5 4 5 5 f 1 5 5 5 e 4 4 4 4 4 4 4 4 5 5 5 . . . . 
. 5 4 5 5 5 1 5 5 e e 4 4 4 4 4 4 4 4 5 5 1 . . . . 
. 5 4 5 f 5 5 5 5 e e 4 4 4 4 4 4 4 4 f 5 5 . . . . 
. 5 4 5 f 4 4 5 e e e 4 4 4 4 4 4 4 4 f 5 5 . . . . 
. 5 4 f 4 4 5 4 e e e 4 4 4 4 4 4 4 4 f 4 4 4 4 . . 
. 5 4 f 4 5 5 4 4 e 5 5 5 4 4 4 4 4 4 5 f 4 5 4 . . 
. 5 4 f 4 4 4 4 e e 5 5 5 5 5 4 4 4 4 5 f 4 5 . . . 
. 5 4 f 4 5 4 e e e 5 5 5 5 5 5 4 4 5 5 f 4 4 . . . 
. 5 5 f 4 4 d e e e 5 5 5 5 1 5 4 4 5 5 f 4 4 . . . 
. 5 5 f 4 4 e e e e 5 5 5 5 1 5 5 f 5 5 f 4 4 . . . 
. 5 5 f d d e f 4 e 5 5 5 1 1 5 f f 5 5 . d d . . . 
. 5 5 4 5 5 e e f 4 5 5 5 1 5 5 f 5 5 5 . 4 . . . . 
. 5 5 4 5 5 e e f 4 4 5 1 1 5 f f 5 5 5 4 . . . . . 
. 5 5 4 5 e e . f 4 4 4 5 5 5 f f 5 5 4 4 . . . . . 
. 5 4 4 e e . . . f 4 4 4 5 f f f 5 4 4 4 . . . . . 
. 5 4 5 e . . . . f 4 4 4 4 . . f 4 4 4 4 . . . . . 
. 5 4 5 . . . . . f 4 4 4 4 . . f 4 4 5 4 . . . . . 
. 5 5 5 . . . . . f 4 4 5 4 . . f 4 4 5 4 . . . . . 
. 5 5 . . . . . f f 4 4 5 4 . f f 4 5 5 4 . . . . . 
. . . . . . . . f 4 5 5 4 4 . f 4 5 4 4 4 . . . . . 
. . . . . . . . f 4 5 4 4 . . f 4 5 5 4 . . . . . . 
. . . . . . . . f 4 4 4 4 . . f 4 4 5 4 . . . . . . 
. . . . . . . . f 4 4 5 4 . . f 4 4 5 4 . . . . . . 
. . . . . . . . f 4 4 4 4 . . f 4 4 5 4 . . . . . . 
. . . . . . . . f 4 4 4 . . . f 4 4 5 4 . . . . . . 
. . . . . . . . f 4 4 4 . . . f 4 4 4 4 . . . . . . 
. . . . . . . . f 4 4 4 . . . f 4 4 4 4 . . . . . . 
. . . . . . . . f 4 4 4 . . . . f 4 4 4 . . . . . . 
. . . . . . . . f 4 4 4 . . . . f 4 4 4 . . . . . . 
. . . . . . . . f 4 5 4 . . . . f 4 5 4 4 . . . . . 
. . . . . . . . f 4 5 4 . . . . f 4 4 5 4 . . . . . 
. . . . . . . . f 4 5 4 . . . . f 4 4 5 4 . . . . . 
. . . . . . . . . 4 5 4 4 . . . . 4 4 4 4 4 . . . . 
. . . . . . . . . 4 4 4 4 4 . . . . 4 4 4 4 4 . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . f f f f f f . . . . . . 
. . . . . . . . . . . . . f 5 5 5 5 5 5 f . . . . . 
. . . . . . . . . . . f f 5 5 4 5 5 5 1 5 . . . . . 
. . . . . 5 5 . . e e 5 5 5 4 4 4 4 5 1 5 . . . . . 
. . . . 4 4 4 . . e e 5 5 4 4 d d d 5 5 5 . . . . . 
. . . 5 5 5 4 4 e e e 5 5 4 4 d d d d 5 . . . . . . 
. . 5 5 5 5 5 4 5 e e 5 5 4 4 d d f d d . . . . . . 
. . 5 5 5 5 5 5 4 5 e 4 5 5 4 d d d d d . . . . . . 
. . 5 4 4 4 4 5 4 4 e 4 5 5 5 5 d d d d . . . . . . 
. . 5 4 5 5 5 4 5 4 5 4 4 5 5 5 5 d d d . . . . . . 
. . 5 5 5 5 5 4 4 5 f f f 4 5 5 5 5 d f . . . . . . 
. . 5 5 5 4 5 5 5 f f f f f f f f d f f . . . . . . 
. . 5 5 5 4 5 5 4 4 4 4 f f f f f 4 4 4 4 4 . . . . 
. . 5 5 5 4 4 5 5 4 4 4 4 f f f f 5 4 4 4 . . . . . 
. . 5 4 5 5 4 4 5 f 5 4 4 f f f f f 5 5 5 1 . . . . 
. . 5 4 5 5 5 4 5 f 5 5 4 f f f f f 5 4 5 5 . . . . 
. . 5 4 5 5 5 5 f 5 5 5 4 4 f f f f 4 4 4 5 . . . . 
. . 5 4 5 5 5 5 f 1 1 5 5 4 f f f 4 4 4 4 5 . . . . 
. . 5 4 5 5 5 f 1 1 5 5 f 4 f f f f 4 4 4 5 . . . . 
. . 5 4 5 5 f 5 1 5 5 5 f 4 4 f f f 4 4 4 5 . . . . 
. . 5 4 5 5 f 1 1 5 5 e 4 4 4 4 f f 4 4 5 5 . . . . 
. . 5 4 5 5 f 1 5 5 5 e 4 4 4 4 4 4 4 4 5 5 5 . . . 
. . 5 4 5 5 5 1 5 5 e e 4 4 4 4 4 4 4 4 5 5 1 . . . 
. . 5 4 5 f 5 5 5 5 e e 4 4 4 4 4 4 4 4 f 5 5 . . . 
. . 5 4 5 f 4 4 5 e e e 4 4 4 4 4 4 4 4 f 5 5 . . . 
. . 5 4 f 4 4 5 4 e e e 4 4 4 4 4 4 4 4 f 4 4 4 4 . 
. . 5 4 f 4 5 5 4 4 e 5 5 5 4 4 4 4 4 4 5 f 4 5 4 . 
. . 5 4 f 4 4 4 4 e e 5 5 5 5 5 4 4 4 4 5 f 4 5 . . 
. . 5 4 f 4 5 4 e e e 5 5 5 5 5 5 4 4 5 5 f 4 4 . . 
. . 5 5 f 4 4 d e e e 5 5 5 5 1 5 4 4 5 5 f 4 4 . . 
. . 5 5 f 4 4 e e e e 5 5 5 5 1 5 5 f 5 5 f 4 4 . . 
. . 5 5 f d d e f 4 e 5 5 5 1 1 5 f f 5 5 . d d . . 
. . 5 5 4 5 5 e e f 4 5 5 5 1 5 5 f 5 5 5 . 4 . . . 
. . 5 5 4 5 5 e e f 4 4 5 1 1 5 f f 5 5 5 4 . . . . 
. . 5 5 4 5 e e . f 4 4 4 5 5 5 f f 5 5 4 4 . . . . 
. . 5 4 4 e e . . . f 4 4 4 5 f f f 5 4 4 4 . . . . 
. . 5 4 5 e . . . . f 4 4 4 4 . . f 4 4 4 4 . . . . 
. . 5 4 5 . . . . . f 4 4 4 4 . . f 4 4 5 4 . . . . 
. . 5 5 5 . . . . . f 4 4 5 4 . . f 4 4 5 4 . . . . 
. . 5 5 . . . . . . f 4 4 5 4 . . f 4 5 5 4 . . . . 
. . . . . . . . . f 5 4 4 4 . . f 5 5 4 4 . . . . . 
. . . . . . . . . f 4 4 4 4 . . f 4 5 4 4 . . . . . 
. . . . . . . . f 4 4 5 4 . . f 4 4 5 4 . . . . . . 
. . . . . . . . f 4 4 4 4 . . f 4 4 5 4 . . . . . . 
. . . . . . . . f 4 4 4 . . . f 4 4 5 4 . . . . . . 
. . . . . . . . f 4 4 4 . . . f 4 4 4 4 . . . . . . 
. . . . . . . . f 4 4 4 . . . f 4 4 4 4 . . . . . . 
. . . . . . . . f 4 4 4 . . . . f 4 4 4 . . . . . . 
. . . . . . . . f 4 4 4 . . . . f 4 4 4 . . . . . . 
. . . . . . . . f 4 5 4 . . . . f 4 5 4 4 . . . . . 
. . . . . . . . f 4 5 4 . . . . f 4 4 5 4 . . . . . 
. . . . . . . . f 4 5 4 . . . . f 4 4 5 4 . . . . . 
. . . . . . . . . 4 5 4 4 . . . . 4 4 4 4 4 . . . . 
. . . . . . . . . 4 4 4 4 4 . . . . 4 4 4 4 4 . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f f f f f f . . . . . . . 
. . . . . . . . . . . . f 5 5 5 5 5 5 f . . . . . . 
. . . . . . . . . . f f 5 5 4 5 5 5 1 5 . . . . . . 
. . . . 5 5 . . e e 5 5 5 4 4 4 4 5 1 5 . . . . . . 
. . . 4 4 4 . . e e 5 5 4 4 d d d 5 5 5 . . . . . . 
. . 5 5 5 4 4 e e e 5 5 4 4 d d d d 5 . . . . . . . 
. 5 5 5 5 5 4 5 e e 5 5 4 4 d d f d d . . . . . . . 
. 5 5 5 5 5 5 4 5 e 4 5 5 4 d d d d d . . . . . . . 
. 5 4 4 4 4 5 4 4 e 4 5 5 5 5 d d d d . . . . . . . 
. 5 4 5 5 5 4 5 4 5 4 4 5 5 5 5 d d d . . . . . . . 
. 5 5 5 5 5 4 4 5 f f f 4 5 5 5 5 d f . . . . . . . 
. 5 5 5 4 5 5 5 f f f f f f f f d f f . . . . . . . 
. 5 5 5 4 5 5 4 4 4 4 f f f f f 4 4 4 4 4 . . . . . 
. 5 5 5 4 4 5 5 4 4 4 4 f f f f 5 4 4 4 . . . . . . 
. 5 4 5 5 4 4 5 f 5 4 4 f f f f f 5 5 5 1 . . . . . 
. 5 4 5 5 5 4 5 f 5 5 4 f f f f f 5 4 5 5 . . . . . 
. 5 4 5 5 5 5 f 5 5 5 4 4 f f f f 4 4 4 5 . . . . . 
. 5 4 5 5 5 5 f 1 1 5 5 4 f f f 4 4 4 4 5 . . . . . 
. 5 4 5 5 5 f 1 1 5 5 f 4 f f f f 4 4 4 5 . . . . . 
. 5 4 5 5 f 5 1 5 5 5 f 4 4 f f f 4 4 4 5 . . . . . 
. 5 4 5 5 f 1 1 5 5 e 4 4 4 4 f f 4 4 5 5 . . . . . 
. 5 4 5 5 f 1 5 5 5 e 4 4 4 4 4 4 4 4 5 5 5 . . . . 
. 5 4 5 5 5 1 5 5 e e 4 4 4 4 4 4 4 4 5 5 1 . . . . 
. 5 4 5 f 5 5 5 5 e e 4 4 4 4 4 4 4 4 f 5 5 . . . . 
. 5 4 5 f 4 4 5 e e e 4 4 4 4 4 4 4 4 f 5 5 . . . . 
. 5 4 f 4 4 5 4 e e e 4 4 4 4 4 4 4 4 f 4 4 4 4 . . 
. 5 4 f 4 5 5 4 4 e 5 5 5 4 4 4 4 4 4 5 f 4 5 4 . . 
. 5 4 f 4 4 4 4 e e 5 5 5 5 5 4 4 4 4 5 f 4 5 . . . 
. 5 4 f 4 5 4 e e e 5 5 5 5 5 5 4 4 5 5 f 4 4 . . . 
. 5 5 f 4 4 d e e e 5 5 5 5 1 5 4 4 5 5 f 4 4 . . . 
. 5 5 f 4 4 e e e e 5 5 5 5 1 5 5 f 5 5 f 4 4 . . . 
. 5 5 f d d e f 4 e 5 5 5 1 1 5 f f 5 5 . d d . . . 
. 5 5 4 5 5 e e f 4 5 5 5 1 5 5 f 5 5 5 . 4 . . . . 
. 5 5 4 5 5 e e f 4 4 5 1 1 5 f f 5 5 5 4 . . . . . 
. 5 5 4 5 e e . f 4 4 4 5 5 5 f f 5 5 4 4 . . . . . 
. 5 4 4 e e . . . f 4 4 4 5 f f f 5 4 4 4 . . . . . 
. 5 4 5 e . . . . f 4 4 4 4 . . f 4 4 4 4 . . . . . 
. 5 4 5 . . . . . f 4 4 4 4 . . f 4 4 5 4 . . . . . 
. 5 5 5 . . . . . f 4 4 5 4 . . f 4 4 5 4 . . . . . 
. 5 5 . . . . . f f 4 4 5 4 . f f 4 5 5 4 . . . . . 
. . . . . . . . f 4 5 5 4 4 . f 4 5 4 4 4 . . . . . 
. . . . . . . . f 4 5 4 4 . . f 4 5 5 4 . . . . . . 
. . . . . . . . f 4 4 4 4 . . f 4 4 5 4 . . . . . . 
. . . . . . . . f 4 4 5 4 . . f 4 4 5 4 . . . . . . 
. . . . . . . . f 4 4 4 4 . . f 4 4 5 4 . . . . . . 
. . . . . . . . f 4 4 4 . . . f 4 4 5 4 . . . . . . 
. . . . . . . . f 4 4 4 . . . f 4 4 4 4 . . . . . . 
. . . . . . . . f 4 4 4 . . . f 4 4 4 4 . . . . . . 
. . . . . . . . f 4 4 4 . . . . f 4 4 4 . . . . . . 
. . . . . . . . f 4 4 4 . . . . f 4 4 4 . . . . . . 
. . . . . . . . f 4 5 4 . . . . f 4 5 4 4 . . . . . 
. . . . . . . . f 4 5 4 . . . . f 4 4 5 4 . . . . . 
. . . . . . . . f 4 5 4 . . . . f 4 4 5 4 . . . . . 
. . . . . . . . . 4 5 4 4 . . . . 4 4 4 4 4 . . . . 
. . . . . . . . . 4 4 4 4 4 . . . . 4 4 4 4 4 . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . f f f f f f . . . . . . . . 
. . . . . . . . . . . f 5 5 5 5 5 5 f . . . . . . . 
. . . . . . . . . f f 5 5 4 5 5 5 1 5 . . . . . . . 
. . . 5 5 . . e e 5 5 5 4 4 4 4 5 1 5 . . . . . . . 
. . 4 4 4 . . e e 5 5 4 4 d d d 5 5 5 . . . . . . . 
. 5 5 5 4 4 e e e 5 5 4 4 d d d d 5 . . . . . . . . 
5 5 5 5 5 4 5 e e 5 5 4 4 d d f d d . . . . . . . . 
5 5 5 5 5 5 4 5 e 4 5 5 4 d d d d d . . . . . . . . 
5 4 4 4 4 5 4 4 e 4 5 5 5 5 d d d d . . . . . . . . 
5 4 5 5 5 4 5 4 5 4 4 5 5 5 5 d d d . . . . . . . . 
5 5 5 5 5 4 4 5 f f f 4 5 5 5 5 d f . . . . . . . . 
5 5 5 4 5 5 5 f f f f f f f f d f f . . . . . . . . 
5 5 5 4 5 5 4 4 4 4 f f f f f 4 4 4 4 4 . . . . . . 
5 5 5 4 4 5 5 4 4 4 4 f f f f 5 4 4 4 . . . . . . . 
5 4 5 5 4 4 5 f 5 4 4 f f f f f 5 5 5 1 . . . . . . 
5 4 5 5 5 4 5 f 5 5 4 f f f f f 5 4 5 5 . . . . . . 
5 4 5 5 5 5 f 5 5 5 4 4 f f f f 4 4 4 5 . . . . . . 
5 4 5 5 5 5 f 1 1 5 5 4 f f f 4 4 4 4 5 . . . . . . 
5 4 5 5 5 f 1 1 5 5 f 4 f f f f 4 4 4 5 . . . . . . 
5 4 5 5 f 5 1 5 5 5 f 4 4 f f f 4 4 4 5 . . . . . . 
5 4 5 5 f 1 1 5 5 e 4 4 4 4 f f 4 4 5 5 . . . . . . 
5 4 5 5 f 1 5 5 5 e 4 4 4 4 4 4 4 4 5 5 5 . . . . . 
5 4 5 5 5 1 5 5 e e 4 4 4 4 4 4 4 4 5 5 1 . . . . . 
5 4 5 f 5 5 5 5 e e 4 4 4 4 4 4 4 4 f 5 5 . . . . . 
5 4 5 f 4 4 5 e e e 4 4 4 4 4 4 4 4 f 5 5 . . . . . 
5 4 f 4 4 5 4 e e e 4 4 4 4 4 4 4 4 f 4 4 4 4 . . . 
5 4 f 4 5 5 4 4 e 5 5 5 4 4 4 4 4 4 5 f 4 5 4 . . . 
5 4 f 4 4 4 4 e e 5 5 5 5 5 4 4 4 4 5 f 4 5 . . . . 
5 4 f 4 5 4 e e e 5 5 5 5 5 5 4 4 5 5 f 4 4 . . . . 
5 5 f 4 4 d e e e 5 5 5 5 1 5 4 4 5 5 f 4 4 . . . . 
5 5 f 4 4 e e e e 5 5 5 5 1 5 5 f 5 5 f 4 4 . . . . 
5 5 f d d e f 4 e 5 5 5 1 1 5 f f 5 5 . d d . . . . 
5 5 4 5 5 e e f 4 5 5 5 1 5 5 f 5 5 5 . 4 . . . . . 
5 5 4 5 5 e e f 4 4 5 1 1 5 f f 5 5 5 4 . . . . . . 
5 5 4 5 e e . f 4 4 4 5 5 5 f f 5 5 4 4 . . . . . . 
5 4 4 e e . . . f 4 4 4 5 f f f 5 4 4 4 . . . . . . 
5 4 5 e . . . . f 4 4 4 4 . . f 4 4 4 4 . . . . . . 
5 4 5 . . . . . f 4 4 4 4 . . f 4 4 5 4 . . . . . . 
5 5 5 . . . . . f 4 4 5 4 . . f 4 4 5 4 . . . . . . 
5 5 . . . . . . f 4 4 5 4 . . f 4 5 5 4 . . . . . . 
. . . . . . . . f 4 4 5 4 . . f 4 5 4 4 . . . . . . 
. . . . . . . . f 4 5 5 4 . . f 4 5 4 4 . . . . . . 
. . . . . . . . f 4 5 4 4 . . f 4 5 5 4 . . . . . . 
. . . . . . . . f 4 4 4 4 . . f 4 4 5 4 . . . . . . 
. . . . . . . . f 4 4 5 4 . . f 4 4 5 4 . . . . . . 
. . . . . . . . f 4 4 4 4 . . f 4 4 5 4 . . . . . . 
. . . . . . . . f 4 4 4 . . . f 4 4 5 4 . . . . . . 
. . . . . . . . f 4 4 4 . . . f 4 4 4 4 . . . . . . 
. . . . . . . . f 4 4 4 . . . f 4 4 4 4 . . . . . . 
. . . . . . . . f 4 4 4 . . . . f 4 4 4 . . . . . . 
. . . . . . . . f 4 4 4 . . . . f 4 4 4 . . . . . . 
. . . . . . . . f 4 5 4 . . . . f 4 5 4 4 . . . . . 
. . . . . . . . f 4 5 4 . . . . f 4 4 5 4 . . . . . 
. . . . . . . . f 4 5 4 . . . . f 4 4 5 4 . . . . . 
. . . . . . . . . 4 5 4 4 . . . . 4 4 4 4 4 . . . . 
. . . . . . . . . 4 4 4 4 4 . . . . 4 4 4 4 4 . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
`],
            150,
            true
            )
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Artifact, function (sprite, otherSprite) {
    music.baDing.play()
    scene.cameraShake(3, 500)
    info.changeScoreBy(1)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Gem, function (sprite, otherSprite) {
    music.stopAllSounds()
    music.playTone(349, music.beat(BeatFraction.Eighth))
    scene.cameraShake(3, 200)
    if (armor == 1) {
        chaosHealth += -1
    } else {
        game.showLongText("Without her armor, Wonder Woman could not destroy the Shard of Chaos", DialogLayout.Bottom)
        game.over(false)
    }
})
function showStartingSplash () {
    scene.setBackgroundImage(img`
f f f f f f f f f f f f f f f f 8 8 8 8 f 8 f 8 8 8 7 7 7 f f 8 8 f f f f f f f f f f f f f 8 8 8 f f f f f f f f f f f f 8 8 f f f f f f f f f f f f f f f f 6 6 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 8 8 8 f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f f 2 2 2 2 2 2 
f f f f f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 f 8 f 8 8 f 8 8 8 8 8 8 f f f f f 8 8 8 8 f f f f f f f f f f f 8 8 8 f f f f f f f f f f f f f f f f 6 6 6 8 f f f f f f f f f f f f f 8 8 8 8 8 8 f f f f f f f f f f f f f 8 8 8 8 8 f f f f f f f f 7 7 7 7 7 7 8 8 8 8 8 f f f f f f f f f f f 4 4 4 4 4 2 2 2 2 2 
f f f f f f f f f 8 8 8 8 8 8 8 f f f f 7 8 8 8 7 7 7 f 8 8 8 8 8 8 8 8 8 8 8 f f f f f 8 8 8 8 8 f f f f f f f f f 8 8 8 8 8 8 f f f f f f f f f f f 8 8 f f 6 6 6 6 8 8 f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 f f f f f f 8 8 8 8 f f f 8 8 8 8 8 f f f f f f f f 7 8 8 8 8 8 8 8 8 8 8 8 8 8 5 5 5 5 5 5 4 4 4 4 4 4 4 2 f 2 
f f f 8 8 8 8 8 8 8 8 8 f f f f f f f 7 8 8 8 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f 8 8 8 8 8 f f f f f f f f 8 c 8 8 8 8 f f f f f f f f f f f f 8 8 8 f 6 6 6 6 6 8 8 8 8 8 f f f f f f f 8 8 8 8 8 c c c 8 8 8 f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f 7 7 7 7 7 7 7 7 7 5 5 5 5 5 5 5 5 5 4 4 4 4 8 f f f 
8 8 8 8 8 8 8 8 8 f f f f f f f 7 7 7 7 8 8 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f 8 8 8 8 8 f f f f f f f f 8 c c 8 8 8 8 f f f 8 f f f f f f 8 8 8 8 8 f 6 6 6 6 6 8 8 8 8 8 8 8 f f f f f f 8 8 8 8 8 c c c 8 8 8 8 f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f 7 7 7 7 7 7 7 7 7 7 7 5 5 5 5 5 5 5 5 8 8 8 8 8 f f 
f 8 8 8 8 8 8 f f f f f f f 7 7 7 7 7 8 8 8 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f 8 8 8 8 8 8 f f f 8 f 8 f 8 c c c 8 8 8 8 8 f 8 f f f f f 8 8 8 8 8 8 f f 6 9 9 6 6 8 8 8 8 8 8 8 8 8 8 f f f f f 8 8 8 8 c c c 8 8 8 8 8 f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f 7 7 7 7 7 7 7 7 7 7 5 5 5 5 5 5 5 5 4 4 4 f f 
8 8 8 8 8 f f f f f f 7 7 7 7 7 7 7 8 8 8 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 8 8 8 8 8 8 f f f 8 8 8 f 8 c c c c 8 8 8 8 8 8 f f f f 8 8 8 8 8 c 6 f f 8 6 8 9 6 6 6 8 8 8 8 8 8 8 8 8 8 8 f f f f 8 8 8 c c c c 8 8 8 8 8 8 f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f 7 7 7 7 7 7 f f f 5 5 5 5 5 5 4 4 4 
f 8 8 f f f f f f 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 8 8 8 8 8 8 f f 8 8 8 8 f 8 c c c c c 8 8 8 8 f f f f f 8 8 8 8 8 c 6 8 f 8 6 8 8 9 9 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f 8 8 8 c c c c c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f 8 f f f f f 7 7 7 5 5 5 5 5 5 5 5 4 
8 f f f f f 7 7 7 7 7 7 7 f 7 7 8 8 8 8 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 f 8 8 8 8 8 8 f f 8 8 8 8 8 c c c c c c 8 8 8 8 f f f f 8 8 8 8 8 8 c c 6 8 f 8 6 8 9 9 9 9 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f 8 8 8 c c c c c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 8 8 8 f f f f f f f f f f f f 8 8 5 5 5 5 5 5 5 
f f f f f 7 7 7 7 7 f f f 7 7 8 8 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 f f 8 7 8 8 8 8 8 8 8 8 8 8 c c c c c c c 8 8 8 8 f f f 8 8 8 8 8 c c c 6 8 8 8 6 8 9 9 9 9 9 6 6 8 8 6 8 8 8 8 8 8 8 8 8 8 8 8 f f 8 8 8 c c c c c 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 5 5 5 5 f 
f f f 7 7 7 f f f f f f 7 7 8 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 7 8 8 8 8 7 7 7 7 7 7 7 8 8 8 8 8 c c c c c c c 8 8 8 8 f f 8 8 8 8 8 8 8 c c 6 6 8 8 8 8 9 9 8 9 9 9 9 6 6 8 8 8 8 8 8 8 c c 8 8 8 8 8 8 f 8 8 8 c c c c c c 8 8 8 8 8 7 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f 
f 7 7 f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 8 8 8 8 8 7 c c c c c c c c 8 8 8 f f 8 8 8 8 8 8 8 c c 6 6 8 8 8 8 9 9 9 8 9 9 9 9 6 6 8 8 8 8 8 8 8 c c c c 8 8 8 8 8 8 8 8 8 c c c c c c 8 8 8 8 8 8 7 7 7 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 f f f f f 
f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 7 c c c c c c c c 8 8 8 f f 8 8 8 8 c c 8 c c 6 6 6 8 8 8 8 9 9 8 8 8 9 9 9 9 6 6 8 8 8 8 8 8 8 c c c c c 8 8 8 8 8 8 8 8 c c c c c c 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 5 5 5 5 5 5 f f 5 f f f f 
f f f f f f f f f f 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 5 5 5 5 5 5 5 5 5 5 8 8 7 7 7 8 8 8 8 7 7 c c c c c c a c c 8 8 f f 8 8 8 8 c c 8 c c c 6 6 6 8 8 8 9 9 9 8 8 8 9 9 9 9 6 6 8 8 8 8 8 8 8 c c c c c c 8 8 8 8 8 8 8 c c c c c c c 8 8 8 8 8 7 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f 
f f f f f f f f f f 5 5 5 5 5 5 5 8 8 8 8 5 5 5 5 5 5 5 5 5 5 5 5 8 8 7 7 7 7 8 8 8 7 7 7 c c c c c c a c c 8 8 f f 8 8 8 8 c c 8 c c c 6 6 6 6 8 8 9 9 9 9 8 8 8 9 9 9 9 9 6 8 6 8 8 8 8 8 8 c c c c c c c 8 8 8 8 8 8 c c c c c c c 8 8 8 8 8 7 8 8 8 8 8 8 8 8 8 8 5 8 8 8 8 5 5 5 5 5 5 5 5 5 f f f f f 5 5 5 f f f f f 4 4 
f f f f f f f f f 5 5 5 5 8 8 8 8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 8 8 7 7 7 7 7 8 8 8 7 7 7 c c c c c c a a c 8 8 8 8 8 8 8 8 c c 8 8 c a 6 6 6 6 8 8 8 9 9 9 8 8 8 8 8 9 9 9 9 6 6 8 8 8 8 8 8 8 c c c c c c c c c 8 8 8 8 8 c c c c c c c 8 8 8 8 8 7 7 8 8 8 8 8 8 5 5 8 8 8 8 8 8 8 5 5 5 5 5 5 5 5 5 5 5 5 f f f f 4 4 4 4 4 4 
f f f f f f f f 5 5 5 8 8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 8 8 5 7 7 7 7 7 8 8 7 7 7 7 c c c c c c a a c 8 8 8 8 8 8 c 8 c c c 8 c a 6 6 6 6 8 8 8 9 9 9 9 8 8 7 8 8 9 9 9 9 9 6 8 6 8 8 8 8 8 c c c c c c c c c c 8 8 8 8 8 c c c c c c c 8 8 8 8 8 7 7 8 8 8 5 8 8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 8 8 8 5 7 7 7 7 7 8 8 7 7 7 7 c c c c c c a a a 8 8 8 8 8 8 c 8 c c c c a a 6 6 6 6 8 8 8 9 9 9 9 8 8 8 7 8 8 8 9 9 9 9 6 6 8 6 8 8 8 8 8 c c c c c c c c c c c 8 8 8 c c c c a c c c 8 8 8 8 8 7 7 7 8 8 8 8 8 8 5 5 5 5 5 5 5 5 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
f f f f f f 4 4 4 4 4 4 5 5 5 5 5 5 5 5 5 5 5 5 5 8 8 8 8 5 7 7 7 7 7 8 7 7 7 7 c c c c c c c a a a 8 8 8 8 8 8 c 8 c c c c a a a 6 6 6 8 8 8 6 9 9 9 9 8 8 7 7 7 8 8 9 9 9 8 9 6 8 6 6 8 8 8 8 a c c c c c c c c c c c c 8 8 c c c c a c c c c 8 8 8 8 7 7 7 7 8 8 8 8 8 8 5 5 5 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 2 2 2 2 
f f f f f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 8 8 8 8 5 5 7 7 7 7 7 8 7 7 7 7 c c c c c c a a a a 8 8 8 8 8 8 c 8 c c c c a a a 6 6 6 6 8 8 8 9 9 9 9 8 8 8 7 7 7 8 8 8 8 9 8 8 9 6 8 6 8 8 8 8 6 a c c c c c c c c c c c c c c c c a 8 a c c c c 8 8 8 8 8 7 7 7 8 8 8 8 8 8 5 5 4 4 4 4 4 4 4 4 4 4 4 4 2 2 2 2 2 2 2 2 2 2 2 
f f f f f f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 8 8 8 8 8 5 5 7 7 7 7 7 7 7 7 7 7 c c c c c c a a a a 8 8 8 8 8 8 8 8 c c c c a a a 6 6 6 6 8 6 8 6 9 9 9 9 8 8 7 7 7 7 8 8 8 8 9 8 8 8 6 8 8 8 8 8 8 8 6 a a c c c c c c c c c c c c c c a a 8 8 c c c c 8 8 8 8 8 7 7 7 5 8 8 8 8 8 8 5 4 4 4 4 4 4 4 2 2 2 2 2 8 8 2 2 2 2 2 2 2 2 
f f f f f f 2 2 2 2 4 4 4 4 4 4 4 4 8 8 8 8 8 8 5 5 5 7 7 7 7 7 7 7 7 7 7 8 c c c c c a a a a 8 8 8 8 c 8 8 c c c c a a a a 6 6 6 6 8 8 8 6 9 9 9 9 8 8 8 7 7 7 7 8 8 8 8 8 9 8 8 8 6 8 8 8 8 8 8 6 6 a a c c c c c c c c c c c c c c a a 8 8 8 c c c 8 8 8 8 8 7 7 7 5 5 8 8 8 8 8 8 4 4 4 4 4 4 2 2 2 2 2 2 8 8 2 2 2 2 2 f f 
f f f f f f 2 2 2 2 2 2 2 2 2 4 8 8 8 8 8 8 8 5 5 5 7 7 7 7 7 7 7 7 7 7 8 c c c c c a a a a 8 8 8 c c 8 8 8 c c c a a a a 6 6 6 6 6 8 8 6 6 9 9 9 9 8 8 8 7 7 7 7 7 8 8 8 9 8 9 8 8 8 8 8 8 8 8 8 8 6 a a a c c c c c c c c c c c c c a a a 8 a 8 8 8 c 8 8 8 8 8 7 7 7 5 5 8 8 8 8 5 8 8 4 4 4 4 4 2 2 2 2 2 2 8 8 8 2 2 2 f f 
f f f f f f 8 8 8 8 8 2 2 2 8 8 8 8 8 8 8 8 5 5 5 7 7 7 7 7 7 7 7 7 8 8 c c c c c a a a 8 8 8 8 c c 8 8 c c c c a a a a a 6 6 6 6 8 8 6 6 9 9 8 9 9 8 8 7 7 7 7 7 7 8 8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 6 a a a c c c c c c c c c c c c c a a a 8 a 8 8 8 8 8 8 8 8 8 7 7 7 5 5 5 8 8 8 8 8 8 8 4 4 4 4 2 2 2 2 2 8 8 8 8 2 2 f f 
f f f f f f 8 8 8 2 2 2 8 8 8 8 8 8 8 8 5 5 5 5 7 7 7 7 7 7 7 7 7 8 c c c c c c a a a 8 8 8 8 c c 8 8 c c c c a a a a a 6 6 6 6 6 8 8 6 9 9 9 8 9 8 8 8 7 7 7 7 7 7 8 8 8 8 9 9 8 8 8 8 8 8 8 6 8 8 8 6 6 a a a c c c c c c c c c c c c c a a a 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 5 5 5 8 8 8 8 8 8 4 4 4 4 2 2 2 2 2 8 8 8 8 2 2 f 
f f f f f f 8 8 2 2 8 8 8 8 8 8 8 8 8 5 5 5 5 7 7 7 7 7 7 7 7 7 8 c c c c c c a a a 8 8 8 8 c c 8 8 c c c a a a a a a 6 6 6 6 6 8 8 6 6 9 9 8 8 9 8 8 7 7 7 7 7 7 7 7 8 8 8 9 9 9 8 8 8 8 8 6 6 6 6 8 8 6 6 a a a a c c c c c c c c c c c a a a 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 5 5 5 8 8 8 f f 8 8 4 4 4 2 2 2 2 2 8 8 8 8 f f 
f f f f f f 2 2 f f 2 8 8 8 8 8 8 5 5 5 5 5 7 7 7 7 7 7 7 7 7 8 c c c c c c a a a 8 8 8 8 c c 8 8 c c c a a a a a a 6 6 6 6 6 8 8 6 6 9 9 8 8 8 8 8 8 7 7 7 7 7 7 7 7 8 8 8 8 9 9 8 8 8 8 8 8 6 6 6 6 8 6 6 6 a a a a c c c c c c c c c c c a a a 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 5 5 5 5 8 f 8 f f 8 8 4 4 2 2 2 2 8 8 8 f f f 
f f f f f f 8 f f f f 8 8 8 8 8 5 5 5 5 5 7 7 7 7 7 7 7 7 8 8 c c c c c c a a a 8 8 8 c c c c 8 8 c c a a a a a a 6 6 6 6 6 8 8 6 6 6 9 9 8 9 8 8 8 8 7 7 7 7 7 7 7 7 7 8 8 8 9 9 9 8 8 8 8 8 8 6 6 6 6 6 6 6 a a a a a c c c c c c c c c c a a a a 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 5 5 5 5 8 f f f f f 8 8 4 2 2 2 2 8 f f f f 
f f f f f f f f f f 8 8 8 8 5 5 5 5 5 5 7 7 7 7 7 7 7 7 8 c c c c c c c a a a 8 8 8 a c c c c c c c a a a a a a a 6 6 6 6 8 8 6 6 6 9 9 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 8 8 8 8 9 9 8 8 8 8 8 6 6 6 6 6 6 6 6 6 a a a a a c c c c c c c c c c a a a a 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 5 5 5 5 5 8 f f f f 8 8 4 2 2 2 2 f f f f 
f f f f f f f f f 8 8 8 8 5 5 5 5 5 5 7 7 7 7 7 7 7 7 8 c c c c c c c a a a 8 8 8 a c c c c c c a a a a a a a a 6 6 6 6 8 8 6 6 6 9 9 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 8 8 8 9 9 9 9 8 8 8 6 6 6 6 6 6 6 6 6 6 a a a a a c c c c c c c c c a a a a a a 8 8 8 8 8 8 c 8 8 8 8 8 7 7 7 5 5 5 5 5 5 8 f f f f 8 8 2 2 2 8 f f f 
f f f f f f f f 8 8 8 4 5 5 5 5 5 5 7 7 7 7 7 7 7 7 8 c c c c c c c a a a 8 8 8 a c c c c c c a a a a a a a a 6 6 6 8 8 8 6 6 6 6 9 9 8 8 9 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 9 9 9 8 8 8 6 6 6 8 6 6 6 6 6 6 6 a a a a a c c c c c c c c c a a a a a a 8 8 8 8 8 8 c 8 8 8 8 8 7 7 7 5 5 5 5 5 5 8 f f f f f 8 8 2 2 f f f 
f f f f f f 8 8 8 8 4 5 5 5 5 5 5 7 7 7 7 7 7 7 8 8 c c c c c c a a a a 8 8 8 a c c c c c c a a a a a a a a 6 6 6 8 8 8 6 6 6 6 9 9 8 9 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 9 9 9 9 9 8 8 6 6 6 8 6 6 6 6 6 6 6 a a a a a a c c c c c c c a a a a a a a 8 8 8 8 8 8 c 7 8 8 8 8 7 7 7 5 5 5 5 5 5 5 8 f f f f 8 8 8 2 f f 
f f f f f 8 8 8 4 4 5 5 5 5 5 5 7 7 7 7 7 7 7 8 8 c c c c c c a a a a 8 8 a a a c c c c c a a a a a a a a 6 6 6 8 8 8 6 6 6 6 6 9 9 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 9 9 9 9 9 9 8 6 6 6 6 8 6 6 6 6 6 6 6 a a a a a a c c c c c c c a a a a a a a 8 8 8 8 8 8 c 7 8 8 8 8 7 7 7 5 5 5 5 5 5 5 5 8 f f f f f f f f 
f f f f f 8 8 4 4 5 5 5 5 5 5 7 7 7 7 7 7 7 8 8 c c c c c c a a a a 8 a a a a c c c c c a a a a a a a a a 6 6 8 8 6 6 6 6 6 6 9 9 8 9 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 9 9 9 9 9 8 6 6 6 6 6 8 6 6 6 6 6 6 a a a a a a a c c c c c c c a a a a a a a 8 8 8 8 8 8 c c 7 8 8 8 7 7 7 5 5 5 5 5 5 5 5 8 f f f f f f f 
f f f f f 8 4 4 5 5 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 6 6 6 9 9 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 9 9 9 9 9 8 8 6 6 6 6 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 f f f f f f f 
f f f 8 f 4 4 5 5 5 5 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 6 9 9 8 9 8 8 8 8 8 7 7 7 7 7 7 7 7 7 1 1 7 7 7 7 7 8 8 8 8 9 9 9 9 9 8 8 8 6 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 4 8 f f f f 
f f f f 4 4 5 5 5 5 5 5 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 1 1 1 1 7 7 7 7 8 8 8 8 9 9 9 9 9 9 8 8 8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 5 5 5 5 5 5 5 4 4 f f f 
f f f 4 4 4 5 5 5 5 5 7 7 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 1 1 1 1 7 7 7 7 7 8 8 8 8 9 9 9 9 9 8 8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 8 8 5 5 5 5 5 5 5 4 4 4 f 
f f f 4 4 5 5 5 f 5 7 7 7 7 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 1 1 1 1 1 1 7 7 7 7 8 8 8 8 9 9 9 9 9 9 8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 7 7 8 8 8 8 5 5 5 5 5 5 4 4 4 
f f f 8 5 5 f f f 7 7 7 7 7 7 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 1 1 1 1 1 1 7 7 7 7 7 8 8 8 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 7 7 7 7 8 8 8 8 f f f 5 5 5 4 4 
f 8 f 5 f f f f 7 7 7 7 7 8 f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 9 9 8 8 8 7 7 7 7 7 7 7 7 1 1 1 1 1 1 1 1 7 7 7 7 8 8 8 8 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c 7 7 7 7 7 8 8 8 8 f f f f 5 5 4 
f f f f 8 f 5 7 7 7 7 7 8 f f c c f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 8 8 8 8 7 7 7 7 7 7 7 7 1 1 1 1 1 1 1 1 7 7 7 7 7 8 8 8 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c c c c 7 7 7 7 8 8 8 8 f f f f f 5 
f f f f f 5 7 7 7 7 7 8 f f c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 9 8 8 8 7 7 7 7 7 7 7 7 1 1 1 1 1 1 1 1 1 1 7 7 7 7 8 8 8 8 9 9 9 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 c c c c 7 7 7 7 8 8 8 8 f f f f f 
f f f f f 7 7 7 7 7 8 f f f c c c c c a 8 a a a a a a a a a a a a 3 3 3 a a a a a a a a a 6 6 6 8 8 8 8 8 8 f 1 1 1 1 1 1 1 1 1 1 8 8 8 7 7 7 7 7 7 7 7 1 1 1 1 1 1 1 1 1 1 7 7 7 7 8 8 8 8 9 9 9 1 1 1 1 1 1 1 1 1 1 f 8 8 8 6 6 6 6 6 6 a a a a a a a a a a 3 a a a a a a a a a a a 8 8 8 8 c c c c c 7 7 7 7 8 8 8 8 8 f f f 
f f f f 7 7 7 7 8 8 f f f c c c c c a 8 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 6 6 6 f 1 1 1 1 1 1 1 1 1 8 8 7 7 7 7 7 7 7 7 1 1 1 1 1 1 1 1 1 1 1 1 7 7 7 7 8 8 8 8 9 1 1 1 1 1 1 1 1 1 1 f 6 8 8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 8 8 8 c c c c c 7 7 7 7 7 8 8 8 8 f f 
f f f f 7 7 7 8 8 f f f c c c c c a 8 8 8 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 6 6 6 f 1 1 1 1 1 1 1 1 1 8 7 7 7 7 7 7 7 1 1 1 1 1 1 1 1 1 1 1 1 1 1 7 7 7 8 8 8 8 9 1 1 1 1 1 1 1 1 1 f 6 6 6 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 a a 8 8 8 8 c c c c c 7 7 7 7 7 8 8 8 8 f 
f f f f 7 7 8 8 f f f c c c c c a 8 8 8 8 8 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 6 6 f 1 1 1 1 1 1 1 1 1 8 7 7 7 7 7 7 7 1 1 1 1 1 1 1 1 1 1 1 1 1 1 7 7 7 7 8 8 8 1 1 1 1 1 1 1 1 1 1 f 6 6 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 a a a a 8 8 8 8 c c c c c 7 7 7 7 7 8 8 8 8 
f f f 7 7 8 8 f f f c c c c c a 8 8 8 8 8 8 8 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 f 1 1 1 1 1 1 1 1 1 7 7 7 7 7 7 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 7 7 7 8 8 8 1 1 1 1 1 1 1 1 1 f 6 6 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 a a a a a a 8 f 8 8 c c c c c 7 7 7 7 7 8 8 8 
f f 7 8 8 8 f c f c c c c c a 8 8 8 8 8 8 8 8 a f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 f 1 1 1 1 1 1 1 1 1 7 7 7 7 7 7 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 7 7 7 7 8 1 1 1 1 1 1 1 1 1 1 f 6 6 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 a a a a a a a a f 8 8 8 c c c c c 7 7 7 7 7 8 8 
7 7 8 8 8 8 c c c c c c c a 8 8 8 8 8 8 8 8 a a a f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 f 1 1 1 1 1 1 1 1 1 7 7 7 7 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 7 7 7 8 1 1 1 1 1 1 1 1 1 f 9 6 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 a a a a a a a a a a f f 8 8 c c c c c 7 7 7 7 7 8 
7 8 8 8 8 c c c c c c c a a 8 8 8 a 8 8 8 a a a 3 3 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 f 1 1 1 1 1 1 1 1 1 7 7 7 7 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 7 7 7 8 1 1 1 1 1 1 1 1 1 f 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 3 3 a a a a a a a a a a f f f 8 c c c c c c 7 7 7 7 
8 8 8 8 c c c c c c c a a 8 8 a a 8 8 a a a a 3 3 3 3 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 f 1 1 1 1 1 1 1 1 1 7 7 1 1 1 1 1 1 1 1 1 f f 1 1 1 1 1 1 1 1 1 7 7 1 1 1 1 1 1 1 1 1 f 8 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 3 3 3 3 a a a a a a a a a a f f f 8 c c c c c c 7 7 7 
8 8 8 c c c c c c c a a a 8 a a 8 8 a a a a 3 3 3 3 3 3 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 f 1 1 1 1 1 1 1 1 1 7 7 1 1 1 1 1 1 1 1 1 f f 1 1 1 1 1 1 1 1 1 7 7 1 1 1 1 1 1 1 1 1 f 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f a 3 3 3 3 a a a a a a a a a a 8 f f f f c c c c c 7 7 
8 8 c c c c c c c a a a 8 a a a a a a a 3 3 3 3 3 3 3 a a a a a f f f a a 6 6 6 6 8 8 8 8 6 8 8 8 6 6 9 9 9 9 9 9 9 9 9 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 7 7 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 8 8 8 8 8 8 8 6 6 6 6 6 8 8 8 8 8 8 6 6 6 6 6 a a a a a a a a a a 3 3 3 3 3 a a a a a a a a a 8 f f f f c c c c c 7 
8 c c c c c c a a a a 8 a a a a a a a 3 3 3 3 3 3 3 a a a f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 7 7 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 9 8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 a a a a a a 3 3 3 3 3 a a a a a a a a a 8 f f f f c f c c c 
c c c c c c a a a a 8 a a a a a a a 3 3 3 3 3 3 3 3 a a a a f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 8 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 7 1 1 7 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 a a a a a a a 3 3 3 3 3 3 a a a a a a a a a 8 f f f f f f c c 
c c c c c a a a a a a a a a a a 3 3 3 3 3 3 3 3 3 a a a a f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 8 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 7 1 1 7 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 a a a a a a a a a 3 3 3 3 3 3 a a a a a a a a a 8 f f f f f f f 
c c c c a a a a a a a a a a a 3 3 3 3 3 3 3 3 3 a a a a a f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 8 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 7 1 1 1 1 7 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 6 a a a a a a a a a a 3 3 3 3 3 3 a a a a a a a a a 8 f f f f f f 
c c c a a a a a a a a a a a 3 3 3 3 3 3 3 3 3 a a a a a f f f a a f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 7 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 7 1 1 1 1 7 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 8 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 6 6 6 a a a a a a a a a a 3 3 3 3 3 3 a a a a a a a a a 8 8 f f f f 
c c a a a a a a a a a a a 3 3 3 3 3 3 3 3 3 a a a a a a f f a a 6 6 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 7 7 f 1 1 1 1 1 1 1 1 1 1 1 1 f 7 1 1 1 1 1 1 7 f 1 1 1 1 1 1 1 1 1 1 1 1 f 8 8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 6 6 6 6 6 a a a a a a a a a a 3 3 3 3 3 3 a a a a a a a a a 8 8 f f f 
c a a a a a a a a a a 3 3 3 3 3 3 3 3 3 3 a a a a a a a f a a 6 6 6 6 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 7 7 f 1 1 1 1 1 1 1 1 1 1 1 f 7 7 1 1 1 1 1 1 7 7 f 1 1 1 1 1 1 1 1 1 1 1 f 8 8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 8 6 6 6 6 a a a a a a a a a a 3 3 3 3 3 3 3 3 a a a a a a a a 8 f f f 
a a a a a a a a a a 3 3 3 3 8 3 3 3 3 3 a a a 8 a a f f a a 6 6 6 6 6 6 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 7 7 f 1 1 1 1 1 1 1 1 1 1 f 7 1 1 1 1 1 1 1 1 7 f 1 1 1 1 1 1 1 1 1 1 f 8 8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 8 8 8 8 6 6 6 6 a a a a a a a a a a 3 3 3 3 3 3 3 3 a a a a a a a a f f f 
a a a a a a a a a 3 3 3 3 8 8 3 3 3 3 a a a 8 8 a a f a a a 6 6 6 6 6 6 6 f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 7 8 f 1 1 1 1 1 1 1 1 1 f 7 1 1 1 1 1 1 1 1 1 1 7 f 1 1 1 1 1 1 1 1 1 f 7 8 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f 8 8 8 8 8 6 6 6 6 a a a a a a a a a a 3 3 3 3 8 3 3 3 a a a a a a a f f f 
a a a a a a a 3 3 3 3 3 8 8 3 3 3 3 3 a a 8 8 a a a a a a 6 6 6 6 6 6 6 8 8 8 8 6 6 6 6 6 6 9 9 8 8 8 9 f 1 1 1 1 1 1 1 1 1 1 8 8 f 1 1 1 1 1 1 1 1 f 7 1 1 1 1 1 1 1 1 1 1 7 f 1 1 1 1 1 1 1 1 f 7 7 1 1 1 1 1 1 1 1 1 f 9 9 9 9 6 6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 6 6 6 6 a a a a a a a a a a 3 3 3 3 8 3 3 3 a f a a a a f f f 
a a a a a a 3 3 3 3 3 8 3 3 3 3 3 3 a a 8 8 a a a a a a 6 6 6 6 6 6 6 8 8 8 8 8 8 6 6 6 6 9 9 9 8 8 8 9 f 1 1 1 1 1 1 1 1 1 1 8 7 f 1 1 1 1 1 1 1 f 7 1 1 1 1 1 1 1 1 1 1 1 1 7 f 1 1 1 1 1 1 1 f 7 7 1 1 1 1 1 1 1 1 1 f 9 9 9 9 6 6 6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 6 6 6 6 a a a a a a a a a a 3 3 3 8 3 3 3 f f f f a a f f f 
a a a a a 3 3 3 3 8 8 3 3 3 3 3 3 a a 8 8 8 a a a a a 6 6 6 6 6 6 6 8 8 8 8 8 8 8 6 6 6 6 9 9 8 8 8 9 9 9 f 1 1 1 1 1 1 1 1 1 1 7 7 f 1 1 1 1 1 1 f 7 1 1 1 1 1 1 1 1 1 1 1 1 7 f 1 1 1 1 1 1 f 7 7 1 1 1 1 1 1 1 1 1 f 9 9 9 9 9 9 6 6 6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 6 6 6 a a a a a a a a a a 3 3 3 3 8 3 3 3 f f a f a a f f 
a a a 3 3 3 8 3 8 8 3 3 3 3 3 3 a a a 8 8 a a a a a 6 6 6 6 6 6 6 8 8 8 8 8 8 8 6 6 6 6 9 9 9 8 8 8 9 9 9 f 1 1 1 1 1 1 1 1 1 1 7 7 f 1 1 1 1 1 f 8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 7 f 1 1 1 1 1 f 7 7 1 1 1 1 1 1 1 1 1 f 9 9 9 9 9 9 9 6 6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 6 6 6 a a a a a 3 a a a a 3 3 3 3 8 3 3 3 f f f f a f f 
a a 3 3 3 3 8 8 8 3 3 3 3 3 3 a a a 8 8 a a a a a a 6 6 6 6 6 6 8 8 8 8 8 8 6 8 6 6 6 9 9 9 8 8 8 9 9 9 9 9 f 1 1 1 1 1 1 1 1 1 1 7 7 f 1 1 1 f 8 8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 7 f 1 1 1 1 f 7 7 1 1 1 1 1 1 1 1 1 f 9 9 9 9 9 9 9 9 6 6 6 6 6 6 6 6 8 8 8 8 8 8 6 8 8 8 6 6 6 a a a a a 3 a 3 a a 3 3 3 8 3 3 3 3 3 f f f f f 
3 3 3 3 8 8 8 8 3 3 3 3 3 3 a a a 8 8 8 a a a a a 6 6 6 6 6 6 8 8 8 8 8 8 6 8 6 6 6 6 9 9 9 8 8 8 9 9 9 9 8 f 1 1 1 1 1 1 1 1 1 1 7 7 f f 1 1 f 8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 7 f 1 1 f 7 7 7 1 1 1 1 1 1 1 1 1 f 9 9 9 9 9 9 9 9 9 6 6 6 6 6 6 6 6 8 8 8 8 8 6 6 8 8 8 6 6 6 a a a a a 3 3 3 a a 3 3 3 8 3 3 3 3 3 3 f f f 
3 3 3 8 8 8 8 3 3 3 3 3 3 a a a 8 8 8 a a a a a 6 6 6 6 6 6 8 8 8 8 8 8 8 8 6 6 6 6 9 9 9 8 8 8 8 9 9 9 9 8 8 f 1 1 1 1 1 1 1 1 1 1 7 7 f 1 1 f 8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 7 f 1 1 f 7 7 1 1 1 1 1 1 1 1 1 f 9 9 9 9 9 9 9 9 9 9 6 6 6 6 6 6 6 6 8 8 8 8 8 8 6 6 6 8 8 6 6 6 a a a a 3 3 3 3 a a 3 3 3 8 3 3 3 3 3 3 f f 
3 3 8 8 8 8 3 3 3 3 3 3 a a a a 8 8 a a a a a 6 6 6 6 6 6 6 8 8 8 8 8 8 6 8 6 6 6 6 9 9 8 8 8 8 9 9 9 9 8 8 8 8 f 1 1 1 1 1 1 1 1 1 7 7 7 f f 8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 7 f f 7 7 7 1 1 1 1 1 1 1 1 1 f 9 9 9 9 9 9 9 9 9 9 9 6 6 6 6 6 6 6 6 8 8 8 8 8 6 6 6 6 8 6 6 6 6 a a a a 3 3 3 3 3 3 3 3 3 8 3 3 3 3 3 f f 
3 3 8 8 8 8 3 3 3 3 3 3 a a 3 3 8 f a a a a 6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 6 6 6 6 9 9 9 8 8 8 8 9 9 9 9 8 8 8 8 f 1 1 1 1 1 1 1 1 1 1 7 7 7 7 8 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 7 7 7 7 7 1 1 1 1 1 1 1 1 1 f 8 8 9 9 9 9 9 9 9 9 9 9 6 6 6 6 6 6 6 6 6 8 8 8 8 8 6 6 6 6 8 6 6 6 a a a a a 3 3 3 3 3 3 3 3 8 3 3 3 3 3 3 f 
8 8 8 8 8 3 3 3 3 3 3 a 3 3 3 8 8 f a a a a 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 6 6 6 9 9 9 8 8 8 8 9 9 9 9 8 8 8 8 8 8 f 1 1 1 1 1 1 1 1 1 7 7 7 8 8 1 1 1 1 1 1 1 1 f f 1 1 1 1 1 1 1 1 1 7 7 7 7 1 1 1 1 1 1 1 1 1 f 8 8 9 9 9 9 9 9 9 9 9 9 9 6 6 6 6 6 6 6 6 8 8 8 8 8 6 6 6 6 6 8 6 6 6 a a a a a 3 3 3 3 3 3 3 8 8 3 3 3 3 3 3 
8 8 8 8 8 3 3 3 3 3 3 3 3 3 8 8 f a a a a 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 6 6 6 6 9 9 9 8 8 8 8 9 9 9 8 8 8 8 8 7 8 f 1 1 1 1 1 1 1 1 1 1 7 7 7 1 1 1 1 1 1 1 1 1 f f 1 1 1 1 1 1 1 1 1 7 7 7 1 1 1 1 1 1 1 1 1 f 8 8 8 9 9 9 9 9 9 9 9 9 9 9 6 6 6 6 6 6 6 6 6 8 8 8 8 8 6 6 6 6 6 8 8 6 6 a a a a 3 3 3 3 3 3 3 3 8 8 8 3 3 3 3 
8 8 8 8 3 3 3 3 3 3 3 3 3 8 a f a a a a 6 6 6 6 6 8 8 8 8 8 8 8 6 6 8 8 6 6 6 9 9 9 8 8 8 8 9 9 9 9 8 8 8 8 8 7 8 8 f 1 1 1 1 1 1 1 1 1 7 7 1 1 1 1 1 1 1 1 1 f 8 8 f 1 1 1 1 1 1 1 1 1 7 7 1 1 1 1 1 1 1 1 1 f 8 8 8 8 9 9 9 9 8 9 9 9 9 9 9 6 6 6 6 6 6 6 6 8 8 8 8 8 6 6 6 6 6 6 8 8 6 6 a a a a 3 3 3 3 3 3 f 8 8 8 8 3 3 3 
8 8 8 3 3 3 3 3 3 3 3 3 3 8 f a a a a 6 6 6 6 6 8 8 8 8 8 8 8 8 6 8 8 6 6 6 6 9 9 9 8 8 8 8 9 9 9 8 8 8 8 8 7 8 8 8 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 8 8 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 7 8 8 8 8 9 9 9 9 8 9 9 9 9 9 9 6 6 6 6 6 6 6 6 6 8 8 8 8 8 6 6 6 6 6 6 8 8 6 6 a a a a 3 3 3 3 3 f 3 8 8 3 3 3 3 
8 8 8 3 3 3 8 3 3 3 3 8 8 f f a a a 6 6 6 6 6 8 8 8 8 8 8 8 6 6 6 8 6 6 6 6 9 9 9 8 8 8 8 9 9 9 8 9 8 8 8 8 7 8 8 8 7 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 7 8 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 7 8 8 8 8 8 9 9 9 8 9 9 9 9 9 9 9 6 6 6 6 6 6 6 6 6 8 8 8 8 6 6 6 6 6 6 6 6 6 6 a a a a 3 3 3 3 3 3 f 8 8 8 3 3 8 
8 8 3 3 3 8 3 3 3 3 8 8 f f a a a a 6 6 6 6 8 8 8 8 8 8 8 6 8 6 8 8 6 6 6 6 9 9 9 8 8 8 8 9 9 8 8 8 8 8 8 8 7 8 8 7 7 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 7 7 7 8 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 7 7 7 8 8 8 8 9 9 9 8 8 9 9 9 9 9 9 9 6 6 6 6 6 6 6 6 8 8 8 8 8 6 6 6 6 6 6 6 6 6 6 a a a a 3 3 3 3 3 f 3 8 8 8 3 8 
8 3 3 3 3 8 3 3 3 8 8 8 f a a a a 6 6 6 6 8 8 8 8 8 8 8 8 6 6 8 8 6 6 6 6 9 9 9 8 8 8 8 9 9 9 8 8 8 8 8 8 7 7 8 8 7 7 5 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 7 7 7 7 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 7 7 7 8 8 8 8 8 9 9 8 8 9 9 9 9 9 9 9 6 6 6 6 6 6 6 6 6 8 8 8 8 6 6 6 6 6 6 6 6 6 6 6 a a a a 3 3 3 3 3 f 8 8 8 3 3 
3 3 3 8 8 3 3 3 8 8 8 8 f a a a 6 6 6 6 8 8 8 8 8 8 8 8 8 6 8 8 8 6 6 6 9 9 9 9 8 8 8 8 9 9 8 8 8 8 8 8 8 7 8 8 7 7 7 5 5 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 7 7 7 7 7 8 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 5 7 7 7 7 8 8 8 8 9 9 8 8 8 9 9 9 9 9 9 9 6 6 6 6 6 6 6 6 6 8 8 8 8 6 6 6 6 6 6 6 6 6 6 6 a a a a 3 3 3 3 f 8 8 8 8 3 
3 3 8 8 8 3 3 3 8 8 8 f a a a 6 6 6 6 8 8 8 8 8 8 8 8 8 6 8 8 8 6 6 6 6 9 9 9 8 8 8 8 9 9 8 8 8 8 8 8 8 7 7 8 8 7 7 7 5 5 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 7 7 8 7 7 7 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 5 5 7 7 7 7 8 8 8 8 8 9 8 8 8 9 9 9 9 9 9 9 6 6 6 6 6 6 6 6 6 8 8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 a a a 3 3 3 3 3 f 8 8 8 8 
3 8 8 3 8 3 3 8 8 3 8 f a a 6 6 6 6 6 8 8 8 8 8 8 8 8 6 6 8 8 8 6 6 6 9 9 9 8 8 8 8 8 9 8 8 8 8 8 8 8 8 7 7 8 7 7 7 5 5 5 5 f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 7 7 7 8 7 7 7 8 f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 5 5 7 7 7 7 7 8 8 8 8 9 8 8 8 8 9 9 9 9 9 9 9 6 6 6 6 6 6 6 6 6 8 8 8 8 6 6 6 6 6 6 6 6 6 6 6 a a a a 3 3 3 3 f 8 8 8 8 
8 8 8 8 3 3 8 8 3 f f a a a 6 6 6 6 8 8 8 8 8 8 8 8 6 6 8 8 8 6 6 6 6 9 9 9 8 8 8 8 8 9 8 8 8 8 8 8 8 7 7 8 8 7 7 7 5 5 5 5 f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 7 7 8 8 8 7 7 7 f 1 1 1 1 1 1 1 1 1 1 1 1 f 5 5 5 5 7 7 7 7 8 8 8 8 9 8 8 8 8 9 9 9 9 9 9 9 6 6 6 6 6 6 6 6 6 6 8 8 8 8 6 6 6 6 6 6 6 6 6 6 6 a a a a 3 3 3 f 3 8 8 8 
8 8 8 8 8 3 8 8 8 f a a a 6 6 6 6 8 8 8 8 8 8 8 8 8 6 8 8 8 8 6 6 6 9 9 9 8 8 8 8 8 9 8 8 8 8 8 8 8 8 7 7 8 7 7 7 7 5 5 5 5 5 f 1 1 1 1 1 1 1 1 1 1 1 f 7 7 7 8 8 8 7 7 7 7 f 1 1 1 1 1 1 1 1 1 1 1 f 5 5 5 5 7 7 7 7 8 8 8 8 8 8 8 8 8 9 9 9 9 9 9 9 9 6 6 6 6 6 6 6 6 6 8 8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 a a a a 3 3 3 f 8 8 8 
8 8 8 8 8 8 8 8 f a a a 6 6 6 6 6 8 8 8 8 8 8 8 8 6 6 8 8 8 6 6 6 9 9 9 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 8 7 7 7 7 5 5 5 5 5 f 1 1 1 1 1 1 1 1 1 1 1 f 7 7 7 8 8 8 7 7 7 7 f 1 1 1 1 1 1 1 1 1 1 f 7 5 5 5 5 7 7 7 7 7 8 8 8 8 8 8 8 8 8 9 9 9 9 9 9 9 f 6 6 6 6 6 6 6 6 6 8 8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 a a a 3 3 3 f 3 8 8 
8 8 8 8 8 8 f f a a a 6 6 6 6 6 8 8 8 8 8 8 8 8 6 6 8 8 8 6 6 6 6 9 9 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 8 8 7 7 7 5 5 5 5 5 5 5 f 1 1 1 1 1 1 1 1 1 1 f 7 7 8 8 8 8 8 7 7 7 f 1 1 1 1 1 1 1 1 1 1 f 7 5 5 5 5 5 7 7 7 7 8 8 8 8 8 8 8 8 8 9 9 9 9 9 9 9 f f 6 6 6 6 6 6 6 6 8 8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 a a a 3 3 3 f 8 8 
8 8 8 8 8 f a a a a 6 6 6 6 8 8 8 8 8 8 8 8 8 6 6 8 8 8 8 6 6 6 9 9 9 9 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 8 7 7 7 7 5 5 5 5 5 5 5 7 f 1 1 1 1 1 1 1 1 f 7 8 7 8 8 8 8 8 7 7 7 7 f 1 1 1 1 1 1 1 1 f 7 7 5 5 5 5 5 7 7 7 7 7 8 8 8 8 8 8 8 8 8 9 9 9 9 9 9 9 f 6 6 6 6 6 6 6 6 6 8 8 8 8 6 6 6 6 6 6 8 6 6 6 6 6 6 a a a 3 3 f 3 8 
8 8 8 8 f f a a a a 6 6 6 6 8 8 8 8 8 8 8 8 8 6 8 8 8 8 6 6 6 6 9 9 9 f 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 5 5 5 5 5 5 5 7 f 1 1 1 1 1 1 1 1 f 7 8 8 8 8 8 8 8 8 7 7 7 f 1 1 1 1 1 1 1 1 f 7 5 5 5 5 5 5 7 7 7 7 7 8 8 8 8 8 8 8 8 8 9 9 9 9 9 9 9 f f 6 6 6 6 6 6 6 6 6 8 8 8 6 6 6 6 6 6 6 8 6 6 6 6 6 a a a 3 3 3 f 3 
8 8 f f f a a a a 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 6 6 9 9 9 f f 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 5 5 5 5 5 5 5 5 7 7 f 1 1 1 1 1 1 f 8 8 8 8 8 8 5 8 8 8 7 7 7 7 f 1 1 1 1 1 1 f 7 8 5 5 5 5 5 5 7 7 7 7 7 7 8 8 8 8 8 8 8 8 9 9 9 9 9 9 9 9 f f 6 6 6 6 6 6 6 6 8 8 8 8 6 6 6 6 6 6 8 8 6 6 6 6 6 a a a 3 3 f 3 
8 f f f f a a a 6 6 6 8 8 f 8 8 8 6 8 8 8 8 8 8 8 8 8 6 6 6 6 9 9 f f f 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 5 5 5 5 5 5 5 5 7 7 f 1 1 1 1 1 1 f 8 8 8 8 8 8 5 8 8 8 7 7 7 7 f 1 1 1 1 1 1 f 7 8 5 5 5 5 5 5 5 7 7 7 7 7 8 8 8 8 8 8 8 8 8 9 9 9 9 9 9 9 9 f f 6 6 6 6 6 6 6 6 8 8 8 6 6 6 6 6 6 6 8 6 6 6 6 6 6 a a a 3 3 f 
f f f f a a a 6 6 6 8 8 f 8 8 8 6 8 8 8 8 f 8 8 8 8 8 6 6 6 9 9 9 f f 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 5 5 5 5 5 5 5 5 7 7 7 f 1 1 1 1 f 8 8 8 8 8 8 5 5 5 8 8 7 7 7 7 7 f 1 1 1 1 f 7 7 8 8 5 5 5 5 5 5 7 7 7 7 7 8 8 8 8 8 8 8 8 8 9 9 9 9 9 9 9 9 f f f 6 6 6 6 6 6 6 6 8 8 8 6 6 6 6 6 f 8 8 f 6 6 6 6 6 a a a 3 3 
f f f a a a 6 6 6 8 8 8 f 8 6 6 6 8 8 8 f 8 8 8 8 8 6 6 6 9 9 9 f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 5 5 5 5 5 5 5 5 7 7 7 f 1 1 1 1 f 8 8 8 8 8 8 5 5 5 5 8 8 7 7 7 7 f 1 1 1 1 f 7 7 8 8 5 5 5 5 5 5 7 7 7 7 7 7 8 8 8 8 8 8 8 8 9 9 9 9 9 9 9 9 9 f f f 6 6 6 6 6 6 6 8 8 8 6 6 6 6 6 f 6 8 8 f 6 6 6 6 6 a a 3 3 
8 f f a a a 6 6 8 8 8 f 8 6 6 6 8 8 f f f 8 8 8 8 6 6 6 6 9 9 f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 8 7 7 7 5 5 5 5 5 4 5 5 5 7 7 7 7 f 1 1 f 8 8 8 8 8 8 5 5 5 5 5 8 8 7 7 7 7 7 f 1 1 f 7 7 8 8 8 5 5 4 5 5 5 7 7 7 7 7 7 8 8 8 8 8 8 8 8 9 9 9 9 9 9 9 9 9 f f f f 6 6 6 6 6 6 6 8 8 8 6 6 6 f f f 8 8 f f 6 6 6 6 a a a 3 
f f a a a 6 6 8 8 8 f 8 6 6 6 6 f f f f 8 8 8 8 8 6 6 6 9 9 f f f 8 8 8 8 9 8 8 8 8 8 8 8 8 8 7 7 7 8 7 7 7 7 5 5 5 5 4 4 5 5 5 7 7 8 7 7 f f 7 8 8 8 8 8 8 5 5 5 5 5 5 8 7 7 7 7 7 7 f f 7 7 7 8 8 8 5 4 4 5 5 5 5 7 7 7 7 7 7 8 8 8 8 8 8 8 8 9 9 9 9 9 9 9 9 9 f f f 6 6 6 6 6 6 6 6 8 8 6 6 6 f f f 6 8 8 f f 6 6 6 6 a a a 
f f a a 6 6 6 8 8 f 8 8 6 6 6 f f f f 8 8 8 8 8 6 6 6 6 9 9 f f f 8 8 8 8 9 8 8 8 8 8 8 8 8 7 7 7 7 8 7 7 7 7 5 5 5 5 4 4 5 5 5 5 7 8 7 7 7 7 7 8 8 8 8 8 5 5 5 5 5 5 5 5 8 7 7 7 7 7 8 8 7 7 7 8 8 8 5 4 4 5 5 5 5 7 7 7 7 7 7 8 8 8 8 8 8 8 8 9 9 9 f 9 9 9 9 9 f f f f 6 6 6 6 6 6 6 8 8 8 6 6 f f f 6 6 8 8 f 6 6 6 6 6 a a 
f a a 6 6 6 6 8 8 f 8 6 6 6 f f f f 8 8 8 8 8 8 6 6 6 9 9 f f f 8 8 8 8 9 8 8 8 8 8 8 8 8 8 7 7 7 8 7 7 7 7 5 5 5 5 5 4 4 5 5 5 5 7 8 7 7 7 7 7 8 8 8 8 5 5 5 5 4 5 5 5 5 7 7 7 7 7 7 8 8 7 7 7 8 8 8 5 4 4 5 5 5 5 7 7 7 7 7 7 7 8 8 8 8 8 8 8 9 9 9 9 f 9 9 9 9 9 f f f f 6 6 6 6 6 6 6 8 8 6 6 f f f 6 6 8 8 f f 6 6 6 6 6 a 
a a 6 6 6 8 8 8 f 8 6 6 6 f f f f 8 8 8 8 8 8 6 6 6 9 9 9 f f 8 8 8 8 9 9 8 8 8 8 8 8 8 8 8 7 7 7 8 7 7 7 7 5 5 5 5 4 4 4 5 5 5 5 7 8 8 7 7 7 7 8 8 8 8 5 5 5 4 4 5 5 5 5 5 7 7 7 7 7 8 8 7 7 8 8 8 5 5 4 4 4 5 5 5 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 9 9 9 f 9 9 9 9 9 9 f f f f f 6 6 6 6 6 6 8 8 6 f f f f f f 8 8 f f 6 6 6 f f 
a a 6 6 6 8 8 f 8 8 6 6 f f f f f 8 8 8 8 8 8 6 6 f 9 9 f f f 8 8 8 9 9 9 8 8 8 8 8 8 8 8 7 7 7 7 8 7 7 7 7 5 5 5 5 4 4 4 5 5 5 5 7 8 8 7 7 7 8 8 8 8 5 5 5 5 4 4 4 5 5 5 5 7 7 7 7 7 8 8 7 7 8 8 5 5 4 4 4 4 5 5 5 5 7 7 7 7 7 7 8 8 8 8 8 8 8 8 9 9 9 f f 9 9 9 9 9 f f f f f f f f 6 6 6 8 8 f f f f f f f f 8 8 f f 6 f f f 
a 6 6 6 8 8 f 8 8 6 6 6 f f f f 8 8 8 8 8 8 6 6 f f 9 9 f f 8 8 8 8 9 9 9 8 8 8 8 8 8 8 8 7 7 7 8 8 7 7 7 5 5 5 5 5 4 4 4 4 5 5 5 7 8 8 7 7 7 8 8 8 8 5 5 5 4 4 4 4 4 5 5 5 5 7 7 7 7 8 8 7 7 8 8 5 5 4 4 4 4 5 5 5 5 7 7 7 7 7 7 7 8 8 8 8 8 8 8 9 9 9 9 f f 9 9 9 9 9 f f f f f f f f f f 6 8 f f f f f f f f 8 8 f f f f f f 
6 6 6 8 8 f 8 8 6 6 6 f f f f 8 8 8 8 8 8 6 6 f f 9 9 9 f 8 8 8 8 9 9 9 8 8 8 8 8 8 8 8 7 7 7 7 8 7 7 7 7 5 5 5 5 4 4 4 4 4 5 5 5 7 7 8 8 7 7 8 8 8 5 5 5 4 4 4 4 4 4 5 5 5 5 7 7 7 8 8 8 7 7 8 8 5 5 4 4 4 4 5 5 5 5 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 9 9 9 f f 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f 8 8 8 f f f f f 
6 6 8 8 8 f 8 8 6 6 6 f f f 8 8 8 8 8 8 8 6 f 6 f 9 9 f f 8 8 8 9 9 9 9 8 8 8 8 8 8 8 8 7 7 7 8 8 7 7 7 7 5 5 5 5 4 4 4 f f 5 5 5 7 7 8 8 7 7 8 8 8 5 5 5 4 4 4 4 4 4 4 5 5 5 5 7 7 8 8 8 7 7 8 8 5 5 4 4 4 4 4 5 5 5 f 7 7 7 7 7 7 7 8 8 8 8 8 8 8 9 9 9 9 f f 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f 8 8 8 f f f f 
6 6 8 8 f f 8 6 6 6 6 f f f 8 8 8 8 8 8 6 6 f f 9 9 9 f 8 8 8 8 9 9 9 9 8 8 8 8 8 8 8 7 7 7 7 8 8 7 7 7 7 5 5 5 4 4 4 4 4 f 5 5 5 7 7 8 8 7 7 8 8 5 5 5 4 4 4 4 4 4 4 4 4 5 5 5 7 7 8 8 8 7 7 8 8 5 4 4 4 4 4 4 5 5 5 5 f 7 7 7 7 7 7 8 8 8 8 8 8 8 8 9 9 9 f f 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f 8 8 f f f f 
6 8 8 f f 8 6 6 6 6 f f f 8 8 8 8 8 8 8 6 f f 9 9 9 9 f 8 8 8 9 9 9 9 8 8 8 8 8 8 8 8 7 7 7 8 8 8 7 7 7 5 5 5 5 4 4 4 4 4 f 5 5 5 7 7 8 8 7 7 8 8 5 5 4 4 4 f 4 4 4 4 4 4 5 5 5 5 8 8 8 8 7 7 8 8 5 4 4 4 4 4 4 5 5 5 5 f 7 7 7 7 7 7 8 8 8 8 8 8 8 8 9 9 9 9 f f 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f 8 8 8 f f f 
8 8 f f f 6 6 6 6 8 f f 8 8 8 8 8 8 8 6 f f f 9 9 9 9 8 8 8 9 9 9 9 9 8 8 8 8 8 8 8 8 7 7 7 8 8 7 7 7 7 5 5 5 5 4 4 4 4 4 f f 5 5 7 7 8 8 7 8 8 5 5 5 4 4 f f 4 4 4 4 4 4 4 5 5 5 8 8 8 8 8 7 8 8 5 4 4 4 4 4 4 4 5 5 5 f 7 7 7 7 7 7 7 8 8 8 8 8 8 8 9 9 9 9 f f f 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f 8 8 8 f f 
8 8 f f 6 6 6 6 f 8 f 8 8 8 8 8 8 8 8 f f f 9 9 9 9 8 8 8 9 9 9 9 9 9 8 8 8 8 8 8 8 7 7 7 7 8 8 7 7 7 7 5 5 5 4 4 4 4 4 4 f f 5 5 5 7 8 8 7 8 8 5 5 4 4 4 f f 4 4 4 4 4 4 4 4 5 5 5 8 8 8 8 8 8 8 5 4 4 4 4 4 4 4 5 5 5 f 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 9 9 9 9 f f 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f 8 8 8 8 f 
8 f f f 8 6 6 f f f 8 8 8 8 8 8 8 8 f f f f 9 9 9 8 8 8 8 9 9 9 9 9 8 8 8 8 8 8 8 8 7 7 7 8 7 8 7 7 7 5 5 5 5 4 4 4 4 4 4 4 f f 5 5 7 8 8 7 8 5 5 4 4 4 4 f f 4 4 4 4 4 4 4 4 5 5 5 8 8 8 8 8 8 8 4 4 4 4 4 4 4 4 5 5 5 f f 7 7 7 7 7 7 7 8 8 8 8 8 8 8 9 9 9 9 f f f 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f 6 6 f f f 8 8 8 8 8 8 8 f f f f 9 9 9 9 8 8 8 9 9 9 9 9 9 8 8 8 8 8 8 8 7 7 7 7 8 8 7 7 7 7 5 5 5 5 4 4 4 4 4 4 4 f f 5 5 7 7 8 8 8 5 5 4 4 4 f f f f 4 4 4 4 4 4 4 4 5 5 8 8 8 8 8 8 8 4 4 4 4 2 4 4 4 4 5 5 f f 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 9 9 9 9 f f 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f 6 f f f f 8 8 8 8 8 8 f f f f f 9 9 9 8 9 8 9 9 9 9 9 9 9 8 8 8 8 8 8 8 7 7 7 8 7 8 7 7 7 7 5 5 5 4 4 4 4 4 2 4 4 f f 5 5 7 7 8 8 5 5 4 4 4 4 f f f f 4 4 4 4 4 4 4 4 4 5 8 8 8 8 8 8 8 4 4 4 2 2 2 4 4 4 5 5 5 f 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 9 9 9 9 f f f 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f 8 8 8 8 8 8 f f f f 9 9 9 9 8 8 9 9 9 9 9 9 9 9 8 8 8 8 8 8 7 7 7 7 8 7 8 7 7 7 7 5 5 5 4 4 4 4 2 4 4 4 4 f f 5 7 7 8 8 5 4 4 4 4 4 f f f f 4 4 4 4 f 4 4 4 4 4 8 8 8 8 8 8 5 4 4 4 2 2 2 4 4 4 5 5 5 f 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 9 9 9 9 f f f f 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f 8 8 8 8 8 f f f f f 9 9 9 8 9 8 9 9 9 9 9 9 9 8 9 8 8 8 8 8 7 7 7 7 8 8 7 7 7 7 5 5 5 5 4 4 4 4 2 2 4 4 4 f f 5 7 7 8 8 5 4 4 4 4 f f f f f 2 4 4 f f 4 4 4 4 4 5 8 8 8 8 8 4 4 4 4 2 2 2 4 4 4 4 5 5 f f 7 7 7 7 7 7 7 f 8 8 8 8 8 8 8 9 9 9 9 f f f 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f 8 8 8 8 f f f f f f f 9 9 9 8 8 9 9 9 9 9 9 9 9 8 8 8 8 8 8 8 7 7 7 8 7 8 7 7 7 7 5 5 5 4 4 4 4 2 2 2 4 4 4 f f 5 7 7 5 8 4 4 4 4 4 f f f f f 2 2 4 f f 4 4 4 4 4 4 5 5 8 8 8 4 4 4 2 2 2 2 2 4 4 4 5 5 f f 7 7 7 7 7 7 7 7 f 8 8 8 8 8 8 9 9 9 9 f f f f 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f 8 8 f f f f f f f f 9 9 9 9 8 9 9 9 9 9 9 9 9 9 8 8 8 8 8 8 7 7 7 7 8 7 8 7 7 7 7 5 5 5 4 4 4 4 2 2 2 4 4 4 f f f 7 5 5 8 4 4 4 4 4 f f f f f 2 2 f f f 4 4 4 4 4 4 4 5 8 8 8 4 4 4 2 2 2 2 2 4 4 4 5 f f f 7 7 7 7 7 7 7 f f 8 8 8 8 8 8 8 9 9 9 9 f f f f 9 9 f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 8 8 8 8 8 7 7 7 8 8 8 7 7 7 7 5 5 5 4 4 4 4 2 2 2 2 2 4 4 f f f 7 5 5 4 4 4 4 4 4 f f f f f 2 f f f f f 4 4 4 4 4 4 5 8 8 5 4 4 4 2 2 2 2 2 4 4 4 5 f f f f f 7 7 7 7 7 f f 8 8 8 8 8 8 8 9 9 9 9 f f f f f 9 f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f 6 f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 8 8 8 8 7 7 7 7 8 8 8 7 7 7 7 5 5 8 4 4 4 4 2 2 2 2 2 4 4 f f f f 5 4 4 4 4 4 4 f f f f f f f f f f f f f 4 4 4 4 4 4 8 8 4 4 4 4 2 2 2 2 2 2 4 4 4 f f f f 7 7 7 7 7 7 f f f 8 8 8 8 8 8 9 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 8 8 8 8 7 7 7 8 8 8 8 7 7 7 7 5 f 5 4 4 4 4 2 2 2 2 2 2 4 f f f f f 4 4 4 4 4 f f f f f f f f f f f f f f f 4 f f 4 4 8 8 4 4 4 2 2 2 2 2 2 2 4 4 4 f f f f 7 7 7 7 7 7 f f f 8 8 8 8 8 8 8 9 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 9 9 8 8 8 8 8 8 7 7 7 8 8 8 8 7 7 7 7 f f 4 4 4 8 2 2 f f 2 2 2 4 f f f f f f f 4 2 2 f f f f f f f f f f f f f f f f f f f f 8 8 4 4 4 2 2 2 2 2 2 2 4 4 4 f f f f 7 7 7 7 7 7 7 f f 8 8 8 8 8 8 8 8 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 9 9 9 8 8 8 8 8 7 7 7 7 8 8 8 7 7 7 7 5 f f 4 4 f f f f f f f 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 4 4 4 2 2 2 2 2 2 2 2 4 4 f f f f f 7 7 7 7 7 7 f f f 8 8 8 8 8 8 8 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 9 9 9 9 8 8 8 8 8 8 7 7 7 8 8 8 8 7 7 7 7 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 2 2 2 2 2 2 2 2 4 4 f f f f f 7 7 7 7 7 7 f f f 8 8 8 8 8 8 8 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 9 8 8 8 8 8 8 7 7 7 8 8 8 8 7 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 2 2 2 4 f f f f f f 7 7 7 7 7 7 f f f 8 8 8 8 8 8 8 8 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 8 8 8 8 8 8 7 7 7 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 7 7 f f f 8 8 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`)
    game.setDialogFrame(img`
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
`)
    game.setDialogTextColor(1)
    game.showLongText("", DialogLayout.Full)
}
function defineWW () {
    wwSprite = sprites.create(img`
. . . . . . . . . . . . 8 8 8 8 8 8 . . . . . . . . 
. . . . . . 8 f f f . 8 f f f f f f 8 . . . . . . . 
. . . . . 8 f f f f 8 f f f f f f f f . . . . . . . 
. . . . . 8 f f f f f f f f f f f f f . . . . . . . 
. . . . 8 f f f f f f f f d d d d d f . . . . . . . 
. . . . 8 f f f f f f f f d d d d d . . . . . . . . 
. . . 8 f f f f f f f d d d d f d d . . . . . . . . 
. . . 8 f f f f f 8 f d d d d d d d . . . . . . . . 
. . 8 f f f f f . 8 f f d d d d d d . . . . . . . . 
. . 8 f f f f f . 8 f f d d d d d d . . . . . . . . 
. . 8 f f f f f . . . 8 f d d d d . . . . . . . . . 
. . 8 f f f f . . . 1 1 1 d d d . . . . . . . . . . 
. . 8 f f f f . e e e 1 1 1 d d 1 . . . . . . . . . 
. 8 f f f f f . e e e e 1 1 1 d d e e . . . . . . . 
. 8 f f f f f . e e e e e 8 1 1 d 1 e e . . . . . . 
. 8 f f f f f . e e e e e 8 8 8 1 1 e e . . . . . . 
. 8 f f f f . e e e e e e 8 8 8 8 1 e e . . . . . . 
. . 8 f f . . e e e e e e 8 8 8 8 8 8 e . . . . . . 
. . 8 f f . e e e e f e e 8 8 8 8 8 8 e . . . . . . 
. . 8 f . e e e e e f e e 8 8 8 8 8 8 e . . . . . . 
. . . . f e e e e f e e e 8 8 8 8 8 8 e . . . . . . 
. . . . f e e e e f e e e 8 8 8 8 8 e e e . . . . . 
. . . . e e e e f e e e e 8 8 8 8 8 e e e . . . . . 
. . . f e e e e f e e e e 8 8 8 8 8 e f e . . . . . 
. . . f e e e . f e e e e 8 8 8 8 8 e f e . . . . . 
. . f e e e e f e e e e e 8 8 8 8 8 e f e e . . . . 
. . f e e e e f e e e e e 2 2 2 2 2 2 f e e . . . . 
. . f e e e . f e e e e e 2 2 2 2 2 2 e f e . . . . 
. . f e e e . f e e e e 2 2 2 2 2 2 2 e f e . . . . 
. . f d d d . f e e e 2 2 2 2 2 2 2 2 e d d . . . . 
. . f d d . . f e 2 2 2 2 2 2 2 f 2 2 e d d . . . . 
. . f d d . . . f 2 2 2 2 2 2 f f 2 2 . d d . . . . 
. . . . . . . . f 2 2 2 2 2 2 f 2 2 2 . . . . . . . 
. . . . . . . . f 2 2 2 2 2 f f 2 2 2 . . . . . . . 
. . . . . . . . f 2 2 2 2 2 f f 2 2 2 . . . . . . . 
. . . . . . . . f 2 2 2 2 f f f 2 2 2 . . . . . . . 
. . . . . . . . f 2 2 2 2 . . f 2 2 2 . . . . . . . 
. . . . . . . . f 2 2 2 2 . . f 2 2 2 . . . . . . . 
. . . . . . . . f 2 2 2 2 . f 2 2 2 2 . . . . . . . 
. . . . . . . . f 2 2 2 2 . f 2 2 2 2 . . . . . . . 
. . . . . . . . f 2 2 2 2 . f 2 2 2 2 . . . . . . . 
. . . . . . . . f 2 2 2 2 . f 2 2 2 2 2 . . . . . . 
. . . . . . . f 2 2 2 2 2 . f 2 2 2 2 2 . . . . . . 
. . . . . . . f 2 2 2 2 2 . f 2 2 2 2 2 . . . . . . 
. . . . . . . f 2 2 2 2 2 . . f 2 2 2 2 . . . . . . 
. . . . . . . f 2 2 2 2 2 . . f 2 2 2 2 . . . . . . 
. . . . . . . f 2 2 2 2 . . . f 2 2 2 2 . . . . . . 
. . . . . . . f 2 2 2 2 . . . f 2 2 2 2 . . . . . . 
. . . . . . . f 2 2 2 2 . . . f 2 2 2 2 . . . . . . 
. . . . . . . f 2 2 2 2 . . . . f 2 2 2 . . . . . . 
. . . . . . . f 2 2 2 2 . . . . f 2 2 2 . . . . . . 
. . . . . . . f 2 2 2 2 . . . . f 2 2 2 2 . . . . . 
. . . . . . . f 2 2 2 2 . . . . f 2 2 2 2 . . . . . 
. . . . . . . f 2 2 2 2 . . . . f 2 2 2 2 . . . . . 
. . . . . . . . . f f f f . . . . f f f f f . . . . 
. . . . . . . . . f f f f f . . . . f f f f f . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
    scene.cameraFollowSprite(wwSprite)
    controller.moveSprite(wwSprite)
    wwSprite.setFlag(SpriteFlag.BounceOnWall, false)
    wwSprite.z = 3
    animation.runImageAnimation(
    wwSprite,
    [img`
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . 8 8 8 8 8 8 . . . . . . . 
. . . . . . . 8 f f f . 8 f f f f f f 8 . . . . . . 
. . . . . . 8 f f f f 8 f f f f f f f f . . . . . . 
. . . . . . 8 f f f f f f f f f f f f f . . . . . . 
. . . . . 8 f f f f f f f f d d d d d f . . . . . . 
. . . . . 8 f f f f f f f f d d d d d . . . . . . . 
. . . . 8 f f f f f f f d d d d f d d . . . . . . . 
. . . . 8 f f f f f 8 f d d d d d d d . . . . . . . 
. . . 8 f f f f f . 8 f f d d d d d d . . . . . . . 
. . . 8 f f f f f . 8 f f d d d d d d . . . . . . . 
. . . 8 f f f f f . . . 8 f d d d d . . . . . . . . 
. . . 8 f f f f . . . 1 1 1 d d d . . . . . . . . . 
. . . 8 f f f f . e e e 1 1 1 d d 1 . . . . . . . . 
. . 8 f f f f f . e e e e 1 1 1 d d e e . . . . . . 
. . 8 f f f f f . e e e e e 8 1 1 d 1 e e . . . . . 
. . 8 f f f f f . e e e e e 8 8 8 1 1 e e . . . . . 
. . 8 f f f f . e e e e e e 8 8 8 8 1 e e . . . . . 
. . . 8 f f . . e e e e e e 8 8 8 8 8 8 e . . . . . 
. . . 8 f f . e e e e f e e 8 8 8 8 8 8 e . . . . . 
. . . 8 f . e e e e e f e e 8 8 8 8 8 8 e . . . . . 
. . . . . f e e e e f e e e 8 8 8 8 8 8 e . . . . . 
. . . . . f e e e e f e e e 8 8 8 8 8 e e e . . . . 
. . . . . e e e e f e e e e 8 8 8 8 8 e e e . . . . 
. . . . f e e e e f e e e e 8 8 8 8 8 e f e . . . . 
. . . . f e e e . f e e e e 8 8 8 8 8 e f e . . . . 
. . . f e e e e f e e e e e 8 8 8 8 8 e f e e . . . 
. . . f e e e e f e e e e e 2 2 2 2 2 2 f e e . . . 
. . . f e e e . f e e e e e 2 2 2 2 2 2 e f e . . . 
. . . f e e e . f e e e e 2 2 2 2 2 2 2 e f e . . . 
. . . f d d d . f e e e 2 2 2 2 2 2 2 2 e d d . . . 
. . . f d d . . f e 2 2 2 2 2 2 2 f 2 2 e d d . . . 
. . . f d d . . . f 2 2 2 2 2 2 f f 2 2 . d d . . . 
. . . . . . . . . f 2 2 2 2 2 2 f 2 2 2 . . . . . . 
. . . . . . . . . f 2 2 2 2 2 f f 2 2 2 . . . . . . 
. . . . . . . . . f 2 2 2 2 2 f f 2 2 2 . . . . . . 
. . . . . . . . . f 2 2 2 2 f f f 2 2 2 . . . . . . 
. . . . . . . . . f 2 2 2 2 . . f 2 2 2 . . . . . . 
. . . . . . . . . f 2 2 2 2 . . f 2 2 2 . . . . . . 
. . . . . . . . . f 2 2 2 2 . f 2 2 2 2 . . . . . . 
. . . . . . . . . f 2 2 2 2 . f 2 2 2 2 . . . . . . 
. . . . . . . . . f 2 2 2 2 . f 2 2 2 2 . . . . . . 
. . . . . . . . . f 2 2 2 2 . f 2 2 2 2 2 . . . . . 
. . . . . . . . f 2 2 2 2 2 . f 2 2 2 2 2 . . . . . 
. . . . . . . . f 2 2 2 2 2 . f 2 2 2 2 2 . . . . . 
. . . . . . . f f 2 2 2 2 2 . f f 2 2 2 2 . . . . . 
. . . . . . . f 2 2 2 2 . . . f 2 2 2 2 . . . . . . 
. . . . . . . f 2 2 2 2 . . . f 2 2 2 2 . . . . . . 
. . . . . . . f 2 2 2 2 . . . f 2 2 2 2 . . . . . . 
. . . . . . . f 2 2 2 2 . . . . f 2 2 2 . . . . . . 
. . . . . . . f 2 2 2 2 . . . . f 2 2 2 . . . . . . 
. . . . . . . f 2 2 2 2 . . . . f 2 2 2 2 . . . . . 
. . . . . . . f 2 2 2 2 . . . . f 2 2 2 2 . . . . . 
. . . . . . . f 2 2 2 2 . . . . f 2 2 2 2 . . . . . 
. . . . . . . . . f f f f . . . . f f f f f . . . . 
. . . . . . . . . f f f f f . . . . f f f f f . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . 8 8 8 8 8 8 . . . . . . . 
. . . . . . . 8 f f f . 8 f f f f f f 8 . . . . . . 
. . . . . . 8 f f f f 8 f f f f f f f f . . . . . . 
. . . . . . 8 f f f f f f f f f f f f f . . . . . . 
. . . . . 8 f f f f f f f f d d d d d f . . . . . . 
. . . . . 8 f f f f f f f f d d d d d . . . . . . . 
. . . . 8 f f f f f f f d d d d f d d . . . . . . . 
. . . . 8 f f f f f 8 f d d d d d d d . . . . . . . 
. . . 8 f f f f f . 8 f f d d d d d d . . . . . . . 
. . . 8 f f f f f . 8 f f d d d d d d . . . . . . . 
. . . 8 f f f f f . . . 8 f d d d d . . . . . . . . 
. . . 8 f f f f . . . 1 1 1 d d d . . . . . . . . . 
. . . 8 f f f f . e e e 1 1 1 d d 1 . . . . . . . . 
. . 8 f f f f f . e e e e 1 1 1 d d e e . . . . . . 
. . 8 f f f f f . e e e e e 8 1 1 d 1 e e . . . . . 
. . 8 f f f f f . e e e e e 8 8 8 1 1 e e . . . . . 
. . 8 f f f f . e e e e e e 8 8 8 8 1 e e . . . . . 
. . . 8 f f . . e e e e e e 8 8 8 8 8 8 e . . . . . 
. . . 8 f f . e e e e f e e 8 8 8 8 8 8 e . . . . . 
. . . 8 f . e e e e e f e e 8 8 8 8 8 8 e . . . . . 
. . . . . f e e e e f e e e 8 8 8 8 8 8 e . . . . . 
. . . . . f e e e e f e e e 8 8 8 8 8 e e e . . . . 
. . . . . e e e e f e e e e 8 8 8 8 8 e e e . . . . 
. . . . f e e e e f e e e e 8 8 8 8 8 e f e . . . . 
. . . . f e e e . f e e e e 8 8 8 8 8 e f e . . . . 
. . . f e e e e f e e e e e 8 8 8 8 8 e f e e . . . 
. . . f e e e e f e e e e e 2 2 2 2 2 2 f e e . . . 
. . . f e e e . f e e e e e 2 2 2 2 2 2 e f e . . . 
. . . f e e e . f e e e e 2 2 2 2 2 2 2 e f e . . . 
. . . f d d d . f e e e 2 2 2 2 2 2 2 2 e d d . . . 
. . . f d d . . f e 2 2 2 2 2 2 2 f 2 2 e d d . . . 
. . . f d d . . . f 2 2 2 2 2 2 f f 2 2 . d d . . . 
. . . . . . . . . f 2 2 2 2 2 2 f 2 2 2 . . . . . . 
. . . . . . . . . f 2 2 2 2 2 f f 2 2 2 . . . . . . 
. . . . . . . . . f 2 2 2 2 2 f f 2 2 2 . . . . . . 
. . . . . . . . . f 2 2 2 2 f f f 2 2 2 . . . . . . 
. . . . . . . . . f 2 2 2 2 . . f 2 2 2 . . . . . . 
. . . . . . . . . f 2 2 2 2 . . f 2 2 2 . . . . . . 
. . . . . . . . . f 2 2 2 2 . f 2 2 2 2 . . . . . . 
. . . . . . . . . f 2 2 2 2 . f 2 2 2 2 . . . . . . 
. . . . . . . . . f 2 2 2 2 . f 2 2 2 2 . . . . . . 
. . . . . . . . . f 2 2 2 2 . f 2 2 2 2 2 . . . . . 
. . . . . . . . f 2 2 2 2 2 . f 2 2 2 2 2 . . . . . 
. . . . . . . f f 2 2 2 2 2 . f f 2 2 2 2 . . . . . 
. . . . . . . f 2 2 2 2 . . . f 2 2 2 2 . . . . . . 
. . . . . . . f 2 2 2 2 . . . f 2 2 2 2 . . . . . . 
. . . . . . . f 2 2 2 2 . . . f 2 2 2 2 . . . . . . 
. . . . . . . f 2 2 2 2 . . . . f 2 2 2 . . . . . . 
. . . . . . . f 2 2 2 2 . . . . f 2 2 2 . . . . . . 
. . . . . . . f 2 2 2 2 . . . . f 2 2 2 2 . . . . . 
. . . . . . . f 2 2 2 2 . . . . f 2 2 2 2 . . . . . 
. . . . . . . f 2 2 2 2 . . . . f 2 2 2 2 . . . . . 
. . . . . . . . . f f f f . . . . f f f f f . . . . 
. . . . . . . . . f f f f f . . . . f f f f f . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . 8 8 8 8 8 8 . . . . . . . 
. . . . . . . 8 f f f . 8 f f f f f f 8 . . . . . . 
. . . . . . 8 f f f f 8 f f f f f f f f . . . . . . 
. . . . . . 8 f f f f f f f f f f f f f . . . . . . 
. . . . . 8 f f f f f f f f d d d d d f . . . . . . 
. . . . . 8 f f f f f f f f d d d d d . . . . . . . 
. . . . 8 f f f f f f f d d d d f d d . . . . . . . 
. . . . 8 f f f f f 8 f d d d d d d d . . . . . . . 
. . . 8 f f f f f . 8 f f d d d d d d . . . . . . . 
. . . 8 f f f f f . 8 f f d d d d d d . . . . . . . 
. . . 8 f f f f f . . . 8 f d d d d . . . . . . . . 
. . . 8 f f f f . . . 1 1 1 d d d . . . . . . . . . 
. . . 8 f f f f . e e e 1 1 1 d d 1 . . . . . . . . 
. . 8 f f f f f . e e e e 1 1 1 d d e e . . . . . . 
. . 8 f f f f f . e e e e e 8 1 1 d 1 e e . . . . . 
. . 8 f f f f f . e e e e e 8 8 8 1 1 e e . . . . . 
. . 8 f f f f . e e e e e e 8 8 8 8 1 e e . . . . . 
. . . 8 f f . . e e e e e e 8 8 8 8 8 8 e . . . . . 
. . . 8 f f . e e e e f e e 8 8 8 8 8 8 e . . . . . 
. . . 8 f . e e e e e f e e 8 8 8 8 8 8 e . . . . . 
. . . . . f e e e e f e e e 8 8 8 8 8 8 e . . . . . 
. . . . . f e e e e f e e e 8 8 8 8 8 e e e . . . . 
. . . . . e e e e f e e e e 8 8 8 8 8 e e e . . . . 
. . . . f e e e e f e e e e 8 8 8 8 8 e f e . . . . 
. . . . f e e e . f e e e e 8 8 8 8 8 e f e . . . . 
. . . f e e e e f e e e e e 8 8 8 8 8 e f e e . . . 
. . . f e e e e f e e e e e 2 2 2 2 2 2 f e e . . . 
. . . f e e e . f e e e e e 2 2 2 2 2 2 e f e . . . 
. . . f e e e . f e e e e 2 2 2 2 2 2 2 e f e . . . 
. . . f d d d . f e e e 2 2 2 2 2 2 2 2 e d d . . . 
. . . f d d . . f e 2 2 2 2 2 2 2 f 2 2 e d d . . . 
. . . f d d . . . f 2 2 2 2 2 2 f f 2 2 . d d . . . 
. . . . . . . . . f 2 2 2 2 2 2 f 2 2 2 . . . . . . 
. . . . . . . . . f 2 2 2 2 2 f f 2 2 2 . . . . . . 
. . . . . . . . . f 2 2 2 2 2 f f 2 2 2 . . . . . . 
. . . . . . . . . f 2 2 2 2 f f f 2 2 2 . . . . . . 
. . . . . . . . . f 2 2 2 2 . . f 2 2 2 . . . . . . 
. . . . . . . . . f 2 2 2 2 . . f 2 2 2 . . . . . . 
. . . . . . . . . f 2 2 2 2 . f 2 2 2 2 . . . . . . 
. . . . . . . . . f 2 2 2 2 . f 2 2 2 2 . . . . . . 
. . . . . . . . . f 2 2 2 2 . f 2 2 2 2 . . . . . . 
. . . . . . . . . f 2 2 2 2 . f 2 2 2 2 2 . . . . . 
. . . . . . . . f 2 2 2 2 2 . f 2 2 2 2 2 . . . . . 
. . . . . . . . f 2 2 2 2 2 . f 2 2 2 2 2 . . . . . 
. . . . . . . f f 2 2 2 2 2 . f f 2 2 2 2 . . . . . 
. . . . . . . f 2 2 2 2 . . . f 2 2 2 2 . . . . . . 
. . . . . . . f 2 2 2 2 . . . f 2 2 2 2 . . . . . . 
. . . . . . . f 2 2 2 2 . . . f 2 2 2 2 . . . . . . 
. . . . . . . f 2 2 2 2 . . . . f 2 2 2 . . . . . . 
. . . . . . . f 2 2 2 2 . . . . f 2 2 2 . . . . . . 
. . . . . . . f 2 2 2 2 . . . . f 2 2 2 2 . . . . . 
. . . . . . . f 2 2 2 2 . . . . f 2 2 2 2 . . . . . 
. . . . . . . f 2 2 2 2 . . . . f 2 2 2 2 . . . . . 
. . . . . . . . . f f f f . . . . f f f f f . . . . 
. . . . . . . . . f f f f f . . . . f f f f f . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . 8 8 8 8 8 8 . . . . . . . . 
. . . . . . 8 f f f . 8 f f f f f f 8 . . . . . . . 
. . . . . 8 f f f f 8 f f f f f f f f . . . . . . . 
. . . . . 8 f f f f f f f f f f f f f . . . . . . . 
. . . . 8 f f f f f f f f d d d d d f . . . . . . . 
. . . . 8 f f f f f f f f d d d d d . . . . . . . . 
. . . 8 f f f f f f f d d d d f d d . . . . . . . . 
. . . 8 f f f f f 8 f d d d d d d d . . . . . . . . 
. . 8 f f f f f . 8 f f d d d d d d . . . . . . . . 
. . 8 f f f f f . 8 f f d d d d d d . . . . . . . . 
. . 8 f f f f f . . . 8 f d d d d . . . . . . . . . 
. . 8 f f f f . . . 1 1 1 d d d . . . . . . . . . . 
. . 8 f f f f . e e e 1 1 1 d d 1 . . . . . . . . . 
. 8 f f f f f . e e e e 1 1 1 d d e e . . . . . . . 
. 8 f f f f f . e e e e e 8 1 1 d 1 e e . . . . . . 
. 8 f f f f f . e e e e e 8 8 8 1 1 e e . . . . . . 
. 8 f f f f . e e e e e e 8 8 8 8 1 e e . . . . . . 
. . 8 f f . . e e e e e e 8 8 8 8 8 8 e . . . . . . 
. . 8 f f . e e e e f e e 8 8 8 8 8 8 e . . . . . . 
. . 8 f . e e e e e f e e 8 8 8 8 8 8 e . . . . . . 
. . . . f e e e e f e e e 8 8 8 8 8 8 e . . . . . . 
. . . . f e e e e f e e e 8 8 8 8 8 e e e . . . . . 
. . . . e e e e f e e e e 8 8 8 8 8 e e e . . . . . 
. . . f e e e e f e e e e 8 8 8 8 8 e f e . . . . . 
. . . f e e e . f e e e e 8 8 8 8 8 e f e . . . . . 
. . f e e e e f e e e e e 8 8 8 8 8 e f e e . . . . 
. . f e e e e f e e e e e 2 2 2 2 2 2 f e e . . . . 
. . f e e e . f e e e e e 2 2 2 2 2 2 e f e . . . . 
. . f e e e . f e e e e 2 2 2 2 2 2 2 e f e . . . . 
. . f d d d . f e e e 2 2 2 2 2 2 2 2 e d d . . . . 
. . f d d . . f e 2 2 2 2 2 2 2 f 2 2 e d d . . . . 
. . f d d . . . f 2 2 2 2 2 2 f f 2 2 . d d . . . . 
. . . . . . . . f 2 2 2 2 2 2 f 2 2 2 . . . . . . . 
. . . . . . . . f 2 2 2 2 2 f f 2 2 2 . . . . . . . 
. . . . . . . . f 2 2 2 2 2 f f 2 2 2 . . . . . . . 
. . . . . . . . f 2 2 2 2 f f f 2 2 2 . . . . . . . 
. . . . . . . . f 2 2 2 2 . . f 2 2 2 . . . . . . . 
. . . . . . . . f 2 2 2 2 . . f 2 2 2 . . . . . . . 
. . . . . . . . f 2 2 2 2 . f 2 2 2 2 . . . . . . . 
. . . . . . . . f 2 2 2 2 . f 2 2 2 2 . . . . . . . 
. . . . . . . . f 2 2 2 2 . f 2 2 2 2 . . . . . . . 
. . . . . . . . f 2 2 2 2 . f 2 2 2 2 2 . . . . . . 
. . . . . . . f 2 2 2 2 2 . f 2 2 2 2 2 . . . . . . 
. . . . . . . f 2 2 2 2 2 . f 2 2 2 2 2 . . . . . . 
. . . . . . . f 2 2 2 2 2 . . f 2 2 2 2 . . . . . . 
. . . . . . . f 2 2 2 2 2 . . f 2 2 2 2 . . . . . . 
. . . . . . . f 2 2 2 2 . . . f 2 2 2 2 . . . . . . 
. . . . . . . f 2 2 2 2 . . . f 2 2 2 2 . . . . . . 
. . . . . . . f 2 2 2 2 . . . f 2 2 2 2 . . . . . . 
. . . . . . . f 2 2 2 2 . . . . f 2 2 2 . . . . . . 
. . . . . . . f 2 2 2 2 . . . . f 2 2 2 . . . . . . 
. . . . . . . f 2 2 2 2 . . . . f 2 2 2 2 . . . . . 
. . . . . . . f 2 2 2 2 . . . . f 2 2 2 2 . . . . . 
. . . . . . . f 2 2 2 2 . . . . f 2 2 2 2 . . . . . 
. . . . . . . . . f f f f . . . . f f f f f . . . . 
. . . . . . . . . f f f f f . . . . f f f f f . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
`],
    150,
    true
    )
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (facingRight) {
        facingRight = false
        facingLeft = true
        if (armor == 1) {
            animation.runImageAnimation(
            wwSprite,
            [img`
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . f f f f f f . . . . . . . . . . . . . 
. . . . . . f 5 5 5 5 5 5 f . . . . . . . . . . . . 
. . . . . . 5 1 5 5 5 4 5 5 f f . . . . . . . . . . 
. . . . . . 5 1 5 4 4 4 4 5 5 5 e e . . 5 5 . . . . 
. . . . . . 5 5 5 d d d 4 4 5 5 e e . . 4 4 4 . . . 
. . . . . . . 5 d d d d 4 4 5 5 e e e 4 4 5 5 5 . . 
. . . . . . . d d f d d 4 4 5 5 e e 5 4 5 5 5 5 5 . 
. . . . . . . d d d d d 4 5 5 4 e 5 4 5 5 5 5 5 5 . 
. . . . . . . d d d d 5 5 5 5 4 e 4 4 5 4 4 4 4 5 . 
. . . . . . . d d d 5 5 5 5 4 4 5 4 5 4 5 5 5 4 5 . 
. . . . . . . f d 5 5 5 5 4 f f f 5 4 4 5 5 5 5 5 . 
. . . . . . . f f d f f f f f f f f 5 5 5 4 5 5 5 . 
. . . . . 4 4 4 4 4 f f f f f 4 4 4 4 5 5 4 5 5 5 . 
. . . . . . 4 4 4 5 f f f f 4 4 4 4 5 5 4 4 5 5 5 . 
. . . . . 1 5 5 5 f f f f f 4 4 5 f 5 4 4 5 5 4 5 . 
. . . . . 5 5 4 5 f f f f f 4 5 5 f 5 4 5 5 5 4 5 . 
. . . . . 5 4 4 4 f f f f 4 4 5 5 5 f 5 5 5 5 4 5 . 
. . . . . 5 4 4 4 4 f f f 4 5 5 1 1 f 5 5 5 5 4 5 . 
. . . . . 5 4 4 4 f f f f 4 f 5 5 1 1 f 5 5 5 4 5 . 
. . . . . 5 4 4 4 f f f 4 4 f 5 5 5 1 5 f 5 5 4 5 . 
. . . . . 5 5 4 4 f f 4 4 4 4 e 5 5 1 1 f 5 5 4 5 . 
. . . . 5 5 5 4 4 4 4 4 4 4 4 e 5 5 5 1 f 5 5 4 5 . 
. . . . 1 5 5 4 4 4 4 4 4 4 4 e e 5 5 1 5 5 5 4 5 . 
. . . . 5 5 f 4 4 4 4 4 4 4 4 e e 5 5 5 5 f 5 4 5 . 
. . . . 5 5 f 4 4 4 4 4 4 4 4 e e e 5 4 4 f 5 4 5 . 
. . 4 4 4 4 f 4 4 4 4 4 4 4 4 e e e 4 5 4 4 f 4 5 . 
. . 4 5 4 f 5 4 4 4 4 4 4 5 5 5 e 4 4 5 5 4 f 4 5 . 
. . . 5 4 f 5 4 4 4 4 5 5 5 5 5 e e 4 4 4 4 f 4 5 . 
. . . 4 4 f 5 5 4 4 5 5 5 5 5 5 e e e 4 5 4 f 4 5 . 
. . . 4 4 f 5 5 4 4 5 1 5 5 5 5 e e e d 4 4 f 5 5 . 
. . . 4 4 f 5 5 f 5 5 1 5 5 5 5 e e e e 4 4 f 5 5 . 
. . . d d . 5 5 f f 5 1 1 5 5 5 e 4 f e d d f 5 5 . 
. . . . 4 . 5 5 5 f 5 5 1 5 5 5 4 f e e 5 5 4 5 5 . 
. . . . . 4 5 5 5 f f 5 1 1 5 4 4 f e e 5 5 4 5 5 . 
. . . . . 4 4 5 5 f f 5 5 5 4 4 4 f . e e 5 4 5 5 . 
. . . . . 4 4 4 5 f f f 5 4 4 4 f . . . e e 4 4 5 . 
. . . . . 4 4 4 4 f . . 4 4 4 4 f . . . . e 5 4 5 . 
. . . . . 4 5 4 4 f . . 4 4 4 4 f . . . . . 5 4 5 . 
. . . . . 4 5 4 4 f . . 4 5 4 4 f . . . . . 5 5 5 . 
. . . . . 4 5 5 4 f f . 4 5 4 4 f f . . . . . 5 5 . 
. . . . . 4 4 4 5 4 f . 4 4 5 5 4 f . . . . . . . . 
. . . . . . 4 5 5 4 f . . 4 4 5 4 f . . . . . . . . 
. . . . . . 4 5 4 4 f . . 4 4 4 4 f . . . . . . . . 
. . . . . . 4 5 4 4 f . . 4 5 4 4 f . . . . . . . . 
. . . . . . 4 5 4 4 f . . 4 4 4 4 f . . . . . . . . 
. . . . . . 4 5 4 4 f . . . 4 4 4 f . . . . . . . . 
. . . . . . 4 4 4 4 f . . . 4 4 4 f . . . . . . . . 
. . . . . . 4 4 4 4 f . . . 4 4 4 f . . . . . . . . 
. . . . . . 4 4 4 f . . . . 4 4 4 f . . . . . . . . 
. . . . . . 4 4 4 f . . . . 4 4 4 f . . . . . . . . 
. . . . . 4 4 5 4 f . . . . 4 5 4 f . . . . . . . . 
. . . . . 4 5 4 4 f . . . . 4 5 4 f . . . . . . . . 
. . . . . 4 5 4 4 f . . . . 4 5 4 f . . . . . . . . 
. . . . 4 4 4 4 4 . . . . 4 4 5 4 . . . . . . . . . 
. . . 4 4 4 4 4 . . . . 4 4 4 4 4 . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . f f f f f f . . . . . . . . . . . . . . 
. . . . . f 5 5 5 5 5 5 f . . . . . . . . . . . . . 
. . . . . 5 1 5 5 5 4 5 5 f f . . . . . . . . . . . 
. . . . . 5 1 5 4 4 4 4 5 5 5 e e . . 5 5 . . . . . 
. . . . . 5 5 5 d d d 4 4 5 5 e e . . 4 4 4 . . . . 
. . . . . . 5 d d d d 4 4 5 5 e e e 4 4 5 5 5 . . . 
. . . . . . d d f d d 4 4 5 5 e e 5 4 5 5 5 5 5 . . 
. . . . . . d d d d d 4 5 5 4 e 5 4 5 5 5 5 5 5 . . 
. . . . . . d d d d 5 5 5 5 4 e 4 4 5 4 4 4 4 5 . . 
. . . . . . d d d 5 5 5 5 4 4 5 4 5 4 5 5 5 4 5 . . 
. . . . . . f d 5 5 5 5 4 f f f 5 4 4 5 5 5 5 5 . . 
. . . . . . f f d f f f f f f f f 5 5 5 4 5 5 5 . . 
. . . . 4 4 4 4 4 f f f f f 4 4 4 4 5 5 4 5 5 5 . . 
. . . . . 4 4 4 5 f f f f 4 4 4 4 5 5 4 4 5 5 5 . . 
. . . . 1 5 5 5 f f f f f 4 4 5 f 5 4 4 5 5 4 5 . . 
. . . . 5 5 4 5 f f f f f 4 5 5 f 5 4 5 5 5 4 5 . . 
. . . . 5 4 4 4 f f f f 4 4 5 5 5 f 5 5 5 5 4 5 . . 
. . . . 5 4 4 4 4 f f f 4 5 5 1 1 f 5 5 5 5 4 5 . . 
. . . . 5 4 4 4 f f f f 4 f 5 5 1 1 f 5 5 5 4 5 . . 
. . . . 5 4 4 4 f f f 4 4 f 5 5 5 1 5 f 5 5 4 5 . . 
. . . . 5 5 4 4 f f 4 4 4 4 e 5 5 1 1 f 5 5 4 5 . . 
. . . 5 5 5 4 4 4 4 4 4 4 4 e 5 5 5 1 f 5 5 4 5 . . 
. . . 1 5 5 4 4 4 4 4 4 4 4 e e 5 5 1 5 5 5 4 5 . . 
. . . 5 5 f 4 4 4 4 4 4 4 4 e e 5 5 5 5 f 5 4 5 . . 
. . . 5 5 f 4 4 4 4 4 4 4 4 e e e 5 4 4 f 5 4 5 . . 
. 4 4 4 4 f 4 4 4 4 4 4 4 4 e e e 4 5 4 4 f 4 5 . . 
. 4 5 4 f 5 4 4 4 4 4 4 5 5 5 e 4 4 5 5 4 f 4 5 . . 
. . 5 4 f 5 4 4 4 4 5 5 5 5 5 e e 4 4 4 4 f 4 5 . . 
. . 4 4 f 5 5 4 4 5 5 5 5 5 5 e e e 4 5 4 f 4 5 . . 
. . 4 4 f 5 5 4 4 5 1 5 5 5 5 e e e d 4 4 f 5 5 . . 
. . 4 4 f 5 5 f 5 5 1 5 5 5 5 e e e e 4 4 f 5 5 . . 
. . d d . 5 5 f f 5 1 1 5 5 5 e 4 f e d d f 5 5 . . 
. . . 4 . 5 5 5 f 5 5 1 5 5 5 4 f e e 5 5 4 5 5 . . 
. . . . 4 5 5 5 f f 5 1 1 5 4 4 f e e 5 5 4 5 5 . . 
. . . . 4 4 5 5 f f 5 5 5 4 4 4 f . e e 5 4 5 5 . . 
. . . . 4 4 4 5 f f f 5 4 4 4 f . . . e e 4 4 5 . . 
. . . . 4 4 4 4 f . . 4 4 4 4 f . . . . e 5 4 5 . . 
. . . . 4 5 4 4 f . . 4 4 4 4 f . . . . . 5 4 5 . . 
. . . . 4 5 4 4 f . . 4 5 4 4 f . . . . . 5 5 5 . . 
. . . . 4 5 5 4 f . . 4 5 4 4 f . . . . . . 5 5 . . 
. . . . . 4 4 5 5 f . . 4 4 4 5 f . . . . . . . . . 
. . . . . 4 4 5 4 f . . 4 4 4 4 f . . . . . . . . . 
. . . . . . 4 5 4 4 f . . 4 5 4 4 f . . . . . . . . 
. . . . . . 4 5 4 4 f . . 4 4 4 4 f . . . . . . . . 
. . . . . . 4 5 4 4 f . . . 4 4 4 f . . . . . . . . 
. . . . . . 4 4 4 4 f . . . 4 4 4 f . . . . . . . . 
. . . . . . 4 4 4 4 f . . . 4 4 4 f . . . . . . . . 
. . . . . . 4 4 4 f . . . . 4 4 4 f . . . . . . . . 
. . . . . . 4 4 4 f . . . . 4 4 4 f . . . . . . . . 
. . . . . 4 4 5 4 f . . . . 4 5 4 f . . . . . . . . 
. . . . . 4 5 4 4 f . . . . 4 5 4 f . . . . . . . . 
. . . . . 4 5 4 4 f . . . . 4 5 4 f . . . . . . . . 
. . . . 4 4 4 4 4 . . . . 4 4 5 4 . . . . . . . . . 
. . . 4 4 4 4 4 . . . . 4 4 4 4 4 . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . f f f f f f . . . . . . . . . . . . . 
. . . . . . f 5 5 5 5 5 5 f . . . . . . . . . . . . 
. . . . . . 5 1 5 5 5 4 5 5 f f . . . . . . . . . . 
. . . . . . 5 1 5 4 4 4 4 5 5 5 e e . . 5 5 . . . . 
. . . . . . 5 5 5 d d d 4 4 5 5 e e . . 4 4 4 . . . 
. . . . . . . 5 d d d d 4 4 5 5 e e e 4 4 5 5 5 . . 
. . . . . . . d d f d d 4 4 5 5 e e 5 4 5 5 5 5 5 . 
. . . . . . . d d d d d 4 5 5 4 e 5 4 5 5 5 5 5 5 . 
. . . . . . . d d d d 5 5 5 5 4 e 4 4 5 4 4 4 4 5 . 
. . . . . . . d d d 5 5 5 5 4 4 5 4 5 4 5 5 5 4 5 . 
. . . . . . . f d 5 5 5 5 4 f f f 5 4 4 5 5 5 5 5 . 
. . . . . . . f f d f f f f f f f f 5 5 5 4 5 5 5 . 
. . . . . 4 4 4 4 4 f f f f f 4 4 4 4 5 5 4 5 5 5 . 
. . . . . . 4 4 4 5 f f f f 4 4 4 4 5 5 4 4 5 5 5 . 
. . . . . 1 5 5 5 f f f f f 4 4 5 f 5 4 4 5 5 4 5 . 
. . . . . 5 5 4 5 f f f f f 4 5 5 f 5 4 5 5 5 4 5 . 
. . . . . 5 4 4 4 f f f f 4 4 5 5 5 f 5 5 5 5 4 5 . 
. . . . . 5 4 4 4 4 f f f 4 5 5 1 1 f 5 5 5 5 4 5 . 
. . . . . 5 4 4 4 f f f f 4 f 5 5 1 1 f 5 5 5 4 5 . 
. . . . . 5 4 4 4 f f f 4 4 f 5 5 5 1 5 f 5 5 4 5 . 
. . . . . 5 5 4 4 f f 4 4 4 4 e 5 5 1 1 f 5 5 4 5 . 
. . . . 5 5 5 4 4 4 4 4 4 4 4 e 5 5 5 1 f 5 5 4 5 . 
. . . . 1 5 5 4 4 4 4 4 4 4 4 e e 5 5 1 5 5 5 4 5 . 
. . . . 5 5 f 4 4 4 4 4 4 4 4 e e 5 5 5 5 f 5 4 5 . 
. . . . 5 5 f 4 4 4 4 4 4 4 4 e e e 5 4 4 f 5 4 5 . 
. . 4 4 4 4 f 4 4 4 4 4 4 4 4 e e e 4 5 4 4 f 4 5 . 
. . 4 5 4 f 5 4 4 4 4 4 4 5 5 5 e 4 4 5 5 4 f 4 5 . 
. . . 5 4 f 5 4 4 4 4 5 5 5 5 5 e e 4 4 4 4 f 4 5 . 
. . . 4 4 f 5 5 4 4 5 5 5 5 5 5 e e e 4 5 4 f 4 5 . 
. . . 4 4 f 5 5 4 4 5 1 5 5 5 5 e e e d 4 4 f 5 5 . 
. . . 4 4 f 5 5 f 5 5 1 5 5 5 5 e e e e 4 4 f 5 5 . 
. . . d d . 5 5 f f 5 1 1 5 5 5 e 4 f e d d f 5 5 . 
. . . . 4 . 5 5 5 f 5 5 1 5 5 5 4 f e e 5 5 4 5 5 . 
. . . . . 4 5 5 5 f f 5 1 1 5 4 4 f e e 5 5 4 5 5 . 
. . . . . 4 4 5 5 f f 5 5 5 4 4 4 f . e e 5 4 5 5 . 
. . . . . 4 4 4 5 f f f 5 4 4 4 f . . . e e 4 4 5 . 
. . . . . 4 4 4 4 f . . 4 4 4 4 f . . . . e 5 4 5 . 
. . . . . 4 5 4 4 f . . 4 4 4 4 f . . . . . 5 4 5 . 
. . . . . 4 5 4 4 f . . 4 5 4 4 f . . . . . 5 5 5 . 
. . . . . 4 5 5 4 f f . 4 5 4 4 f f . . . . . 5 5 . 
. . . . . 4 4 4 5 4 f . 4 4 5 5 4 f . . . . . . . . 
. . . . . . 4 5 5 4 f . . 4 4 5 4 f . . . . . . . . 
. . . . . . 4 5 4 4 f . . 4 4 4 4 f . . . . . . . . 
. . . . . . 4 5 4 4 f . . 4 5 4 4 f . . . . . . . . 
. . . . . . 4 5 4 4 f . . 4 4 4 4 f . . . . . . . . 
. . . . . . 4 5 4 4 f . . . 4 4 4 f . . . . . . . . 
. . . . . . 4 4 4 4 f . . . 4 4 4 f . . . . . . . . 
. . . . . . 4 4 4 4 f . . . 4 4 4 f . . . . . . . . 
. . . . . . 4 4 4 f . . . . 4 4 4 f . . . . . . . . 
. . . . . . 4 4 4 f . . . . 4 4 4 f . . . . . . . . 
. . . . . 4 4 5 4 f . . . . 4 5 4 f . . . . . . . . 
. . . . . 4 5 4 4 f . . . . 4 5 4 f . . . . . . . . 
. . . . . 4 5 4 4 f . . . . 4 5 4 f . . . . . . . . 
. . . . 4 4 4 4 4 . . . . 4 4 5 4 . . . . . . . . . 
. . . 4 4 4 4 4 . . . . 4 4 4 4 4 . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . f f f f f f . . . . . . . . . . . . 
. . . . . . . f 5 5 5 5 5 5 f . . . . . . . . . . . 
. . . . . . . 5 1 5 5 5 4 5 5 f f . . . . . . . . . 
. . . . . . . 5 1 5 4 4 4 4 5 5 5 e e . . 5 5 . . . 
. . . . . . . 5 5 5 d d d 4 4 5 5 e e . . 4 4 4 . . 
. . . . . . . . 5 d d d d 4 4 5 5 e e e 4 4 5 5 5 . 
. . . . . . . . d d f d d 4 4 5 5 e e 5 4 5 5 5 5 5 
. . . . . . . . d d d d d 4 5 5 4 e 5 4 5 5 5 5 5 5 
. . . . . . . . d d d d 5 5 5 5 4 e 4 4 5 4 4 4 4 5 
. . . . . . . . d d d 5 5 5 5 4 4 5 4 5 4 5 5 5 4 5 
. . . . . . . . f d 5 5 5 5 4 f f f 5 4 4 5 5 5 5 5 
. . . . . . . . f f d f f f f f f f f 5 5 5 4 5 5 5 
. . . . . . 4 4 4 4 4 f f f f f 4 4 4 4 5 5 4 5 5 5 
. . . . . . . 4 4 4 5 f f f f 4 4 4 4 5 5 4 4 5 5 5 
. . . . . . 1 5 5 5 f f f f f 4 4 5 f 5 4 4 5 5 4 5 
. . . . . . 5 5 4 5 f f f f f 4 5 5 f 5 4 5 5 5 4 5 
. . . . . . 5 4 4 4 f f f f 4 4 5 5 5 f 5 5 5 5 4 5 
. . . . . . 5 4 4 4 4 f f f 4 5 5 1 1 f 5 5 5 5 4 5 
. . . . . . 5 4 4 4 f f f f 4 f 5 5 1 1 f 5 5 5 4 5 
. . . . . . 5 4 4 4 f f f 4 4 f 5 5 5 1 5 f 5 5 4 5 
. . . . . . 5 5 4 4 f f 4 4 4 4 e 5 5 1 1 f 5 5 4 5 
. . . . . 5 5 5 4 4 4 4 4 4 4 4 e 5 5 5 1 f 5 5 4 5 
. . . . . 1 5 5 4 4 4 4 4 4 4 4 e e 5 5 1 5 5 5 4 5 
. . . . . 5 5 f 4 4 4 4 4 4 4 4 e e 5 5 5 5 f 5 4 5 
. . . . . 5 5 f 4 4 4 4 4 4 4 4 e e e 5 4 4 f 5 4 5 
. . . 4 4 4 4 f 4 4 4 4 4 4 4 4 e e e 4 5 4 4 f 4 5 
. . . 4 5 4 f 5 4 4 4 4 4 4 5 5 5 e 4 4 5 5 4 f 4 5 
. . . . 5 4 f 5 4 4 4 4 5 5 5 5 5 e e 4 4 4 4 f 4 5 
. . . . 4 4 f 5 5 4 4 5 5 5 5 5 5 e e e 4 5 4 f 4 5 
. . . . 4 4 f 5 5 4 4 5 1 5 5 5 5 e e e d 4 4 f 5 5 
. . . . 4 4 f 5 5 f 5 5 1 5 5 5 5 e e e e 4 4 f 5 5 
. . . . d d . 5 5 f f 5 1 1 5 5 5 e 4 f e d d f 5 5 
. . . . . 4 . 5 5 5 f 5 5 1 5 5 5 4 f e e 5 5 4 5 5 
. . . . . . 4 5 5 5 f f 5 1 1 5 4 4 f e e 5 5 4 5 5 
. . . . . . 4 4 5 5 f f 5 5 5 4 4 4 f . e e 5 4 5 5 
. . . . . . 4 4 4 5 f f f 5 4 4 4 f . . . e e 4 4 5 
. . . . . . 4 4 4 4 f . . 4 4 4 4 f . . . . e 5 4 5 
. . . . . . 4 5 4 4 f . . 4 4 4 4 f . . . . . 5 4 5 
. . . . . . 4 5 4 4 f . . 4 5 4 4 f . . . . . 5 5 5 
. . . . . . 4 5 5 4 f . . 4 5 4 4 f . . . . . . 5 5 
. . . . . . 4 4 5 4 f . . 4 5 4 4 f . . . . . . . . 
. . . . . . 4 4 5 4 f . . 4 5 5 4 f . . . . . . . . 
. . . . . . 4 5 5 4 f . . 4 4 5 4 f . . . . . . . . 
. . . . . . 4 5 4 4 f . . 4 4 4 4 f . . . . . . . . 
. . . . . . 4 5 4 4 f . . 4 5 4 4 f . . . . . . . . 
. . . . . . 4 5 4 4 f . . 4 4 4 4 f . . . . . . . . 
. . . . . . 4 5 4 4 f . . . 4 4 4 f . . . . . . . . 
. . . . . . 4 4 4 4 f . . . 4 4 4 f . . . . . . . . 
. . . . . . 4 4 4 4 f . . . 4 4 4 f . . . . . . . . 
. . . . . . 4 4 4 f . . . . 4 4 4 f . . . . . . . . 
. . . . . . 4 4 4 f . . . . 4 4 4 f . . . . . . . . 
. . . . . 4 4 5 4 f . . . . 4 5 4 f . . . . . . . . 
. . . . . 4 5 4 4 f . . . . 4 5 4 f . . . . . . . . 
. . . . . 4 5 4 4 f . . . . 4 5 4 f . . . . . . . . 
. . . . 4 4 4 4 4 . . . . 4 4 5 4 . . . . . . . . . 
. . . 4 4 4 4 4 . . . . 4 4 4 4 4 . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
`],
            150,
            true
            )
        } else if (lasso == 1) {
            animation.runImageAnimation(
            wwSprite,
            [img`
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . 8 8 8 8 8 8 8 . . . . . . . . . . . 
. . . . . . . 8 f f f f f f f 8 . . . . . . . . . . 
. . . . . . . f f f f f f f f f 8 . . . . . . . . . 
. . . . . . . f f f f f f f f f f 8 . . . . . . . . 
. . . . . . . f 5 5 5 f f f f f f f 8 . . . . . . . 
. . . . . . . f 5 d d d f f f f f f 8 . . . . . . . 
. . . . . . . . d d d d d f f f f f f 8 . . . . . . 
. . . . . . . . d d f d d d d f f f f 8 . . . . . . 
. . . . . . . . d d d d d d d f f f f f 8 . . . . . 
. . . . . . . . d d d d d d f f f f f f 8 . . . . . 
. . . . . . . . d d d d d d f f f f f f f 8 . . . . 
. . . . . . . . . d d d d f f f f f f f f 8 . . . . 
. . . . . . . . . . d d d f f f f f f f f f 8 . . . 
. . . . . . . . . d d d d d d e f f f f f f 8 . . . 
. . . . . . . d d d d d d d e e d d f f f f 8 . . . 
. . . . . d d d d d d 5 5 e e d d d f f f f 8 . . . 
. . . . . d d d 5 5 5 2 2 e e d d d f f f f 8 . . . 
. . . . . d d 5 5 2 2 e e e 2 d d d f f f f 8 . . . 
. . . . . d d 2 2 2 e e 2 2 2 d d d d f f 8 . . . . 
. . . . . d d 2 2 2 e 2 2 2 2 2 d d d f 8 . . . . . 
. . . . . d d 2 2 2 e 2 2 2 2 2 d d d f 8 . . . . . 
. . . . . d 5 2 2 e e 2 2 2 2 2 d d d d f . . . . . 
. . . . . d 5 2 e e 2 2 2 2 2 2 f d d d f . . . . . 
. . . . d d d e e 2 2 2 2 2 2 2 f d d d f . . . . . 
. . . . d d d e 2 2 2 2 2 2 2 f . d d d f . . . . . 
. . . . d d f e 2 2 2 2 2 2 f . . d d d f . . . . . 
. . . 5 5 5 f 5 5 2 2 2 2 2 8 8 f . 5 5 5 f . . . . 
. . . 5 5 5 f 8 5 5 5 2 5 5 8 8 8 f 5 5 5 f . . . . 
. . . 5 5 5 f 8 8 8 5 5 5 8 8 8 8 8 f 5 5 5 f . . . 
. . . 5 5 f . 8 8 8 8 5 5 8 f 8 8 8 f 5 5 5 f . . . 
. . . 5 5 f . 8 f 8 8 8 f 8 f 8 8 8 8 . 5 5 f . . . 
. . d d d f . 8 8 f 8 8 f 8 8 f 8 8 8 . 5 5 f . . . 
. . d d d f . 8 8 f 8 8 8 8 8 8 f 8 8 d d d f . . . 
. . d d d f . 8 8 f f 8 8 f 8 8 8 f 8 f d d f . . . 
. . . . . . . 8 8 f f f 8 f 8 8 8 8 f . d d f . . . 
. . . . . . . 8 8 d d f f 8 f 8 8 d f . . . . . . . 
. . . . . . . 8 d d d d f f f 8 d d f . . . . . . . 
. . . . . . . . d d d d f f d d d d f . . . . . . . 
. . . . . . . . d d d d f f d d d d f f . . . . . . 
. . . . . . . . d d d d d f . d d d d f . . . . . . 
. . . . . . . 5 5 5 d d d f . 5 d d d f . . . . . . 
. . . . . . . 2 2 5 5 5 d f 5 5 5 d d f . . . . . . 
. . . . . . . 2 2 2 5 5 f . 5 5 5 5 d f . . . . . . 
. . . . . . . 2 2 2 2 5 f . 2 2 2 5 5 f . . . . . . 
. . . . . . . . 2 2 2 2 f . 2 2 2 2 5 f . . . . . . 
. . . . . . . . 2 2 2 2 f . . 2 2 2 2 f . . . . . . 
. . . . . . . . 2 2 2 2 2 f . 2 2 2 2 f . . . . . . 
. . . . . . . . . 2 2 2 2 f . 2 2 2 2 2 f . . . . . 
. . . . . . . . . 2 2 2 2 f . . 2 2 2 2 f . . . . . 
. . . . . . . . . 2 2 2 2 f . . 2 2 2 2 f . . . . . 
. . . . . . . . . 2 2 2 f . . . 2 2 2 f . . . . . . 
. . . . . . . . . 2 2 2 f . . . 2 2 2 f . . . . . . 
. . . . . . . . . 2 2 2 f . . . 2 2 2 f . . . . . . 
. . . . . . . . 2 2 2 2 f . . 2 2 2 2 f . . . . . . 
. . . . . . . 2 2 2 2 f . . 2 2 2 2 f . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . 8 8 8 8 8 8 8 . . . . . . . . . . . . 
. . . . . . 8 f f f f f f f 8 . . . . . . . . . . . 
. . . . . . f f f f f f f f f 8 . . . . . . . . . . 
. . . . . . f f f f f f f f f f 8 . . . . . . . . . 
. . . . . . f 5 5 5 f f f f f f f 8 . . . . . . . . 
. . . . . . f 5 d d d f f f f f f 8 . . . . . . . . 
. . . . . . . d d d d d f f f f f f 8 . . . . . . . 
. . . . . . . d d f d d d d f f f f 8 . . . . . . . 
. . . . . . . d d d d d d d f f f f f 8 . . . . . . 
. . . . . . . d d d d d d f f f f f f 8 . . . . . . 
. . . . . . . d d d d d d f f f f f f f 8 . . . . . 
. . . . . . . . d d d d f f f f f f f f 8 . . . . . 
. . . . . . . . . d d d f f f f f f f f f 8 . . . . 
. . . . . . . . d d d d d d e f f f f f f 8 . . . . 
. . . . . . d d d d d d d e e d d f f f f 8 . . . . 
. . . . d d d d d d 5 5 e e d d d f f f f 8 . . . . 
. . . . d d d 5 5 5 2 2 e e d d d f f f f 8 . . . . 
. . . . d d 5 5 2 2 e e e 2 d d d f f f f 8 . . . . 
. . . . d d 2 2 2 e e 2 2 2 d d d d f f 8 . . . . . 
. . . . d d 2 2 2 e 2 2 2 2 2 d d d f 8 . . . . . . 
. . . . d d 2 2 2 e 2 2 2 2 2 d d d f 8 . . . . . . 
. . . . d 5 2 2 e e 2 2 2 2 2 d d d d f . . . . . . 
. . . . d 5 2 e e 2 2 2 2 2 2 f d d d f . . . . . . 
. . . d d d e e 2 2 2 2 2 2 2 f d d d f . . . . . . 
. . . d d d e 2 2 2 2 2 2 2 f . d d d f . . . . . . 
. . . d d f e 2 2 2 2 2 2 f . . d d d f . . . . . . 
. . 5 5 5 f 5 5 2 2 2 2 2 8 8 f . 5 5 5 f . . . . . 
. . 5 5 5 f 8 5 5 5 2 5 5 8 8 8 f 5 5 5 f . . . . . 
. . 5 5 5 f 8 8 8 5 5 5 8 8 8 8 8 f 5 5 5 f . . . . 
. . 5 5 f . 8 8 8 8 5 5 8 f 8 8 8 f 5 5 5 f . . . . 
. . 5 5 f . 8 f 8 8 8 f 8 f 8 8 8 8 . 5 5 f . . . . 
. d d d f . 8 8 f 8 8 f 8 8 f 8 8 8 . 5 5 f . . . . 
. d d d f . 8 8 f 8 8 8 8 8 8 f 8 8 d d d f . . . . 
. d d d f . 8 8 f f 8 8 f 8 8 8 f 8 f d d f . . . . 
. . . . . . 8 8 f f f 8 f 8 8 8 8 f . d d f . . . . 
. . . . . . 8 8 d d f f 8 f 8 8 d f . . . . . . . . 
. . . . . . 8 d d d d f f f 8 d d f . . . . . . . . 
. . . . . . . d d d d f f d d d d d f . . . . . . . 
. . . . . . . d d d d d f d d d d d f . . . . . . . 
. . . . . . . 5 5 5 d d f . 5 5 d d f . . . . . . . 
. . . . . . . 2 2 5 5 5 f . 5 5 5 d f . . . . . . . 
. . . . . . . 2 2 2 5 5 f . 2 5 5 5 f . . . . . . . 
. . . . . . . 2 2 2 2 5 f . 2 2 2 5 f . . . . . . . 
. . . . . . . . 2 2 2 2 f . 2 2 2 2 5 f . . . . . . 
. . . . . . . . 2 2 2 2 f . . 2 2 2 2 f . . . . . . 
. . . . . . . . . 2 2 2 2 f . 2 2 2 2 2 f . . . . . 
. . . . . . . . . 2 2 2 2 f . . 2 2 2 2 f . . . . . 
. . . . . . . . . 2 2 2 2 f . . 2 2 2 2 f . . . . . 
. . . . . . . . . 2 2 2 2 f . . 2 2 2 2 f . . . . . 
. . . . . . . . . 2 2 2 f . . . 2 2 2 f . . . . . . 
. . . . . . . . . 2 2 2 f . . . 2 2 2 f . . . . . . 
. . . . . . . . . 2 2 2 f . . . 2 2 2 f . . . . . . 
. . . . . . . . 2 2 2 2 f . . 2 2 2 2 f . . . . . . 
. . . . . . . 2 2 2 2 f . . 2 2 2 2 f . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . 8 8 8 8 8 8 8 . . . . . . . . . . . 
. . . . . . . 8 f f f f f f f 8 . . . . . . . . . . 
. . . . . . . f f f f f f f f f 8 . . . . . . . . . 
. . . . . . . f f f f f f f f f f 8 . . . . . . . . 
. . . . . . . f 5 5 5 f f f f f f f 8 . . . . . . . 
. . . . . . . f 5 d d d f f f f f f 8 . . . . . . . 
. . . . . . . . d d d d d f f f f f f 8 . . . . . . 
. . . . . . . . d d f d d d d f f f f 8 . . . . . . 
. . . . . . . . d d d d d d d f f f f f 8 . . . . . 
. . . . . . . . d d d d d d f f f f f f 8 . . . . . 
. . . . . . . . d d d d d d f f f f f f f 8 . . . . 
. . . . . . . . . d d d d f f f f f f f f 8 . . . . 
. . . . . . . . . . d d d f f f f f f f f f 8 . . . 
. . . . . . . . . d d d d d d e f f f f f f 8 . . . 
. . . . . . . d d d d d d d e e d d f f f f 8 . . . 
. . . . . d d d d d d 5 5 e e d d d f f f f 8 . . . 
. . . . . d d d 5 5 5 2 2 e e d d d f f f f 8 . . . 
. . . . . d d 5 5 2 2 e e e 2 d d d f f f f 8 . . . 
. . . . . d d 2 2 2 e e 2 2 2 d d d d f f 8 . . . . 
. . . . . d d 2 2 2 e 2 2 2 2 2 d d d f 8 . . . . . 
. . . . . d d 2 2 2 e 2 2 2 2 2 d d d f 8 . . . . . 
. . . . . d 5 2 2 e e 2 2 2 2 2 d d d d f . . . . . 
. . . . . d 5 2 e e 2 2 2 2 2 2 f d d d f . . . . . 
. . . . d d d e e 2 2 2 2 2 2 2 f d d d f . . . . . 
. . . . d d d e 2 2 2 2 2 2 2 f . d d d f . . . . . 
. . . . d d f e 2 2 2 2 2 2 f . . d d d f . . . . . 
. . . 5 5 5 f 5 5 2 2 2 2 2 8 8 f . 5 5 5 f . . . . 
. . . 5 5 5 f 8 5 5 5 2 5 5 8 8 8 f 5 5 5 f . . . . 
. . . 5 5 5 f 8 8 8 5 5 5 8 8 8 8 8 f 5 5 5 f . . . 
. . . 5 5 f . 8 8 8 8 5 5 8 f 8 8 8 f 5 5 5 f . . . 
. . . 5 5 f . 8 f 8 8 8 f 8 f 8 8 8 8 . 5 5 f . . . 
. . d d d f . 8 8 f 8 8 f 8 8 f 8 8 8 . 5 5 f . . . 
. . d d d f . 8 8 f 8 8 8 8 8 8 f 8 8 d d d f . . . 
. . d d d f . 8 8 f f 8 8 f 8 8 8 f 8 f d d f . . . 
. . . . . . . 8 8 f f f 8 f 8 8 8 8 f . d d f . . . 
. . . . . . . 8 8 d d f f 8 f 8 8 d f . . . . . . . 
. . . . . . . 8 d d d d f f f 8 d d f . . . . . . . 
. . . . . . . . d d d d f f d d d d f . . . . . . . 
. . . . . . . . d d d d f f d d d d f f . . . . . . 
. . . . . . . . d d d d d f . d d d d f . . . . . . 
. . . . . . . 5 5 5 d d d f . 5 d d d f . . . . . . 
. . . . . . . 2 2 5 5 5 d f 5 5 5 d d f . . . . . . 
. . . . . . . 2 2 2 5 5 f . 5 5 5 5 d f . . . . . . 
. . . . . . . 2 2 2 2 5 f . 2 2 2 5 5 f . . . . . . 
. . . . . . . . 2 2 2 2 f . 2 2 2 2 5 f . . . . . . 
. . . . . . . . 2 2 2 2 f . . 2 2 2 2 f . . . . . . 
. . . . . . . . 2 2 2 2 2 f . 2 2 2 2 f . . . . . . 
. . . . . . . . . 2 2 2 2 f . 2 2 2 2 2 f . . . . . 
. . . . . . . . . 2 2 2 2 f . . 2 2 2 2 f . . . . . 
. . . . . . . . . 2 2 2 2 f . . 2 2 2 2 f . . . . . 
. . . . . . . . . 2 2 2 f . . . 2 2 2 f . . . . . . 
. . . . . . . . . 2 2 2 f . . . 2 2 2 f . . . . . . 
. . . . . . . . . 2 2 2 f . . . 2 2 2 f . . . . . . 
. . . . . . . . 2 2 2 2 f . . 2 2 2 2 f . . . . . . 
. . . . . . . 2 2 2 2 f . . 2 2 2 2 f . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . 8 8 8 8 8 8 8 . . . . . . . . . . 
. . . . . . . . 8 f f f f f f f 8 . . . . . . . . . 
. . . . . . . . f f f f f f f f f 8 . . . . . . . . 
. . . . . . . . f f f f f f f f f f 8 . . . . . . . 
. . . . . . . . f 5 5 5 f f f f f f f 8 . . . . . . 
. . . . . . . . f 5 d d d f f f f f f 8 . . . . . . 
. . . . . . . . . d d d d d f f f f f f 8 . . . . . 
. . . . . . . . . d d f d d d d f f f f 8 . . . . . 
. . . . . . . . . d d d d d d d f f f f f 8 . . . . 
. . . . . . . . . d d d d d d f f f f f f 8 . . . . 
. . . . . . . . . d d d d d d f f f f f f f 8 . . . 
. . . . . . . . . . d d d d f f f f f f f f 8 . . . 
. . . . . . . . . . . d d d f f f f f f f f f 8 . . 
. . . . . . . . . . d d d d d d e f f f f f f 8 . . 
. . . . . . . . d d d d d d d e e d d f f f f 8 . . 
. . . . . . d d d d d d 5 5 e e d d d f f f f 8 . . 
. . . . . . d d d 5 5 5 2 2 e e d d d f f f f 8 . . 
. . . . . . d d 5 5 2 2 e e e 2 d d d f f f f 8 . . 
. . . . . . d d 2 2 2 e e 2 2 2 d d d d f f 8 . . . 
. . . . . . d d 2 2 2 e 2 2 2 2 2 d d d f 8 . . . . 
. . . . . . d d 2 2 2 e 2 2 2 2 2 d d d f 8 . . . . 
. . . . . . d 5 2 2 e e 2 2 2 2 2 d d d d f . . . . 
. . . . . . d 5 2 e e 2 2 2 2 2 2 f d d d f . . . . 
. . . . . d d d e e 2 2 2 2 2 2 2 f d d d f . . . . 
. . . . . d d d e 2 2 2 2 2 2 2 f . d d d f . . . . 
. . . . . d d f e 2 2 2 2 2 2 f . . d d d f . . . . 
. . . . 5 5 5 f 5 5 2 2 2 2 2 8 8 f . 5 5 5 f . . . 
. . . . 5 5 5 f 8 5 5 5 2 5 5 8 8 8 f 5 5 5 f . . . 
. . . . 5 5 5 f 8 8 8 5 5 5 8 8 8 8 8 f 5 5 5 f . . 
. . . . 5 5 f . 8 8 8 8 5 5 8 f 8 8 8 f 5 5 5 f . . 
. . . . 5 5 f . 8 f 8 8 8 f 8 f 8 8 8 8 . 5 5 f . . 
. . . d d d f . 8 8 f 8 8 f 8 8 f 8 8 8 . 5 5 f . . 
. . . d d d f . 8 8 f 8 8 8 8 8 8 f 8 8 d d d f . . 
. . . d d d f . 8 8 f f 8 8 f 8 8 8 f 8 f d d f . . 
. . . . . . . . 8 8 f f f 8 f 8 8 8 8 f . d d f . . 
. . . . . . . . 8 8 d d f f 8 f 8 8 d f . . . . . . 
. . . . . . . . 8 d d d d f f f 8 d d f . . . . . . 
. . . . . . . . . d d d d f f d d d d f . . . . . . 
. . . . . . . . . d d d d f . d d d d f . . . . . . 
. . . . . . . . . d d d d f . d d d d f . . . . . . 
. . . . . . . . . d d d d f . d d d d f . . . . . . 
. . . . . . . . 5 5 d d d f . 5 d d d f . . . . . . 
. . . . . . . . 2 5 5 5 d f . 5 5 d d f . . . . . . 
. . . . . . . . 2 2 5 5 5 f . 5 5 5 d f . . . . . . 
. . . . . . . . 2 2 2 5 5 f . 2 2 5 5 f . . . . . . 
. . . . . . . . 2 2 2 2 5 f . 2 2 2 5 5 f . . . . . 
. . . . . . . . 2 2 2 2 2 f . 2 2 2 2 5 f . . . . . 
. . . . . . . . . 2 2 2 2 f . 2 2 2 2 2 f . . . . . 
. . . . . . . . . 2 2 2 2 f . . 2 2 2 2 f . . . . . 
. . . . . . . . . 2 2 2 2 f . . 2 2 2 2 f . . . . . 
. . . . . . . . . 2 2 2 2 f . . 2 2 2 2 f . . . . . 
. . . . . . . . . 2 2 2 f . . . 2 2 2 f . . . . . . 
. . . . . . . . . 2 2 2 f . . . 2 2 2 f . . . . . . 
. . . . . . . . . 2 2 2 f . . . 2 2 2 f . . . . . . 
. . . . . . . . 2 2 2 2 f . . 2 2 2 2 f . . . . . . 
. . . . . . . 2 2 2 2 f . . 2 2 2 2 f . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
`],
            150,
            true
            )
        } else {
            animation.runImageAnimation(
            wwSprite,
            [img`
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . 8 8 8 8 8 8 . . . . . . . . . . . . . 
. . . . . . 8 f f f f f f 8 . f f f 8 . . . . . . . 
. . . . . . f f f f f f f f 8 f f f f 8 . . . . . . 
. . . . . . f f f f f f f f f f f f f 8 . . . . . . 
. . . . . . f d d d d d f f f f f f f f 8 . . . . . 
. . . . . . . d d d d d f f f f f f f f 8 . . . . . 
. . . . . . . d d f d d d d f f f f f f f 8 . . . . 
. . . . . . . d d d d d d d f 8 f f f f f 8 . . . . 
. . . . . . . d d d d d d f f 8 . f f f f f 8 . . . 
. . . . . . . d d d d d d f f 8 . f f f f f 8 . . . 
. . . . . . . . d d d d f 8 . . . f f f f f 8 . . . 
. . . . . . . . . d d d 1 1 1 . . . f f f f 8 . . . 
. . . . . . . . 1 d d 1 1 1 e e e . f f f f 8 . . . 
. . . . . . e e d d 1 1 1 e e e e . f f f f f 8 . . 
. . . . . e e 1 d 1 1 8 e e e e e . f f f f f 8 . . 
. . . . . e e 1 1 8 8 8 e e e e e . f f f f f 8 . . 
. . . . . e e 1 8 8 8 8 e e e e e e . f f f f 8 . . 
. . . . . e 8 8 8 8 8 8 e e e e e e . . f f 8 . . . 
. . . . . e 8 8 8 8 8 8 e e f e e e e . f f 8 . . . 
. . . . . e 8 8 8 8 8 8 e e f e e e e e . f 8 . . . 
. . . . . e 8 8 8 8 8 8 e e e f e e e e f . . . . . 
. . . . e e e 8 8 8 8 8 e e e f e e e e f . . . . . 
. . . . e e e 8 8 8 8 8 e e e e f e e e e . . . . . 
. . . . e f e 8 8 8 8 8 e e e e f e e e e f . . . . 
. . . . e f e 8 8 8 8 8 e e e e f . e e e f . . . . 
. . . e e f e 8 8 8 8 8 e e e e e f e e e e f . . . 
. . . e e f 2 2 2 2 2 2 e e e e e f e e e e f . . . 
. . . e f e 2 2 2 2 2 2 e e e e e f . e e e f . . . 
. . . e f e 2 2 2 2 2 2 2 e e e e f . e e e f . . . 
. . . d d e 2 2 2 2 2 2 2 2 e e e f . d d d f . . . 
. . . d d e 2 2 f 2 2 2 2 2 2 2 e f . . d d f . . . 
. . . d d . 2 2 f f 2 2 2 2 2 2 f . . . d d f . . . 
. . . . . . 2 2 2 f 2 2 2 2 2 2 f . . . . . . . . . 
. . . . . . 2 2 2 f f 2 2 2 2 2 f . . . . . . . . . 
. . . . . . 2 2 2 f f 2 2 2 2 2 f . . . . . . . . . 
. . . . . . 2 2 2 f f f 2 2 2 2 f . . . . . . . . . 
. . . . . . 2 2 2 f . . 2 2 2 2 f . . . . . . . . . 
. . . . . . 2 2 2 f . . 2 2 2 2 f . . . . . . . . . 
. . . . . . 2 2 2 2 f . 2 2 2 2 f . . . . . . . . . 
. . . . . . 2 2 2 2 f . 2 2 2 2 f . . . . . . . . . 
. . . . . . 2 2 2 2 f . 2 2 2 2 f . . . . . . . . . 
. . . . . 2 2 2 2 2 f . 2 2 2 2 f . . . . . . . . . 
. . . . . 2 2 2 2 2 f . 2 2 2 2 2 f . . . . . . . . 
. . . . . 2 2 2 2 2 f . 2 2 2 2 2 f . . . . . . . . 
. . . . . 2 2 2 2 f f . 2 2 2 2 2 f f . . . . . . . 
. . . . . . 2 2 2 2 f . . . 2 2 2 2 f . . . . . . . 
. . . . . . 2 2 2 2 f . . . 2 2 2 2 f . . . . . . . 
. . . . . . 2 2 2 2 f . . . 2 2 2 2 f . . . . . . . 
. . . . . . 2 2 2 f . . . . 2 2 2 2 f . . . . . . . 
. . . . . . 2 2 2 f . . . . 2 2 2 2 f . . . . . . . 
. . . . . 2 2 2 2 f . . . . 2 2 2 2 f . . . . . . . 
. . . . . 2 2 2 2 f . . . . 2 2 2 2 f . . . . . . . 
. . . . . 2 2 2 2 f . . . . 2 2 2 2 f . . . . . . . 
. . . . f f f f f . . . . f f f f . . . . . . . . . 
. . . f f f f f . . . . f f f f f . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . 8 8 8 8 8 8 . . . . . . . . . . . . . 
. . . . . . 8 f f f f f f 8 . f f f 8 . . . . . . . 
. . . . . . f f f f f f f f 8 f f f f 8 . . . . . . 
. . . . . . f f f f f f f f f f f f f 8 . . . . . . 
. . . . . . f d d d d d f f f f f f f f 8 . . . . . 
. . . . . . . d d d d d f f f f f f f f 8 . . . . . 
. . . . . . . d d f d d d d f f f f f f f 8 . . . . 
. . . . . . . d d d d d d d f 8 f f f f f 8 . . . . 
. . . . . . . d d d d d d f f 8 . f f f f f 8 . . . 
. . . . . . . d d d d d d f f 8 . f f f f f 8 . . . 
. . . . . . . . d d d d f 8 . . . f f f f f 8 . . . 
. . . . . . . . . d d d 1 1 1 . . . f f f f 8 . . . 
. . . . . . . . 1 d d 1 1 1 e e e . f f f f 8 . . . 
. . . . . . e e d d 1 1 1 e e e e . f f f f f 8 . . 
. . . . . e e 1 d 1 1 8 e e e e e . f f f f f 8 . . 
. . . . . e e 1 1 8 8 8 e e e e e . f f f f f 8 . . 
. . . . . e e 1 8 8 8 8 e e e e e e . f f f f 8 . . 
. . . . . e 8 8 8 8 8 8 e e e e e e . . f f 8 . . . 
. . . . . e 8 8 8 8 8 8 e e f e e e e . f f 8 . . . 
. . . . . e 8 8 8 8 8 8 e e f e e e e e . f 8 . . . 
. . . . . e 8 8 8 8 8 8 e e e f e e e e f . . . . . 
. . . . e e e 8 8 8 8 8 e e e f e e e e f . . . . . 
. . . . e e e 8 8 8 8 8 e e e e f e e e e . . . . . 
. . . . e f e 8 8 8 8 8 e e e e f e e e e f . . . . 
. . . . e f e 8 8 8 8 8 e e e e f . e e e f . . . . 
. . . e e f e 8 8 8 8 8 e e e e e f e e e e f . . . 
. . . e e f 2 2 2 2 2 2 e e e e e f e e e e f . . . 
. . . e f e 2 2 2 2 2 2 e e e e e f . e e e f . . . 
. . . e f e 2 2 2 2 2 2 2 e e e e f . e e e f . . . 
. . . d d e 2 2 2 2 2 2 2 2 e e e f . d d d f . . . 
. . . d d e 2 2 f 2 2 2 2 2 2 2 e f . . d d f . . . 
. . . d d . 2 2 f f 2 2 2 2 2 2 f . . . d d f . . . 
. . . . . . 2 2 2 f 2 2 2 2 2 2 f . . . . . . . . . 
. . . . . . 2 2 2 f f 2 2 2 2 2 f . . . . . . . . . 
. . . . . . 2 2 2 f f 2 2 2 2 2 f . . . . . . . . . 
. . . . . . 2 2 2 f f f 2 2 2 2 f . . . . . . . . . 
. . . . . . 2 2 2 f . . 2 2 2 2 f . . . . . . . . . 
. . . . . . 2 2 2 f . . 2 2 2 2 f . . . . . . . . . 
. . . . . . 2 2 2 2 f . 2 2 2 2 f . . . . . . . . . 
. . . . . . 2 2 2 2 f . 2 2 2 2 f . . . . . . . . . 
. . . . . . 2 2 2 2 f . 2 2 2 2 f . . . . . . . . . 
. . . . . 2 2 2 2 2 f . 2 2 2 2 f . . . . . . . . . 
. . . . . 2 2 2 2 2 f . 2 2 2 2 2 f . . . . . . . . 
. . . . . 2 2 2 2 f f . 2 2 2 2 2 f f . . . . . . . 
. . . . . . 2 2 2 2 f . . . 2 2 2 2 f . . . . . . . 
. . . . . . 2 2 2 2 f . . . 2 2 2 2 f . . . . . . . 
. . . . . . 2 2 2 2 f . . . 2 2 2 2 f . . . . . . . 
. . . . . . 2 2 2 f . . . . 2 2 2 2 f . . . . . . . 
. . . . . . 2 2 2 f . . . . 2 2 2 2 f . . . . . . . 
. . . . . 2 2 2 2 f . . . . 2 2 2 2 f . . . . . . . 
. . . . . 2 2 2 2 f . . . . 2 2 2 2 f . . . . . . . 
. . . . . 2 2 2 2 f . . . . 2 2 2 2 f . . . . . . . 
. . . . f f f f f . . . . f f f f . . . . . . . . . 
. . . f f f f f . . . . f f f f f . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . 8 8 8 8 8 8 . . . . . . . . . . . . . 
. . . . . . 8 f f f f f f 8 . f f f 8 . . . . . . . 
. . . . . . f f f f f f f f 8 f f f f 8 . . . . . . 
. . . . . . f f f f f f f f f f f f f 8 . . . . . . 
. . . . . . f d d d d d f f f f f f f f 8 . . . . . 
. . . . . . . d d d d d f f f f f f f f 8 . . . . . 
. . . . . . . d d f d d d d f f f f f f f 8 . . . . 
. . . . . . . d d d d d d d f 8 f f f f f 8 . . . . 
. . . . . . . d d d d d d f f 8 . f f f f f 8 . . . 
. . . . . . . d d d d d d f f 8 . f f f f f 8 . . . 
. . . . . . . . d d d d f 8 . . . f f f f f 8 . . . 
. . . . . . . . . d d d 1 1 1 . . . f f f f 8 . . . 
. . . . . . . . 1 d d 1 1 1 e e e . f f f f 8 . . . 
. . . . . . e e d d 1 1 1 e e e e . f f f f f 8 . . 
. . . . . e e 1 d 1 1 8 e e e e e . f f f f f 8 . . 
. . . . . e e 1 1 8 8 8 e e e e e . f f f f f 8 . . 
. . . . . e e 1 8 8 8 8 e e e e e e . f f f f 8 . . 
. . . . . e 8 8 8 8 8 8 e e e e e e . . f f 8 . . . 
. . . . . e 8 8 8 8 8 8 e e f e e e e . f f 8 . . . 
. . . . . e 8 8 8 8 8 8 e e f e e e e e . f 8 . . . 
. . . . . e 8 8 8 8 8 8 e e e f e e e e f . . . . . 
. . . . e e e 8 8 8 8 8 e e e f e e e e f . . . . . 
. . . . e e e 8 8 8 8 8 e e e e f e e e e . . . . . 
. . . . e f e 8 8 8 8 8 e e e e f e e e e f . . . . 
. . . . e f e 8 8 8 8 8 e e e e f . e e e f . . . . 
. . . e e f e 8 8 8 8 8 e e e e e f e e e e f . . . 
. . . e e f 2 2 2 2 2 2 e e e e e f e e e e f . . . 
. . . e f e 2 2 2 2 2 2 e e e e e f . e e e f . . . 
. . . e f e 2 2 2 2 2 2 2 e e e e f . e e e f . . . 
. . . d d e 2 2 2 2 2 2 2 2 e e e f . d d d f . . . 
. . . d d e 2 2 f 2 2 2 2 2 2 2 e f . . d d f . . . 
. . . d d . 2 2 f f 2 2 2 2 2 2 f . . . d d f . . . 
. . . . . . 2 2 2 f 2 2 2 2 2 2 f . . . . . . . . . 
. . . . . . 2 2 2 f f 2 2 2 2 2 f . . . . . . . . . 
. . . . . . 2 2 2 f f 2 2 2 2 2 f . . . . . . . . . 
. . . . . . 2 2 2 f f f 2 2 2 2 f . . . . . . . . . 
. . . . . . 2 2 2 f . . 2 2 2 2 f . . . . . . . . . 
. . . . . . 2 2 2 f . . 2 2 2 2 f . . . . . . . . . 
. . . . . . 2 2 2 2 f . 2 2 2 2 f . . . . . . . . . 
. . . . . . 2 2 2 2 f . 2 2 2 2 f . . . . . . . . . 
. . . . . . 2 2 2 2 f . 2 2 2 2 f . . . . . . . . . 
. . . . . 2 2 2 2 2 f . 2 2 2 2 f . . . . . . . . . 
. . . . . 2 2 2 2 2 f . 2 2 2 2 2 f . . . . . . . . 
. . . . . 2 2 2 2 2 f . 2 2 2 2 2 f . . . . . . . . 
. . . . . 2 2 2 2 f f . 2 2 2 2 2 f f . . . . . . . 
. . . . . . 2 2 2 2 f . . . 2 2 2 2 f . . . . . . . 
. . . . . . 2 2 2 2 f . . . 2 2 2 2 f . . . . . . . 
. . . . . . 2 2 2 2 f . . . 2 2 2 2 f . . . . . . . 
. . . . . . 2 2 2 f . . . . 2 2 2 2 f . . . . . . . 
. . . . . . 2 2 2 f . . . . 2 2 2 2 f . . . . . . . 
. . . . . 2 2 2 2 f . . . . 2 2 2 2 f . . . . . . . 
. . . . . 2 2 2 2 f . . . . 2 2 2 2 f . . . . . . . 
. . . . . 2 2 2 2 f . . . . 2 2 2 2 f . . . . . . . 
. . . . f f f f f . . . . f f f f . . . . . . . . . 
. . . f f f f f . . . . f f f f f . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . 8 8 8 8 8 8 . . . . . . . . . . . . 
. . . . . . . 8 f f f f f f 8 . f f f 8 . . . . . . 
. . . . . . . f f f f f f f f 8 f f f f 8 . . . . . 
. . . . . . . f f f f f f f f f f f f f 8 . . . . . 
. . . . . . . f d d d d d f f f f f f f f 8 . . . . 
. . . . . . . . d d d d d f f f f f f f f 8 . . . . 
. . . . . . . . d d f d d d d f f f f f f f 8 . . . 
. . . . . . . . d d d d d d d f 8 f f f f f 8 . . . 
. . . . . . . . d d d d d d f f 8 . f f f f f 8 . . 
. . . . . . . . d d d d d d f f 8 . f f f f f 8 . . 
. . . . . . . . . d d d d f 8 . . . f f f f f 8 . . 
. . . . . . . . . . d d d 1 1 1 . . . f f f f 8 . . 
. . . . . . . . . 1 d d 1 1 1 e e e . f f f f 8 . . 
. . . . . . . e e d d 1 1 1 e e e e . f f f f f 8 . 
. . . . . . e e 1 d 1 1 8 e e e e e . f f f f f 8 . 
. . . . . . e e 1 1 8 8 8 e e e e e . f f f f f 8 . 
. . . . . . e e 1 8 8 8 8 e e e e e e . f f f f 8 . 
. . . . . . e 8 8 8 8 8 8 e e e e e e . . f f 8 . . 
. . . . . . e 8 8 8 8 8 8 e e f e e e e . f f 8 . . 
. . . . . . e 8 8 8 8 8 8 e e f e e e e e . f 8 . . 
. . . . . . e 8 8 8 8 8 8 e e e f e e e e f . . . . 
. . . . . e e e 8 8 8 8 8 e e e f e e e e f . . . . 
. . . . . e e e 8 8 8 8 8 e e e e f e e e e . . . . 
. . . . . e f e 8 8 8 8 8 e e e e f e e e e f . . . 
. . . . . e f e 8 8 8 8 8 e e e e f . e e e f . . . 
. . . . e e f e 8 8 8 8 8 e e e e e f e e e e f . . 
. . . . e e f 2 2 2 2 2 2 e e e e e f e e e e f . . 
. . . . e f e 2 2 2 2 2 2 e e e e e f . e e e f . . 
. . . . e f e 2 2 2 2 2 2 2 e e e e f . e e e f . . 
. . . . d d e 2 2 2 2 2 2 2 2 e e e f . d d d f . . 
. . . . d d e 2 2 f 2 2 2 2 2 2 2 e f . . d d f . . 
. . . . d d . 2 2 f f 2 2 2 2 2 2 f . . . d d f . . 
. . . . . . . 2 2 2 f 2 2 2 2 2 2 f . . . . . . . . 
. . . . . . . 2 2 2 f f 2 2 2 2 2 f . . . . . . . . 
. . . . . . . 2 2 2 f f 2 2 2 2 2 f . . . . . . . . 
. . . . . . . 2 2 2 f f f 2 2 2 2 f . . . . . . . . 
. . . . . . . 2 2 2 f . . 2 2 2 2 f . . . . . . . . 
. . . . . . . 2 2 2 f . . 2 2 2 2 f . . . . . . . . 
. . . . . . . 2 2 2 2 f . 2 2 2 2 f . . . . . . . . 
. . . . . . . 2 2 2 2 f . 2 2 2 2 f . . . . . . . . 
. . . . . . . 2 2 2 2 f . 2 2 2 2 f . . . . . . . . 
. . . . . . 2 2 2 2 2 f . 2 2 2 2 f . . . . . . . . 
. . . . . . 2 2 2 2 2 f . 2 2 2 2 2 f . . . . . . . 
. . . . . . 2 2 2 2 2 f . 2 2 2 2 2 f . . . . . . . 
. . . . . . 2 2 2 2 f . . 2 2 2 2 2 f . . . . . . . 
. . . . . . 2 2 2 2 f . . 2 2 2 2 2 f . . . . . . . 
. . . . . . 2 2 2 2 f . . . 2 2 2 2 f . . . . . . . 
. . . . . . 2 2 2 2 f . . . 2 2 2 2 f . . . . . . . 
. . . . . . 2 2 2 2 f . . . 2 2 2 2 f . . . . . . . 
. . . . . . 2 2 2 f . . . . 2 2 2 2 f . . . . . . . 
. . . . . . 2 2 2 f . . . . 2 2 2 2 f . . . . . . . 
. . . . . 2 2 2 2 f . . . . 2 2 2 2 f . . . . . . . 
. . . . . 2 2 2 2 f . . . . 2 2 2 2 f . . . . . . . 
. . . . . 2 2 2 2 f . . . . 2 2 2 2 f . . . . . . . 
. . . . f f f f f . . . . f f f f . . . . . . . . . 
. . . f f f f f . . . . f f f f f . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
`],
            150,
            true
            )
        }
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (facingLeft) {
        facingLeft = false
        facingRight = true
        if (armor == 1) {
            animation.runImageAnimation(
            wwSprite,
            [img`
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f f f f f f . . . . . . . 
. . . . . . . . . . . . f 5 5 5 5 5 5 f . . . . . . 
. . . . . . . . . . f f 5 5 4 5 5 5 1 5 . . . . . . 
. . . . 5 5 . . e e 5 5 5 4 4 4 4 5 1 5 . . . . . . 
. . . 4 4 4 . . e e 5 5 4 4 d d d 5 5 5 . . . . . . 
. . 5 5 5 4 4 e e e 5 5 4 4 d d d d 5 . . . . . . . 
. 5 5 5 5 5 4 5 e e 5 5 4 4 d d f d d . . . . . . . 
. 5 5 5 5 5 5 4 5 e 4 5 5 4 d d d d d . . . . . . . 
. 5 4 4 4 4 5 4 4 e 4 5 5 5 5 d d d d . . . . . . . 
. 5 4 5 5 5 4 5 4 5 4 4 5 5 5 5 d d d . . . . . . . 
. 5 5 5 5 5 4 4 5 f f f 4 5 5 5 5 d f . . . . . . . 
. 5 5 5 4 5 5 5 f f f f f f f f d f f . . . . . . . 
. 5 5 5 4 5 5 4 4 4 4 f f f f f 4 4 4 4 4 . . . . . 
. 5 5 5 4 4 5 5 4 4 4 4 f f f f 5 4 4 4 . . . . . . 
. 5 4 5 5 4 4 5 f 5 4 4 f f f f f 5 5 5 1 . . . . . 
. 5 4 5 5 5 4 5 f 5 5 4 f f f f f 5 4 5 5 . . . . . 
. 5 4 5 5 5 5 f 5 5 5 4 4 f f f f 4 4 4 5 . . . . . 
. 5 4 5 5 5 5 f 1 1 5 5 4 f f f 4 4 4 4 5 . . . . . 
. 5 4 5 5 5 f 1 1 5 5 f 4 f f f f 4 4 4 5 . . . . . 
. 5 4 5 5 f 5 1 5 5 5 f 4 4 f f f 4 4 4 5 . . . . . 
. 5 4 5 5 f 1 1 5 5 e 4 4 4 4 f f 4 4 5 5 . . . . . 
. 5 4 5 5 f 1 5 5 5 e 4 4 4 4 4 4 4 4 5 5 5 . . . . 
. 5 4 5 5 5 1 5 5 e e 4 4 4 4 4 4 4 4 5 5 1 . . . . 
. 5 4 5 f 5 5 5 5 e e 4 4 4 4 4 4 4 4 f 5 5 . . . . 
. 5 4 5 f 4 4 5 e e e 4 4 4 4 4 4 4 4 f 5 5 . . . . 
. 5 4 f 4 4 5 4 e e e 4 4 4 4 4 4 4 4 f 4 4 4 4 . . 
. 5 4 f 4 5 5 4 4 e 5 5 5 4 4 4 4 4 4 5 f 4 5 4 . . 
. 5 4 f 4 4 4 4 e e 5 5 5 5 5 4 4 4 4 5 f 4 5 . . . 
. 5 4 f 4 5 4 e e e 5 5 5 5 5 5 4 4 5 5 f 4 4 . . . 
. 5 5 f 4 4 d e e e 5 5 5 5 1 5 4 4 5 5 f 4 4 . . . 
. 5 5 f 4 4 e e e e 5 5 5 5 1 5 5 f 5 5 f 4 4 . . . 
. 5 5 f d d e f 4 e 5 5 5 1 1 5 f f 5 5 . d d . . . 
. 5 5 4 5 5 e e f 4 5 5 5 1 5 5 f 5 5 5 . 4 . . . . 
. 5 5 4 5 5 e e f 4 4 5 1 1 5 f f 5 5 5 4 . . . . . 
. 5 5 4 5 e e . f 4 4 4 5 5 5 f f 5 5 4 4 . . . . . 
. 5 4 4 e e . . . f 4 4 4 5 f f f 5 4 4 4 . . . . . 
. 5 4 5 e . . . . f 4 4 4 4 . . f 4 4 4 4 . . . . . 
. 5 4 5 . . . . . f 4 4 4 4 . . f 4 4 5 4 . . . . . 
. 5 5 5 . . . . . f 4 4 5 4 . . f 4 4 5 4 . . . . . 
. 5 5 . . . . . f f 4 4 5 4 . f f 4 5 5 4 . . . . . 
. . . . . . . . f 4 5 5 4 4 . f 4 5 4 4 4 . . . . . 
. . . . . . . . f 4 5 4 4 . . f 4 5 5 4 . . . . . . 
. . . . . . . . f 4 4 4 4 . . f 4 4 5 4 . . . . . . 
. . . . . . . . f 4 4 5 4 . . f 4 4 5 4 . . . . . . 
. . . . . . . . f 4 4 4 4 . . f 4 4 5 4 . . . . . . 
. . . . . . . . f 4 4 4 . . . f 4 4 5 4 . . . . . . 
. . . . . . . . f 4 4 4 . . . f 4 4 4 4 . . . . . . 
. . . . . . . . f 4 4 4 . . . f 4 4 4 4 . . . . . . 
. . . . . . . . f 4 4 4 . . . . f 4 4 4 . . . . . . 
. . . . . . . . f 4 4 4 . . . . f 4 4 4 . . . . . . 
. . . . . . . . f 4 5 4 . . . . f 4 5 4 4 . . . . . 
. . . . . . . . f 4 5 4 . . . . f 4 4 5 4 . . . . . 
. . . . . . . . f 4 5 4 . . . . f 4 4 5 4 . . . . . 
. . . . . . . . . 4 5 4 4 . . . . 4 4 4 4 4 . . . . 
. . . . . . . . . 4 4 4 4 4 . . . . 4 4 4 4 4 . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . f f f f f f . . . . . . 
. . . . . . . . . . . . . f 5 5 5 5 5 5 f . . . . . 
. . . . . . . . . . . f f 5 5 4 5 5 5 1 5 . . . . . 
. . . . . 5 5 . . e e 5 5 5 4 4 4 4 5 1 5 . . . . . 
. . . . 4 4 4 . . e e 5 5 4 4 d d d 5 5 5 . . . . . 
. . . 5 5 5 4 4 e e e 5 5 4 4 d d d d 5 . . . . . . 
. . 5 5 5 5 5 4 5 e e 5 5 4 4 d d f d d . . . . . . 
. . 5 5 5 5 5 5 4 5 e 4 5 5 4 d d d d d . . . . . . 
. . 5 4 4 4 4 5 4 4 e 4 5 5 5 5 d d d d . . . . . . 
. . 5 4 5 5 5 4 5 4 5 4 4 5 5 5 5 d d d . . . . . . 
. . 5 5 5 5 5 4 4 5 f f f 4 5 5 5 5 d f . . . . . . 
. . 5 5 5 4 5 5 5 f f f f f f f f d f f . . . . . . 
. . 5 5 5 4 5 5 4 4 4 4 f f f f f 4 4 4 4 4 . . . . 
. . 5 5 5 4 4 5 5 4 4 4 4 f f f f 5 4 4 4 . . . . . 
. . 5 4 5 5 4 4 5 f 5 4 4 f f f f f 5 5 5 1 . . . . 
. . 5 4 5 5 5 4 5 f 5 5 4 f f f f f 5 4 5 5 . . . . 
. . 5 4 5 5 5 5 f 5 5 5 4 4 f f f f 4 4 4 5 . . . . 
. . 5 4 5 5 5 5 f 1 1 5 5 4 f f f 4 4 4 4 5 . . . . 
. . 5 4 5 5 5 f 1 1 5 5 f 4 f f f f 4 4 4 5 . . . . 
. . 5 4 5 5 f 5 1 5 5 5 f 4 4 f f f 4 4 4 5 . . . . 
. . 5 4 5 5 f 1 1 5 5 e 4 4 4 4 f f 4 4 5 5 . . . . 
. . 5 4 5 5 f 1 5 5 5 e 4 4 4 4 4 4 4 4 5 5 5 . . . 
. . 5 4 5 5 5 1 5 5 e e 4 4 4 4 4 4 4 4 5 5 1 . . . 
. . 5 4 5 f 5 5 5 5 e e 4 4 4 4 4 4 4 4 f 5 5 . . . 
. . 5 4 5 f 4 4 5 e e e 4 4 4 4 4 4 4 4 f 5 5 . . . 
. . 5 4 f 4 4 5 4 e e e 4 4 4 4 4 4 4 4 f 4 4 4 4 . 
. . 5 4 f 4 5 5 4 4 e 5 5 5 4 4 4 4 4 4 5 f 4 5 4 . 
. . 5 4 f 4 4 4 4 e e 5 5 5 5 5 4 4 4 4 5 f 4 5 . . 
. . 5 4 f 4 5 4 e e e 5 5 5 5 5 5 4 4 5 5 f 4 4 . . 
. . 5 5 f 4 4 d e e e 5 5 5 5 1 5 4 4 5 5 f 4 4 . . 
. . 5 5 f 4 4 e e e e 5 5 5 5 1 5 5 f 5 5 f 4 4 . . 
. . 5 5 f d d e f 4 e 5 5 5 1 1 5 f f 5 5 . d d . . 
. . 5 5 4 5 5 e e f 4 5 5 5 1 5 5 f 5 5 5 . 4 . . . 
. . 5 5 4 5 5 e e f 4 4 5 1 1 5 f f 5 5 5 4 . . . . 
. . 5 5 4 5 e e . f 4 4 4 5 5 5 f f 5 5 4 4 . . . . 
. . 5 4 4 e e . . . f 4 4 4 5 f f f 5 4 4 4 . . . . 
. . 5 4 5 e . . . . f 4 4 4 4 . . f 4 4 4 4 . . . . 
. . 5 4 5 . . . . . f 4 4 4 4 . . f 4 4 5 4 . . . . 
. . 5 5 5 . . . . . f 4 4 5 4 . . f 4 4 5 4 . . . . 
. . 5 5 . . . . . . f 4 4 5 4 . . f 4 5 5 4 . . . . 
. . . . . . . . . f 5 4 4 4 . . f 5 5 4 4 . . . . . 
. . . . . . . . . f 4 4 4 4 . . f 4 5 4 4 . . . . . 
. . . . . . . . f 4 4 5 4 . . f 4 4 5 4 . . . . . . 
. . . . . . . . f 4 4 4 4 . . f 4 4 5 4 . . . . . . 
. . . . . . . . f 4 4 4 . . . f 4 4 5 4 . . . . . . 
. . . . . . . . f 4 4 4 . . . f 4 4 4 4 . . . . . . 
. . . . . . . . f 4 4 4 . . . f 4 4 4 4 . . . . . . 
. . . . . . . . f 4 4 4 . . . . f 4 4 4 . . . . . . 
. . . . . . . . f 4 4 4 . . . . f 4 4 4 . . . . . . 
. . . . . . . . f 4 5 4 . . . . f 4 5 4 4 . . . . . 
. . . . . . . . f 4 5 4 . . . . f 4 4 5 4 . . . . . 
. . . . . . . . f 4 5 4 . . . . f 4 4 5 4 . . . . . 
. . . . . . . . . 4 5 4 4 . . . . 4 4 4 4 4 . . . . 
. . . . . . . . . 4 4 4 4 4 . . . . 4 4 4 4 4 . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f f f f f f . . . . . . . 
. . . . . . . . . . . . f 5 5 5 5 5 5 f . . . . . . 
. . . . . . . . . . f f 5 5 4 5 5 5 1 5 . . . . . . 
. . . . 5 5 . . e e 5 5 5 4 4 4 4 5 1 5 . . . . . . 
. . . 4 4 4 . . e e 5 5 4 4 d d d 5 5 5 . . . . . . 
. . 5 5 5 4 4 e e e 5 5 4 4 d d d d 5 . . . . . . . 
. 5 5 5 5 5 4 5 e e 5 5 4 4 d d f d d . . . . . . . 
. 5 5 5 5 5 5 4 5 e 4 5 5 4 d d d d d . . . . . . . 
. 5 4 4 4 4 5 4 4 e 4 5 5 5 5 d d d d . . . . . . . 
. 5 4 5 5 5 4 5 4 5 4 4 5 5 5 5 d d d . . . . . . . 
. 5 5 5 5 5 4 4 5 f f f 4 5 5 5 5 d f . . . . . . . 
. 5 5 5 4 5 5 5 f f f f f f f f d f f . . . . . . . 
. 5 5 5 4 5 5 4 4 4 4 f f f f f 4 4 4 4 4 . . . . . 
. 5 5 5 4 4 5 5 4 4 4 4 f f f f 5 4 4 4 . . . . . . 
. 5 4 5 5 4 4 5 f 5 4 4 f f f f f 5 5 5 1 . . . . . 
. 5 4 5 5 5 4 5 f 5 5 4 f f f f f 5 4 5 5 . . . . . 
. 5 4 5 5 5 5 f 5 5 5 4 4 f f f f 4 4 4 5 . . . . . 
. 5 4 5 5 5 5 f 1 1 5 5 4 f f f 4 4 4 4 5 . . . . . 
. 5 4 5 5 5 f 1 1 5 5 f 4 f f f f 4 4 4 5 . . . . . 
. 5 4 5 5 f 5 1 5 5 5 f 4 4 f f f 4 4 4 5 . . . . . 
. 5 4 5 5 f 1 1 5 5 e 4 4 4 4 f f 4 4 5 5 . . . . . 
. 5 4 5 5 f 1 5 5 5 e 4 4 4 4 4 4 4 4 5 5 5 . . . . 
. 5 4 5 5 5 1 5 5 e e 4 4 4 4 4 4 4 4 5 5 1 . . . . 
. 5 4 5 f 5 5 5 5 e e 4 4 4 4 4 4 4 4 f 5 5 . . . . 
. 5 4 5 f 4 4 5 e e e 4 4 4 4 4 4 4 4 f 5 5 . . . . 
. 5 4 f 4 4 5 4 e e e 4 4 4 4 4 4 4 4 f 4 4 4 4 . . 
. 5 4 f 4 5 5 4 4 e 5 5 5 4 4 4 4 4 4 5 f 4 5 4 . . 
. 5 4 f 4 4 4 4 e e 5 5 5 5 5 4 4 4 4 5 f 4 5 . . . 
. 5 4 f 4 5 4 e e e 5 5 5 5 5 5 4 4 5 5 f 4 4 . . . 
. 5 5 f 4 4 d e e e 5 5 5 5 1 5 4 4 5 5 f 4 4 . . . 
. 5 5 f 4 4 e e e e 5 5 5 5 1 5 5 f 5 5 f 4 4 . . . 
. 5 5 f d d e f 4 e 5 5 5 1 1 5 f f 5 5 . d d . . . 
. 5 5 4 5 5 e e f 4 5 5 5 1 5 5 f 5 5 5 . 4 . . . . 
. 5 5 4 5 5 e e f 4 4 5 1 1 5 f f 5 5 5 4 . . . . . 
. 5 5 4 5 e e . f 4 4 4 5 5 5 f f 5 5 4 4 . . . . . 
. 5 4 4 e e . . . f 4 4 4 5 f f f 5 4 4 4 . . . . . 
. 5 4 5 e . . . . f 4 4 4 4 . . f 4 4 4 4 . . . . . 
. 5 4 5 . . . . . f 4 4 4 4 . . f 4 4 5 4 . . . . . 
. 5 5 5 . . . . . f 4 4 5 4 . . f 4 4 5 4 . . . . . 
. 5 5 . . . . . f f 4 4 5 4 . f f 4 5 5 4 . . . . . 
. . . . . . . . f 4 5 5 4 4 . f 4 5 4 4 4 . . . . . 
. . . . . . . . f 4 5 4 4 . . f 4 5 5 4 . . . . . . 
. . . . . . . . f 4 4 4 4 . . f 4 4 5 4 . . . . . . 
. . . . . . . . f 4 4 5 4 . . f 4 4 5 4 . . . . . . 
. . . . . . . . f 4 4 4 4 . . f 4 4 5 4 . . . . . . 
. . . . . . . . f 4 4 4 . . . f 4 4 5 4 . . . . . . 
. . . . . . . . f 4 4 4 . . . f 4 4 4 4 . . . . . . 
. . . . . . . . f 4 4 4 . . . f 4 4 4 4 . . . . . . 
. . . . . . . . f 4 4 4 . . . . f 4 4 4 . . . . . . 
. . . . . . . . f 4 4 4 . . . . f 4 4 4 . . . . . . 
. . . . . . . . f 4 5 4 . . . . f 4 5 4 4 . . . . . 
. . . . . . . . f 4 5 4 . . . . f 4 4 5 4 . . . . . 
. . . . . . . . f 4 5 4 . . . . f 4 4 5 4 . . . . . 
. . . . . . . . . 4 5 4 4 . . . . 4 4 4 4 4 . . . . 
. . . . . . . . . 4 4 4 4 4 . . . . 4 4 4 4 4 . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . f f f f f f . . . . . . . . 
. . . . . . . . . . . f 5 5 5 5 5 5 f . . . . . . . 
. . . . . . . . . f f 5 5 4 5 5 5 1 5 . . . . . . . 
. . . 5 5 . . e e 5 5 5 4 4 4 4 5 1 5 . . . . . . . 
. . 4 4 4 . . e e 5 5 4 4 d d d 5 5 5 . . . . . . . 
. 5 5 5 4 4 e e e 5 5 4 4 d d d d 5 . . . . . . . . 
5 5 5 5 5 4 5 e e 5 5 4 4 d d f d d . . . . . . . . 
5 5 5 5 5 5 4 5 e 4 5 5 4 d d d d d . . . . . . . . 
5 4 4 4 4 5 4 4 e 4 5 5 5 5 d d d d . . . . . . . . 
5 4 5 5 5 4 5 4 5 4 4 5 5 5 5 d d d . . . . . . . . 
5 5 5 5 5 4 4 5 f f f 4 5 5 5 5 d f . . . . . . . . 
5 5 5 4 5 5 5 f f f f f f f f d f f . . . . . . . . 
5 5 5 4 5 5 4 4 4 4 f f f f f 4 4 4 4 4 . . . . . . 
5 5 5 4 4 5 5 4 4 4 4 f f f f 5 4 4 4 . . . . . . . 
5 4 5 5 4 4 5 f 5 4 4 f f f f f 5 5 5 1 . . . . . . 
5 4 5 5 5 4 5 f 5 5 4 f f f f f 5 4 5 5 . . . . . . 
5 4 5 5 5 5 f 5 5 5 4 4 f f f f 4 4 4 5 . . . . . . 
5 4 5 5 5 5 f 1 1 5 5 4 f f f 4 4 4 4 5 . . . . . . 
5 4 5 5 5 f 1 1 5 5 f 4 f f f f 4 4 4 5 . . . . . . 
5 4 5 5 f 5 1 5 5 5 f 4 4 f f f 4 4 4 5 . . . . . . 
5 4 5 5 f 1 1 5 5 e 4 4 4 4 f f 4 4 5 5 . . . . . . 
5 4 5 5 f 1 5 5 5 e 4 4 4 4 4 4 4 4 5 5 5 . . . . . 
5 4 5 5 5 1 5 5 e e 4 4 4 4 4 4 4 4 5 5 1 . . . . . 
5 4 5 f 5 5 5 5 e e 4 4 4 4 4 4 4 4 f 5 5 . . . . . 
5 4 5 f 4 4 5 e e e 4 4 4 4 4 4 4 4 f 5 5 . . . . . 
5 4 f 4 4 5 4 e e e 4 4 4 4 4 4 4 4 f 4 4 4 4 . . . 
5 4 f 4 5 5 4 4 e 5 5 5 4 4 4 4 4 4 5 f 4 5 4 . . . 
5 4 f 4 4 4 4 e e 5 5 5 5 5 4 4 4 4 5 f 4 5 . . . . 
5 4 f 4 5 4 e e e 5 5 5 5 5 5 4 4 5 5 f 4 4 . . . . 
5 5 f 4 4 d e e e 5 5 5 5 1 5 4 4 5 5 f 4 4 . . . . 
5 5 f 4 4 e e e e 5 5 5 5 1 5 5 f 5 5 f 4 4 . . . . 
5 5 f d d e f 4 e 5 5 5 1 1 5 f f 5 5 . d d . . . . 
5 5 4 5 5 e e f 4 5 5 5 1 5 5 f 5 5 5 . 4 . . . . . 
5 5 4 5 5 e e f 4 4 5 1 1 5 f f 5 5 5 4 . . . . . . 
5 5 4 5 e e . f 4 4 4 5 5 5 f f 5 5 4 4 . . . . . . 
5 4 4 e e . . . f 4 4 4 5 f f f 5 4 4 4 . . . . . . 
5 4 5 e . . . . f 4 4 4 4 . . f 4 4 4 4 . . . . . . 
5 4 5 . . . . . f 4 4 4 4 . . f 4 4 5 4 . . . . . . 
5 5 5 . . . . . f 4 4 5 4 . . f 4 4 5 4 . . . . . . 
5 5 . . . . . . f 4 4 5 4 . . f 4 5 5 4 . . . . . . 
. . . . . . . . f 4 4 5 4 . . f 4 5 4 4 . . . . . . 
. . . . . . . . f 4 5 5 4 . . f 4 5 4 4 . . . . . . 
. . . . . . . . f 4 5 4 4 . . f 4 5 5 4 . . . . . . 
. . . . . . . . f 4 4 4 4 . . f 4 4 5 4 . . . . . . 
. . . . . . . . f 4 4 5 4 . . f 4 4 5 4 . . . . . . 
. . . . . . . . f 4 4 4 4 . . f 4 4 5 4 . . . . . . 
. . . . . . . . f 4 4 4 . . . f 4 4 5 4 . . . . . . 
. . . . . . . . f 4 4 4 . . . f 4 4 4 4 . . . . . . 
. . . . . . . . f 4 4 4 . . . f 4 4 4 4 . . . . . . 
. . . . . . . . f 4 4 4 . . . . f 4 4 4 . . . . . . 
. . . . . . . . f 4 4 4 . . . . f 4 4 4 . . . . . . 
. . . . . . . . f 4 5 4 . . . . f 4 5 4 4 . . . . . 
. . . . . . . . f 4 5 4 . . . . f 4 4 5 4 . . . . . 
. . . . . . . . f 4 5 4 . . . . f 4 4 5 4 . . . . . 
. . . . . . . . . 4 5 4 4 . . . . 4 4 4 4 4 . . . . 
. . . . . . . . . 4 4 4 4 4 . . . . 4 4 4 4 4 . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
`],
            150,
            true
            )
        } else if (lasso == 1) {
            animation.runImageAnimation(
            wwSprite,
            [img`
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 8 8 8 8 8 8 8 . . . . . . . . 
. . . . . . . . . . 8 f f f f f f f 8 . . . . . . . 
. . . . . . . . . 8 f f f f f f f f f . . . . . . . 
. . . . . . . . 8 f f f f f f f f f f . . . . . . . 
. . . . . . . 8 f f f f f f f 5 5 5 f . . . . . . . 
. . . . . . . 8 f f f f f f d d d 5 f . . . . . . . 
. . . . . . 8 f f f f f f d d d d d . . . . . . . . 
. . . . . . 8 f f f f d d d d f d d . . . . . . . . 
. . . . . 8 f f f f f d d d d d d d . . . . . . . . 
. . . . . 8 f f f f f f d d d d d d . . . . . . . . 
. . . . 8 f f f f f f f d d d d d d . . . . . . . . 
. . . . 8 f f f f f f f f d d d d . . . . . . . . . 
. . . 8 f f f f f f f f f d d d . . . . . . . . . . 
. . . 8 f f f f f f e d d d d d d . . . . . . . . . 
. . . 8 f f f f d d e e d d d d d d d . . . . . . . 
. . . 8 f f f f d d d e e 5 5 d d d d d d . . . . . 
. . . 8 f f f f d d d e e 2 2 5 5 5 d d d . . . . . 
. . . 8 f f f f d d d 2 e e e 2 2 5 5 d d . . . . . 
. . . . 8 f f d d d d 2 2 2 e e 2 2 2 d d . . . . . 
. . . . . 8 f d d d 2 2 2 2 2 e 2 2 2 d d . . . . . 
. . . . . 8 f d d d 2 2 2 2 2 e 2 2 2 d d . . . . . 
. . . . . f d d d d 2 2 2 2 2 e e 2 2 5 d . . . . . 
. . . . . f d d d f 2 2 2 2 2 2 e e 2 5 d . . . . . 
. . . . . f d d d f 2 2 2 2 2 2 2 e e d d d . . . . 
. . . . . f d d d . f 2 2 2 2 2 2 2 e d d d . . . . 
. . . . . f d d d . . f 2 2 2 2 2 2 e f d d . . . . 
. . . . f 5 5 5 . f 8 8 2 2 2 2 2 5 5 f 5 5 5 . . . 
. . . . f 5 5 5 f 8 8 8 5 5 2 5 5 5 8 f 5 5 5 . . . 
. . . f 5 5 5 f 8 8 8 8 8 5 5 5 8 8 8 f 5 5 5 . . . 
. . . f 5 5 5 f 8 8 8 f 8 5 5 8 8 8 8 . f 5 5 . . . 
. . . f 5 5 . 8 8 8 8 f 8 f 8 8 8 f 8 . f 5 5 . . . 
. . . f 5 5 . 8 8 8 f 8 8 f 8 8 f 8 8 . f d d d . . 
. . . f d d d 8 8 f 8 8 8 8 8 8 f 8 8 . f d d d . . 
. . . f d d f 8 f 8 8 8 f 8 8 f f 8 8 . f d d d . . 
. . . f d d . f 8 8 8 8 f 8 f f f 8 8 . . . . . . . 
. . . . . . . f d 8 8 f 8 f f d d 8 8 . . . . . . . 
. . . . . . . f d d 8 f f f d d d d 8 . . . . . . . 
. . . . . . . f d d d d f f d d d d . . . . . . . . 
. . . . . . f f d d d d f f d d d d . . . . . . . . 
. . . . . . f d d d d . f d d d d d . . . . . . . . 
. . . . . . f d d d 5 . f d d d 5 5 5 . . . . . . . 
. . . . . . f d d 5 5 5 f d 5 5 5 2 2 . . . . . . . 
. . . . . . f d 5 5 5 5 . f 5 5 2 2 2 . . . . . . . 
. . . . . . f 5 5 2 2 2 . f 5 2 2 2 2 . . . . . . . 
. . . . . . f 5 2 2 2 2 . f 2 2 2 2 . . . . . . . . 
. . . . . . f 2 2 2 2 . . f 2 2 2 2 . . . . . . . . 
. . . . . . f 2 2 2 2 . f 2 2 2 2 2 . . . . . . . . 
. . . . . f 2 2 2 2 2 . f 2 2 2 2 . . . . . . . . . 
. . . . . f 2 2 2 2 . . f 2 2 2 2 . . . . . . . . . 
. . . . . f 2 2 2 2 . . f 2 2 2 2 . . . . . . . . . 
. . . . . . f 2 2 2 . . . f 2 2 2 . . . . . . . . . 
. . . . . . f 2 2 2 . . . f 2 2 2 . . . . . . . . . 
. . . . . . f 2 2 2 . . . f 2 2 2 . . . . . . . . . 
. . . . . . f 2 2 2 2 . . f 2 2 2 2 . . . . . . . . 
. . . . . . . f 2 2 2 2 . . f 2 2 2 2 . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 8 8 8 8 8 8 8 . . . . . . . 
. . . . . . . . . . . 8 f f f f f f f 8 . . . . . . 
. . . . . . . . . . 8 f f f f f f f f f . . . . . . 
. . . . . . . . . 8 f f f f f f f f f f . . . . . . 
. . . . . . . . 8 f f f f f f f 5 5 5 f . . . . . . 
. . . . . . . . 8 f f f f f f d d d 5 f . . . . . . 
. . . . . . . 8 f f f f f f d d d d d . . . . . . . 
. . . . . . . 8 f f f f d d d d f d d . . . . . . . 
. . . . . . 8 f f f f f d d d d d d d . . . . . . . 
. . . . . . 8 f f f f f f d d d d d d . . . . . . . 
. . . . . 8 f f f f f f f d d d d d d . . . . . . . 
. . . . . 8 f f f f f f f f d d d d . . . . . . . . 
. . . . 8 f f f f f f f f f d d d . . . . . . . . . 
. . . . 8 f f f f f f e d d d d d d . . . . . . . . 
. . . . 8 f f f f d d e e d d d d d d d . . . . . . 
. . . . 8 f f f f d d d e e 5 5 d d d d d d . . . . 
. . . . 8 f f f f d d d e e 2 2 5 5 5 d d d . . . . 
. . . . 8 f f f f d d d 2 e e e 2 2 5 5 d d . . . . 
. . . . . 8 f f d d d d 2 2 2 e e 2 2 2 d d . . . . 
. . . . . . 8 f d d d 2 2 2 2 2 e 2 2 2 d d . . . . 
. . . . . . 8 f d d d 2 2 2 2 2 e 2 2 2 d d . . . . 
. . . . . . f d d d d 2 2 2 2 2 e e 2 2 5 d . . . . 
. . . . . . f d d d f 2 2 2 2 2 2 e e 2 5 d . . . . 
. . . . . . f d d d f 2 2 2 2 2 2 2 e e d d d . . . 
. . . . . . f d d d . f 2 2 2 2 2 2 2 e d d d . . . 
. . . . . . f d d d . . f 2 2 2 2 2 2 e f d d . . . 
. . . . . f 5 5 5 . f 8 8 2 2 2 2 2 5 5 f 5 5 5 . . 
. . . . . f 5 5 5 f 8 8 8 5 5 2 5 5 5 8 f 5 5 5 . . 
. . . . f 5 5 5 f 8 8 8 8 8 5 5 5 8 8 8 f 5 5 5 . . 
. . . . f 5 5 5 f 8 8 8 f 8 5 5 8 8 8 8 . f 5 5 . . 
. . . . f 5 5 . 8 8 8 8 f 8 f 8 8 8 f 8 . f 5 5 . . 
. . . . f 5 5 . 8 8 8 f 8 8 f 8 8 f 8 8 . f d d d . 
. . . . f d d d 8 8 f 8 8 8 8 8 8 f 8 8 . f d d d . 
. . . . f d d f 8 f 8 8 8 f 8 8 f f 8 8 . f d d d . 
. . . . f d d . f 8 8 8 8 f 8 f f f 8 8 . . . . . . 
. . . . . . . . f d 8 8 f 8 f f d d 8 8 . . . . . . 
. . . . . . . . f d d 8 f f f d d d d 8 . . . . . . 
. . . . . . . f d d d d d f f d d d d . . . . . . . 
. . . . . . . f d d d d d f d d d d d . . . . . . . 
. . . . . . . f d d 5 5 . f d d 5 5 5 . . . . . . . 
. . . . . . . f d 5 5 5 . f 5 5 5 2 2 . . . . . . . 
. . . . . . . f 5 5 5 2 . f 5 5 2 2 2 . . . . . . . 
. . . . . . . f 5 2 2 2 . f 5 2 2 2 2 . . . . . . . 
. . . . . . f 5 2 2 2 2 . f 2 2 2 2 . . . . . . . . 
. . . . . . f 2 2 2 2 . . f 2 2 2 2 . . . . . . . . 
. . . . . f 2 2 2 2 2 . f 2 2 2 2 . . . . . . . . . 
. . . . . f 2 2 2 2 . . f 2 2 2 2 . . . . . . . . . 
. . . . . f 2 2 2 2 . . f 2 2 2 2 . . . . . . . . . 
. . . . . f 2 2 2 2 . . f 2 2 2 2 . . . . . . . . . 
. . . . . . f 2 2 2 . . . f 2 2 2 . . . . . . . . . 
. . . . . . f 2 2 2 . . . f 2 2 2 . . . . . . . . . 
. . . . . . f 2 2 2 . . . f 2 2 2 . . . . . . . . . 
. . . . . . f 2 2 2 2 . . f 2 2 2 2 . . . . . . . . 
. . . . . . . f 2 2 2 2 . . f 2 2 2 2 . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 8 8 8 8 8 8 8 . . . . . . . . 
. . . . . . . . . . 8 f f f f f f f 8 . . . . . . . 
. . . . . . . . . 8 f f f f f f f f f . . . . . . . 
. . . . . . . . 8 f f f f f f f f f f . . . . . . . 
. . . . . . . 8 f f f f f f f 5 5 5 f . . . . . . . 
. . . . . . . 8 f f f f f f d d d 5 f . . . . . . . 
. . . . . . 8 f f f f f f d d d d d . . . . . . . . 
. . . . . . 8 f f f f d d d d f d d . . . . . . . . 
. . . . . 8 f f f f f d d d d d d d . . . . . . . . 
. . . . . 8 f f f f f f d d d d d d . . . . . . . . 
. . . . 8 f f f f f f f d d d d d d . . . . . . . . 
. . . . 8 f f f f f f f f d d d d . . . . . . . . . 
. . . 8 f f f f f f f f f d d d . . . . . . . . . . 
. . . 8 f f f f f f e d d d d d d . . . . . . . . . 
. . . 8 f f f f d d e e d d d d d d d . . . . . . . 
. . . 8 f f f f d d d e e 5 5 d d d d d d . . . . . 
. . . 8 f f f f d d d e e 2 2 5 5 5 d d d . . . . . 
. . . 8 f f f f d d d 2 e e e 2 2 5 5 d d . . . . . 
. . . . 8 f f d d d d 2 2 2 e e 2 2 2 d d . . . . . 
. . . . . 8 f d d d 2 2 2 2 2 e 2 2 2 d d . . . . . 
. . . . . 8 f d d d 2 2 2 2 2 e 2 2 2 d d . . . . . 
. . . . . f d d d d 2 2 2 2 2 e e 2 2 5 d . . . . . 
. . . . . f d d d f 2 2 2 2 2 2 e e 2 5 d . . . . . 
. . . . . f d d d f 2 2 2 2 2 2 2 e e d d d . . . . 
. . . . . f d d d . f 2 2 2 2 2 2 2 e d d d . . . . 
. . . . . f d d d . . f 2 2 2 2 2 2 e f d d . . . . 
. . . . f 5 5 5 . f 8 8 2 2 2 2 2 5 5 f 5 5 5 . . . 
. . . . f 5 5 5 f 8 8 8 5 5 2 5 5 5 8 f 5 5 5 . . . 
. . . f 5 5 5 f 8 8 8 8 8 5 5 5 8 8 8 f 5 5 5 . . . 
. . . f 5 5 5 f 8 8 8 f 8 5 5 8 8 8 8 . f 5 5 . . . 
. . . f 5 5 . 8 8 8 8 f 8 f 8 8 8 f 8 . f 5 5 . . . 
. . . f 5 5 . 8 8 8 f 8 8 f 8 8 f 8 8 . f d d d . . 
. . . f d d d 8 8 f 8 8 8 8 8 8 f 8 8 . f d d d . . 
. . . f d d f 8 f 8 8 8 f 8 8 f f 8 8 . f d d d . . 
. . . f d d . f 8 8 8 8 f 8 f f f 8 8 . . . . . . . 
. . . . . . . f d 8 8 f 8 f f d d 8 8 . . . . . . . 
. . . . . . . f d d 8 f f f d d d d 8 . . . . . . . 
. . . . . . . f d d d d f f d d d d . . . . . . . . 
. . . . . . f f d d d d f f d d d d . . . . . . . . 
. . . . . . f d d d d . f d d d d d . . . . . . . . 
. . . . . . f d d d 5 . f d d d 5 5 5 . . . . . . . 
. . . . . . f d d 5 5 5 f d 5 5 5 2 2 . . . . . . . 
. . . . . . f d 5 5 5 5 . f 5 5 2 2 2 . . . . . . . 
. . . . . . f 5 5 2 2 2 . f 5 2 2 2 2 . . . . . . . 
. . . . . . f 5 2 2 2 2 . f 2 2 2 2 . . . . . . . . 
. . . . . . f 2 2 2 2 . . f 2 2 2 2 . . . . . . . . 
. . . . . . f 2 2 2 2 . f 2 2 2 2 2 . . . . . . . . 
. . . . . f 2 2 2 2 2 . f 2 2 2 2 . . . . . . . . . 
. . . . . f 2 2 2 2 . . f 2 2 2 2 . . . . . . . . . 
. . . . . f 2 2 2 2 . . f 2 2 2 2 . . . . . . . . . 
. . . . . . f 2 2 2 . . . f 2 2 2 . . . . . . . . . 
. . . . . . f 2 2 2 . . . f 2 2 2 . . . . . . . . . 
. . . . . . f 2 2 2 . . . f 2 2 2 . . . . . . . . . 
. . . . . . f 2 2 2 2 . . f 2 2 2 2 . . . . . . . . 
. . . . . . . f 2 2 2 2 . . f 2 2 2 2 . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . 8 8 8 8 8 8 8 . . . . . . . . . 
. . . . . . . . . 8 f f f f f f f 8 . . . . . . . . 
. . . . . . . . 8 f f f f f f f f f . . . . . . . . 
. . . . . . . 8 f f f f f f f f f f . . . . . . . . 
. . . . . . 8 f f f f f f f 5 5 5 f . . . . . . . . 
. . . . . . 8 f f f f f f d d d 5 f . . . . . . . . 
. . . . . 8 f f f f f f d d d d d . . . . . . . . . 
. . . . . 8 f f f f d d d d f d d . . . . . . . . . 
. . . . 8 f f f f f d d d d d d d . . . . . . . . . 
. . . . 8 f f f f f f d d d d d d . . . . . . . . . 
. . . 8 f f f f f f f d d d d d d . . . . . . . . . 
. . . 8 f f f f f f f f d d d d . . . . . . . . . . 
. . 8 f f f f f f f f f d d d . . . . . . . . . . . 
. . 8 f f f f f f e d d d d d d . . . . . . . . . . 
. . 8 f f f f d d e e d d d d d d d . . . . . . . . 
. . 8 f f f f d d d e e 5 5 d d d d d d . . . . . . 
. . 8 f f f f d d d e e 2 2 5 5 5 d d d . . . . . . 
. . 8 f f f f d d d 2 e e e 2 2 5 5 d d . . . . . . 
. . . 8 f f d d d d 2 2 2 e e 2 2 2 d d . . . . . . 
. . . . 8 f d d d 2 2 2 2 2 e 2 2 2 d d . . . . . . 
. . . . 8 f d d d 2 2 2 2 2 e 2 2 2 d d . . . . . . 
. . . . f d d d d 2 2 2 2 2 e e 2 2 5 d . . . . . . 
. . . . f d d d f 2 2 2 2 2 2 e e 2 5 d . . . . . . 
. . . . f d d d f 2 2 2 2 2 2 2 e e d d d . . . . . 
. . . . f d d d . f 2 2 2 2 2 2 2 e d d d . . . . . 
. . . . f d d d . . f 2 2 2 2 2 2 e f d d . . . . . 
. . . f 5 5 5 . f 8 8 2 2 2 2 2 5 5 f 5 5 5 . . . . 
. . . f 5 5 5 f 8 8 8 5 5 2 5 5 5 8 f 5 5 5 . . . . 
. . f 5 5 5 f 8 8 8 8 8 5 5 5 8 8 8 f 5 5 5 . . . . 
. . f 5 5 5 f 8 8 8 f 8 5 5 8 8 8 8 . f 5 5 . . . . 
. . f 5 5 . 8 8 8 8 f 8 f 8 8 8 f 8 . f 5 5 . . . . 
. . f 5 5 . 8 8 8 f 8 8 f 8 8 f 8 8 . f d d d . . . 
. . f d d d 8 8 f 8 8 8 8 8 8 f 8 8 . f d d d . . . 
. . f d d f 8 f 8 8 8 f 8 8 f f 8 8 . f d d d . . . 
. . f d d . f 8 8 8 8 f 8 f f f 8 8 . . . . . . . . 
. . . . . . f d 8 8 f 8 f f d d 8 8 . . . . . . . . 
. . . . . . f d d 8 f f f d d d d 8 . . . . . . . . 
. . . . . . f d d d d f f d d d d . . . . . . . . . 
. . . . . . f d d d d . f d d d d . . . . . . . . . 
. . . . . . f d d d d . f d d d d . . . . . . . . . 
. . . . . . f d d d d . f d d d d . . . . . . . . . 
. . . . . . f d d d 5 . f d d d 5 5 . . . . . . . . 
. . . . . . f d d 5 5 . f d 5 5 5 2 . . . . . . . . 
. . . . . . f d 5 5 5 . f 5 5 5 2 2 . . . . . . . . 
. . . . . . f 5 5 2 2 . f 5 5 2 2 2 . . . . . . . . 
. . . . . f 5 5 2 2 2 . f 5 2 2 2 2 . . . . . . . . 
. . . . . f 5 2 2 2 2 . f 2 2 2 2 2 . . . . . . . . 
. . . . . f 2 2 2 2 2 . f 2 2 2 2 . . . . . . . . . 
. . . . . f 2 2 2 2 . . f 2 2 2 2 . . . . . . . . . 
. . . . . f 2 2 2 2 . . f 2 2 2 2 . . . . . . . . . 
. . . . . f 2 2 2 2 . . f 2 2 2 2 . . . . . . . . . 
. . . . . . f 2 2 2 . . . f 2 2 2 . . . . . . . . . 
. . . . . . f 2 2 2 . . . f 2 2 2 . . . . . . . . . 
. . . . . . f 2 2 2 . . . f 2 2 2 . . . . . . . . . 
. . . . . . f 2 2 2 2 . . f 2 2 2 2 . . . . . . . . 
. . . . . . . f 2 2 2 2 . . f 2 2 2 2 . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
`],
            150,
            true
            )
        } else {
            animation.runImageAnimation(
            wwSprite,
            [img`
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . 8 8 8 8 8 8 . . . . . . . 
. . . . . . . 8 f f f . 8 f f f f f f 8 . . . . . . 
. . . . . . 8 f f f f 8 f f f f f f f f . . . . . . 
. . . . . . 8 f f f f f f f f f f f f f . . . . . . 
. . . . . 8 f f f f f f f f d d d d d f . . . . . . 
. . . . . 8 f f f f f f f f d d d d d . . . . . . . 
. . . . 8 f f f f f f f d d d d f d d . . . . . . . 
. . . . 8 f f f f f 8 f d d d d d d d . . . . . . . 
. . . 8 f f f f f . 8 f f d d d d d d . . . . . . . 
. . . 8 f f f f f . 8 f f d d d d d d . . . . . . . 
. . . 8 f f f f f . . . 8 f d d d d . . . . . . . . 
. . . 8 f f f f . . . 1 1 1 d d d . . . . . . . . . 
. . . 8 f f f f . e e e 1 1 1 d d 1 . . . . . . . . 
. . 8 f f f f f . e e e e 1 1 1 d d e e . . . . . . 
. . 8 f f f f f . e e e e e 8 1 1 d 1 e e . . . . . 
. . 8 f f f f f . e e e e e 8 8 8 1 1 e e . . . . . 
. . 8 f f f f . e e e e e e 8 8 8 8 1 e e . . . . . 
. . . 8 f f . . e e e e e e 8 8 8 8 8 8 e . . . . . 
. . . 8 f f . e e e e f e e 8 8 8 8 8 8 e . . . . . 
. . . 8 f . e e e e e f e e 8 8 8 8 8 8 e . . . . . 
. . . . . f e e e e f e e e 8 8 8 8 8 8 e . . . . . 
. . . . . f e e e e f e e e 8 8 8 8 8 e e e . . . . 
. . . . . e e e e f e e e e 8 8 8 8 8 e e e . . . . 
. . . . f e e e e f e e e e 8 8 8 8 8 e f e . . . . 
. . . . f e e e . f e e e e 8 8 8 8 8 e f e . . . . 
. . . f e e e e f e e e e e 8 8 8 8 8 e f e e . . . 
. . . f e e e e f e e e e e 2 2 2 2 2 2 f e e . . . 
. . . f e e e . f e e e e e 2 2 2 2 2 2 e f e . . . 
. . . f e e e . f e e e e 2 2 2 2 2 2 2 e f e . . . 
. . . f d d d . f e e e 2 2 2 2 2 2 2 2 e d d . . . 
. . . f d d . . f e 2 2 2 2 2 2 2 f 2 2 e d d . . . 
. . . f d d . . . f 2 2 2 2 2 2 f f 2 2 . d d . . . 
. . . . . . . . . f 2 2 2 2 2 2 f 2 2 2 . . . . . . 
. . . . . . . . . f 2 2 2 2 2 f f 2 2 2 . . . . . . 
. . . . . . . . . f 2 2 2 2 2 f f 2 2 2 . . . . . . 
. . . . . . . . . f 2 2 2 2 f f f 2 2 2 . . . . . . 
. . . . . . . . . f 2 2 2 2 . . f 2 2 2 . . . . . . 
. . . . . . . . . f 2 2 2 2 . . f 2 2 2 . . . . . . 
. . . . . . . . . f 2 2 2 2 . f 2 2 2 2 . . . . . . 
. . . . . . . . . f 2 2 2 2 . f 2 2 2 2 . . . . . . 
. . . . . . . . . f 2 2 2 2 . f 2 2 2 2 . . . . . . 
. . . . . . . . . f 2 2 2 2 . f 2 2 2 2 2 . . . . . 
. . . . . . . . f 2 2 2 2 2 . f 2 2 2 2 2 . . . . . 
. . . . . . . . f 2 2 2 2 2 . f 2 2 2 2 2 . . . . . 
. . . . . . . f f 2 2 2 2 2 . f f 2 2 2 2 . . . . . 
. . . . . . . f 2 2 2 2 . . . f 2 2 2 2 . . . . . . 
. . . . . . . f 2 2 2 2 . . . f 2 2 2 2 . . . . . . 
. . . . . . . f 2 2 2 2 . . . f 2 2 2 2 . . . . . . 
. . . . . . . f 2 2 2 2 . . . . f 2 2 2 . . . . . . 
. . . . . . . f 2 2 2 2 . . . . f 2 2 2 . . . . . . 
. . . . . . . f 2 2 2 2 . . . . f 2 2 2 2 . . . . . 
. . . . . . . f 2 2 2 2 . . . . f 2 2 2 2 . . . . . 
. . . . . . . f 2 2 2 2 . . . . f 2 2 2 2 . . . . . 
. . . . . . . . . f f f f . . . . f f f f f . . . . 
. . . . . . . . . f f f f f . . . . f f f f f . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . 8 8 8 8 8 8 . . . . . . . 
. . . . . . . 8 f f f . 8 f f f f f f 8 . . . . . . 
. . . . . . 8 f f f f 8 f f f f f f f f . . . . . . 
. . . . . . 8 f f f f f f f f f f f f f . . . . . . 
. . . . . 8 f f f f f f f f d d d d d f . . . . . . 
. . . . . 8 f f f f f f f f d d d d d . . . . . . . 
. . . . 8 f f f f f f f d d d d f d d . . . . . . . 
. . . . 8 f f f f f 8 f d d d d d d d . . . . . . . 
. . . 8 f f f f f . 8 f f d d d d d d . . . . . . . 
. . . 8 f f f f f . 8 f f d d d d d d . . . . . . . 
. . . 8 f f f f f . . . 8 f d d d d . . . . . . . . 
. . . 8 f f f f . . . 1 1 1 d d d . . . . . . . . . 
. . . 8 f f f f . e e e 1 1 1 d d 1 . . . . . . . . 
. . 8 f f f f f . e e e e 1 1 1 d d e e . . . . . . 
. . 8 f f f f f . e e e e e 8 1 1 d 1 e e . . . . . 
. . 8 f f f f f . e e e e e 8 8 8 1 1 e e . . . . . 
. . 8 f f f f . e e e e e e 8 8 8 8 1 e e . . . . . 
. . . 8 f f . . e e e e e e 8 8 8 8 8 8 e . . . . . 
. . . 8 f f . e e e e f e e 8 8 8 8 8 8 e . . . . . 
. . . 8 f . e e e e e f e e 8 8 8 8 8 8 e . . . . . 
. . . . . f e e e e f e e e 8 8 8 8 8 8 e . . . . . 
. . . . . f e e e e f e e e 8 8 8 8 8 e e e . . . . 
. . . . . e e e e f e e e e 8 8 8 8 8 e e e . . . . 
. . . . f e e e e f e e e e 8 8 8 8 8 e f e . . . . 
. . . . f e e e . f e e e e 8 8 8 8 8 e f e . . . . 
. . . f e e e e f e e e e e 8 8 8 8 8 e f e e . . . 
. . . f e e e e f e e e e e 2 2 2 2 2 2 f e e . . . 
. . . f e e e . f e e e e e 2 2 2 2 2 2 e f e . . . 
. . . f e e e . f e e e e 2 2 2 2 2 2 2 e f e . . . 
. . . f d d d . f e e e 2 2 2 2 2 2 2 2 e d d . . . 
. . . f d d . . f e 2 2 2 2 2 2 2 f 2 2 e d d . . . 
. . . f d d . . . f 2 2 2 2 2 2 f f 2 2 . d d . . . 
. . . . . . . . . f 2 2 2 2 2 2 f 2 2 2 . . . . . . 
. . . . . . . . . f 2 2 2 2 2 f f 2 2 2 . . . . . . 
. . . . . . . . . f 2 2 2 2 2 f f 2 2 2 . . . . . . 
. . . . . . . . . f 2 2 2 2 f f f 2 2 2 . . . . . . 
. . . . . . . . . f 2 2 2 2 . . f 2 2 2 . . . . . . 
. . . . . . . . . f 2 2 2 2 . . f 2 2 2 . . . . . . 
. . . . . . . . . f 2 2 2 2 . f 2 2 2 2 . . . . . . 
. . . . . . . . . f 2 2 2 2 . f 2 2 2 2 . . . . . . 
. . . . . . . . . f 2 2 2 2 . f 2 2 2 2 . . . . . . 
. . . . . . . . . f 2 2 2 2 . f 2 2 2 2 2 . . . . . 
. . . . . . . . f 2 2 2 2 2 . f 2 2 2 2 2 . . . . . 
. . . . . . . f f 2 2 2 2 2 . f f 2 2 2 2 . . . . . 
. . . . . . . f 2 2 2 2 . . . f 2 2 2 2 . . . . . . 
. . . . . . . f 2 2 2 2 . . . f 2 2 2 2 . . . . . . 
. . . . . . . f 2 2 2 2 . . . f 2 2 2 2 . . . . . . 
. . . . . . . f 2 2 2 2 . . . . f 2 2 2 . . . . . . 
. . . . . . . f 2 2 2 2 . . . . f 2 2 2 . . . . . . 
. . . . . . . f 2 2 2 2 . . . . f 2 2 2 2 . . . . . 
. . . . . . . f 2 2 2 2 . . . . f 2 2 2 2 . . . . . 
. . . . . . . f 2 2 2 2 . . . . f 2 2 2 2 . . . . . 
. . . . . . . . . f f f f . . . . f f f f f . . . . 
. . . . . . . . . f f f f f . . . . f f f f f . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . 8 8 8 8 8 8 . . . . . . . 
. . . . . . . 8 f f f . 8 f f f f f f 8 . . . . . . 
. . . . . . 8 f f f f 8 f f f f f f f f . . . . . . 
. . . . . . 8 f f f f f f f f f f f f f . . . . . . 
. . . . . 8 f f f f f f f f d d d d d f . . . . . . 
. . . . . 8 f f f f f f f f d d d d d . . . . . . . 
. . . . 8 f f f f f f f d d d d f d d . . . . . . . 
. . . . 8 f f f f f 8 f d d d d d d d . . . . . . . 
. . . 8 f f f f f . 8 f f d d d d d d . . . . . . . 
. . . 8 f f f f f . 8 f f d d d d d d . . . . . . . 
. . . 8 f f f f f . . . 8 f d d d d . . . . . . . . 
. . . 8 f f f f . . . 1 1 1 d d d . . . . . . . . . 
. . . 8 f f f f . e e e 1 1 1 d d 1 . . . . . . . . 
. . 8 f f f f f . e e e e 1 1 1 d d e e . . . . . . 
. . 8 f f f f f . e e e e e 8 1 1 d 1 e e . . . . . 
. . 8 f f f f f . e e e e e 8 8 8 1 1 e e . . . . . 
. . 8 f f f f . e e e e e e 8 8 8 8 1 e e . . . . . 
. . . 8 f f . . e e e e e e 8 8 8 8 8 8 e . . . . . 
. . . 8 f f . e e e e f e e 8 8 8 8 8 8 e . . . . . 
. . . 8 f . e e e e e f e e 8 8 8 8 8 8 e . . . . . 
. . . . . f e e e e f e e e 8 8 8 8 8 8 e . . . . . 
. . . . . f e e e e f e e e 8 8 8 8 8 e e e . . . . 
. . . . . e e e e f e e e e 8 8 8 8 8 e e e . . . . 
. . . . f e e e e f e e e e 8 8 8 8 8 e f e . . . . 
. . . . f e e e . f e e e e 8 8 8 8 8 e f e . . . . 
. . . f e e e e f e e e e e 8 8 8 8 8 e f e e . . . 
. . . f e e e e f e e e e e 2 2 2 2 2 2 f e e . . . 
. . . f e e e . f e e e e e 2 2 2 2 2 2 e f e . . . 
. . . f e e e . f e e e e 2 2 2 2 2 2 2 e f e . . . 
. . . f d d d . f e e e 2 2 2 2 2 2 2 2 e d d . . . 
. . . f d d . . f e 2 2 2 2 2 2 2 f 2 2 e d d . . . 
. . . f d d . . . f 2 2 2 2 2 2 f f 2 2 . d d . . . 
. . . . . . . . . f 2 2 2 2 2 2 f 2 2 2 . . . . . . 
. . . . . . . . . f 2 2 2 2 2 f f 2 2 2 . . . . . . 
. . . . . . . . . f 2 2 2 2 2 f f 2 2 2 . . . . . . 
. . . . . . . . . f 2 2 2 2 f f f 2 2 2 . . . . . . 
. . . . . . . . . f 2 2 2 2 . . f 2 2 2 . . . . . . 
. . . . . . . . . f 2 2 2 2 . . f 2 2 2 . . . . . . 
. . . . . . . . . f 2 2 2 2 . f 2 2 2 2 . . . . . . 
. . . . . . . . . f 2 2 2 2 . f 2 2 2 2 . . . . . . 
. . . . . . . . . f 2 2 2 2 . f 2 2 2 2 . . . . . . 
. . . . . . . . . f 2 2 2 2 . f 2 2 2 2 2 . . . . . 
. . . . . . . . f 2 2 2 2 2 . f 2 2 2 2 2 . . . . . 
. . . . . . . . f 2 2 2 2 2 . f 2 2 2 2 2 . . . . . 
. . . . . . . f f 2 2 2 2 2 . f f 2 2 2 2 . . . . . 
. . . . . . . f 2 2 2 2 . . . f 2 2 2 2 . . . . . . 
. . . . . . . f 2 2 2 2 . . . f 2 2 2 2 . . . . . . 
. . . . . . . f 2 2 2 2 . . . f 2 2 2 2 . . . . . . 
. . . . . . . f 2 2 2 2 . . . . f 2 2 2 . . . . . . 
. . . . . . . f 2 2 2 2 . . . . f 2 2 2 . . . . . . 
. . . . . . . f 2 2 2 2 . . . . f 2 2 2 2 . . . . . 
. . . . . . . f 2 2 2 2 . . . . f 2 2 2 2 . . . . . 
. . . . . . . f 2 2 2 2 . . . . f 2 2 2 2 . . . . . 
. . . . . . . . . f f f f . . . . f f f f f . . . . 
. . . . . . . . . f f f f f . . . . f f f f f . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . 8 8 8 8 8 8 . . . . . . . . 
. . . . . . 8 f f f . 8 f f f f f f 8 . . . . . . . 
. . . . . 8 f f f f 8 f f f f f f f f . . . . . . . 
. . . . . 8 f f f f f f f f f f f f f . . . . . . . 
. . . . 8 f f f f f f f f d d d d d f . . . . . . . 
. . . . 8 f f f f f f f f d d d d d . . . . . . . . 
. . . 8 f f f f f f f d d d d f d d . . . . . . . . 
. . . 8 f f f f f 8 f d d d d d d d . . . . . . . . 
. . 8 f f f f f . 8 f f d d d d d d . . . . . . . . 
. . 8 f f f f f . 8 f f d d d d d d . . . . . . . . 
. . 8 f f f f f . . . 8 f d d d d . . . . . . . . . 
. . 8 f f f f . . . 1 1 1 d d d . . . . . . . . . . 
. . 8 f f f f . e e e 1 1 1 d d 1 . . . . . . . . . 
. 8 f f f f f . e e e e 1 1 1 d d e e . . . . . . . 
. 8 f f f f f . e e e e e 8 1 1 d 1 e e . . . . . . 
. 8 f f f f f . e e e e e 8 8 8 1 1 e e . . . . . . 
. 8 f f f f . e e e e e e 8 8 8 8 1 e e . . . . . . 
. . 8 f f . . e e e e e e 8 8 8 8 8 8 e . . . . . . 
. . 8 f f . e e e e f e e 8 8 8 8 8 8 e . . . . . . 
. . 8 f . e e e e e f e e 8 8 8 8 8 8 e . . . . . . 
. . . . f e e e e f e e e 8 8 8 8 8 8 e . . . . . . 
. . . . f e e e e f e e e 8 8 8 8 8 e e e . . . . . 
. . . . e e e e f e e e e 8 8 8 8 8 e e e . . . . . 
. . . f e e e e f e e e e 8 8 8 8 8 e f e . . . . . 
. . . f e e e . f e e e e 8 8 8 8 8 e f e . . . . . 
. . f e e e e f e e e e e 8 8 8 8 8 e f e e . . . . 
. . f e e e e f e e e e e 2 2 2 2 2 2 f e e . . . . 
. . f e e e . f e e e e e 2 2 2 2 2 2 e f e . . . . 
. . f e e e . f e e e e 2 2 2 2 2 2 2 e f e . . . . 
. . f d d d . f e e e 2 2 2 2 2 2 2 2 e d d . . . . 
. . f d d . . f e 2 2 2 2 2 2 2 f 2 2 e d d . . . . 
. . f d d . . . f 2 2 2 2 2 2 f f 2 2 . d d . . . . 
. . . . . . . . f 2 2 2 2 2 2 f 2 2 2 . . . . . . . 
. . . . . . . . f 2 2 2 2 2 f f 2 2 2 . . . . . . . 
. . . . . . . . f 2 2 2 2 2 f f 2 2 2 . . . . . . . 
. . . . . . . . f 2 2 2 2 f f f 2 2 2 . . . . . . . 
. . . . . . . . f 2 2 2 2 . . f 2 2 2 . . . . . . . 
. . . . . . . . f 2 2 2 2 . . f 2 2 2 . . . . . . . 
. . . . . . . . f 2 2 2 2 . f 2 2 2 2 . . . . . . . 
. . . . . . . . f 2 2 2 2 . f 2 2 2 2 . . . . . . . 
. . . . . . . . f 2 2 2 2 . f 2 2 2 2 . . . . . . . 
. . . . . . . . f 2 2 2 2 . f 2 2 2 2 2 . . . . . . 
. . . . . . . f 2 2 2 2 2 . f 2 2 2 2 2 . . . . . . 
. . . . . . . f 2 2 2 2 2 . f 2 2 2 2 2 . . . . . . 
. . . . . . . f 2 2 2 2 2 . . f 2 2 2 2 . . . . . . 
. . . . . . . f 2 2 2 2 2 . . f 2 2 2 2 . . . . . . 
. . . . . . . f 2 2 2 2 . . . f 2 2 2 2 . . . . . . 
. . . . . . . f 2 2 2 2 . . . f 2 2 2 2 . . . . . . 
. . . . . . . f 2 2 2 2 . . . f 2 2 2 2 . . . . . . 
. . . . . . . f 2 2 2 2 . . . . f 2 2 2 . . . . . . 
. . . . . . . f 2 2 2 2 . . . . f 2 2 2 . . . . . . 
. . . . . . . f 2 2 2 2 . . . . f 2 2 2 2 . . . . . 
. . . . . . . f 2 2 2 2 . . . . f 2 2 2 2 . . . . . 
. . . . . . . f 2 2 2 2 . . . . f 2 2 2 2 . . . . . 
. . . . . . . . . f f f f . . . . f f f f f . . . . 
. . . . . . . . . f f f f f . . . . f f f f f . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
`],
            150,
            true
            )
        }
    }
})
function defineItems () {
    lassoSprite = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . 8 8 8 8 f f f f f 8 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 8 8 8 8 8 8 f f f f f f f f f f 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . 8 f f f f 8 f f f f 8 8 8 8 8 f f f 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f f 8 8 8 8 8 f 8 8 8 8 . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . 8 8 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f 8 8 f f f 8 8 8 . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . 8 8 8 8 8 8 9 9 f f f f f f f f f f f f f f f f f f f 8 8 8 f f 8 8 8 . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . 8 8 8 8 8 8 9 f f f f f f f f f f f f f f f f f f f f f f f 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . . . . . . . . . 
. . . . 8 8 8 f f 9 f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 8 8 8 8 . . . . . . . . . . . . . . . . . . . . . . . 
. . . 8 8 8 f f 9 f f f f f f f f f f f f 5 5 5 5 5 5 5 5 f f f f f 5 5 5 5 5 8 8 8 . . . . . . . . . . . . . . . . . . . . . . 
. . 8 8 8 8 f 9 f f f f f f f f f f f 5 5 5 f f f f f f 4 4 4 4 5 5 f f f 8 8 8 8 8 8 . . . . . . . . . . . . . . . . . . . . . 
. . 8 8 f f f 9 f f f f f f f f f 5 5 f f f f f 5 5 f 5 5 5 f f f f f f f 8 8 8 8 8 8 . . . . . . . . . . . . . . . . . . . . . 
. 8 8 8 f f 9 f f f f f f f f 5 5 5 5 5 5 4 4 4 4 4 4 4 f f 5 f f f f f f f 8 8 8 8 8 8 . . . . . . . . . . . . . . . . . . . . 
. 8 8 8 f 9 f f f f f f f 5 5 5 f f f f f 5 5 5 5 5 5 f f f 5 f f f f f f f f 8 f f 8 8 . . . . . . . . . . . . . . . . . . . . 
. 8 8 8 f 9 f f f f f f f 5 4 5 f f f f 5 5 5 f f f f 5 5 f f 5 f f f f f f f 8 8 f 8 8 . . . . . . . . . . . . . . . . . . . . 
8 8 8 8 f 9 f f f f f f 5 4 5 f f f 5 5 f f f f f f f f 5 5 4 5 5 f f f f f f 8 8 f f 8 6 . . . . . . . . . . . . . . . . . . . 
9 8 8 8 9 f f f f f f 4 5 4 5 f f 5 5 5 f f f f f f f f f 5 4 4 5 f f f f f f f 8 8 f 8 6 . . . . . . . . . . . . . . . . . . . 
9 8 8 8 9 f f f f f 4 4 5 5 f f f 5 5 f f f f f f f f f f f 5 f 5 f f f f f f f 8 8 f 6 6 . . . . . . . . . . . . . . . . . . . 
9 8 8 f 9 f f f f f 4 5 5 f f f 5 5 f f f f f f f f f f f f 5 f 5 5 f f f f f f 8 8 f 6 6 . . . . . . . . . . . . . . . . . . . 
9 8 8 f 9 f f f f f 4 5 5 f f f 5 5 f f f f f f f f f f f f 5 f f 5 f f f f f f 8 8 f 6 6 . . . . . . . . . . . . . . . . . . . 
f 8 8 f 9 f f f f f 5 5 5 f f f 5 5 f f f f f f f f f f f f 5 f f 5 5 f f f f f 9 f f f 6 . . . . . . . . . . . . . . . . . . . 
6 8 8 f 9 f f f f f 5 4 5 f f f 5 f f f f f f f f f f f f f 5 f f 5 5 f f f f f 9 8 8 f 6 . . . . . . . . . . . . . . . . . . . 
6 8 8 8 8 f f f f f 5 f 5 5 f f 5 f f f f f f f f f f f f f 5 f f f 5 f f f f f 9 8 8 f 6 . . . . . . . . . . . . . . . . . . . 
6 8 8 8 8 f f f f 5 f f 5 5 f f 5 f f f f f f f f f f f f 5 5 f f f 5 f f f f f 9 8 f f 6 . . . . . . . . . . . . . . . . . . . 
6 8 8 8 8 f f f f 5 f f 5 5 f f 5 f f f f f f f f f f f f 5 f f f 5 5 f f f f f 9 8 8 8 6 . . . . . . . . . . . . . . . . . . . 
6 8 8 8 8 f f f f 5 f f 4 5 f f 5 5 f f f f f f f 5 5 5 5 f f f f 5 5 f f f f f 9 8 8 8 6 . . . . . . . . . . . . . . . . . . . 
6 8 8 8 8 f f f 4 5 f f 4 5 f f f f 5 5 5 5 5 5 5 4 4 f f f f f f 5 f f f f f f 8 8 8 8 6 . . . . . . . . . . . . . . . . . . . 
6 8 8 8 8 8 f f 4 5 f f 4 5 5 f f f f 4 4 4 4 4 4 4 f f f f f 5 4 5 f f f f f 9 8 8 8 8 6 . . . . . . . . . . . . . . . . . . . 
. 6 8 8 8 8 f f 4 5 f f f 4 5 5 5 f f f f f f f f f f f 5 4 4 f 5 5 f f f f f 9 8 8 8 6 . . . . . . . . . . . . . . . . . . . . 
. 6 8 8 8 8 f f 4 5 f f f 4 5 f 5 5 5 f f f f f f 5 4 4 f 5 5 5 f f f f f f f 9 8 8 8 6 . . . . . . . . . . . . . . . . . . . . 
. 6 8 8 8 8 8 f 4 5 f f f 4 5 5 f f 4 4 4 4 5 5 4 4 4 5 5 5 f f f f f f f f 9 8 8 8 8 6 . . . . . . . . . . . . . . . . . . . . 
. . 6 f 8 8 8 8 4 5 f f f f 4 5 5 5 5 5 5 5 f f f f f 5 f f f f f f f f f 9 8 8 8 8 8 . . . . . . . . . . . . . . . . . . . . . 
. . 6 f f 8 8 8 4 4 5 f f f f 4 4 4 4 5 5 5 5 5 5 5 5 f f f f f f f f f f 9 8 8 8 8 8 . . . . . . . . . . . . . . . . . . . . . 
. . . 6 f f 8 8 8 4 5 f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 8 8 8 6 . . . . . . . . . . . . . . . . . . . . . . 
. . . . 6 f 8 8 8 4 5 5 f f f f f f f f f f f f f f f f f f f f f f f 8 8 8 8 8 6 . . . . . . . . . . . . . . . . . . . . . . . 
. . . . 6 f f 8 8 8 8 5 f f f f f f f f f f f f f f f f f f f f f f 8 8 8 8 8 8 6 . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . 8 f f 8 8 8 5 8 f f f f f f f f f f f f f f f f f f f 8 8 8 8 8 8 8 6 . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . 8 8 8 8 8 5 5 8 f f f f f f f f f f f f f f f f f 9 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . 8 f f 8 8 5 8 8 9 9 f f f f f f f f f f f 9 9 9 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . 8 f 8 8 8 8 8 8 8 8 9 9 9 9 9 9 9 9 8 8 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 8 f f f 8 8 8 8 8 8 8 8 f f f f 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . 6 6 6 8 f f f f f f f f f f f f f f 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Item)
    tiles.placeOnTile(lassoSprite, tiles.getTileLocation(17, 18))
    armorSprite = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . 5 5 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . 5 5 5 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . 5 1 . . . . . . . . . . . 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . . . 
5 5 . . . 5 1 . . . . . . . . 8 8 8 8 f f f f f 8 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . . 
5 5 . . . 5 1 . . . . . . 8 8 8 8 8 8 f f f f f f f f f f 8 8 8 8 8 8 8 . . . . . . . . . . . . 
5 5 5 5 5 5 1 . . . . . 8 f f f f 8 f f f f 8 8 8 8 8 f f f 8 8 8 8 8 8 8 . . . . . . . . . . . 
f 5 5 5 5 5 5 1 . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . . . . . . . 
. f f f f f 5 5 1 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f f 8 8 8 8 8 f 8 8 8 8 . . . . . . . . 
. . . . . . f 5 5 5 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f 8 8 f f f 8 8 8 . . . . . . . 
. . . . . . . f 5 5 5 8 8 9 9 f f f f f f f f f f f f f f f f f f f 8 8 8 f f 8 8 8 . . . . . . 
. . . . . . 8 8 f 5 5 5 9 f 1 1 1 5 5 f f f f f f f f f f f f f f f f f 8 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 f 5 5 1 1 5 5 5 5 f f f f f f f f f f f f f f f f f f f 8 8 8 8 8 8 . . . . . 
. . . . . 8 8 8 f f f 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f 8 8 8 8 8 8 . . . . 
. . . . 8 8 8 8 f 9 f 5 5 5 5 5 f 1 f f f f f f f f f f f f f f f f f f f f f 8 8 8 8 8 8 . . . 
. . . . 8 8 f f f f 5 5 5 5 5 f 1 1 1 f f 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f 8 8 8 8 8 8 . . . 
. . . 8 8 8 f f 9 f 5 5 5 5 f f 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f 8 8 8 8 8 8 . . 
. . . 8 8 8 f 9 f f 5 5 5 f 1 1 f 1 5 5 5 5 5 8 8 8 8 8 8 8 8 8 5 5 1 f f f f f f 8 f f 8 8 . . 
. . . 8 8 8 f 9 f f 5 5 f 1 1 1 1 5 5 5 5 8 9 8 8 8 8 8 8 8 8 8 8 8 5 5 f f f f f 8 8 f 8 8 . . 
. . 8 8 8 8 f 9 f f 5 f f f 1 1 5 5 5 5 8 9 9 8 5 5 5 5 5 5 5 5 5 8 8 5 1 f f f f 8 8 f f 8 6 . 
. . 9 8 8 8 9 f f f f f f f f 1 5 5 5 8 9 8 5 5 5 5 5 5 5 5 5 5 5 5 5 8 5 f f f f f 8 8 f 8 6 . 
. . 9 8 8 8 9 f f f f f f f f 5 5 5 8 8 8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 8 1 f f f f 8 8 f 6 6 . 
. . 9 8 8 f 9 f f f f f f f 5 5 5 5 8 8 8 5 5 5 5 f f f 5 f f f 5 5 5 5 8 5 5 f f f 8 8 f 6 6 . 
. . 9 8 8 f 9 f f f f f f f 5 5 5 8 8 8 5 5 5 5 5 f f f 5 f f f 5 5 5 5 5 8 1 f f f 8 8 f 6 6 . 
. . f 8 8 f 9 f f f f f f f 5 5 5 8 8 8 5 5 5 f f 5 f f 5 f f 5 f f 5 5 5 8 1 f f f 9 f f f 6 . 
. . 6 8 8 f 9 f f f f f f f 5 5 5 8 8 8 5 5 5 f f f 5 5 5 5 5 f f f 5 5 5 8 1 f f f 9 8 8 f 6 . 
. . 6 8 8 8 8 f f f f f f f 5 5 5 8 8 8 5 5 5 f f f 5 1 1 1 5 f f f 5 5 5 8 1 f f f 9 8 8 f 6 . 
. . 6 8 8 8 8 f f f f f f f 5 5 5 8 8 8 5 5 5 5 5 5 5 1 1 1 5 5 5 5 5 5 5 8 1 f f f 9 8 f f 6 . 
. . 6 8 8 8 8 f f f f f f f 5 5 5 9 8 8 5 5 5 f f f 5 1 1 1 5 f f f 5 5 5 8 5 f f f 9 8 8 8 6 . 
. . 6 8 8 8 8 f f f f f f f 5 5 5 9 8 8 5 5 5 f f f 5 5 5 5 5 f f f 5 5 5 8 5 f f f 9 8 8 8 6 . 
. . 6 8 8 8 8 f f f f f f f 5 5 5 9 8 8 5 5 5 f f 5 f f 5 f f 5 f f 5 5 1 8 5 f f f 8 8 8 8 6 . 
. . 6 8 8 8 8 8 f f f f f f 5 5 5 8 8 8 5 5 5 5 5 f f f 5 f f f 5 5 5 1 1 8 5 f f 9 8 8 8 8 6 . 
. . . 6 8 8 8 8 f f f f f f 5 5 5 5 9 9 8 5 5 5 5 f f f 5 f f f 5 5 5 1 8 5 5 f f 9 8 8 8 6 . . 
. . . 6 8 8 8 8 f f f f f f f 5 5 5 8 9 8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 1 8 5 f f f 9 8 8 8 6 . . 
. . . 6 8 8 8 8 8 f f f f f f f 5 5 5 9 8 8 5 5 5 5 5 5 5 5 5 5 5 1 1 8 5 5 f f 9 8 8 8 8 6 . . 
. . . . 6 f 8 8 8 8 f f f f f f 5 5 5 5 9 9 8 8 5 5 5 5 5 1 1 1 1 8 8 5 5 1 1 9 8 8 8 8 8 . . . 
. . . . 6 f f 8 8 8 f f f f f f f 5 5 5 5 8 9 8 8 8 8 8 8 8 8 8 8 8 5 5 f 1 1 1 8 8 8 8 8 . . . 
. . . . . 6 f f 8 8 8 f f f f f f f 5 5 5 5 5 8 9 9 9 9 9 8 8 8 5 5 5 f f 1 1 1 1 8 8 6 . . . . 
. . . . . . 6 f 8 8 8 8 f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 1 1 f 1 1 1 8 6 . . . . . 
. . . . . . 6 f f 8 8 8 f f f f f f f f f 5 5 5 1 1 1 1 1 1 1 1 f f 1 1 1 1 f 1 1 1 6 . . . . . 
. . . . . . . 8 f f 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 f 1 1 . . . . . . 
. . . . . . . . 8 8 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f 9 8 f 1 1 1 1 f 1 1 . . . . . 
. . . . . . . . . 8 f f 8 8 8 8 8 9 9 f f f f f f f f f f f 9 9 9 8 8 8 f f 1 1 1 1 1 . . . . . 
. . . . . . . . . . 8 f 8 8 8 8 8 8 8 8 9 9 9 9 9 9 9 9 8 8 8 8 8 8 8 8 8 8 f . 1 1 1 1 . . . . 
. . . . . . . . . . . f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . . . 1 1 . . . . 
. . . . . . . . . . . . . 8 f f f 8 8 8 8 8 8 8 8 f f f f 8 8 8 8 8 8 8 . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 6 6 6 8 f f f f f f f f f f f f f f 8 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . 6 6 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Item)
    tiles.placeOnTile(armorSprite, tiles.getTileLocation(15, 4))
}
function initGame () {
    info.setScore(0)
    tiles.setTilemap(tiles.createTilemap(hex`48003a00020304090a0304090a0304090a020304090a0304090a020304090a0304090a0304090a0304090a0304020000000000000000000000000000000000000000000000000000000000000205060b0c05060b0c05060b0c0205060b0c05060b0c0205060b0c05060b0c05060b0c05060b0c05060200000000000000000000000000000000000000000000000000000000000002070807080708070807080708020708070807080708020708070807080708070807080708070807080200000000000000000000000000000000000000000000000000000000000002010101010101010101010101020101010101010101020101010101010101010101010101010101010200000000000000000000000000000000000000000000000000000000000002010101010101010101010101020101010101010e0f0201010101010101010101010101010101010102000000000000000000000000000000000000000000000000000000000000020101010101010101010101010201010101010110110201010101010101010101010101010101010102000000000000000000000000000000000000000000000000000000000000020101010101010101010101010201010101010101010201010101010101010101010101010101010102000000000000000000000000000000000000000000000000000000000000020304090a0304090a010101010304090a0304090a0304090a0304090a0304090a0304020101010101020000000000000000000000000000000000000000000000000000000000000205060b0c05060b0c0101010105060b0c05060b0c05060b0c05060b0c05060b0c0506020101010101020000000000000000000000000000000000000000000000000000000000000207080708070807080101010107080708070807080708070807080708070807080708020101010101020000000000000000000000000000000000000000000000000000000000000201010101010101010101010101010101010101010101010101010101010101010101020101010101020000000000000000000000000000000000000000000000000000000000000201010101010101010101010101010101010101010101010101010101010101010101020101010101020000000000000000000000000000000000000000000000000000000000000201010101010101010101010101010101010101010101010101010101010101010101020101010101020000000000000000000000000000000000000000000000000000000000000201010101010101010101010101010101010101010101010101010101010101010101020101010101020000000000000000000000000000000000000000000000000000000000000201010101020304090a01010101020304090a02010101010304090a0304090a0304090a0101010101090a0304090a0304090a03040902000000000000000000000000000000000002010101010205060b0c010101010205060b0c020101010105060b0c05060b0c05060b0c01010101010b0c05060b0c05060b0c05060b0200000000000000000000000000000000000201010101020708070801010101020708070802010101010708070807080708070807080101010101070807080708070807080708070d000000000000000000000000000000000002010101010201010101010101010201010101020101010101010101010101010101010101010101010101010101010101010101010102000000000000000000000000000000000002010101010201010101010101010201010101020101010101010101010101010101010101010101010101010101010101010101010102000000000000000000000000000000000002010101010201010101010101010201010101020101010101010101010101010101010101010101010101010101010101010101010102000000000000000000000000000000000002010101010201010101010101010201010101020101010101010101010101010101010101010101010101010101010101010101010102000000000000000000000000000000000002010101010304090a0304090a0304010101010201010101020304090a01010101020304090a0304090a03040d010101010201010101020000000000000000000000000000000000020101010105060b0c05060b0c05060101010102010101010205060b0c010101010205060b0c05060b0c05060d01010101020101010102000000000000000000000000000000000002010101010708070807080708070801010101020101010102070807080101010102070807080708070807080d01010101020101010102000000000000000000000000000000000002010101010101010101010101010101010101020101010102010101010101010102010101010101010101010d01010101020101010102000000000000000000000000000000000002010101010101010101010101010101010101020101010102010101010101010102010113141212151601010d010101010201010101020000000000000000000000000000000000020101010101010101010101010101010101010201010101020101010101010101020101191d1212121a01010d01010101020101010102000000000000000000000000000000000002010101010101010101010101010101010101020101010102010101010101010102010112121212121d01010d01010101020101010102000000000000000000000000000000000002020304090a0304090a0304090a0304090a030401010101020101010101010101020101121e12121e1201010d010101010201010101020000000000000000000000000000000000000205060b0c05060b0c05060b0c05060b0c05060101010102010101010101010102010119121212121a01010d010101010201010101020000000000000000000000000000000000000207080708070807080708070807080708070801010101020101010101010101020101181b1d1e1c1701010d0101010102010101010200000000000000000000000000000000000002010101010101010101010101010101010101010101010201010101020304090a010101010101010101010d0101010102010101010304090a0304090a0304090a0304090a020000020101010101010101010101010101010101010101010102010101010205060b0c010101010101010101010d01010101020101010105060b0c05060b0c05060b0c05060b0c0200000201010101010101010101010101010101010101010101020101010102070807080101010101010101010101010101010201010101070807080708070807080708070807080200000201010101010101010101010101010101010101010101020101010102010101010101010101010101010101010101010201010101010101010101010101010101010101010200000201010101010304090a0304090a0304090a0304090a030401010101020101010101010101010101010101010101010102010101010101010101010101010101010101010102000002010101010105060b0c05060b0c05060b0c05060b0c050601010101020101010101010101010101010101010101010102010101010101010101010101010101010101010102000002010101010107080708070807080708070807080708070801010101020101010101010101010101010101010101010102010101010101010101010101010101010101010102000002010101010101010101010101010101010101010101010101010101020304090a0304090a0304090a0304090a0304090a0304090a0304090a020101010102020202020202020000020101010101010101010101010101010101010101010101010101010205060b0c05060b0c05060b0c05060b0c05060b0c05060b0c05060b0c02010101010200000000000000000002010101010101010101010101010101010101010101010101010101020708070807080708070807080708070807080708070807080708070802010101010200000000000000000002010101010101010101010101010101010101010101010101010101020101010101010101010101010101010101010101010101010101010102010101010200000000000000000002020202020202020202020202020202020202020202020202020202020e0f01010101010101010101010101010101010101010101010101010201010101020000000000000000000000000000000000000000000000000000000000000000000000000002101101010101010101010101010101010101010101010101010101010201010101020000000000000000000000000000000000000000000000000000000000000000000000000002010101010101010101010101010101010101010101010101010101010201010101020000000000000000000000000000000000000000000000000000000000000000000000000002020202020202020202020202020202020202020202020202010101010201010101020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002010101010201010101020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002010101010201010101020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002010101010201010101020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002010101010201010101020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002010101010101010101020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002010101010101010101020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002010101010101010101020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002010101010101010101020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002010101010101010101020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002020202020202020202020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . 2 . . . . . . . . 2 . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . 2 . . . . . . . . 2 . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . 2 . . . . . . . . 2 . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . 2 . . . . . . . . 2 . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . 2 . . . . . . . . 2 . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . 2 . . . . . . . . 2 . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 . . . . 2 2 2 2 2 . . . . 2 2 2 2 2 2 . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . 
2 . . . . 2 . . . . . . . . 2 . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . 
2 . . . . 2 . . . . . . . . 2 . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . 
2 . . . . 2 . . . . . . . . 2 . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . 
2 . . . . 2 . . . . . . . . 2 . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . 
2 . . . . 2 . . . . . . . . 2 . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . 
2 . . . . 2 . . . . . . . . 2 . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . 
2 . . . . 2 2 2 2 2 2 2 2 2 2 . . . . 2 . . . . 2 2 2 2 2 . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . 2 . . . . 2 . . . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . . . . . 2 . . . . 2 . . . . . . . . 2 . . . . . . . . . . 2 . . . . 2 . . . . 2 . . . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . . . . . 2 . . . . 2 . . . . . . . . 2 . . . . . . . . . . 2 . . . . 2 . . . . 2 . . . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . . . . . 2 . . . . 2 . . . . . . . . 2 . . . . . . . . . . 2 . . . . 2 . . . . 2 . . . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . . . . . 2 . . . . 2 . . . . . . . . 2 . . . . . . . . . . 2 . . . . 2 . . . . 2 . . . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . . . . . 2 . . . . 2 . . . . . . . . 2 . . . . . . . . . . 2 . . . . 2 . . . . 2 . . . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . . . . . 2 . . . . 2 . . . . . . . . 2 . . . . . . . . . . 2 . . . . 2 . . . . 2 . . . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . 2 . . . . . . . . 2 . . . . . . . . . . 2 . . . . 2 . . . . 2 . . . . . . . . . . . . . . . . . 
. 2 . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . 2 . . . . . . . . . . 2 . . . . 2 . . . . 2 . . . . . . . . . . . . . . . . . 
. 2 . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . 2 . . . . . . . . . . 2 . . . . 2 . . . . 2 . . . . . . . . . . . . . . . . . 
. 2 . . . . . . . . . . . . . . . . . . . . . . 2 . . . . 2 2 2 2 2 . . . . . . . . . . 2 . . . . 2 . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
. 2 . . . . . . . . . . . . . . . . . . . . . . 2 . . . . 2 . . . . . . . . . . . . . . 2 . . . . 2 . . . . . . . . . . . . . . . . . . . . 2 . 
. 2 . . . . . . . . . . . . . . . . . . . . . . 2 . . . . 2 . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . 2 . 
. 2 . . . . . . . . . . . . . . . . . . . . . . 2 . . . . 2 . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . 2 . 
. 2 . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . 2 . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . 2 . 
. 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . 2 . 
. 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . 2 . 
. 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . 2 2 2 2 2 2 2 2 . 
. 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . 2 . . . . . . . . 
. 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . 2 . . . . . . . . 
. 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . 2 . . . . . . . . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . 2 . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . 2 . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . 2 . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . 2 . . . . 2 . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . 2 . . . . 2 . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . 2 . . . . 2 . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . 2 . . . . 2 . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . 2 . . . . 2 . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . 2 . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . 2 . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . 2 . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . 2 . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . 2 . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.darkGroundCenter,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorDarkDiamond,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.floorDark3,sprites.dungeon.floorDark5], TileScale.Sixteen))
    game.setDialogFrame(img`
f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f 
`)
    bbHealth = 10
    chaosHealth = 10
    lasso = 0
    armor = 0
    facingRight = true
    facingLeft = false
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenInnerNorthWest, function (sprite, location) {
    music.powerDown.play()
    if (wwSprite.y < 100) {
        tiles.placeOnTile(wwSprite, tiles.getTileLocation(32, 42))
    } else {
        tiles.placeOnTile(wwSprite, tiles.getTileLocation(18, 4))
    }
})
function showInstructions () {
    scene.setBackgroundImage(img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 5 f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 4 4 4 4 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 4 4 4 4 4 f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 4 4 4 4 4 4 e f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 4 4 4 4 4 4 e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 4 4 4 4 4 4 1 1 1 e f f 1 f 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 4 4 4 4 4 4 e e e e 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 4 4 4 4 4 4 4 e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 4 4 4 4 4 4 e e e e 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 4 4 4 4 4 4 4 e e e e 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 4 4 4 4 4 4 4 e e e e 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f 4 4 4 4 4 4 4 e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 4 4 4 4 4 4 4 e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f 4 4 4 4 4 4 4 e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f 4 4 4 4 4 4 4 e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f 1 f f f 1 1 f f f f f 4 4 4 4 4 4 5 e e e e e e e f f f f f f f f 5 4 e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 4 4 4 4 4 4 5 e e e e e e e f f f f f f 5 4 4 4 e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f 4 4 4 4 4 4 5 e e e e e e e f f f f f 5 4 4 4 4 e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f 4 4 4 4 4 4 5 e e e e e e e e f f f 5 4 4 4 4 4 e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f 4 4 4 4 4 4 5 e e e e e e e e f f f 5 4 4 4 4 e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 4 4 4 4 4 4 5 e e e e e e e e f f f 4 4 4 4 4 e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 4 4 4 4 4 4 5 e e e e e e e e e f 4 4 4 4 4 4 e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 4 4 4 4 4 4 5 e e e e e e e e e e 4 4 4 4 4 4 e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 4 4 4 4 4 4 5 e e e e e e e e e 4 4 4 4 4 4 e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 4 4 4 4 4 4 5 e e e e e e e e e 4 4 4 4 4 5 e e e e e f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 4 4 4 4 4 4 5 e e e e e e e e e 4 4 4 4 4 5 e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 4 4 4 4 4 4 5 e e e e e e e e 4 4 4 4 4 5 e e e e e e f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e e e f f 4 4 4 4 4 4 5 e e e e e e e e 4 4 4 4 4 5 e e e e e 1 f 1 f f f 1 f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 e e e e 4 4 4 4 4 4 5 e e e e e e e 4 4 4 4 4 4 5 e e e e e f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 4 e e e e e 4 4 4 4 5 e e e e e e e 4 4 4 4 4 4 5 e e e e f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 4 4 e e e e e 4 4 4 4 e e e e e e e 4 4 4 4 4 4 e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 4 4 4 4 e e e e e e c 4 e e e e e e 4 4 4 4 4 4 4 e e e e c f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 4 4 4 4 e e e e e c 4 e e e e e e 4 4 4 4 4 4 4 e e e c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 4 4 4 4 4 4 e e e e c c e e e e e 4 4 4 4 4 4 4 e e c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 4 4 4 4 4 4 4 e e e c c e e e e e 4 4 4 4 4 4 e c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e e e e 4 4 4 4 e e c c c e e e e 4 4 4 4 4 4 e c f c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e e 4 4 4 4 e c c c c e e e 4 4 c c 4 4 e e c f f c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c e 4 4 e e c c c c e e e 4 4 c c c e c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c e c c c c f c c e 4 4 4 c c c f c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c f f c c c 4 4 c c c c f f f c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c f f c f f c c c c c c c c c f f f f c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c f f f f f c c c c c c c c f f f f f c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c f c c c c f f f f f f f f c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c f f c f f f f c f f f f f c f f c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`)
    game.showLongText("Wonder Woman needs your help! Collect all the artifacts, fight Barbara, and destroy the Shard of Chaos before it's too late!", DialogLayout.Full)
    game.showLongText("To win:\nCollect 25 points\nRetrieve your lasso and defeat the Cheetah\nArmor up and destroy the Shard of Chaos", DialogLayout.Full)
    scene.setBackgroundImage(img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    music.stopAllSounds()
    music.playTone(349, music.beat(BeatFraction.Eighth))
    scene.cameraShake(3, 200)
    if (lasso == 1) {
        bbHealth += -1
    } else if (armor == 1) {
        bbHealth += -3
    } else {
        game.showLongText("Without her lasso, Wonder Woman could not defeat Barbara", DialogLayout.Bottom)
        game.over(false)
    }
})
function defineEnemies () {
    bbSprite = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f f . . . . . . . . . . . 
. . . . . . . . . f 5 5 5 5 5 f . . . . . . . . . . 
. . . . . . . . . f 5 5 5 5 5 f f . . . . . . . . . 
. . . . . . . . f 5 5 d d 5 f 5 5 f . . . . . . . . 
. . . . . . . f 5 5 5 d d d d 5 5 f . . . . . . . . 
. . . . . . . f 5 5 d d d d d d 5 f . . . . . . . . 
. . . . . . f 5 5 5 d f d d f d d 5 f . . . . . . . 
. . . . . . f 5 5 5 d d d d d d d 5 f . . . . . . . 
. . . . . . f 5 5 5 d d d d d d 5 5 f . . . . . . . 
. . . . . . f 5 5 5 5 d d d d 5 5 f . . . . . . . . 
. . . . . . . f 5 5 5 5 d d 5 5 5 f . . . . . . . . 
. f d d d . . . e 5 5 e d d e e e e . . . . . . . . 
. f d d d . . . e 5 e d d d d e e e e . . . . . . . 
. f d d . . . e 5 5 e f d d f e e e e . . . . . . . 
f e e e . . . e e e e e f f f e e e e e . . . . . . 
f e e e e . . e e f e e e f e e e f e e . . . . . . 
. f e e e . e e f f e e e f e e e f e e . . . . . . 
. f e e e e e e f e e e e f e e e e f e e . . . . . 
. . f e e e e e f e e e e f e e e e f e e . . . . . 
. . f e e e e . f e e e e f e e e e f e e e . . . . 
. . . f e e . . f e e e f f f e e e . e e e . . . . 
. . . . f f . . f e e f f f f f e e . e e e e . . . 
. . . . . . . . . . f f f f f f f . . f 3 e e . . . 
. . . . . . . . . f 4 4 4 4 4 4 4 . . . f e e . . . 
. . . . . . . . f 4 4 f 4 4 f 4 4 f . . f e e e . . 
. . . . . . . . f f 4 4 4 4 4 4 4 4 . . f e e e . . 
. . . . . . . f 4 4 4 4 f 4 4 4 f 4 4 . f e e e . . 
. . . . . . . f 4 f 4 4 4 4 4 4 4 4 f . f d d . . . 
. . . . . . f 4 4 4 4 4 4 f 4 4 4 4 4 f d d d . . . 
. . . . . . f f 4 4 f 4 4 4 4 4 4 f 4 f d d d . . . 
. . . . . . f 4 4 4 4 4 f 4 4 f 4 4 4 . . . . . . . 
. . . . . . f 4 f 4 4 4 4 4 4 4 4 4 f . . . . . . . 
. . . . . . f 4 4 4 f 4 4 f 4 4 4 4 4 . . . . . . . 
. . . . . . f 4 4 4 4 4 4 4 4 4 f 4 4 . . . . . . . 
. . . . . . f 4 f 4 4 4 f 4 4 4 4 4 4 . . . . . . . 
. . . . . . f e e e e 4 4 4 4 4 e e . . . . . . . . 
. . . . . . f e e e e . f e e e e e . . . . . . . . 
. . . . . . f e e e e . . f e e e e . . . . . . . . 
. . . . . . f e e e e . . f e e e e . . . . . . . . 
. . . . . . f e e e e . . f e e e e . . . . . . . . 
. . . . . . f e e e . . . f e e e e . . . . . . . . 
. . . . . . f e e e . . . f e e e e . . . . . . . . 
. . . . . . f e e e . . . . f e e e . . . . . . . . 
. . . . . f e e e e . . . . f e e e . . . . . . . . 
. . . . . f e e e e . . . . f e e e . . . . . . . . 
. . . . . f e e e e . . . . f e e e . . . . . . . . 
. . . . . f e e e e . . . . f e e e . . . . . . . . 
. . . . . f e e e . . . . . f e e e . . . . . . . . 
. . . . . f e e e . . . . . f e e e . . . . . . . . 
. . . . . f e e e . . . . . f e e e . . . . . . . . 
. . . . . f e e e . . . . . f e e e . . . . . . . . 
. . . . . f e e e . . . . . f e e e . . . . . . . . 
. . . . . f e e e e . . . f e e e e . . . . . . . . 
. . . . f e e e e e . . . f e e e e e . . . . . . . 
. . . f e e e e . e . . . f e . e e e e . . . . . . 
. . . . f f f f . e . . . f e . f f f f . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    chaosSprite = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 5 5 . . . . . . . 1 . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 5 4 4 4 4 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 5 4 4 4 4 4 . . . . 1 . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 5 4 4 4 4 4 4 e . . . 1 . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 5 4 4 4 4 4 4 e e e . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 5 4 4 4 4 4 4 1 1 1 e . . 1 . 1 1 . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 5 4 4 4 4 4 4 e e e e 1 . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 4 4 4 4 4 4 4 e e e e . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 5 4 4 4 4 4 4 e e e e 1 . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 4 4 4 4 4 4 4 e e e e 1 . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 4 4 4 4 4 4 4 e e e e 1 . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . 1 . . . . . . . . 4 4 4 4 4 4 4 e e e e e e . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 4 4 4 4 4 4 4 e e e e e e . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . 1 . . . . . . . . 4 4 4 4 4 4 4 e e e e e e . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . 1 . . . . . . . . 4 4 4 4 4 4 4 e e e e e e . . . . . . . . . . . . . . . . . . . . . . . 
. 1 . 1 . . . 1 1 . . . . . 4 4 4 4 4 4 5 e e e e e e e . . . . . . . . 5 4 e . . . . . . . . . . . 
. . . . . . . . . . . . . . 4 4 4 4 4 4 5 e e e e e e e . . . . . . 5 4 4 4 e . . . . . . . . . . . 
. . . . . 1 . . . . . . . . 4 4 4 4 4 4 5 e e e e e e e . . . . . 5 4 4 4 4 e e . . . . . . . . . . 
. . . . . 1 . . . . . . . . 4 4 4 4 4 4 5 e e e e e e e e . . . 5 4 4 4 4 4 e e . . . . . . . . . . 
. . . . . 1 . . . . . . . . 4 4 4 4 4 4 5 e e e e e e e e . . . 5 4 4 4 4 e e e . . . . . . . . . . 
. . . . . . . . . . . . . . 4 4 4 4 4 4 5 e e e e e e e e . . . 4 4 4 4 4 e e e . . . . . . . . . . 
. . . . . . . . . . . . . . 4 4 4 4 4 4 5 e e e e e e e e e . 4 4 4 4 4 4 e e e e . . . . . . . . . 
. . . . . . . . . . . . . . 4 4 4 4 4 4 5 e e e e e e e e e e 4 4 4 4 4 4 e e e e . . . . . . . . . 
. . . . . . . . . . . . . . 4 4 4 4 4 4 5 e e e e e e e e e 4 4 4 4 4 4 e e e e e . . . . . . . . . 
. . . . . . . . . . . . . . 4 4 4 4 4 4 5 e e e e e e e e e 4 4 4 4 4 5 e e e e e . . . 1 . . . . . 
. . . . . . . . . . . . . . 4 4 4 4 4 4 5 e e e e e e e e e 4 4 4 4 4 5 e e e e e . . . . . . . . . 
. . . . . . . . . . . . . . 4 4 4 4 4 4 5 e e e e e e e e 4 4 4 4 4 5 e e e e e e . . . 1 . . . . . 
. . . . . . . . . e e e . . 4 4 4 4 4 4 5 e e e e e e e e 4 4 4 4 4 5 e e e e e 1 . 1 . . . 1 . 1 . 
. . . . . . . . . 5 e e e e 4 4 4 4 4 4 5 e e e e e e e 4 4 4 4 4 4 5 e e e e e . . . . 1 . . . . . 
. . . . . . . . . 5 4 e e e e e 4 4 4 4 5 e e e e e e e 4 4 4 4 4 4 5 e e e e . . . . . 1 . . . . . 
. . . . . . . . . 5 4 4 e e e e e 4 4 4 4 e e e e e e e 4 4 4 4 4 4 e e e e e . . . . . . . . . . . 
. . . . . . . . . 4 4 4 4 e e e e e e c 4 e e e e e e 4 4 4 4 4 4 4 e e e e c . . . . . 1 . . . . . 
. . . . . . . . . 5 4 4 4 4 e e e e e c 4 e e e e e e 4 4 4 4 4 4 4 e e e c . . . . . . . . . . . . 
. . . . . . . . . 4 4 4 4 4 4 e e e e c c e e e e e 4 4 4 4 4 4 4 e e c c c . . . . . . . . . . . . 
. . . . . . . . . 4 4 4 4 4 4 4 e e e c c e e e e e 4 4 4 4 4 4 e c c c c c . . . . . . . . . . . . 
. . . . . . . . . e e e e 4 4 4 4 e e c c c e e e e 4 4 4 4 4 4 e c f c c . . . . . . . . . . . . . 
. . . . . . . . . . . e e 4 4 4 4 e c c c c e e e 4 4 c c 4 4 e e c f f c . . . . . . . . . . . . . 
. . . . . . . . . . . c c e 4 4 e e c c c c e e e 4 4 c c c e c c c c f f . . . . . . . . . . . . . 
. . . . . . . . . . . c c c c e c c c c f c c e 4 4 4 c c c f c c c c f f . . . . . . . . . . . . . 
. . . . . . . . . . . . c c c c c c c f f c c c 4 4 c c c c f f f c c f . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . c c f f c f f c c c c c c c c c f f f f c c . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . c c f f f f f c c c c c c c c f f f f f c . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f c c c c f c c c c f f f f f f f f c . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . c f f c f f f f c f f f f f c f f c . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . f f f c f f f f f f f f . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . f f c c f f f f . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Gem)
    animation.runImageAnimation(
    bbSprite,
    [img`
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . f f f f f . . . . . . . . . . . . 
. . . . . . . . f 5 5 5 5 5 f . . . . . . . . . . . 
. . . . . . . . f 5 5 5 5 5 f f . . . . . . . . . . 
. . . . . . . f 5 5 d d 5 f 5 5 f . . . . . . . . . 
. . . . . . f 5 5 5 d d d d 5 5 f . . . . . . . . . 
. . . . . . f 5 5 d d d d d d 5 f . . . . . . . . . 
. . . . . f 5 5 5 d f d d f d d 5 f . . . . . . . . 
. . . . . f 5 5 5 d d d d d d d 5 f . . . . . . . . 
. . . . . f 5 5 5 d d d d d d 5 5 f . . . . . . . . 
. . . . . f 5 5 5 5 d d d d 5 5 f . . . . . . . . . 
. . . . . . f 5 5 5 5 d d 5 5 5 f . . . . . . . . . 
f d d d . . . e 5 5 e d d e e e e . . . . . . . . . 
f d d d . . . e 5 e d d d d e e e e . . . . . . . . 
f d d . . . e 5 5 e f d d f e e e e . . . . . . . . 
f e e . . . e e e e e f f f e e e e e . . . . . . . 
f e e e . . e e f e e e f e e e f e e . . . . . . . 
f e e e . e e f f e e e f e e e f e e . . . . . . . 
f e e e e e e f e e e e f e e e e f e e . . . . . . 
. f e e e e e f e e e e f e e e e f e e . . . . . . 
. f e e e e . f e e e e f e e e e f e e e . . . . . 
. . f e e . . f e e e f f f e e e . e e e . . . . . 
. . . f f . . f e e f f f f f e e . e e e e . . . . 
. . . . . . . . . f f f f f f f . . f e e e . . . . 
. . . . . . . . f 4 4 4 4 4 4 4 . . . f e e . . . . 
. . . . . . . f 4 4 f 4 4 f 4 4 f . . f e e e . . . 
. . . . . . . f f 4 4 4 4 4 4 4 4 . . f e e e . . . 
. . . . . . f 4 4 4 4 f 4 4 4 f 4 4 . f e e e . . . 
. . . . . . f 4 f 4 4 4 4 4 4 4 4 f . f d d . . . . 
. . . . . f 4 4 4 4 4 4 f 4 4 4 4 4 f d d d . . . . 
. . . . . f f 4 4 f 4 4 4 4 4 4 f 4 f d d d . . . . 
. . . . . f 4 4 4 4 4 f 4 4 f 4 4 4 . . . . . . . . 
. . . . . f 4 f 4 4 4 4 4 4 4 4 4 f . . . . . . . . 
. . . . . f 4 4 4 f 4 4 f 4 4 4 4 4 . . . . . . . . 
. . . . . f 4 4 4 4 4 4 4 4 4 f 4 4 . . . . . . . . 
. . . . . f 4 f 4 4 4 f 4 4 4 4 4 4 . . . . . . . . 
. . . . . f e e e e 4 4 4 4 4 e e . . . . . . . . . 
. . . . . f e e e e . f e e e e e . . . . . . . . . 
. . . . . f e e e e . . f e e e e . . . . . . . . . 
. . . . . f e e e e . . f e e e e . . . . . . . . . 
. . . . . f e e e e e . . f e e e e . . . . . . . . 
. . . . . f e e e e e . . f e e e e . . . . . . . . 
. . . . . f e e e e e . . f e e e e . . . . . . . . 
. . . . . f e e e e . . . . f e e e . . . . . . . . 
. . . . . f e e e e . . . . f e e e . . . . . . . . 
. . . . . f e e e e . . . . f e e e . . . . . . . . 
. . . . . f e e e e . . . . f e e e . . . . . . . . 
. . . . . f e e e e . . . . f e e e . . . . . . . . 
. . . . . f e e e . . . . . f e e e . . . . . . . . 
. . . . . f e e e . . . . . f e e e . . . . . . . . 
. . . . . f e e e . . . . . f e e e . . . . . . . . 
. . . . . f e e e . . . . . f e e e . . . . . . . . 
. . . . . f e e e . . . . . f e e e . . . . . . . . 
. . . . . f e e e e . . . f e e e e . . . . . . . . 
. . . . f e e e e e . . . f e e e e e . . . . . . . 
. . . f e e e e . e . . . f e . e e e e . . . . . . 
. . . . f f f f . e . . . f e . f f f f . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . f f f f f . . . . . . . . . . . . 
. . . . . . . . f 5 5 5 5 5 f . . . . . . . . . . . 
. . . . . . . . f 5 5 5 5 5 f f . . . . . . . . . . 
. . . . . . . f 5 5 d d 5 f 5 5 f . . . . . . . . . 
. . . . . . f 5 5 5 d d d d 5 5 f . . . . . . . . . 
. . . . . . f 5 5 d d d d d d 5 f . . . . . . . . . 
. . . . . f 5 5 5 d f d d f d d 5 f . . . . . . . . 
. . . . . f 5 5 5 d d d d d d d 5 f . . . . . . . . 
. . . . . f 5 5 5 d d d d d d 5 5 f . . . . . . . . 
. . . . . f 5 5 5 5 d d d d 5 5 f . . . . . . . . . 
. . . . . . f 5 5 5 5 d d 5 5 5 f . . . . . . . . . 
f d d d . . . e 5 5 e d d e e e e . . . . . . . . . 
f d d d . . . e 5 e d d d d e e e e . . . . . . . . 
f d d . . . e 5 5 e f d d f e e e e . . . . . . . . 
f e e . . . e e e e e f f f e e e e e . . . . . . . 
f e e e . . e e f e e e f e e e f e e . . . . . . . 
f e e e . e e f f e e e f e e e f e e . . . . . . . 
f e e e e e e f e e e e f e e e e f e e . . . . . . 
. f e e e e e f e e e e f e e e e f e e . . . . . . 
. f e e e e . f e e e e f e e e e f e e e . . . . . 
. . f e e . . f e e e f f f e e e . e e e . . . . . 
. . . f f . . f e e f f f f f e e . e e e e . . . . 
. . . . . . . . . f f f f f f f . . f e e e . . . . 
. . . . . . . . f 4 4 4 4 4 4 4 . . . f e e . . . . 
. . . . . . . f 4 4 f 4 4 f 4 4 f . . f e e e . . . 
. . . . . . . f f 4 4 4 4 4 4 4 4 . . f e e e . . . 
. . . . . . f 4 4 4 4 f 4 4 4 f 4 4 . f e e e . . . 
. . . . . . f 4 f 4 4 4 4 4 4 4 4 f . f d d . . . . 
. . . . . f 4 4 4 4 4 4 f 4 4 4 4 4 f d d d . . . . 
. . . . . f f 4 4 f 4 4 4 4 4 4 f 4 f d d d . . . . 
. . . . . f 4 4 4 4 4 f 4 4 f 4 4 4 . . . . . . . . 
. . . . . f 4 f 4 4 4 4 4 4 4 4 4 f . . . . . . . . 
. . . . . f 4 4 4 f 4 4 f 4 4 4 4 4 . . . . . . . . 
. . . . . f 4 4 4 4 4 4 4 4 4 f 4 4 . . . . . . . . 
. . . . . f 4 f 4 4 4 f 4 4 4 4 4 4 . . . . . . . . 
. . . . . f e e e e 4 4 4 4 4 e e . . . . . . . . . 
. . . . . f e e e e . f e e e e e . . . . . . . . . 
. . . . . f e e e e . . f e e e e . . . . . . . . . 
. . . . . f e e e e . . f e e e e . . . . . . . . . 
. . . . . f e e e e e . . f e e e e . . . . . . . . 
. . . . . f e e e e e . . f e e e e . . . . . . . . 
. . . . . f e e e e e . . . f e e e . . . . . . . . 
. . . . . f e e e e . . . . f e e e . . . . . . . . 
. . . . . f e e e e . . . . f e e e . . . . . . . . 
. . . . . f e e e e . . . . f e e e . . . . . . . . 
. . . . . f e e e e . . . . f e e e . . . . . . . . 
. . . . . f e e e . . . . . f e e e . . . . . . . . 
. . . . . f e e e . . . . . f e e e . . . . . . . . 
. . . . . f e e e . . . . . f e e e . . . . . . . . 
. . . . . f e e e . . . . . f e e e . . . . . . . . 
. . . . . f e e e . . . . . f e e e . . . . . . . . 
. . . . . f e e e e . . . f e e e e . . . . . . . . 
. . . . f e e e e e . . . f e e e e e . . . . . . . 
. . . f e e e e . e . . . f e . e e e e . . . . . . 
. . . . f f f f . e . . . f e . f f f f . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . f f f f f . . . . . . . . . . . . 
. . . . . . . . f 5 5 5 5 5 f . . . . . . . . . . . 
. . . . . . . . f 5 5 5 5 5 f f . . . . . . . . . . 
. . . . . . . f 5 5 d d 5 f 5 5 f . . . . . . . . . 
. . . . . . f 5 5 5 d d d d 5 5 f . . . . . . . . . 
. . . . . . f 5 5 d d d d d d 5 f . . . . . . . . . 
. . . . . f 5 5 5 d f d d f d d 5 f . . . . . . . . 
. . . . . f 5 5 5 d d d d d d d 5 f . . . . . . . . 
. . . . . f 5 5 5 d d d d d d 5 5 f . . . . . . . . 
. . . . . f 5 5 5 5 d d d d 5 5 f . . . . . . . . . 
. . . . . . f 5 5 5 5 d d 5 5 5 f . . . . . . . . . 
f d d d . . . e 5 5 e d d e e e e . . . . . . . . . 
f d d d . . . e 5 e d d d d e e e e . . . . . . . . 
f d d . . . e 5 5 e f d d f e e e e . . . . . . . . 
f e e . . . e e e e e f f f e e e e e . . . . . . . 
f e e e . . e e f e e e f e e e f e e . . . . . . . 
f e e e . e e f f e e e f e e e f e e . . . . . . . 
f e e e e e e f e e e e f e e e e f e e . . . . . . 
. f e e e e e f e e e e f e e e e f e e . . . . . . 
. f e e e e . f e e e e f e e e e f e e e . . . . . 
. . f e e . . f e e e f f f e e e . e e e . . . . . 
. . . f f . . f e e f f f f f e e . e e e e . . . . 
. . . . . . . . . f f f f f f f . . f e e e . . . . 
. . . . . . . . f 4 4 4 4 4 4 4 . . . f e e . . . . 
. . . . . . . f 4 4 f 4 4 f 4 4 f . . f e e e . . . 
. . . . . . . f f 4 4 4 4 4 4 4 4 . . f e e e . . . 
. . . . . . f 4 4 4 4 f 4 4 4 f 4 4 . f e e e . . . 
. . . . . . f 4 f 4 4 4 4 4 4 4 4 f . f d d . . . . 
. . . . . f 4 4 4 4 4 4 f 4 4 4 4 4 f d d d . . . . 
. . . . . f f 4 4 f 4 4 4 4 4 4 f 4 f d d d . . . . 
. . . . . f 4 4 4 4 4 f 4 4 f 4 4 4 . . . . . . . . 
. . . . . f 4 f 4 4 4 4 4 4 4 4 4 f . . . . . . . . 
. . . . . f 4 4 4 f 4 4 f 4 4 4 4 4 . . . . . . . . 
. . . . . f 4 4 4 4 4 4 4 4 4 f 4 4 . . . . . . . . 
. . . . . f 4 f 4 4 4 f 4 4 4 4 4 4 . . . . . . . . 
. . . . . f e e e e 4 4 4 4 4 e e . . . . . . . . . 
. . . . . f e e e e . f e e e e e . . . . . . . . . 
. . . . . f e e e e . . f e e e e . . . . . . . . . 
. . . . . f e e e e . . f e e e e . . . . . . . . . 
. . . . . f e e e e e . . f e e e e . . . . . . . . 
. . . . . f e e e e e . . f e e e e . . . . . . . . 
. . . . . f e e e e e . . f e e e e . . . . . . . . 
. . . . . f e e e e . . . . f e e e . . . . . . . . 
. . . . . f e e e e . . . . f e e e . . . . . . . . 
. . . . . f e e e e . . . . f e e e . . . . . . . . 
. . . . . f e e e e . . . . f e e e . . . . . . . . 
. . . . . f e e e e . . . . f e e e . . . . . . . . 
. . . . . f e e e . . . . . f e e e . . . . . . . . 
. . . . . f e e e . . . . . f e e e . . . . . . . . 
. . . . . f e e e . . . . . f e e e . . . . . . . . 
. . . . . f e e e . . . . . f e e e . . . . . . . . 
. . . . . f e e e . . . . . f e e e . . . . . . . . 
. . . . . f e e e e . . . f e e e e . . . . . . . . 
. . . . f e e e e e . . . f e e e e e . . . . . . . 
. . . f e e e e . e . . . f e . e e e e . . . . . . 
. . . . f f f f . e . . . f e . f f f f . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f f . . . . . . . . . . . 
. . . . . . . . . f 5 5 5 5 5 f . . . . . . . . . . 
. . . . . . . . . f 5 5 5 5 5 f f . . . . . . . . . 
. . . . . . . . f 5 5 d d 5 f 5 5 f . . . . . . . . 
. . . . . . . f 5 5 5 d d d d 5 5 f . . . . . . . . 
. . . . . . . f 5 5 d d d d d d 5 f . . . . . . . . 
. . . . . . f 5 5 5 d f d d f d d 5 f . . . . . . . 
. . . . . . f 5 5 5 d d d d d d d 5 f . . . . . . . 
. . . . . . f 5 5 5 d d d d d d 5 5 f . . . . . . . 
. . . . . . f 5 5 5 5 d d d d 5 5 f . . . . . . . . 
. . . . . . . f 5 5 5 5 d d 5 5 5 f . . . . . . . . 
. f d d d . . . e 5 5 e d d e e e e . . . . . . . . 
. f d d d . . . e 5 e d d d d e e e e . . . . . . . 
. f d d . . . e 5 5 e f d d f e e e e . . . . . . . 
f e e e . . . e e e e e f f f e e e e e . . . . . . 
f e e e e . . e e f e e e f e e e f e e . . . . . . 
. f e e e . e e f f e e e f e e e f e e . . . . . . 
. f e e e e e e f e e e e f e e e e f e e . . . . . 
. . f e e e e e f e e e e f e e e e f e e . . . . . 
. . f e e e e . f e e e e f e e e e f e e e . . . . 
. . . f e e . . f e e e f f f e e e . e e e . . . . 
. . . . f f . . f e e f f f f f e e . e e e e . . . 
. . . . . . . . . . f f f f f f f . . f e e e . . . 
. . . . . . . . . f 4 4 4 4 4 4 4 . . . f e e . . . 
. . . . . . . . f 4 4 f 4 4 f 4 4 f . . f e e e . . 
. . . . . . . . f f 4 4 4 4 4 4 4 4 . . f e e e . . 
. . . . . . . f 4 4 4 4 f 4 4 4 f 4 4 . f e e e . . 
. . . . . . . f 4 f 4 4 4 4 4 4 4 4 f . f d d . . . 
. . . . . . f 4 4 4 4 4 4 f 4 4 4 4 4 f d d d . . . 
. . . . . . f f 4 4 f 4 4 4 4 4 4 f 4 f d d d . . . 
. . . . . . f 4 4 4 4 4 f 4 4 f 4 4 4 . . . . . . . 
. . . . . . f 4 f 4 4 4 4 4 4 4 4 4 f . . . . . . . 
. . . . . . f 4 4 4 f 4 4 f 4 4 4 4 4 . . . . . . . 
. . . . . . f 4 4 4 4 4 4 4 4 4 f 4 4 . . . . . . . 
. . . . . . f 4 f 4 4 4 f 4 4 4 4 4 4 . . . . . . . 
. . . . . . f e e e e 4 4 4 4 4 e e . . . . . . . . 
. . . . . . f e e e e . f e e e e e . . . . . . . . 
. . . . . . f e e e e . . f e e e e . . . . . . . . 
. . . . . . f e e e e . . f e e e e . . . . . . . . 
. . . . . . f e e e e . . f e e e e . . . . . . . . 
. . . . . . f e e e . . . f e e e e . . . . . . . . 
. . . . . . f e e e . . . f e e e e . . . . . . . . 
. . . . . . f e e e . . . . f e e e . . . . . . . . 
. . . . . f e e e e . . . . f e e e . . . . . . . . 
. . . . . f e e e e . . . . f e e e . . . . . . . . 
. . . . . f e e e e . . . . f e e e . . . . . . . . 
. . . . . f e e e e . . . . f e e e . . . . . . . . 
. . . . . f e e e . . . . . f e e e . . . . . . . . 
. . . . . f e e e . . . . . f e e e . . . . . . . . 
. . . . . f e e e . . . . . f e e e . . . . . . . . 
. . . . . f e e e . . . . . f e e e . . . . . . . . 
. . . . . f e e e . . . . . f e e e . . . . . . . . 
. . . . . f e e e e . . . f e e e e . . . . . . . . 
. . . . f e e e e e . . . f e e e e e . . . . . . . 
. . . f e e e e . e . . . f e . e e e e . . . . . . 
. . . . f f f f . e . . . f e . f f f f . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
`],
    150,
    true
    )
    tiles.placeOnTile(bbSprite, tiles.getTileLocation(28, 16))
    tiles.placeOnTile(chaosSprite, tiles.getTileLocation(39, 27))
}
let chaosSprite: Sprite = null
let bbSprite: Sprite = null
let bbHealth = 0
let facingRight = false
let chaosHealth = 0
let armorSprite: Sprite = null
let armor = 0
let facingLeft = false
let lasso = 0
let lassoSprite: Sprite = null
let wwSprite: Sprite = null
let smithsonian03: Sprite = null
let smithsonian02: Sprite = null
let smithsonian01: Sprite = null
let sculpture05: Sprite = null
let sculpture04: Sprite = null
let sculpture03: Sprite = null
let sculpture02: Sprite = null
let sculpture01: Sprite = null
let painting05: Sprite = null
let painting04: Sprite = null
let painting03: Sprite = null
let painting02: Sprite = null
let painting01: Sprite = null
showStartingSplash()
showInstructions()
initGame()
defineWW()
defineEnemies()
defineItems()
defineArtifacts()
forever(function () {
    music.playMelody("E A G A D G B B ", 300)
    if (bbHealth <= 0) {
        music.baDing.play()
        bbSprite.destroy()
        game.showLongText("Defeated Barbara!", DialogLayout.Bottom)
        info.changeScoreBy(5)
        bbHealth = 1
    }
    if (chaosHealth <= 0) {
        music.baDing.play()
        chaosSprite.destroy()
        game.showLongText("Destroyed the Shard of Chaos!", DialogLayout.Bottom)
        info.changeScoreBy(7)
        chaosHealth = 1
    }
    if (info.score() == 25) {
        music.powerUp.play()
        effects.confetti.startScreenEffect()
        scene.cameraShake(4, 500)
        game.over(true)
    }
})
