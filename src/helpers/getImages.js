
async function getImages(category) {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=12&api_key=YhDTSVDOt9v3EGyjvYNBMNSaVisiOPfQ`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const imgs = data.map(img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url
    }
  });
  return imgs;
}

export default getImages;
