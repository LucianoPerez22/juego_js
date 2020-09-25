	
	var GblContar=0;
	var GblControl=[];
	var GblControlFondo=[];

	var GblTablero=[];

	var intervalo = null;
	var cont=1;


	function iniciar(){
		document.getElementById('formulario').classList.add("ocultar");
		tablero();
		texto_aleatorio();
		intervalo=window.setInterval('contador()',1000);
	}


	function contador(){
		var contador = document.getElementById("contador");

		contador.value = cont;
		
		if (contador.value==3) {
			window.clearInterval(intervalo);
			document.getElementById('contador').classList.add("ocultar");
			ocultar();	
		}
		cont++;
	}

	function tablero(){
		document.getElementById('tablero').innerHTML='<tr>'+
				'<td id="1" onclick="pintar(this)"> </td>'+
				'<td id="2" onclick="pintar(this)"> </td>'+
				'<td id="3" onclick="pintar(this)"> </td>'+
				'<td id="4" onclick="pintar(this)"> </td>'+
			'</tr>'+

			'<tr>'+
				'<td id="5" onclick="pintar(this)"> </td>'+
				'<td id="6" onclick="pintar(this)"> </td>'+
				'<td id="7" onclick="pintar(this)"> </td>'+
				'<td id="8" onclick="pintar(this)"> </td>'+
			'</tr>'+

			'<tr>'+
				'<td id="9" onclick="pintar(this)"> </td>'+
				'<td id="10" onclick="pintar(this)"> </td>'+
				'<td id="11" onclick="pintar(this)"> </td>'+
				'<td id="12" onclick="pintar(this)"> </td>'+
			'</tr>'+

			'<tr>'+
				'<td id="13" onclick="pintar(this)"> </td>'+
				'<td id="14" onclick="pintar(this)"> </td>'+
				'<td id="15" onclick="pintar(this)"> </td>'+
				'<td id="16" onclick="pintar(this)"> </td>'+
			'</tr>';
	}


	
	function texto_aleatorio(){
	    var textos = ["./img/img1.png", "./img/img2.png","./img/img3.png","./img/img4.png","./img/img5.png",
	   				 "./img/img6.png","./img/img7.png","./img/img8.png"];

	    textos.sort(() => Math.random() - 0.5);	   	   
	   	
		document.getElementById('1').innerHTML='<img src=' + textos[0] + '>';
		GblTablero[1]=textos[0];

		document.getElementById('2').innerHTML='<img src=' + textos[3] + '>';
		GblTablero[2]=textos[3];

		document.getElementById('3').innerHTML='<img src=' + textos[1] + '>';
		GblTablero[3]=textos[1];

		document.getElementById('4').innerHTML='<img src=' + textos[2] + '>';
		GblTablero[4]=textos[2];

		document.getElementById('5').innerHTML='<img src=' + textos[7] + '>';
		GblTablero[5]=textos[7];

		document.getElementById('6').innerHTML='<img src=' + textos[5] + '>';
		GblTablero[6]=textos[5];

		document.getElementById('7').innerHTML='<img src=' + textos[6] + '>';
		GblTablero[7]=textos[6];

		document.getElementById('8').innerHTML='<img src=' + textos[4] + '>';
		GblTablero[8]=textos[4];


		document.getElementById('9').innerHTML='<img src=' + textos[6] + '>';
		GblTablero[9]=textos[6];

		document.getElementById('10').innerHTML='<img src=' + textos[4] + '>';
		GblTablero[10]=textos[4];

		document.getElementById('11').innerHTML='<img src=' + textos[7] + '>';
		GblTablero[11]=textos[7];

		document.getElementById('12').innerHTML='<img src=' + textos[5] + '>';
		GblTablero[12]=textos[5];

		document.getElementById('13').innerHTML='<img src=' + textos[2] + '>';
		GblTablero[13]=textos[2];

		document.getElementById('14').innerHTML='<img src=' + textos[1] + '>';
		GblTablero[14]=textos[1];

		document.getElementById('15').innerHTML='<img src=' + textos[3] + '>';
		GblTablero[15]=textos[3];

		document.getElementById('16').innerHTML='<img src=' + textos[0] + '>';
		GblTablero[16]=textos[0];
}

function ocultar(){
	for (var i = 1; i <= 16; i++) {
		document.getElementById(i).innerHTML='<img src=./img/blanco.png>';
	}
}
	
	function pintar(b){
		var numero1;
		var numero2;


		if (document.getElementById(b.id).getAttribute('class')=='fondo') {
			return;
		}

		document.getElementById(b.id).innerHTML='<img src=' + GblTablero[b.id] + '>';


		if (GblControl.length===0){
			GblControl.push(document.getElementById(b.id).innerHTML);
			GblControlFondo.push(b.id);

			console.log(GblControl);
			document.getElementById(b.id).classList.add("fondo");


			}else{
				numero1=GblControl[0];

				numero2=document.getElementById(b.id).innerHTML;
				document.getElementById(b.id).innerHTML='<img src=' + GblTablero[b.id] + '>';

				

				if (numero1==numero2) {
					document.getElementById(b.id).classList.add("fondo");
					GblControl=[];
					GblControlFondo.push(b.id);

					if (GblControlFondo.length===16) {
						document.getElementById('principal').classList.add("opacar");
						document.getElementById('ganaste').classList.remove("ocultar");

						document.getElementById('contador').value="";

						setTimeout("location.reload()", 5000);
						return;
					}

					}else{
						let borrar=GblControlFondo[GblControlFondo.length-1];
					
						document.getElementById(borrar).classList.remove("fondo");
						document.getElementById(borrar).innerHTML='<img src=./img/blanco.png>';
						document.getElementById(b.id).innerHTML='<img src=./img/blanco.png>';
						GblControl.pop();
						GblControlFondo.pop();
					}
			}	
	}

	
function validarFormulario() {
	var nombre = document.getElementById("nombre");
	var edad = document.getElementById("edad");
	var email = document.getElementById("email");
	var patron_email=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
	var error=0;
	

	if (nombre.value.length<4){
   		nombre.setCustomValidity('Ingrese su Nombre');
   		error=1;
   		return;
  	}else{
  		nombre.setCustomValidity('');
  		error=0;
  	}


  	if (edad.value.length==''){
   		edad.setCustomValidity('Ingrese su Edad');
   		error=1;
   		return;
  	}else{
  		edad.setCustomValidity('');
  		error=0;
  	}

  	if (!patron_email.test(email.value)){   		  		
   		email.setCustomValidity('Ingrese un email correcto');
   		error=1;
   		return;
  	}else{
  		email.setCustomValidity('');
  		error=0;
  	}

  	if (error===0) {
  		
  		iniciar();
  	}else{
  		alert("Complete todos los datos!!!");
  	}

}
