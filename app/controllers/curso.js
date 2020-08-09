var cursos = [
 {_id: 1, nome: 'Matematica'},
 {_id: 2, nome: 'Algoritmos'},
 {_id: 3, nome: 'História'}, 
 {_id: 4, nome: 'Programação Web'}, 
 {_id: 5, nome: 'Geografia'} 
]

module.exports = function(){
	var controller = {};
	controller.listaCursos = function(req, res){
		res.json(cursos);
	};
	controller.obtemCurso = function(req, res) {
		console.log('Selecionou o curso: ' + req.params.id);
		var idCurso = req.params.id;
		var curso = curso.filter(function(curso){
			return curso._id == idCurso;
		})[0];
		curso ? res.json(curso) : res.status(404).send('Curso não encontrado!');
	};
	return controller;
};