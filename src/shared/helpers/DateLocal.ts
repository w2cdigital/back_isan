function dateLocal(): Date {
  const [date, hour] = new Date()
    .toLocaleString('pt-br', { timeZone: 'America/Sao_Paulo' })
    .split(', ');

  const convertDate = date.split('/').reverse().join('-');

  const stringDate = `${convertDate}T${hour}.000Z`;

  return new Date(stringDate);
}

function convertDateToString(date: Date): string {
  const [dateString] = date
    .toLocaleString('pt-br', { timeZone: 'America/Sao_Paulo' })
    .split(', ');

  const convertDate = dateString.split('/').reverse().join('-');

  return `${convertDate}`;
}

function writtenDateFormatBr(date: Date): string {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const monthFormated = month < 10 ? `0${month}` : month;
  const dayFormated = day < 10 ? `0${day}` : day;

  return `${dayFormated}/${monthFormated}/${year}`;
}

export { dateLocal, writtenDateFormatBr, convertDateToString };
