export function imgUrl(hash) {
  let url = ''
  if (hash.indexOf('jpeg') > 0) {
    url = `http://fuss10.elemecdn.com/${hash.substring(0, 1)}/${hash.substring(1, 2)}/${hash.substring(2)}.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/`
  } else {
    url = `http://fuss10.elemecdn.com/${hash.substring(0, 1)}/${hash.substring(1, 2)}/${hash.substring(2)}.png?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/`
  }
  return url
}
export function bgImgUrl(hash) {
  let url = ''
  if (hash.indexOf('jpeg') > 0) {
    url = `https://fuss10.elemecdn.com/${hash.substr(0, 1)}/${hash.substr(1, 2)}/${hash.substr(3)}.jpeg?imageMogr/format/webp/thumbnail/!40p/blur/50x40/`
  } else {
    url = `https://fuss10.elemecdn.com/${hash.substr(0, 1)}/${hash.substr(1, 2)}/${hash.substr(3)}.png?imageMogr/format/webp/thumbnail/!40p/blur/50x40/`
  }
  return url
  // return `https://fuss10.elemecdn.com/${hash.substr(0, 1)}/${hash.substr(1, 2)}/${hash.substr(3)}.jpeg?imageMogr/format/webp/thumbnail/!40p/blur/50x40/`
}
