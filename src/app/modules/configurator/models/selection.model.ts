import { CarModel } from './car-model.model';
import { Color } from './color.model';
import { Config } from './config.model';

export interface Selection {
  carModel?: CarModel;
  color?: Color;
  config?: Config;
  towHitch: boolean;
  yoke: boolean;
}
