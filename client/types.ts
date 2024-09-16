import { store } from './redux';

export enum EPizzaTypes {
  ALL = 'all',
  MEAT = 'meat',
  VEGETABLE = 'vegetable',
}

export enum EPizzaThickness {
  THIN = 'thin',
  FAT = 'fat',
}

export enum EPizzaSizes {
  SIZE_26 = '26',
  SIZE_30 = '30',
  SIZE_40 = '40',
}

export interface IPriceItem {
  size: number;
  price: number;
}

export interface IProduct {
  id: number;
  name: string;
  imageUrl: string;
  type: EPizzaTypes;
  dough: EPizzaThickness[];
  prices: IPriceItem[];
}

export interface IProductBasket {
  id: number;
  [EPizzaParams.DOUGH]: EPizzaThickness;
  [EPizzaParams.SIZE]: EPizzaSizes;
  amount: number;
}

export interface IStateProducts {
  stopLoad: boolean;
  filter: EPizzaTypes;
  nextStartNum: number;
  data: IProduct[];
  basket: IProductBasket[];
}

export interface IState {
  products: IStateProducts;
}

export type AppDispatch = typeof store.dispatch;

export enum EPizzaParams {
  DOUGH = 'type-dough',
  SIZE = 'size',
}

export interface IPizzaParamsContent {
  value: EPizzaThickness | EPizzaSizes;
  text: string;
  checked?: boolean;
}

export enum EActionButtonType {
  PLUS = 'plus',
  MINUS = 'minus',
  REMOVE = 'remove',
}