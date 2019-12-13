import { Injectable, PipeTransform } from '@nestjs/common';

@Injectable()

/**
 * TODO: Possibly implement UpperCasePipe as a global Pipe
 * TODO: Possibly implement a more efficient algorithm
 */
export class VenueUpperCasePipe implements PipeTransform {
  transform(name: string): string {
    /**
     * * We have to split the incoming string from the request body into an array
     * * to help iterate through every word in a sentence and properly capitalize each word inside of the given string
     */
    const wordsArray: string[] = name.split(' ');
    const capitalizedWords: string[] = [];

    for (let word of wordsArray) {
      /**
       * * Once we slice the rest of the word we have to set the remaining letters to lower case
       * * this helps us keep a sanitized venue name to be saved into the database
       */

      capitalizedWords.push(
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
      );
    }

    return capitalizedWords.join(' ');
  }
}
