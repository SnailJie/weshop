const util = require('../../utils/util.js');
const api = require('../../config/api.js');
const user = require('../../services/user.js');
 


Component({  
  methods: {  
    onButtonClick() {  
      this.triggerEvent('click');  
    }  
  }  
});