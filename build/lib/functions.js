/**
 * Função que converte um número como string em um inteiro.
 * Exemplo: "10" --> 10
 * Caso o parâmetro não represente um número inteiro (ex: "10.1" ou "blabla"),
 * a função retorna o valor booleano FALSE
 */
export function toInteger(value) {
    // tenta converter para inteiro
    const result = Number.parseInt(value);
    // isNan --> https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN
    if (Number.isNaN(result)) {
        // deu erro na conversão, então retorna false
        return { error: true, value: 0 };
    }
    // se chegou aqui, então a conversão para inteiro foi bem sucedida
    return { error: false, value: result };
}
