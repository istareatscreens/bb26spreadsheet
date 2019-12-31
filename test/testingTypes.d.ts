//stores types used in testing modules
export interface testObject {
    input: any;
    result: any;
    error?: any;
}

export interface testObjectsType {
    bb26toDecimalInputTest: testObject[];
    bb26toDecimalInvalidInputTest: testObject[];
    decimalTobb26InvalidInputTest: testObject[];
    bb26RangeInputTest: testObject[];
    bb26RangeInvalidInputTest: testObject[];
    bb26IncrementInputTest: testObject[];
}
