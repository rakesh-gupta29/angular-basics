interface Author {
  name: string;
  avatar: string;
  id: string;
}
type Tags = ['react', 'css', 'html'];
export class Blog {
  constructor(
    public id: string,
    public title: string,
    public coverImage: string,
    public tags: Partial<Tags>,
    public content: string,
    public author: Author,
    public createdAt: Date,
    public subTitle: string,
    public likeCount = 0
  ) {}
}
