import 'phaser';

export default class MobPath
{

    xStart : integer;
    yStart : integer;
    points : Phaser.Geom.Point[];

    constructor (xStart : integer, yStart : integer, points : Phaser.Geom.Point[])
    {
        this.xStart = xStart;
        this.yStart = yStart;
        this.points = points;
    }

    getPath() : Phaser.Curves.Path {
        let path = new Phaser.Curves.Path(this.xStart, this.yStart);
        this.points.forEach(point => {
            path.lineTo(point.x, point.y);
        });
        return path;
    }
}
