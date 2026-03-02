const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");

page1.style.backgroundColor = "white";
page1.style.paddingLeft = "8px";
page1.style.paddingRight = "8px";
page1.style.color = "black";
page1.style.borderRadius = "4px";

page2.addEventListener("click",
  function() {
    page2.style.backgroundColor = "white";
    page2.style.paddingLeft = "8px";
    page2.style.paddingRight = "8px";
    page2.style.color = "black";
    page2.style.borderRadius = "4px";

    page1.style.removeProperty(BackgroundColor)
    page1.style.paddingLeft = "none";
    page1.style.paddingRight = "none";
    page1.style.color = "none";
    page1.style.borderRadius = "none";
  }
);
