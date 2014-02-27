feedUrl = "http://www.sonypictures.com/movies/pompeii/channel.xml";
// overlay player config
callbackToggle = true;


//externalPlay(clipName)

function playVideo(id) {	

openOverlay(id);
 
}


function initStylesAndMethods() {

 
$('#games-bg, #overlay-bg').click(function(e){
  
    var gamesContainer = $('#games');
    
    e.preventDefault();
    e.stopPropagation();
    
    
    if ($(gamesContainer).css('display') == 'block') {
      $(gamesContainer).fadeOut(function() {
         $(gamesContainer).children().not('#games-bg').css('display', 'none'); 
         $(gamesContainer).children().not('#games-bg').css('visibility', 'hidden');
      });
      
      hideGameOverlay();
      resetGameContainer();
      
    } 
        
  });
 
}


function openGameOverlay(id) {

gamesObject.activeGame = id;


switch(id) {

case 'ispyafoodimal':	

gamesObject.objectId = 'ispyafoodimal-game';

showGamesOverlay();

var ISPYAFOODIMAL = {
flashversion: '11',
divId: 'ispyafoodimal-game-container',
width: '800',
height: '600',
flashvars: {},
params: {
base: 'game/ispyafoodimal/media/',
bgcolor: '#000',
allowScriptAccess: 'always',
scale: 'exactfit',
wmode: 'opaque'
},
attributes: {},
path: 'game/ispyafoodimal/media/loader.swf?t=' + new Date().getTime()
}

swfobject.embedSWF(ISPYAFOODIMAL.path, ISPYAFOODIMAL.divId, ISPYAFOODIMAL.width, ISPYAFOODIMAL.height, ISPYAFOODIMAL.flashversion, "", ISPYAFOODIMAL.flashvars, ISPYAFOODIMAL.params, ISPYAFOODIMAL.attributes);

setTimeout(function() {

$('#ispyafoodimal-game').css('display', 'block');

}, 500);
break;

case 'matchgame':	

gamesObject.objectId = 'match-game';

showGamesOverlay();

var MATCHGAME = {
flashversion: '11',
divId: 'match-game-container',
width: '600',
height: '400',
flashvars: {},
params: {
base: 'game/matchgame/media/',
bgcolor: '#000',
allowScriptAccess: 'always',
scale: 'exactfit',
wmode: 'opaque'
},
attributes: {},
path: 'game/matchgame/media/preloader.swf?t=' + new Date().getTime()
}

swfobject.embedSWF(MATCHGAME.path, MATCHGAME.divId, MATCHGAME.width, MATCHGAME.height, MATCHGAME.flashversion, "", MATCHGAME.flashvars, MATCHGAME.params, MATCHGAME.attributes);

setTimeout(function() {

$('#match-game').css('display', 'block');

}, 500);

break;

case 'photoupload':	

gamesObject.objectId = 'photoupload';

showGamesOverlay();

var PHOTOUPLOAD = {
flashversion: '11',
divId: 'photoupload-container',
width: '800',
height: '600',
flashvars: {
  facebookBrowsePhoto : "false", 
  shareButtons : "false", 
  interstitial : "false", 
  fbHover : "false",
  type: "browser"
},
params: {
base: 'game/photoupload/media/',
bgcolor: '#000',
allowScriptAccess: 'always',
scale: 'exactfit',
wmode: 'opaque'
},
attributes: {},
path: 'game/photoupload/media/preloader.swf?t=' + new Date().getTime()
}

swfobject.embedSWF(PHOTOUPLOAD.path, PHOTOUPLOAD.divId, PHOTOUPLOAD.width, PHOTOUPLOAD.height, PHOTOUPLOAD.flashversion, "", PHOTOUPLOAD.flashvars, PHOTOUPLOAD.params, PHOTOUPLOAD.attributes);

setTimeout(function() {

$('#photoupload').css('display', 'block');

}, 500);
break;

case 'quiz':	

gamesObject.objectId = 'quiz';

showGamesOverlay();

var QUIZ = {
flashversion: '11',
divId: 'quiz-container',
width: '600',
height: '430',
flashvars: {},
params: {
base: 'game/quiz/media/',
bgcolor: '#000',
allowScriptAccess: 'always',
scale: 'exactfit',
wmode: 'opaque'
},
attributes: {},
path: 'game/quiz/media/preloader.swf?t=' + new Date().getTime()
}

swfobject.embedSWF(QUIZ.path, QUIZ.divId, QUIZ.width, QUIZ.height, QUIZ.flashversion, "", QUIZ.flashvars, QUIZ.params, QUIZ.attributes);

setTimeout(function() {

$('#quiz').css('display', 'block');

}, 500);
break;

case 'wordgames':	

gamesObject.objectId = 'wordgames';

showGamesOverlay();

var WORDGAMES = {
flashversion: '11',
divId: 'wordgames-container',
width: '800',
height: '600',
flashvars: {},
params: {
base: 'game/wordgames/media/',
bgcolor: '#000',
allowScriptAccess: 'always',
scale: 'exactfit',
wmode: 'opaque'
},
attributes: {},
path: 'game/wordgames/media/preloader.swf?t=' + new Date().getTime()
}

swfobject.embedSWF(WORDGAMES.path, WORDGAMES.divId, WORDGAMES.width, WORDGAMES.height, WORDGAMES.flashversion, "", WORDGAMES.flashvars, WORDGAMES.params, WORDGAMES.attributes);

setTimeout(function() {

$('#wordgames').css('display', 'block');

}, 500);
break;

case 'riverrun':	

gamesObject.objectId = 'riverrun';

showGamesOverlay();

var RIVERRUN = {
flashversion: '11',
divId: 'riverrun-container',
width: '800',
height: '600',
flashvars: {},
params: {
base: 'game/riverrun/media/',
bgcolor: '#000',
allowScriptAccess: 'always',
scale: 'exactfit',
wmode: 'opaque'
},
attributes: {},
path: 'game/riverrun/media/preloader.swf?t=' + new Date().getTime()
}

swfobject.embedSWF(RIVERRUN.path, RIVERRUN.divId, RIVERRUN.width, RIVERRUN.height, RIVERRUN.flashversion, "", RIVERRUN.flashvars, RIVERRUN.params, RIVERRUN.attributes);

setTimeout(function() {

$('#riverrun').css('display', 'block');

}, 500);

break;
}

}

