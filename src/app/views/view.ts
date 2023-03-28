export abstract class View<T>{

    protected elemento: HTMLElement | null;

    constructor(seletor: string){
        this.elemento = document.querySelector(seletor);
    }

    update(model: T): void {
        if (this.elemento) {
            const template = this.template(model);
            this.elemento.innerHTML = template;
        }
    }

    abstract template(model: T): string;
}