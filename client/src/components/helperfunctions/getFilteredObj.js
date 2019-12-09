const getFilteredObj = (arr, filteredArr) => {
  const newArr = [];
  for (let item of filteredArr) {
    for (let obj of arr) {
      if (obj.name.toLowerCase() === item) {
        newArr.push(obj);
      }
    }
  }
  return newArr;
};

export default getFilteredObj;
