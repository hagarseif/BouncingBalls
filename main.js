let canv=document.getElementById('bouncingball')
let ctx=canv.getContext("2d")

const width=canv.width=window.innerWidth;
const height=canv.height=window.innerHeight;

function random(min,max){
    const num=Math.floor(Math.random() * (max -min+1)+min)
    return num;
}

class Ball{
    constructor(x,y,valx,valy,color,r){
        this.x=x;
        this.y=y;
        this.valx=valx;
        this.valy=valy;
        this.color=color;
        this.r=r;
    }
    draw()
    {
        ctx.beginPath();
        ctx.fillStyle=this.color;
        ctx.arc(this.x,this.y,this.r,0,2*Math.PI)
        ctx.fill();
    }
    move(){
        if (this.r+this.x>=width){
            this.valx=-(this.valx)
        }
        if(this.x-this.r<=0){
            this.valx=-(this.valx)
        }
        if(this.y+this.r> height){
            this.valy=-(this.valy)
        }
        if(this.y-this.r<=0){
            this.valy=-(this.valy)
        }
        this.x+=this.valx;
        this.y+=this.valy;
    }
    col(){
        for(let i = 0; i < balls.length;i++){
            if(!(this === balls[i])){
                const dx=this.x-balls[i].x;
                const dy=this.y-balls[i].y;
                const distance=Math.sqrt(dx*dx +dy*dy)
                if(distance<this.r+balls[i].r)
                {
                    this.color=balls[i].color=`rgb(${random(0,255)},${random(0,255)},${random(0,255)})`
                }
            }
        }
    }
}

let balls=[];

while(balls.length<10){
    let r=random(15,25)
    let ball=new Ball(random(r,width-r),
    random(r,height-r),random(-7,7),
    random(-7,7),`rgb(${random(0,255)},${random(0,255)},${random(0,255)})`,r)
    balls.push(ball)
}

function display(){
    ctx.fillStyle='rgba(0,0,0,.4)'
    ctx.fillRect(0,0,width,height)
    for (let i=0;i< balls.length;i++){
        balls[i].draw()
        balls[i].move()
        balls[i].col()
    }
    requestAnimationFrame(display)
}
display()