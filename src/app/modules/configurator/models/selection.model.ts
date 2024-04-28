import { CarModel } from './car-model.model';
import { Color } from './color.model';

export interface Selection {
  carModel?: CarModel;
  color?: Color;
}
