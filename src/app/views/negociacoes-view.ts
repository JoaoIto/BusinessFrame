import { Negociacoes } from "../models/negociacoes";
import { View } from "./view";

export class NegociacoesView extends View<Negociacoes>{

  protected template(model: Negociacoes): string {
    return `
        <table class="table table-hover"> 
            <thead>
                <tr class="header-table" >
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr
            </thead>

            <tbody>
                ${model.lista().map(negociacao => {
                  return `
                    <tr class="body-table">
                        <td>${this.formater(negociacao.data)}</td>
                        <td>${negociacao.quantidade}</td>
                        <td>${negociacao.valor}</td>
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
