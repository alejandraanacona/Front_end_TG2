<template>
    
    <div class="sidebar" :style = "{width: sidebarWidth}">
        <h1>
            <span v-if ="collapsed">
                <div>V</div>
                <div>S</div>
            </span>
            <span v-else> DeepLab UV</span>
        </h1>
        
        <SidebarLink to ="/home" icon="fa fa-home">Home</SidebarLink>
        <SidebarLink to ="/dashboard" icon="fa fa-columns">Dashboard</SidebarLink>
        <SidebarLink to ="/analytics" icon="fa fa-bar-chart">Analytics</SidebarLink>
        <SidebarLink to ="/friends" icon="fa fa-users">Friends</SidebarLink>
        <SidebarLink to ="/image" icon="fa fa-image">Images</SidebarLink>


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
:root {
    --sidebar-bg-color: #2F9DFF;
    --sidebar-item-hover: #2790eb;
    --sidebar-item-active: #1269b5;
}
</style>

<style>
.sidebar {
    color:white;
    background-color: var(--sidebar-bg-color);

    float:left;
    position: fixed;
    z-index: 1;
    top:0;
    left: 0;
    bottom: 0;
    padding: 0.5em;

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