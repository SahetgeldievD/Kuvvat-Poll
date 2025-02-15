function revealFastestFingerQuestion(){
	revealQuestionAndAnswerStraps();
}

function revealFastestFingerContestants(){
	$('.contestantNameAndLocationDiv').css('opacity', 1);
	$('.contestantNameP').html(window.GameVariables.FastestFingerContestants[window.GameVariables.RevealFastestFingerContestantCounter].FirstName + ' ' + window.GameVariables.FastestFingerContestants[window.GameVariables.RevealFastestFingerContestantCounter].LastName);
	$('.contestantLocationP').html(window.GameVariables.FastestFingerContestants[window.GameVariables.RevealFastestFingerContestantCounter].Location);
	window.GameVariables.RevealFastestFingerContestantCounter++;
}
function hideContestantNameAndLocation(){
	$('.contestantNameAndLocationDiv').css('opacity', 0);
}

function hideFastestFingerQuestionAndAnswers(){
	$('.answerStrapDiv').css('opacity', 0);
	$('.questionStrapDiv').css('opacity', 0);
	$('#answerA .letterP, #answerB .letterP, #answerC .letterP, #answerD .letterP').css('opacity', 0);
	$('#answerA .answerP, #answerB .answerP, #answerC .answerP, #answerD .answerP').css('opacity', 0);
	$('#answerA .diagonalImg, #answerB .diagonalImg, #answerC .diagonalImg, #answerD .diagonalImg').css('opacity', 0);
}

function showFastestFingerAnswerTree(){
	$('.fastestFingerRevealOrderDiv').transition({perspective:0,'right':'-42px'}, 750, 'cubic-bezier(0.375,0,0.625,1)');
}

function hideFastestFingerAnswerTree(){
	$('.fastestFingerRevealOrderDiv').css('right','-920px');
	$('.fastestFingerTreeAnswerDiv').css('left','920px');
}

function revealFastestFingerAnswersinCorrectOrder(){
	window.GameVariables.FastestFingerRevealAnswerCounter++;
	
	var targetId = '#fastestAnswerOrder' + window.GameVariables.FastestFingerRevealAnswerCounter;
	$(targetId).transition({perspective:0,'left':'-65px'}, 350);
	
	if(window.GameVariables.FastestFingerRevealAnswerCounter == 4){
		window.GameVariables.FastestFingerRevealAnswerCounter = 0;
	}
}

function showFastestFingerContestants(){
	for(var i = 0; i < 10; i++){
		var targetId = '#fastestContestant' + (i + 1);
		$(targetId + ' .fastestContestantTimeP').html(window.GameVariables.FastestFingerContestantTimes[i]);
	}
	
	$('.fastestFingerContestantsDiv').css('opacity', 1);
	$('#stageBackgroundImg').css('opacity', 1);
}

function revealFastestFingerWinnersAndTimes(){
	window.GameVariables.RevealFastestFingerWinnersCounter++;
	
	if(window.GameVariables.RevealFastestFingerWinnersCounter <= 10){
		if(window.GameVariables.FastestFingerContestantWinners[window.GameVariables.RevealFastestFingerWinnersCounter - 1] == true){
			var targetId = '#fastestContestant' + window.GameVariables.RevealFastestFingerWinnersCounter;
			
			$(targetId + ' .fastestTimeCorrectFillImg').css('opacity', 1);
			$(targetId + ' .fastestFingerLeftGlowImg').css('opacity', 0);
			$(targetId + ' .fastestFingerRightGlowImg').css('opacity', 0);
			$(targetId + ' .fastestFingerLeftGlowWhiteImg').css('opacity', 1);
			$(targetId + ' .fastestFingerRightGlowWhiteImg').css('opacity', 1);
			$(targetId + ' .fastestContestantTimeP').css({'opacity':1, 'color':'#FFFFFF'});
		}
		
		setTimeout(revealFastestFingerWinnersAndTimes, 100);
	}else{
		window.GameVariables.RevealFastestFingerWinnersCounter = 0;
	}
}

function flashFastestTimeStep1(){
	var targetId = '#fastestContestant' + window.GameVariables.FastestFingerConstestantWinner;
	$(targetId + ' .fastestTimeCorrectFillImg').css('opacity', 0);
	$(targetId + ' .fastestFingerLeftGlowImg').css('opacity', 1);
	$(targetId + ' .fastestFingerRightGlowImg').css('opacity', 1);
	$(targetId + ' .fastestFingerLeftGlowWhiteImg').css('opacity', 0);
	$(targetId + ' .fastestFingerRightGlowWhiteImg').css('opacity', 0);
	$(targetId + ' .fastestContestantTimeP').css('opacity', 0);
	window.GameVariables.ShowWinnerTimeout = setTimeout(flashFastestTimeStep2, 150);
}

function flashFastestTimeStep2(){
	var targetId = '#fastestContestant' + window.GameVariables.FastestFingerConstestantWinner;
	$(targetId + ' .fastestTimeCorrectFillImg').css('opacity', 1);
	$(targetId + ' .fastestFingerLeftGlowImg').css('opacity', 0);
	$(targetId + ' .fastestFingerRightGlowImg').css('opacity', 0);
	$(targetId + ' .fastestFingerLeftGlowWhiteImg').css('opacity', 1);
	$(targetId + ' .fastestFingerRightGlowWhiteImg').css('opacity', 1);
	$(targetId + ' .fastestContestantTimeP').css('opacity', 1);
	window.GameVariables.ShowWinnerTimeout = setTimeout(flashFastestTimeStep1, 150);
}

function showTheFastestFingerWinner(){
	$('.fastestFingerContestantsDiv').css('opacity', 0);
	$('#stageBackgroundImg').css('opacity', 0);
	$('#fastestContestant').css('opacity', 1);
	clearTimeout(window.GameVariables.ShowWinnerTimeout);
	$('#fastestContestant .fastestContestantNameP').html(window.GameVariables.FastestFingerContestants[window.GameVariables.FastestFingerConstestantWinner - 1].FirstName + ' ' + window.GameVariables.FastestFingerContestants[window.GameVariables.FastestFingerConstestantWinner - 1].LastName);
	$('#fastestContestant .fastestContestantTimeP').html(window.GameVariables.FastestFingerContestantTimes[window.GameVariables.FastestFingerConstestantWinner - 1]);
	$('.millionaireWinnerNameDiv').html(window.GameVariables.FastestFingerContestants[window.GameVariables.FastestFingerConstestantWinner - 1].FirstName + ' ' + window.GameVariables.FastestFingerContestants[window.GameVariables.FastestFingerConstestantWinner - 1].LastName);
	$('.contestantNameP').html(window.GameVariables.FastestFingerContestants[window.GameVariables.FastestFingerConstestantWinner - 1].FirstName + ' ' + window.GameVariables.FastestFingerContestants[window.GameVariables.FastestFingerConstestantWinner - 1].LastName)
	$('.contestantLocationP').html(window.GameVariables.FastestFingerContestants[window.GameVariables.FastestFingerConstestantWinner - 1].Location);
}

function hideTheFastestFingerWinner(){
	$('#fastestContestant').css('opacity', 0);
}