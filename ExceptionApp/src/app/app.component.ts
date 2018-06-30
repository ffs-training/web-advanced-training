import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /** クリック回数 */
  public clickTimes = 0;

  /**
   * ボタンクリック処理
   */
  public onClick() {
    this.clickTimes++;
    console.log(this.clickTimes + '回カウントアップされました。');
  }

  /**
   * ランダムにbool値を返す
   */
  private getRandomFlag(): boolean {
    const value = Math.random(); // ０～1のランダムな値
    if (value < 0.2) { // 20%の確率でfalseを返す
      return false;
    }
    return true;
  }

}
