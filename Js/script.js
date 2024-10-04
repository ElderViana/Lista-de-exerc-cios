
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
    {group: 'Trapézio', name: 'Encolhimento de ombros com barra frontal', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Trapézio', name: 'Encolhimento de ombro com halteres', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Trapézio', name: 'Encolhimento de ombros com barra por trás', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Trapézio', name: 'Remada alta com anilha', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Trapézio', name: 'Remada alta com a barra W', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Trapézio', name: 'Crucifixo invertido', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Trapézio', name: 'Arnold press', series: '3 ou 4', repetitions: '8 a 15'},
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
    {group: 'Bíceps', name: 'Rosca bíceps direta com halteres', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Bíceps', name: 'Rosca concentrada', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Bíceps', name: 'Rosca Scott', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Bíceps', name: 'Rosca com halteres no banco inclinado', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Bíceps', name: 'Rosca martelo no banco inclinado', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Bíceps', name: 'Rosca com barra W', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Bíceps', name: 'Rosca marterlo', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Bíceps', name: 'Rosca marterlo alternado', series: '3 ou 4', repetitions: '8 a 15'},
    {group: 'Bíceps', name: 'Rosca bíceps apoiado no banco Scott e com a barra EZ', series: '3 ou 4', repetitions: '8 a 15'}

];



const div = document.getElementById('list');
const submit = document.getElementById('submit');
const submit2 = document.getElementById('submit2');
const submit3 = document.getElementById('submit3');


const selectModel = document.getElementById('model');
const selectWeekDays = document.getElementById('weekDays');
const selectMuscleGroup = document.getElementById('muscleGroup');






