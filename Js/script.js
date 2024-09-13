
const exerciseList = [
    {group: 'Peito', name: 'Supino reto com barra', series: '3 ou 4', repetitions: '8 a 15', id: 'p'},
    {group: 'Peito', name: 'Supino reto com halteres', series: '3 ou 4', repetitions: '8 a 15', id: 'd'},
    {group: 'Peito', name: 'Supino inclinado com barra', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Peito', name: 'Supino inclinado com halteres', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Peito', name: 'Supino declinado com barra', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Peito', name: 'Supino declinado com halteres', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Peito', name: 'Apoio sobre o solo', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Peito', name: 'Crucifixo reto com halteres', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Peito', name: 'Crucifixo inclinado com halteres', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Peito', name: 'Crossover', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Tríceps', name: 'Tríceps testa', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Tríceps', name: 'Tríceps corda', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Tríceps', name: 'Mergulho em barras paralelas', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Tríceps', name: 'Pulley', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Tríceps', name: 'Tríceps coice', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Tríceps', name: 'Tríceps francês', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Tríceps', name: 'Mergulho no banco', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Tríceps', name: 'Mergulho no banco', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Antebraço', name: 'Rosca de punho', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Antebraço', name: 'Rosca de punho ivertido', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Antebraço', name: 'Rosca de punho ivertido com halteres', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Antebraço', name: 'Rosca de punho com halteres', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Ombro', name: 'Elevação lateral', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Ombro', name: 'Elevação frontal', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Ombro', name: 'Desenvolvimento com halteres', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Ombro', name: 'Desenvolvimento na máquina', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Ombro', name: 'Elevação lateral no cross', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Ombro', name: 'Desenvolvimento frontal com barra', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Trapézio', name: 'Encolhimento de ombro com barra', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Trapézio', name: 'Encolhimento de ombro com halteres', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Perna', name: 'Leg press', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Perna', name: 'Agachamento barra solta', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Perna', name: 'Agachamento sumô', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Perna', name: 'Agachamento búlgaro', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Perna', name: 'Cadeira extensora', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Perna', name: 'Cadeira flexora', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Perna', name: 'Mesa flexora', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Perna', name: 'Cadeira abdutora', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Perna', name: 'Elevação de quadril', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Perna', name: 'Stiff', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Perna', name: 'Elevação de panturrilha em pé', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Perna', name: 'Agachamento livre', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Perna', name: 'Elevação de panturrilha em pé no smith', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Perna', name: 'Afundo com halteres', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Abdominal', name: 'Elevação de pernas', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Abdominal', name: 'Prancha', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Abdominal', name: 'Prancha lateral', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Abdominal', name: 'Prancha lateral', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Abdominal', name: 'Elevação de quadril', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Abdominal', name: 'Abdominal bicicleta', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Abdominal', name: 'Rotação russa', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Costas', name: 'Barra fixa', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Costas', name: 'Barra fixa com pegada aberta', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Costas', name: 'Remada curvada com barra e pegada pronada', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Costas', name: 'Remada curvada com barra e pegada invertida (supinada)', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Costas', name: 'Remada unilateral com halter (remada serrote)', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Costas', name: 'Pullover com halter', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Costas', name: 'Pullover com barra', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Costas', name: 'Remada em pé com a barra T (remada cavalinho)', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Costas', name: 'Remada no banco inclinado com halteres', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Costas', name: 'Remada no Smith', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Costas', name: 'Remada no Smith', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Costas', name: 'Puxada pela frente com o triângulo no pulley', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Costas', name: 'Remada na máquina de cabos', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Costas', name: 'Remada na máquina de cabos', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Bíceps', name: 'Rosca bíceps direta com barra', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Bíceps', name: 'Rosca bíceps direta com barra', series: '3 ou 4', repetitions: '8 a 15'},

];



const div = document.getElementById('list');
const submit = document.getElementById('submit');



const select = document.getElementById('muscleGroup');




const createList = (event) => {
    event.preventDefault();
    
    console.log(muscleGroup.value)
    let checkedIdList = [];
    let chosenList = [];
    let exerciseList2 = [];
    let idList = [];
    let CreateIdList = ['1', '2', '3', '4', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'];
    console.log(idList);
    console.log(checkedIdList);
    console.log(exerciseList2);
  

    
    for (i = 0; i < exerciseList.length; i++){
        if(exerciseList[i].group == select.value){
            
                    let muscleGroup = document.createElement('input');
                    let br = document.createElement('br');
                    let lable = document.createElement('lable');

                    lable.textContent = exerciseList[i].name
                    muscleGroup.type = 'checkbox';
                    muscleGroup.vale = exerciseList[i].name
                    muscleGroup.id = exerciseList[i].group + CreateIdList[i];
                    idList.push(muscleGroup);
                    checkedIdList.push(muscleGroup);
                    exerciseList2.push(exerciseList[i]);
                   
                    
                    div.appendChild(muscleGroup);
                    div.appendChild(lable);
                    div.appendChild(br);
        }
 
        
    }
    const addList = (event) => {
        event.preventDefault();

        for(i = 0; i < exerciseList2.length; i++){
            if(idList[i].checked == true){
                
                if(idList[i].id == checkedIdList[i].id){
                   
                    if(exerciseList2[i].group == select.value){
                    chosenList.push(exerciseList[i]);
                    console.log('t')
                    }

                }

            }
        }
      
        submit.removeEventListener('click', addList);
        submit.addEventListener('click', createList);
       
    }

    submit.removeEventListener('click', createList);
    submit.addEventListener('click', addList);

}

const init = () => {
    submit.addEventListener('click', createList);
  }
  
  
  
  init(); 







