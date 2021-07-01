class Player{
    constructor(x, y)
    {
        this.x = x;
        this.y = y;
        this.spt = createSprite(this.x, this.y, 50, 50);
        this.spt.shapeColor = "orange";
		if(this.spt.isTouching(carGroup1||logGroup1)){
			this.x = x;

		}
    }

    move(xdir, ydir)
    {
        this.spt.x += xdir*grid;
        this.spt.y += ydir*grid;
    }
}

























