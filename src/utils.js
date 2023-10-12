export const getDayName = day=>{
  let dayName = '';
  switch (day) {
    case 2:
      dayName = 'MARTES';
      break;
    case 3:
      dayName = 'MIERCOLES';
      break;
    case 4:
      dayName = 'JUEVES';
      break;
    case 5:
      dayName = 'VIERNES';
      break;
    case 6:
      dayName = 'SABADO';
      break;
    default:
      dayName = '--';
      break;
  }
  return dayName;
};
