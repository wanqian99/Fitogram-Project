// set profile tab to 1st tab by default, dont display the other tabs
document.getElementById("tab1").style.backgroundColor = "rgb(241,208,176)";
document.getElementById("profileinfo").style.display = "block";
document.getElementById("profileRnW").style.display = "none";
document.getElementById("profilepost").style.display = "none";

//set the 1st tab colour to yellow, display only 1st tab content
function activeTab1() {
    document.getElementById("tab1").style.backgroundColor = "rgb(241,208,176)";
    document.getElementById("tab2").style.backgroundColor = "white";
    document.getElementById("tab3").style.backgroundColor = "white";
    
    document.getElementById("profileinfo").style.display = "block";
    document.getElementById("profileRnW").style.display = "none";
    document.getElementById("profilepost").style.display = "none";
}

//set the 2nd tab colour to yellow, display only 2nd tab content
function activeTab2() {
    document.getElementById("tab2").style.backgroundColor = "rgb(241,208,176)";
    document.getElementById("tab1").style.backgroundColor = "white";
    document.getElementById("tab3").style.backgroundColor = "white";
    
    document.getElementById("profileRnW").style.display = "block";
    document.getElementById("profileinfo").style.display = "none";
    document.getElementById("profilepost").style.display = "none";
}

//set the 3rd tab colour to yellow, display only 3rd tab content
function activeTab3() {
    document.getElementById("tab3").style.backgroundColor = "rgb(241,208,176)";
    document.getElementById("tab1").style.backgroundColor = "white";
    document.getElementById("tab2").style.backgroundColor = "white";
    
    document.getElementById("profilepost").style.display = "block";
    document.getElementById("profileRnW").style.display = "none";
    document.getElementById("profileinfo").style.display = "none";
}