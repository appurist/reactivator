let { Reactivator } = require('./index')

let data = {
  test1: Reactivator('Goodbye'),
  test2: Reactivator(5),
  data() {
    console.log("test1 =", this.test1)
    console.log("test2 =", this.test2)

    this.test1.subscribe(() =>
      console.log('test1 changed to', this.test1)
    )
    this.test2.subscribe(() => 
      console.log('test2 changed to', this.test2)
    )
  }
}

data.test1 = "Hello"
console.log("test1 =", data.test1)

data.test2 = 6;
console.log("test2 =", data.test2)

data.test1 += " there"
console.log("test1 =", data.test1)

data.test2++;
console.log("test2 =", data.test2)
