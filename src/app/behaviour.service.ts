import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviourService {

  constructor() { }
  public dataSource = new BehaviorSubject("Ishola");
  public arraySource = new BehaviorSubject([]);
}
