const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5,
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7,
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5,
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9,
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0,
  },
];

const productSelect = document.querySelector("#product-name");

if (productSelect) {
  products.forEach((product) => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.append(option);
  });
}

const reviewCountElement = document.querySelector("#review-count");

if (reviewCountElement) {
  const params = new URLSearchParams(window.location.search);
  const selectedProduct = products.find(
    (product) => product.id === params.get("product"),
  );
  const rating = params.get("rating");
  const isSubmittedReview =
    Boolean(selectedProduct) &&
    ["1", "2", "3", "4", "5"].includes(rating) &&
    Boolean(params.get("installation-date"));
  const storageKey = "productReviewCount";
  let reviewCount = Number(localStorage.getItem(storageKey)) || 0;

  if (isSubmittedReview) {
    reviewCount += 1;
    localStorage.setItem(storageKey, String(reviewCount));

    const confirmationMessage = document.querySelector("#confirmation-message");

    if (confirmationMessage) {
      confirmationMessage.textContent = `Your review for ${selectedProduct.name} has been submitted.`;
    }
  }

  reviewCountElement.textContent = String(reviewCount);
}
