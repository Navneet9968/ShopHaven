// A mock function to mimic making an async request for data
export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/products");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchProductsByFilters(filter, sort) {
  //TODO : implement multi filter logic
  //filter = {category: ["smartphones","laptops"], brand: "Apple"}
  //sort = {_sort:"price",_order:"asc"}
  let queryString = "";
  for (let key in filter) {
    const categoryValues = filter[key];

    // For example, if filter was { color: 'red', size: 'large' },  queryString would be color=red&size=large&
    if (categoryValues.length > 0) {
      const lastCategoryValue = categoryValues[categoryValues.length - 1];
      queryString += `${key}=${lastCategoryValue}&`;
    }
  }

  for (let key in sort) {
  }
  return new Promise(async (resolve) => {
    const response = await fetch(
      "http://localhost:8080/products?" + queryString
    );
    const data = await response.json();
    resolve({ data });
  });
}
