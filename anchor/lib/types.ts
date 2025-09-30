import { Address } from 'gill'

export interface GillRecipient {
  publicKey: Address
  amount: number
}
