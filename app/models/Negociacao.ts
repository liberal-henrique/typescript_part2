class Negociacao {
    constructor(
        private _data: Date,
        private _quantidade: number,
        private _valor: number
    ){}   

    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }

    get quantidade(): number {
        return this._quantidade;
    }

    get valor(): number {
        return this._valor;
    }

    get volume(): number {
        return this._quantidade * this._valor;
    }

    public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao {
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }
}

export default Negociacao;

// Another Alternative would be:
// constructor(
//     puclic readonly data: Date,
//     puclic readonly quantidade: number,
//     puclic readonly valor: number,
// )
// If we chose this way, we would remove all 
// get, except the get volume.
