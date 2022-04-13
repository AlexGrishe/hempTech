
import { ProductInfo } from '../interface/interface-template';

export class CartItem {
  constructor(public product: ProductInfo, public amount: number) {
  }
}
