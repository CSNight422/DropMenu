const bodyRef = document.querySelector('body');


let dropsCreated = 0;
const createMenu = (state) =>({
    createMenu : function(bo){
        const createDiv = document.createElement('div');

        const toggleButton = document.createElement('button');
        toggleButton.textContent = 'toggle';
        toggleButton.className = `id${dropsCreated} menu`
        toggleButton.id = `${state.theId}`

        createDiv.classList.add('One')
        console.log('test');
        bodyRef.appendChild(toggleButton);
        bodyRef.appendChild(createDiv);

        for(let i = 0; i < state.number; i++){
        
            const createButton = document.createElement('button');
            createButton.style.visibility = 'hidden';
            createButton.className = 'drop';
            createButton.textContent = `Item ${i+1}`;
            createDiv.appendChild(createButton);
            state.buttonArr.push(createButton);
        }
    }
});
const toggleButtonsOff = (state) => ({
    toggleButtons: function(){

        state.buttonArr.forEach(node => {
            node.style.visbility = 'hidden';
        });
        
    }
});
const scan = (state)=>({
    scan : function(){
        const dropButton = document.getElementById(state.theId)
        console.log(dropButton)
        window.addEventListener('click', function(e){
            if(dropButton.contains(e.target)){
                state.buttonArr.forEach(node => {
                    node.style.visibility = 'visible';
                });
            }
            else{
                state.buttonArr.forEach(node => {
                    node.style.visibility = 'hidden';

                });
            }
        })
    }
});
const createDropDown = (amount, id, objName) => {
    let state = {
        theId: id,
        number: amount,
        buttonArr : [],
        thisObjName : objName
    }
    dropsCreated += 1;
    return Object.assign(
        {},
        createMenu(state),
        toggleButtonsOff(state),
        scan(state)
    )
} 
let test = createDropDown(2, 'clown', 'test');
test.createMenu();
let boink = createDropDown(8, 'mime', 'boink');
boink.createMenu();
boink.scan();
test.scan();
