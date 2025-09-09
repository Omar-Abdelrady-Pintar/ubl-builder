'use strict';

import GenericAggregateComponent, { IGenericKeyValue, ParamsMapValues } from './GenericAggregateComponent';
import { UdtCode } from '../types/UnqualifiedDataTypes/UdtCode';
import { UdtDate } from '../types/UnqualifiedDataTypes/UdtDate';
import { UdtRate } from '../types/UnqualifiedDataTypes/UdtRate';

/*
  1  cbc:SourceCurrencyCode [1..1]    The source currency code.
  2  cbc:TargetCurrencyCode [1..1]    The target currency code.
  3  cbc:CalculationRate [1..1]      The calculation rate for converting the source currency to the target currency.
  4  cbc:Date [0..1]                The date of the exchange rate.
*/

const ParamsMap: IGenericKeyValue<ParamsMapValues> = {
  sourceCurrencyCode: {
    order: 1,
    attributeName: 'cbc:SourceCurrencyCode',
    min: 1,
    max: 1,
    classRef: UdtCode,
  },
  targetCurrencyCode: {
    order: 2,
    attributeName: 'cbc:TargetCurrencyCode',
    min: 1,
    max: 1,
    classRef: UdtCode,
  },
  calculationRate: {
    order: 3,
    attributeName: 'cbc:CalculationRate',
    min: 1,
    max: 1,
    classRef: UdtRate,
  },
  date: {
    order: 4,
    attributeName: 'cbc:Date',
    min: 0,
    max: 1,
    classRef: UdtDate,
  },
};

type AllowedParams = {
  sourceCurrencyCode: string | UdtCode;
  targetCurrencyCode: string | UdtCode;
  calculationRate: string | UdtRate;
  date?: string | UdtDate;
};

/**
 * Represents the TaxExchangeRate component in the invoice.
 */
class TaxExchangeRate extends GenericAggregateComponent {
  /**
   * @param {AllowedParams} content
   */
  constructor(content: AllowedParams) {
    super(content, ParamsMap, 'cac:TaxExchangeRate');
  }

  /**
   * Get the source currency code.
   * @param {boolean} [raw=true] - Return raw content or UdtCode instance.
   * @returns {string | UdtCode} The source currency code.
   */
  getSourceCurrencyCode(raw = true) {
    return raw ? this.attributes.sourceCurrencyCode.content : this.attributes.sourceCurrencyCode;
  }

  /**
   * Get the target currency code.
   * @param {boolean} [raw=true] - Return raw content or UdtCode instance.
   * @returns {string | UdtCode} The target currency code.
   */
  getTargetCurrencyCode(raw = true) {
    return raw ? this.attributes.targetCurrencyCode.content : this.attributes.targetCurrencyCode;
  }

  /**
   * Get the calculation rate.
   * @param {boolean} [raw=true] - Return raw content or UdtRate instance.
   * @returns {string | UdtRate} The calculation rate.
   */
  getCalculationRate(raw = true) {
    return raw ? this.attributes.calculationRate.content : this.attributes.calculationRate;
  }

  /**
   * Get the date of the exchange rate.
   * @param {boolean} [raw=true] - Return raw content or UdtDate instance.
   * @returns {string | UdtDate | undefined} The date, if set.
   */
  getDate(raw = true) {
    return raw ? this.attributes.date?.content : this.attributes.date;
  }
}

export { TaxExchangeRate, AllowedParams as TaxExchangeRateParams };
