<template>
  <v-flex xs12 sm6 offset-sm3 class="px-2">
    <v-card>
      <div>
          <v-row align="center" justify="center">
          <v-img src="../static/logo.png"
            class="grey lighten-2" max-width="328" max-height="169"> </v-img>
          </v-row>
        </div>
    </v-card>
    <v-card>
      <v-card-title primary-title>
        <div>
          <h3 class="headline">Login</h3>
        </div>
      </v-card-title>
        <v-form>
          <v-text-field label="Username" v-model="username"></v-text-field>
          <v-text-field label="Password" v-model="password" type="password" @keyup.enter="login()"></v-text-field>
          <small style="color: red;" v-if="error">Usuário ou senha inválido</small>
        </v-form>
        <v-btn block color="primary" @click="login" :loading="loading">Entrar</v-btn>
    </v-card>
  </v-flex>
</template>

<script>

import api from '~api'

export default {
  data () {
    return {
      username: '',
      password: '',
      loading: false,
      error: false
    }
  },
  methods: {
    async login () {
      this.loading = true
      this.error = false
      const user = await api.login(this.username, this.password)
      if (user) {
        this.$store.commit('auth/setCurrentUser', user)
        // this.$router.push('/material')
      } else {
        this.error = true
      }
      this.loading = false
    }
  }
}
</script>
