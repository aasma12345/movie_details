let button=document.getElementById("search");
button.addEventListener("click",function(){
	search=document.querySelector("input").value;
	movie=new XMLHttpRequest();
	movie.open("GET",`http://www.omdbapi.com/?t=${search}&apikey=8bf35543`,true);
	movie.onload=function(){
		if (movie.status===200){
			response=JSON.parse(movie.responseText);
			document.getElementById("movie").innerHTML="Title :--" +response.Title;
			document.getElementById("language").innerHTML="language :--" +response.language;
			document.getElementById("Director").innerHTML="Director :--" +response.Director;
			document.getElementById("Releasedyear").innerHTML="released :--" +response.released;
			document.getElementById("Actors").innerHTML="Actors :--" +response.Actors;
			document.getElementById("Country").innerHTML="Country :--" +response.Country;
			
		console.log(response);
		};
	};
	movie.send();
});
			
