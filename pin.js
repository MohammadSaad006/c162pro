AFRAME.registerComponent("bowling-pin", {
    init: function () {
        this.throwBall();
      },
      throwBall: function () {
        var pin=document.createElement("a-entity");
        pin.setAttribute("gltf-model","./assets/bowling_pin");
        pin.setAttribute("dynamic-body")
        pin.setAttribute("scale",{x:4 , Y:4 , z:4 })
      }
})