import React, { Component, Fragment, createContext, useState } from "react";
import "./App.css";
import { Transition } from "react-spring/renderprops";
import { Toggle } from "Utilities";
import { Modal, Card } from "Elements";
import User from "./User";
import UserProvider from "./UserProvider";

const Header = (styles) => (
  <Card
    style={{
      opacity: styles.opacity,
      background: styles.bg,
      overflow: "hidden",
      height: styles.height,
    }}
  >
    <h1>show</h1>
    <h3>{styles.bg}</h3>
  </Card>
);

function App() {
  return (
    <UserProvider>
      <div className="App">
        <h1>Root</h1>
        <User />
        <section>
          <Toggle>
            {({ toggle, settoggle }) => (
              <>
                <button onClick={settoggle}>show/hide</button>
                <Transition
                  items={toggle}
                  unique={true}
                  from={{ opacity: 0, bg: "#82d8d8", height: "0px" }}
                  enter={{ opacity: 1, bg: "#524763", height: "200px" }}
                  leave={{ opacity: 0, bg: "#82d8d8", height: "0px" }}
                >
                  {(toggle) => toggle && Header}
                </Transition>
              </>
            )}
          </Toggle>
        </section>
        <Toggle>
          {({ toggle, settoggle }) => (
            <>
              <button onClick={settoggle}>Login</button>
              {toggle && (
                <Modal toggle={toggle} setToggle={settoggle}>
                  <h1> modal </h1>
                </Modal>
              )}
            </>
          )}
        </Toggle>
      </div>
    </UserProvider>
  );
}

export default App;
