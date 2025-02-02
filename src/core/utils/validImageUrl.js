export default validImageUrl = (url) => {
  const imageUrl = url;

  const imageUrlRegex = /\.(jpeg|jpg|gif|png)$/i;

  return imageUrlRegex.test(imageUrl) ?  true : false;
};
