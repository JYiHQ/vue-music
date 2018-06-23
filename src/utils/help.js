// 根据对象属性，过滤数组中的对象；
export function getObjectByAttr(attr, value, arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i][attr] === value) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// 删除数组中前n个元素
export function deleteItemInArr(arr, n) {
  for (let i = 0; i < n; i += 1) {
    arr.slice(n, 1);
  }
  return arr;
}
