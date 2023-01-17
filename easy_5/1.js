function dms(input) {
  
  input = normalize(input);
  let int = input.toString().split('.')[0]
  let decimal = input - Number(int)

  let totalSeconds = Math.round(decimal * 3600);
  
  let minutes = Math.floor(totalSeconds / 60);
  let displaySeconds = totalSeconds % 60;

  console.log(`${clean(int)}\xB0${clean(minutes)}'${clean(displaySeconds)}"`)
  
  
}
function clean(number) {
  let string = String(number);
  return string.length < 2 ? ('0' + string) : string;
}

function normalize(input) {
  while (input < 0) {
    input += 360;
  }
  while (input > 360) {
    input -= 360;
  }
  return input;
}

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"

dms(-1);   // 359°00'00"
dms(400);  // 40°00'00"
dms(-40);  // 320°00'00"
dms(-420); // 300°00'00"