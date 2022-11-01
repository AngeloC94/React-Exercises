import { useMemo } from "react"

const list = [
    {name:"Luki", id: 1, age: 78,},
    {name:"Giuse", id: 2, age: 14,},
    {name:"Giovi", id: 3, age: 35,},
    {name:"Gaga", id: 4, age: 8,},
    {name:"Gugu", id: 5, age: 30,},

]

export default function FilteredList() {
    const users = useMemo(() => list.map((user) => user.age >= 18 && <li key={user.id}>{user.name} - {user.age}</li>), [] )

    return (
        <>
            <ul>
                {users}
            </ul>
        </>
    )
}