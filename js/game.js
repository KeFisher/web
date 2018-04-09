			//Keaton Fisher
			// myWorld -- Needs camera positioning and type, lights and shadows, texture repeat and mapping, 
			//			object orientation, triangle generation algorithm, animate on mouse click...
			
			//Creates new scene in code
			var scene = new THREE.Scene();
			
			//Paints the background this color
			scene.background = new THREE.Color( 0xcce0ff );
		

			var renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight);
			document.body.appendChild( renderer.domElement );

			//Creates a camera 															--Renders objects from .1 to 50 units away
			var camera = new THREE.PerspectiveCamera( 50, window.innerWidth/window.innerHeight, 0.1, 50 );
			
			
			var controls = new THREE.OrbitControls( camera );
			//Moves camera position back 8 units
			camera.position.set(0,0,8);
			controls.update();
			
			
			//Creates box geometry of size 1x1x1
			/*var geometry = new THREE.BoxGeometry( 1, 1, 1 );
			//Creates material of type Phong for cube
			var material = new THREE.MeshPhongMaterial( { color: 0xff0000 } );
			//combines geometry with material to produce cube.
			var cube = new THREE.Mesh( geometry, material );
			//Adds cube to scene.
			scene.add( cube );*/
			
			
			//Creates main object
			var mainPlane = new THREE.BufferGeometry();
// We duplicate the top left and bottom right
// vertices because each vertex needs to appear once per triangle.
			var vertices = new Float32Array( [
			-1.000000, 1.000000, 0.300000,
 -1.000000, 2.000000, 0.300000,
 -2.000000, 2.000000, 0.500000,
 -1.000000, 1.000000, 0.300000,
 -2.000000, 2.000000, 0.500000,
 -2.000000, 1.000000, 0.000000,
 0.000000, 1.000000, 0.200000,
 0.000000, 2.000000, 0.200000,
 -1.000000, 2.000000, 0.300000,
 0.000000, 1.000000, 0.200000,
 -1.000000, 2.000000, 0.300000,
 -1.000000, 1.000000, 0.300000,
 1.000000, 1.000000, -0.100000,
 1.000000, 2.000000, 0.100000,
 0.000000, 2.000000, 0.200000,
 1.000000, 1.000000, -0.100000,
 0.000000, 2.000000, 0.200000,
 0.000000, 1.000000, 0.200000,
 2.000000, 1.000000, 0.004000,
 2.000000, 2.000000, 0.400000,
 1.000000, 2.000000, 0.100000,
 2.000000, 1.000000, 0.004000,
 1.000000, 2.000000, 0.100000,
 1.000000, 1.000000, -0.100000,
 -1.000000, 0.000000, 0.000000,
 -1.000000, 1.000000, 0.300000,
 -2.000000, 1.000000, 0.000000,
 -1.000000, 0.000000, 0.000000,
 -2.000000, 1.000000, 0.000000,
 -2.000000, 0.000000, 0.060000,
 0.000000, 0.000000, 0.300000,
 0.000000, 1.000000, 0.200000,
 -1.000000, 1.000000, 0.300000,
 0.000000, 0.000000, 0.300000,
 -1.000000, 1.000000, 0.300000,
 -1.000000, 0.000000, 0.000000,
 1.000000, 0.000000, 0.700000,
 1.000000, 1.000000, -0.100000,
 0.000000, 1.000000, 0.200000,
 1.000000, 0.000000, 0.700000,
 0.000000, 1.000000, 0.200000,
 0.000000, 0.000000, 0.300000,
 2.000000, 0.000000, 0.000000,
 2.000000, 1.000000, 0.004000,
 1.000000, 1.000000, -0.100000,
 2.000000, 0.000000, 0.000000,
 1.000000, 1.000000, -0.100000,
 1.000000, 0.000000, 0.700000,
 -1.000000, -1.000000, 0.500000,
 -1.000000, 0.000000, 0.000000,
 -2.000000, 0.000000, 0.060000,
 -1.000000, -1.000000, 0.500000,
 -2.000000, 0.000000, 0.060000,
 -2.000000, -1.000000, 0.000000,
 0.000000, -1.000000, 0.000000,
 0.000000, 0.000000, 0.300000,
 -1.000000, 0.000000, 0.000000,
 0.000000, -1.000000, 0.000000,
 -1.000000, 0.000000, 0.000000,
 -1.000000, -1.000000, 0.500000,
 1.000000, -1.000000, -0.100000,
 1.000000, 0.000000, 0.700000,
 0.000000, 0.000000, 0.300000,
 1.000000, -1.000000, -0.100000,
 0.000000, 0.000000, 0.300000,
 0.000000, -1.000000, 0.000000,
 2.000000, -1.000000, 0.000000,
 2.000000, 0.000000, 0.000000,
 1.000000, 0.000000, 0.700000,
 2.000000, -1.000000, 0.000000,
 1.000000, 0.000000, 0.700000,
 1.000000, -1.000000, -0.100000,
 -1.000000, -2.000000, 0.200000,
 -1.000000, -1.000000, 0.500000,
 -2.000000, -1.000000, 0.000000,
 -1.000000, -2.000000, 0.200000,
 -2.000000, -1.000000, 0.000000,
 -2.000000, -2.000000, 0.000000,
 0.000000, -2.000000, 0.100000,
 0.000000, -1.000000, 0.000000,
 -1.000000, -1.000000, 0.500000,
 0.000000, -2.000000, 0.100000,
 -1.000000, -1.000000, 0.500000,
 -1.00000, -2.000000, 0.200000,
 1.000000, -2.000000, 0.050000,
 1.000000, -1.000000, -0.100000,
 0.000000, -1.000000, 0.000000,
 1.000000, -2.000000, 0.050000,
 0.000000, -1.000000, 0.000000,
 0.000000, -2.000000, 0.100000,
 2.000000, -2.000000, -0.200000,
 2.000000, -1.000000, 0.000000,
 1.000000, -1.000000, -0.100000,
 2.000000, -2.000000, -0.200000,
 1.000000, -1.000000, -0.100000,
 1.000000, -2.000000, 0.050000,
 -1.000000, -3.000000, 0.200000,
 -1.000000, -2.000000, 0.200000,
 -2.000000, -2.000000, 0.000000,
 -1.000000, -3.000000, 0.200000,
 -2.000000, -2.000000, 0.000000,
 -2.000000, -3.000000, -0.200000,
 0.000000, -3.000000, 0.400000,
 0.000000, -2.000000, 0.100000,
 -1.000000, -2.000000, 0.200000,
 0.000000, -3.000000, 0.400000,
 -1.000000, -2.000000, 0.200000,
 -1.000000, -3.000000, 0.200000,
 1.000000, -3.000000, 0.600000,
 1.000000, -2.000000, 0.050000,
 0.000000, -2.000000, 0.100000,
 1.000000, -3.000000, 0.600000,
 0.000000, -2.000000, 0.100000,
 0.000000, -3.000000, 0.400000,
 2.000000, -3.000000, 0.800000,
 2.000000, -2.000000, -0.200000,
 1.000000, -2.000000, 0.050000,
 2.000000, -3.000000, 0.800000,
 1.000000, -2.000000, 0.050000,
 1.000000, -3.000000, 0.600000
] 			);

