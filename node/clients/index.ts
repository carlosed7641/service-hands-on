import { IOClients } from '@vtex/api'
import { Catalog } from '@vtex/clients'

import Status from './status'
import Products from './products'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
  public get status() {
    return this.getOrSet('status', Status)
  }
  public get products() {
    return this.getOrSet('products', Products)
  }

  public get catalog() {
    return this.getOrSet('catalog', Catalog)
  }
}
