import moment from "moment";
export interface Day_Type {
  date: string | null;
  type: string | null;
  isToday: boolean;
  isBeforeToday: boolean;
  isHoliday: boolean;
  isAfterToday: boolean;
}

export type Week_Type = Day_Type[];
export interface Month_Type {
  year: number;
  month: number;
  id: string;
}

export function getMonths(pastMonthRange: number, futureMonthRange: number) {
  const current = moment()

  const start = moment(current).subtract(pastMonthRange, 'month')
  const end = moment(current).add(futureMonthRange, 'month')

  const months: any = [];

  for (let date = moment(start); date.isSameOrBefore(end); date.add(1, 'month')) {
    months.push({
      id: date.format('YYYY-MM'),
      year: date.format('YYYY'),
      month: date.format('MM')
    })
  }

  return months;
}

export function getWeeks(
  month: string,
  startDate: string | null,
  endDate: string | null
) {
  const today = moment().format("YYYY-MM-DD");
  const currentMonth = moment(month).month();
  const currentDate = moment(month).startOf("month");
  let week: any = [];
  let weeks: any = [];
  let dayObj: any = {};

  do {
    week = [];
    for (let i = 0; i < 7; i++) {
      dayObj = {
        type: null,
        date: null,
        isToday: false,
        isBeforeToday: false,
        isAfterToday: false,
        isHoliday: false,
      };
      const currentDateString = currentDate.format("YYYY-MM-DD");

      const days = currentDate.days() - 1 >= 0
          ? currentDate.days() - 1
          : 6

      if (i == days && currentDate.month() == currentMonth) {
        if (startDate && startDate === currentDateString) {
          if (!endDate) {
            dayObj.type = "single";
          } else {
            dayObj.type = "start";
          }
        }

        if (endDate && endDate == currentDateString) {
          if (startDate === endDate) {
            dayObj.type = "single";
          } else {
            dayObj.type = "end";
          }
        }
        if (
          startDate &&
          startDate < currentDateString &&
          endDate &&
          endDate > currentDateString
        ) {
          dayObj.type = "between";
        }

        const date = currentDate.clone().format("YYYY-MM-DD");
        const passedDayFromToday = currentDate.diff(moment(), "day") < 0;

        dayObj.date = date;
        if (date === today) {
          dayObj.isToday = true;
        }
        if (passedDayFromToday) {
          dayObj.isBeforeToday = true;
        }
        if (!passedDayFromToday && ! dayObj.isToday) {
          dayObj.isAfterToday = true;
        }
        if (i === 5 || i === 6) {
          dayObj.isHoliday = true;
        }
        week.push(dayObj);
        currentDate.add(1, "day");
      } else {
        if (
          startDate &&
          endDate &&
          startDate < startDate &&
          endDate >= startDate
        ) {
          dayObj.type = "between";
        }

        week.push(dayObj);
      }
    }
    weeks.push(week);
  } while (currentDate.month() == currentMonth);

  return weeks;
}
