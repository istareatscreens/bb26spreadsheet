//stores types used in testing modules
interface twoInput {
  a: any;
  b: any;
}

export interface testObject {
  input: any;
  result: any;
  error?: TypeErrorConstructor | ErrorConstructor;
}
