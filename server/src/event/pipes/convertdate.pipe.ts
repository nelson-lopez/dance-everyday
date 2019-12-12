import { Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ConvertDatePipe implements PipeTransform {
  transform(value: string) {
    const newDate = new Date(value);

    return newDate.toDateString();
  }
}
