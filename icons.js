const favicon = document.querySelector("#favicon");
const lightTheme = window.matchMedia('(prefers-color-scheme: light)').matches;

if (lightTheme) {
  favicon.href = "darkicon.png";
} else {
  favicon.href = "lighticon.png";
}