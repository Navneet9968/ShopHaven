export function addToCart(item) {
  return new Promise(async (resolve) => {
    const response = await fetch("/cart", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    //TODO : on server it will only return email not password
    resolve({ data });
  });
}
export function updateCart(update) {
  return new Promise(async (resolve) => {
    const response = await fetch("/cart/" + update.id, {
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

export function deleteItemFromCart(itemId) {
  return new Promise(async (resolve) => {
    const response = await fetch("/cart/" + itemId, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    resolve({ data: { id: itemId } });
  });
}

export function resetCart() {
  //get all items from user cart and delete them
  return new Promise(async (resolve) => {
    const response = await fetchItemsByUserId();
    const items = response.data;
    for (let item of items) {
      await deleteItemFromCart(item.id);
    }
    resolve({ status: "success" });
  });
}

export function fetchItemsByUserId() {
  return new Promise(async (resolve) => {
    const response = await fetch("/cart");
    const data = await response.json();
    resolve({ data });
  });
}
