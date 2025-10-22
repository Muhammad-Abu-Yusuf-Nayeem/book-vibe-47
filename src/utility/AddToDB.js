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

export { addToStoredReadList };
