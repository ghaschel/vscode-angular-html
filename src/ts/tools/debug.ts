import * as vscode from 'vscode';

export class Debug {
  private enabled: boolean = false;

  private outputChannel?: vscode.OutputChannel;

  public constructor() {
    this.updateStatus();
  }

  public init(): void {
    this.outputChannel = vscode.window.createOutputChannel('vscode-angular-html');
  }

  public updateStatus(): void {
    this.enabled = vscode.workspace.getConfiguration().get('vscode-angular-html.debug') as boolean;

    if (!this.enabled && this.outputChannel) {
      this.dispose();
    } else if (!this.outputChannel && this.enabled) {
      this.init();
    }
  }

  public log(val: unknown): void {
    if (this.enabled && this.outputChannel) {
      this.outputChannel.appendLine(JSON.stringify(val, null, 2));
    }
  }

  public dispose(): void {
    this.outputChannel!.dispose();

    delete this.outputChannel;
  }
}
