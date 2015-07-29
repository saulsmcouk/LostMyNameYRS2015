function switchView(view){
    oldViews = document.getElementsByClassName("app-view");
    newVIew = document.getElementById(view);
    
    oldViews.style.display = 'none';
    newVIew.style.display = 'block';
}