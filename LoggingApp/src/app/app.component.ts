import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  /** ログリスト */
  private logString = '';
  /** 定期処理 */
  private subscription;

  /**
   * 自動処理開始
   */
  ngOnInit(): void {
    this.subscription = interval(10000).subscribe(() => {
      this.sendLogList();
    });
  }

  /**
   * 自動処理終了
   */
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  /**
   * INFOボタンクリック処理
   */
  public onClickInfo() {
    this.logging('INFO', 'Info button clicked!');
  }

  /**
   * WARNボタンクリック処理
   */
  public onClickWarn() {
    this.logging('WARN', 'Warn button clicked!');
  }

  /**
   * ERRORボタンクリック処理
   */
  public onClickError() {
    this.logging('ERROR', 'Error button clicked!');
  }

  /**
   * エラー出力共通処理
   */
  private logging(level:string, message:string) {
    const log = '[' + level + ']' + message + '\n';
    this.logString += log;
  }

  private sendLogList() {
    const now = new Date();
    const time = now.toLocaleTimeString();
    sessionStorage.setItem(time, this.logString);
    this.logString = '';
  }

}
