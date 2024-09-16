import { EPizzaTypes, EPizzaParams, EPizzaThickness, EPizzaSizes, IPizzaParamsContent } from './types';

export const PIZZA_SETTINGS: Record<EPizzaParams, IPizzaParamsContent[]> = {
  [EPizzaParams.DOUGH]: [
    { value: EPizzaThickness.THIN, text: 'Тонкое' },
    { value: EPizzaThickness.FAT, text: 'Толстое', checked: true },
  ],
  [EPizzaParams.SIZE]: [
    { value: EPizzaSizes.SIZE_26, text: '26 см.' },
    { value: EPizzaSizes.SIZE_30, text: '30 см.', checked: true },
    { value: EPizzaSizes.SIZE_40, text: '40 см.' },
  ],
};

export const PIZZA_TYPE_NAMES: Record<EPizzaTypes, string> = {
  [EPizzaTypes.ALL]: 'Все',
  [EPizzaTypes.MEAT]: 'Мясные',
  [EPizzaTypes.VEGETABLE]: 'Вегетарианские',
}

export const PORTION_TO_LOAD = 5;

export const BASE_URL = '/api/data'