// A mock function to mimic making an async request for data
// export function fetchAllProducts() {
//   return new Promise(async (resolve) => {
//     const response = await fetch("/products");
//     const data = await response.json();
//     resolve({ data });
//   });
// }

export function fetchProductById(id) {
  return new Promise(async (resolve) => {
    const response = await fetch("/products/" + id);
    const data = await response.json();
    resolve({ data });
  });
}

export function createProduct(product) {
  return new Promise(async (resolve) => {
    const response = await fetch("/products/", {
      method: "POST",
      body: JSON.stringify(product),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function updateProduct(update) {
  return new Promise(async (resolve) => {
    const response = await fetch("/products/" + update.id, {
      method: "PATCH",
      body: JSON.stringify(update),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchProductsByFilters(filter, sort, pagination, admin) {
  //TODO : implement multi filter logic
  //filter = {category: ["smartphones","laptops"], brand: "Apple"}
  //sort = {_sort:"price",_order:"asc"}
  //pagination={_page:1,_limit:10 }
  //TODO:Server will filter deleted products in case of non-admin user

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
    queryString += `${key}=${sort[key]}&`;
  }
  for (let key in pagination) {
    queryString += `${key}=${pagination[key]}&`;
  }
  if (admin) {
    queryString += `admin=true`;
  }
  return new Promise(async (resolve) => {
    const response = await fetch("/products?" + queryString);
    const data = await response.json();
    const totalItems = await response.headers.get("X-Total-Count");
    resolve({ data: { products: data, totalItems: totalItems } });
  });
}

export function fetchCategories() {
  return new Promise(async (resolve) => {
    const response = await fetch("/categories");
    const data = await response.json();
    resolve({ data });
  });
}
export function fetchBrands() {
  return new Promise(async (resolve) => {
    const response = await fetch("/brands");
    const data = await response.json();
    resolve({ data });
  });
}
