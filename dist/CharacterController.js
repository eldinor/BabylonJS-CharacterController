!function(t,i){if("object"==typeof exports&&"object"==typeof module)module.exports=i(require("babylonjs"));else if("function"==typeof define&&define.amd)define(["babylonjs"],i);else{var s="object"==typeof exports?i(require("babylonjs")):i(t.BABYLON);for(var h in s)("object"==typeof exports?exports:t)[h]=s[h]}}(self,(t=>(()=>{"use strict";var i={247:i=>{i.exports=t}},s={};function h(t){var n=s[t];if(void 0!==n)return n.exports;var e=s[t]={exports:{}};return i[t](e,e.exports,h),e.exports}h.n=t=>{var i=t&&t.t?()=>t.default:()=>t;return h.d(i,{a:i}),i},h.d=(t,i)=>{for(var s in i)h.o(i,s)&&!h.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:i[s]})},h.o=(t,i)=>Object.prototype.hasOwnProperty.call(t,i),h.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"t",{value:!0})};var n={};return(()=>{h.r(n),h.d(n,{ActionData:()=>e,ActionMap:()=>r,CCSettings:()=>u,CharacterController:()=>i});var t=h(247),i=function(){function i(i,h,n,e,u){void 0===u&&(u=!1);var a=this;this.i=null,this.h=null,this.u=9.8,this.l=30,this.v=45,this.k=Math.PI*this.l/180,this.M=Math.PI*this.v/180,this.p=.25,this.j=0,this.O=t.Vector3.Zero(),this.g=new r,this.C=!0,this.F=t.Vector3.Zero(),this.A=!1,this.L=0,this.R=0,this.S=!1,this.q=-1,this.B=!1,this.I=!1,this.J=null,this._=t.Vector3.Zero(),this.D=!1,this.T=0,this.G=50,this.H=0,this.K=!1,this.N=!1,this.P=!1,this.U=700,this.V=null,this.W=0,this.X=0,this.Y=0,this.Z=1,this.$=!1,this.tt=!1,this.it=0,this.st=0,this.ht=10,this.nt=!0,this.et=!1,this.rt=new t.Ray(t.Vector3.Zero(),t.Vector3.One(),1),this.ut=t.Vector3.Zero(),this.ft=.5,this.ot=new Array,this.ct=!1,this.lt=50,this.vt=!1,this.bt=!1,this.wt=!1,this.kt=!0,this.dt=h,null==this.dt&&(this.kt=!1,this.setMode(1)),this.Mt=n,this.setAvatar(i,u)||console.error("unable to set avatar");null!=e&&this.setActionMap(e),this.bt||null==this.h||this.jt(this.h),this.bt,this.kt&&(this.nt=this.dt.checkCollisions),this.yt=new s,this.Ot=function(){a.gt()},this.xt=function(t){a.Ct(t)},this.Ft=function(t){a.At(t)}}return i.prototype.getScene=function(){return this.Mt},i.prototype.setSlopeLimit=function(t,i){this.l=t,this.v=i,this.k=Math.PI*this.l/180,this.M=Math.PI*this.v/180},i.prototype.setStepOffset=function(t){this.p=t},i.prototype.setWalkSpeed=function(t){this.g.walk.speed=t},i.prototype.setRunSpeed=function(t){this.g.run.speed=t},i.prototype.setBackSpeed=function(t){this.g.walkBack.speed=t},i.prototype.setBackFastSpeed=function(t){this.g.walkBackFast.speed=t},i.prototype.setJumpSpeed=function(t){this.g.idleJump.speed=t,this.g.runJump.speed=t},i.prototype.setLeftSpeed=function(t){this.g.strafeLeft.speed=t},i.prototype.setLeftFastSpeed=function(t){this.g.strafeLeftFast.speed=t},i.prototype.setRightSpeed=function(t){this.g.strafeRight.speed=t},i.prototype.setRightFastSpeed=function(t){this.g.strafeLeftFast.speed=t},i.prototype.setTurnSpeed=function(t){this.g.turnLeft.speed=t*Math.PI/180,this.g.turnRight.speed=t*Math.PI/180},i.prototype.setTurnFastSpeed=function(t){this.g.turnLeftFast.speed=t*Math.PI/180,this.g.turnRightFast.speed=t*Math.PI/180},i.prototype.setGravity=function(t){this.u=t},i.prototype.setAnimationGroups=function(t){null!=this.J&&this.J.exist&&this.J.ag.stop(),this.bt=!0,this.setActionMap(t)},i.prototype.setAnimationRanges=function(t){this.bt=!1,this.setActionMap(t)},i.prototype.setActionMap=function(i){for(var s,h=!1,n=0,r=Object.keys(this.g);n<r.length;n++){var u=r[n],a=this.g[u];a instanceof e&&(a.exist=!1,null!=(s=i[a.id])&&(s instanceof t.AnimationGroup?(a.ag=s,a.name=a.ag.name,a.exist=!0,h=!0,this.wt=!0):s.exist&&(this.wt=!0,a.exist=!0,s instanceof Object?(s.ag&&(a.ag=s.ag,h=!0),s.name&&(a.name=s.name),null!=s.loop&&(a.loop=s.loop),s.rate&&(a.rate=s.rate),s.speed&&(a.speed=s.speed),s.sound&&(a.sound=s.sound)):a.name=s)))}return this.Lt(),this.J=null,h?"ag":"ar"},i.prototype.getActionMap=function(){for(var t=new r,i=0,s=Object.keys(this.g);i<s.length;i++){var h=s[i],n=this.g[h];if(n instanceof e&&n.exist){var u=t[n.id];u.ag=n.ag,u.name=n.name,u.loop=n.loop,u.rate=n.rate,u.speed=n.speed,u.key=n.key,u.sound=n.sound,u.exist=n.exist}}return t},i.prototype.getSettings=function(){var t=new u;return t.faceForward=this.isFaceForward(),t.topDown=1==this.getMode(),t.turningOff=this.isTurningOff(),t.cameraTarget=this.F.clone(),t.cameraElastic=this.C,t.elasticSteps=this.lt,t.makeInvisble=this.ct,t.gravity=this.u,t.keyboard=this.Rt,t.maxSlopeLimit=this.v,t.minSlopeLimit=this.l,t.noFirstPerson=this.A,t.stepOffset=this.p,t.sound=this.St,t},i.prototype.setSettings=function(t){this.setFaceForward(t.faceForward),this.setMode(t.topDown?1:0),this.setTurningOff(t.turningOff),this.setCameraTarget(t.cameraTarget),this.setCameraElasticity(t.cameraElastic),this.setElasticiSteps(t.elasticSteps),this.makeObstructionInvisible(t.makeInvisble),this.setGravity(t.gravity),this.enableKeyBoard(t.keyboard),this.setSlopeLimit(t.minSlopeLimit,t.maxSlopeLimit),this.setNoFirstPerson(t.noFirstPerson),this.setStepOffset(t.stepOffset),this.setSound(t.sound)},i.prototype.qt=function(i,s,h,n){if(this.bt||null!=this.h){if(null!=s)if(this.bt){if(!(s instanceof t.AnimationGroup))return;i.ag=s,i.exist=!0}else{if(null==this.h.getAnimationRange(i.name))return void(i.exist=!1);i.name=s,i.exist=!0}null!=n&&(i.loop=n),null!=h&&(i.rate=h)}},i.prototype.enableBlending=function(t){if(this.bt)for(var i=0,s=Object.keys(this.g);i<s.length;i++){var h=s[i],n=this.g[h];if(n instanceof e&&n.exist)for(var r=0,u=n.ag.targetedAnimations;r<u.length;r++){var a=u[r];a.animation.enableBlending=!0,a.animation.blendingSpeed=t}}else null!==this.h&&this.h.enableBlending(t)},i.prototype.disableBlending=function(){if(this.bt)for(var t=0,i=Object.keys(this.g);t<i.length;t++){var s=i[t],h=this.g[s];if(h instanceof e&&h.exist)for(var n=0,r=h.ag.targetedAnimations;n<r.length;n++){r[n].animation.enableBlending=!1}}},i.prototype.setWalkAnim=function(t,i,s){this.qt(this.g.walk,t,i,s)},i.prototype.setRunAnim=function(t,i,s){this.qt(this.g.run,t,i,s)},i.prototype.setWalkBackAnim=function(t,i,s){this.qt(this.g.walkBack,t,i,s),this.Bt(this.g.walkBackFast,this.g.walkBack)},i.prototype.setWalkBackFastAnim=function(t,i,s){this.qt(this.g.walkBackFast,t,i,s)},i.prototype.setSlideBackAnim=function(t,i,s){this.qt(this.g.slideBack,t,i,s)},i.prototype.setIdleAnim=function(t,i,s){this.qt(this.g.idle,t,i,s)},i.prototype.setTurnRightAnim=function(t,i,s){this.qt(this.g.turnRight,t,i,s),this.Bt(this.g.turnRightFast,this.g.turnRight)},i.prototype.setTurnRightFastAnim=function(t,i,s){this.qt(this.g.turnRightFast,t,i,s)},i.prototype.setTurnLeftAnim=function(t,i,s){this.qt(this.g.turnLeft,t,i,s),this.Bt(this.g.turnLeftFast,this.g.turnLeft)},i.prototype.setTurnLeftFastAnim=function(t,i,s){this.qt(this.g.turnLeftFast,t,i,s)},i.prototype.setStrafeRightAnim=function(t,i,s){this.qt(this.g.strafeRight,t,i,s),this.Bt(this.g.strafeRightFast,this.g.strafeRight)},i.prototype.setStrafeRightFastAnim=function(t,i,s){this.qt(this.g.strafeRightFast,t,i,s)},i.prototype.setStrafeLeftAnim=function(t,i,s){this.qt(this.g.strafeLeft,t,i,s),this.Bt(this.g.strafeLeftFast,this.g.strafeLeft)},i.prototype.setStrafeLeftFastAnim=function(t,i,s){this.qt(this.g.strafeLeftFast,t,i,s)},i.prototype.setIdleJumpAnim=function(t,i,s){this.qt(this.g.idleJump,t,i,s)},i.prototype.setRunJumpAnim=function(t,i,s){this.qt(this.g.runJump,t,i,s)},i.prototype.setFallAnim=function(t,i,s){this.qt(this.g.fall,t,i,s)},i.prototype.setSound=function(t){if(null!=t){this.St=t;var i=Object.keys(this.g);t.loop=!1;for(var s=0,h=i;s<h.length;s++){var n=h[s],r=this.g[n];r instanceof e&&(r.sound=t,r.sound.attachToMesh(this.i))}this.g.idle.sound=null,this.g.fall.sound=null,this.g.slideBack.sound=null}},i.prototype.setWalkKey=function(t){this.g.walk.key=t.toLowerCase()},i.prototype.setWalkBackKey=function(t){this.g.walkBack.key=t.toLowerCase()},i.prototype.setTurnLeftKey=function(t){this.g.turnLeft.key=t.toLowerCase()},i.prototype.setTurnRightKey=function(t){this.g.turnRight.key=t.toLowerCase()},i.prototype.setStrafeLeftKey=function(t){this.g.strafeLeft.key=t.toLowerCase()},i.prototype.setStrafeRightKey=function(t){this.g.strafeRight.key=t.toLowerCase()},i.prototype.setJumpKey=function(t){this.g.idleJump.key=t.toLowerCase()},i.prototype.setCameraElasticity=function(t){this.C=t},i.prototype.setElasticiSteps=function(t){this.lt=t},i.prototype.makeObstructionInvisible=function(t){this.ct=t},i.prototype.setCameraTarget=function(t){this.F.copyFrom(t)},i.prototype.cameraCollisionChanged=function(){this.nt=this.dt.checkCollisions},i.prototype.setNoFirstPerson=function(t){this.A=t},i.prototype.jt=function(t){for(var i=0,s=Object.keys(this.g);i<s.length;i++){var h=s[i],n=this.g[h];n instanceof e&&(null!=t?null!=t.getAnimationRange(n.id)&&(n.name=n.id,n.exist=!0,this.wt=!0):n.exist=!1)}this.Lt()},i.prototype.Lt=function(){this.Bt(this.g.walkBackFast,this.g.walkBack),this.Bt(this.g.turnRightFast,this.g.turnRight),this.Bt(this.g.turnLeftFast,this.g.turnLeft),this.Bt(this.g.strafeRightFast,this.g.strafeRight),this.Bt(this.g.strafeLeftFast,this.g.strafeLeft)},i.prototype.Bt=function(t,i){t.exist||i.exist&&(t.exist=!0,t.ag=i.ag,t.name=i.name,t.rate=2*i.rate)},i.prototype.setMode=function(t){this.kt?(this.L=t,this.R=t):(this.L=1,this.R=1)},i.prototype.getMode=function(){return this.L},i.prototype.setTurningOff=function(t){this.tt=t},i.prototype.isTurningOff=function(){return this.tt},i.prototype.It=function(i){var s=i.getWorldMatrix(),h=t.Vector3.FromArray(s.m,0),n=t.Vector3.FromArray(s.m,4),e=t.Vector3.FromArray(s.m,8),r=t.Vector3.Cross(h,n);t.Vector3.Dot(r,e)<0?(this.S=!0,this.q=1):(this.S=!1,this.q=-1)},i.prototype.setFaceForward=function(t){if(this.Jt=t,this._t=this.Mt.useRightHandedSystem?-1:1,!this.kt)return this.Dt=0,void(this.Tt=1);this.S?(this.Dt=t?Math.PI/2:3*Math.PI/2,this.Tt=t?1:-1):(this.Dt=t?3*Math.PI/2:Math.PI/2,this.Tt=t?-1:1)},i.prototype.isFaceForward=function(){return this.Jt},i.prototype.checkAGs=function(t){for(var i=0,s=Object.keys(this.g);i<s.length;i++){var h=s[i],n=this.g[h];n instanceof e&&(null!=t[n.name]&&(n.ag=t[n.name],n.exist=!0))}},i.prototype.zt=function(i,s,h){var n;n=h?this.Et(i).getChildren((function(i){return i instanceof t.TransformNode}),!1):[i];for(var e=0,r=s;e<r.length;e++)for(var u=0,a=r[e].targetedAnimations;u<a.length;u++){var f=a[u];if(n.indexOf(f.target)>-1)return!0}return!1},i.prototype.Et=function(t){return null==t.parent?t:this.Et(t.parent)},i.prototype.start=function(){this.B||(this.B=!0,this.yt.reset(),this.Y=0,this.it=.001,this.D=!1,this.Gt(),this.enableKeyBoard(!0),this.Mt.registerBeforeRender(this.Ot))},i.prototype.stop=function(){this.B&&(this.B=!1,this.Mt.unregisterBeforeRender(this.Ot),this.enableKeyBoard(!1),this.J=null)},i.prototype.pauseAnim=function(){this.I=!0,null!=this.J&&this.J.exist&&(this.bt?this.J.ag.stop():(console.log("stopping ar "+this.J.name),this.Mt.stopAnimation(this.h)),null!=this.J.sound&&this.J.sound.stop(),clearInterval(this.V),this.Mt.unregisterBeforeRender(this.Ot))},i.prototype.resumeAnim=function(){this.I=!1,this.J=null,this.Mt.registerBeforeRender(this.Ot)},i.prototype.Ht=function(){return this.kt?t.Vector3.Dot(this.i.forward,this.i.position.subtract(this.dt.position))<0?1:-1:1},i.prototype.gt=function(){this._.copyFrom(this.i.position);var t=null,i=this.Mt.getEngine().getDeltaTime()/1e3;if(this.yt.Kt&&!this.K?(this.D=!1,this.it=0,t=this.Nt(i)):this.anyMovement()||this.K?(this.D=!1,this.it=0,t=this.Pt(i)):this.K||(t=this.Qt(i)),!this.I&&this.wt&&null!=t&&this.J!==t){if(t.exist){var s=void 0,h=30;if(this.bt)null!=this.J&&this.J.exist&&this.J.ag.stop(),t.ag.start(t.loop,t.rate),h=t.ag.targetedAnimations[0].animation.framePerSecond,s=t.ag.to-t.ag.from;else h=this.h.beginAnimation(t.name,t.loop,t.rate).getAnimations()[0].animation.framePerSecond,s=this.h.getAnimationRange(t.name).to-this.h.getAnimationRange(t.name).from;null!=this.J&&null!=this.J.sound&&this.J.sound.stop(),clearInterval(this.V),null!=t.sound&&(t.sound.play(),this.V=setInterval((function(){t.sound.play()}),1e3*s/(h*Math.abs(t.rate)*2)))}this.J=t}this.Gt()},i.prototype.Nt=function(i){var s=null;s=this.g.runJump,0===this.X&&(this.W=this.i.position.y),this.X=this.X+i;var h,n=0,e=0;if(this.kt&&1!=this.L&&!this.tt&&(this.i.rotation.y=this.Dt-this.dt.alpha),this.P||this.N?(this.P?n=this.g.run.speed*i:this.N&&(n=this.g.walk.speed*i),(h=this.Ut.clone()).y=0,(h=h.normalize()).scaleToRef(n,h),e=this.Vt(this.g.runJump.speed,i),h.y=e):(e=this.Vt(this.g.idleJump.speed,i),h=new t.Vector3(0,e,0),s=this.g.idleJump),this.i.moveWithCollisions(h),e<0)if(this.i.position.y>this._.y||this.i.position.y===this._.y&&h.length()>.001)this.Wt();else if(this.i.position.y<this.W){var r=this.i.position.subtract(this._);this.Xt(r,h,.001)?s=this.g.fall:this.Yt(r)<=this.k&&this.Wt()}return s},i.prototype.Vt=function(t,i){return(t-this.u*this.X)*i-.5*this.u*i*i},i.prototype.Wt=function(){this.yt.Kt=!1,this.X=0,this.N=!1,this.P=!1},i.prototype.Xt=function(t,i,s){return Math.abs(t.x-i.x)<s&&Math.abs(t.y-i.y)<s&&Math.abs(t.z-i.z)<s},i.prototype.Yt=function(t){return Math.atan(Math.abs(t.y/Math.sqrt(t.x*t.x+t.z*t.z)))},i.prototype.Pt=function(t){var i=this.Y*this.u;this.T=i*t+this.u*t*t/2,this.Y=this.Y+t;var s=!1,h=null;if(this.K&&(this.Ut.y=-this.T,s=!0),h=this.Zt(h,s,t),this.$t(),!this.K){this.N=!1,this.P=!1;var n=void 0,e=0;switch(!0){case this.yt.ti:n=this.q*this.Ht(),e=this.g.strafeLeft.speed*t,this.yt.ii?(e=this.g.strafeLeftFast.speed*t,h=-this.Tt*n>0?this.g.strafeLeftFast:this.g.strafeRightFast):h=-this.Tt*n>0?this.g.strafeLeft:this.g.strafeRight,this.Ut=this.i.calcMovePOV(n*e,-this.T,0),s=!0;break;case this.yt.si:n=-this.q*this.Ht(),e=this.g.strafeRight.speed*t,this.yt.ii?(e=this.g.strafeRightFast.speed*t,h=-this.Tt*n>0?this.g.strafeLeftFast:this.g.strafeRightFast):h=-this.Tt*n>0?this.g.strafeLeft:this.g.strafeRight,this.Ut=this.i.calcMovePOV(n*e,-this.T,0),s=!0;break;case this.yt.hi||this.tt&&0==this.L:this.yt.ii?(this.P=!0,e=this.g.run.speed*t,h=this.g.run):(this.N=!0,e=this.g.walk.speed*t,h=this.g.walk),this.Ut=this.i.calcMovePOV(0,-this.T,this.Tt*e),s=!0;break;case this.yt.ni:e=this.g.walkBack.speed*t,this.yt.ii?(e=this.g.walkBackFast.speed*t,h=this.g.walkBackFast):h=this.g.walkBack,this.Ut=this.i.calcMovePOV(0,-this.T,-this.Tt*e),s=!0}}if(s&&this.Ut.length()>.001)if(this.i.moveWithCollisions(this.Ut),this.i.position.y>this._.y){var r=this.i.position.subtract(this._),u=this.Yt(r);u>=this.M?this.p>0?(0==this.j&&this.O.copyFrom(this._),this.j=this.j+(this.i.position.y-this._.y),this.j>this.p&&(this.j=0,this.i.position.copyFrom(this.O),this.ei())):(this.i.position.copyFrom(this._),this.ei()):(this.j=0,u>this.k?(this.H=0,this.K=!1):this.ei())}else if(this.i.position.y<this._.y){r=this.i.position.subtract(this._);this.Xt(r,this.Ut,.001)?(this.K=!0,this.H++,this.H>this.G&&(h=this.g.fall)):this.Yt(r)<=this.k?this.ei():(this.H=0,this.K=!1)}else this.ei();return h},i.prototype.$t=function(){if(this.kt&&1!=this.L){var t=this.kt?this.Dt-this.dt.alpha:0;if(this.tt)switch(!0){case this.yt.hi&&this.yt.ri:this.i.rotation.y=t+this._t*Math.PI/4;break;case this.yt.hi&&this.yt.ui:this.i.rotation.y=t-this._t*Math.PI/4;break;case this.yt.ni&&this.yt.ri:this.i.rotation.y=t+3*this._t*Math.PI/4;break;case this.yt.ni&&this.yt.ui:this.i.rotation.y=t-3*this._t*Math.PI/4;break;case this.yt.hi:this.i.rotation.y=t;break;case this.yt.ni:this.i.rotation.y=t+Math.PI;break;case this.yt.ri:this.i.rotation.y=t+this._t*Math.PI/2;break;case this.yt.ui:this.i.rotation.y=t-this._t*Math.PI/2}else this.kt&&(this.i.rotation.y=t)}},i.prototype.Zt=function(t,i,s){if((!this.tt||0!=this.L)&&!this.yt.ti&&!this.yt.si&&(this.yt.ui||this.yt.ri)){var h=this.g.turnLeft.speed*s;this.yt.ii&&(h*=2);var n=void 0;1==this.L?(this.$||(this.Z=-this.Tt*this.Ht(),this.S&&(this.Z=-this.Z),this.$=!0),n=this.Z,this.yt.ui?this.yt.hi||(this.yt.ni?n=-this.Z:t=this.Z>0?this.g.turnRight:this.g.turnLeft):this.yt.hi?n=-this.Z:this.yt.ni||(n=-this.Z,t=this.Z>0?this.g.turnLeft:this.g.turnRight),this.i.rotation.y=this.i.rotation.y+h*n):(n=1,this.yt.ui?(this.yt.ni&&(n=-1),i||(t=this.g.turnLeft)):(this.yt.hi&&(n=-1),i||(n=-1,t=this.g.turnRight)),this.kt&&(this.dt.alpha=this.dt.alpha+this._t*h*n))}return t},i.prototype.ei=function(){this.Y=0,this.H=0,this.K=!1},i.prototype.Qt=function(i){if(this.D)return this.g.idle;this.N=!1,this.P=!1,this.Y=0;var s=this.g.idle;if(this.H=0,0===i)this.T=5;else{var h=this.it*this.u;this.T=h*i+this.u*i*i/2,this.it=this.it+i}if(this.T<.01)return s;var n=new t.Vector3(0,-this.T,0);if(this.kt&&1!=this.L&&!this.tt&&(this.i.rotation.y=this.Dt-this.dt.alpha),this.i.moveWithCollisions(n),this.i.position.y>this._.y||this.i.position.y===this._.y)this.ai();else if(this.i.position.y<this._.y){var e=this.i.position.subtract(this._);this.Xt(e,n,.001)||(this.Yt(e)<=this.k?(this.ai(),this.i.position.copyFrom(this._)):(this.fi(),s=this.g.slideBack))}return s},i.prototype.ai=function(){this.st++,this.st>this.ht&&(this.D=!0,this.it=0)},i.prototype.fi=function(){this.D=!1,this.st=0},i.prototype.Gt=function(){this.kt&&(0==this.j&&this.i.position.addToRef(this.F,this.dt.target),this.dt.radius>this.dt.lowerRadiusLimit&&(this.C||this.ct)&&this.oi(),this.dt.radius<=this.dt.lowerRadiusLimit?this.A||this.et||(this.i.visibility=0,this.dt.checkCollisions=!1,this.R=this.L,this.L=0,this.et=!0):(this.et=!1,this.L=this.R,this.i.visibility=1,this.dt.checkCollisions=this.nt))},i.prototype.oi=function(){var t=this;this.dt.position.subtractToRef(this.dt.target,this.ut),this.rt.origin=this.dt.target,this.rt.length=this.ut.length(),this.rt.direction=this.ut.normalize();var i=this.Mt.multiPickWithRay(this.rt,(function(i){return i!=t.i}));if(this.ct)if(this.ci=this.ot,i.length>0){this.ot=new Array;for(var s=0,h=i;s<h.length;s++){var n=h[s];(n.pickedMesh.isVisible||this.ci.includes(n.pickedMesh))&&(n.pickedMesh.isVisible=!1,this.ot.push(n.pickedMesh))}for(var e=0,r=this.ci;e<r.length;e++){var u=r[e];this.ot.includes(u)||(u.isVisible=!0)}}else{for(var a=0,f=this.ci;a<f.length;a++){(u=f[a]).isVisible=!0}this.ci.length=0}if(this.C&&i.length>0){if(!(1!=i.length||this.li(i[0].pickedMesh)||i[0].pickedMesh.checkCollisions&&this.dt.checkCollisions))return;for(var o=null,c=0;c<i.length;c++){u=i[c].pickedMesh;if(this.li(u)){o=i[c].pickedPoint;break}if(u.checkCollisions){o=i[c].pickedPoint;break}}if(null==o)return;var l=this.dt.position.subtract(o),v=l.length();if(this.dt.checkCollisions){var b=void 0;b=v<=1?l.addInPlace(l.normalizeToNew().scaleInPlace(this.ft)):l.normalize().scaleInPlace(v/this.lt),this.dt.position=this.dt.position.subtract(b)}else{b=void 0;b=v<=1?v+this.ft:v/this.lt,this.dt.radius=this.dt.radius-b}}},i.prototype.li=function(t){return!!t.isVisible&&(0!=t.visibility&&(null==t.material||0==t.material.alphaMode||0!=t.material.alpha))},i.prototype.anyMovement=function(){return this.yt.hi||this.yt.ni||this.yt.ui||this.yt.ri||this.yt.ti||this.yt.si},i.prototype.At=function(t){if(t.key&&!t.repeat){switch(t.key.toLowerCase()){case this.g.idleJump.key:this.yt.Kt=!0;break;case"capslock":this.yt.ii=!this.yt.ii;break;case"shift":this.yt.ii=!0;break;case"up":case"arrowup":case this.g.walk.key:this.yt.hi=!0;break;case"left":case"arrowleft":case this.g.turnLeft.key:this.yt.ui=!0;break;case"right":case"arrowright":case this.g.turnRight.key:this.yt.ri=!0;break;case"down":case"arrowdown":case this.g.walkBack.key:this.yt.ni=!0;break;case this.g.strafeLeft.key:this.yt.ti=!0;break;case this.g.strafeRight.key:this.yt.si=!0}this.vt=this.anyMovement()}},i.prototype.Ct=function(t){if(t.key){switch(t.key.toLowerCase()){case"shift":this.yt.ii=!1;break;case"up":case"arrowup":case this.g.walk.key:this.yt.hi=!1;break;case"left":case"arrowleft":case this.g.turnLeft.key:this.yt.ui=!1,this.$=!1;break;case"right":case"arrowright":case this.g.turnRight.key:this.yt.ri=!1,this.$=!1;break;case"down":case"arrowdown":case this.g.walkBack.key:this.yt.ni=!1;break;case this.g.strafeLeft.key:this.yt.ti=!1;break;case this.g.strafeRight.key:this.yt.si=!1}this.vt=this.anyMovement()}},i.prototype.enableKeyBoard=function(t){this.Rt=t;var i=this.Mt.getEngine().getRenderingCanvas();t?(i.addEventListener("keyup",this.xt,!1),i.addEventListener("keydown",this.Ft,!1)):(i.removeEventListener("keyup",this.xt,!1),i.removeEventListener("keydown",this.Ft,!1))},i.prototype.walk=function(t){this.yt.hi=t},i.prototype.walkBack=function(t){this.yt.ni=t},i.prototype.walkBackFast=function(t){this.yt.ni=t,this.yt.ii=t},i.prototype.run=function(t){this.yt.hi=t,this.yt.ii=t},i.prototype.turnLeft=function(t){this.yt.ui=t,t||(this.$=t)},i.prototype.turnLeftFast=function(t){this.yt.ui=t,t||(this.$=t),this.yt.ii=t},i.prototype.turnRight=function(t){this.yt.ri=t,t||(this.$=t)},i.prototype.turnRightFast=function(t){this.yt.ri=t,t||(this.$=t),this.yt.ii=t},i.prototype.strafeLeft=function(t){this.yt.ti=t},i.prototype.strafeLeftFast=function(t){this.yt.ti=t,this.yt.ii=t},i.prototype.strafeRight=function(t){this.yt.si=t},i.prototype.strafeRightFast=function(t){this.yt.si=t,this.yt.ii=t},i.prototype.jump=function(){this.yt.Kt=!0},i.prototype.idle=function(){this.yt.reset()},i.prototype.isAg=function(){return this.bt},i.prototype.vi=function(i){var s=this.bi(i);if(s instanceof t.Mesh&&s.skeleton)return s.skeleton;var h=s.getChildMeshes(!1,(function(i){return!!(i instanceof t.Mesh&&i.skeleton)}));return h.length>0?h[0].skeleton:null},i.prototype.bi=function(t){return null==t.parent?t:this.bi(t.parent)},i.prototype.setAvatar=function(i,s){void 0===s&&(s=!1);var h=this.bi(i);return h instanceof t.Mesh?(this.i=h,this.h=this.vi(i),this.bt=this.zt(i,this.Mt.animationGroups,!0),this.g.reset(),this.bt||null==this.h||this.jt(this.h),this.It(i),this.setFaceForward(s),!0):(console.error("Cannot move this mesh. The root node of the mesh provided is not a mesh"),!1)},i.prototype.getAvatar=function(){return this.i},i.prototype.setAvatarSkeleton=function(t){this.h=t,null!=this.h&&this.wi(t)?this.bt=!0:this.bt=!1,this.bt||null==this.h||this.jt(this.h)},i.prototype.wi=function(t){var i=this;return t.animations.some((function(t){return i.Mt.animationGroups.some((function(i){return i.children.some((function(i){return i.animation==t}))}))}))},i.prototype.getSkeleton=function(){return this.h},i}(),s=function(){function t(){this.hi=!1,this.ni=!1,this.ri=!1,this.ui=!1,this.si=!1,this.ti=!1,this.Kt=!1,this.ii=!1,this.reset()}return t.prototype.reset=function(){this.hi=!1,this.ni=!1,this.ri=!1,this.ui=!1,this.si=!1,this.ti=!1,this.Kt=!1,this.ii=!1},t}(),e=function(){function t(t,i,s){void 0===i&&(i=1),this.name="",this.loop=!0,this.rate=1,this.exist=!1,this.id=t,this.speed=i,this.ds=i,this.key=s,this.dk=s}return t.prototype.reset=function(){this.name="",this.speed=this.ds,this.key=this.dk,this.loop=!0,this.rate=1,this.sound=null,this.exist=!1},t}(),r=function(){function t(){this.walk=new e("walk",3,"w"),this.walkBack=new e("walkBack",1.5,"s"),this.walkBackFast=new e("walkBackFast",3,"na"),this.idle=new e("idle",0,"na"),this.idleJump=new e("idleJump",6," "),this.run=new e("run",6,"na"),this.runJump=new e("runJump",6,"na"),this.fall=new e("fall",0,"na"),this.turnLeft=new e("turnLeft",Math.PI/8,"a"),this.turnLeftFast=new e("turnLeftFast",Math.PI/4,"na"),this.turnRight=new e("turnRight",Math.PI/8,"d"),this.turnRightFast=new e("turnRightFast",Math.PI/4,"na"),this.strafeLeft=new e("strafeLeft",1.5,"q"),this.strafeLeftFast=new e("strafeLeftFast",3,"na"),this.strafeRight=new e("strafeRight",1.5,"e"),this.strafeRightFast=new e("strafeRightFast",3,"na"),this.slideBack=new e("slideBack",0,"na")}return t.prototype.reset=function(){for(var t=0,i=Object.keys(this);t<i.length;t++){var s=this[i[t]];s instanceof e&&s.reset()}},t}(),u=function(){this.cameraElastic=!0,this.makeInvisble=!0,this.cameraTarget=t.Vector3.Zero(),this.noFirstPerson=!1,this.topDown=!0,this.turningOff=!0,this.keyboard=!0}})(),n})()));
//# sourceMappingURL=CharacterController.js.map