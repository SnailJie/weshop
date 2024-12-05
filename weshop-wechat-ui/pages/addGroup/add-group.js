const util = require('../../utils/util.js');
const api = require('../../config/api.js');
const user = require('../../services/user.js');
 


Component({  
  data: {  
    showModal: false,  
    schools: ['学校1', '学校2', '学校3', '学校4', '学校5', '学校6','学校11', '学校12', '学校123', '学校14', '学校15', '学校16'],  
    filteredSchools: [],  
    selectedSchool: '',  
    searchQuery: '',  
    showDropdown: false  
  },  
  lifetimes: {  
    attached() {  
      this.setData({  
        filteredSchools: this.data.schools  
      });  
    }  
  },  
  methods: {  
    onButtonClick() {  
      this.setData({  
        showModal: true  
      });  
    },  
    hideModal() {  
      this.setData({  
        showModal: false  
      });  
    },  
    onSchoolChange(e) {  
      const index = e.detail.value;  
      this.setData({  
        selectedSchool: this.data.filteredSchools[index]  
      });  
    },  
    onSearchInput(e) {  
      const query = e.detail.value.toLowerCase();  
      const filtered = this.data.schools.filter(school => school.toLowerCase().includes(query));  
      this.setData({  
        searchQuery: query,  
        filteredSchools: filtered,  
        showDropdown: true,  
        selectedSchool: query  
      });  
    },  
    selectSchool(e) {  
      const school = e.currentTarget.dataset.school;  
      this.setData({  
        selectedSchool: school,  
        searchQuery: school,  
        showDropdown: false  
      });  
    },  
    onFocus() {  
      this.setData({  
        showDropdown: true  
      });  
    },  
    onBlur() {  
      setTimeout(() => {  
        this.setData({  
          showDropdown: false  
        });  
      }, 200);  
    },  
    confirmJoin() {  
      if (!this.data.selectedSchool) {  
        wx.showToast({  
          title: '请选择学校',  
          icon: 'none'  
        });  
        return;  
      }  
      // 处理确认加入的逻辑  
      this.hideModal();  
    }  
  }  
});