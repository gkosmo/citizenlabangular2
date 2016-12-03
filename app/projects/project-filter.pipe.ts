import {  PipeTransform, Pipe } from '@angular/core';
import { Iproject } from './project';

@Pipe({
    name: 'projectFilter'
})
export class projectFilterPipe implements PipeTransform {

    transform(value: Iproject[], filterBy: string): Iproject[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((project: Iproject) =>
            project.description.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}
