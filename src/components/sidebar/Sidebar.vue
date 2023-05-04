<template>
    
    <div class="sidebar" :style = "{width: sidebarWidth}">
        <h1>
            <span v-if ="collapsed">
                <div>D</div>
                <div>L</div>
            </span>
            <span v-else> DeepLab UV</span>
        </h1>
        
        <SidebarLink to ="/home" icon="fa fa-cogs">&nbsp; Configuración de Parámetros </SidebarLink>
        <br>
        <SidebarLink to ="/teleoperado" icon="fa fa-laptop">&nbsp; Modo Teleoperado </SidebarLink>
        <br>
        <SidebarLink to ="/autonomo" icon="fa fa-road">&nbsp; Modo Autónomo </SidebarLink>
        <br>
            <ul class="sub-menu">    
                <SidebarLink to ="/programado" icon="fa fa-file-code-o">&nbsp; Modo programado </SidebarLink>
                <br>
                <SidebarLink to ="/ejecucion" icon="fa fa-play">&nbsp; Modo ejecución </SidebarLink>
            </ul>
        <SidebarLink to ="/manualayuda" icon="fa fa-book">&nbsp; Manual de ayuda </SidebarLink>


        <span
            class="collapse-icon"
            :class = "{ 'rotate-180': collapsed }"
            @click= "toggleSidebar"
        >
            <i class = "fa fa-angle-double-left" />
    </span>
    </div>
</template>

<script>
import {collapsed,toggleSidebar, sidebarWidth } from './state'
import SidebarLink from './SidebarLink.vue';


export default {
    props:{},
    components:{ SidebarLink },
    setup(){    
        return {collapsed , toggleSidebar, sidebarWidth}
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap');
:root {
    --sidebar-bg-color: #167ed8;
    --sidebar-item-hover: #a39e00;
    --sidebar-item-active: #1269b5;
}
</style>

<style>
.sidebar {
    color:rgba(255, 252, 252, 0.696);
    background-color: var(--sidebar-bg-color);
    font-family: Raleway;

    float:left;
    position: fixed;
    z-index: 2;
    top:0;
    left: 0;
    bottom: 0;
    padding: 0.2em;

    transition: 0.3s ease;

    display: flex;
    flex-direction: column;
}

.sidebar h1 {
  height: 3.5em;
}


.collapse-icon{
    position:absolute;
    bottom: 0;
    padding: 0.75em;

    color: rgba(255,255,255,0.7);

    transition: 0.2s linear;
}

.rotate-180{
    transform: rotate(180deg);
    transition: 0.2s linear;
}
</style>