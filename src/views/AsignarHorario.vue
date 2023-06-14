<template>
  <iframe src="https://horarioaws.youcanbook.me/?noframe=true&skipHeaderFooter=true"
   id="ycbmiframehorarioaws" style="width:100%;height:1000px;border:0px;background-color:transparent;" frameborder="0" allowtransparency="true">
   </iframe>
</template>

<script>
window.addEventListener && window.addEventListener(
  "message", function(event){
    if (event.origin === "https://horarioaws.youcanbook.me")
    {document.getElementById("ycbmiframehorarioaws").style.height = event.data + "px";}
    },
    false);
</script>