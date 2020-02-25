<script>
import MarkdownItVue from 'markdown-it-vue'
import '../../node_modules/markdown-it-vue/dist/markdown-it-vue.css'

export default {
  name: 'MyInfo',
  components: {
    MarkdownItVue
  },
  data () {
    return {
      userImage2: '[![popo100](https://healingkorea.s3.ap-northeast-2.amazonaws.com/baby/1582274679130-5.jpg)](https://healingkorea.s3.ap-northeast-2.amazonaws.com/baby/1582274679130-5.jpg)',
      tempMsg: "#### 표준 키가 궁금해",
      userMsg: '# H1 string  \n  ## h2 Heading  \n  ### h3 Heading  \n  ## Horizontal Rules \n # H1 string  \n  ## h2 Heading  \n  ### h3 Heading  \n  ## Horizontal Rules \n # H1 string  \n  ## h2 Heading  \n  ### h3 Heading  \n  ## Horizontal Rules \n',
      userTable: '## 신체 성장 표준치 \n ### 남아 1개월 \n  |백분위수|몸무게(kg)|키(cm)|머리둘레(cm)| \n |:-:|:-:|:-:|:-:| \n 3|3.4|51.1|35.1| \n  5|3.6|51.5|35.4| \n 10|3.8|52.2|35.8| \n 15|3.9|52.7|36.1| \n 25|4.1|53.4|36.5| \n 50|4.5|54.7|37.3| \n 75|4.9|56.0|38.1| \n 85|5.1|56.7|38.5| \n 90|5.3|57.2|38.8| \n 95|5.5|57.9|39.2| \n 97|5.7|58.4|39.5| \n',
      userSleep: '## 개월별 평균 수면시간 \n |개월수|밤잠시간|낮잠시간|낮잠횟수|총 수면시간| \n |:-:|:-:|:-:|:-:|:-:| \n 생후 1개월|8~9시간|7시간|3~4회|15~16시간| \n 생후 3개월|10시간|5시간|3회|15시간| \n 생후 6개월|11시간|3시간 15분|2회|14시간 15분| \n 생후 9개월|11시간|3시간|2회|14시간| \n 생후 12개월|11시간|2~3시간|1~2회|13~14시간| \n 생후 18개월|11시간|2시간|1회|13시간| \n 생후 24개월|11시간|1~2시간|1회|12~13시간| \n 생후 36개월|10시간 30분|1시간 30분|1회|12시간| \n',
      userImage: '[![immunization](https://healingkorea.s3.ap-northeast-2.amazonaws.com/baby/Immunization_Schedule_for_Children_2019.png)](https://healingkorea.s3.ap-northeast-2.amazonaws.com/baby/Immunization_Schedule_for_Children_2019.png)',
      userTable2: '## 간단히 보는 개월별 성장 발달\n### 0~1개월\n* 파악반사, 모로반사 등 반사 행동이 많이 나타납니다.\n* 생후 1주일간은 몸무게가 200~300g 줄어듭니다.\n* 신생아는 16시간 이상 자며, 거의 하루 종일 잡니다.\n* 배내웃음을 짓고, 울음으로 배고픔, 배변 등을 표현합니다.\n### 1~2개월\n* 약 15cm 앞을 볼 수 있고 흑백만 구별 가능합니다.\n* 눈동자가 사물을 따라갈 수 있습니다.\n* 엎드려 놓으면 머리를 잠깐 들 수 있습니다.\n* 옹알이를 시작하고 잠깐 동안 딸랑이를 쥡니다.\n### 3~4개월\n* 청각이 발달해 소리에 민감해집니다.\n* 눈맞춤 횟수가 증가하고 색깔을 구분합니다.\n* 엎드려 놓으면 머리를 20초 이상  들고 빠르면 엎드린 상태에서 누운 상태로 뒤집기를 성공합니다.\n* 손에 관심이 많아져 입으로 손을 가져갑니다.\n* 옹알이 때 얼러주면 몸을 움직이며 호응합니다.\n### 5~6개월\n* 그림책에서 본 그림을 2주뒤에도 기억합니다.\n* 눈 앞 장난감을 손수건 등으로 가리면 당황하며 찾으려합니다.\n* 뒤집기에 익숙해져 배밀이를 시작하고, 무릎을 굽혀 기어 나갑니다.\n* 눈으로 본 물건을 손으로 뻗어 잡을 수 있습니다.\n* 기분 좋을 때는 활짝 웃습니다.\n### 7~8개월\n* 전두엽 발달이 두드러집니다. 아이와 부모의 안정된 애착은 전두엽의 활성화를 돕습니다.\n* 혼자 앉을 수 있고, 기어다니는 것이 익숙해집니다.\n* 손 움직임이 더 활발해지고 안아달라고 손을 뻗습니다.\n* 자신의 행동으로 사람들이 웃으면 그 행동을 계속하려 하며, 더 놀아달라고 조릅니다.\n### 9~10개월\n* 기억력이 발달해 모방이 더욱 늘어나고 자신의 이름을 기억합니다.\n* 앉았다 기어다니거나, 기어다니다가 방향을 바꾸는 등 움직임이 자연스러워집니다.\n* 두 손 모으기, 손뼉치기 등을 할 수 있으며, "죔죔", "곤지곤지"를 따라합니다.\n* "안 돼" 라고 말하면 멈추거나 눈치를 봅니다.\n* 음악을 들으면 몸을 흔들거나 신나는 기분을 표현합니다.\n### 11~12개월\n* 뇌 무게가 1Kg이 됩니다. (태어날 때 350g)\n* 엄마, 아빠와 같은 의미있는 첫 말을 하기 시작합니다.\n* 손을 잡아주면 한 발을 떼거나 주변 물건을 잡고 몇 걸음 뗄 수 있습니다.\n* 엄지, 검지로 물건을 들어 올립니다.\n* 인사, 고개 가로젓기, 손가락으로 원하는 것 가르키기 등 몸짓언어를 사용해 의사소통 합니다.'
    }
  },
  props: {
    msg: String
  },
  mounted () {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  methods: {
    handleResize() {
      var clientWidth = document.documentElement.clientWidth;
      var middleText = document.getElementsByClassName('middle-text');
      middleText[0].style.width = ((clientWidth - 90) + 'px');
    }
  }
}
</script>

<template>
  <div>
    <div class='time-container'>
      <div class='left-button'></div>
      <div class='middle-text'>3개월</div>
      <div class='right-button'></div>
    </div>
    <div class='my-baby-md-container'>
      <markdown-it-vue :content=userImage2></markdown-it-vue>
      <markdown-it-vue :content=tempMsg></markdown-it-vue>
      <markdown-it-vue :content=userMsg></markdown-it-vue>
      <markdown-it-vue :content=userTable></markdown-it-vue>
      <markdown-it-vue :content=userSleep></markdown-it-vue>
      <markdown-it-vue :content=userImage></markdown-it-vue>
      <markdown-it-vue :content=userTable2></markdown-it-vue>
    </div>

  </div>
</template>

<style>
.time-container {
  width: 100%;
  height: 45px;
  background-color: rgb(197, 218, 205);
}

.left-button {
  width: 45px;
  height: 45px;
  background: url('../assets/icons/my-baby/icons8-chevron-left-96.png') no-repeat center;
  background-size: 40px 40px;
  float: left;
}

.middle-text {
  height: 45px;
  float: left;
  text-align: center;
  line-height: 45px;
}

.right-button {
  width: 45px;
  height: 45px;
  background: url('../assets/icons/my-baby/icons8-chevron-right-96.png') no-repeat center;
  background-size: 40px 40px;
  float: left;
}

.my-baby-md-container {
  width: 100%;
  overflow: scroll;
  padding: 20px;
}
.markdown-body {
  margin-top: 10px;
}
</style>
