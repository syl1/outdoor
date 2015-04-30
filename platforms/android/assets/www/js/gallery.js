
setGalImages();

function  setGalImages()
{
	var GalChild = $('#GalTable').children().size();
	
	
	for(var i=0;i<GalChild;i++)
	{
		$('#GalTable').children().eq(i).css("width","1110px");
		$('#GalTable').children().eq(i).css("position","relative");
	}
}
	
	
function thumbClick(nm)
{
	console.log("Gal : " +nm )
	currentGal_Image = nm;
	$("#big_Image_Line").attr("src","img/pubs/natbag/big/"+currentGal_Image+".jpg");
	ShowPage("#Gal");	
}


function Gal_Btn(nm)
{
	$("#big_Image_Line").attr("src","img/pubs/natbag/big/"+nm+".jpg");
	
	/*
	if(nm == 1)
	{
		if(currentGal_Image < 6)
		{
			currentGal_Image++;
			$("#big_Image_Line").attr("src","img/pubs/natbag/big/"+currentGal_Image+".jpg");
		}
	}
	
	if(nm == 2)
	{
		currentGal_Image = 1;
		goPub()
	}
	
	if(nm == 3)
	{
		if(currentGal_Image > 1)
		{
			currentGal_Image--;
			$("#big_Image_Line").attr("src","img/pubs/natbag/big/"+currentGal_Image+".jpg");
		}
	}*/
	
	
}