function resetGameContainer() {

swfobject.removeSWF(gamesObject.objectId+'-container');

var swfContainer = document.createElement('div');
swfContainer.id = gamesObject.objectId+'-container';

var parent = document.getElementById(gamesObject.objectId);
parent.insertBefore(swfContainer, parent.firstChild);


}


function showGamesOverlay() {
  $('#content-wrapper').css('height', document.body.scrollHeight);
  $('#content-wrapper').css('display', 'block');
  $('#overlay-bg').css('display', 'block');
  $('#games').css('display', 'block');
}


function showImageOverlay() {
  $('#content-wrapper').css('height', document.body.scrollHeight);
  $('#content-wrapper').css('display', 'block');
  $('#overlay-bg').css('display', 'block');
  setTimeout(function() {
    $('#downloads').css('display', 'block');
  }, 500);
}


function hideGameOverlay() {

  var flashContent = document.getElementById('flashcontent');
  flashContent.closeGameOverlay();

  $('#content-wrapper').css('display', 'none');
  $('#overlay-bg').css('display', 'none');
  $('#overlay-bg').css('height', '0');    
  $('#games').css('display', 'none'); 
   
}

/**** EDITABLE FLASH PROPERTIES BELOW ****/

var FLPROPS = {
    // Editable properties/methods //
    flashversion: '10',
    divId: 'flashcontent',
    minWidth: '1350',
    minHeight: '1000',
    heightOffset: '',
    flashvars: {},
    params: {
base: '',
allowScriptAccess: 'always',
allowfullscreen: 'true',
allowNetworking: 'all',
scale: 'noscale',
wmode: 'opaque'
    },
    attributes: {},
    path: 'preloader.swf',
    // Uneditable properties/methods
    getWidth: function() {
var browserWidth = document.documentElement.clientWidth;
if (this.minWidth != '' && this.minWidth != null) {
if (browserWidth < this.minWidth) {
return this.minWidth + 'px';
} else {
return '100%';
}
}
    },
    getHeight: function() {
var browserHeight = document.documentElement.clientHeight;
if (this.minHeight != '' && this.minHeight != null) {
if (this.heightOffset != '' && this.heightOffset != null) {
var newHeight = browserHeight - this.heightOffset;
return (newHeight < FLPROPS.minHeight ? FLPROPS.minHeight : newHeight);
} else {
return (browserHeight < FLPROPS.minHeight ? FLPROPS.minHeight : browserHeight);
}
} else {
return browserHeight;
}
    }
}


var gamesObject = {
activeGame : '',
objectId:''
};


function getURLParameter(name) {
    return decodeURI(
(RegExp(name + '=' + '(.+?)(&|$)').exec(location.search) || [, null])[1]
);
}

function swfResize(divId) {
    var width = FLPROPS.getWidth(),
height = FLPROPS.getHeight();
    // set new width and height
    document.getElementById(divId).style.width = width;
    document.getElementById(divId).style.height = height + 'px';
}

// Initialize events

addLoadEvent(function() {

    swfobject.embedSWF(FLPROPS.path, FLPROPS.divId, FLPROPS.minWidth, FLPROPS.minHeight, FLPROPS.flashversion, "", FLPROPS.flashvars, FLPROPS.params, FLPROPS.attributes);

setTimeout(function() {
initStylesAndMethods();
}, 1000); 

});


// USED FUNCTIONS //
function init() {}

$(function() {
    init();
});

function uploadPhoto(imgNum) {
  FB.getLoginStatus(function(response) {
      if (response.status === 'connected') {
          // connected
          //console.log('attempting to upload photo ' + imgNum + '...');


          var imgURL = selectPhoto(imgNum);
         // console.log('sharing ' + imgURL);
          FB.api('/photos', 'post', {
            message: 'Cloudy With A Chance of Meatballs 2',
            access_token: FB.getAccessToken(),
            url: imgURL
          }, function (response) {
              if (!response || response.error) {
                 // console.log('Error occured:' + response);
                 // alert('Error occured:' + response);
                 FB.login();
                  //document.getElementById('flashContent').profileFailed();
              } else {
                  fbImageID = response.id;
                 // alert('Post ID: ' + response.id);
                  windowLeft = (screen.width / 2) - 437;
                  windowTop = (screen.height / 2) - 200;
                  window.open('https://www.facebook.com/profile.php?preview_cover=' + fbImageID , "share", "height=400px,left=" + windowLeft + "px, top=" + windowTop + "px, menubar=0,scrollbars=0,status=0,width=875px");
              }
          });


         document.getElementById('flashContent').profileWorked();
      } else if (response.status === 'not_authorized') {
          // not_authorized
         // alert('not authorized');
         FB.login();
         // document.getElementById('flashContent').profileFailed();
      } else {
          // not_logged_in
          FB.login();
         // alert('not logged in');
      }
  });

}




