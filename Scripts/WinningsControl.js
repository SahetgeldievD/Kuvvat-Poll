function showAmountWon(){
	if(window.GameVariables.UseTopPrizeText == true){
		if(window.GameVariables.QuestionLevel >= window.GameVariables.TopPrizeQuestionNumber){
			$('.winningsP').html(window.GameVariables.TopPrizeText[window.GameVariables.QuestionLevel - 1]);
			$('.totalPrizeMoneyWonDiv').html(window.GameVariables.TopPrizeText[window.GameVariables.QuestionLevel - 1]);
		}
		else{
			$('.winningsP').html(window.GameVariables.NumberPrefix + new Intl.NumberFormat(window.GameVariables.LocaleCode, window.GameVariables.FormatOptions).format(window.GameVariables.PrizeAmounts[window.GameVariables.QuestionLevel - 1]).replace(window.GameVariables.ReplaceCharacterBefore, window.GameVariables.ReplaceCharacterAfter).trim() + window.GameVariables.NumberSuffix);
			$('.totalPrizeMoneyWonDiv').html(window.GameVariables.NumberPrefix + new Intl.NumberFormat(window.GameVariables.LocaleCode, window.GameVariables.FormatOptions).format(window.GameVariables.PrizeAmounts[window.GameVariables.QuestionLevel - 1]).replace(window.GameVariables.ReplaceCharacterBefore, window.GameVariables.ReplaceCharacterAfter).trim() + window.GameVariables.NumberSuffix);
		}
	}
	else{
		$('.winningsP').html(window.GameVariables.NumberPrefix + new Intl.NumberFormat(window.GameVariables.LocaleCode, window.GameVariables.FormatOptions).format(window.GameVariables.PrizeAmounts[window.GameVariables.QuestionLevel - 1]).replace(window.GameVariables.ReplaceCharacterBefore, window.GameVariables.ReplaceCharacterAfter).trim() + window.GameVariables.NumberSuffix);
		$('.totalPrizeMoneyWonDiv').html(window.GameVariables.NumberPrefix + new Intl.NumberFormat(window.GameVariables.LocaleCode, window.GameVariables.FormatOptions).format(window.GameVariables.PrizeAmounts[window.GameVariables.QuestionLevel - 1]).replace(window.GameVariables.ReplaceCharacterBefore, window.GameVariables.ReplaceCharacterAfter).trim() + window.GameVariables.NumberSuffix);
	}
	$('.winStrapDiv').css('opacity', 1);
}

function hideAmountWon(){
	$('.winStrapDiv').css('opacity', 0);
}

function reduceAmountWon(){
	if(window.GameVariables.QuestionLevel < 6){
		if(window.GameVariables.UseZeronaireText == true){
			$('.totalPrizeMoneyWonDiv').html(window.GameVariables.ZeronaireText);
		}
		else{
			$('.totalPrizeMoneyWonDiv').html(window.GameVariables.NumberPrefix + new Intl.NumberFormat(window.GameVariables.LocaleCode, window.GameVariables.FormatOptions).format(0).replace(window.GameVariables.ReplaceCharacterBefore, window.GameVariables.ReplaceCharacterAfter).trim() + window.GameVariables.NumberSuffix);
		}
	}
	else if(window.GameVariables.QuestionLevel < 11){
		if(window.GameVariables.UseTopPrizeText == true){
			if(window.GameVariables.TopPrizeQuestionNumber > 5){
				$('.totalPrizeMoneyWonDiv').html(window.GameVariables.NumberPrefix + new Intl.NumberFormat(window.GameVariables.LocaleCode, window.GameVariables.FormatOptions).format(window.GameVariables.PrizeAmounts[4]).replace(window.GameVariables.ReplaceCharacterBefore, window.GameVariables.ReplaceCharacterAfter).trim() + window.GameVariables.NumberSuffix);
			}
			else{
				$('.totalPrizeMoneyWonDiv').html(window.GameVariables.TopPrizeText[4]);
			}
		}
		else{
			$('.totalPrizeMoneyWonDiv').html(window.GameVariables.NumberPrefix + new Intl.NumberFormat(window.GameVariables.LocaleCode, window.GameVariables.FormatOptions).format(window.GameVariables.PrizeAmounts[4]).replace(window.GameVariables.ReplaceCharacterBefore, window.GameVariables.ReplaceCharacterAfter).trim() + window.GameVariables.NumberSuffix);
		}
	}
	else {
		if(window.GameVariables.UseTopPrizeText == true){
			if(window.GameVariables.TopPrizeQuestionNumber > 10){
				$('.totalPrizeMoneyWonDiv').html(window.GameVariables.NumberPrefix + new Intl.NumberFormat(window.GameVariables.LocaleCode, window.GameVariables.FormatOptions).format(window.GameVariables.PrizeAmounts[9]).replace(window.GameVariables.ReplaceCharacterBefore, window.GameVariables.ReplaceCharacterAfter).trim() + window.GameVariables.NumberSuffix);
			}
			else{
				$('.totalPrizeMoneyWonDiv').html(window.GameVariables.TopPrizeText[9]);
			}
		}
		else{
			$('.totalPrizeMoneyWonDiv').html(window.GameVariables.NumberPrefix + new Intl.NumberFormat(window.GameVariables.LocaleCode, window.GameVariables.FormatOptions).format(window.GameVariables.PrizeAmounts[9]).replace(window.GameVariables.ReplaceCharacterBefore, window.GameVariables.ReplaceCharacterAfter).trim() + window.GameVariables.NumberSuffix);
		}
	}
}

function showMillionaireTitleStrap(){
	$('.millionaireWinnerTitleDiv').css('opacity', 1);
}

function hideMillionaireTitleStrap(){
	$('.millionaireWinnerTitleDiv').css('opacity', 0);
}

function showTotalPrizeMoneyStrap(){
	$('.totalPrizeMoneyDiv').css('opacity', 1);
}

function hideTotalPrizeMoneyStrap(){
	$('.totalPrizeMoneyDiv').css('opacity', 0);
}