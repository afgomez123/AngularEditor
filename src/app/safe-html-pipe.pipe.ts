import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

/**
 *
 *
 * Para usar los estilos de los modales que vienen de SVN debe usar este pipe
 */
@Pipe({
  name: 'safeHtmlPipe',
})
export class SafeHtmlPipePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
