import { ROLLS_RESULTS_FONTS } from '../defaults';
import { DiceTypes } from '../types';

export const mapRollToDice = (diceType: DiceTypes, rawResult: number) => ROLLS_RESULTS_FONTS[diceType][rawResult - 1];
