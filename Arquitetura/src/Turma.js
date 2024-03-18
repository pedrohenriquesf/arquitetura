export default class Turma{
    constructor({codigo, nota }) {
        this.Codigo = Codigo;
        this.nota = nota;
    

    }

    aprovado () {return this.nota >= 6; }

}