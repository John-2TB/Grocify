const pageButtons = [
  document.getElementById("page1"),
  document.getElementById("page2"),
  document.getElementById("page3")
].filter(Boolean);

const previousButton = document.getElementById("prevPage");
const nextButton = document.getElementById("nextPage");

const ACTIVE_STYLES = {
  backgroundColor: "white",
  color: "black",
  borderRadius: "4px",
  paddingLeft: "8px",
  paddingRight: "8px"
};

function setButtonActiveState(button, isActive) {
  if (!button) return;

  if (isActive) {
    Object.assign(button.style, ACTIVE_STYLES);
    return;
  }

  button.style.removeProperty("background-color");
  button.style.removeProperty("color");
  button.style.removeProperty("border-radius");
  button.style.removeProperty("padding-left");
  button.style.removeProperty("padding-right");
}

function getCurrentPage() {
  return pageButtons.findIndex((button) => button.dataset.active === "true");
}

function activatePageByIndex(pageIndex) {
  if (pageIndex < 0 || pageIndex >= pageButtons.length) {
    return;
  }

  pageButtons.forEach((button, index) => {
    const isActive = index === pageIndex;
    button.dataset.active = isActive ? "true" : "false";
    setButtonActiveState(button, isActive);
  });
}

pageButtons.forEach((button, index) => {
  button.addEventListener("click", () => activatePageByIndex(index));
});

if (previousButton) {
  previousButton.addEventListener("click", () => {
    const currentPage = getCurrentPage();
    if (currentPage > 0) {
      activatePageByIndex(currentPage - 1);
    }
  });
}

if (nextButton) {
  nextButton.addEventListener("click", () => {
    const currentPage = getCurrentPage();
    if (currentPage < pageButtons.length - 1) {
      activatePageByIndex(currentPage + 1);
    }
  });
}

activatePageByIndex(0);
