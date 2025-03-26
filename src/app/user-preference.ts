import {MealChoice} from './meal-choice';
import {PortionSize} from './portion-size';

export class UserPreference {
  UserName: string = "";
  mealChoice: MealChoice=MealChoice.FISH;
  notSpicy:boolean=false;
  portionSize:PortionSize=PortionSize.MEDIUM;

}

