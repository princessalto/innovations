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
              max-width="600"
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
                  <p><strong>{{ __('Suhaimi Salleh') }}</strong> {{ __('is the Founder & CEO of SSA Group, a group of companies established in 1986, providing professional services in management consulting, training, audit, accounting and estate planning. Two of its member companies, SSA Academy and SSA Culinary Institute, are approved training providers for the SkillsFuture Singapore (SSG) Workforce Skills Qualifications (WSQ) programmes and has trained more than 200,000 workers.') }}</p>

                  <p>{{ __('Suhaimi has more than 40 years of post-graduate experience in management, consulting and corporate training. His expertise includes audit, finance, productivity and human capital management in a broad range of industries in Singapore, Malaysia, Indonesia, Philippines and Brunei. He has also been invited to speak at major conferences in Singapore, Malaysia, Indonesia and Saudi Arabia.') }}</p>

                  <p>{{ __('Suhaimi is also a registered Asian Productivity Organisation (APO) Technical Expert on Productivity Management and Human Resource Development. He has been instrumental in introducing total quality management (TQM) and productivity improvement initiatives to companies and non-profit organisations in Singapore, Malaysia and Brunei. He is also a trainer in productivity, quality, finance and accounting and an accredited consultant for Enterprise Singapore.') }}</p>

                  <p>{{ __('Suhaimi has won multiple awards for serving as an active community leader throughout his career and is currently the President of PMBM Scholarship Fund Board (LBKM) and Audit Committee Chairman of SG Enable. He has also served, among others, as a member of the Board of Governors of Temasek Polytechnic, the Council of Ngee Ann Polytechnic, Public Transport Council and the Charity Council.') }}</p>
                </v-card-text>
              </v-card>
            </v-menu>
          </v-flex>
          <v-flex offset-sm1 sm4 xs12>
            <v-menu
              v-model="menuContent2"
              :close-on-content-click="false"
              max-width="600"
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
