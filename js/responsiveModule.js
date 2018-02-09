var viewModel = (function() {
		var nice = document.querySelector('#lo');
		var image = document.querySelector('header img');
		var textcontent = document.querySelectorAll('.content');
		var footer = document.querySelector('footer');
		var nav = document.querySelector("#nav");
		window.onresize = function(event) {
		 		frontimage();
		 		title();
		 		textindent();
		 		footertext();
		 		renderTitleCorrectlyOnMobile();
        };
		function title() {
        	var width = document.body.clientWidth,
        	mid = width / 2,
			mid1 = mid - 275;
		 	nice.polyStyle({left:mid1.px()});
        };
    	function frontimage() {
    		var width = document.body.clientWidth,
    		height = document.body.clientHeight;
			image.polyStyle({
				width:width,
				height:(250).px(),
				text:"wait a second",
				background:"auqua",
			});
			var f = setTimeout(function() {
				image.src = ('https://unsplash.it/'+(width)+'/'+(250)+'/?random');
			},300);
    	};
		function loopthroughPanels(customPadding,customfontsize) {
			textcontent.forEach(function() {
				this.polyStyle({
				    padding:customPadding,
					fontSize:customfontsize,
				});
			})
		};
		function textindent() {
    	    var width = document.body.clientWidth;
    	    if(width > 1000) {
    		    loopthroughPanels((4).em(),(30).px());
    	    }
    	    if(width < 759){
    	        loopthroughPanels((1).em(),(1.1).em());
    	    }
        };
		function textButtonIndent() {
			const width = document.body.clientWidth;
			console.log(nav);
			if(width > 1000) {
				nav.polyStyle({
					fontSize:(1).em(),
				});
			}
		};
		function renderTitleCorrectlyOnMobile() {
				var width = document.body.clientWidth;
				if(width>800){
					nice.polyStyle({fontSize:(5).em()});
				}
			    if(width< 800) {
			        nice.polyStyle({fontSize:(3.5).em()});
			    } 
			    if(width<700) {
			         nice.polyStyle({fontSize:(4.5).em()});
			    }  
			    if(width<450) {
			         nice.polyStyle({fontSize:(4).em()});
			    }

		};
		function footertext() {
    		var width = document.body.clientWidth;
			if(width < 400) {
    		    footer.polyStyle({fontSize:(8).px()}); 
    	    } else {
    		    footer.polyStyle({fontSize:(12).px()});
    	    }
        };
        document.querySelectorAll("span").forEachElementListener("mouseover",function(){
        	var iconName = this.className.split("-")[1];
        	this.title = iconName;
        });
		title();
    	frontimage();
    	textindent();
    	footertext();
		textButtonIndent();
		renderTitleCorrectlyOnMobile();
})();
