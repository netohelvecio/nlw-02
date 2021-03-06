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
  cost: string;
  schedule: ISchedulesItems[];
}

export type FieldContainerProps = {
  error: boolean | undefined;
};

export interface IUser {
  id: string;
  name: string;
  whatsapp: string;
  bio: string;
}

export interface IClass {
  id: string;
  subject: string;
  cost: string;
  user_id: string;
}

export interface IClassSchedule {
  id: string;
  week_day: number;
  from: number;
  to: number;
  class_id: string;
}

export interface ITeacherList {
  id: string;
  week_day: number;
  from: number;
  to: number;
  class_id: string;
  class: {
    id: string;
    subject: string;
    user_id: string;
    cost: number;
    user: {
      id: string;
      name: string;
      avatar: string;
      whatsapp: string;
      bio: string;
    };
  };
}

export interface ISearchClassForm {
  subject: string;
  week_day: string;
  time: string;
}
