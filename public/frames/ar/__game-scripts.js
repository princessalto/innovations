// xrcontroller.js
/*jshint esversion: 6, asi: true, laxbreak: true*/

// xrcontroller.js: Opens the browser's web camera and runs AR. Attach this to an entity in the
// PlayCanvas scene.

var xrcontroller = pc.createScript('xrcontroller')

// Optionally, world tracking can be disabled to increase efficiency when tracking image targets.
xrcontroller.attributes.add('disableWorldTracking', {type: 'boolean'})
//xrcontroller.attributes.add('imageTargets', {type: 'string'})
//xrcontroller.attributes.add('imageTargets', {type: 'string'})

// Optionally, add a material to this script to make it a transparent shadow receiver, which is
// very helpful for producing a good AR effect.
xrcontroller.attributes.add('shadowmaterial', {type: 'asset'})

xrcontroller.prototype.initialize = function() {
  const disableWorldTracking = this.disableWorldTracking

  // After XR has fully loaded, open the camera feed and start displaying AR.
  const runOnLoad = ({pcCamera, pcApp}, extramodules) => () => {    
    XR8.xrController().configure({disableWorldTracking,
    imageTargets: ['acBC','BCMarker']})
    XR8.PlayCanvas.runXr({pcCamera, pcApp}, extramodules)

  }

  // If a shadow material was given, apply the appropriate shaders.
  if (this.shadowmaterial) {
    XRExtras.PlayCanvas.makeShadowMaterial({pc, material: this.shadowmaterial})
  }

  // Find the camera in the playcanvas scene, and tie it to the motion of the user's phone in the
  // world.
  const pcCamera = XRExtras.PlayCanvas.findOneCamera(this.entity)

  // While XR is still loading, show some helpful things.
  // Almost There: Detects whether the user's environment can support web ar, and if it doesn't,
  //     shows hints for how to view the experience.
  // Loading: shows prompts for camera permission and hides the scene until it's ready for display.
  // Runtime Error: If something unexpected goes wrong, display an error screen.
  XRExtras.Loading.showLoading({onxrloaded: runOnLoad({pcCamera, pcApp: this.app}, [
    // Optional modules that developers may wish to customize or theme.
    XRExtras.AlmostThere.pipelineModule(),       // Detects unsupported browsers and gives hints.
    XRExtras.Loading.pipelineModule(),           // Manages the loading screen on startup.
    XRExtras.RuntimeError.pipelineModule(),      // Shows an error image on runtime error.
  ])})
}


var namedimagetarget=pc.createScript("namedimagetarget");namedimagetarget.attributes.add("name",{type:"string"}),namedimagetarget.prototype.initialize=function(){XRExtras.PlayCanvas.trackImageTargetWithName(this)};// targetfinder.js
/*jshint esversion: 6, asi: true, laxbreak: true*/

var Targetfinder = pc.createScript('targetfinder');

// initialize code called once per entity
Targetfinder.prototype.initialize = function() {
    
const showImage = (detail) => {
    var targetEntity = this.app.root.findByName('scanNotif');
    if (name != detail.name) {
        
//        console.log('Found: ', detail.name);
        targetEntity.enabled = false;
        
        return }
  const {rotation, position, scale} = detail
  entity.setRotation(rotation.x, rotation.y, rotation.z, rotation.w)
  entity.setPosition(position.x, position.y, position.z)
  entity.setLocalScale(scale, scale, scale)
  entity.enabled = true
  
}

const hideImage = (detail) => {
  if (name != detail.name) { 
          var targetEntity = this.app.root.findByName('scanNotif');
        
//        console.log('Found: ', detail.name);
        targetEntity.enabled = true;
        
        return }
    
  entity.enabled = false
}

this.app.on('xr:imagefound', showImage, {})
this.app.on('xr:imageupdated', showImage, {})
this.app.on('xr:imagelost', hideImage, {})

};

// update code called every frame
Targetfinder.prototype.update = function(dt) {

};

// swap method called for script hot-reloading
// inherit your script state here
// Targetfinder.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/user-manual/scripting/

