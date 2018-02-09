var Polygon = (function polygonFactory() {
  /*  Nicholas Adam Vienna
      Thu Jun 25 2015 23:09:19 GMT+0200 (CEST)
  */
  "use Strict";
  polygonFactory.exports = {};

  polygonFactory.exports.toggle = function(callbackObject,ratio){
    if(ratio % 2 == 0) {
      callback1.call();
    } else {
      callback2.call();
    }
  };

  String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
  };

  Element.prototype.polyStyle = function(styleObject) {
		var m = this;
      for(var prop in styleObject) {
  			var b = styleObject[prop].toString();
  			eval("m.style."+prop+"="+'b'+";");
   		}
  };

  Array.prototype.hasNext = function(i) {
    if(typeof this[i+1] == 'undefined') {
      return false;
    } else  {
      return true;
    }
  };

  NodeList.prototype.forEach = function(callback) {
    for(var i = 0; i < this.length; i++) {
      callback.call(this[i],i);
    }
  };

  NodeList.prototype.forEachElementListener = function(event,callback) {
    this.forEach(function() {
      this.addEventListener(event, callback);
    });
  };

  Element.prototype.setColor = function(color) {
		this.style.background = color;
	};
	Number.prototype.percent = function() {
		return (this + "%");
	};

	Number.prototype.vh = function() {
		return (this + "vh");
	};

  Number.prototype.vw = function() {
    return (this + "vw");
  };

	Number.prototype.px = function() {
		return (this + "px");
	};

	Number.prototype.em = function() {
		return (this + "em");
	};

	polygonFactory.exports.random = function() {
		return Math.floor(Math.random() * (255));
	};
	polygonFactory.exports.grid = function(x,y) {
		var table = document.createElement("table");
		table.id = "grid";
		var rows = {};
		var columns = {};
		for(i=0;i<y;i++){
			rows[i] = document.createElement("tr");
			table.appendChild(rows[i]);
			for(z=0;z<x;z++){
				columns[z] = document.createElement("td");
        columns[z].style.background = "#abc";
				rows[i].appendChild(columns[z]);
			}
	  }
    table.style.width =  (100).vw();
		table.style.height = (50).vh();
		return table;
	};
	Array.prototype.positionGrid = function() {
	    var table = document.getElementById("grid");
		var child = table.childNodes;
		var searchedrow = child[this[0]];
		var searchedcol = searchedrow.childNodes;
		var target = searchedcol[this[1]];
		return target;
	};

  polygonFactory.exports.chance = function(chanceCoefficient,callbackFunction) {
    var destiny = false;
    var random = Math.floor(Math.random() * 100) + 1;
    if(random < chanceCoefficient) {
      destiny = true;
      callbackFunction.call(destiny);
    }
  };
  return polygonFactory.exports;

})();
