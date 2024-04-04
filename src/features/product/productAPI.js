// A mock function to mimic making an async request for data
export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/products");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchProductsByFilters(filter) {
  //TODO : implement multi filter logic

  // assuming filter is like {category: "electronics"}
  let queryString = "";
  for (let key in filter) {
    // For example, if filter was { color: 'red', size: 'large' },  queryString would be color=red&size=large&
    queryString += `${key}=${filter[key]}&`;
  }
  return new Promise(async (resolve) => {
    const response = await fetch(
      "http://localhost:8080/products?" + queryString
    );
    const data = await response.json();
    resolve({ data });
  });
}
