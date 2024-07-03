import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WordWrapService {
  constructor() {}

  wrapWords(text: string, maxLineLength: number): string {
    const words = text.split(' ');
    let lines: string[] = [];
    let currentLine = '';

    words.forEach((word) => {
      if ((currentLine + word).length > maxLineLength) {
        lines.push(currentLine.trim());
        currentLine = word + ' ';
      } else {
        currentLine += word + ' ';
      }
    });

    if (currentLine.length > 0) {
      lines.push(currentLine.trim());
    }

    return lines.join('\n');
  }
}
