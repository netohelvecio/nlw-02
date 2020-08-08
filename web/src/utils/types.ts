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

export interface IClassForm {
  name: string;
  bio: string;
  whatsapp: string;
  subject: string;
  cost: number;
  schedule: ISchedulesItems[];
}

export type FieldContainerProps = {
  error: boolean | undefined;
};
