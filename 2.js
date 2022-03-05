class QueenAttack
{
    constructor(q1r,q1c,q2r,q2c)
    {
      this.q1r = q1r;
      this.q1c = q1c;
      this.q2r = q2r;
      this.q2c = q2c;
    }

    canAttack()
    {
        if (this.q1r == this.q2r)
            return true;
        if (this.q1c == this.q2c)
            return true;
        if (Math.abs(this.q1r - this.q2r) == Math.abs(this.q1c - this.q2c))
            return true;

        return false;
    }
}
let queens = new QueenAttack(1,1,3,2); 
if (queens.canAttack())
    console.log("Yes,the queens can attack each other")
else
    console.log("No,the queens cannot attack each other")
