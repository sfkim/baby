<script>
import { mapMutations } from 'vuex';
import { mapGetters } from 'vuex';

export default {
    name: 'Footer',
    methods: {
        page(targetComponent) {
            this.$router.push(targetComponent).catch(err => {});
        },
        ...mapMutations ([
            'updateCurrentPage'
        ])
    },
    computed: {
        ...mapGetters([
            'currentPage'
        ])
    }
}
</script>

<template>
    <div class="footer-container">
        <ul class="footer">
            <li class="footer_item" :class="{footer_focus: $route.name == 'Home'}" id="icon-home" @click="page('/')">
                <span class="footer_link" :class="{focused: $route.name == 'Home'}">홈</span>
            </li>
            <li class="footer_item" :class="{footer_focus: $route.name == 'MyInfo'}" id="icon-my-info" @click="page('/MyInfo')">
                <span class="footer_link" :class="{focused: $route.name == 'MyInfo'}">나의 아기</span>
            </li>
            <li class="footer_item" :class="{footer_focus: $route.name == 'Chat'}" id="icon-chat" @click="page('/Chat')">
                <span class="footer_link" :class="{focused: $route.name == 'Chat'}">채팅</span>
            </li>
            <li class="footer_item" :class="{footer_focus: $route.name == 'Diary'}" id="icon-wiki" @click="page('/Diary')">
                <span class="footer_link" :class="{focused: $route.name == 'Diary'}">아기 일기</span>
            </li>
            <li class="footer_item" :class="{footer_focus: $route.name == 'Setting'}" id="icon-setting" @click="page('/Setting')">
                <span class="footer_link" :class="{focused: $route.name == 'Setting'}">설정</span>
            </li>
        </ul>
    </div>
</template>

<style>
.footer-container {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
}
.footer {
    display: table;
    width: 100%;
    height: 100%;
    table-layout: fixed;
}
.footer_item {
    display: table-cell;
    background-repeat: no-repeat;
    background-position: center top;
    background-size: 40px;
    background-color: transparent;
    vertical-align: bottom;
}
.footer_link {
    display: block;
    position: relative;
    font-size: 16px;
    text-align: center;
}
.icon-item {
    width: 20%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center top;
    float: left;
    vertical-align: bottom;
}
.footer_focus {
    background-color: rgb(23, 113, 134, .5);
    color: white;
    text-weight: bold;
}
.icon-title {
    position: absolute;
    bottom: 0;
    width: 20%;
    text-align: center;
}
#icon-home {
    background-image: url('../assets/icons/icons8-home-100.png');
}
#icon-my-info {
    background-image: url('../assets/icons/icons8-baby-150.png');
}
#icon-chat {
    background-image: url('../assets/icons/icons8-chat-100.png');
}
#icon-wiki {
    background-image: url('../assets/icons/icons8-books-150.png');
}

#icon-setting {
    background-image: url('../assets/icons/icons8-web-settings-100.png');
}
@media screen and (min-width: 1024px) {
	#icon-home, #icon-my-info, #icon-chat, #icon-wiki, #icon-setting {
		background-image: none;
	}
	.footer-container {
		width: 60%;
		margin: 0 auto;
	}
	.footer_item {
		text-align: center;
		vertical-align: middle;
	}
	.footer_link {
		display: inline-block;
		height: 100%;
		vertical-align: bottom;
	}
	.footer_focus {
		color: darkcyan;
		background: transparent;
	}
	.focused {
		border-bottom: 7px solid darkcyan;
		box-sizing: border-box;
	}
}
</style>
