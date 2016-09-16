(function insertingNecessaryCss(){
	var sheet = (function() {
	// Create the <style> tag
	var style = document.createElement("style");
	// WebKit hack :(
	style.appendChild(document.createTextNode(".rightclickmenu {	    padding: 10px;	    min-width: 100px;	    max-width: 300px;	}		.rightitem {	    border-bottom: 1px solid #888888;	    font-size: medium;	    wrap: none;	}	.rightclickmenu-mobile{	  width: 80%;	  max-width: none;	  left: 10%;	  top: 20%;	  max-height: 70%;	  overflow-y: scroll;	}	.rightitem-mobile{	  font-size: xx-large;	}		.rightitem:hover {  background-color: #99e6ff;"));
	// Add the <style> element to the page
	document.head.appendChild(style);
	return style.sheet;
	})();
})();

	var CCmenuGlobalArray = [];
	var CCmenu = function(Element, menuNcallBack){
		var newOne;
		var index =	CCmenuGlobalArray.push(newOne);
		index -= 1;
		newOne = new CCmenuCoreObject(Element,menuNcallBack, index);
		CCmenuGlobalArray[index] = newOne;
		return newOne;
	}
	var CCmenuCoreObject = function(Element, menuNcallBack, index) {
		this.rightOpen = false;
		this.body = document.getElementsByTagName('body')[0];
		this.menuNcallBack = menuNcallBack;
		this.element = Element;
		this.menu = undefined;
		this.backPlate = undefined;
		this.CCMenuBinded;
		this.mobile;
		this.id = index;
		this.bindedEvent;

		(function init(){
			(function validateArg() {
				if (this.element.constructor.toString().indexOf('HTML') == -1) {
					if(!(this.element instanceof jQuery)){
						throw 'RIGHTCLICK_MODULE: Target element(first argument) should be a DOM node';
					}
				}
				if (this.menuNcallBack.constructor.toString().indexOf('Array') == -1) {
					throw 'RIGHTCLICK_MODULE: Second argument should be an ARRAY';
				}
				this.menuNcallBack.forEach(function(item, index){
					if (item.constructor.toString().indexOf('Object') == -1) {
						throw 'RIGHTCLICK_MODULE: Each element of second argument\'s ARRAY should be an object consisting of "item" property and "callBack" method, \n ex: {item: "do something", callBack: function(){something;}}';
					} else {
						for (var key in item) {
							if (key == 'item') {
								if(item[key].constructor.toString().indexOf('String') == -1){
									throw 'RIGHTCLICK_MODULE: item property should be a string';
								}
							}
							else if (key == 'callBack') {
								if(item[key].constructor.toString().indexOf('Function') == -1){
									throw 'RIGHTCLICK_MODULE: callBack property should be a function';
								}
							}else{
								throw 'RIGHTCLICK_MODULE: '+key+' KEY of '+(index+1)+'th OBJECT in second arguments ARRAY is not valid, \n this OBJECT should contain only 2 keys: \n "item" and "callBack" \n ex: {item: "do something", callBack: function(){something;}}';
							}
						}
					}
				});

			}).bind(this)();

			(function Attribute(){
						if(this.element instanceof jQuery){
							console.log(this.element.attr('data-CCmenu'));
							if(this.element.attr('data-CCmenu') !== undefined){
							var index = parseInt(this.element.attr('data-CCmenu'),10);
							var ex = CCmenuGlobalArray[index].menuNcallBack;
							this.menuNcallBack = this.menuNcallBack.concat(ex);
							this.element.attr('data-CCmenu', this.id);
							}else{
								this.element.attr('data-CCmenu', this.id);}
						}else{
						if(this.element.hasAttribute('data-CCmenu')){
						var index = parseInt(this.element.getAttribute('data-CCmenu'),10);
							var ex = CCmenuGlobalArray[index].menuNcallBack;
							console.log(ex);
							this.menuNcallBack = this.menuNcallBack.concat(ex);
							console.log(this.menuNcallBack);
							this.element.setAttribute('data-CCmenu', this.id);
						}else{
						this.element.setAttribute('data-CCmenu', this.id);	}}
					}).bind(this)();


					this.mobile = (function(){
						var check = false;
						(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))
							check = true})(navigator.userAgent||navigator.vendor||window.opera);
						return check;
					}).bind(this)();

				this.menu = (function() {
				var menu = document.createElement("div");
				menu.style.position = "fixed";
				menu.style.backgroundColor = "whitesmoke";
				menu.style.border = "1px solid gray";
				menu.classList.add("rightclickmenu");
				if(this.mobile){menu.classList.add("rightclickmenu-mobile");}
				for (var i = 0; i < this.menuNcallBack.length; i++) {
					var ask = document.createElement("div");
					ask.innerHTML = this.menuNcallBack[i].item;
					ask.style.padding = "5%";
					ask.classList.add("rightitem");
					if(this.mobile){ask.classList.add("rightitem-mobile");}
					menu.appendChild(ask);
				}

				return menu;
			}).bind(this)();

			this.backPlate = (function() {
				var backPlate = document.createElement('div');
				backPlate.style.width = '100%';
				backPlate.style.height = '100%';
				backPlate.style.position = 'fixed';
				backPlate.style.opacity = '0.1';
				backPlate.style.backgroundColor = 'white';
				return backPlate;
			}).bind(this)();




		}).bind(this)();

		if (typeof this.customContextMenu !== 'function') {
			CCmenuCoreObject.prototype.customContextMenu = (function() {

				var openMenu = function(e) {
					if(!this.mobile){
					this.menu.style.top = e.y + "px";
					this.menu.style.left = e.x + "px";}
					this.body.appendChild(this.backPlate);
					this.body.appendChild(this.menu);
					adjust(this.menu);
					this.rightOpen = true;
				}.bind(this);

				var closeMenu = function() {
					this.body.removeChild(this.backPlate);
					this.body.removeChild(this.menu);
					this.rightOpen = false;
				}.bind(this);

				var adjust = function(el) {
					if ((el.offsetLeft + el.clientWidth) > window.innerWidth) {
						//right is off
						el.style.left = (el.offsetLeft - el.clientWidth) + "px";
					}
					if ((el.offsetTop + el.clientHeight) > window.innerHeight) {
						//bot is off
						el.style.top = (el.offsetTop - el.clientHeight) + "px";
					}
				};

				this.bindedEvent = (function(){

				if(this.element instanceof jQuery){

						var id = this.id;
					this.element.on('contextmenu', function(e){
						var atr = e.currentTarget.attributes.getNamedItem('data-ccmenu');
						console.log(e.currentTarget);
						console.log("atr "+atr.value);
						console.log("id "+id);
						if(atr.value == id){
					onContext(e.originalEvent);
				}
				return false;});

				}else{
						var id = this.id;
					this.element.oncontextmenu = function(e){
						var atr = e.currentTarget.attributes.getNamedItem('data-ccmenu');
						console.log(e.currentTarget);
						console.log("atr "+atr.value);
						console.log("id "+id);
						if(atr.value == id){
						onContext(e);
					}
					return false;};

					}
						}).bind(this)();

				var onContext = function(e) {
					e.preventDefault();
					var el = e.target;
					if (!this.rightOpen){
						openMenu(e);
					}
					this.backPlate.onclick = function() {
						closeMenu();
					}.bind(this);

					this.menu.childNodes.forEach(function(item, i) {
						item.onclick = function(e) {
							this.menuNcallBack[i].callBack(el);
							closeMenu();
						}.bind(this);
					}.bind(this));
					return false;
				}.bind(this);
				this.backPlate.oncontextmenu = function(e){
					e.preventDefault();
					return false;
				}.bind(this);
				this.menu.oncontextmenu = function(e){
					e.preventDefault();
					return false;
				}.bind(this);
		}).bind(this)();
	}
	};
