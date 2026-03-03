const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const pagesContainer = document.getElementById("pages");


let currentPage = 1;
const totalPages = 10;

function renderPagination() {
  pagesContainer.innerHTML = "";

  let startPage = currentPage;
  if (currentPage > totalPages - 2) {
    startPage = totalPages - 2;
  }
  if (startPage < 1) startPage = 1;

  for (let i = startPage; i < startPage + 3; i++) {
    if (i > totalPages) break;

    const pageBtn = document.createElement("button");
    pageBtn.textContent = i;

    // APPLY YOUR DESIGN CLASS
    pageBtn.classList.add("bg-transparent", "border", "border-white", "text-white", "rounded-md", "px-4", "py-2", "transition-colors", "duration-300");

    // ACTIVE STATE
    if (i === currentPage) {
      pageBtn.classList.add("bg-white", "text-black");
    }

    pageBtn.addEventListener("click", () => {
      currentPage = i;
      renderPagination();
      renderProducts();
    });

    pagesContainer.appendChild(pageBtn);
  }

  // Show/hide buttons
  prevBtn.style.display = currentPage === 1 ? "none" : "inline-block";
  nextBtn.style.display = currentPage === totalPages ? "none" : "inline-block";
}

prevBtn.addEventListener("click", () => {
  currentPage--;
  renderPagination();
  renderProducts();
});

nextBtn.addEventListener("click", () => {
  currentPage++;
  renderPagination();
  renderProducts();
});

renderPagination();