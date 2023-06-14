<template>
  
  <div class="row">
    <div class="Parametros">
      <div class="column">
        <h2>Configuración inicial de parámetros</h2>
        <br><br>
        <h3>Modo de operación</h3>
        <div class="box modo">
          <div class="toggleWrapper">
            <input type="checkbox" class="dn" id="dn">
            <label for="dn" class="toggle">
              <span class="toggle__handler"></span>
            </label>
          </div>
          <label for="nombrepkg"> &nbsp;&nbsp; Nombre del paquete </label>
          <input type="text" id="nombrepkg" name="nombrepkg">
        </div>

        <br>
        <h3>Parámetros de Odometría</h3>
        <br>
        <div class="box odometria">

          <label for="velmaxlineal"> Máxima velocidad lineal deseada </label>
          <input type="number" id="velmaxlineal" name="velmaxlineal">
          <br> 
          <label for="velmaxangular"> Máxima velocidad angular deseada </label>
          <input type="number" id="velmaxlineal" name="velmaxlineal">

        </div>

        <button type="submit" value="Guardar" class="boton" style="color:#FFFF" > Aplicar </button>

      </div>
      <div class="column">
        <br><br><br><br>
        <h3>Parámetros LiDAR</h3>
        <div class="box lidar">
          <h5>Campos de visión</h5>
          <br>
          <label for="rangomin"> Min </label>&nbsp;&nbsp; 
          <input type="number" id="rangomin" name="rangomin">
          <br><br>
          <label for="rangomax"> Máx </label> &nbsp;
          <input type="number" id="rangomax" name="rangomax">
          <br><br>
          <h5>Rango Máximo</h5>
          <br>
          <label for="vol"> Rango (2m - 10m):</label>
          <input type="range">
        </div>
        <br>
        <h3>Eleccion de Cámaras</h3>
        <div class="box cameras">
          <label class="cyberpunk-checkbox-label">
            <input class="cyberpunk-checkbox" type="checkbox">
            Usar cámara izquierda</label>

          <label class="cyberpunk-checkbox-label">
            <input class="cyberpunk-checkbox" type="checkbox">
            Usar cámara derecha</label>

          <label class="cyberpunk-checkbox-label">
            <input class="cyberpunk-checkbox" type="checkbox">
            Usar cámara estéreo (dos) </label>
        </div>


      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ConfParameters',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap');

.Parametros {
  display: flex;
  font-family: Raleway
}

.row {
  display: flex;
}

.column {
  margin-top: 4%;
  flex: 50%;
}

h3 {
  margin: 25px 80px;
}


.box {

  background: #ffffff;
  box-shadow: 0px 14px 80px rgba(53, 54, 80, 0.2);
  border-radius: 30px;
  transition: all .3s;
}

.modo {
  width: 400px;
  margin: 20px 75px;
  padding: 60px 80px 10px 1px;
}

.cameras {
  width: 400px;
  margin: 20px 75px;
  padding: 40px 40px 20px 50px;
}

.lidar {
  width: 400px;
  margin: 20px 75px;
  padding: 30px 60px 20px 60px;
}

.odometria {
  width: 400px;
  margin: 20px 75px;
  padding: 30px 60px 20px 60px;
}

.boton{
    font-size: 0.9rem;
    margin: 50px 200px;
    letter-spacing: 0.05rem;
    padding: 10px 50px;
    background-color: #167ed8;
    border-radius: 30px;
}

/*----------Switch Toggle-------------*/
.toggleWrapper {
  position: relative;
  top: 50%;
  left: 50%;
  overflow: hidden;
  padding: 0 200px;
  transform: translate3d(-50%, -50%, 0);
  color: white;
}

.toggleWrapper input {
  position: relative;
  left: -99em;
}

.toggle {
  cursor: pointer;
  display: inline-block;
  position: relative;
  width: 90px;
  height: 50px;
  background-color: #167ed8;
  border-radius: 84px;
  transition: background-color 200ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

.toggle:before {
  content: 'Teleoperado';
  position: absolute;
  left: -120px;
  top: 15px;
  font-size: 18px;
  color: #167ed8;
}

.toggle:after {
  content: 'Autónomo';
  position: absolute;
  right: -110px;
  top: 15px;
  font-size: 18px;
  color: #092238;
}

nombrepkg{
  margin: 20px;
}

.toggle__handler {
  display: inline-block;
  position: relative;
  z-index: 1;
  top: 3px;
  left: 3px;
  width: 44px;
  height: 44px;
  background-color: #ffffff;
  border-radius: 50px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, .3);
  transition: all 400ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transform: rotate(-45deg);
}


input:checked+.toggle {
  background-color: #167ed8
}

input:checked+.toggle:before {
  color: #06223a;
}

input:checked+.toggle:after {
  color: #167ed8;
}

input:checked+.toggle .toggle__handler {
  background-color: #ffffff;
  transform: translate3d(40px, 0, 0) rotate(0);
}

/*----------Checkbox-------------*/

.cyberpunk-button {
  background-color: #167ed8;
  color: #fff;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  padding: 10px 25px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  margin: auto;
}

.cyberpunk-checkbox {
  appearance: none;
  width: 30px;
  height: 30px;
  border: 3px solid #167ed8;
  border-radius: 5px;
  background-color: transparent;
  display: inline-block;
  position: relative;
  margin-right: 20px;
  cursor: pointer;
}

.cyberpunk-checkbox:before {
  content: "";
  background-color: #167ed8;
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  width: 20px;
  height: 20px;
  border-radius: 3px;
  transition: all 0.3s ease-in-out;
}

.cyberpunk-checkbox:checked:before {
  transform: translate(-50%, -50%) scale(1);
}

.cyberpunk-checkbox-label {
  font-size: 18px;
  color: #000000;
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  padding: 15px 10px;
}
</style>
