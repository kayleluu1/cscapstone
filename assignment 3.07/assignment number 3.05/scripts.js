var p = document.getElementById("changeMe");

p.innerHTML = "text";
p.style.color = "blue";
p.style.background= "red";
p.style.textAlign = "center";

function changeParagraphBackground()
{
    p.style.background = 'green';
}

p.onclick= changeParagraphBackground;

var currentMargin = 0;

function changeMargin()
{
    currentMargin++;
    p.style.margin = currentMargin + "px";
}

var animation;

function play()
{
    animation = setInterval(nextFrame, 20);
}

play();

document.getElementById("play").onclick = play;

function stop()
{
    currentMargin = 0;
    p.style.margin = "0px";
    clearInterval(animation);
}

document.getElementById("stop").onclick = stop;

var animation = setInterval(changeMargin, 20);