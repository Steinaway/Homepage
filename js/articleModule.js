var articleHandler = (function(){

	var articlesTemplate = document.querySelector(".Article");
	var appendListArticle = document.querySelector("#append");
	var articleArray = [];
	var yellow = 0;

	$.ajax({
		type:'GET',
		url:'metaData//articleDemo.xml',
		dataType:'xml',
	
		success: function(data) {
			console.log(data);

			$(data).find("articles").find("article").each(function(i){
				var all =  {
					Author:$(this).find("author").text(),
					Text:$(this).find("text").text(),
					Date:$(this).find("date").text(),
					Link:$(this).find("url").text(),
				}
				generateArticle(all.Author,all.Text,all.Date,all.Link);

			});
		},
		error: function() {
			alert('error loading orders');
		}
	});	


	 var templateEngine = {
    	render: (template , dataObject) => {
        let fragString = template.innerHTML,
         target = fragString.replace("Author",""+dataObject.author);
         let target2 = target.replace("Text",dataObject.text);
         let target3 = target2.replace("Date",dataObject.date);
         let target4 = target3.replaceAll("url",dataObject.link);
         let elem = document.createElement("div");
         elem.innerHTML = (target4);
         elem.className = template.className;
         elem.dataId = yellow;
         yellow++;
         return elem;
    	},
  	};



    function generateArticle(authorToAppend,TextToAppend,date,link) {
	    appendListArticle.appendChild(
	      templateEngine.
	      render(articlesTemplate,
	        {author:authorToAppend,text:TextToAppend,date:date,link:link}
	      )
	    );
   	};

   	setTimeout(function(){
		document.querySelectorAll(".Article").forEachElementListener("click",function() {
			document.querySelectorAll(".content").forEach(function(){
				this.className = "content visually-hidden";
			});
			document.getElementById("grapefruit").className ="content active";
			document.getElementById("grapefruit").innerHTML = (this.innerHTML);
		});
	},3000);
	


})();