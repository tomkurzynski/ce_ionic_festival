import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'dotdotdot'
})

export class DotDotDotPipe implements PipeTransform {

    transform(value: string, limit: number): string {
        if (value) {
            return value.length > limit ? value.substring(0, limit) + '...' : value;
        } else {
            return '';
        }
    }
}