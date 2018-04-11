import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import 'rxjs/Rx';
import { AuthService } from '../auth/auth.service';

@Injectable()

export class DataStorageService {

  constructor(
    private httpClient: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) { }

  storeRecipes() {
    // return this.httpClient.put('https://udemy-http-e3e1e.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {
    //   observe: 'body',
    //   params: new HttpParams().set('auth', token)
    //   // headers: new HttpHeaders().set('Authorization', 'Bearer 1asddsssdfaasdfw')
    // });
    const req = new HttpRequest('PUT', 'https://udemy-http-e3e1e.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {
      reportProgress: true
    });

    return this.httpClient.request(req);
  }

  getRecipes() {
    // return this.httpClient.get<Array<Recipe>>('https://udemy-http-e3e1e.firebaseio.com/recipes.json?auth=' + token)
    return this.httpClient.get<Array<Recipe>>('https://udemy-http-e3e1e.firebaseio.com/recipes.json', {
      observe: 'body',
      responseType: 'json',
    })
      .map((recipes) => {
        console.log(recipes)
        for (let recipe of recipes) {
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        }
        return recipes;
      })
      .subscribe((recipes: Array<Recipe>) => {
        this.recipeService.setRecipes(recipes);
      });
  }

}