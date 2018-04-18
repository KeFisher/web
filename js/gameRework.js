			//Init scene. Add scene later!
			var scene = new THREE.Scene();
			
			//Init background color
			scene.background = new THREE.Color( 0xcce0ff );
		
		
			//Init renderer in HTML body
			var renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight);
			document.body.appendChild( renderer.domElement );

			
			//Init camera 															--Renders objects from .1 to 3000 units away
			var camera = new THREE.PerspectiveCamera( 50, window.innerWidth/window.innerHeight, 0.1, 300 );
			
			//Move camera back 8 units
			camera.position.set(0,0,14);
			
			
			//Init Controls
			var controls = new THREE.OrbitControls( camera );
			controls.update();
			
			
			//Init Light
			var ambient = new THREE.AmbientLight( 0xffffff, 0.5 );
			scene.add( ambient );
			
			//Another Light
			var directional = new THREE.DirectionalLight( 0xffffff, .5 );
			directional.position.set(10,15,15);
			scene.add( directional );
			//~~~~~~~~~~~~~~~~~~Important Geometry below this!~~~~~~~~~~~~~~~~//
			
			//Init Material and geometry
			/*var material = new THREE.MeshLambertMaterial( { color : 0x00cc00 } );
			var geometry = new THREE.CubeGeometry(5,5,5);
			
			//Combine Mesh and Geometry
			var mesh = new THREE.Mesh(geometry, material);
			mesh.position.set(0,0,0);
			mesh.rotation.x = 45;

			scene.add( mesh );*/
			//---------------------------------------------
			var geometry1 = new THREE.BufferGeometry();
			
			var points = new Float32Array([
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
 -1.000000, -3.000000, 0.200000
			]);
			
			geometry1.addAttribute( 'position', new THREE.BufferAttribute( points, 3 ) );
			
			var normals = [];
			var pA = new THREE.Vector3();
			var pB = new THREE.Vector3();
			var pC = new THREE.Vector3();
			
			var cb = new THREE.Vector3();
			var ab = new THREE.Vector3();
			
			//p[0] = x1		Start Vertex 1 / Start Triangle 1
			//p[1] = y1
			//p[2] = z1		End Vertex 1
			//p[3] = x2		Start Vertex 2
			//p[4] = y2
			//p[5] = z2		End Vertex 2
			//p[6] = x3		Start Vertex 3
			//p[7] = y3
			//p[8] = z3		End Vertex 3 / Finish Triangle 1
			//p[9] = x4		Start Vertex 4 / Start Triangle 2
			//p[10] = y4 
			//p[11] = z4	End Vertex 4 / Finish Triangle 2
			//p[12] = x5	Start Vertex 5 / Start Triangle 3
			//p[13] = y5
			//p[14] = z5	End Vertex 5 / Finish Triangle 3
			//p[15] = x6	Start Vertex 6 / Start Triangle 4
			var numTriangles = (points.length)-9;
			
			for (var i = 0; i <= numTriangles; i++){
				pA.set(points[i],points[i+1],points[i+2]);
				pB.set(points[i+3],points[i+4],points[i+5]);
				pC.set(points[i+6],points[i+7],points[i+8]);
				
				cb.subVectors(pC, pB);
				ab.subVectors(pA, pB);
				cb.cross(ab);
				
				cb.normalize();
				
				var nx = cb.x;
				var ny = cb.y;
				var nz = cb.z;
				
				normals[i] = nx;
				normals[i+1] = ny;
				normals[i+2] = nz;
				normals[i+3] = nx;
				normals[i+4] = ny;
				normals[i+5] = nz;
				normals[i+6] = nx;
				normals[i+7] = ny;
				normals[i+8] = nz;
			}
			
			//geometry1.addAttribute( 'normal', new THREE.BufferAttribute( normals, 3 ) );
			geometry1.addAttribute( 'normal', new THREE.Float32BufferAttribute( normals, 3 ));
			
			//-----
			var material1 = new THREE.MeshLambertMaterial( { color : 0x00cc00 } );
			var mesh1 = new THREE.Mesh(geometry1, material1);
			mesh1.position.set(0,0,1);
			//mesh1.rotation.x = 45;

			scene.add( mesh1 );
			
			
			
			//~~~~~~~~~~~~Important Geometry Ends HERE!~~~~~~~~~~~~~~~~~~//
			renderer.render(scene, camera);
			
			var animate = function () {
				requestAnimationFrame( animate );
				controls.update();
				renderer.render(scene, camera);
			};

			animate();