const createList = (event) => {
    event.preventDefault();

    let model = selectModel.value
    let model2 = selectModel.value
    let weekDays = selectWeekDays.value
    let weekDays2 = selectWeekDays.value

/*Garantindo que só seja possível alterar o molelo de treino e a quantidade de dias da semana se a lista de exercícios estiver vazia*/
    let chosenList2 = JSON.parse(localStorage.getItem('chosenList'));
 
    if(selectModel.value != model2 || selectWeekDays.value != weekDays2 && chosenList2.length != 0){
        alert("Por favor exclua a lista de execícios antes de escolher outro modelo de treino ou outro modelo de dias da semana");
    }else{
        localStorage.setItem('model', JSON.stringify(model));
        localStorage.setItem('weekDays', JSON.stringify(weekDays));
        }


    let checkedIdList = [];
    let exerciseList2 = [];
    let idList = [];
    let CreateIdList = ['1', '2', '3', '4', '6', '7', '8', '9'];
    let groupList = ['Peito', 'Tríceps', 'Bíceps', 'Costas', 'Perna', 'Antebraço', 'Ombro', 'Antebraço', 'Trapézio', 'Abdominal'];
    let selectGroupList = JSON.parse(localStorage.getItem('selectGroupList')) || [];
    let frequentList = [];
    console.log(frequentList)
  

    for(q = 0; q < selectGroupList.length; q++){
        if(selectGroupList[q] == selectMuscleGroup.value){
            frequentList.push(selectMuscleGroup.value);
        }
        
    }

    if(frequentList.length != 0){
        alert('Por favor exclua os grupos' + ' ' + frequentList )
    }    

    switch(selectMuscleGroup.value){

        case groupList[0]: selectGroupList.push(selectMuscleGroup.value);
        break;
        case groupList[1]: selectGroupList.push(selectMuscleGroup.value);
        break;
        case groupList[2]: selectGroupList.push(selectMuscleGroup.value);
        break;
        case groupList[3]: selectGroupList.push(selectMuscleGroup.value);
        break;
        case groupList[4]: selectGroupList.push(selectMuscleGroup.value);
        break;
        case groupList[5]: selectGroupList.push(selectMuscleGroup.value);
        break;
        case groupList[6]: selectGroupList.push(selectMuscleGroup.value);
        break;
        case groupList[7]: selectGroupList.push(selectMuscleGroup.value);
        break;
        case groupList[8]: selectGroupList.push(selectMuscleGroup.value);
        break;
        case groupList[9]: selectGroupList.push(selectMuscleGroup.value);
        break;
        

    }
    
    
    localStorage.setItem('selectGroupList', JSON.stringify(selectGroupList));
    for (i = 0; i < exerciseList.length; i++){
        if(CreateIdList[i] < '9'){
            CreateIdList.push(CreateIdList[i] + CreateIdList.length);
        }
        
        if(exerciseList[i].group == selectMuscleGroup.value){
            
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
                   
                    if(exerciseList2[i].group == selectMuscleGroup.value){
                        let chosenList = JSON.parse(localStorage.getItem('chosenList')) || [];
                        chosenList.push(exerciseList2[i]);
                        localStorage.setItem('chosenList', JSON.stringify(chosenList));
                      

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




let model2 = JSON.parse(localStorage.getItem('model'));
let weekDays2 = JSON.parse(localStorage.getItem('weekDays'));
console.log(model2, weekDays2);

const select = () => {

    if(model2 != '' || weekDays2 != '') {
        document.getElementById('model').value =  JSON.parse(localStorage.getItem('model'));
        document.getElementById('weekDays').value =  JSON.parse(localStorage.getItem('weekDays'));
    }

}




const deleteList = (index) => {
   
    let selectGroupList = JSON.parse(localStorage.getItem('selectGroupList')) || [];

       let chosenList = JSON.parse(localStorage.getItem('chosenList')) || [];
  
    selectGroupList.splice(index, 1);
    chosenList.splice(index, 1);
  
    localStorage.setItem('selectGroupList', JSON.stringify(selectGroupList));
    localStorage.setItem('chosenList', JSON.stringify(chosenList));
   
  }
  let selectGroupList = JSON.parse(localStorage.getItem('selectGroupList')) || [];
  let chosenList = JSON.parse(localStorage.getItem('chosenList')) || [];
for(u = 0; u < selectGroupList.length; u++){
    //deleteList(u)
}
for(y = 0; y < chosenList.length; y++){
    //deleteList(y)
}






 const createTable = (event) => {

    event.preventDefault(event);

    const table1 = document.getElementById('exerciseList1');
    const table2 = document.getElementById('exerciseList2');
    const table3 = document.getElementById('exerciseList3');
    const table4 = document.getElementById('exerciseList4');
    const table5 = document.getElementById('exerciseList5');
    const table6 = document.getElementById('exerciseList6');

    const tbody1 = table1.querySelector('tbody');
    const tbody2 = table2.querySelector('tbody');
    const tbody3 = table3.querySelector('tbody');
    const tbody4 = table4.querySelector('tbody');
    const tbody5 = table5.querySelector('tbody');
    const tbody6 = table6.querySelector('tbody');

    let tableList = [tbody1, tbody2, tbody3, tbody4, tbody5,tbody6];
    let group1 = [];
    let group2 = [];
    let group3 = [];
    let group4 = [];
    let group5 = [];
    let group6 = [];
    let group7 = [];
    let group8 = [];
    const chosenList = JSON.parse(localStorage.getItem('chosenList'))|| [];

    chosenList.forEach((chosen) => {

        if(chosen.group == 'Peito' || chosen.group == 'Tríceps' || chosen.group == 'Antebraço' || chosen.group == 'Abdominal'){
            group1.push(chosen);
        }
        if(chosen.group == 'Costas' || chosen.group == 'Bíceps' || chosen.group == 'Ombro' || chosen.group == 'Abdominal'){
            group1.push(chosen);
        }
        if(chosen.group == 'Perna'){
            group1.push(chosen);
        }
        if(chosen.group == 'Peito'){
            group1.push(chosen);
        }
        if(chosen.group == 'C'){
            group1.push(chosen);
        }
        if(chosen.group == 'Perna'){
            group1.push(chosen);
        }
        if(chosen.group == 'Perna'){
            group1.push(chosen);
        }
   

    });

console.log(group1);

  
  
    for( u = 0; u < tableList.length; u++){

       

        if(weekDays2 == '5 dias'){
            if(model2 == 'ABC'){
                tableList[u].innerHTML = 
                `<tr>
                <th>Treino1: Peito + Tríceps + Antebraço + Abdominal</th>
                <th>Quantidade de séries</th>
                <th>Quantidade de repetições</th>  
                </tr>`;
              
                chosenList.forEach((chosenList, index) => {
                    
                const taskContent = 
                `<tr>
                    <td>${chosenList.name}</td>
                    <td>${chosenList.series}</td>
                    <td>${chosenList.repetitions}</td>
                </tr>`;
                const row = tableList[u].insertRow();
                row.innerHTML = taskContent;
                    
              });
            
            }
    
            if(model2 == 'ABCDE'){
                tableList[u].innerHTML = 
                `<tr>
                <th>Treino1: ${selectMuscleGroup.value} + tríceps + antebraço + abdominal</th>
                <th>Quantidade de séries</th>
                <th>Quantidade de repetições</th>  
                </tr>`;
        
                chosenList.forEach((chosenList, index) => {
                const taskContent = 
                `<tr>
                    <td>${chosenList.name}</td>
                    <td>${chosenList.series}</td>
                    <td>${chosenList.repetitions}</td>
                </tr>`;
                const row = tableList[u].insertRow();
                row.innerHTML = taskContent;
            
              });
              
            }

         

        }

        if(weekDays2== '6 dias'){
            if(model2 == 'ABC'){
                tableList[u].innerHTML = 
                `<tr>
                <th>Treino1: ${selectMuscleGroup.value} + tríceps + antebraço + abdominal</th>
                <th>Quantidade de séries</th>
                <th>Quantidade de repetições</th>  
                </tr>`;
              
                chosenList.forEach((chosenList, index) => {
                    if(chosenList.group == 'Peito' || chosenList.group == 'Tríceps' || chosenList.group == 'Antebraço'){
                const taskContent = 
                `<tr>
                    <td>${chosenList.name}</td>
                    <td>${chosenList.series}</td>
                    <td>${chosenList.repetitions}</td>
                </tr>`;
                const row = tableList[u].insertRow();
                row.innerHTML = taskContent;
                    }
            
              });
            
            
            }
    
            if(model2 == 'ABCDE'){
                tableList[u].innerHTML = 
                `<tr>
                <th>Treino1: ${selectMuscleGroup.value} + tríceps + antebraço + abdominal</th>
                <th>Quantidade de séries</th>
                <th>Quantidade de repetições</th>  
                </tr>`;
        
                chosenList.forEach((chosenList, index) => {
                const taskContent = 
                `<tr>
                    <td>${chosenList.name}</td>
                    <td>${chosenList.series}</td>
                    <td>${chosenList.repetitions}</td>
                </tr>`;
                const row = tableList[u].insertRow();
                row.innerHTML = taskContent;
            
              });
              
            }

            
        }

     
       
      
    }
    console.log(chosenList)
}


const cleanList = () => {}


const init = () => {

    submit.addEventListener('click', createList); 
    submit2.addEventListener('click', cleanList);
    submit3.addEventListener('click', createTable);
    select();

}

init(); 