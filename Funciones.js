

function RoomsInfo(Name, Precio, Icono)
{
	document.getElementById("BoxRooms").innerHTML += `<div class="Rooms"> <img class="Imagen" src="${Icono}"> <p>${Name}</p> <p>${Precio}</p> <button class="BotonInfo" onclick = AllInformation("${Icono}","${Name}","${Precio}") >Ver Detalles</button> </div>`;
}

function AllInformation(Iconoo, Namee, Precioo)
{
	document.getElementById("BoxRooms").innerHTML = 
	`<div class="BoxDetalles">
	    <img class="PortImage" src="${Iconoo}">
	    <h2>${Namee}</h2>
	    <p>${Precioo}</p>
	    <h4 class="TextoComun">TE INTERESO?, CONTACTATE CON LOS ADMINISTRADORES.</h4>
     </div>
	`
}

RoomsInfo("Cuarto01", "$100000", "https://decoholic.org/wp-content/uploads/2012/02/dream_interior_design_ideas_for_teenage_girl_s_rooms1.jpg")
RoomsInfo("Cuarto02", "$5000000", "https://decoholic.org/wp-content/uploads/2012/02/dream_interior_design_ideas_for_teenage_girl_s_rooms-1.jpg")
RoomsInfo("Cuarto03", "NO DISPONIVLE")
RoomsInfo("Cuarto04", "NO DISPONIVLE")
RoomsInfo("Cuarto05", "NO DISPONIVLE")
RoomsInfo("Cuarto06", "NO DISPONIVLE")
RoomsInfo("Cuarto07", "NO DISPONIVLE")