class EventBus<EventType> implements IEventBus<EventType> {
  private listeners: Map<EventType, Array<(payload: any) => void>> = new Map();

  subscribe<PayloadType>(
    event: EventType,
    callback: (payload: PayloadType) => void,
  ): () => void {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }

    this.listeners.get(event).push(callback);

    return () => {
      const callbacks = this.listeners.get(event);
      const index = callbacks.indexOf(callback);
      if (index !== -1) {
        callbacks.splice(index, 1);
      }
    };
  }

  publish<PayloadType>(event: EventType, payload: PayloadType): void {
    const callbacks = this.listeners.get(event);
    if (callbacks) {
      callbacks.forEach((callback) => callback(payload));
    }
  }
}
