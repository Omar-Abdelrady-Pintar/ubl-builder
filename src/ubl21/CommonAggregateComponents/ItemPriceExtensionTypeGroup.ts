import GenericAggregateComponent, { IGenericKeyValue, ParamsMapValues } from './GenericAggregateComponent';
import { UdtAmount } from '../types/UnqualifiedDataTypes/UdtAmount';

/*

  1    cbc:PriceAmount [1..1]    The amount of the price.
  2    cbc:BaseQuantity [0..1]    The quantity at which this price applies.
  3    cbc:PriceChangeReason [0..*]    A reason for a price change.
  4    cbc:PriceTypeCode [0..1]    The type of price, expressed as a code.
  5    cbc:PriceType [0..1]    The type of price, expressed as text.
  6    cbc:OrderableUnitFactorRate [0..1]    The factor by which the base price unit can be converted to the orderable unit.
  7    cac:ValidityPeriod [0..*]    A period during which this price is valid.
  8    cac:PriceList [0..1]    Information about a price list applicable to this price.
  9    cac:AllowanceCharge [0..*]    An allowance or charge associated with this price.
  10    cac:PricingExchangeRate [0..1]    The exchange rate applicable to this price, if it differs from the exchange rate applicable to the document as a whole.

*/

const ParamsMap: IGenericKeyValue<ParamsMapValues> = {
  amount: { order: 1, attributeName: 'cbc:Amount', min: 0, max: 1, classRef: UdtAmount },
};

type AllowedParams = {
  amount: string | UdtAmount; // The amount of the price. MANADATORY
};

/**
 *
 */
class ItemPriceExtension extends GenericAggregateComponent {
  constructor(content: AllowedParams) {
    super(content, ParamsMap, 'cac:ItemPriceExtension');
  }

  setAmount(value: string | UdtAmount) {
    this.attributes.amount = value instanceof UdtAmount ? value : new UdtAmount(value);
  }

  /**
   *
   * @param {boolean} [rawValue=true]
   */
  getAmount(rawValue = true) {
    return rawValue ? this.attributes.amount.content : this.attributes.amount;
  }

}

export { ItemPriceExtension, AllowedParams as PriceParams };
