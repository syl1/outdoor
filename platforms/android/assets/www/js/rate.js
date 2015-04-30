function Rate(nm)
{
	LineRate = nm;
	
	for(var i=1;i<(nm+1);i++)
	{
		$(".star"+i).attr("src","img/pubs/fstar.png");
		$("#pstar"+i).attr("src","img/pubs/fstar.png");
		angular.element('#LineStar'+i).attr("src","img/pubs/fstar.png");
		$("#PubStar"+i).attr("src","img/pubs/fstar.png");
		$("#te1"+i).attr("src","img/pubs/fstar.png");
	}
	
	for(i = (nm+1);i<6;i++)
	{
		$(".star"+i).attr("src","img/pubs/star.png");
		$("#pstar"+i).attr("src","img/pubs/star.png");
		angular.element('#LineStar'+i).attr("src","img/pubs/star.png");
		$("#PubStar"+i).attr("src","img/pubs/star.png");
		$("#te1"+i).attr("src","img/pubs/star.png");
	}
}

