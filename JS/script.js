$(document).ready(
    () => {
        $('#pesquisar').click(
            () => {
                const cepInformado = $('#cep').val();
                const urlAPI = "https://viacep.com.br/ws/" + cepInformado + "/json/";
                
                fetch(urlAPI).then(
                    (informacoes) => {
                        informacoes.json().then(
                            (enderecoViaCep) => {
                                $('#logradouro').html(enderecoViaCep.logradouro);
                                $('#bairro').html(enderecoViaCep.bairro);
                                $('#localidade').html(enderecoViaCep.localidade);
                                $('#uf').html(enderecoViaCep.uf);
                            }
                        );
                    }
                );
            }
        );
    }
);