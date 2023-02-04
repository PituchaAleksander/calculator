import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public numbers: Array<Array<string>> = [['1','2','3'],['4','5','6'],['7','8','9']];
  public operators: Array<string> = ['-','+','*','/','='];
  public display = '';
  public operator = '';
  public a: number=0;
  public b: number=0;

  public click(character: string){
    if(this.numbers[0].includes(character) ||
      this.numbers[1].includes(character) ||
      this.numbers[2].includes(character)){
      this.display = this.display + character;
    } else if (this.display == '' && character == '-'){
      this.display = this.display + character;
    } else if (character != '=' && this.operators.includes(character)){
      this.operator = character;
      this.a = +this.display;
      this.display = '';
    } else if (character == '=' && this.display != ''){
      this.b = +this.display;
      if(this.operator == '/'){
        this.display = (this.a/this.b).toString();
      } else if(this.operator == '-'){
        this.display = (this.a-this.b).toString();
      } else if(this.operator == '+'){
        this.display = (this.a+this.b).toString();
      } else if(this.operator == '*'){
        this.display = (this.a*this.b).toString();
      }
      this.operator = '';
    }
  }

  public clear(){
    this.display = '';
    this.operator = '';
    this.a = 0;
    this.b = 0;
  }

}
