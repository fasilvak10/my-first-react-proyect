import React from "react";
import ReactDom from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
import Product, { NavBar } from "./Product";
import { Button } from "./Button";
import { TaskCard } from "./Task";
import { Saludar } from "./Saludar";
import { Post } from "./Post";
import { useState, useEffect } from "react";

const rootElement = document.getElementById("root");
const root = ReactDom.createRoot(rootElement);

function GGG() {
  const user = {
    firstName: "Ryan",
    lastName: "Mallago",
  };

  return (
    <div>
      <h1>{user.firstName}</h1>
      <h3>{user.lastName}</h3>
    </div>
  );
}

const handleChance = (e) => {
  console.log(e.target.value);
};

const doubleClick = (e) => {
  console.log("twicera");
};

const enviarDatos = (e) => {
  const nombre = document.querySelector("#name").value;
  e.preventDefault();
  console.log(nombre);
  document.getElementById("name").value = "";
};

const user = [
  {
    id: 1,
    name: "Facundo",
    image: "https://robohash.org/user 1",
  },
  {
    id: 2,
    name: "Hernan",
    image: "https://robohash.org/user 2",
  },
  {
    id: 3,
    name: "Robert",
    image: "https://robohash.org/user 5",
  },
];

function Counter() {
  const [counter, setCounter] = useState(0);
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    console.log("render");
  }, [counter]);

  return (
    <div>
      <hr />
      <h1> Counter: {counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Summar
      </button>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        Restar
      </button>
      <button
        onClick={() => {
          setCounter(10);
        }}
      >
        Reiniciar
      </button>
      <hr />
      <input onChange={(e) => setMensaje(e.target.value)}></input>
      <button onClick={() => alert("el mensaje es " + mensaje)}>Save</button>
    </div>
  );
}

root.render(
  <>
    {
      <>
        <TaskCard ready={true} />
        <Saludar></Saludar>
        <Button text="Saludar"></Button>
        <div style={{ justifyContent: "left", paddingTop: "10px" }}>
          {" "}
          <input
            className="Karro"
            id="Hola"
            onChange={(e) => {
              console.log(e.target.value);
            }}
            onClick={handleChance}
          ></input>
          <input
            style={{ marginLeft: "5px" }}
            onDoubleClick={doubleClick}
          ></input>
        </div>
        <form onSubmit={enviarDatos}>
          <h1>Registro de usuario</h1>
          <input
            style={{ marginRight: "5px" }}
            id={"name"}
            className="k"
          ></input>
          <button>Send</button>
        </form>
        <div style={{ justifyContent: "left", paddingTop: "10px" }}>
          <Post />
        </div>

        <div>
          {user.map((i, index) => {
            return (
              <div key={index}>
                <h3>{i.name}</h3>
                <img src={i.image} />
              </div>
            );
          })}
        </div>
        <div>
          <Counter />
        </div>
      </>
    }

    {/*     <Button text='Click me'/>
    <Button text='Pay' />
    <Button text='Go to' />
    <Button text= '' name="joe" /> */}

    {/* { <UserCard
      name="Mariscaal"
      amount={3000}
      married={true}
      points={[99, 33.3, 22.2]}
      address={{ street: "123 Main Street", city: "New York" }}
      greet={function () {
        alert("Hello");
      }}
    /> } */}
  </>
);
