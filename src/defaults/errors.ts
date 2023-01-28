export enum ERROR_CODES {
    'NO_DICE_FOUND' = 'No dice sign found',
    'NOT_FOUND' = 'Not found',
}

export const NO_DICE_FOUND_ERROR = new Error(ERROR_CODES.NO_DICE_FOUND);
export const NOT_FOUND_ERROR = new Error(ERROR_CODES.NOT_FOUND);
