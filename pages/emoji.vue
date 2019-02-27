<template>
  <div>
    synapse emoji<br><br>
    <img :src="emoji.url" style="width:25px"  v-for="emoji in list" :key="emoji.id">
  </div>

</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  },
  mounted () {
    const response = this.$axios.$get('https://slack.com/api/emoji.list?token='+process.env.SLACK_API_TOKEN).then((response)=>{
      for(var key in response.emoji) {
        if(response.emoji[key].slice(0,4) == "http") {
          this.list.push({"id":key, "url":response.emoji[key]})
        }
      }
    })
  }
}

</script>