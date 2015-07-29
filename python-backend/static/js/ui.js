//View Switcher

function switchView(newView){
 var oldVIews = document.getElementsByClassName("app-view");
 oldVIews.style.display = 'none';
 var newView = document.getElementById(view);
 newView.style.display = 'block';
}
