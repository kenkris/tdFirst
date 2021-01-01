import 'phaser';
import MobPath from './mobpath';

export default class TdGame extends Phaser.Scene
{
    constructor ()
    {
        super('TdGame');
    }

    graphics : Phaser.GameObjects.Graphics;
    mobPath : Phaser.Curves.Path;

    preload ()
    {
    }

    create ()
    {
        this.graphics = this.add.graphics();
        this.mobPath = new MobPath(96, -32, [
            new Phaser.Geom.Point(96, 164),
            new Phaser.Geom.Point(480, 164),
            new Phaser.Geom.Point(480, 544),
        ]).getPath();

        this.graphics.lineStyle(3, 0xffffff, 1);
        this.mobPath.draw(this.graphics);
    }
}

const config = {
    type: Phaser.AUTO,
    backgroundColor: '#000000',
    width: 640,
    height: 512,
    scene: TdGame
};

const game = new Phaser.Game(config);
