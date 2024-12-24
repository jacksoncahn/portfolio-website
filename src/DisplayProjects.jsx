import {useState, useEffect} from "react"

export function Projects() {
    
    const [todo, setTodo] = useState(null);
    const [karm, setKarm] = useState(null);
    const [mibly, setMibly] = useState(null);
    const [senior, setSenior] = useState(null);

    function details(project) {
        if (project == "senior project") {
            const returnable = SeniorProject()
            setSenior(returnable)
            setTodo(null)
            setKarm(null)
            setMibly(null)
        } else if (project == "karmalyze") {
            const returnable = Karmalyze()
            setKarm(returnable)
            setSenior(null)
            setTodo(null)
            setMibly(null)
        } else if (project == "todo app") {
            const returnable = TodoApp()
            setTodo(returnable)
            setSenior(null)
            setKarm(null)
            setMibly(null)
        } else if (project == "mibly") {
            const returnable = Mibly()
            setMibly(returnable)
            setTodo(null)
            setSenior(null)
            setKarm(null)
        }
    }

    return (
        <div className = "projects">
            <h2 className = "projectsheader">Projects</h2>
            <div className = "projectnav">
                <button onClick={() => details("senior project")}>Senior Project (High School)</button> |
                <button onClick={() => details("karmalyze")}>Karmalyze</button> |
                <button onClick={() => details("todo app")}>Mibly</button> |
                <button onClick={() => details("mibly")}>Todo App</button>
            </div>
            <div className = "details">{todo}{karm}{senior}{mibly}</div>
        </div>
    )
}

function Karmalyze() {
    return (
        <p className = "blurb">
        Karmalyze is an interactive platform that evaluates user-provided actions and generates a "karma score" based on their ethical impact. By using OpenAI and Firebase, Karmalyze provides users with insightful feedback on the morality of their actions, helping them reflect on their decisions.
        </p>
    );
}

function Mibly() {
    return (
        <p className = "blurb">Space-Invaders inspired game made with python and pygame.</p>
    );
}

function TodoApp() {
    return (
        <p className = "blurb">This web application allows users to create and store todos. It uses email/password authentication to match a user with their data, and subsequently fetch and display their saved tasks. It is hosted on Firebase, and was created using Vite’s build tools and React.
            </p>
    );
}

function SeniorProject() {
    return (
        <p className = "blurb">For my Senior Project in High School, I made a 3D recreation of the school's commons area, allowing a single player to explore and interact with the environment. The player plays as a gnome character, and can move through the environment. The game also includes a basic air hockey game for added engagement. It offers a mix of exploration and lighthearted gameplay for a fun experience.
            </p>
    );
}