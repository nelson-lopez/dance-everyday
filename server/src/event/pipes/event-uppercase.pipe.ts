import { Injectable, PipeTransform } from '@nestjs/common';

@Injectable()

/**
 * TODO: Possibly implement UpperCasePipe as a global Pipe
 * TODO: Possibly implement a more efficient algorithm
 */
export class EventUpperCasePipe implements PipeTransform {
  transform(value: string): string {
    /**
     * * We have to split the incoming string from the request body into an array
     * * to help iterate through every word in a sentence and properly capitalize each word inside of the given string
     */
    const newValue = value.split(' ');
    const capitalWords: string[] = [];

    for (let word of newValue) {
      /**
       * * Once we slice the rest of the word we have to set the remaining letters to lower case
       * * this helps us keep a sanitized venue name to be saved into the database
       */

      capitalWords.push(
        word.charAt(0).toUpperCase() + word.toLowerCase().slice(1),
      );
    }

    return capitalWords.join(' ');
  }
}
