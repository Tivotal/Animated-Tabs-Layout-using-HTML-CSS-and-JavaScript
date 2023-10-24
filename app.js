/* Created by Tivotal */

let tabs = document.querySelectorAll(".tab");
let tabsContent = document.querySelectorAll(".content");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", (e) => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });

    tab.classList.add("active");

    tabsContent.forEach((content) => {
      content.classList.remove("active");
    });
    tabsContent[index].classList.add("active");

    let line = document.querySelector(".line");
    line.style.width = e.target.offsetWidth + "px";
    line.style.left = e.target.offsetLeft + "px";
  });
});
