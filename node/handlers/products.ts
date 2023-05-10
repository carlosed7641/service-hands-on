export async function getProducts(ctx: Context, next: () => Promise<any>) {

  const clientProducts = ctx.clients.products
  const products = await clientProducts.getProducts()

  ctx.status = 200
  ctx.body = products

  await next()
}

export async function getProduct(ctx: Context, next: () => Promise<any>) {

  const productId = ctx.vtex.route.params.id.toString()
  const clientProducts = ctx.clients.products

  try {
    const products = await clientProducts.getProduct(productId)
    ctx.status = 200
    ctx.body = products

  } catch (error) {
    ctx.status = error.response.status
    ctx.body = 'El id no existe'
  }

  await next()
}


export async function getSkuById(ctx: Context, next: () => Promise<any>) {

  const productId = ctx.vtex.route.params.id.toString()

  try {
    const products = await ctx.clients.catalog.getSkuById(productId)
    ctx.status = 200
    ctx.body = products

  } catch (error) {
    ctx.status = error.response.status
    ctx.body = 'El id no existe'
  }

  await next()
}
