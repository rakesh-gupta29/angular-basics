export interface Employee {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: Partial<Company>;
  address: Address;
}
interface Company {
  name: string;
  yearFounded: string;
  catchPhrase: string;
  bs: string;
}
interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo?: {
    lat: string;
    lng: string;
  };
}

export interface MetaData {
  totalEmps: number;
  startIndex: number;
  endIndex: number;
}
