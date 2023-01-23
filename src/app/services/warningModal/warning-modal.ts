export class WarningModal {
  public isActive: boolean = false;
  private callback: Function | null = null;
  activate(cb: Function) {
    this.isActive = true;
    this.callback = cb;
  }
  close() {
    this.isActive = false;
    this.callback = null;
  }
  proceed() {
    if (this.callback) this.callback();
    this.close();
  }

  toggle() {
    this.isActive = !this.isActive;
  }
}
