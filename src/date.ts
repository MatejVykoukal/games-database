const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

const getDate = (diff?: number) => {
  const year = new Date().getFullYear();
  const month = getCurrentMonth();
  const day = getCurrentDay();
  const date = diff ? `${year + diff}-${month}-${day}` : `${year}-${month}-${day}`;
  return date;
};

export const [currentDate, prevDate, nextDate] = [getDate(), getDate(-1), getDate(1)];
