import { useState, useEffect } from 'react';
import { Observable } from 'rxjs';

export const useStateWithObservableWithInit = <T>(observable: Observable<T>, init: T): T => {
    const [state, setState] = useState<T>(init);

    useEffect(() => {
        const subscription = observable.subscribe(setState);

        return () => {
            console.log('WYCHODZE');
            subscription.unsubscribe();
        };
    }, []);

    return state;
};
