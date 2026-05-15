fetch("./data/projects.json")

.then(response => response.json())

.then(projects => {

  console.log("Projetos carregados:", projects);

});