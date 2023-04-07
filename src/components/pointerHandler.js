export default function pointerHandler(isWhite) {
  const bg = getComputedStyle(document.documentElement).getPropertyValue(
    "--background"
  );
  const fg = getComputedStyle(document.documentElement).getPropertyValue(
    "--foreground"
  );

  if (isWhite)
    document.documentElement.style.setProperty("--cursor-color", "black");
  else document.documentElement.style.setProperty("--cursor-color", "white");
}
