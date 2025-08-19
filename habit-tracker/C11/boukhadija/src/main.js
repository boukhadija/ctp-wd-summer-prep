const form =document.getElementById('habit_form')
const habits=[]
const renderHabits=(habits) =>{
    const habitlist=document.getElementById('habit_list')
    habitlist.innerHTML= (habits.map(habit=>{ 
        return `<li>${habit.name};${habit.targetStreak}</li>`}).join('\n'))
}
const savedHabits=JSON.parse(localStorage.getItem("habits"))
if(savedHabits){
    habits.push(...savedHabits)
    renderHabits(habits)}
localStorage.setItem("habits", JSON.stringify(habits))
form.addEventListener('submit', (event) => {
    event.preventDefault()
    const data=new FormData(event.target)
    const habit=({name: data.get('habit_name'),
        targetStreak:Number(data.get('target_streak'))})
    habits.push(habit)
    localStorage.setItem("habits", JSON.stringify(habits))
    console.log(JSON.stringify(habits))
    renderHabits(habits)
})


