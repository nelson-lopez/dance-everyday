import { Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ConvertDatePipe implements PipeTransform {
  /**
   * * This pipe transform helps sanitize incoming date request
   * * Instead of receiving "12/12/19" we get "Thu Dec 12 2019"
   */
  transform(value: string) {
    const newDate = new Date(value);

    return newDate.toDateString();
  }
}
