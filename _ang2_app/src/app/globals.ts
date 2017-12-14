// globals.ts
import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
  role: string = 'test';
  username: string = 'Mysterious Stanger';
  gamemode: number = 0;
  music: boolean = false;
}