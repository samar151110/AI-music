song_1 = "";
song_2 = "";
left_wrist_y = 0;
left_wrist_x = 0;
right_wrist_x =0;
right_wrist_y =0;
score1 = 0;
score2 = 0;
samar = "";


function preload(){
    song_1 = loadSound("music.mp3");
    song_2 = loadSound("music2.mp3");
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    
    posenet = ml5.poseNet(video, model);
    posenet.on("pose", gotresults);
}

function model(){
    console.log("model is loaded");
}

function gotPoses(results) {

       console.log(results);
       if(results > 0){
        left_wrist_x = results[0].pose.leftwrist.x;
        left_wrist_y = results[0].pose.leftwrist.x;
        score1 = results[0].pose.keypoints[9].score;
        console.log(score1);
       }
}

function draw(){
    image(video, 0, 0, 600, 500);

    fill("red");
    stroke("blue");

    song_harry = song_1.isPlaying()
    console.log(song_peter);

    if(score1 > 0.2){
    circle(leftwristx, leftwristy, 20);
    score_2.stop();

    if(song_2 == false){
        song_2;
    }
    else{
        document.getElementById("song_name").innerHTML = "Song name : Peter pen song";
    }
    }
}