<template>
  <div>

    <v-card
      align="center"
      class="card"
      width="80%">

      <h2> Add Disease </h2>
      <br>

      <v-col>
        <v-text-field
            solo
            class = "input"
            label="Disease Name"
            v-model="disease.DiseaseName"
            placeholder = "Disease Name">
        </v-text-field>
      </v-col>

      <br>

      <v-file-input
            dense
            class ="input"
            label="DNA Sequence"
            ref="doc"
            v-model="disease.DNADisease"
            placeholder = "DNA Sequence File"
            @change="readFile()">
      </v-file-input>

      <br><br>
      <!-- <div class = "error" v-html ="error"/> -->
      <br>

      <v-btn
        @click="addData"
      >Add</v-btn>
      
    </v-card>
    
  </div>
</template>

<script>
import addDiseaseService from '@/services/addDiseaseService'
import TestHistoryPanel from '@/components/TestHistoryPanel'
export default {
  data () {
    return {
      disease: {
        DiseaseName: null,
        file: null,
        DNADisease: null
      }
    }
  },
  methods: 
  {
    async addData() {
      try {
        await addDiseaseService.post(this.disease)
      } catch (err) {
        console.log(err)
      }
    }
  },
  readFile() {
      this.file = this.$refs.doc.files[0];
      const reader = new FileReader();
      if (this.file.name.includes(".txt")) {
        reader.onload = (res) => {
          this.content = res.target.result;
          this.DNADisease = this.content;
        };
        reader.onerror = (err) => console.log(err);
        reader.readAsText(this.file);
      } else {
        this.content = "check the console for file output";
        reader.onload = (res) => {
          // console.log(res.target.result);
        };
        reader.onerror = (err) => console.log(err);
        reader.readAsText(this.file);
      }
  },
  components: {
    TestHistoryPanel
  }
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
