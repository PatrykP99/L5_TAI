class Complex{
    private _re : number;
    private _im : number;

    constructor(re: number, le: number) {
        this._re = re;
        this._im = le;
    }

    add(complex: Complex) : Complex{
        let re = this._re + complex._re;
        let im = this._im + complex._im;
        return new Complex(re,im);
    }

    subtract(complex: Complex) : Complex{
        let re = this._re - complex._re;
        let im = this._im - complex._im;
        return new Complex(re,im);
    }

    modulus() : number {
        return Math.sqrt(Math.pow(this._re, 2) + Math.pow(this._im, 2));
    }

    toString() : void {
        console.log("re " + this._re + ", im " + this._im + "i");
    }

}

const complex1 = new Complex(3,4);
const complex2 = new Complex(2,5);
const complex3 = complex1.add(complex2);
complex3.toString()
const complex4 = complex3.subtract(complex1);
complex4.toString();
console.log(complex4.modulus());
