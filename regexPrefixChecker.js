// Starts(^) with ^(Mr|Mrs|Ms|Dr|Er)
// Has a succeding dot (.) without whitespace before it.
// Zero or more possibility(*) of whitespace, hence \s*
// atleast 1(+) occurence of [a-z] or[A-Z], hence [a-zA-Z]+
// It should not end with whitespace at the end of line, rather should have [a-zA-Z]+ as its only possible occurence, hence[a-zA-Z]+$

function regexVar() {
  const re = /^(Mr|Mrs|Ms|Dr|Er)\.[A-Za-z]+$/;
  return re;
}

function main() {
  const re = regexVar();
  const s = ["Mr.X", "Mrs.Y", "Dr#Joseph", "Er .Abc"];
  for (let i = 0; i < s.length; i++) {
    console.log(re.test(s[i]));
  }
}

main();
