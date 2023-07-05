/*const code = document.getElementsByClassName("code");

code.addEventListener("mouseover", function() {
  code.innerHTML = "&lt;mi proyecto /&gt;";
});

code.addEventListener("mouseout", function() {
  code.innerHTML = "Mi proyecto";
});
*/
const projectTitle = document.querySelector(".project-title");
const codeSpans = projectTitle.querySelectorAll(".code");

projectTitle.addEventListener("mouseover", function() {
  codeSpans[0].innerHTML = "&lt;";
  codeSpans[1].innerHTML = "/&gt;";
});

projectTitle.addEventListener("mouseout", function() {
  codeSpans[0].innerHTML = "&lt;";
  codeSpans[1].innerHTML = "/&gt;";
});
