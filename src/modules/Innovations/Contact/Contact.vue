<template>
  <section>
    <v-card dark class="gradient__withAnimation">
      <particles>
        <home-toolbar></home-toolbar>

        <v-container grid-list-lg>
          <v-layout row wrap justify-center align-center>
            <v-flex xl8 lg9 md12 xs12>
              <v-card flat class="transparent py-5">
                <h1 class="mb-3">
                  {{ trans('Let\'s grab some imaginary coffee and talk!') }}
                </h1>
                <div><strong>Email Address:</strong><span class="ml-2">{{ __('innovations@ssagroup.com') }}</span></div>
                <div><strong>HQ:</strong> <span class="ml-2">{{ __('11 Eunos Road 8, Lifelong Learning Institute, Singapore') }}</span></div>
                <div><strong>Philippines Branch:</strong><span class="ml-2">{{ __('Ortigas, Philippines') }}</span></div>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </particles>
    </v-card>

    <v-container grid-list-lg>
      <v-layout row wrap justify-center align-center>
        <v-flex xl8 lg9 md12 xs12>
          <v-layout row wrap>
            <v-flex xs12>
              <div class="my-5 upform--x">
                <div class="upform-header--x"></div>
                <div class="upform-main--x">
                  <v-form
                    @keyup.enter="beforeFormSubmit"
                    @submit.prevent="beforeFormSubmit"
                    >

                    <div class="input-block">
                      <div class="label">
                        <div class="mb-4">
                          <h1 class="primary--text mb-4">
                            {{ trans('What\'s your name?') }}
                          </h1>
                          <div class="input-control">
                            <v-text-field
                              :data-vv-as="trans('Name')"
                              :error-messages="errors.collect('name')"
                              v-validate="'required'"
                              box
                              autofocus
                              label="Name"
                              name="name"
                              v-model="resource.name"
                            ></v-text-field>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="input-block">
                      <div class="label">
                        <div class="mb-4">
                          <h1 class="primary--text mb-4">
                            {{ trans('How can we reach you?') }}
                          </h1>
                          <div class="input-control">
                            <v-text-field
                              :data-vv-as="trans('Email')"
                              :error-messages="errors.collect('email')"
                              box
                              name="email"
                              label="Email"
                              v-model="resource.email"
                              required
                              v-validate="'required|email'"
                              >
                            </v-text-field>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="input-block">
                      <div class="label">
                        <div class="mb-4">
                          <h1 class="primary--text mb-4">
                            {{ trans('What do you have in mind?') }}
                          </h1>
                          <div>
                            <v-text-field
                              :error-messages="errors.collect('body')"
                              box
                              :data-vv-as="trans('Message')"
                              label="Message"
                              name="body"
                              required
                              single-line
                              v-model="resource.body"
                              v-validate="'required'"
                            ></v-text-field>
                          </div>
                        </div>
                      </div>
                      <div class="input-control">
                        <v-btn
                          color="secondary"
                          large
                          class="ml-0"
                          dark
                          type="submit">
                          {{ trans('Submit') }}
                        </v-btn>
                      </div>
                    </div>
                  </v-form>
                </div>
              </div>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>

    <footer-component></footer-component>
    <snackbar></snackbar>
  </section>
</template>

<style lang="stylus" scoped>
  input[type="radio"].toggle {
    display: none;
  }
  input[type="radio"].toggle + label {
    cursor: pointer;
    min-width: 80px;
  }
  input[type="radio"].toggle + label:hover {
    background: none;
    color: #FFF;
  }
  input[type="radio"].toggle + label:after {
    content: "";
    height: 100%;
    position: absolute;
    top: 0;
    -webkit-transition: left 100ms cubic-bezier(0.77, 0, 0.175, 1);
    transition: left 100ms cubic-bezier(0.77, 0, 0.175, 1);
    width: 100%;
    z-index: -1;
  }
  input[type="radio"].toggle.toggle-left + label {
  }
  input[type="radio"].toggle.toggle-left + label:after {
    left: 100%;
  }
  input[type="radio"].toggle.toggle-right + label {
    margin-left: 10px;
  }
  input[type="radio"].toggle.toggle-right + label:after {
    left: -100%;
  }
  input[type="radio"].toggle:checked + label {
    background: #FFF;
    cursor: default;
    // color: #000;
  }
  input[type="radio"].toggle:checked + label:after {
    left: 0;
  }

  /* UPFORM STYLE STARTS*/
  .upform input:focus, select:focus, textarea:focus, button:focus {
    outline: none;
    border-color: blue !important;
  }
  .upform input, select, textarea {
    background-color: #000 !important;
    color: #FFF;
  }
  .upform {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently
                  supported by Chrome and Opera */
  }
  .upform .upform-main .input-block {
    padding: 30px 0;
    opacity: 0.25;
    cursor: default;
  }
  .upform .upform-main .input-block .label {
    display: block;
    font-size: 1.1em;
    line-height: 30px;
  }
  .upform .upform-main .input-block .input-control {
    margin: 20px 0;
  }
  .upform .upform-main .input-block .input-control input[type=text] {
    border: none;
    outline-width: 0;
    border-bottom: 2px solid #CCC;
    width: 100%;
    font-size: 35px;
    padding-bottom: 10px;
  }
  .upform .upform-main .input-block.active {
    opacity: 1;
  }
  .upform .upform-footer {
    margin-top: 60px;
  }
  .upform .upform-footer .btn {
    font-size: 24px;
    font-weight: bold;
    padding: 5px 20px;
  }
  /* UPFORM STYLE ENDS */
