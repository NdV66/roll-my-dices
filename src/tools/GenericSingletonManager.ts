type TSingletons = { [key: string]: any };

export class GenericSingletonManager {
    private singletons: TSingletons = {};

    constructor(singletons: TSingletons) {
        this.singletons = singletons;
    }

    getSingleton<T>(name: string) {
        const singleton = this.singletons[name];
        return singleton as T;
    }
}
