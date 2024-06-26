// A mock function to mimic making an async request for data
export function createOrder(order) {
  return new Promise(async (resolve) => {
    const response = await fetch("/orders", {
      method: "POST",
      body: JSON.stringify(order),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    //TODO : on server it will only return email not password
    resolve({ data });
  });
}

export function updateOrder(order) {
  return new Promise(async (resolve) => {
    const response = await fetch("/orders/" + order.id, {
      method: "PATCH",
      body: JSON.stringify(order),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchAllOrders(sort, pagination) {
  let queryString = "";
  for (let key in sort) {
    queryString += `${key}=${sort[key]}&`;
  }
  for (let key in pagination) {
    queryString += `${key}=${pagination[key]}&`;
  }

  return new Promise(async (resolve) => {
    const response = await fetch("/orders?" + queryString);
    const data = await response.json();
    const totalOrders = response.headers.get("X-Total-Count");

    console.log(data);
    resolve({ data: { orders: data, totalOrders: +totalOrders } });
  });
}
