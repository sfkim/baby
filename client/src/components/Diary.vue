<script>
import Vue from 'vue'
import Vue2TouchEvents from 'vue2-touch-events'
Vue.use(Vue2TouchEvents)

export default {
    name: 'Diary',
    data () {
        return {
            calendarWeek: new Array(),
            currentYear: 0,
            currentMonth: 0
        }
    },
    created () {
        var nowDate = new Date();
        this.makeCalendar(nowDate);
    },
    methods: {
        makeCalendar(currentDate) {
            var firstDate, lastDate, currentYear, currentMonth, customDate;
            this.calendarWeek = new Array();

            firstDate = new Date(currentDate.getYear(), currentDate.getMonth(), 1);
            lastDate = new Date(currentDate.getYear(), currentDate.getMonth()+1, 0);

            this.currentYear = currentYear = currentDate.getFullYear();
            this.currentMonth = currentMonth = currentDate.getMonth() + 1;

            var calendar_days = new Array(7);
            for (var i = 1; i <= lastDate.getDate(); i++) {
                customDate = new Date(currentYear, currentMonth - 1, i);
                calendar_days[customDate.getDay()] = customDate.getDate();

                // saturday
                if (customDate.getDay() == 6) {
                    this.calendarWeek.push(calendar_days);
                    if(customDate.getDate() != lastDate.getDate())
                        calendar_days = new Array(7);
                }

                // last day
                if (customDate.getDate() == lastDate.getDate()) {
                    this.calendarWeek.push(calendar_days);
                }
            }
        },
        swipeHandler(e) {
            var currentMonth = this.currentMonth;
            var currentYear = this.currentYear;

            if (e == "right") {
                if (currentMonth == 1) {
                    currentYear -= 1;
                    currentMonth = 12;
                } else {
                    currentMonth -= 1;
                }
            } else if (e == "left") {
                if (currentMonth == 12) {
                    currentYear += 1;
                    currentMonth = 1;
                } else {
                    currentMonth += 1
                }
            }

            var updateDate = new Date(currentYear, currentMonth - 1, 1);
            this.makeCalendar(updateDate);
        }
    }
}
</script>

<template>
    <div class="diary-container" v-touch:swipe="swipeHandler">
        <div id="current-month">{{ currentMonth }}월</div>
        <div id="current-year">{{ currentYear }}년</div>
        <div id="day-bar">
            <div>Sun</div>
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
        </div>
        <div id="calendar">
            <div class="calendar-week" v-for="(week, idx) in calendarWeek" v-bind:key="idx">
                <div class="day" v-for="(day, idx) in week" v-bind:key="idx">{{ day }}</div>
            </div>
        </div>
    </div>
</template>

<style>
.diary-container {
    padding: 20px;
}

#current-month {
    float: left;
    margin: 0 20px 0 20px;
    font-size: 30px;
    line-height: 30px;
}

#current-year {
    line-height: 30px;
}

#day-bar {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    margin: 20px 0 10px 0;
}

#day-bar div {
    width: 100%;
    padding: 0.5rem;
}

#calendar {
    background-color: #fff;
}

.calendar-week {
    display: flex;
    justify-content: flex-start;
    width: 100%;
}

.calendar-week .day {
    overflow: hidden;
    width: 100%;
    padding: 0.5rem;
    height: 50px;
    user-select: none;
    cursor: default;
    border-left: 1px solid #ddd;
    border-top: 1px solid #ddd;
}
</style>
