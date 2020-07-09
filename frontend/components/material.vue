<template>
    <v-flex md12 sm6 offset-sm3 class="px-2">
    <v-card flat>
      <v-toolbar flat>
        </v-toolbar>
        <v-spacer></v-spacer>
        <v-btn>
          <v-toolbar-title class="grey--text">Material</v-toolbar-title>
        </v-btn>
        <v-btn>
          <v-toolbar-title class="grey--text">Categoria</v-toolbar-title>
        </v-btn>
        <v-btn>
          <v-toolbar-title class="grey--text">Saldo</v-toolbar-title>
        </v-btn>
      </v-toolbar>
      <v-divider></v-divider>
    </v-card></br>
    <v-card>
        <v-text-field class="ma-4" v-model="material" @keyup.enter="add_material()" label="Digite o material" :loading="adding"/>
        <v-text-field class="ma-4" v-model="categoria" @keyup.enter="add_material()" label="Digite a categoria" :loading="adding"/>
        <v-text-field class="ma-4" v-model="status" @keyup.enter="add_material()" label="Digite o status" :loading="adding"/>
    </v-card>
    </v-flex>
</template>

<script>
import api from '~api'

export default {
  data () {
    return {
      material: '',
      categoria: '',
      Status: '',
      adding: false,
      loading: false,
      items: [
      ]
    }
  },
  async mounted () {
    this.loading = true
    const response = await api.list_material()
    const mats = response.mats
    this.items = mats
    this.loading = false
  },
  methods: {
    async add_material () {
      this.adding = true
      const response = await api.list_material(this.material)
      this.items.push(response.mat)
      this.material = ''
      this.adding = false
    }
  }
}
</script>

<style scoped>
  .done {
    text-decoration: line-through;
  }
</style>
