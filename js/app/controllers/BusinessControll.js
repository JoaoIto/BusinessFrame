class BusinessController {
  constructor() {
    const $ = document.querySelector.bind(document);

    this._inputDate = $("#data");
    this._inputMuch = $("#quantidade");
    this._inputValue = $("#valor");
  }
  add(event) {
    event.preventDefault();

    let business = new Business(
      DateHelper.textUpdate(this._inputDate.value),
      this._inputMuch.value,
      this._inputValue.value
    );

    console.log(business);
    console.log(DateHelper.dateUptext(business.date));
  }
}
