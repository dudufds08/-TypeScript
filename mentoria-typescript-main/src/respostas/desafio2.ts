
enum Trabalho {
    Atriz,
    Padeiro
}

type Humano = {
    nome: string,
    idade: number,
    profissao: Trabalho
}

let pessoa0: Humano = {
    nome: 'maria',
    idade: 29,
    profissao: Trabalho.Atriz
};

let pessoa10: Humano = {
    nome: 'roberto',
    idade: 19,
    profissao: Trabalho.Padeiro
};

let pessoa20: Humano = {
    nome: 'laura',
    idade: 32,
    profissao: Trabalho.Atriz
};

let pessoa30: Humano = {
    nome: "carlos",
    idade: 19,
    profissao: Trabalho.Padeiro
}


