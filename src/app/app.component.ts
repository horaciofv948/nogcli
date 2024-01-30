import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MycompoComponent } from "./test/mycompo/mycompo/mycompo.component";
import { MymodalComponent } from "./test/mycompo/mymodal/mymodal.component";
import { BootstrapComponent } from "./test/mycompo/bootstrap/bootstrap.component";
import { IndexComponent } from "./Area/Pages/View/index/index.component";
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, MycompoComponent, MymodalComponent, BootstrapComponent, IndexComponent
    ,FormsModule
    ]
})
export class AppComponent {
  title = 'proj-angu17';
}
