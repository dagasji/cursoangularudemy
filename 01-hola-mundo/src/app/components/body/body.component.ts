import { Component } from '@angular/core'

@Component({
    selector : 'app-body',
    templateUrl : './body.component.html'
})
export class BodyComponent { 
    frase : any = {
        mensaje : 'Parte 1',
        autor : 'Parte 2'       
    };

    mostrar : boolean = true;

    lista : string[] =  ['Málaga', 'Barcelona', 'Valencia'];
}