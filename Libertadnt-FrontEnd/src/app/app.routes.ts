
import { Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component.js';
import { Component } from '@angular/core';
import { MenuComponent } from './menu/menu.component.js';
import { MenuSentenciaComponent } from './sentencia/menu-sentencia/menu-sentencia.component.js';
import { AltaSentenciaComponent } from './sentencia/alta-sentencia/alta-sentencia.component.js';
import { ModSentenciaComponent } from './sentencia/mod-sentencia/mod-sentencia.component.js';
import { MostrarSenteniasComponent } from './sentencia/mostrar-sentenias/mostrar-sentenias.component.js';
import { MenuGuardiaComponent } from './guardias/menu-guardia/menu-guardia.component.js';
import { AltaGuardiaComponent } from './guardias/alta-guardia/alta-guardia.component.js';
import { BuscarGuardiaComponent } from './guardias/buscar-guardia/buscar-guardia.component.js';
import { ModificarGuardiaComponent } from './guardias/modificar-guardia/modificar-guardia.component.js';
import { MostrarGuardiaComponent } from './guardias/mostrar-guardia/mostrar-guardia.component.js';
import { AccesoComponent } from './log-in/acceso/acceso.component.js';
import { MostrarTurnosComponent } from './guardias/mostrar-turnos/mostrar-turnos.component.js';

export const routes: Routes = [
    {path: 'usuario', component: LogInComponent},
    {path: 'usuario/:acceso', component: AccesoComponent},
    {path: 'menu', component: MenuComponent},
    {path: '',redirectTo: 'usuario',pathMatch:'full'},
    {path: 'menu/sentencia', component: MenuSentenciaComponent},
    {path: 'menu/sentencia/alta', component: AltaSentenciaComponent},
    {path: 'menu/sentencia/modificar', component: ModSentenciaComponent},
    {path: 'menu/sentencia/sentencias', component: MostrarSenteniasComponent},
    {path: 'menu/guardia', component: MenuGuardiaComponent},
    {path: 'menu/guardia/alta-guardia', component:AltaGuardiaComponent },
    {path: 'menu/guardia/buscar-guardia', component:BuscarGuardiaComponent },
    {path: 'menu/guardia/modificar-guardia', component: ModificarGuardiaComponent},
    {path: 'menu/guardia/mostrar-guardia', component:MostrarGuardiaComponent },
    {path: 'menu/guardia/turnos', component: MostrarTurnosComponent},
    

    
    
    
];
