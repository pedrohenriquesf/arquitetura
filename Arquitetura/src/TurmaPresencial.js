import Turma from './Turma.js'; 


export default class TurmaPresencial extends Turma{
constructor({Codigo, Nota, Frequencia  }){
   
    super({Codigo, Nota });
    this.Frequencia - Frequencia;

}
aprovado (){
    if(super.aprovado() && this.Frequencia >= 0.75) return true;
    if(this.Nota > 8 && this.Frequencia >= 0.5) return true;
    return false;
}
}