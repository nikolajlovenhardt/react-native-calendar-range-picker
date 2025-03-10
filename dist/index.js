import React, { useState, useRef } from "react";
import moment from "moment";
import CalendarList from "./CalendarList";
import { LOCALE } from "./utils/locale";
export default function Index(_a) {
    var _b = _a.pastMonthRange, pastMonthRange = _b === void 0 ? 1 : _b, _c = _a.futureMonthRange, futureMonthRange = _c === void 0 ? 2 : _c, _d = _a.initialNumToRender, initialNumToRender = _d === void 0 ? 7 : _d, _e = _a.locale, locale = _e === void 0 ? LOCALE : _e, prevStartDate = _a.startDate, prevEndDate = _a.endDate, onChange = _a.onChange, style = _a.style, singleSelectMode = _a.singleSelectMode, flatListProps = _a.flatListProps, isMonthFirst = _a.isMonthFirst, disabledBeforeToday = _a.disabledBeforeToday, _f = _a.allowFutureDates, allowFutureDates = _f === void 0 ? true : _f;
    var _g = useState(prevStartDate ? prevStartDate : null), startDate = _g[0], setStartDate = _g[1];
    var _h = useState(prevEndDate ? prevEndDate : null), endDate = _h[0], setEndDate = _h[1];
    var startDateRef = useRef(null);
    var endDateRef = useRef(null);
    var handleSetStartDate = function (startDate) {
        setStartDate(startDate);
        setEndDate(null);
        startDateRef.current = startDate;
        endDateRef.current = null;
        if (singleSelectMode) {
            onChange(startDate);
        }
        else {
            onChange({ startDate: startDate, endDate: null });
        }
    };
    var handleSetEndDate = function (startDate, endDate) {
        setEndDate(endDate);
        endDateRef.current = endDate;
        onChange({ startDate: startDate, endDate: endDate });
    };
    var handlePress = function (date) {
        if (singleSelectMode) {
            handleSetStartDate(date);
            return;
        }
        if (!startDateRef.current && !endDateRef.current) {
            handleSetStartDate(date);
            return;
        }
        if (startDateRef.current && endDateRef.current) {
            handleSetStartDate(date);
            return;
        }
        if (startDateRef.current) {
            if (moment(date).isBefore(startDateRef.current)) {
                handleSetStartDate(date);
            }
            else {
                handleSetEndDate(startDateRef.current, date);
            }
        }
    };
    return (<CalendarList initialNumToRender={initialNumToRender} pastMonthRange={pastMonthRange} futureMonthRange={futureMonthRange} locale={locale} handlePress={handlePress} startDate={startDate} endDate={endDate} style={style} flatListProps={flatListProps} isMonthFirst={isMonthFirst} disabledBeforeToday={disabledBeforeToday} allowFutureDates={allowFutureDates}/>);
}
//# sourceMappingURL=index.js.map