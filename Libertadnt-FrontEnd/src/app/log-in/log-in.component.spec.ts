import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { LogInComponent } from './log-in.component'
import { UsuarioService } from './usuario.service.js';

const UsuarioServiceMock = {
  postAdministrador: jest.fn()
}

describe('LogInComponent', () => {
  let component: LogInComponent;
  let fixture: ComponentFixture<LogInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        LogInComponent,
      ],      
      imports: [LogInComponent, HttpClientTestingModule], //NO borrar esta parte],
      providers: [{provide: UsuarioService, useValue: UsuarioServiceMock}]
    })
    .compileComponents()

    fixture = TestBed.createComponent(LogInComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
    let service = TestBed.inject(UsuarioService)
    fixture.detectChanges()
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(LogInComponent);
    const app = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

});




