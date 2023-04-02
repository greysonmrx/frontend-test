export function hexToRgb(hex: string, alpha?: number): string {
  const colors = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  if (colors === null) {
    console.error("✖ Invalid format");

    return "";
  }

  const [, red, green, blue] = colors.map((color) => parseInt(color, 16));

  if (typeof alpha === "number") {
    return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
  }

  return `rgb(${red}, ${green}, ${blue})`;
}
