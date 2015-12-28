//preprocessing: remove the action_bar_inner div, otherwise it looks odd
var action_bar = document.getElementsByClassName('Answer ActionBar sticky').item(0);
if(action_bar != null)
{
	action_bar.style.position = "";
	action_bar.removeAttribute('sticky');
}

//get an array of the answers
var answers = [].slice.call(document.getElementsByClassName("pagedlist_item"));

//returns the numerical equivalent of a string
//ex. '23' -> 23
//ex. '2.3k' -> 2300
function normalize(num)
{
	if(!isNaN(num)) return parseInt(num);
	console.log(num.substr(0, num.length-1));
	return parseInt(num.substr(0, num.length-1)) * 1000;
}

//sort the answers in descending order
answers.sort(function(a, b){
	var first = normalize(a.getElementsByClassName("count").item(0).innerHTML);
	var second = normalize(b.getElementsByClassName("count").item(0).innerHTML);
	return second - first;
});

//add all of the elements of the array to the document
document.getElementsByClassName("AnswerPagedList PagedList").item(0).innerHTML = "";
answers.forEach(function(entry){
		document.getElementsByClassName("AnswerPagedList PagedList").item(0).innerHTML += entry.innerHTML;
});