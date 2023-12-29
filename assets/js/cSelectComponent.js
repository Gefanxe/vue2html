(function() {

  const _template = /*html*/ `
  <div>
    <label for="pet-select">{{ title }}</label>
    <select name="pets" id="pet-select" @change="onChange">
      <option value="">請選擇</option>
      <option value="dog">Dog</option>
      <option value="cat">Cat</option>
      <option value="hamster">Hamster</option>
      <option value="parrot">Parrot</option>
      <option value="spider">Spider</option>
      <option value="goldfish">Goldfish</option>
    </select>
  </div>
  `;

  Vue.component('CSelect', {
    props: {
      value: {
        type: String
      },
      title: {
        type: String,
        default: ''
      }
    },
    template: _template,
    data() {
      return {
        msg: ''
      }
    },
    mounted() {
    },
    methods: {
      onChange(e) {
        console.log('test:', e.target.value);
        this.$emit('input', e.target.value);
      }
    }
  });
})();