</style>

<script>
import store from '@/store'
import ScrollTo from 'jquery.scrollto'
import $ from 'jquery'
import axios from 'axios'
import { mapGetters } from 'vuex'

export default {
  store,
  $_veeValidate: {
    validator: 'new'
  },

  store,
  name: 'Contact',

  components: {
    ScrollTo,
  },

  data () {
    return {
      resource: { _token: '' }
    }
  },

  mounted () {
    this.tellForm()
  },

  computed: {
    ...mapGetters({
      snackbar: 'snackbar/snackbar',
    })
  },

  methods: {
    beforeFormSubmit () {
      this.$validator.reset()
      this.$validator.validateAll()
        .then(ok => {
          if (ok) {
            this.onSubmit()
          }
          // this.resource.form.loading = false
        })
    },

    onSubmit(e) {
      let uri = '/api/v1/messages'
      axios.post(uri, this.resource).then((response) => {
        this.$router.push({name: 'contact-us'})
        this.$store.dispatch(
          'snackbar/TOGGLE_TOAST',
          Object.assign(
            this.snackbar,
            {
              model: true,
              text: 'Your message is successfully submitted.',
            }
          )
        )
      })
      this.resource = '';
      e.preventDefault();
    },

    tellForm () {
      /* eslint-disable */
      $.fn.upform = function() {
        var $this = $(this);
        var container = $this.find(".upform-main");

        $(document).ready(function() {
          $(container).find(".input-block").first().click();
        });

        $($this).find("form").submit(function() {
          return false;
        });

        $(container)
          .find(".input-block")
          .not(".input-block input")
          .on("click", function() {
          rescroll(this);
        });

        $(container).find(".input-block input").keypress(function(e) {
          if (e.which == 13) {
            if ($(this).hasClass("required") && $(this).val() == "") {
            } else moveNext(this);
          }
        });

        $(container).find('.input-block input[type="radio"]').change(function(e) {
          moveNext(this);
        });

        $(window).on("scroll", function() {
          $(container).find(".input-block").each(function() {
            var etop = $(this).offset().top;
            var diff = etop - $(window).scrollTop();

            if (diff > 100 && diff < 300) {
              reinitState(this);
            }
          });
        });

        function reinitState(e) {
          $(container).find(".input-block").removeClass("active");

          $(container).find(".input-block input").each(function() {
            $(this).blur();
          });
          $(e).addClass("active");
          /*$(e).find('input').focus();*/
        }

        function rescroll(e) {
          $(window).scrollTo($(e), 200, {
            offset: { left: 100, top: -200 },
            queue: false
          });
        }

        function reinit(e) {
          reinitState(e);
          rescroll(e);
        }

        function moveNext(e) {
          $(e).parent().parent().next().click();
        }

        function movePrev(e) {
          $(e).parent().parent().prev().click();
        }
      };

      $(".upform").upform();
      $.fn.upform = function() {
        var $this = $(this);
        var container = $this.find(".upform-main");

        $(document).ready(function() {
          $(container).find(".input-block").first().click();
        });

        $($this).find("form").submit(function() {
          return false;
        });

        $(container)
          .find(".input-block")
          .not(".input-block input")
          .on("click", function() {
            rescroll(this);
          });

        $(container).find(".input-block input").keypress(function(e) {
          if (e.which == 13) {
            if ($(this).hasClass("required") && $(this).val() == "") {
            } else moveNext(this);
          }
        });

        $(container).find('.input-block input[type="radio"]').change(function(e) {
          moveNext(this);
        });

        $(window).on("scroll", function() {
          $(container).find(".input-block").each(function() {
            var etop = $(this).offset().top;
            var diff = etop - $(window).scrollTop();

            if (diff > 100 && diff < 300) {
              reinitState(this);
            }
          });
        });

        function reinitState(e) {
          $(container).find(".input-block").removeClass("active");

          $(container).find(".input-block input").each(function() {
            $(this).blur();
          });
          $(e).addClass("active");
        }

        function rescroll(e) {
          $(window).scrollTo($(e), 200, {
            offset: { left: 100, top: -200 },
            queue: false
          });
        }

        function reinit(e) {
          reinitState(e);
          rescroll(e);
        }

        function moveNext(e) {
          $(e).parent().parent().next().click();
        }

        function movePrev(e) {
          $(e).parent().parent().prev().click();
        }
      };

      $(".upform").upform();
    },

    wemoveNext(e) {
      $(e).parent().parent().next().click();
    }
  }
}
</script>
