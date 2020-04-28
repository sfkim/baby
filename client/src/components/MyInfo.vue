<script>
import MarkdownItVue from 'markdown-it-vue'
import '../../node_modules/markdown-it-vue/dist/markdown-it-vue.css'

import { mapMutations } from 'vuex';
import { mapGetters } from 'vuex';

export default {
    name: 'MyInfo',
    components: {
        MarkdownItVue
    },
    data () {
        return {
            currentMonth: parseInt(this.$route.query.month)
        }
    },
    props: {
        msg: String
    },
    mounted () {
        window.addEventListener('resize', this.handleResize);
        this.getContents();
    },
    methods: {
        getContents() {
            if (!this.$route.query.month) this.calculateCurrentMonth();
            this.getCurrentMonthInformation(this.currentMonth);
        },
        changeCurrentMonth(changeMonth) {
            this.currentMonth += changeMonth;
            if(this.currentMonth<0) this.currentMonth = 0;
            if(this.currentMonth>12) this.currentMonth = 12;
            this.getCurrentMonthInformation(this.currentMonth);
        },
        calculateCurrentMonth() {
            const today = new Date();
            if (this.babyInformation == null) {
                this.currentMonth = 0;
            } else {
                const birthDate = new Date(this.babyInformation[0].babyBirth);
                const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
                const diffDays = Math.round(Math.abs((today - birthDate) / oneDay));
                let currentMonth = parseInt(diffDays / 30)
                if ((diffDays/3)%10 > 5) currentMonth = currentMonth + 1;
                this.currentMonth = currentMonth;
            }
        },
        ...mapMutations ([
            'updateCurrentPage',
            'getCurrentMonthInformation'
        ])
    },
    computed: {
        ...mapGetters([
            'monthInformation',
            'babyInformation'
        ]),
        unableLeftButtonObject: function () {
            return  {
                'button-unable': (this.currentMonth ==0)
            }
        },
        unableRightButtonObject: function () {
            return  {
                'button-unable': (this.currentMonth == 12)
            }
        }
    }
}
</script>

<template>
    <div>
        <div class='left-button' v-bind:class="unableLeftButtonObject" @click="changeCurrentMonth((-1))"></div>
        <div class='right-button' v-bind:class="unableRightButtonObject" @click="changeCurrentMonth(1)"></div>
        <div class='time-container'>
            <div class='middle-text'>{{currentMonth}}개월</div>
            <div class='baby-name' v-if="babyInformation">{{babyInformation[0].babyName}}</div>
        </div>
        <div class='my-baby-md-container'>
            <div v-for="item in monthInformation" :key="item.index">
                <markdown-it-vue :content=item></markdown-it-vue>
            </div>
        </div>
    </div>
</template>

<style>
.time-container {
    position: relative;
    width: 100%;
    height: 45px;
    background-color: rgb(197, 218, 205);
}
.left-button {
    position: fixed;
    top: 50%;
    left: 0;
    opacity: 0.5;
    width: 35px;
    height: 35px;
    background: url('../assets/icons/my-baby/icons8-chevron-left-96.png') no-repeat center;
    background-size: 35px 35px;
}
.right-button {
    position: fixed;
    top: 50%;
    right: 0;
    opacity: 0.5;
    width: 35px;
    height: 35px;
    background: url('../assets/icons/my-baby/icons8-chevron-right-96.png') no-repeat center;
    background-size: 35px 35px;
}
.button-unable {
    opacity: 0;
}
.middle-text {
    text-align: center;
    line-height: 45px;
}
.time-container .baby-name {
    position: absolute;
    top: 0;
    right: 5%;
    line-height: 45px;
}
.time-container:after {
	content: '';
	clear: both;
	display: block;
}
.my-baby-md-container {
    width: 80%;
    overflow: scroll;
    padding: 0 10% 0 10%;
}
.my-baby-md-container .markdown-body {
    margin-top: 20px;
    margin-bottom: 40px;
}
.my-baby-md-container .markdown-body ol, .my-baby-md-container .markdown-body ul{
    list-style: circle;
    padding-left: 1em;
    word-break: keep-all;
}
</style>
