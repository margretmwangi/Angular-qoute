export class Qoute {
    showDescription= false;

  constructor(
    public id: number,
    public name: string,
    public description: string,
    public submitter: string,
    public completeDate: Date) {
}
}
