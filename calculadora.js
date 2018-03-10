var num, acc=0, op="";

$(function (){
	num = $("#num");

	num.on("click", function(){
		num.val("");
	});

   	var fecha = new Date();
  	var msj;
  
  if      (fecha.getHours() < 7)  { msj = "Buenas noches Calculadora de Jesús Salas"}
  else if (fecha.getHours() < 12) { msj = "Buenos días Calculadora de Jesús Salas";}
  else if (fecha.getHours() < 21) { msj = "Buenas tardes Calculadora de Jesús Salas";}
  else                                          { msj = "Buenas noches Calculadora de Jesús Salas";}

  $("#mensaje").html(msj);


  //Botones

$("#vaciar").on("click", function(){
	num.val("");
	num.focus();
});


//1 operando

$("#cuadrado").on("click", function(){
	num.val(num.val()*num.val());
});

$("#inverso").on("click", function(){
	num.val(Math.pow(num.val(),-1));
});

$("#raiz").on("click", function(){
	num.val(Math.sqrt(num.val()).toFixed(6));
});

$("#entero").on("click", function(){
	if (num.val() > 0){num.val(Math.floor(num.val()));}
	else{num.val(-Math.ceil(num.val()));}	
});

$("#potencia2").on("click",function(){
	num.val(Math.pow(2, num.val()));	
	});

$("#factorial").on("click",function(){
	var r=1;
	for(var i=1; i<=num.val(); i++) {
 	r *= i;
	}
	num.val(r);	
	});


//2 operando
$("#suma").on("click", function (){
acc= num.val();
op="+";
num.focus();
num.val("");
});

$("#resta").on("click", function (){
acc= num.val();
op="-";
num.focus();
num.val("");
});

$("#multiplica").on("click", function (){
acc= num.val();
op="*";
num.focus();
num.val("");
});

$("#divide").on("click", function (){
acc= num.val();
op="/";
num.focus();
num.val("");
});

$("#potencia").on("click", function (){
acc= num.val();
op="x^y";
num.focus();
num.val("");
});

$("#igual").on("click", function(){
	if (op === "+") {num.val(+acc + +num.val());}
    
	if (op === "-") {num.val(+acc - +num.val());}

	if (op === "*") {num.val(+acc * +num.val());}

	if (op === "/") {num.val(+acc / +num.val());}

	if (op === "x^y") {num.val(Math.pow(acc, num.val()));}
	
});


//n operandos

$("#sumatoria").on("click",function(){
	n=num.val();
	var lista=n.split(",");
	var i=0, acc=0;
	while(i < lista.length){
	acc += (+lista[i]);
	i++;
	}
	num.val(acc);	
	});

	$("#producto").on("click",function(){
	n=num.val();
	var lista=n.split(",");
	var i=0, acc=1;
	while(i < lista.length){
	acc *= (+lista[i]);
	i++;
	}
	num.val(acc);	
	});

});



	

