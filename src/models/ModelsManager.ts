import { Models } from '../types';

type TModels = { [key: string]: any };

export class ModelsManagerClass {
    private models: TModels = {};

    constructor(models: TModels) {
        this.models = models;
    }

    getModel<T>(modelName: Models) {
        const model = this.models[modelName];
        return model as T;
    }
}
