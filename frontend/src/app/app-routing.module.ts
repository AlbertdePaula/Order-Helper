import { PartsListComponent } from './components/parts/parts-list/parts-list.component';
import { EngineDeleteComponent } from './components/engines/engine-delete/engine-delete.component';
import { EngineUpdateComponent } from './components/engines/engine-update/engine-update.component';
import { EngineCreateComponent } from './components/engines/engine-create/engine-create.component';
import { EngineListComponent } from './components/engines/engine-list/engine-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "engines/engine-list", component: EngineListComponent
  },
  {
    path: "engines/engine-create", component: EngineCreateComponent
  },
  {
    path: "engines/engine-update/:id", component: EngineUpdateComponent
  },
  {
    path: "engines/engine-delete/:id", component: EngineDeleteComponent
  },
  {
    path: "parts/parts-list", component: PartsListComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
