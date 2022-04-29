<template>
  <div>
    <searchPanel title = "Search">
      
    </searchPanel>

    <testHistoryPanel title = "History">
      <div class="searchResult" v-for="(history,index) in TestHistory"
            :key="history.id">
            {{index+1}} -
            {{history.TestDate | formatDate}} -
            {{history.Username}} -
            {{history.percentage}} -
            {{history.DiseaseName}} -
            {{history.Status}}
        </div>
    </testHistoryPanel>

    <br><br><br>

    <v-footer width="100%" class="footer">
        <v-col
          class="text-center"
          cols="12"
        >
          © 2022 <strong>Tugas Besar 3 IF2211 Strategi Algoritma</strong>
          <br>
          By : Hansel - Lyora - Prima
        </v-col>
    </v-footer>

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
          TestHistory : null,
        }
    },
    watch: {
      '$route.query.search': {
        immediate: true,
        async handler (dateValue, nameValue) {
          this.TestHistory = (await HistoryService.getHistoryTests(dateValue, nameValue)).data
          for(dataDate of this.TestHistory.TestDate){
            dataDate.TestDate = moment(dataDate.TestDate).format("YYYY-MM-DD")
          }
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

.footer {
  background-color: #697184;
  color: white;
  font-size: 15px;
  margin-top: 20px;
}

.searchResult {
  color: white;
  margin-top:10px;
  font-size: 18px;
}

</style>
