<template>
  <v-container grid-list-lg>
    <v-layout row wrap justify-center align-center>
      <v-flex xl8 lg10 md12 xs12>
        <div class="my-5 text-xs-center">
          <h1 class="mb-3 primary--text">
            {{ trans('Meet Our Executives') }}
          </h1>
        </div>

        <v-layout row wrap justify-center align-center>
          <v-flex sm4 xs12>
            <v-menu
              v-model="menuContent1"
              :close-on-content-click="false"
              max-width="400"
              offset-x
              right
              transition="slide-x-transition"
              >
              <v-card hover height="100%" slot="activator">
                <img width="100%" :src="executives.suhaimi"/>
                <v-card-text class="text-xs-center">
                  <h4 class="primary--text">{{ __('Suhaimi Salleh') }}</h4>
                  <p>{{ __('President & Chief Executive Officer') }}</p>
                </v-card-text>
              </v-card>

              <v-card>
                <v-card-text class="pa-4">
                  <h3 class="mb-1">{{ __('Suhaimi Salleh') }}</h3>
                  <p><strong>{{ __('President & Chief Executive Officer') }}</strong></p>

                  <br>
                  <p>{{ __('As the founder and Chief Executive Officer of SSA Consulting Group, Suhaimi Salleh has more than 30 years of experience in management consultancy in human resource development, organisational development, productivity management, audit, finance, and strategic planning in a broad array of industries in Singapore, Malaysia, Indonesia, Brunei, and the Philippines. Suhaimi was awarded the SME Partner Award by the Singapore Productivity & Standards Board in March 2001 for his outstanding contributions in the development of small and medium enterprises in Singapore. He has served and continues to serve in many public and civic institutions in various senior advisory capacities. Over the years, Suhaimi has also been invited to give his expert opinion on business and socio-economic issues, appearing numerous times on live TV and radio. Suhaimi is a Fellow Certified Public Accountant (Practising), a Fellow Certified Management Consultant, a Practising Management Consultant, and an Associate Financial Planner.') }}</p>
                </v-card-text>
              </v-card>
            </v-menu>
          </v-flex>
          <v-flex offset-sm1 sm4 xs12>
            <v-menu
              v-model="menuContent2"
              :close-on-content-click="false"
              max-width="400"
              offset-x
              left
              transition="slide-x-transition"
              >

              <v-card hover height="100%" slot="activator">
                <img width="100%" :src="executives.affandi"/>
                <v-card-text class="text-xs-center">
                  <h4 class="primary--text">{{ __('Affandi Salleh') }}</h4>
                  <p>{{ __('Executive Vice President & Chief Operating Officer') }}</p>
                </v-card-text>
              </v-card>

              <v-card>
                <v-card-text class="pa-4">
                  <h3 class="mb-1">{{ __('Affandi Salleh') }}</h3>
                  <p><strong>{{ __('Executive Vice President & Chief Operating Officer') }}</strong></p>

                  <br>
                  <p>{{ __('With over a quarter century of diverse experience in management consultancy, Affandi is the Chief Operating Officer of SSA Consulting Group. His consultancy work has spanned corporate and strategic planning, industrial management, organisational development, acquisition, project management, computerisation and standardisation, procurement and negotiation, marketing, public relations, finance, accounting, ISO 9000, and human resource management.') }}</p>
                </v-card-text>
              </v-card>
            </v-menu>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import suhaimi from '@/modules/Innovations/About/assets/images/suhaimi.png'
import affandi from '@/modules/Innovations/About/assets/images/affandi.png'

export default {
  name: 'Executives',

  data () {
    return {
      menuContent1: false,
      menuContent2: false,
      executives: {
        suhaimi: suhaimi,
        affandi: affandi,
      }
    }
  }
}
</script>
