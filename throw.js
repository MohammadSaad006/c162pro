AFRAME.registerComponent("bowling-balls", {
    init: function () {
      this.throwBall();
    },
    throwBall: function () {
      window.addEventListener("keydown", (e) => {
        if (e.key === "z") {
          var  ball = document.createElement("a-entity");
  
          ball.setAttribute("gltf-model", "./assets/bowling_ball/scene.gltf");
          ball.setAttribute("dynamic-body",{
            mass:0,
            shape:"sphere"
          })
          ball.setAttribute("scale", { x: 3, y: 3,  z: 3});
  
          var cam = document.querySelector("#camera");
  
          pos = cam.getAttribute("position");
  
          ball.setAttribute("position", {
            x: pos.x,
            y: pos.y-1.2,
            z: pos.z,
          });
  
          var camera = document.querySelector("#camera").object3D;
          var direction = new THREE.Vector3();
          camera.getWorldDirection(direction);
          ball.setAttribute("velocity", direction.multiplyScalar(-10));
          ball.addEventListener("collide",this.removeBullet)
          var scene = document.querySelector("#scene");
  
          scene.appendChild(ball);
        }
      });
    },
    removeBall: function (e) {
      //Original entity (bullet)
      console.log(e.detail.target.el);
      
      //Other entity, which bullet touched.
      console.log(e.detail.body.el);
  
      //bullet element
      element=e.detail.target.el
  
  
  
      //element which is hit
      elementHit=e.detail.body.el
  
      if (elementHit.id.includes("pin")) 
        {
          //set material attribute
  
          //impulse and point vector
          var impulse=new CANNON.Vec3(-2,2,1)
          var worldPoint=new CANNON.Vec3().copy(elementHit.getAttribute("position"))
  
          elementHit.body.applyImpulse(impulse,worldPoint)
  
          //remove event listener
          element.removeEventListener("collide",this.shoot)
          
          //remove the bullets from the scene
          var scene=document.querySelector("#scene")
          scene.removeChild(element)
      }
    },
    shoot:function(){
  
    }
  });
  
  