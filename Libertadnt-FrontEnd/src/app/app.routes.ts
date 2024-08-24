
import { Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component.js';
import { Component } from '@angular/core';
import { MenuComponent } from './menu/menu.component.js';
import { MenuSentenciaComponent } from './sentencia/menu-sentencia/menu-sentencia.component.js';
import { AltaSentenciaComponent } from './sentencia/alta-sentencia/alta-sentencia.component.js';
import { ModSentenciaComponent } from './sentencia/mod-sentencia/mod-sentencia.component.js';
import { MostrarSenteniasComponent } from './sentencia/mostrar-sentenias/mostrar-sentenias.component.js';

export const routes: Routes = [
    {path: 'ruta1', component: LogInComponent},
    {path: 'menu', component: MenuComponent},
    {path: '',redirectTo: 'ruta1',pathMatch:'full'},
    {path: 'menu/sentencia', component: MenuSentenciaComponent},
    {path: 'menu/sentencia/alta', component: AltaSentenciaComponent},
    {path: 'menu/sentencia/modificar', component: ModSentenciaComponent},
    {path: 'menu/sentencia/sentencias', component: MostrarSenteniasComponent},
    
    
];
