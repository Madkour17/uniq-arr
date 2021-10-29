
import { unique } from '../index'


// const res =  unique([1, 2, 1, 8, 7, 2, 6])

// console.log('res: ', res)

test("first test", () => {
    expect(unique([1, 2, 1, 8, 7, 2, 6])).toStrictEqual([1, 2, 8, 7, 6]);
})