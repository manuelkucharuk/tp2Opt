const byId = (idStr)=> document.getElementById(idStr)
const click = (elem,func)=> elem.addEventListener("click",func)
const redondear = (num,prec=10)=> Math.round((num + Number.EPSILON) * 10 ** prec) / 10 ** prec

class Calculadora{
	constructor() {
		this.initElementos()
		this.initEventos()
	}

	initElementos(){
		this.op1 = 			byId("op1Input")
		this.op2 = 			byId("op2Input")
		this.res = 			byId("resInput")
		this.botonSuma = 	byId("sumaButton")
		this.botonResta = 	byId("restaButton")
		this.botonMult = 	byId("multiplicacionButton")
		this.botonDivi = 	byId("divisionButton")
		this.botonBorrar =	byId("borrarButton")
	}

	initEventos(){
		click(this.botonSuma,  ()=>this.operar("suma"))
		click(this.botonResta, ()=>this.operar("resta"))
		click(this.botonMult,  ()=>this.operar("mult"))
		click(this.botonDivi,  ()=>this.operar("divi"))
		click(this.botonBorrar,()=>this.borrarTodo())
	}

	operar(tipoOp){
		let op1 = parseFloat(this.op1.value)
		let op2 = parseFloat(this.op2.value)
		let res

		if(isNaN(op1) || isNaN(op2)){
			this.res.value = "Err"
			return
		}

		if(tipoOp === "suma") 			res = op1+op2
		else if (tipoOp === "resta") 	res = op1-op2
		else if (tipoOp === "mult") 	res = op1*op2
		else if (tipoOp === "divi") 	res = op1/op2

		this.res.value = redondear(res,12)

	}

	borrarTodo(){
		this.op1.value = ""
		this.op2.value = ""
		this.res.value = ""
	}
}

const c = new Calculadora()