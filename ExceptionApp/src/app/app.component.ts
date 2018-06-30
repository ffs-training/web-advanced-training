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
    if (this.getRandomFlag()) {
      this.clickTimes++;
    } else {
      throw new Error('flag is FALSE!');
    }
    console.log(this.clickTimes + '回カウントアップされました。');
  }

  /**
   * ランダムにbool値を返す
   */
  private getRandomFlag(): boolean {
    const value = Math.random(); // ０～1のランダムな値
    if (value < 0.2) { // 20%の確率でfalseを返す

      return false;
    } else if (value < 0.4) { // 20%の確率でエラー発生
      throw new Error('Error in Creating random Flag!');
    }
    return true;
  }

}
