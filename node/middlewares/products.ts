import { UserInputError } from "@vtex/api"

export async function product(ctx: Context, next: () => Promise<any>) {

  const productId = ctx.vtex.route.params.id.toString()

 if (isNaN(Number(productId))) {
  throw new UserInputError('El id del producto debe ser un número entero')
 }

  await next()
}
