import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import { ContadorComponent } from '../contadores/contador/contador.components';


@NgModule({
    declarations:[
        ContadorComponent
    ],
    exports:[
        ContadorComponent
    ],
    imports:[
        CommonModule
    ]
})

export class ContadorModule {} 