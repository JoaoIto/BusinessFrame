import { Negociacoes } from "../models/negociacoes";
import { View } from "./view";

export class NegociacoesView extends View<Negociacoes>{

  protected template(model: Negociacoes): string {
    return `
        <table class="
        w-full
        bg-yellowBgFieldset
        text-greyFontFieldset
        border-solid
        border-2
        border-yellowBorder
        rounded-xl
        "> 
            <thead class="text-xl bg-white border-solid border-2 border-greyFontFieldset p-3">
                <tr class="
                header-table
                w-5/6
                h-12
                " >
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr
            </thead>

            <tbody>
                ${model.lista().map(negociacao => {
                  return `
                    <tr class="
                    body-table
                    w-5/6
                    h-8
                    ">
                        <td class="text-xl bg-white border-solid border-2 border-greyFontFieldset p-3">${this.formater(negociacao.data)}</td>
                        <td class="text-xl bg-white border-solid border-2 border-greyFontFieldset p-3">${negociacao.quantidade}</td>
                        <td class="text-xl bg-white border-solid border-2 border-greyFontFieldset p-3">${negociacao.valor}</td>
                    </tr>    
                  `
                }).join("")}
            </tbody>
        </table>
    `;
  }

  private formater(data: Date): string{
    return new Intl.DateTimeFormat().format(data)
  }
}
