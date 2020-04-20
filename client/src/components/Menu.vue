<script>
export default {
    name: 'Menu'
}
</script>

<template>
    <div class="menu_wrapper">
        <div class="menu1">
        <div class="thumnail_wrap">
            <div class="thumnail">썸네일1</div>
            <div class="thumnail">썸네일2</div>
            <div class="thumnail">썸네일3</div>
        </div>
        </div>
        <div class="menu2">
        </div>
        <div class="menu3">
            <div class="menu_item">메뉴</div>
            <div class="menu_item">메뉴</div>
            <div class="menu_item">메뉴</div>
            <div class="menu_item">메뉴</div>
            <div class="menu_item">메뉴</div>
            <div class="menu_item">메뉴</div>
            <div class="menu_item">메뉴</div>
            <div class="menu_item">마지막메뉴</div>
        </div>
    </div>
</template>

<style>
* {
    padding: 0px;
    margin: 0px;
}

.menu_wrapper {
	height: 100%;
    overflow-y: scroll;
}
.menu1 {
    height: 250px;
    overflow-x: scroll;
    overflow-y: hidden;
}
.menu1:after {
    display: block;
    content: '';
    clear: both;
}
.thumnail_wrap {
    width: 520px;
}
.thumnail {
    width: 150px;
    height: 200px;
    margin: 25px 10px;
    border: 1px solid #eee;
    float: left;
    background-image: url(http://via.placeholder.com/150x200);
}
.menu_item {
    margin: 45px;
    max-width: 100px;
    max-height: 100px;
    width: 30vw;
    height: 30vw;
    float: left;
    text-align: center;
    background-color: rgb(240, 206, 203);
    border: 4px solid rgb(230, 96, 116);
    border-radius: 30px;
}
.menu3 {
    height: 1000px;
}
</style>