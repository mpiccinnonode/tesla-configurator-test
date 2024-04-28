export class SelectComparatorHelper {
  static compareCode(opt1: { code: string }, opt2: { code: string }): boolean {
    return opt1 && opt2 ? opt1.code === opt2.code : opt1 === opt2;
  }

  static compareId(opt1: { id: number }, opt2: { id: number }): boolean {
    return opt1 && opt2 ? opt1.id === opt2.id : opt1 === opt2;
  }
}
