<template>
  <div>

    <v-card
      align="center"
      class="card"
      width="60%">

      <h2> Add Disease </h2>
      <br>

      <h3> Nama Penyakit : </h3>
      <v-text-field
          solo
          class = "input"
          label="Disease Name"
          v-model="disease.DiseaseName"
          placeholder = "Disease Name">
      </v-text-field>
   

      <br>

      <h3> Sequence DNA Penyakit : </h3>
      <v-file-input
            dense
            class ="input"
            label="DNA Sequence"
            accept=".txt"
            v-model="DNADiseaseFile"
            placeholder = "DNA Sequence File"
            @change="readFile">
      </v-file-input>

      <br><br><br>

      <span class="error" v-if="error">{{ error }}</span>

      <br><br>

      <v-btn
        @click="addData"
      >Add</v-btn>
      
    </v-card>

    <br><br>
    
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
import addDiseaseService from '@/services/addDiseaseService'
import TestHistoryPanel from '@/components/TestHistoryPanel'

export default {
  data () {
    return {
      disease: {
        DiseaseName: null,
        DNADisease: null,
      },
      DNADiseaseFile: null,
      error: null,
    }
  },
  methods: 
  {
  readFile() {
    var reader = new FileReader();
    
    reader.readAsText(this.DNADiseaseFile);
    reader.onload = () => {
      this.disease.DNADisease = reader.result;
    }
  },
    async addData() {
      try {
        await addDiseaseService.post(this.disease)
        console.log(this.disease.DiseaseName)
        console.log(this.disease.DNADisease)

        this.disease.DiseaseName = " "
        this.DNADiseaseFile = " "
        this.error = " "

      } catch (err) {
        this.error = err.response.data.message
      }
    }
  },
  components: {
    TestHistoryPanel
  }
}
</script>

<style scoped>
h2 {
  color: white;
  margin-bottom: 20px;
}

h3 {
  color: white;
  text-align:  left;
  font-size: 15px;
  margin-left: 140px;
  margin-bottom: 10px;
}

.footer {
  background-color: #697184;
  color: white;
  font-size: 15px;
  margin-top: 20px;
}

.error {
  color:red;
  font-weight: bold;
}

.input {
  color: white;
  width: 60%;
}

.card {
  justify-self:center;
  padding: 30px 30px 40px 40px;
  overflow: hidden;
  border-radius: 20px;
  margin:auto;
  background: #eca1a6;
  border: 2px solid #eea29a;
  margin-bottom: 50px;
}
</style>
