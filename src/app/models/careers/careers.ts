export class Careers {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public state: string,
    public phone: string,
    public subject: string,
    public coverLetter: string,
    public linkedinUrl: string,
    public portfolioUrl: string,
    public resumeUrl: string,
    public message: string = ''
  ) {}
}
