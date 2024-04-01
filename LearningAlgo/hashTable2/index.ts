class LinkedEntry {
    key: string;
    value: number;
    rest: LinkedEntry | null;

    constructor(key, value, rest = null) {
        this.key = key;
        this.value = value;
        this.rest = rest;
    }
}