var  navModel = (function() {
	var navButtons = document.querySelectorAll('button.nav');
	console.log(navButtons);
	var timer = document.querySelector('#timer');
	var h = navButtons[0].style.height;
	var vis = ' visually-hidden';
	var act = ' active';
	var spa = ' ';
	var co = '.content.active';
	var navb = 'activeNav';

	navButtons.forEach(function() {
		this.addEventListener("click",navigation);
	});
	function navigation() {
			var allactive = document.querySelectorAll('.activeNav'),
			 nove = allactive[0].className.split(spa);
			allactive[0].className = nove[0] + spa + nove[1];
			this.className = this.className + spa + navb;
			var active = document.querySelector(co),
			 more = active.className.split(spa);
			active.className = more[0] + vis;
			var classnames = this.className.split(spa),
			target = document.getElementById(classnames[0]),
			c = target.className.split(spa);
			target.className = c[0] + act;
	}

	return {
		articlesButton:function() {
			navButtons[0].click();
		},
	}
})();
