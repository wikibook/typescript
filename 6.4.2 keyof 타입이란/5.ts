const mmConversionTable = {
  mm: 1,
  cm: 10, // ← 이 행을 추가
  m: 1e3,
  km: 1e6,
};

function convertUnits(value: number, unit: keyof typeof mmConversionTable) {
  const mmValue = value * mmConversionTable[unit];
  return {
    mm: mmValue,
    m: mmValue / 1e3,
    km: mmValue / 1e6
  };
}

// { "mm": 3000000, "m": 3000, "km": 3 }라고 출력된다
console.log(convertUnits(300000, "cm"));
