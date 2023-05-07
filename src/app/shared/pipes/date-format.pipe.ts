import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: Date, ...args: unknown[]): string {
    let tzOffset = (new Date(value)).getTimezoneOffset() * 60000;
    let localIsoTime =  (new Date(Date.now() - tzOffset)).toISOString().replace('Z', '').replace('T', ' ');
    return localIsoTime;
  }

}
