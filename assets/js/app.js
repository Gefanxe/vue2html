Vue.use(VeeValidate, { inject: false });

const vue = new Vue({
  el: "#app",
  data() {
    return {
      message: 'hey',
      fname: '',
      lname: '',
      email: '',
      birthday: '',
      selectedValue: ''
    };
  },
  mounted: function () {},
  methods: {
    test: function () {
      this.message = 'Hello World~'
    },
    onOpenModal: function() {
      // console.log('test:', this.$refs.myModal);
      this.$refs.myModal.mdBody = '這是彈窗';
      $(this.$refs.myModal.$el).modal('show');
    },
    onModalOk: function () {
      $(this.$refs.myModal.$el).modal('hide');
      console.log('OK!');
    },
    submit: function() {
      // <div>{{ v$.fname.$errors[0]?.$message }}</div>
    }
  }

});