<template>
  <div v-scroll-to="'#about-section'" class="pos down-arrow" />
</template>

<style scoped>
  * {box-sizing:border-box;transition:all 0.3s;-webkit-transition:all 0.3s;}

  body {margin:100px;background-color:#FFFFFF;}

  .pos {position:relative;
    margin: 20px auto 0;
  }

  .down-arrow {height:60px;width:60px;border:5px solid #FFFFFF;border-radius:100%;}

  .down-arrow:before,.down-arrow:after {content:'';position:absolute;top:26px;width:18px;border:1px solid #FFFFFF;transition:all 0.3s;-webkit-transition:all 0.3s;}

  .down-arrow:before {transform:rotateZ(45deg);-webkit-transform:rotateZ(45deg);left:10px;}
  .down-arrow:after {transform:rotateZ(-45deg);-webkit-transform:rotateZ(-45deg);left:22px;}

  .down-arrow:hover {cursor:pointer;border-width:0;}
  .down-arrow:hover:before,.down-arrow:hover:after {top:40px;}
  .down-arrow:hover:before {left:14px;}
  .down-arrow:hover:after {left:26px;}
</style>
