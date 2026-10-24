// Create a reusable event emitter for cart events
type Listener<T = any> = (data: T) => void;

class EventEmitter {
    private events: Record<string, Listener[]> = {};

    // Register a listener for an event
    on<T>(event: string, listener: Listener<T>) {
        if (!this.events[event]) {
            this.events[event] = [];
        }

        this.events[event].push(listener);

        return () => this.off(event, listener);
    }

    // Trigger an event and pass data to all listeners
    emit<T>(event: string, data: T) {
        this.events[event]?.forEach(listener => {
            listener(data);
        });
    }

    // Remove a registered listener
    off<T>(event: string, listener: Listener<T>) {
        this.events[event] = this.events[event]?.filter(
            item => item !== listener,
        ) || [];

    }
}

// Create a shared event emitter instance for cart events
export const cartEvents = new EventEmitter();