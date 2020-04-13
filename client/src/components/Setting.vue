<script>
import Datepicker from 'vuejs-datepicker';
import PrettyRadio from 'pretty-checkbox-vue/radio';
import '../../node_modules/pretty-checkbox/src/pretty-checkbox.scss';

import { mapMutations } from 'vuex';
import { mapGetters } from 'vuex';

export default {
  name: 'Setting',
  components: {
    Datepicker,
    PrettyRadio
  },
  props: {
    msg: String
  },
  data () {
    return {
      isBabyModal: false,
      isBabyAdded: localStorage.getItem('isBabyAdded'),
      babyName: '',
      babyBirth: '',
      babySex: 0
    }
  },
  methods: {
    ...mapMutations ([
        'setBabyInfo'
    ]),
    clickPlusBaby() {
        this.isBabyModal = true;
    },
    clickEditBaby() {
        this.isBabyModal = true;
        this.babyName = this.babyInformation[0].babyName;
        this.babySex = this.babyInformation[0].babySex;
    },
    clickCancel() {
        this.isBabyModal = false;
    },
    clickSubmit() {
        this.isBabyModal = false;
        var addBabyBirth= this.babyBirth.getFullYear() + '/' + (this.babyBirth.getMonth() + 1) + '/' + this.babyBirth.getDate();
        var addBabyInformation = {
            babyName: this.babyName,
            babyBirth: addBabyBirth,
            babySex: this.babySex
        }

        // for now, support jusy the one baby
        var babyInformationArray = [];
        babyInformationArray.push(addBabyInformation);
        localStorage.setItem('babyInformation', JSON.stringify(babyInformationArray));
        localStorage.setItem('isBabyAdded', true);
        this.setBabyInfo(babyInformationArray);
        this.isBabyAdded = true;
    },
    customFormatter(date) {
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        date = year + '/' + month + '/' + day;
        return date;
    }
  },
  computed: {
    ...mapGetters([
      'babyInformation'
    ])
  }
}
</script>

<template>
  <div class='setting-container' v-bind:class="{'setting-bg': this.isBabyModal}">
    <div class='baby-information-container'>
        <h1>아기 정보</h1>
        <hr class='horizon-line'>
        <div class='get-baby-container' v-for="item in babyInformation" :key="item.babyName">
            <div class='edit-baby' @click=clickEditBaby()></div>
            <div class='get-baby-title'> 아기 이름 </div>
            <div class='get-baby-value'> {{ item.babyName }} </div>
            <div class='get-baby-title'> 아기 생일 </div>
            <div class='get-baby-value'> {{ item.babyBirth }} </div>
            <div class='get-baby-title'> 아기 성별 </div>
            <div class='get-baby-value' v-if="item.babySex == 0"> 공주님 </div>
            <div class='get-baby-value' v-if="item.babySex == 1"> 왕자님 </div>
        </div>
        <div class='plus-baby' @click=clickPlusBaby() v-if="!isBabyAdded"></div>
    </div>

    <div v-if="isBabyModal" class='add-baby-container'>
        <div class='input-container'>
            <div class='baby-info-title'>아기 이름</div>
            <div class='baby-info-input'>
                <input v-model='babyName' placeholder='이름을 입력해주세요'/>
            </div>
            <div class='baby-info-title'>아기 생일</div>
            <div class='baby-info-input'>
                <datepicker v-model='babyBirth' placeholder='Select Date' :format='customFormatter'></datepicker>
            </div>
            <div class='baby-info-title'>아기 성별</div>
            <div class='baby-info-radio'>
                <prettyRadio v-model='babySex' value='1' class='p-icon p-round p-plain p-smooth' name='plain' color='success-o'>
                    <i slot="extra" class="icon icon-custom icon-boy"></i>
                    왕자님
                </prettyRadio>
                <prettyRadio v-model='babySex' value='0' class='p-icon p-round p-plain p-smooth' name='plain' color='success-o'>
                    <i slot='extra' class='icon icon-custom icon-girl'></i>
                    공주님
                </prettyRadio>
            </div>
            <hr class='horizon-line'>
            <div class='info-table'>
                <div class='info-table-row'>
                    <div class='baby-info-cancel' @click=clickCancel()>CANCEL</div>
                    <div class='baby-info-submit' @click=clickSubmit()>SUBMIT</div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<style>
.setting-container {
    width: 100%;
    height: 100%;
}
.setting-bg {
    background-color: rgba(0, 0, 0, 0.5);
}
.baby-information-container {
    padding: 20px;
}
.horizon-line {
    color: #94a698;
}
.plus-baby {
    width: 40px;
    height: 40px;
    background-repeat: no-repeat;
    background-position: center top;
    background-size: 40px;
    background-color: transparent;
    vertical-align: bottom;
    background-image: url('../assets/icons/icons8-plus-64.png');
}
.edit-baby {
    position: absolute;
    right: 10%;
    width: 25px;
    height: 25px;
    background-repeat: no-repeat;
    background-position: center top;
    background-size: 25px;
    background-color: transparent;
    vertical-align: bottom;
    background-image: url('../assets/icons/icons8-edit-48.png');
}
.get-baby-container {
    padding: 20px;
}
.get-baby-title {
    font-size: 15px;
    color: rgb(153, 153, 153);
    margin-bottom: 10px;
}
.get-baby-value {
    font-size: 20px;
    color: black;
    margin-bottom: 20px;
}
.add-baby-container {
    position: fixed;
    top: 15%;
    padding: 40px;
}
.input-container {
    padding: 20px;
    border: solid black 1px;
    background-color: rgba(255, 255, 255, 1);
}
.baby-info-title {
    font-size: 15px;
    color: rgb(153, 153, 153);
    margin-top: 20px;
}
.baby-info-input {
    margin-bottom: 40px;
}
.baby-info-radio{
    margin-top: 10px;
    margin-bottom: 40px;
}
.baby-info-input input {
    height: 40px;
    border: none;
    font-size: 20px;
    color: black;
    padding: 5px;
}
.icon-custom {
    background-repeat: no-repeat;
    background-position: center top;
    background-size: 19px;
    background-color: transparent;
    vertical-align: bottom;
}
.icon-boy {
    background-image: url('../assets/icons/icons8-sleeping-baby-48.png');
    margin-top: -3px;
}
.icon-girl {
    background-image: url('../assets/icons/icons8-sleeping-baby-girl-48.png');
    margin-top: -1px;
}
.info-table {
    display: table;
    width: 100%;
}
.info-table-row {
    display: table-row;
}
.baby-info-cancel {
    display: table-cell;
    font-size: 25px;
    color: rgb(153, 153, 153);
    padding: 10px;
    text-align: left;
}
.baby-info-submit {
    display: table-cell;
    font-size: 25px;
    color: rgb(73, 165, 200);
    padding: 10px;
    text-align: right;
}
</style>
