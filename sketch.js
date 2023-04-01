let points = [[1,-15],[1,-12],[10,-12],[6,-5],[9,-5],[5,2],[7,2],[0,15],[-7,2],[-5,2],[-9,-5],[-6,-5],[-10,-12],[-1,-12],[-1,-15],[1,-15]]; //list資料，

function setup() {   //只會執行一次的函數
  createCanvas(windowWidth, windowHeight); //設定一個畫布，寬為整個視窗的寬度windowWidth，高度為整個視窗的高度windowHeight
  //把points 內的值都*50
  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < points[i].length; j++) {
      points[i][j] = points[i][j] * 20;
    }
  }
  
}

function draw() {
  background(255);
  //stroke("")

  strokeWeight(5)
  //r=map(mouseX,0,width,10,200)
  textSize(30)  //文字大小
  fill(0, 102, 153);  //設定顏色
  text("教科系",50,50)  //顯示文字,文字位置
  // scale(50)
  translate(width/2, height/2); //原本原點在左上角，利用這指令把原點放到視窗的中心
  scale(1, -1);  //上下翻轉
  for (let i = 0; i < points.length-1; i++) {
    line(points[i][0], points[i][1], points[i+1][0], points[i+1][1]);
  }
  line(points[points.length-1][0], points[points.length-1][1], points[0][0], points[0][1]); //把最後一點與第一點的連線

}



