export interface IOptions {
  value: string;
  label: string;
}

export interface ISchedulesItems {
  week_day: number | null;
  from: string;
  to: string;
}

export interface ITotalConnections {
  total: number;
}
