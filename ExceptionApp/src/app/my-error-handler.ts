import { Injectable, ErrorHandler } from "@angular/core";

/**
 * 集約例外処理
 */
@Injectable()
export class MyErrorHandler extends ErrorHandler {

    constructor() {
        super();
    }

    /**
     * エラー発生時の処理
     * @param error
     */
    public handleError(error: string): void {
        // ここにエラー処理を書く
    }

}
