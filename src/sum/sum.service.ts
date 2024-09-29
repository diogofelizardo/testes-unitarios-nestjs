import { Injectable } from '@nestjs/common';

@Injectable()
export class SumService {
  sum(a: number, b: number): number {
    return a + b;
  }
}