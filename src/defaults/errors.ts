export enum ERROR_CODES {
    'NO_DICE_FOUND' = 'No dice sign found',
}

export const NO_DICE_FOUND_ERROR = new Error(ERROR_CODES.NO_DICE_FOUND);
