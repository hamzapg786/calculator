function checkNumber() {
  let regex = new RegExp("^[0-9]*$");
  if (regex.test(number)) {
    if (parseInt(number) % 2 === 0) {
      alert(`${number} is Even`);
    } else {
      alert(`${number} is Odd`);
    }
  } else {
    alert(`please enter a number`);
  }
}
