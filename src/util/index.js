const util = {
  randEl: (arr) => {
    return arr[Math.floor(Math.random() * arr.length)]
  },

  removeEl: (arr, el) => {
    let index = arr.indexOf(el)
    arr.splice(index, 1)
  },

  repeat: (count, cb) => {
    for (let i = 0; i < count; i++) {
      cb(i)
    }
  }
}

export default util
