<template>
  <header></header>
    <Sidebar />
    <div :style="{ 'margin-left': sidebarWidth }">
  
      <router-view />
    
    </div>
</template>

<script>
import Sidebar from '@/components/sidebar/Sidebar'

import { sidebarWidth } from '@/components/sidebar/state'
export default {
  components: { Sidebar },
  setup() {
    return { sidebarWidth }
  }
}
</script>

<style>
header {
  width: 100%;
  height: 60px;
  background: #ac7a7a;
  display: flex;
  align-items: center;
  position: fixed;
}
</style>