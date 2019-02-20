<template>
  <div>
    <el-row>
      <el-button type="danger" @click="shuffle">押しちゃだめ</el-button>
    </el-row>
    <el-row style="margin-top:8px">
      <transition-group name="cell" tag="div" class="container">
        <div v-for="cell in cells" :key="cell.id" class="cell">
            <img v-show="show_img" src="https://emoji.slack-edge.com/T5YEKPMD0/kj/7507eb67b4768fd0.gif" width="25">
        </div>
      </transition-group>
    </el-row>
  </div>

</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  data() {
    return {
      show_img : false,
      cells: Array.apply(null, { length: 81 })
    	.map(function (_, index) { 
      	return {
        	id: index,
        	number: index % 9 + 1
        }
      })
    }
  },
  components: {
    Logo
  },
  methods: {
  	shuffle: function () {
      if(!this.show_img){
        this.show_img = true;
        return 0;
      }
      for (var i = this.cells.length - 1; i >= 0; i--){
        
        // 0~iのランダムな数値を取得
        var rand = Math.floor( Math.random() * ( i + 1 ) );
        // 配列の数値を入れ替える
        [this.cells[i], this.cells[rand]] = [this.cells[rand], this.cells[i]]
      }
      this.$nextTick(() => {
          this.$forceUpdate();
      });
      
    }
  },
  head() {
    return {
      title: "MotiMoti Playground"
    }
  }
}
</script>

<style>
  .container {
  display: flex;
  flex-wrap: wrap;
  width: 238px;
  margin-top: 10px;
}
.cell {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 25px;
  height: 25px;
  margin-right: -1px;
  margin-bottom: -1px;
}
.cell:nth-child(3n) {
  margin-right: 0;
}
.cell:nth-child(27n) {
  margin-bottom: 0;
}
.cell-move {
  transition: transform 1s;
}
</style>
