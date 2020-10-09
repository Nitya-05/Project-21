Skip to content
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 
@Nitya-05 
Nitya-05
/
Project-21
1
01
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
Settings
Project-21
/
sketch.js
 

Spaces

2

No wrap
1
var bullet, wall, thickness, bulletRightEdge, wallLeftEdge;
2
var speed, weight;
3
​
4
function setup() {
5
  createCanvas(1600,400);
6
  speed=random(55,90);
7
  weight=random(1500,400);
8
  thickness=random(22,83);
9
​
10
  bullet=createSprite(50,200,50,50);
11
  bullet.velocityX = speed;
12
​
13
  wall=createSprite(1200,200,thickness,height/2);
14
  wall.shapeColor = color(80,80,80);
15
}
16
​
17
function draw() {
18
  background("blue");  
19
  bullet.depth = wall.depth;
20
  bullet.depth = bullet.depth+1;
21
​
22
  hasCollided();
23
  drawSprites();
24
}
25
​
26
function hasCollided(lbullet, lwall){
27
  bulletRightEdge=lbullet.x+lbullet.width;
28
  wallLeftEdge=lwall.x;
29
​
30
  if(bulletRightEdge >= wallLeftEdge){
31
    return true;
32
  }
33
​
34
  return false;
35
 
36
  if(hasCollided(bullet, wall)){
37
    bullet.velocityX=0;
38
    var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);
39
    
40
    if(damage > 10){
41
      wall.shapeColor = color(255,0,0);
42
    }
43
​
44
    if(damage > 10){
45
      wall.shapeColor = color(0,225,0);
@Nitya-05
Commit changes
Commit summary
Update sketch.js
Optional extended description
Add an optional extended description…
 Commit directly to the main branch.
 Create a new branch for this commit and start a pull request. Learn more about pull requests.
 
© 2020 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
Pricing
API
Training
Blog
About
