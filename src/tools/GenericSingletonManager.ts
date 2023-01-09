type TSingletons = { [key: string]: any };

export class GenericSingletonManager {
    private _singletons: TSingletons = {};

    constructor(singletons: TSingletons) {
        this._singletons = singletons;
    }

    getSingleton<T>(name: string) {
        const singleton = this._singletons[name];
        return singleton as T;
    }
}
