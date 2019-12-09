console.log("hello world")
const imgButton = document.getElementById("menuButton");
const menu = document.getElementById("menuList");

// geef de image een click event waardoor de functie menuExpand wordt aangeroepen
document.getElementById("menuButton").addEventListener("click", function(event){
	menuExpand();
})

//de functie geeft een toggle class .menu-expand aan de het menu
const menuExpand = function(){
	menu.classList.toggle("menu-expand");
	console.log("de functie menu expand wordt aangeroepen");

}
const changeColorBG = function(e){
	console.log("de functie changecolorBG wordt aangeroepen");
	//item.id ===
	const menuItemClicked = e.currentTarget.id;
	console.log(menuItemClicked);


	//geef nieuwe classname aan body
	document.body.className = menuItemClicked;
	//verwijder class menu-expand van menu icon. 
	menu.classList.remove("menu-expand");

}

 //maak een array van alle menu items
 const menuItems = document.querySelectorAll(
      "#home, #red, #orange, #purple, #green"
    );

 //maak een array van alle classselectors
 const cssClasses = ["home", "red", "orange", "purple", "green"];
 console.log("er zitten " +  cssClasses.length + " kleuren in Array");
// maak een event listener "click" bij alle items in de array menuItems
 for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener("click", changeColorBG);
}