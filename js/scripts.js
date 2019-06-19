function sue(em, s, l, c, eo){var w=window,p="ue";w[p]=w[p]||[];w[p].push({"em":em,"s":s,"l":l,"c":c,"eo":eo});return false;}
window.onerror = sue;

isServerSideRendering = function () {
try {
    return !(document !== undefined);
}
catch (e) {
    return true;
}
};

redirectToNonSSR = function(area) {
var fqn = document.getElementById("FQN").value;
var galleryUrl = document.getElementById("galleryUrl").value;
window.location.assign(window.location.origin + galleryUrl +"items?itemName=" + fqn + "&ssr=false" + area);
}

hideAndShowTabs = function(tabToShow) {
var currentTab = document.getElementsByClassName("selected-tab");
currentTab[0].style.display = "none";
currentTab[0].classList.remove("selected-tab");

var selectedTab =  document.getElementById(tabToShow);
selectedTab.classList.add("selected-tab");
selectedTab.style.display = "block";
}

if (!isServerSideRendering()) {
document.addEventListener('DOMContentLoaded', function() {
    
            document.getElementById("qna").addEventListener("click", function(e) {
                redirectToNonSSR("#qna");   
            });
        
            document.getElementById("rnr").addEventListener("click", function(e) {
                redirectToNonSSR("#review-details");
            });
            document.getElementById("review-details").addEventListener("click", function(e) {
            redirectToNonSSR("#review-details");
            });
        

    // add handler for search
    document.getElementById("Fragment_SearchBox").addEventListener("submit", function(e) {
        e.preventDefault();
        var queryText = document.getElementById("header-search-textbox").value;
        var galleryUrl = document.getElementById("galleryUrl").value;
        var searchTarget = document.getElementById("searchTarget").value;
        window.location = window.location.origin + galleryUrl +"search?term=" + queryText + "&target=" + searchTarget;
    });
    let acqBtn = document.getElementsByClassName("install-button-container");
    if (acqBtn && acqBtn[0]) {
        acqBtn[0].onclick = function(event) {var w=window,p="ciEvents";w[p]=w[p]||[];w[p].push({"acquisition": true, "event": event});};
    }

    

});
}
