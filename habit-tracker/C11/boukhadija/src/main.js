const form =document.getElementById('habit_form')
const habits=[]
form.addEventListener('submit', (event) => {
    event.preventDefault()
    //console.log(event)
    const data=new FormData(event.target)
    //console.log(event)
    //console.log(Array.from(data.keys()))
    const habit=({name: data.get('habit_name'),targetStreak:Number(data.get('target_streak'))})
    habits.push(habit)
    console.log(JSON.stringify(habits))
    renderHabits(habits)
})
const renderHabits=(habits) =>{
    const habitlist=document.getElementById('habit_list')
    // for(let i=0; i<habits.length; i++){
    //     const habit=habits[i]
    //     const li=document.createElement('li')
    //     li.textContent='${habit.name} Target Streak: ${habit.targetStreak}'
    //     habitlist.appendChild(li)
    // }
    habitlist.innerHTML= (habits.map(habit=>{ 
        return `<li>${habit.name};${habit.targetStreak}</li>`}).join('\n'))
}
