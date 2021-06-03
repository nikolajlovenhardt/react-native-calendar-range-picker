import moment from "moment";
export function getMonths(pastMonthRange, futureMonthRange) {
    var current = moment();
    var start = moment(current).subtract(pastMonthRange, 'month');
    var end = moment(current).add(futureMonthRange, 'month');
    var months = [];
    for (var date = moment(start); date.isSameOrBefore(end); date.add(1, 'month')) {
        months.push({
            id: date.format('YYYY-MM'),
            year: date.format('YYYY'),
            month: date.format('MM')
        });
    }
    return months;
}
export function getWeeks(month, startDate, endDate) {
    var today = moment().format("YYYY-MM-DD");
    var currentMonth = moment(month).month();
    var currentDate = moment(month).startOf("month");
    var week = [];
    var weeks = [];
    var dayObj = {};
    do {
        week = [];
        for (var i = 0; i < 7; i++) {
            dayObj = {
                type: null,
                date: null,
                isToday: false,
                isBeforeToday: false,
                isAfterToday: false,
                isHoliday: false,
            };
            var currentDateString = currentDate.format("YYYY-MM-DD");
            var days = currentDate.days() - 1 >= 0
                ? currentDate.days() - 1
                : 6;
            if (i == days && currentDate.month() == currentMonth) {
                if (startDate && startDate === currentDateString) {
                    if (!endDate) {
                        dayObj.type = "single";
                    }
                    else {
                        dayObj.type = "start";
                    }
                }
                if (endDate && endDate == currentDateString) {
                    if (startDate === endDate) {
                        dayObj.type = "single";
                    }
                    else {
                        dayObj.type = "end";
                    }
                }
                if (startDate &&
                    startDate < currentDateString &&
                    endDate &&
                    endDate > currentDateString) {
                    dayObj.type = "between";
                }
                var date = currentDate.clone().format("YYYY-MM-DD");
                var passedDayFromToday = currentDate.diff(moment(), "day") < 0;
                dayObj.date = date;
                if (date === today) {
                    dayObj.isToday = true;
                }
                if (passedDayFromToday) {
                    dayObj.isBeforeToday = true;
                }
                if (!passedDayFromToday) {
                    dayObj.isAfterToday = true;
                }
                if (i === 5 || i === 6) {
                    dayObj.isHoliday = true;
                }
                week.push(dayObj);
                currentDate.add(1, "day");
            }
            else {
                if (startDate &&
                    endDate &&
                    startDate < startDate &&
                    endDate >= startDate) {
                    dayObj.type = "between";
                }
                week.push(dayObj);
            }
        }
        weeks.push(week);
    } while (currentDate.month() == currentMonth);
    return weeks;
}
//# sourceMappingURL=data.js.map