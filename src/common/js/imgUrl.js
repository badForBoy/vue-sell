export function imgUrl(hash) {
  return `http://fuss10.elemecdn.com/${hash.substr(0, 1)}/${hash.substr(1, 2)}/${hash.substr(3)}.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/`
}
export function bgImgUrl(hash) {
  return `https://fuss10.elemecdn.com/${hash.substr(0, 1)}/${hash.substr(1, 2)}/${hash.substr(3)}.jpeg?imageMogr/format/webp/thumbnail/!40p/blur/50x40/`
}
