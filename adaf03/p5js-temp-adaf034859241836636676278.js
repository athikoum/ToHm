let input;
let analyzer;
let capture;

let playing = false;
let video1;
let video2;
let video3;
let video4;
let video5;
let delay;
let fft;
let amp;
var fade;
var fadeAmount =0.01;
let img;
let pg;
function setup() {
  //background(0);
  createCanvas (1920, 1080);
 
// img = loadImage('data/xe.png');
   video1= createVideo('data/nn.mp4');
   video1.position(150,350);
   video1.size(440,320);
   video1.hide();
   
   video2= createVideo ('data/n.mp4');
   video2.position(0,0);
   video2.size(340,220);
   video2.hide();
   
   video3=createVideo ('data/3.mp4');
   video3.position(50,350);
   video3.size(540,420);
   video3.hide();
   
   video4=createVideo ('data/4.mp4');
   video4.position(50,50);
   video4.size(540,420);
   video4.hide();
   
   video5=createVideo ('data/5.mp4');
   video5.position(0,700);
   video5.size(540,420);
   video5.hide();
   capture=createCapture (VIDEO);
    capture.size(100, 100);
    capture.hide();

   

  // video.loop();
  input = new p5.AudioIn();
  input.start();
  reverb = new p5.Reverb();
  delay = new p5.Delay();
 reverb.process(input, 6, 0.2);
  reverb.amp(0.7);

  delay.process(input, 0.25 ,0.8, 300);
  amp = new p5.Amplitude();
  //delay.amp(8);
  amp.setInput(input);
  

  
  
  //revb.amp(0);
  fft = new p5.FFT(0.0); 
  


}

function draw() {
  background(0);
 
   

//imageMode(CENTER);
 image(video2,50,400);
 image (video4, windowWidth*2/5,30);
 image (video3, 50,0);
 image (video1, windowWidth/3, 400);
 image (video5, windowWidth*0.5/3, 700);
 image (capture, mouseX,mouseY, 100,100 );
 
 //image(img, mouseX,mouseY,1000,800); 
  
 
 

 let volume = input.getLevel();
 let threshold = 0.04;
 let col1 = map(volume,0,0.1,0,255);
 //let col2 =  map(volume,0.0,0.2,0,255);
  if (volume > threshold) {
    video1.loop();
    video2.loop();
    video3.hide();
    video4.hide();
   video5.loop();
    //capture.loop();
    
    tint(col1);
   
    
}
if (volume< threshold){
  video1.hide();
  video2.hide();
  video3.loop();
  video4.loop();
  video5.hide();
 
 
  tint(col1);
  

}
  
  
  
pg=createGraphics();

let srt1 ='Wear Headphones. Lowering volume is recommended. If you want to see, you have to sing. Or at least, read aloud:';
  text(srt1, windowWidth *2.5/4,50,500,500);
 textSize(16);
  fill(200);
  
  let srt2 = 'Dear Hm,';
  text(srt2, windowWidth*2.5/4,200,500,500);
 textSize(20);
  fill(200);
  
  let srt3="I still can’t get rid off the hair of yours all over the place. It’s not like it really bothers me, but it is kind of peculiar. They say that when you die and they put you in the grave, nails and hair still grow. And, it is as if the dead hair you have left are growing and multiplying. Maybe I should gather them and use them to replace my own hair, do you think it will suit me? The hair remind me of the thick forest that exists in your armpits and all the small creatures living there – 'swallows are nesting in his armpits' just like in J.Genet’s book. Did you ever read it by the way? I think you’d like it.I’ll probably not see you again for long. You already seem like an old memory but also like something that I could have just imagined, that never happened. As if you never existed. But your hair comes to remind me that you are made of flesh and bones as well. Flesh that turns to snow. Can hair grow in snow?I hope my voice will reach you. I hope my songs can make you feel true and alive, as they did before. It was nice knowing they matter to someone. Or I could just have imagined it, and nothing such ever happened. Unfortunately, hair cannot prove that. Sincerely yours, ";
text(srt3, windowWidth*2.5/4,230,500,700);
textSize(16);
  fill(200);
  
  

}
function mousePressed() {
  if (mousePressed) {
    let fs = fullscreen();
    fullscreen(!fs);
  }
}
