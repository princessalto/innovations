<template>
  <div>
    <v-input
      class="v-editor-field v-text-field--outline"
      hide-details
    >
      <div class="v-editor-field__slot">
        <label class="v-label">{{ __(label) }}</label>
        <div class="wysiwyg-editor">
          <div ref="base-editor" class="base-editor" contenteditable="true"></div>
        </div>
      </div>
    </v-input>
    <hints :hide="hideHints"></hints>
  </div>
</template>

<script>
import InlineEditor from '@ckeditor/ckeditor5-build-inline'
import { VInput } from 'vuetify'

export default {
  name: 'v-editor',

  extends: VInput,

  model: {
    prop: 'value',
  },

  props: {
    hideHints: {
      type: [Boolean],
      default: true,
    },
    label: {
      type: [String],
      default: 'Description',
    },
    placeholder: {
      type: [String],
      default: 'Description',
    },
    value: {
      type: [String],
      default: '',
    },
  },

  data () {
    return {
      editor: {
        instance: null,
      },
    }
  },

  methods: {
    getOptions () {
      return this.toolbar || {
        removePlugins: ['imageUpload'],
        toolbar: ['heading', '|', 'bold', 'italic', '|', 'undo', 'redo', '|', 'bulletedList', 'numberedList', 'blockQuote'],
        floatSpaceDockedOffsetX: 20,
        floatSpaceDockedOffsetY: 20,
      }
    },

    focused () {
      this.initialize()
    },

    initialize () {
      let self = this
      let options = this.getOptions()
      let editorElement = this.$refs['base-editor']

      InlineEditor
        .create(editorElement, options)
        .then(editor => {
          // Assign to vue
          self.editor.instance = editor

          // Set editor content
          editor.setData(self.value)

          // Listen to retrieve editor content
          editor.model.document.on('change:data', function (event, data) {
            self.$emit('input', editor.getData())
          })
        })
        .catch(error => {
          console.error(error)
        })
    },

    destroy () {
      console.log('destroyed')
      this.editor.instance.destroy()
    },
  },

  created () {
    this.initialize()
  },
}

</script>

<style lang="stylus" scoped>
@import '~@/stylus/theme';

:root {
  --ck-color-base-border: transparent;
  --ck-border-radius: 4px;
  --ck-border-color: rgba(0,0,0,0.4);
}

.wysiwyg-editor {
  width: 100%;
  height: 100%;

  &--box,
  &--box &__content {
    .ck-editor__editable {
      background-color: rgba(0,0,0,0.06);
      border-bottom: 2px solid rgba(0,0,0,.42);
      border-radius: 5px;
      border-top-left-radius: 3px;
      border-left: none;
      border-right: none;
      border-bottom-left-radius: 0 !important;
      border-bottom-right-radius: 0 !important;

      &:not(:focus):hover {
        background-color: rgba(0,0,0,0.12);
      }
      &:focus {
        background-color: rgba(0,0,0,0.10);
        border-bottom: 2px solid $theme.primary !important;
        outline: none;
      }
    }
  }

  &__label {
    font-size: 1rem;
    padding-bottom: 1em;
    position: absolute;
    margin: 1rem;
  }
}

.ck.ck-editor__main,
.ck-content.ck-editor__editable,
.ck-editor__editable {
  min-height: 100px;
}

.v-editor-field {
  &__slot {
    width: 100%;
    .wysiwyg-editor {
      .ck-content.ck-editor__editable {
        padding-top: 1rem;
      }
    }
  }

  .v-label {
    position: absolute;
    top: 10px;
    left: 10px;
    right: auto;
  }
}
</style>
