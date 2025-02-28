

export function dataFormat(dat) {
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var d= new Date(dat);
return d.getDate()+'-'+months[d.getMonth()] +'-'+d.getFullYear();
}