import { Component, VERSION } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  dictionary: any;
  size: any = 4;
  newPassword: any;
  lettersCheked: any = false;
  checkboxes = [
    {
      id: 'letters',
      label: 'a-z',
      library: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPWRSTUVWXYZ',
      checked: true,
    },

    {
      id: 'numbers',
      label: '0-9',
      library: '0123456789',
      checked: false,
    },
    {
      id: 'symbols',
      label: '!-?',
      library: "!@#$%^&*-_=+\\|:;',.<>/?~",
      checked: false,
    },
  ];
  letters: Boolean = this.checkboxes[0].checked;
  numbers: Boolean = this.checkboxes[1].checked;
  symbols: Boolean = this.checkboxes[2].checked;
  title = 'password-generator';
  name: any = 0;

  constructor(private _snackBar: MatSnackBar) {}

  changeSetting(type: any, value: any) {
    console.log(value);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, { panelClass: 'my-custom-snackbar' });
  }

  onEvent() {
    console.log(this.name);
  }

  generate() {
    console.log(this.letters, this.numbers, this.symbols);

    if (
      this.letters == false ||
      this.letters == false ||
      this.letters == false
    ) {
      this.newPassword = '';
      this._snackBar.open(
        'Please Tick Any One From Letter, Number or Symbols.',
        '',
        { duration: 3000 }
      );
    } else {
      this.dictionary = ([] as string[]).concat(
        this.letters ? this.checkboxes[0].library.split('') : [],
        this.numbers ? this.checkboxes[1].library.split('') : [],
        this.symbols ? this.checkboxes[2].library.split('') : []
      );

      var newPassword = '';
      console.log(this.size);

      for (var i = 0; i < this.size; i++) {
        newPassword +=
          this.dictionary[Math.floor(Math.random() * this.dictionary.length)];
      }

      this.newPassword = newPassword;
    }
    setTimeout(() => {
      this.title = 'Generate Password';
    }, 1000);
  }
}
