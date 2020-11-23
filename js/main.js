//Burger start

let menuBurger = {
	burger: document.getElementById('burger'), //get burger 
	mobileMenu: document.getElementById('header_menu'), //get header menu
	body: document.querySelector('body'), //get body for block scroll
	menuList: document.querySelector('.header__list'),

	start: function(){
		let that = this;
		this.burger.addEventListener('click', function(e){
			that.activDeactiveBurgerMenu(e);
		});
		this.menuList.addEventListener('click', function(elem){
			that.hideMenuAfterClick(elem);
		})
	},

	activDeactiveBurgerMenu: function(){
		this.burger.classList.toggle('active_burger'); // activete burger (change burger view)
		this.mobileMenu.classList.toggle('active_header_menu'); // activete menu (show menu)
		this.body.classList.toggle('lock'); //block body scroll when menu is active 
	},

	hideMenuAfterClick: function(elem){
		if(elem.target.tagName !== 'A'){
			return false;
		} else {
			this.burger.classList.remove('active_burger'); // activete burger (change burger view)
			this.mobileMenu.classList.remove('active_header_menu'); // activete menu (show menu)
			this.body.classList.remove('lock'); //block body scroll when menu is active 
		}	
	}
}

menuBurger.start();

//Burger start



//Slider start 

$(document).ready(function(){
	$('.testimonial__slider').slick({ //find slider by slider class
		arrows: true,
		dots: true,
		slidesToScroll: 1,
		autoplay: true,
		speed: 700, 
		autoplaySpeed: 3000,
		slidesToShow: 1,
		pauseOnHover: true,
		draggable: true,
		prevArrow: '<div class="testimonial__arrow testimonial__arrow-prev"><i class="fas fa-chevron-left"></i></div>',
		nextArrow: '<div class="testimonial__arrow testimonial__arrow-next"><i class="fas fa-chevron-right"></i></div>',
	});

});

//Slider end

// function offset(el){
// 	const rect = el.getBoundingClientRect(),
// 	scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
// 	scrollTop = window.pageYOffset || document.documentElement.scrollTop;
// 	return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
// }

//Get position start

let elementPosition = {
	getPosition: function(el){
		const rect = el.getBoundingClientRect(),
		scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
		scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
	}
}

//Get position end


//Scroll animation start

let scrollAnimate = {
	animateItems: document.querySelectorAll('.animate-item'),

	start: function(){
		let	that = this;
		window.addEventListener('scroll', function(e){
			that.scrollAnimate(e);
		})
	},

	scrollAnimate: function(e){
		if (this.animateItems.length > 0) {
			for(let i = 0; i < this.animateItems.length; i++){
				let animateItem = this.animateItems[i];
				let animateItemHeight = animateItem.offsetHeight;
				let windowHeight = window.innerHeight;
				let elemTopPositin = elementPosition.getPosition(animateItem).top;
				let animeStart = 2;

				let animeStartPoint = elemTopPositin - windowHeight + animateItemHeight / animeStart;
				let animeEndPoint = elemTopPositin + animateItemHeight;
				if (pageYOffset > animeStartPoint) {
					this.animateItems[i].classList.add('_active');
				} else {
					this.animateItems[i].classList.remove('_active');
				}
			}
		}
	}, 
}

scrollAnimate.start();

//Scroll animation end 


//Activate header menu start

let activateMenuItems = {
	menuItems: document.querySelectorAll('.header__list-link'),
	sections: document.querySelectorAll('section'),

	start: function(){
		let that = this;
		window.addEventListener('scroll', function(){
			that.activeteMenuItems();
		})
	},

	activeteMenuItems: function(){
		for (var i = 0; i < this.sections.length; i++) {
			let section = this.sections[i];
			let sectionHeight = section.offsetHeight;
			let sectionTopPosition = elementPosition.getPosition(section).top;
			let windowHeight = window.innerHeight;
			if((pageYOffset + windowHeight - 200 <= sectionTopPosition + sectionHeight) && 
				(pageYOffset + windowHeight - 200 > sectionTopPosition)){
				this.menuItems[i].classList.add('active-menu-item');
		} else {
			this.menuItems[i].classList.remove('active-menu-item');
		}

	}
}
}

activateMenuItems.activeteMenuItems();
activateMenuItems.start();

//Activate header menu end