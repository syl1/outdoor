// JavaScript Document

window.onload = init;

function init() 
{
	setBackgroundImg();
}

function navigate(URL)
{
	window.location.href = URL;	
}

function nv(Path,Num) 
{
	alert(Path + " : " + Num)	
}


function setBackgroundImg()
{
	angular.element('.Content').css('height', (window.innerHeight*0.89)+'px');
}

function setPageHeight()
{
	angular.element('.Content1').css('height',(window.innerHeight*0.89)+'px');
}

function Facebook_Iframe()
{
	var Url = DB[CurrentPub][6]	
	window.location.href = Url;
}

function Youtube_Iframe()
{
	var Url = YouTube;	
	window.location.href = Url;
}


function increaseLike()
{
	if(isClickedLike == 0)
	{
		currentLike++;
		angular.element('#likeId').text(currentLike);
	}
	
	isClickedLike = 1;
}


function scrollDivToTop()
{
	alert(angular.element('.Content1').scrollTop())
	angular.element('#pubList').css("top",0);
}