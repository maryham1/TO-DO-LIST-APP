const section1 = document.querySelector('.section--1');
const todoUl = document.querySelector('.to-do-ul');
const inputTodo = document.querySelector('.inputTodo')
const todoImage = document.querySelector('.todo_image')



const onGoingActivity = document.createElement('div')
onGoingActivity.classList.add('onGoing-activity')
const allActivity = document.createElement('p')
allActivity.textContent = 'All Activity: 0'
const leftItems = document.createElement('p')
leftItems.textContent = 'Left Items: 0'
onGoingActivity.append(allActivity);
onGoingActivity.append(leftItems);
section1.append(onGoingActivity);

// const allActivity = document.querySelector('.all')
// const leftItems = document.querySelector('.left')
const maxNumber = 15
let allCount = 0

inputTodo.addEventListener('keydown',function(e){
    if(e.key === 'Enter' && inputTodo.value !== ''){
        //add max number 
        
        if(todoUl.children.length >= maxNumber ){
            const maxMessage = document.createElement('div');
            maxMessage.innerHTML = `you have reach the maximum number of adding wish List <button class='okay'>okay</button>`
            maxMessage.classList.add('prepend-message')
            section1.prepend(maxMessage)
            inputTodo.value = '';
            document.querySelector('.okay').addEventListener('click',function(){
                maxMessage.remove()
            })
            return;
        }
        const listElement = document.createElement('li')
        //create checkbox
        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox';
        
        //create span
        const span = document.createElement('span');
        span.textContent = inputTodo.value
        //creating cancel button
        const cancelButton = document.createElement('button')
        cancelButton.innerHTML = `<i class="fa fa-trash"></i>`;
        cancelButton.classList.add('removed-button')
        cancelButton.style.display = 'none'
    
        //checked button    
    checkbox.addEventListener('change',function(){
        if(checkbox.checked){
        cancelButton.style.display = 'inline-block'
    }
    else{
        cancelButton.style.display = 'none'
    }
    })
    
    //cancel if checked
    cancelButton.addEventListener('click',function(){
        listElement.remove()
        updateLeftItem(todoUl.children.length)
        updateAllActivity(todoUl.children.length)
        // updateAllActivity(todoUl.children.length)
    })
    
    //adding both the span and xhecbox
        listElement.classList.add('li-item')
        listElement.appendChild(checkbox)
        listElement.appendChild(span)
        listElement.appendChild(cancelButton)
        todoUl.appendChild(listElement)
        allCount++
        updateAllActivity(todoUl.children.length)
        todoImage.style.display = 'none'
        inputTodo.value = ''
        }
})


//functions for the activity and left items 
const updateAllActivity = function (todo){
        if (todo === 0) {
        allActivity.textContent = 'All Activity: Completed 🎉';
        allCount = todo; // reset counter if you want
    } 
    else {
        allActivity.textContent = `All Activity: ${allCount}`;
    }
}   

const updateLeftItem = function(todo){
    allCount = todo
    leftItems.textContent = `Left items: ${allCount}`
    if(allCount === 0){
        todoImage.style.display = 'block'
    }
}