var TutorialButton=pc.createScript("tutorialButton");TutorialButton.attributes.add("hoverAsset",{type:"asset",assetType:"texture"}),TutorialButton.attributes.add("activeAsset",{type:"asset",assetType:"texture"}),TutorialButton.attributes.add("objectEntity",{type:"entity"}),TutorialButton.prototype.initialize=function(){this.originalTexture=this.entity.element.textureAsset,this.hovered=!1,this.entity.element.on("mouseenter",this.onEnter,this),this.entity.element.on("mousedown",this.onPress,this),this.entity.element.on("mouseup",this.onRelease,this),this.entity.element.on("mouseleave",this.onLeave,this),this.entity.element.on("touchstart",this.onPress,this),this.entity.element.on("touchend",this.onRelease,this)},TutorialButton.prototype.onEnter=function(t){this.hovered=!0,t.element.textureAsset=this.hoverAsset,document.body.style.cursor="pointer"},TutorialButton.prototype.onLeave=function(t){this.hovered=!1,t.element.textureAsset=this.originalTexture,document.body.style.cursor="default"},TutorialButton.prototype.onPress=function(t){t.element.textureAsset=this.activeAsset;var e=this.app.root.findByName("Tutorial");e&&(e.enabled=!0),console.log("press")},TutorialButton.prototype.onRelease=function(t){t.element.textureAsset=this.hovered?this.hoverAsset:this.originalTexture},TutorialButton.prototype.deactiveObjects=function(){console.log()};var Rotate=pc.createScript("rotate");Rotate.attributes.add("cameraEntity",{type:"entity",title:"Camera Entity"}),Rotate.attributes.add("orbitSensitivity",{type:"number",default:.3,title:"Orbit Sensitivity",description:"How fast the camera moves around the orbit. Higher is faster"}),Rotate.prototype.initialize=function(){this.app.mouse.on(pc.EVENT_MOUSEMOVE,this.onMouseMove,this),this.lastTouchPoint=new pc.Vec2,this.app.touch&&(this.app.touch.on(pc.EVENT_TOUCHSTART,this.onTouchStart,this),this.app.touch.on(pc.EVENT_TOUCHMOVE,this.onTouchMove,this))},Rotate.horizontalQuat=new pc.Quat,Rotate.verticalQuat=new pc.Quat,Rotate.resultQuat=new pc.Quat,Rotate.prototype.rotate=function(t,o){var e=Rotate.horizontalQuat,i=Rotate.verticalQuat,a=Rotate.resultQuat;e.setFromAxisAngle(this.cameraEntity.up,t*this.orbitSensitivity),i.setFromAxisAngle(this.cameraEntity.right,o*this.orbitSensitivity),a.mul2(e,i),a.mul(this.entity.getRotation()),this.entity.setRotation(a)},Rotate.prototype.onTouchStart=function(t){var o=t.touches[0];this.lastTouchPoint.set(o.x,o.y)},Rotate.prototype.onTouchMove=function(t){var o=t.touches[0],e=o.x-this.lastTouchPoint.x,i=o.y-this.lastTouchPoint.y;this.rotate(e,i),this.lastTouchPoint.set(o.x,o.y)},Rotate.prototype.onMouseMove=function(t){this.app.mouse.isPressed(pc.MOUSEBUTTON_LEFT)&&this.rotate(t.dx,t.dy)};var AnimationController=pc.createScript("animationController");AnimationController.states={first:{animation:"trial2.json"}},AnimationController.prototype.initialize=function(){this.entity.on("mouseenter",this.onEnter,this),this.entity.on("mousedown",this.onPress,this),this.entity.on("mouseup",this.onRelease,this),this.entity.on("mouseleave",this.onLeave,this),this.entity.on("touchstart",this.onPress,this),this.entity.on("touchend",this.onRelease,this),this.blendTime=2},AnimationController.prototype.setState=function(t){var n=AnimationController.states;this.state=t,this.entity.animation.play(n[t].animation,this.blendTime)},AnimationController.prototype.onEnter=function(t){this.hovered=!0,document.body.style.cursor="pointer"},AnimationController.prototype.onLeave=function(t){this.hovered=!1,document.body.style.cursor="default"},AnimationController.prototype.onPress=function(t){this.entity.setState("first")},AnimationController.prototype.onRelease=function(t){};var Raycast=pc.createScript("raycast");Raycast.prototype.initialize=function(){this.entity.camera?(this.app.mouse.on(pc.EVENT_MOUSEDOWN,this.mouseDown,this),this.app.touch&&this.app.touch.on(pc.EVENT_TOUCHSTART,this.touchStart,this)):console.error("This script must be applied to an entity with a camera component.")},Raycast.prototype.onMouseDown=function(t){t.button==pc.MOUSEBUTTON_LEFT&&this.doRayCast(t)},Raycast.prototype.mouseDown=function(t){this.doRaycast(t.x,t.y)},Raycast.prototype.touchStart=function(t){1===t.touches.length&&this.doRaycast(t.touches[0].x,t.touches[0].y),t.event.preventDefault()},Raycast.prototype.doRaycast=function(t,o){var a=this.entity.getPosition();console.log("from camera enity axis: ",a);var s=this.entity.camera.screenToWorld(t,o,this.entity.camera.farClip);console.log("Vector 3 raycast to: ",s);var n=this.app.systems.rigidbody.raycastFirst(a,s);if(n){var e=n.entity;e.name,"consulting"===e.name?window.open("http://ssa.consulting"):"training"===e.name?window.open("https://www.ssagroup.com"):"innovations"===e.name&&window.open("https://innovations.ssagroup.com/products/management-systems")}};var BtnMail=pc.createScript("btnMail");BtnMail.attributes.add("hoverAsset",{type:"asset",assetType:"texture"}),BtnMail.attributes.add("activeAsset",{type:"asset",assetType:"texture"}),BtnMail.attributes.add("objectEntity",{type:"entity"}),BtnMail.prototype.initialize=function(){this.originalTexture=this.entity.element.textureAsset,this.hovered=!1,this.entity.element.on("mouseenter",this.onEnter,this),this.entity.element.on("mousedown",this.onPress,this),this.entity.element.on("mouseup",this.onRelease,this),this.entity.element.on("mouseleave",this.onLeave,this),this.entity.element.on("touchstart",this.onPress,this),this.entity.element.on("touchend",this.onRelease,this)},BtnMail.prototype.onEnter=function(t){this.hovered=!0,t.element.textureAsset=this.hoverAsset,document.body.style.cursor="pointer"},BtnMail.prototype.onLeave=function(t){this.hovered=!1,t.element.textureAsset=this.originalTexture,document.body.style.cursor="default"},BtnMail.prototype.onPress=function(t){t.element.textureAsset=this.activeAsset,window.open("https://www.ssagroup.com/#contact")},BtnMail.prototype.onRelease=function(t){t.element.textureAsset=this.hovered?this.hoverAsset:this.originalTexture};var BtnFacebook=pc.createScript("btnFacebook");BtnFacebook.attributes.add("hoverAsset",{type:"asset",assetType:"texture"}),BtnFacebook.attributes.add("activeAsset",{type:"asset",assetType:"texture"}),BtnFacebook.attributes.add("objectEntity",{type:"entity"}),BtnFacebook.prototype.initialize=function(){this.originalTexture=this.entity.element.textureAsset,this.hovered=!1,this.entity.element.on("mouseenter",this.onEnter,this),this.entity.element.on("mousedown",this.onPress,this),this.entity.element.on("mouseup",this.onRelease,this),this.entity.element.on("mouseleave",this.onLeave,this),this.entity.element.on("touchstart",this.onPress,this),this.entity.element.on("touchend",this.onRelease,this)},BtnFacebook.prototype.onEnter=function(e){this.hovered=!0,e.element.textureAsset=this.hoverAsset,document.body.style.cursor="pointer"},BtnFacebook.prototype.onLeave=function(e){this.hovered=!1,e.element.textureAsset=this.originalTexture,document.body.style.cursor="default"},BtnFacebook.prototype.onPress=function(e){e.element.textureAsset=this.activeAsset,window.open("https://www.facebook.com/TheSSAGroup")},BtnFacebook.prototype.onRelease=function(e){e.element.textureAsset=this.hovered?this.hoverAsset:this.originalTexture},BtnFacebook.prototype.deactiveObjects=function(){console.log()};var BtnPhone=pc.createScript("btnPhone");BtnPhone.attributes.add("hoverAsset",{type:"asset",assetType:"texture"}),BtnPhone.attributes.add("activeAsset",{type:"asset",assetType:"texture"}),BtnPhone.attributes.add("objectEntity",{type:"entity"}),BtnPhone.prototype.initialize=function(){this.originalTexture=this.entity.element.textureAsset,this.hovered=!1,this.entity.element.on("mouseenter",this.onEnter,this),this.entity.element.on("mousedown",this.onPress,this),this.entity.element.on("mouseup",this.onRelease,this),this.entity.element.on("mouseleave",this.onLeave,this),this.entity.element.on("touchstart",this.onPress,this),this.entity.element.on("touchend",this.onRelease,this)},BtnPhone.prototype.onEnter=function(e){this.hovered=!0,e.element.textureAsset=this.hoverAsset,document.body.style.cursor="pointer"},BtnPhone.prototype.onLeave=function(e){this.hovered=!1,e.element.textureAsset=this.originalTexture,document.body.style.cursor="default"},BtnPhone.prototype.onPress=function(e){e.element.textureAsset=this.activeAsset,window.open("tel:+1800229933")},BtnPhone.prototype.onRelease=function(e){e.element.textureAsset=this.hovered?this.hoverAsset:this.originalTexture},BtnPhone.prototype.deactiveObjects=function(){console.log()};var BrowserDetect=pc.createScript("browserDetect");BrowserDetect.prototype.initialize=function(){var t=window.navigator.userAgent,e=this.app.root.findByName("instructionEntity");t.match(/iPad/i)||t.match(/iPhone/i)?e.enabled=!0:e.enabled=!1},BrowserDetect.prototype.update=function(t){};var JsDetect=pc.createScript("jsDetect");JsDetect.prototype.initialize=function(){var t=this.app.root.findByName("userAgentIns");if(t.enabled=!0,function PopupBlocked(){var t=window.open(null,"","width=100,height=100");try{return t.close(),!1}catch(t){return!0}}()){var e=window.navigator.userAgent,i=this.app.root.findByName("instructionSafari"),n=this.app.root.findByName("instructionChrome");e.match(/iPad/i)||e.match(/iPhone/i)?i.enabled=!0:e.match(/Android/i)&&(n.enabled=!0)}else t.enabled=!1},JsDetect.prototype.update=function(t){};