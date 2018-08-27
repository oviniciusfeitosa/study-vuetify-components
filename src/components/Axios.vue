<template>
  

      <section v-if="errored">
        <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
      </section>
      
      <section v-else>

        <div v-if="loading">Loading...</div>

        <v-card>
          <v-container
            fluid
            grid-list-lg>
            <v-layout row wrap>
              <v-flex xs12>
                <v-card color="blue-grey darken-2" class="white--text">
                  <v-card-title primary-title>
                    <div class="headline">Bitcoin Price Index</div>
                  </v-card-title>
                  <v-card-text>
                    <div v-for="currency in info" class="currency">
                      {{ currency.description }}
                      <span class="lighten">
                        <span v-html="currency.symbol"></span>{{ currency.rate_float | currencydecimal }}
                      </span>
                    </div>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
        
      </section>

</template>

<script>

import axios from 'axios'

export default {
  data () {
    return {
      info: null,
      loading: true,
      errored: false,
    }
  },
  filters: {
    currencydecimal (value) {
      return value.toFixed(2)
    }
  },
  mounted () {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.info = response.data.bpi))
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  },
}
</script>