document.getElementById("sumaButton").addEventListener("click",()=>{operar("suma")})
document.getElementById("restaButton").addEventListener("click",()=>{operar("resta")})
document.getElementById("multiplicacionButton").addEventListener("click",()=>{operar("multiplicacion")})
document.getElementById("divisionButton").addEventListener("click",()=>{operar("division")})
document.getElementById("borrarButton").addEventListener("click",borrarTodo)


function operar(tipoOp){
	var op1 = parseFloat(document.getElementById("op1Input").value)
	var op2 = parseFloat(document.getElementById("op2Input").value)
	var resultado
	
	if(tipoOp === "suma") resultado = op1+op2
	else if (tipoOp === "resta") resultado = op1-op2
	else if (tipoOp === "multiplicacion") resultado = op1*op2
	else if (tipoOp === "division") resultado = op1/op2
	
	document.getElementById("resInput").value = resultado.toString()
}

function borrarTodo(){
	document.getElementById("op1Input").value = ""
	document.getElementById("op2Input").value = ""
	document.getElementById("resInput").value = ""
}