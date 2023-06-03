

function RoomsInfo(Name, Precio, Icono)
{
	document.getElementById("BoxRooms").innerHTML += `<div class="Rooms"> <img class="Imagen" src="${Icono}"> <p>${Name}</p> <p>${Precio}</p> <button class="BotonInfo" onclick = AllInformation("${Icono}","${Name}","${Precio}") >Ver Detalles</button> </div>`;
}

function AllInformation(Iconoo, Namee, Precioo)
{
	document.getElementById("BoxRooms").style.backgroundImage = "url()";
	document.getElementById("BoxRooms").style.backgroundColor = "white";
	document.getElementById("BoxRooms").innerHTML = 
	`<div class="BoxDetalles">
	    <img class="PortImage" src="${Iconoo}">
	    <h2>${Namee}</h2>
	    <p>${Precioo}</p>
	    <h4 class="TextoComun">TE INTERESO?, CONTACTATE CON LOS ADMINISTRADORES.</h4>
     </div>
	`
}

// cuartos registrados

RoomsInfo("Cuarto01", "$100000", "https://decoholic.org/wp-content/uploads/2012/02/dream_interior_design_ideas_for_teenage_girl_s_rooms1.jpg")
RoomsInfo("Cuarto02", "$5000000", "https://decoholic.org/wp-content/uploads/2012/02/dream_interior_design_ideas_for_teenage_girl_s_rooms-1.jpg")
RoomsInfo("Cuarto03", "$10000000", "https://i.pinimg.com/originals/21/e2/d7/21e2d7165b26e3de3f19ca0dcff4b74b.jpg")
RoomsInfo("Cuarto04", "$800000000", "https://p.rdcpix.com/v03/lbcce8243-m11xd-w1020_h770_q80.jpg")
RoomsInfo("Cuarto05", "$40000000", "https://4.bp.blogspot.com/-w-5C6VQjNzU/XExoRYVPX1I/AAAAAAAACww/b0MbfXHbhw4LCSHl8ebGRvxwa_Sz4bvbQCLcBGAs/s640/luxurious-bedroom-design-habitacion-lujosa-17.jpg")
RoomsInfo("Cuarto06", "$9000000000", "https://ap.rdcpix.com/2f7e2cfe450b6bcd73b4eb5b0579dd2cl-m600730909xd-w1020_h770_q80.jpg")
RoomsInfo("Cuarto07", "$250000000", "https://i.pinimg.com/originals/5a/ee/98/5aee98741af4f7da0aa5fc7d03be5da3.jpg")


// funciones adicionales para otras paginas

