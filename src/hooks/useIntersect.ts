import { useRef, useEffect, useCallback } from 'react';

export type TCallback = (entry: IntersectionObserverEntry) => void;

const initialOptions: IntersectionObserverInit = {
    root      : null,
    rootMargin: '0px',
    threshold : 0
};

const useIntersect = <TReturn = Element>(callback?: TCallback, optionsData?: Partial<IntersectionObserverInit>, onlyOnce?: boolean) => {
    const intersected = useRef<boolean>(false);
    const targetRef = useRef<TReturn>(null);
    const observer = useRef<null | IntersectionObserver>(null);
    const options = optionsData || initialOptions;

    const handleIntersect = useCallback(
        (entries: Array<IntersectionObserverEntry>) => {
            if(callback) {
                callback(entries[0]);
            }

            if(entries[0] && entries[0].isIntersecting && !intersected.current && observer.current && onlyOnce) {
                observer.current.disconnect();
                observer.current = null;
                intersected.current = true;
            }
        },
        [callback, observer, intersected]
    );

    useEffect(() => {
        if(!intersected.current && !observer.current && targetRef.current) {
            observer.current = new IntersectionObserver(handleIntersect, options);
            // @ts-ignore
            observer.current.observe(targetRef.current);
        }

        return () => {
            if(observer.current) {
                observer.current.disconnect();
                observer.current = null;
            }
        };
    }, [handleIntersect, options, targetRef]);

    return targetRef;
};

export default useIntersect;
