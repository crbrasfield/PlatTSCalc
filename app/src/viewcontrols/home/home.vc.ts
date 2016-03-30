import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class HomeViewControl extends BaseViewControl {
    templateString: string = require('./home.vc.html');


    context: any = {
        op1: '',
        op2: '',
        answer: '',
        alert: ''
    };

    checkInputs() {
        if (this.context.op1 === '' || this.context.op2 === '') {
            return true;
        } else {
            this.context.alert = '';
            return false;
        }
    }

    clearInputs() {
        this.context.op1 = '';
        this.context.op2 = '';
    }

    add() {
        if (this.checkInputs()) {
            this.context.alert = 'Input missing';
            return;
        };
        let context = this.context,
            op1 = context.op1,
            op2 = context.op2;
        this.context.answer = op1 + ' + ' + op2 + ' = ' + (parseInt(op1, 10) + parseInt(op2, 10));
        this.clearInputs();
    }

    subtract() {
        if (this.checkInputs()) {
            this.context.alert = 'Input missing';
            return;
        };
        let context = this.context,
            op1 = context.op1,
            op2 = context.op2;
        this.context.answer = op1 + ' - ' + op2 + ' = ' + (parseInt(op1, 10) - parseInt(op2, 10));
        this.clearInputs();

    }

    multiply() {
        if (this.checkInputs()) {
            this.context.alert = 'Input missing';
            return;
        };
        let context = this.context,
            op1 = context.op1,
            op2 = context.op2;
        this.context.answer = op1 + ' * ' + op2 + ' = ' + (parseInt(op1, 10) * parseInt(op2, 10));
        this.clearInputs();

        this.clearInputs();
    }

    divide() {
        if (this.checkInputs()) {
            this.context.alert = 'Input missing';
            return;
        };
        let context = this.context,
            op1 = context.op1,
            op2 = context.op2;
        this.context.answer = op1 + ' / ' + op2 + ' = ' + (parseInt(op1, 10) / parseInt(op2, 10));
        this.clearInputs();

    }


}



register.viewControl('home-vc', HomeViewControl);
