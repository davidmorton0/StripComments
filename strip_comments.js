function solution(input, markers) {
  markers.forEach((marker, idx) => {
    if (marker == '$') {
      markers[idx] = '\\' + marker;
    }
  })
  pattern = new RegExp('\\s*' + markers.join('|\\s*'));
  text = input
    .split("\n")
    .map(line => {
      markPos = line.match(pattern);
      if (markPos) {
        return line.substring(0, markPos.index);
      } else {
        return line;
      }
    })
  return text.join("\n");
};

//Tests
function checkComments(input, markers, expected) {
  var actual;
  actual = solution(input, markers);
  console.log(actual === expected, "Returned:" + actual + ". Expected:" + expected);
};

checkComments("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"], "apples, plums\npears\noranges");
checkComments("Q @b\nu\ne -e f g", ["@", "-"], "Q\nu\ne");
