export class ItemWithId {
    private _name: string;
    private _id: number;

    constructor(_name: string, _id: number)
    {
        this._id = _id;
        this._name = _name;
    }

    get id()
    {
        return this._id;
    }

    get name()
    {
        return this._name;
    }
  }