export class Contact {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public message: string,
    public state: string,
    public phone: string,
    public subject: string
  ) {}
}
