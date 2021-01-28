module.exports = function toReadable (number) {
  	
    let hundr = Math.floor(number / 100);
    let tens = Math.floor((number - hundr * 100) / 10);
    let ones = number - hundr * 100 - tens * 10;

	if (number == 0) {
        return 'zero';
    }

    if (tens == 1) {
        tens = 0;
        ones = number - hundr * 100;
    }

    let onesArr = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tensArr = ['', '', 'twenty ', 'thirty ', 'forty ', 'fifty ', 'sixty ', 'seventy ', 'eighty ', 'ninety '];
	let hundrArr = hundr ? onesArr[hundr] + ' hundred ' : '';

    return (hundrArr + tensArr[tens] + onesArr[ones]).trim();
};

