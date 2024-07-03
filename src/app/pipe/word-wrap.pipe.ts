import { Pipe, PipeTransform } from '@angular/core';
import { WordWrapService } from '../service/word-wrap.service';

@Pipe({
  name: 'wordWrap',
})
export class WordWrapPipe implements PipeTransform {
  constructor(private wordWrapService: WordWrapService) {}
  transform(value: string, maxLineLength: number): string {
    return this.wordWrapService.wrapWords(value, maxLineLength);
  }
}
