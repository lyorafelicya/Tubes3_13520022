<template>
  <div>
    <searchPanel title = "Search">
      
    </searchPanel>

    <testHistoryPanel title = "History">
      <div v-for="history in TestHistory"
            :key="history.id">
            {{history.id}} -
            {{history.TestDate}} -
            {{history.Username}} -
            {{history.DiseaseName}} -
            {{history.Status}}
        </div>
    </testHistoryPanel>

  </div>
</template>

<script>
import TestHistoryPanel from '@/components/TestHistoryPanel'
import SearchPanel from '@/components/SearchPanel'
import HistoryService from '@/services/HistoryService'

export default {
    components: {
        TestHistoryPanel,
        SearchPanel
    },
    data () {
        return {
          TestHistory : null
        }
    },
    watch: {
      '$route.query.search': {
        immediate: true,
        async handler (dateValue, nameValue) {
          this.TestHistory = (await HistoryService.getHistoryTests(dateValue, nameValue)).data
        }
      }
    }
    // async mounted() {
    //   this.TestHistory = (await HistoryService.getHistoryTest()).data
    //   //console.log('disease', this.TestHistory)
    // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .error {
  color: red;
} */

h2 {
  color: white;
}

.input {
  color: white;
  width: 50%;
}

.card {
  justify-self:center;
  padding: 30px 30px 40px 40px;
  overflow: hidden;
  border-radius: 20px;
  margin:auto;
  background: #eca1a6;
  border: 2px solid #eea29a;
}

</style>
