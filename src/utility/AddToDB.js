import { toast } from "react-toastify";
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
    toast("this book is already exists");
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("read-item", storedListStr);
    toast("this book is added to the read list");
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
    toast("this book is already exists");
  } else {
    storedWishList.push(id);
    const storedWishListStr = JSON.stringify(storedWishList);
    localStorage.setItem("wish-item", storedWishListStr);
    toast("Successfully added to the wish list");
  }
};

export {
  addToStoredReadList,
  getStoredWishList,
  getStoredReadList,
  addToStoredWishList,
};
