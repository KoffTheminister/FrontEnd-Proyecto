import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { LogInComponent } from './log-in.component'
import { UsuarioService } from './usuario.service'
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs'
import { By } from '@angular/platform-browser';

const un_usuario = {
  "cod_administrador": 1,
  "contrasenia": "123r"
}

const UsuarioServiceMock = {
  postAdministrador: jest.fn(() => {
    return of({})
  })
}

describe('LogInComponent', () => {
  let component: LogInComponent;
  let fixture: ComponentFixture<LogInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // declarations: [
      //   LogInComponent,
      // ],      
      imports: [LogInComponent, HttpClientTestingModule], //NO borrar esta parte
      providers: [{provide: UsuarioService, useValue: UsuarioServiceMock}, {provide: ActivatedRoute, useValue: {paramMap: of({})}}]
    })
    .compileComponents()

    fixture = TestBed.createComponent(LogInComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
    let service = TestBed.inject(UsuarioService)
    fixture.detectChanges()
    //UsuarioServiceMock.postAdministrador.mockReturnValue(of({}));
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(LogInComponent)
    const app = fixture.componentInstance
    expect(app).toBeTruthy()
  })

  it('llamada a postAdministrador', () => {
    const fixture = TestBed.createComponent(LogInComponent)
    const app = fixture.componentInstance
    UsuarioServiceMock.postAdministrador.mockReturnValue(of({}));
    app.enviarUsuario()
    expect(UsuarioServiceMock.postAdministrador).toHaveBeenCalled()

  })
  
  it('se genera el h1 en HTML', () => {
    const fixture = TestBed.createComponent(LogInComponent)
    const app = fixture.componentInstance
    fixture.detectChanges();
    const copiled = fixture.nativeElement as HTMLElement
    const h1 = copiled.getElementsByTagName('h1')
    expect(h1.length).toBe(1)

  })
  
  it('bandUsuario se vuelve encontrado ', () => {
    const fixture = TestBed.createComponent(LogInComponent)
    const app = fixture.componentInstance
    UsuarioServiceMock.postAdministrador.mockReturnValue(of({}));
    app.enviarUsuario()
    expect(UsuarioServiceMock.postAdministrador).toHaveBeenCalled()
    expect(app.bandUsuario).toBe('encontrado')
  })

  it('el usuario es especial', () => {
    const fixture = TestBed.createComponent(LogInComponent)
    const app = fixture.componentInstance
    UsuarioServiceMock.postAdministrador.mockReturnValue(of({es_especial:true}));
    app.enviarUsuario()
    expect(UsuarioServiceMock.postAdministrador).toHaveBeenCalled()
    expect(app.bandera).toBe('menu-maestro')
  })

})



