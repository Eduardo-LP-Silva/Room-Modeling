class CircularAnimation extends Animation
{
    constructor(center, radius, initialAngle, rotationAngle, time)
    {
        super(time);
        this.center = center;
        this.radius = radius;
        this.initialAngle = initialAngle;
        this.rotationAngle = rotationAngle;
    }
}