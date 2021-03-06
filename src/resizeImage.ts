export const resizeImage = (imagePath: string, size: "640" | "1280") => {
  const image = imagePath.match("media/screenshots/")
    ? imagePath.replace("media/screenshots", `media/resize/${size}/-/screenshots`)
    : imagePath.replace("media/games", `media/resize/${size}/-/games`);
  return image;
};
