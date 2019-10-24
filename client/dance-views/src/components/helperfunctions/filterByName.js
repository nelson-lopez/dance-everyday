const filterByName = (arr, value) => {
  const nameArr = [];
  const matchingArr = [];

  for (let obj of arr) {
    nameArr.push(obj.name.toLowerCase());
    if (nameArr.length !== 0) {
      for (let i = 0; i < nameArr.length; i++) {
        let arr = nameArr[i];
        if (arr.indexOf(value.toLowerCase()) !== -1) {
          matchingArr.push(arr);
        }
      }
    }
  }

  const sanitizedArr = [...new Set(matchingArr)];
  return sanitizedArr;
};

export default filterByName;
