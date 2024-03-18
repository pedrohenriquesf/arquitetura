import Aluno from'./src/Aluno.js';
import Aluno from './src/Turma.js';



let nome = 'Pedro',
    login ='pedroh',
    ra = '2053390',
    a = new Aluno({nome, login, ra });


    a.add_turma(new Turma({codigo: 't1', nota: 6}));
    a.add_turma(new Turma({codigo: 't2', nota: 4}));
    a.add_turma(new Turma({codigo: 't3', nota: 10}));
    a.add_turma(new Turma({codigo: 't4', nota: 7}));
    


    a.add_turma(new Turma({codigo: 'p1', nota: 6, frequencia: 0.5}));
    a.add_turma(new Turma({codigo: 'p2', nota: 4, frequencia: 0.7}));
    a.add_turma(new Turma({codigo: 'p3', nota: 10, frequencia: 0.75}));
    a.add_turma(new Turma({codigo: 'p4', nota: 7, frequencia: 0.8}));
    a.add_turma(new Turma({codigo: 'p5', nota: 7, frequencia: 0.5}));
    a.add_turma(new Turma({codigo: 'p5', nota: 7, frequencia: 0.4}));

    a.report();