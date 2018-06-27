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

// 处理UTC时间
export function handleTime(time) {
  let timeArr = [];
  let result = '';
  const str = '昨天';
  const currentYear = new Date().getFullYear();
  const reg1 = new RegExp('下午');
  const reg2 = new RegExp('上午');
  const today = new Date().getDate();
  const date = new Date(time).toLocaleDateString().split('/');
  if (Number(date[0]) === currentYear) {
    let clockTime = new Date(time).toLocaleTimeString();
    if (Number(date[2]) === today) {
      if (reg1.test(clockTime)) {
        timeArr = clockTime.replace(reg1, '').split(':');
        timeArr[0] = Number(timeArr[0]) + 12;
        result = timeArr.splice(0, 2).join(':');
      } else {
        timeArr = clockTime.replace(reg2, '').split(':');
        result = timeArr.splice(0, 2).join(':');
      }
    }
    if (Number(date[2]) === today - 1) {
      if (reg1.test(clockTime)) {
        timeArr = clockTime.replace(reg1, '').split(':');
        timeArr[0] = Number(timeArr[0]) + 12;
        clockTime = timeArr.splice(0, 2).join(':');
        result = str + clockTime;
      } else {
        timeArr = clockTime.replace(reg2, '').split(':');
        clockTime = timeArr.splice(0, 2).join(':');
        result = str + clockTime;
      }
    }
  } else {
    result = date;
  }
  return result;
}
