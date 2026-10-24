import { useEffect, useRef, useState } from 'react';
import { AppState, AppStateStatus } from 'react-native';

const useAppState = () => {
    const initialAppState = (AppState.currentState ?? 'active') as AppStateStatus;
    const [appState, setAppState] = useState<AppStateStatus>(initialAppState);
    const previousState = useRef<AppStateStatus>(initialAppState);

    useEffect(() => {
        const subscription = AppState.addEventListener(
            'change',
            nextState => {
                console.log(`App State: ${previousState.current} → ${nextState}`);

                if (nextState === 'background') {
                    console.log('App moved to background');
                }

                if (nextState === 'active') {
                    console.log('App moved to foreground');
                }

                previousState.current = nextState;
                setAppState(nextState);
            },
        );

        return () => {
            subscription.remove();
        };
    }, []);

    return appState;
};

export default useAppState;