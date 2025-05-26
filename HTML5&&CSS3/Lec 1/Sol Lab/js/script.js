//audio video
var aud = document.getElementById("contact");
aud?.addEventListener("click", function(){
    var notification = document.getElementById("ringtone");
    notification.play();
})

var vid = document.getElementById("video");
vid?.addEventListener("click", function() {
    if (this.paused) {
        this.play();
    } else {
        this.pause();
    }
});

function playVideo()
{
    if(vid.paused)
    {
        vid.play();
    }
    else{
        vid.pause()
    }
}

//progress meter

var prog = document.getElementById("upload-eng");
var value = 0;
var interval = setInterval(()=>{
    if(value >=80){
        clearInterval(interval)
    }
    else{
        value++;
        prog.value = value;
    }
}, 20)

var progArb = document.getElementById("upload-arb");
var valueArb = 0;
var interval = setInterval(()=>{
    if(valueArb >=100){
        clearInterval(interval)
    }
    else{
        valueArb++;
        progArb.value = valueArb;
    }
}, 20)

var progSpa = document.getElementById("upload-spa");
var valueSpa = 0;
var interval = setInterval(()=>{
    if(valueSpa >=40){
        clearInterval(interval)
    }
    else{
        valueSpa++;
        progSpa.value = valueSpa;
    }
}, 20)


