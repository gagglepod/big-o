/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 *
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
  // let obj = objects;
  return objects.filter(function (obj) {
    return obj.x == obj.y;
  }).length;
}

function main() {
  const n = +readLine();
  let objects = [];

  for (let i = 0; i < n; i++) {
    const [a, b] = readLine().split(" ");

    objects.push({ x: +a, y: +b });
  }

  console.log(getCount(objects));
}
