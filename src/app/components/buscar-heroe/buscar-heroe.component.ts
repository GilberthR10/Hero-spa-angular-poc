import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar-heroe',
  templateUrl: './buscar-heroe.component.html',
  styles: [
  ]
})
export class BuscarHeroeComponent implements OnInit {

  heroes: any[] = [];

  constructor(private activateRoute: ActivatedRoute, private heroesService: HeroesService ) {
   }
   ngOnInit() {
    this.activateRoute.params.subscribe( params => {
      const termino: string = params['termino'];
      this.heroes = this.heroesService.buscarHeroes(termino);
      console.log(this.heroes);
    });
  }

}
