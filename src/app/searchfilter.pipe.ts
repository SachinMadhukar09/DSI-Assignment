import { Pipe, PipeTransform } from '@angular/core';
import { UserDataService } from './user-data.service';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(): unknown {
    return null;
  }

  constructor(private userDataService:UserDataService ){

  }

}
