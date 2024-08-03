chrome.storage.sync.get("likeSpeed", function (obj) {
  console.log("Passed successfully: likeSpeed "+obj.likeSpeed)
  likeSpeed = obj.likeSpeed;
  setInterval(() => {
    var like = document.querySelector("#tiktok-live-main-container-id > div.css-1fxlgrb-DivBodyContainer.etwpsg30 > div.css-l1npsx-DivLiveContentContainer.etwpsg31 > div > div.css-1x7dsvs-DivChatRoomAnimationContainer.e1089vbw2 > div.css-1nmb7mw-DivChatRoomContent.e1089vbw0 > div.css-vq8507-DivChatRoomContainer.ex6o5342 > div.css-11w1qwc-DivChatRoomBody.ex6o5343 > div.css-hm4yna-DivLikeContainer.ebnaa9i0 > div.css-1rleu4k-DivLikeBtnWrapper.ebnaa9i2 > div")
    if(like == null){
      return false;
    }
    like.click();
  }, likeSpeed)
});


