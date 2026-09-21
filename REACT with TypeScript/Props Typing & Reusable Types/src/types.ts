interface Info {
  id: number;
  name: string;
  email: string;
}
interface AdminInfo extends Info {
  role: string;
}
export type { Info, AdminInfo };
