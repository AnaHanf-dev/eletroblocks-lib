// Implementação substituta: a classe LowPassFilter não estava no TXT fornecido.
class LowPassFilter {
    private alpha: number;
    private last: number;
    private initialized: boolean;

    constructor(alpha: number) {
        this.alpha = alpha;
        this.last = 0;
        this.initialized = false;
    }

    filter(value: number): number {
        if (!this.initialized) {
            this.last = value;
            this.initialized = true;
        } else {
            this.last = this.alpha * value + (1 - this.alpha) * this.last;
        }
        return this.last;
    }
}
