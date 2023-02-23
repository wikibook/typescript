function convertUnits(value: number, unit: string) {
  // 에러: Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{ mm: number; m: number; km: number; }'.
  //          No index signature with a parameter of type 'string' was found on type '{ mm: number; m: number; km: number; }'.
  const mmValue = value * mmConversionTable[unit];
  return {
    mm: mmValue,
    m: mmValue / 1e3,
    km: mmValue / 1e6
  };
}