export const getYearString = (years: number): string => {
  const remainder10 = years % 10;
  const remainder100 = years % 100;

  if (remainder10 === 1 && remainder100 !== 11) {
    return `${years} рік`;
  } else if (remainder10 >= 2 && remainder10 <= 4 && (remainder100 < 10 || remainder100 >= 20)) {
    return `${years} роки`;
  } else {
    return `${years} років`;
  }
};
