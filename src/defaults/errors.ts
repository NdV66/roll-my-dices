export enum ERROR_CODES {
    NO_DICE_FOUND = 'No dice sign found',
    NOT_FOUND = 'Not found',
    USE_FATE_INSTEAD = 'Use fate module instead',
}

export const NO_DICE_FOUND_ERROR = new Error(ERROR_CODES.NO_DICE_FOUND);
export const NOT_FOUND_ERROR = new Error(ERROR_CODES.NOT_FOUND);
export const USE_FATE_INSTEAD_ERROR = new Error(ERROR_CODES.USE_FATE_INSTEAD);
