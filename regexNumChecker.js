// g is used for global search, search
// for input 999.99 it will give an
// output as split as 999, 99
// \d returns any digit and is slightly shorter than [0-9]
// (\d) - matches any digit
// (+) - means 1 or more match
// (\g )- g is for global search.It will match all occurences.
// https://www.regextester.com/

function regexVar() {
  // let re = /([0-9])+/g;
  // let re = /\d+/g;
  // const re = new RegExp(/\d+/g);
  const re = new RegExp("\\d+", "g");
  return re;
}

function main() {
  const re = regexVar();
  const s = "102, 1948948 and 1.3 and 4.5";

  let r = s.match(re);

  for (const e of r) {
    console.log(e);
  }
}

main();
