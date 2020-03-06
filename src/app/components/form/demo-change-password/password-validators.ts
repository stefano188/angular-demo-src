import { AbstractControl } from '@angular/forms';
import { resolve } from 'url';

export class PasswordValidators {

    static validOldPassword(control: AbstractControl) {
        return new Promise((resolve) => {
            if (control.value !== 'qwer') {
                resolve({ invalidOldPassword: true });
            } else
                resolve(null);
        })
    }
    
    static shouldMatch(control: AbstractControl) {
        let newPassword = control.get('newPassword').value;
        let confirmPassword = control.get('confirmPassword').value;

        if (newPassword === confirmPassword) return null;

        return { passwordShouldMatch: true }
    }

    static randomSystemUnavailable(control: AbstractControl) {
        return new Promise((resolve) => {
            setTimeout(() => {
                let n = Math.round(Math.random() * 1000) % 2;
                console.log('random', n);
                if (n === 1) 
                    resolve({ raiseError: true })
                else
                    resolve(null);
            }, 2000)
        });
    }
}
