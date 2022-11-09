export class ColourObject {
    rgba: string;
    constructor (
        public r:number,
        public g:number,
        public b:number,
        public a:number,
        public name? : string,
        
    ) {
        this.rgba = `rgba(${this.r},${this.g},${this.b},${this.a})`;
    }

    /**
     * getRGBA
     */
    public getRGBA() {
        return `rgba(${this.r},${this.g},${this.b},${this.a})`;
    }

}
