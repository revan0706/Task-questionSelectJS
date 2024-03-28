function next() {
  let question = document.querySelector("h1");
  let ans1 = document.querySelector("label[for=answer1]");
  let ans2 = document.querySelector("label[for=answer2]");
  let ans3 = document.querySelector("label[for=answer3]");
  let button = document.querySelector("form").lastElementChild;
  if (
    document
      .querySelector("form")
      .lastElementChild.getAttribute("data-countrue-type") == "az"
  ) {
    question.innerHTML = "Turkiyenin bir səhərini seçin";
    ans1.innerHTML = "Ankara";
    ans2.innerHTML = "Istanbul";
    ans3.innerHTML = "Samsun";
    button.setAttribute("data-countrue-type", "tr");
  } else if (
    document
      .querySelector("form")
      .lastElementChild.getAttribute("data-countrue-type") == "tr"
  ) {
    question.innerHTML = "Amerikanin bir səhərini seçin";
    ans1.innerHTML = "New York City (New York)";
    ans2.innerHTML = "Los Angeles (California)";
    ans3.innerHTML = "Chicago (Illinois)";
    button.setAttribute("data-countrue-type", "us ");
  }
}
