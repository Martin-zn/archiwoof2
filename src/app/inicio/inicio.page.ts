import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Animation, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  usuario: string | null = null;
  private animation4?: Animation;
  private animation5?: Animation;

  constructor(
    private aService: AuthService,
    private router: Router,
    private aCntrl: AnimationController
  ) {}

  ngOnInit() {
    // Obtener el tipo de usuario desde el localStorage
    this.usuario = localStorage.getItem('usuario');
  }

  logout() {
    this.aService.logout();
    alert("Sesión terminada");
    this.router.navigate(['/home']);
  }

  ngAfterViewInit() { 
    const buttonElement4 = document.querySelector('.animacion4') as HTMLElement;
    const buttonElement5 = document.querySelector('.animacion5') as HTMLElement;

    if (buttonElement4) {
      this.animation4 = this.aCntrl.create()
        .addElement(buttonElement4)
        .duration(800)
        .easing('ease-in-out')
        .keyframes([
          { offset: 0, transform: 'translateX(0) scale(1)', opacity: '1' }, 
          { offset: 0.5, transform: 'translateX(100px) scale(0.5)', opacity: '0.8' }, 
          { offset: 1, transform: 'translateX(0) scale(1)', opacity: '1' }
        ])
        .onFinish(() => {
          this.router.navigate(['/listar-pets']);
        });
    }

    if (buttonElement5) {
      this.animation5 = this.aCntrl.create()
        .addElement(buttonElement5)
        .duration(1000) 
        .easing('ease-out')
        .keyframes([
          { offset: 0, transform: 'translateY(0) rotate(0deg)', opacity: '1' }, 
          { offset: 0.7, transform: 'translateY(200px) rotate(180deg)', opacity: '0.5' },
          { offset: 1, transform: 'translateY(0) rotate(360deg)', opacity: '1' } 
        ])
        .onFinish(() => {
          this.router.navigate(['/form-pet']);
        });
    }
  }

  func4() {
    if (this.animation4) {
      this.animation4.play();
    } else {
      console.log("La animación no se ejecutó correctamente");
    }
  }

  func5() {
    if (this.animation5) {
      this.animation5.play();
    } else {
      console.log("La animación no se ejecutó correctamente");
    }
  }
}
