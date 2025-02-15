function renderMoneyTreeTable(){
	var htmlTableString = "";
	
	for (var i = 14; i >= 0; i--){
		htmlTableString += "<tr id='moneyTreeTr" + (i+1) + "'>";
		
		if((i+1)%5 === 0){
			htmlTableString += "<td class='moneyTreeLevelWhiteTd'>";
		}
		else{
			htmlTableString += "<td class='moneyTreeLevelTd'>";
		}
		
		htmlTableString += (new Intl.NumberFormat('en', { numberingSystem: window.GameVariables.LevelNumberingSystem }).format(i + 1));
		htmlTableString += "</td>"
		htmlTableString += "<td class='moneyTreeDiagonalTd'></td>"
		
		if((i+1)%5 === 0){
			htmlTableString += "<td class='moneyTreeAmountWhiteTd'>"
		}
		else{
			htmlTableString += "<td class='moneyTreeAmountTd'>"
		}
		
		if(i >= window.GameVariables.TopPrizeQuestionNumber - 1)
		{
			if(window.GameVariables.UseTopPrizeText == true){
				htmlTableString += window.GameVariables.TopPrizeText[i];
			}
			else{
				htmlTableString += window.GameVariables.NumberPrefix + new Intl.NumberFormat(window.GameVariables.LocaleCode, window.GameVariables.FormatOptions).format(window.GameVariables.PrizeAmounts[i]).replace(window.GameVariables.ReplaceCharacterBefore, window.GameVariables.ReplaceCharacterAfter).trim() + window.GameVariables.NumberSuffix;
			}
		}
		else
		{
			htmlTableString += window.GameVariables.NumberPrefix + new Intl.NumberFormat(window.GameVariables.LocaleCode, window.GameVariables.FormatOptions).format(window.GameVariables.PrizeAmounts[i]).replace(window.GameVariables.ReplaceCharacterBefore, window.GameVariables.ReplaceCharacterAfter).trim() + window.GameVariables.NumberSuffix;
		}

		
		htmlTableString += "</td>"
		htmlTableString += "</tr>"
	}
	
	$('.moneyTreeTable').html(htmlTableString);
}

function slideInMoneyTree(){
	$('.moneyTreeDiv').transition({perspective:0, 'right': '-42px'}, 750, 'cubic-bezier(0.375,0,0.625,1)');
}

function setLevelOnMoneyTree(level){
	$('.moneyTreeLevelWhiteTd').css('color','#FFEEA7');
	$('.moneyTreeAmountWhiteTd').css('color','#FFEEA7');
	$('.moneyTreeLevelTd').css('color','#E68721');
	$('.moneyTreeAmountTd').css('color','#E68721');
	$('.moneyTreeAmountWhiteTd').css('background-color','transparent');
	$('.moneyTreeAmountTd').css('background-color','transparent');
	$('.moneyTreeLevelWhiteTd').css('background-color','transparent');
	$('.moneyTreeLevelTd').css('background-color','transparent');
	$('.moneyTreeDiagonalTd').css('background-color','transparent');
	$('.moneyTreeDiagonalTd, .moneyTreeDiagonalWhiteTd').css('background-image','none');

	for(var i = 1; i < level; i++){
		var targetId = '#moneyTreeTr' + i;
		$(targetId + ' .moneyTreeDiagonalTd').css('background-image','url(' + 'Images/money_tree_diagonal.png' +')');
		
		if((i + 1) == level){
			$(targetId + ' td').css('background-color','#E68721');
			$(targetId + ' .moneyTreeLevelTd, ' + targetId + ' .moneyTreeLevelWhiteTd').css('color','#FFEEA7');
			$(targetId + ' .moneyTreeAmountTd, ' + targetId + ' .moneyTreeAmountWhiteTd').css('color','#000000');
		}
	}
}

function scaleTreeLevels(level){
	var targetId = '#moneyTreeTr' + level;
	
	var previousTargetId = '#moneyTreeTr' + (level - 1);
	
	$(targetId + ' td').css('background-color','#E68721');
	$(targetId + ' .moneyTreeLevelTd, ' + targetId + ' .moneyTreeLevelWhiteTd').css('color','#FFEEA7');
	$(targetId + ' .moneyTreeAmountTd, ' + targetId + ' .moneyTreeAmountWhiteTd').css('color','#000000');
	$(targetId + ' .moneyTreeDiagonalTd').css('background-image','url(' + 'Images/money_tree_diagonal.png' +')');
	
	if((level - 1) % 5 === 0){
		$(previousTargetId + ' td').css('background-color','transparent');
		$(previousTargetId + ' .moneyTreeLevelWhiteTd').css('color','#FFEEA7');
		$(previousTargetId + ' .moneyTreeAmountWhiteTd').css('color','#FFEEA7');
	}
	else{
		$(previousTargetId + ' td').css('background-color','transparent');
		$(previousTargetId + ' .moneyTreeLevelTd').css('color','#E68721');
		$(previousTargetId + ' .moneyTreeAmountTd').css('color','#E68721');
	}
	
	if(level < 15){
		window.GameVariables.ScaleTreeTimeout = setTimeout(function(){
			scaleTreeLevels(level + 1);
		}, 250);
	}
}

