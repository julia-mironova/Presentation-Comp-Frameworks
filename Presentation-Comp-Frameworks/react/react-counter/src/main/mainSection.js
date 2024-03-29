import React from 'react'

const styles = {
  main: {
    backgroundColor: "rgb(101, 172, 182)",
    fontSize: "3rem",
    padding: "0 30%"
  },
  h2: {
    margin: "0",
    paddingLeft: "40%"
  },
  plus: {
    width:"50px",
    height: "50px",
    borderRadius: "25%",
    cursor: "pointer",
    fontSize: "2rem"
  },  
  minus: {
    width:"50px",
    height: "50px",
    borderRadius: "25%",
    cursor: "pointer",
    fontSize: "2rem"
  },
  counter: {
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: "10px"
  }  
}

 function MainSection (props) {
  return (
    <main style={styles.main}>
        <h2 style={styles.h2} id="unswer">{props.num}</h2>
        <div style={styles.counter} className="counter">
          <button className="plus" style={styles.plus} onClick={props.plusClick}>+</button>
          <button className="minus" style={styles.minus} onClick={props.minusClick}>-</button>
        </div>
      </main>
  )
}

export default MainSection