import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from '../comm/Message.js';
import InOutputError from '../validate/InOutputValidate.js';

class UserView{

    constructor(){
        this.inOutputError = new InOutputError();
        
    }

    async userInputPurchaseAmount(){
        return await Console.readLineAsync(MESSAGE.MSG_PURCHASE_AMOUNT+'\n');
    }

    async userInputWinningNumbers(){
        return await Console.readLineAsync(MESSAGE.MSG_WINNING_NUMBERS+'\n');
    }

    async userInputBonusNumber(){
        return await Console.readLineAsync(MESSAGE.MSG_BONUS_NUMBER+'\n');
    }

    userOutputLottoCount(purchaseAmount){
        Console.print(Number(purchaseAmount)/1000+MESSAGE.MSG_LOTTO_COUNT);
    }

    userOutputPurchaseLottoNumber(purchaseLottoNumbers){
        Console.print(purchaseLottoNumbers);
    }

}

export default UserView