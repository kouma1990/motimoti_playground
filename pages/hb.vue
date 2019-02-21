<template>
  <div>
    設定した値：<input type="text" v-model="num1"><br>
    判定する値：<input type="text" v-model="num2"><br>
    <label>結果：{{evaluation}}</label>

  </div>
</template>


<script>

export default {
  data() {
    return {
      num1: "1234",
      num2: "1234",
    }
  },
  computed: {
  	evaluation: function () {
      if(this.num1.length != 4 || this.num2.length != 4) {
          return "判定不能";
      }
      
      var hit = 0;
      var blow = 0;
      for(var i=0; i<4; i++) {
          if(i == this.num1.indexOf(this.num2[i])) {
              hit += 1;
          }else if(this.num1.indexOf(this.num2[i]) > -1) {
              blow += 1;
          }
      }

      return hit + " - " + blow;
    }
  },
  head() {
    return {
      title: "MotiMoti Playground"
    }
  }
}
</script>
