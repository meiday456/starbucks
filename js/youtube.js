// 2. This code loads the IFrame Player API code asynchronously.
let tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    videoId: 'ELUxkF-ZH9Q',
    playerVars:{
      autoplay : true,
      loop : true, //반복재생할 목록을 할당해줘야한다.
      playlist: 'ELUxkF-ZH9Q'
    },
    events:{
      onReady : (event)=>{
        event.target.mute()
      }
    }
    // events: {
    //   'onReady': onPlayerReady,
    //   'onStateChange': onPlayerStateChange,

    // }
  });
}

