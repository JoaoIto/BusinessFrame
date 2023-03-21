export class MessageView {

    private elemento: HTMLElement | null;

    constructor(selector: string) {
        this.elemento = document.querySelector(selector);
    }

    template(model: string): string {
        return `
            <p class="alert alert-info">${model}</p>
        `;
    }

    update(model: string): void {
        if (this.elemento) {
            const template = this.template(model);
            this.elemento.innerHTML = template;
        }
    }
}
