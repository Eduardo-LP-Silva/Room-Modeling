class Animation
{
    constructor(totalTime)
    {
        this.totalTime = totalTime;
        this.initTime = -1;
        this.transformationMatrix = mat4.create();
        this.velocity = null;
    }

    //Method to be overriden by child classes
    initTimeStamps(currTime)
    {

    }

    update(currentTime)
    {
        //TODO Complete
    }

    apply()
    {
        //TODO Complete
    }

    //Method to be overriden by child classes
    calculateVelocity() {}

    //Method to be overriden by child classes
    calculateDistance() {}

    getElapsedTime(currTime)
    {
        return (currTime - this.initTime) / 1000;
    }
}