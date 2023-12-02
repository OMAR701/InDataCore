import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { DatatableComponent } from 'src/app/pages/datatable/datatable.component';
import { FileUploaderComponent } from 'src/app/pages/file-uploader/file-uploader.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'datatable',      component: DatatableComponent},
    { path: 'fileuploader',   component: FileUploaderComponent}
];
