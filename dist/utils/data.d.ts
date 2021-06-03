export interface Day_Type {
    date: string | null;
    type: string | null;
    isToday: boolean;
    isBeforeToday: boolean;
    isHoliday: boolean;
    isAfterToday: boolean;
}
export declare type Week_Type = Day_Type[];
export interface Month_Type {
    year: number;
    month: number;
    id: string;
}
export declare function getMonths(pastMonthRange: number, futureMonthRange: number): any;
export declare function getWeeks(month: string, startDate: string | null, endDate: string | null): any;
//# sourceMappingURL=data.d.ts.map