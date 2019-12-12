import { Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class UpperCasePipe implements PipeTransform {
  transform(value: string): string {
    const newValue = value.split(' ');
    const capitalWords: string[] = [];
    for (let word of newValue) {
      capitalWords.push(
        word.charAt(0).toUpperCase() + word.toLowerCase().slice(1),
      );
    }

    return capitalWords.join(' ');
  }
}
