export function deepClone(src: any): any {
  let target: any
  if (src === null) {
    target = src
  } else if (src instanceof Date) {
    target = new Date(src)
  } else if (typeof src === "object") {
    if (Array.isArray(src)) {
      target = []

      for (let i = 0; i < src.length; i++) {
        if (src[i] instanceof Date) {
          target.push(new Date(src[i]))
        } else if (typeof src[i] === "object") {
          target.push(deepClone(src[i]))
        } else {
          target.push(src[i])
        }
      }
    } else {
      target = {}

      for (const prop in src) {
        if (Object.prototype.hasOwnProperty.call(src, prop)) {
          if (src[prop] instanceof Date) {
            target[prop] = new Date(src[prop])
          } else if (typeof src[prop] === "object") {
            target[prop] = deepClone(src[prop])
          } else {
            target[prop] = src[prop]
          }
        }
      }
    }
  } else {
    target = src
  }

  return target
}
