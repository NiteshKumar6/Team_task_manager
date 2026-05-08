import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {

    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState("");

    const [user, setUser] = useState(null);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [isSignup, setIsSignup] = useState(false);

    const [name, setName] = useState("");
    const [role, setRole] = useState("member");

    const API = "http://localhost:5000/api/tasks";

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async() => {
        try {
            const res = await axios.get(API);
            setTasks(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    const addTask = async() => {

        if (!title) return;

        try {

            await axios.post(API, {
                title,
                assignedTo: "Nitesh",
                status: "Pending",
                dueDate: new Date()
            });

            setTitle("");
            fetchTasks();

        } catch (err) {
            console.log(err);
        }
    };

    const markDone = async(id) => {

        try {

            await axios.put(`${API}/${id}`, {
                status: "Completed"
            });

            fetchTasks();

        } catch (err) {
            console.log(err);
        }
    };

    const deleteTask = async(id) => {

        try {

            await axios.delete(`${API}/${id}`);

            fetchTasks();

        } catch (err) {
            console.log(err);
        }
    };

    const login = async() => {

        try {

            const res = await axios.post(
                "http://localhost:5000/api/auth/login", {
                    email,
                    password
                }
            );

            setUser(res.data);

        } catch (err) {
            alert("Invalid login");
        }
    };

    const signup = async() => {

        try {

            await axios.post(
                "http://localhost:5000/api/auth/signup", {
                    name,
                    email,
                    password,
                    role
                }
            );

            alert("Signup successful");

            setIsSignup(false);

        } catch (err) {
            console.log(err);
        }
    };

    const cardStyle = {
        background: "#fff",
        padding: 20,
        borderRadius: 10,
        width: 150,
        textAlign: "center",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
    };

    const taskCard = {
        background: "#fff",
        padding: 20,
        borderRadius: 10,
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
    };

    // LOGIN / SIGNUP PAGE
    if (!user) {

        return (

            <
            div style = {
                {
                    textAlign: "center",
                    marginTop: 100
                }
            } >

            <
            h2 > { isSignup ? "Signup" : "Login" } <
            /h2>

            {
                isSignup && ( <
                    >
                    <
                    input placeholder = "Name"
                    onChange = {
                        (e) => setName(e.target.value) }
                    />

                    <
                    br / >
                    <
                    br / >

                    <
                    select onChange = {
                        (e) => setRole(e.target.value) }
                    style = {
                        {
                            padding: 10,
                            width: 220
                        }
                    } >
                    <
                    option value = "member" >
                    Member <
                    /option>

                    <
                    option value = "admin" >
                    Admin <
                    /option> <
                    /select>

                    <
                    br / >
                    <
                    br / >
                    <
                    />
                )
            }

            <
            input placeholder = "Email"
            onChange = {
                (e) => setEmail(e.target.value) }
            />

            <
            br / >
            <
            br / >

            <
            input placeholder = "Password"
            type = "password"
            onChange = {
                (e) => setPassword(e.target.value) }
            />

            <
            br / >
            <
            br / >

            <
            button onClick = { isSignup ? signup : login } >
            { isSignup ? "Signup" : "Login" } <
            /button>

            <
            br / >
            <
            br / >

            <
            p style = {
                {
                    cursor: "pointer",
                    color: "blue"
                }
            }
            onClick = {
                () => setIsSignup(!isSignup) } >
            {
                isSignup ?
                "Already have account? Login" :
                    "Create new account"
            } <
            /p>

            <
            /div>
        );
    }

    // MAIN PAGE
    return (

        <
        div style = {
            {
                padding: 30,
                fontFamily: "Arial",
                background: "#eef2f7",
                minHeight: "100vh"
            }
        } >

        <
        h3 style = {
            { textAlign: "center" } } >
        Welcome { user && user.name }({ user && user.role }) <
        /h3>

        <
        h1 style = {
            {
                textAlign: "center",
                marginBottom: 30
            }
        } >
        🚀Team Task Manager <
        /h1>

        { /* Add Task */ } <
        div style = {
            {
                display: "flex",
                justifyContent: "center",
                marginBottom: 30
            }
        } >

        <
        input value = { title }
        placeholder = "Enter your task..."
        onChange = {
            (e) => setTitle(e.target.value) }
        style = {
            {
                padding: 12,
                width: 300,
                borderRadius: 8,
                border: "1px solid #ccc"
            }
        }
        />

        <
        button onClick = { addTask }
        style = {
            {
                marginLeft: 10,
                padding: "12px 20px",
                background: "#4CAF50",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                cursor: "pointer"
            }
        } >
        Add <
        /button>

        <
        /div>

        { /* Dashboard */ } <
        div style = {
            {
                display: "flex",
                justifyContent: "space-around",
                marginBottom: 30
            }
        } >

        <
        div style = { cardStyle } >
        <
        h3 > Total < /h3> <
        p > { tasks.length } < /p> <
        /div>

        <
        div style = {
            {
                ...cardStyle,
                background: "#d4edda"
            }
        } >
        <
        h3 > Completed < /h3>

        <
        p > {
            tasks.filter(
                (t) => t.status === "Completed"
            ).length
        } <
        /p> <
        /div>

        <
        div style = {
            {
                ...cardStyle,
                background: "#f8d7da"
            }
        } >
        <
        h3 > Pending < /h3>

        <
        p > {
            tasks.filter(
                (t) => t.status === "Pending"
            ).length
        } <
        /p> <
        /div>

        <
        /div>

        { /* Tasks */ } <
        div style = {
            {
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: 20
            }
        } >

        {
            tasks.map((t) => (

                <
                div key = { t._id }
                style = { taskCard } >

                <
                h3 > { t.title } < /h3>

                <
                p >
                Status: < b > { t.status } < /b> <
                /p>

                <
                div style = {
                    { marginTop: 10 } } >

                <
                button onClick = {
                    () => markDone(t._id) }
                style = {
                    {
                        padding: 8,
                        background: "#007bff",
                        color: "#fff",
                        border: "none",
                        borderRadius: 6,
                        cursor: "pointer",
                        marginRight: 10
                    }
                } >
                Done <
                /button>

                <
                button onClick = {
                    () => deleteTask(t._id) }
                style = {
                    {
                        padding: 8,
                        background: "red",
                        color: "#fff",
                        border: "none",
                        borderRadius: 6,
                        cursor: "pointer"
                    }
                } >
                Delete <
                /button>

                <
                /div>

                <
                /div>

            ))
        }

        <
        /div>

        <
        /div>
    );
}

export default App;