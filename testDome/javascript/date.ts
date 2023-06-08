/**
 * Write a function that converts user entered data formatted as M/D/YYYY to a format required by an API (YYYYMMDD). The parameter "userDate" and the return values are string 
 * 
 * for example, "12/31/2014" should be "20141231"
 */

function formatDate(userDate: string) {
  const newDate = new Date(userDate)

  const date = newDate.getDate()
  // has to be plus 1 since month starts from 0
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();

  const handleSingleDigit = (dateOrMonth: number) => {
    if (dateOrMonth < 10) {
      return `${0}${dateOrMonth}`
    } else {
      return dateOrMonth
    }
  }

  return `${year}${handleSingleDigit(month)}${handleSingleDigit(date)}`
}

console.log(formatDate("12/31/2014"));

// one digit day
console.log(formatDate("12/1/2014"));
// one digit month
console.log(formatDate("1/1/2014"));