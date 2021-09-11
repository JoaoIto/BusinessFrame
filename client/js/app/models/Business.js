class Business {
  
    contructor(date, much, value){

        this._date = new Date(data.getTime());
        this._much = much;
        this._value = value;
    }

    get volumn(much, value) {

        return (this._much * this._value);
    }

    get date() {

        return new Date(this._date.getTime()) ;
    }

    get much() {

        return this._much;
    }

    get value() {

        return this._value;
    }
}