// itemSize = 3 because there are 3 values (components) per vertex
mainPlane.addAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
var mainMaterial = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
var mainMesh = new THREE.Mesh( mainPlane, mainMaterial );
mainMesh.rotation.x=30;
scene.add(mainMesh);
			
			
			
			//Creates light 
			var light = new THREE.DirectionalLight(0xffffff, 1.5);
			light.position.set(0,0,50);
			
			scene.add(light);
			
			
			
			var light1 = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light1 );
			
			
			
			//Floor Geometry
			var groundTexture = new THREE.TextureLoader().load( 'https://scrumptiouscrumbs.files.wordpress.com/2012/02/seamless-green-grass-texture.jpg' );
			groundTexture.wrapS = groundTexture.wrapT = THREE.RepeatWrapping;
			groundTexture.repeat.set( 25, 25 );
			groundTexture.anisotropy = 16;
			
			var myMaterial = new THREE.MeshBasicMaterial( {map: groundTexture} );
			var myFloor = new THREE.PlaneGeometry(100,100);
			var plane = new THREE.Mesh(myFloor, myMaterial);
			plane.rotation.x = 30;
			plane.position.y = -1.5;
			scene.add(plane);
			

			var animate = function () {
				requestAnimationFrame( animate );

				/*cube.rotation.x += 0.01;
				cube.rotation.y += 0.01;*/
				
				controls.update();

				renderer.render(scene, camera);
			};

			animate();