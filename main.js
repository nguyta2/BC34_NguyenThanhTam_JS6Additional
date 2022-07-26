function calcPrimeNumber(num_in) {
  var result = [];
  var i = 1;

  while (i <= num_in) {
    if (isPrimeNumber(i)) {
      result.push(i);
    }
    i++;
  }
  return result;
}

function isPrimeNumber(num1_in) {
  var result = true;
  var i = 2;

  if (num1_in < 2) {
    return (result = false);
  }

  while (i < num1_in) {
    if (num1_in % i === 0) {
      result = false;
      break;
    }
    i++;
  }
  return result;
}

document
  .querySelector(".container button#btnPrimeNumber")
  .addEventListener("click", function () {
    // input
    var num = document.getElementById("num").value * 1;

    // process
    var primeNumbers = calcPrimeNumber(num);

    // output
    document.querySelector(".container div#showResult").innerHTML =
      primeNumbers;
  });
