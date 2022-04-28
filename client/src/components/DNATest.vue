<template>
  <div>
    <v-row>
      <v-col cols="6">
        <v-card
          align-self="right"
          align="center"
          class="card"
          width="80%">

          <h2> DNA Test </h2>
          <br>

          <h3> Nama Pengguna : </h3>
          <v-text-field
                solo
                class ="input"
                label="Your Name"
                v-model="Username"
                placeholder = "Name">
          </v-text-field>
   
          <h3> Prediksi Penyakit : </h3>
          <v-text-field
              solo
              class = "input"
              label="Disease Name"
              v-model="DiseaseName"
              placeholder = "Disease Name">
          </v-text-field>

          <br>

          <h3> Sequence DNA Pengguna : </h3>
          <br>
          <v-file-input
                dense
                class = "input"
                ref="doc"
                label="DNA User"
                v-model="DNAUserFile"
                placeholder = "DNA Sequence File"
                @change="readFile">
          </v-file-input>

          <br>
        
          <br>
          <div class = "error" v-html ="error"/>
          <br>

          <v-btn
            @click="testDisease">
            Submit
          </v-btn>
          
        </v-card>
      </v-col>


      <v-col cols="6">
        <v-card
          align="left"
          class="cardResult"
          width="80%">

          <h2> Hasil Tes </h2>
          <br>

          <label for = "date"> Tanggal : </label>
          <p placeholder="date"> {{date}} </p>
          <br>

          <label for = "Username"> Pengguna : </label>
          <p placeholder="Username"> {{Username}} </p>
          <br>

          <label for = "DiseaseName"> Nama Penyakit : </label>
          <p placeholder="DiseaseName"> {{DiseaseName}} </p>
          <br>

          <label for = "Persentase"> Persentase : </label>
          <p placeholder="Persentase"> {{percentage}} </p>
          <br>

          <label for = "Status"> Hasil : </label>
          <p placeholder="Status"> {{statusTest}} </p>
          <br>

        </v-card>
      </v-col>
    </v-row>

    <br><br>
    <v-footer width="100%">
        <v-col
          class="text-center"
          cols="12"
        >
          2022 — <strong>Tugas Besar 3 IF2211 Strategi Algoritma</strong>
        </v-col>
    </v-footer>

  </div>
</template>

<script>
import TestService from '@/services/TestService'
import TestHistoryPanel from '@/components/TestHistoryPanel'
export default {
  data () {
    return {
      Username: '',
      DiseaseName: '',
      DNAUser:'',
      error: null,
      DNAUserFile: null
    }
  },
  methods: {
    readFile() {
    var reader = new FileReader();
    
    reader.readAsText(this.DNAUserFile);
    reader.onload = () => {
      this.DNAUser = reader.result;
    }
  },
    async testDisease() {
      console.log(this.Username)
      console.log(this.DiseaseName)
      console.log(this.DNAUser)
      try {
        var result = await TestService.getTestResult({"Username":this.Username,"DiseaseName":this.DiseaseName,"DNAUser":this.DNAUser})
      } catch (err) {
        console.log(err)
      }
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
  align-self:  center;
  margin-bottom: 15px;
}

h3 {
  color: white;
  text-align:  left;
  font-size: 15px;
  margin-left: 40px;
  margin-bottom: 10px;
}

label {
  color: white;
  font-weight: bold;
}

.input {
  color: white;
  width: 80%;
}

.card {
  justify-self:center;
  padding: 30px 30px 40px 40px;
  overflow: hidden;
  border-radius: 20px;
  margin-left: 100px;
  /* margin:auto; */
  background: #eca1a6;
  border: 2px solid #eea29a;
}

.cardResult {
  justify-self:center;
  padding: 30px 30px 40px 40px;
  overflow: hidden;
  height: 300px;
  border-radius: 20px;
  /* margin:auto; */
  margin-right: 20px;
  background: #b1cbbb;
  border: 2px solid #E4E9BE;
}

</style>
