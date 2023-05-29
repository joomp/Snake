interface IEventBus<EventType> {
  subscribe<PayloadType>(
    event: EventType,
    callback: (payload: PayloadType) => void,
  ): () => void;
  publish<PayloadType>(event: EventType, payload: PayloadType): void;
}