function unscaleTreeLevels(level){
	clearTimeout(window.GameVariables.ScaleTreeTimeout);
	$('.moneyTreeLevelWhiteTd').css('color','#FFEEA7');
	$('.moneyTreeAmountWhiteTd').css('color','#FFEEA7');
	$('.moneyTreeLevelTd').css('color','#E68721');
	$('.moneyTreeAmountTd').css('color','#E68721');
	$('.moneyTreeAmountWhiteTd').css('background-color','transparent');
	$('.moneyTreeAmountTd').css('background-color','transparent');
	$('.moneyTreeLevelWhiteTd').css('background-color','transparent');
	$('.moneyTreeLevelTd').css('background-color','transparent');
	$('.moneyTreeDiagonalTd').css('background-color','transparent');
	$('.moneyTreeDiagonalTd, .moneyTreeDiagonalWhiteTd').css('background-image','none');
	setLevelOnMoneyTree(window.GameVariables.QuestionLevel);
}

function showMoneyTree(){
	$('.moneyTreeDiv').css('opacity', 1);
}

function hideMoneyTree(){
	$('.moneyTreeDiv').css('opacity', 0);
}

function hideLevelStrap(){
	$('.currentLevelStrapDiv').transition({perspective:0, 'right':'-665px'}, 750, 'ease-in');
}

function showLevelStrap(){
	if(window.GameVariables.UseTopPrizeLevelStrapText == true){
		if(window.GameVariables.QuestionLevel >= window.GameVariables.TopPrizeLevelStrapQuestionNumber){
			$('.currentLevelStrapAmountDiv').html(window.GameVariables.TopPrizeLevelStrapText[window.GameVariables.QuestionLevel - 1]);
		}
		else{
			if(window.GameVariables.UseTopPrizeText == true){
				if(window.GameVariables.QuestionLevel >= window.GameVariables.TopPrizeQuestionNumber){
					$('.currentLevelStrapAmountDiv').html(window.GameVariables.TopPrizeText[window.GameVariables.QuestionLevel - 1]);
				}
				else{
					$('.currentLevelStrapAmountDiv').html(window.GameVariables.NumberPrefix + new Intl.NumberFormat(window.GameVariables.LocaleCode, window.GameVariables.FormatOptions).format(window.GameVariables.PrizeAmounts[window.GameVariables.QuestionLevel - 1]).replace(window.GameVariables.ReplaceCharacterBefore, window.GameVariables.ReplaceCharacterAfter).trim() + window.GameVariables.NumberSuffix);
				}
			}
			else{
				$('.currentLevelStrapAmountDiv').html(window.GameVariables.NumberPrefix + new Intl.NumberFormat(window.GameVariables.LocaleCode, window.GameVariables.FormatOptions).format(window.GameVariables.PrizeAmounts[window.GameVariables.QuestionLevel - 1]).replace(window.GameVariables.ReplaceCharacterBefore, window.GameVariables.ReplaceCharacterAfter).trim() + window.GameVariables.NumberSuffix);
			}
		}
	}
	else{
		$('.currentLevelStrapAmountDiv').html(window.GameVariables.NumberPrefix + new Intl.NumberFormat(window.GameVariables.LocaleCode, window.GameVariables.FormatOptions).format(window.GameVariables.PrizeAmounts[window.GameVariables.QuestionLevel - 1]).replace(window.GameVariables.ReplaceCharacterBefore, window.GameVariables.ReplaceCharacterAfter).trim() + window.GameVariables.NumberSuffix);
	}
	if(window.GameVariables.QuestionLevel >= 15){
		$('.sideStrapGoldImg').css('opacity', 1);
	}
	$('.currentLevelStrapDiv').transition({perspective:0, 'right':'0px'}, 750, 'ease-out');
}

function animateLevelStrapGlow(){
	
}







