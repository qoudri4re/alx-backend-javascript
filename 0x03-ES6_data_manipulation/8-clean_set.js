export default function cleanSet(set, startString) {
  let newString = [];
  set.forEach((value) => {
    if (value.startsWith(startString)) {
      newString.push(value.substring(startString.length));
    }
  });
  return newString.join('-');
}
