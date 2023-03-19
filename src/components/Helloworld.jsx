import React from 'react'

export default function Helloworld1() {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "yellow",
        justifyContent: "space-around",
        height: 920,
      }}
    >
    <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "wheat",
        }}
      >
    <div>
              <div>
                <p>Sign in to JamWord</p>
              </div>
              <div>
                    <input type="text" placeholder="Student ID"/>
                    <input type="text" placeholder="Password"/>
              </div>
              <div>
              <div>
                    <button type="submit" >
                      SIGN IN
                    </button>
              </div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "whitesmoke",
        }}
      >
        Hello Friend
      </div>
    </div>
  </div>)}


