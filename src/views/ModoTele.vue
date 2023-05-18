<template>
  <div class="tele">
    <h2>Teleoperación</h2>
    <div class="row2">
      <div class="column2">
        
        <camt>Videocámara izquierda AWS Deepracer</camt>
        <div class="box camaraizq">

        </div>
        <h4>Control teleoperación</h4>
        <div class="box joy">
          <div id="joystick" style="width:100%">
            <svg width="100%" height="100%" viewBox="0 0 100 100">
              
              <circle cx="50" cy="50" r="50" fill="url(#grad1)" />
              <circle cx="50" cy="50" r="47" fill="url(#grad2)" stroke="#167ed8" stroke-width="0.8px" />
              <circle cx="50" cy="50" r="44" fill="url(#grad3)" />
              <circle cx="50" cy="50" r="20" fill="white" stroke="#167ed8" stroke-width="0.5px"
                onclick="alert('CENTER');" />
              <path d="M50,10 58,22 43,22Z" fill="#167ed8" onclick="alert('UP');" />
              <path d="M50,90 58,78 43,78Z" fill="#167ed8" onclick="alert('DOWN');" />
              <path d="M10,52 22,60 22,46Z" fill="#167ed8" onclick="alert('LEFT');" />
              <path d="M90,52 78,60 78,46Z" fill="#167ed8" onclick="alert('RIGHT');" />
            </svg>
          </div>
        </div>
      </div>
      <div class="column2">
        <camt>Videocámara derecha AWS Deepracer</camt>

        <div class="box camarader">

        </div>

      
      <camt>Datos sensor LÌDAR</camt>

      <div class="box datoslidar">



      </div>
      </div>
    </div>
  </div>
</template>
    
<script>

</script>
    

<style >

.tele{
  margin-top: 3%;
}
.row2 {
  display: flex;
  
}

/* Create two equal columns that sits next to each other */
.column2 {
  flex: 50%;
  
}
camt{
  margin-left: 80px;
  margin-bottom: 0%
}
h4{
  margin: 20px 230px 20px 230px;
}
h2{
  margin-left: 30px;
  padding: 5px;
}

.box {

  background: #ffffff;
  box-shadow: 0px 14px 80px rgba(53, 54, 80, 0.2);
  border-radius: 30px;
  transition: all .3s;
}

.camaraizq {
  width: 400px;
  margin: 20px 75px;
  padding: 100px 500px 250px 70px;
}

.camarader {
  width: 400px;
  margin: 20px 45px;
  padding: 100px 500px 250px 70px;
}

.joy {
  width: 400px;
  margin: 20px 150px;
  padding: 80px 120px 80px 120px;
}
.datoslidar{
  width: 400px;
  margin: 20px 45px;
  padding: 100px 500px 250px 70px;
}
</style>