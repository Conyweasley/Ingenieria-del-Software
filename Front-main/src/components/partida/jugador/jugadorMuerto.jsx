function JugadorMuerto(){

  const estiloFondo={
    backgroundColor:'#000000',
    width: '700px', 
    height: '300px', 
    borderRadius: '10px',
  }

  return(
    <div style={estiloFondo}>
      <div
        style={{
          width: '100%', 
          height: '10vh', 
          backgroundImage: 'url("src/assets/hasMuerto.png")', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          display: 'flex',
          justifyContent: 'center', 
          alignItems: 'center',
          borderRadius: '10px',
          marginTop:'110px'
        }}>
      </div>
    </div>
  )
}

export default JugadorMuerto