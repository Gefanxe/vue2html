(function() {

  const _template = /*html*/ `
  <div class="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="ModalLabel1-1" aria-hidden="true">
    <div class="modal-dialog modal-fullscreen-lg-down" :class="size">
      <div class="modal-content">
  
        <div class="modal-header">
          <h5 class="modal-title" id="ModalLabel3-2">{{ mdTitle }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
  
        <div class="modal-body">
          {{ mdBody }}
          <slot :data="mdData"></slot>
          <div>
            TEST: <input type="text" v-validate required name="bsInput">
          </div>
        </div>
  
        <div class="modal-footer justify-content-center">
          <button type="button" class="btn btn-success" @click="handleClick">{{ mdOk }}</button>
          <button v-if="mdCancel !== ''" type="button" class="btn btn-secondary" data-bs-dismiss="modal">{{ mdCancel }}</button>
        </div>
      </div>
    </div>
  </div>
  `;

  Vue.component('BsModal', {
    $_veeValidate: {
      validator: 'new'
    },
    props: {
      size: {
        type: String,
        default: ''
      },
      source: {
        type: String,
        default: ''
      },
      mdTitle: {
        type: String,
        default: ''
      },
      mdBody: {
        type: String,
        default: ''
      },
      mdOk: {
        type: String,
        default: '確認送出'
      },
      mdCancel: {
        type: String,
        default: ''
      },
      mdData: {
        type: Object,
        default: {}
      }
    },
    template: _template,
    data() {
      return {
        msg: ''
      }
    },
    mounted() {
      this.$validator.localize('zh_TW', {
        custom: {
          bsInput: { required: '請輸入' }
        }
      });
    },
    methods: {
      async handleClick() {
        const self = this;
        
        const formValidate = await self.$validator.validate();
        if (!formValidate) {
          let msg = '';
          self.errors.items.forEach(item => {
            msg += `${item.msg}\n`;
          });
          return alert(msg);
        }

        this.$emit('btn-send', {
          src: this.source,
          item: this.mdData
        });
      }
    }
  });
})();