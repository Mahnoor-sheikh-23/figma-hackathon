import Products from '@/components/Products'
import { type SchemaTypeDefinition } from 'sanity'
import {  productSchema } from './products'
import customer from './customer'
import order from './order'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema , customer , order],
}
