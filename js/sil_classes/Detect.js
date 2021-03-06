function Detect() {}

Detect.prototype.isWithin = function(index, lastIndex, indexEnd, lastEnd, incl) {
	// console.log("---");
	if (typeof(indexEnd)==='undefined') indexEnd = 1;
	if (typeof(lastEnd)==='undefined') lastEnd = 2;
	if (typeof(incl)==='undefined') incl = true;
	// console.log(index+":"+lastIndex+":"+indexEnd+":"+lastEnd);
	// console.log(timeDir[index][1][1]);
	// console.log(bridge[timeDir[index][0][0]].x);
	// console.log(timeDir[lastIndex][1][1]+":"+bridge[timeDir[lastIndex][0][0]].x);
	var span,
		bound;
	switch (indexEnd) {
		case 0: span = 0; break;
		case 1: span = Math.floor(timeDir[index][1][1]*bridge[timeDir[index][0][0]].x); break;
		case 2: span = timeDir[index][1][1]; break;
	}
	switch (lastEnd) {
		case 0: bound = 0; break;
		case 1: bound = Math.floor(timeDir[lastIndex][1][1]*bridge[timeDir[lastIndex][0][0]].x); break;
		case 2: bound = timeDir[lastIndex][1][1]; break;
	}
	if (index > lastIndex) {
		span += this.findInterval(index, false, lastIndex);
	} else {
		bound += this.findInterval(lastIndex, false, index);
	}
	if (incl && span > bound || false === incl && span >= bound) {
		return false;}
	return true;
};
Detect.prototype.isPresent = function(c_i, n_i, indexEnd) {
	if (typeof(c_i)==='undefined' || typeof(n_i)==='undefined') return false;
	if (typeof(indexEnd)==='undefined') indexEnd = 2;
	if (n_i < charDir[c_i].length && now >= charDir[c_i][n_i].s_i && (1 <= bridge[c_i].x || 2 > indexEnd && (0 < bridge[c_i].x || 1 > indexEnd && 0 >= bridge[c_i].x)) || n_i + 1 < charDir[c_i].length && now >= charDir[c_i][n_i + 1].s_i)
		return true;
	return false;
}

Detect.prototype.findInterval = function(index, last, lastIndex) {
	if (typeof(last)==='undefined') last = true;
	if (typeof(lastIndex)==='undefined') lastIndex = 0;

	if (last && index <= 0 || false === last && index <= lastIndex) {
		return 0;
	} else if (last) {
		lastIndex = index - 1;
	}
	if (timeDir[index][1].length < 3) {
		this.logFromBase(index);}/*
	if (timeDir[lastIndex][1].length < 3) {
		logFromBase(lastIndex);
	}*/
	return timeDir[index][1][2] - timeDir[lastIndex][1][2];
};
Detect.prototype.logFromBase = function(index) {
	if (index > 0) {
		if (timeDir[index - 1][1].length < 3) {
			this.logFromBase(index - 1);
		}
		timeDir[index][1].push(this.genFromLast(index) + timeDir[index - 1][1][2]);
	} else {
		timeDir[index][1].push(timeDir[0][1][0]);
	}
};
Detect.prototype.genFromLast = function(index) {
	if (timeDir[index][0][1] > 0) {
		var fromNow = timeDir[index][1][0];
		var i;
		var lastIndex = charDir[timeDir[index][0][0]][timeDir[index][0][1] - 1].s_i;
		for (i = index - 1; i >= lastIndex; i--) {
			if (fromNow >= timeDir[lastIndex][1][1]) {
				return timeDir[index][1][0];
			} else if (i == lastIndex) {
				return timeDir[lastIndex][1][1] - (fromNow - timeDir[index][1][0]);
			}
			if (timeDir[i][1].length < 3 || timeDir[lastIndex][1].length < 3) {
				fromNow += this.genFromLast(i);
			} else {
				fromNow += timeDir[i][1][2] - timeDir[lastIndex][1][2];
				i = lastIndex + 1;
			}
		}
	}
	return timeDir[index][1][0];
};
