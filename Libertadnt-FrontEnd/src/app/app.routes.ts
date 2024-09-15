
import { Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component.js';
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
import { MenuReclusosComponent } from './reclusos/menu-reclusos/menu-reclusos.component.js';
import { AltaReclusosComponent } from './reclusos/alta-reclusos/alta-reclusos.component.js';
import { BuscarReclusosComponent } from './reclusos/buscar-reclusos/buscar-reclusos.component.js';
import { MoverReclusoComponent } from './reclusos/mover-recluso/mover-recluso.component.js';
import { ModificarCondenaComponent } from './reclusos/modificar-condena/modificar-condena.component.js';
import { MenuActividadComponent } from './actividades/menu-actividad/menu-actividad.component.js';
import { AltaActividadComponent } from './actividades/alta-actividad/alta-actividad.component.js';
import { ModificarActividadComponent } from './actividades/modificar-actividad/modificar-actividad.component.js';
import { MostrarActividadComponent } from './actividades/mostrar-actividad/mostrar-actividad.component.js';

export const routes: Routes = [
    //log in
    {path: 'usuario', component: LogInComponent},
    {path: 'usuario/:acceso', component: AccesoComponent},
    //menu
    {path: 'menu', component: MenuComponent},
    {path: '',redirectTo: 'usuario',pathMatch:'full'},
    //sentencia
    {path: 'menu/sentencia', component: MenuSentenciaComponent},
    {path: 'menu/sentencia/alta', component: AltaSentenciaComponent},
    {path: 'menu/sentencia/modificar', component: ModSentenciaComponent},
    {path: 'menu/sentencia/sentencias', component: MostrarSenteniasComponent},
    //guardia
    {path: 'menu/guardia', component: MenuGuardiaComponent},
    {path: 'menu/guardia/alta-guardia', component:AltaGuardiaComponent },
    {path: 'menu/guardia/buscar-guardia', component:BuscarGuardiaComponent },
    {path: 'menu/guardia/modificar-guardia', component: ModificarGuardiaComponent},
    {path: 'menu/guardia/mostrar-guardia', component:MostrarGuardiaComponent },
    {path: 'menu/guardia/turnos', component: MostrarTurnosComponent},
    //recluso
    {path: 'menu/recluso', component: MenuReclusosComponent},
    {path: 'menu/recluso/alta-recluso', component:AltaReclusosComponent },
    {path: 'menu/recluso/buscar-recluso', component: BuscarReclusosComponent},
    {path: 'menu/recluso/modificar-condena', component: ModificarCondenaComponent},
    {path: 'menu/recluso/Mover-Recluso', component: MoverReclusoComponent},
    //actividad
    {path: 'menu/actividad', component: MenuActividadComponent},
    {path: 'menu/actividad/alta-actividad', component: AltaActividadComponent},
    {path: 'menu/actividad/modificar-actividad', component: ModificarActividadComponent},
    {path: 'menu/actividad/mostrar-actividad', component: MostrarActividadComponent},

    
    

    
    
    
];
