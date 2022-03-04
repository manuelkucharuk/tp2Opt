document.getElementById("botonSuma").addEventListener("click",()=>{operar("suma")})
document.getElementById("botonResta").addEventListener("click",()=>{operar("resta")})
document.getElementById("botonMultiplicacion").addEventListener("click",()=>{operar("multiplicacion")})
document.getElementById("botonDivision").addEventListener("click",()=>{operar("division")})



function operar(tipoOp){
	var op1 = parseFloat(document.getElementById("op1Txt").value)
	var op2 = parseFloat(document.getElementById("op2Txt").value)
	var resultado
	
	if(tipoOp === "suma") resultado = op1+op2
	else if (tipoOp === "resta") resultado = op1-op2
	else if (tipoOp === "multiplicacion") resultado = op1*op2
	else if (tipoOp === "division") resultado = op1/op2
	
	document.getElementById("resTxt").value = resultado.toString()
}