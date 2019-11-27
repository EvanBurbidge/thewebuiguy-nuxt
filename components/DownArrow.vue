<template>
  <div class="pos down-arrow" v-scroll-to="'#about-section'"></div>
</template>

<style scoped>
  * {box-sizing:border-box;transition:all 0.3s;-webkit-transition:all 0.3s;}

  body {margin:100px;background-color:#0083aa;}

  .pos {position:relative;margin:0 auto;}

  .down-arrow {height:60px;width:60px;border:5px solid #0083aa;border-radius:100%;}

  .down-arrow:before,.down-arrow:after {content:'';position:absolute;top:26px;width:18px;border:1px solid #0083aa;transition:all 0.3s;-webkit-transition:all 0.3s;}

  .down-arrow:before {transform:rotateZ(45deg);-webkit-transform:rotateZ(45deg);left:10px;}
  .down-arrow:after {transform:rotateZ(-45deg);-webkit-transform:rotateZ(-45deg);left:22px;}

  .down-arrow:hover {cursor:pointer;border-width:0;}
  .down-arrow:hover:before,.down-arrow:hover:after {top:40px;}
  .down-arrow:hover:before {left:14px;}
  .down-arrow:hover:after {left:26px;}
</style>
