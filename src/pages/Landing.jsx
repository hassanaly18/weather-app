import React from 'react'

const Landing = () => {
  return (
    <div style={styles.container} >
        <h1 style={styles.title}>
            Weather App
        </h1>
        <p style={styles.subtitle}>
            Get real-time weather updates for any location in the world.
        </p>
        <button>
            Get Started
            
        </button>
    </div>
  )
}

const styles ={
    container:{
        minHeight: "100vh",
        background: "linear-gradient(to right,rgb(36, 38, 41),rgb(8, 28, 29))",
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        alignItems: "center",
        // width:"100%"
        padding: "3rem",
    },
    title:{
        fontSize: "2rem",
        fontWeight: "bold",
        marginBottom: "1rem",
    },
    subtitle: {
        fontSize: "1.5rem",
        marginBottom: "2rem",
        maxWidth: "500px"
    }
}

export default Landing