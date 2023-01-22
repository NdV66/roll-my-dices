const REGEXP = /^(\+|-){0,1}\d+$/;

export const testIfModIsOk = (value: string) => REGEXP.test(value);
