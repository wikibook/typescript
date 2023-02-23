type Option<T> = {
  hasValue: true;
  value: T;
} | {
  hasValue: false;
};