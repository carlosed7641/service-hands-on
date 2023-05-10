import type { InstanceOptions, IOContext } from '@vtex/api'
import { ExternalClient } from '@vtex/api'

export default class Products  extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super('http://jsonplaceholder.typicode.com', context, options)
  }

  public async getProducts(): Promise<string> {
  return this.http.get('/todos')
  }

  public async getProduct(id: string): Promise<string> {
    return this.http.get(`/todos/${id}`)
  }

}
