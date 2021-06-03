/// <reference types="react" />
import { LOCALE_TYPE } from "./utils/locale";
export interface Style {
    container?: {};
    monthContainer?: {};
    weekContainer?: {};
    monthNameText?: {};
    dayNameText?: {};
    dayText?: {};
    dayTextColor?: string;
    holidayColor?: string;
    todayColor?: string;
    disabledTextColor?: string;
    selectedDayTextColor?: string;
    selectedDayBackgroundColor?: string;
    selectedBetweenDayTextColor?: string;
    selectedBetweenDayBackgroundTextColor?: string;
}
interface onChangeParams {
    startDate: string | null;
    endDate: string | null;
}
interface Props {
    pastMonthRange?: number;
    futureMonthRange?: number;
    locale?: LOCALE_TYPE;
    startDate?: string;
    endDate?: string;
    onChange: (params: onChangeParams | any) => void;
    style?: Style;
    singleSelectMode?: boolean;
    initialNumToRender?: number;
    flatListProps?: any;
    isMonthFirst?: boolean;
    disabledBeforeToday?: boolean;
    allowFutureDates?: boolean;
}
export default function Index({ pastMonthRange, futureMonthRange, initialNumToRender, locale, startDate: prevStartDate, endDate: prevEndDate, onChange, style, singleSelectMode, flatListProps, isMonthFirst, disabledBeforeToday, allowFutureDates }: Props): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map