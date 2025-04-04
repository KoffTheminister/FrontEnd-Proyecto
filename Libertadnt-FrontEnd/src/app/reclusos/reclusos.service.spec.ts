import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { TestBed } from "@angular/core/testing"
import { ReclusosService } from './reclusos.service'
import { servicesVersion } from 'typescript';

describe('ReclusoService tests', () => {
    let r_service: ReclusosService
    let controller: HttpTestingController
    let nuevo_recluso = {
      "nombre": "Brittney",
      "apellido": "Spears",
      "dni": 2020752,
      "fecha_nac": "2004-01-01"
    }

    let nueva_condena = {
      "cod_recluso": 4,
      "cod_sentencias": [1, 2]
    }
    
    let unos_reclusos = [
      {
        "cod_recluso": 1,
        "nombre": "Juan",
        "apellido": "Macron",
        "dni": 2020202,
        "fecha_nac": "2004-01-01"
      },
      {
        "cod_recluso": 2,
        "nombre": "Estevan",
        "apellido": "Quito",
        "dni": 2020203,
        "fecha_nac": "2004-01-01"
      },
      {
        "cod_recluso": 3,
        "nombre": "Carlos",
        "apellido": "Fredicksen",
        "dni": 2020204,
        "fecha_nac": "2004-01-01"
      }
    ]

    beforeEach(async () => {
      TestBed.configureTestingModule({
          imports: [
              HttpClientTestingModule //NO borrar esta parte
          ],
          providers: [
            ReclusosService,
          ]
      })

      r_service = TestBed.inject(ReclusosService)
      controller = TestBed.inject(HttpTestingController)
    })

    it('deberia crear un servicio', () => {
      expect(r_service).toBeTruthy()
    })

    it('deberia devolver un solo recluso', () => {
      let cod_recluso = 2
      r_service.getOneRecluso(cod_recluso).subscribe(response => {
        let recluso = unos_reclusos[0]
        expect(recluso.nombre).toEqual('Juan')
        expect(recluso.apellido).toEqual('Macron')
      })

      const request = controller.expectOne("http://localhost:8080/reclusos/"+`${cod_recluso}`)
      request.flush(unos_reclusos[0])
    })

    it('deberia devolver todos los reclusos', () => {
      r_service.getReclusos().subscribe(response => {
        expect(unos_reclusos.length).toBeGreaterThan(0)
      })
      const request = controller.expectOne("http://localhost:8080/reclusos")
      request.flush(unos_reclusos)
    })

    it('deberia crear un recluso', () => {
      // postRecluso(x:any){
      //   return this.http.post<any|JSON>("http://localhost:8080/reclusos/", x);
      // }

      r_service.postRecluso(nuevo_recluso).subscribe(response => {
        expect(response).toEqual(nuevo_recluso);
      });
    
      const request = controller.expectOne('http://localhost:8080/reclusos/');
      expect(request.request.method).toBe('POST');
      expect(request.request.body).toEqual(nuevo_recluso);
    
      request.flush(nuevo_recluso);
    })

})

