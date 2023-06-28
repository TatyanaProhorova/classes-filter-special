export function compare(a, b) {
  if (a.key < b.key) {
    return -1;
  }
  return 1;
}

export function sortObjectByKeysList(keysList, favoriteProperties) {
  const c = [];
  for (let i = 0; i < keysList.length; i += 1) {
    for (let j = 0; j < favoriteProperties.length; j += 1) {
      if (favoriteProperties[j].key === keysList[i]) {
        c.push(favoriteProperties[j]);
      }
    }
  }
  return c;
}

export function orderByProps(obj, keysList) {
  const a = [];
  const b = [];
  for (const prop in obj) {
    if (keysList.includes(prop)) {
      a.push({ key: prop, value: obj[prop] });
    } else {
      b.push({ key: prop, value: obj[prop] });
    }
  }
  const result = [...sortObjectByKeysList(keysList, a), ...b.sort(compare)];
  console.log(result);
  return result;
}
