import { useState, useEffect } from 'react';
import { Observable } from 'rxjs';

export const useStateWithObservable = <T>(init: T, observable: Observable<T>): T => {
    const [state, setState] = useState<T>(init);

    useEffect(() => {
        const subscription = observable.pipe().subscribe(setState);

        return () => {
            subscription.unsubscribe();
        };
    }, []);

    return state;
};
