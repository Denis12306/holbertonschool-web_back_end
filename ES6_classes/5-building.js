export default class Building {
    constructor(sqft) {
        if (new.target !== Building && typeof this.evacuationWarningMessage !== "function") {
            throw new Error("Class extending Building must override evacuationWarningMessage");
        }
        this.sqft = sqft;
    }

    set sqft (sqft) {
        if(typeof sqft === 'number') {
            this._sqft = sqft;
        } else {
            throw new TypeError("sqft must be a number");
        }
    }

    get sqft () {
        return this._sqft;
    }

}
