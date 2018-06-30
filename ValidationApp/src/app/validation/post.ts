/* ------------------------------------------------------------------------------------------ */
/**
 * @fileoverview
 *
 *
 * @author  FFS:Hisatoshi Ogata
 * @date    2018/04/12 FFS:Hisatoshi Ogata   Create
 */
/* ------------------------------------------------------------------------------------------ */
/** Copyright (C) 2018 FUJIFILM Corporation. All rights reserved.                             */
/* ------------------------------------------------------------------------------------------ */

import * as cv from 'class-validator';
import * as dc from 'class-validator/decorator/decorators';

export class Post {

  /* Level 1 */
  @dc.Length(10, 20)
  private title: string;
  private text: string;

  /* Level 2 */
  @dc.IsEmail()
  private email: string;

  /* Level 3 */
  @dc.IsDate()
  public date: any;

  /* Level 4 */
  @dc.Matches( /^([1-9]\d*|0)(\.\d+)?$/ )
  public noHint: string;

  /* Level 5 */
  @IsJapanesePostNumber()
  public postNumber: string;

  /* ↓↓↓↓ don't edit!! ↓↓↓↓ */
  public constructor( title: string, text: string, email: string ) {
    this.title = title;
    this.text = text;
    this.email = email;
  }
  /* ↑↑↑↑ don't edit!! ↑↑↑↑ */
}

export function IsJapanesePostNumber(validationOptions?: cv.ValidationOptions) {
  return function (object: Object, propertyName: string) {
    cv.registerDecorator({
      name: 'IsJapanesePostNumber',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: string, args: cv.ValidationArguments) {
          // 課題5はここを実装すること！
          return true;
        }
      }
    });
  };
}
/* -------------------------------------------------------------------------------- */
/*                                                                                  */
/* -------------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------------------------ */
/* EOF                                                                                        */
/* ------------------------------------------------------------------------------------------ */
