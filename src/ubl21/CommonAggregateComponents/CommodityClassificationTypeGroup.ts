// 'use strict'

import GenericAggregateComponent, { IGenericKeyValue, ParamsMapValues } from './GenericAggregateComponent';
import {  UdtName} from '../types/UnqualifiedDataTypes';


/*

  1  cbc:ID [0..1]    An identifier for this tax category.
  2  cbc:Name [0..1]    The name of this tax category.
  3  cbc:Percent [0..1]    The tax rate for this category, expressed as a percentage.
  4  cbc:BaseUnitMeasure [0..1]    A Unit of Measures used as the basic for the tax calculation applied at a certain rate per unit.
  5  cbc:PerUnitAmount [0..1]    Where a tax is applied at a certain rate per unit, the rate per unit applied.
  6  cbc:TaxExemptionReasonCode [0..1]    The reason for tax being exempted, expressed as a code.
  7  cbc:TaxExemptionReason [0..*]    The reason for tax being exempted, expressed as text.
  8  cbc:TierRange [0..1]    Where a tax is tiered, the range of taxable amounts that determines the rate of tax applicable to this tax category.
  9  cbc:TierRatePercent [0..1]    Where a tax is tiered, the tax rate that applies within the specified range of taxable amounts for this tax category.
  10  cac:TaxScheme [1..1]    The taxation scheme within which this tax category is defined.

*/

const ParamsMap: IGenericKeyValue<ParamsMapValues> = {
  name: { order: 2, attributeName: 'cbc:Name', min: 0, max: 1, classRef: UdtName },

};

type AllowedParams = {
  name?: string | UdtName;
};

/**
 *
 */

class CommodityClassificationType extends GenericAggregateComponent {
  constructor(content: AllowedParams) {
    super(content, ParamsMap, 'cac:CommodityClassification');
  }


}

export {
  AllowedParams as CommodityClassificationTypeParams,
  CommodityClassificationType as CommodityClassification,
  ParamsMap as  CommodityClassificationTypeParamsMap,

};
