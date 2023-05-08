export default function pointerHandler(isWhite) {
  if (isWhite)
    document.documentElement.style.setProperty("--cursor-color", "black");
  else document.documentElement.style.setProperty("--cursor-color", "white");
}
