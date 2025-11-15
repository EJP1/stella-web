export const colorPalettes = {
  Aries: ["#C93F56", "#B85841", "#E89950", "#8B1F1F", "#E8DDD5"],
  Taurus: ["#3B5F44", "#C9A449", "#A65B7E", "#EDD1D8", "#8B7565"],
  Gemini: ["#F0DC89", "#A6997A", "#6B9BBC", "#C7ABC9", "#3A342C"],
  Cancer: ["#E8A582", "#7DAED4", "#F4D0D6", "#F5EBD8"],
  Leo: ["#C89641", "#E36F54", "#B67878", "#D4835A", "#4B2B51"],
  Virgo: ["#D9BDA8", "#9F9853", "#D77F52", "#BDD4B6", "#E8E3D8"],
  Libra: ["#B44D75", "#A4BAD1", "#D5C2AD", "#EBCBC1", "#37485C"],
  Scorpio: ["#A084B1", "#4630A3", "#B76667", "#1C1914", "#EBE4D8"],
  Sagittarius: ["#E9E396", "#C35836", "#5467A8", "#2D5C48", "#A7CBD9"],
  Capricorn: ["#B7A7CB", "#A88160", "#5A7857", "#C3AA6B"],
  Aquarius: ["#B8C576", "#A05FDB", "#6FBFE1", "#4F6157"],
  Pisces: ["#D6A3C5", "#7FA9DE", "#5850A3", "#826154", "#ECE7DC"],
} as const;

export type PaletteKey = keyof typeof colorPalettes;
