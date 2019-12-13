import { Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class VenueUpperCasePipe implements PipeTransform {
  transform(name: string): string {
    const wordsArray: string[] = name.split(' ');
    const capitalizedWords: string[] = [];

    for (let word of wordsArray) {
      capitalizedWords.push(
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
      );
    }

    return capitalizedWords.join(' ');
  }
}
