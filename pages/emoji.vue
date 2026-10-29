<template>
  <div>
    synapse emoji<br><br>
    <img :src="emoji.url" style="width:40px"  v-for="emoji in list" :key="emoji.id">
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
    const config = useRuntimeConfig()
    $fetch('https://slack.com/api/emoji.list?token='+config.public.slackApiToken).then((response)=>{
      for(var key in response.emoji) {
        if(response.emoji[key].slice(0,4) == "http") {
          this.list.push({"id":key, "url":response.emoji[key]})
        }
      }
    })
  }
}

</script>
