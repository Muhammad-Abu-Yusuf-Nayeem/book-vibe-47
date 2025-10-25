const getStoredReadList = () => {
  const storedListStr = localStorage.getItem("read-item");
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};

const addToStoredReadList = (id) => {
  const storedList = getStoredReadList();
  if (storedList.includes(id)) {
    console.log(id, "already exists");
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("read-item", storedListStr);
  }
};

const getStoredWishList = () => {
  const storedWishListStr = localStorage.getItem("wish-item");
  if (storedWishListStr) {
    const storedWishList = JSON.parse(storedWishListStr);
    return storedWishList;
  } else {
    return [];
  }
};

const addToStoredWishList = (id) => {
  const storedWishList = getStoredWishList();
  if (storedWishList.includes(id)) {
    console.log(id, "already exists in wish list");
  } else {
    storedWishList.push(id);
    const storedWishListStr = JSON.stringify(storedWishList);
    localStorage.setItem("wish-item", storedWishListStr);
  }
};

export {
  addToStoredReadList,
  getStoredWishList,
  getStoredReadList,
  addToStoredWishList,
};
