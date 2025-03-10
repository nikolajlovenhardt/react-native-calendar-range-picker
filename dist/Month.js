import React, { memo } from "react";
import { StyleSheet, View, Text } from "react-native";
import moment from "moment";
import Week from "./Week";
import { getWeeks } from "./utils/data";
var PADDING_HORIZONTAL = 10;
function Month(_a) {
    var item = _a.item, locale = _a.locale, handlePress = _a.handlePress, startDate = _a.startDate, endDate = _a.endDate, isMonthFirst = _a.isMonthFirst, disabledBeforeToday = _a.disabledBeforeToday, style = _a.style, allowFutureDates = _a.allowFutureDates;
    var year = item.year, month = item.month;
    var renderDayNames = function () {
        var result = [];
        var dayNames = locale.dayNames;
        for (var i = 0; i < dayNames.length; i++) {
            result.push(<View key={i} style={styles.dayNameContainer}>
          <Text style={[styles.dayName, style === null || style === void 0 ? void 0 : style.dayNameText]}>
            {dayNames[i]}
          </Text>
        </View>);
        }
        return result;
    };
    var renderWeeks = function () {
        var result = [];
        var weeks = getWeeks(item.id, startDate, endDate);
        var is6Weeks = weeks.length > 5;
        for (var i = 0; i < weeks.length; i++) {
            result.push(<Week key={i} week={weeks[i]} locale={locale} handlePress={handlePress} is6Weeks={is6Weeks} disabledBeforeToday={disabledBeforeToday} style={style} allowFutureDates={allowFutureDates}/>);
        }
        return result;
    };
    return (<View style={[styles.monthContainer, style === null || style === void 0 ? void 0 : style.monthContainer]}>
      <View style={styles.monthNameContainer}>
        <Text style={[styles.monthName, style === null || style === void 0 ? void 0 : style.monthNameText]}>
          {isMonthFirst ? <Text>{locale.monthNames[month - 1]} </Text> : null}
          {year}
          {locale.year}
          {!isMonthFirst ? <Text> {locale.monthNames[month - 1]}</Text> : null}
        </Text>
      </View>
      <View style={styles.dayNamesContainer}>{renderDayNames()}</View>
      {renderWeeks()}
    </View>);
}
function areEqual(prevProps, nextProps) {
    var newId = nextProps.item.id;
    if (nextProps.startDate &&
        moment(nextProps.startDate).format("YYYY-MM") === newId) {
        return false;
    }
    if (nextProps.endDate &&
        moment(nextProps.endDate).format("YYYY-MM") === newId) {
        return false;
    }
    if (prevProps.startDate &&
        moment(prevProps.startDate).format("YYYY-MM") === newId) {
        return false;
    }
    if (prevProps.endDate &&
        moment(prevProps.endDate).format("YYYY-MM") === newId) {
        return false;
    }
    if (nextProps.startDate &&
        nextProps.endDate &&
        moment(nextProps.startDate).format("YYYYMM") <
            moment(newId).format("YYYYMM") &&
        moment(nextProps.endDate).format("YYYYMM") > moment(newId).format("YYYYMM")) {
        return false;
    }
    if (prevProps.endDate &&
        prevProps.startDate &&
        moment(prevProps.startDate).format("YYYYMM") <
            moment(newId).format("YYYYMM") &&
        moment(prevProps.endDate).format("YYYYMM") > moment(newId).format("YYYYMM")) {
        return false;
    }
    if (prevProps.locale &&
        nextProps.locale &&
        prevProps.locale.today !== nextProps.locale.today) {
        return false;
    }
    return true;
}
export default memo(Month, areEqual);
var styles = StyleSheet.create({
    monthContainer: {
        paddingTop: 20,
        paddingHorizontal: PADDING_HORIZONTAL,
        backgroundColor: "#fff",
    },
    monthNameContainer: {
        flexDirection: "row",
        alignItems: "center",
        height: 30,
        paddingLeft: 16,
    },
    monthName: {
        fontSize: 16,
    },
    dayNamesContainer: {
        height: 50,
        flexDirection: "row",
        alignItems: "center",
    },
    dayNameContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    dayName: {
        fontSize: 15,
        color: "#bababe",
    },
    dayContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
});
//# sourceMappingURL=Month.js.map