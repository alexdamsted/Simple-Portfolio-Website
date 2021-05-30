var switch_toggle = document.getElementById("switch");
switch_toggle.addEventListener("change", function () {
  // input is a checkbox (looks like a switch)
  if (this.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    document.getElementById("dark-mode-text").innerText = "dark mode (on)";
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    document.getElementById("dark-mode-text").innerText = "dark mode (off)";
  }
});
