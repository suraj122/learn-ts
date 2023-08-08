interface Product {
  name: string,
  price: number
}

interface Customer {
  id: number,
  type: string
}

type Readonlyt<T> = {
  readonly [K in keyof T]: T[K]
}

let product: Readonlyt<Product> = {
  name: "a",
  price: 4
}

let customer: Readonlyt<Customer> = {
  id: 4,
  type: "Premium"
}
