const formatDate = (date: string): string => {
  const newDate = new Date(date);
  return Intl.DateTimeFormat('pt-BR').format(newDate);
};
export default formatDate;
