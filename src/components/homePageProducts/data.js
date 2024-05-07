const result = await fetch("https://cord-nutritious-chasmosaurus.glitch.me/items")
const products = await result.json()
export const items = products.filter((item) => {return item.frontPage === 1})