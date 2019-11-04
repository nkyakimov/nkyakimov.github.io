function menu(x){
	x.classList.toggle("change");
    var x = document.getElementById("menu_table");
    if (x.style.display === "none") 
	{
        x.style.display = "block";
    } 
	else
	{
        x.style.display = "none";
    }
}

function main(){
				 document.getElementById('black').style.height="0%";
				 document.getElementById('white').style.height="0%";
				 document.getElementById('black').style.opacity="0.2";
				 document.getElementById('white').style.opacity="0.2";
				 document.getElementById('text').style.opacity="0";
				 document.getElementById('text').style.left="1000px";
}

function MG()
{
	document.getElementById("MG").style.color="blue";
	document.getElementById("MG").style.cursor="pointer";
	document.getElementById("MG_info").style.display="block";
	
}

function MG_out()
{
	document.getElementById("MG").style.color="black";
	document.getElementById("MG_info").style.display="none";
}

function McD()
{
	document.getElementById("McD").style.color="blue";
	document.getElementById("McD").style.cursor="pointer";
	document.getElementById("McD_info").style.display="block";
	
}

function McD_out()
{
	document.getElementById("McD").style.color="black";
	document.getElementById("McD_info").style.display="none";
}

function FMI(){
	document.getElementById("FMI").style.color="blue";
	document.getElementById("FMI").style.cursor="pointer";
	document.getElementById("FMI_info").style.display="block";
	
}

function FMI_out(){
	document.getElementById("FMI").style.color="black";
	document.getElementById("FMI_info").style.display="none";
}

function VN(){
	document.getElementById("VN").style.color="blue";
	document.getElementById("VN").style.cursor="pointer";
	document.getElementById("VN_info").style.display="block";
	
}

function VN_out(){
	document.getElementById("VN").style.color="black";
	document.getElementById("VN_info").style.display="none";
}

function Phone(){
	document.getElementById("Phone").style.color="blue";
	document.getElementById("Phone").style.cursor="pointer";
	document.getElementById("Phone_info").style.display="block";
	
}

function Phone_out(){
	document.getElementById("Phone").style.color="black";
	document.getElementById("Phone_info").style.display="none";
}