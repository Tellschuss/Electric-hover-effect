var mobileAndTabletcheck = function() {
	var check = false;
	(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
	return check;
};

var canvas = document.createElement( 'canvas' );
var ctx = canvas.getContext( '2d' );

var w = 320;
var h = 320;

var width = window.innerWidth;
var height = window.innerHeight;

var planeSize = 600;

var radius = 300;

if(mobileAndTabletcheck()){
	planeSize = 400;
	w = 200;
	h = 200;
	radius = 150;
}

canvas.setAttribute('width', w);
canvas.setAttribute('height', h);

// canvas.style.position = 'absolute';
// canvas.style.width = '320px';
// canvas.style.height = '320px';
// canvas.style.top = '0';
// canvas.style.left = '0';
// canvas.style.zIndex = '100';
// document.body.appendChild(canvas);

window.addEventListener('resize', onWindowResize);

var maskImage = new Image();
// maskImage.src = "https://robindelaporte.fr/codepen/codevember/circle_disp.png";
//because of tainted canvas
maskImage.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTM4NzkwRjM0QTk3MTFFNzlCMkFFRTA2QTZFNkM4MTgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTM4NzkwRjQ0QTk3MTFFNzlCMkFFRTA2QTZFNkM4MTgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1Mzg3OTBGMTRBOTcxMUU3OUIyQUVFMDZBNkU2QzgxOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1Mzg3OTBGMjRBOTcxMUU3OUIyQUVFMDZBNkU2QzgxOCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pmzm5t8AABYsSURBVHja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";
// maskImage.crossOrigin = "Anonymous";

var mousePos = [0, 0];

var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

if(mobileAndTabletcheck()){
	window.addEventListener('touchmove', function(e){
		mouse.x = ( e.touches[0].clientX / window.innerWidth ) * 2 - 1;
		mouse.y = - ( e.touches[0].clientY / window.innerHeight ) * 2 + 1;
	});
	} else {
	window.addEventListener('mousemove', function(e){
		mouse.x = ( e.clientX / window.innerWidth ) * 2 - 1;
		mouse.y = - ( e.clientY / window.innerHeight ) * 2 + 1;
	});
}

function renderRay() {
	raycaster.setFromCamera( mouse, camera );
	var intersects = raycaster.intersectObjects( scene.children );
	for ( var i = 0; i < intersects.length; i++ ) {
		mousePos[0] = (((intersects[i].point.x / planeSize)+ 0.5) * w) - (radius*0.5);
		mousePos[1] = ((((intersects[i].point.y * -1) / planeSize)+ 0.5) * h) - (radius*0.5);
	}
}


function draw(){
	ctx.clearRect(0, 0, w, h);
	ctx.drawImage(maskImage, mousePos[0], mousePos[1], radius, radius);
	renderRay();
}

var frustumSize = 600;
var aspect = window.innerWidth / window.innerHeight;


var clock = new THREE.Clock(true);

var scene = new THREE.Scene();
camera = new THREE.OrthographicCamera( frustumSize * aspect / - 2, frustumSize * aspect / 2, frustumSize / 2, frustumSize / - 2, 1, 2000 );

camera.lookAt(scene.position);
camera.position.z = 1;


var renderer = new THREE.WebGLRenderer({
	antialias: true,
	alpha: true
});
renderer.setPixelRatio = 1;
renderer.setClearColor(0x3A405A, 1.0);
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

function onWindowResize(){

var aspect = window.innerWidth / window.innerHeight;

camera.left   = - frustumSize * aspect / 2;
camera.right  =   frustumSize * aspect / 2;
camera.top    =   frustumSize / 2;
camera.bottom = - frustumSize / 2;

camera.updateProjectionMatrix();

renderer.setSize( window.innerWidth, window.innerHeight );
}

var gui = new dat.GUI();
var params = {
	dispFactor: 0.238,
	speed: 24.0,
};

gui.add(params, 'dispFactor', 0, 1).step(0.001).onChange(function( value ) {
	object.material.uniforms._dispFactor.value = value;
	object.material.uniforms._dispFactor.needsUpdate = true;
});
gui.add(params, 'speed', 1, 50).step(1).onChange(function( value ) {
	object.material.uniforms._speed.value = value;
	object.material.uniforms._speed.needsUpdate = true;
});

// var controls = new THREE.OrbitControls( camera, renderer.domElement );

var loader = new THREE.TextureLoader();
loader.crossOrigin = '';
var circle = loader.load('https://robindelaporte.fr/codepen/codevember/circle.png');
var circle_blur = loader.load('https://robindelaporte.fr/codepen/codevember/circle_blur.png');
var color = loader.load('https://robindelaporte.fr/codepen/codevember/map_light_disp_color.png');
var dist = loader.load('https://robindelaporte.fr/codepen/codevember/dist_c.jpg');

dist.wrapS = dist.wrapT = THREE.RepeatWrapping;
color.wrapS = color.wrapT = THREE.RepeatWrapping;

var mask = new THREE.Texture(canvas);
mask.minFilter = THREE.LinearFilter;

var mat = new THREE.ShaderMaterial({
	uniforms: {
		_time: { type: "f", value: 1.0 },
		_mask: { type: 't', value: mask },
		_color: { type: 't', value: color },
		_circle: { type: 't', value: circle },
		_circle_blur: { type: 't', value: circle_blur },
		_dist: { type: 't', value: dist },

		_dispFactor: { type: "f", value: params.dispFactor },
		_speed: { type: "f", value: params.speed }
	},

	vertexShader: document.getElementById( 'vertexShader' ).textContent,
	fragmentShader: document.getElementById( 'fragmentShader' ).textContent,
	transparent: true,
	opacity: 1.0,
	blending: THREE.AdditiveBlending
});

var geometry = new THREE.PlaneBufferGeometry( planeSize, planeSize, 1 );
var object = new THREE.Mesh(geometry, mat);
scene.add(object);

window.addEventListener('click', function(){
});


var animate = function () {
	requestAnimationFrame( animate );
	renderer.render(scene, camera);

	var d = clock.getDelta();
	mat.uniforms._time.value += d;

	mask.needsUpdate = true;

	draw();
};
animate();
