import GenericAggregateComponent, { IGenericKeyValue, ParamsMapValues } from './GenericAggregateComponent';

/* TODO GENERIC CLASSES */
import { UdtCode, UdtName } from '../types/UnqualifiedDataTypes';

const ParamsMap: IGenericKeyValue<ParamsMapValues> = {
  identificationCode: { order: 1, attributeName: 'cbc:ItemClassificationCode', min: 0, max: 1, classRef: UdtCode },
};

type AllowedParams = {
  /** A code signifying this ItemClassificationCode. */
  identificationCode?: string;
};

/**
 * A class to describe a ItemClassificationCode.
 */
class CommodityClassificationType extends GenericAggregateComponent {
  /**
   * @param {AllowedParams} content
   * @param {string} name
   */
  constructor(content: AllowedParams) {
    super(content, ParamsMap, 'cac:CommodityClassificationType');
  }
}

export { CommodityClassificationType as  CommodityClassification, AllowedParams as CountryParams };
