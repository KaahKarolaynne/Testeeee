class Produto{

    constructor(){
        this.arrayProdutos = []; //array - são utilizados para armazenar mais de um valor em uma única variável
    }

    cadastrar() {
        let produto = this.lerDados();

        if(this.validaCampos(produto)){
            this.adicionar(produto);
        }

        console.log(this.arrayProdutos);

        this.listaTabela();
        this.excluir();
    }

    listaTabela() {
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';

        for(let i = 0; i < this.arrayProdutos.length; i++){
        let tr = tbody.insertRow(); //length - sabe a quantidade de resgistro que tem dentro do array.

        let td_produto = tr.insertCell();
        let td_valor = tr.insertCell();


        td_produto.innerText = this.arrayProdutos[i].nomeProduto;
        td_valor.innerText = this.arrayProdutos[i].Valor;


        }

    }

    adicionar(produto){
        this.arrayProdutos.push(produto);

    }

    lerDados(){
        let produto = {}

        produto.nomeProduto = document.getElementById('produto').value;

        produto.Valor = document.getElementById('valor').value;

        return produto;
    }

    validaCampos(produto){
        let msg = '';

        if(produto.nomeProduto == ''){
            msg += 'Informe o nome do produto \n'; //n - quebrar a linha
        }

        if(produto.valor == ''){
            msg += 'Informe o valor do produto \n'; //n - quebrar a linha
        }

        if(msg !=''){
            alert(msg);
            return false
        }

        return true;

    }

    excluir(){
        document.getElementById('produto').value = '';
        produto.Valor = document.getElementById('valor').value = '';
    }

}

var produto = new Produto();