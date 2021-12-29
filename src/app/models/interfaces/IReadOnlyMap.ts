export interface IReadOnlyMap<TKey, TValue> {
    get(key: TKey): TValue | undefined;

    has(key: TKey): boolean;

    keys(): IterableIterator<TKey>;

    values(): IterableIterator<TValue>;

    entries(): IterableIterator<[TKey, TValue]>;
}
