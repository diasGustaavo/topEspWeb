class NegociacoesView extends View {
    constructor(elemento) {

        super(elemento);
    }

    _template(model) {
        console.log(model.negociacoes)
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            
            <tbody>
            ${model.negociacoes.map(negociacao => `
                <tr class="clickableTr">
                    <td>${DateHelper.dataParaTexto(negociacao.data)}</td>
                    <td>${negociacao.quantidade}</td>
                    <td>${negociacao.valor}</td>
                    <td>${negociacao.volume}</td>
                </tr>
            `).join('')}
            </tbody>
            
            <tfoot>
            </tfoot>
        </table>
        `;
    }

}