export abstract class View<T>{

    protected elemento: HTMLElement | null;
    private escapar: boolean = false
    constructor(seletor: string, escapar?: boolean){
        this.elemento = document.querySelector(seletor);
        if(escapar){
            this.escapar = escapar;
        }
    }

    public update(model: T): void {
        let template = this.template(model);
        if (this.elemento) {
            this.elemento.innerHTML = template;
        }
        if(this.escapar){
            template = template
            .replace(/<script>[\s\S]*?<\/script>/, '')
        }
        return
    }

    protected abstract template(model: T): string;
}