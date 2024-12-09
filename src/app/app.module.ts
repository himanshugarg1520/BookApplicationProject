import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OuterComponent } from './Books/Component/outer/outer.component';
import { FormsModule } from '@angular/forms';
// import { BookListComponent } from './Books/Component/outer/book-list/book-list.component';
import { BookDialogComponent } from './Books/Component/outer/book-dialog/book-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material/button'
import { MatDialogModule} from '@angular/material/dialog'
import { MatInputModule} from '@angular/material/input'
import { MatCardModule } from '@angular/material/card'
import { MatMenuModule} from '@angular/material/menu';
import { MatSnackBarModule} from '@angular/material/snack-bar'
import { DeleteComponent } from './Books/Component/outer/delete/delete.component'
import { MatMenuTrigger} from '@angular/material/menu';
// import { ListComponent } from './Book/Component/container/list/list.component';
// import { ItemComponent } from './Book/Component/container/item/item.component';
// import { AddbookComponent } from '../../../NewApplication/Book/popups/addbook/addbook.component';
// import { EditbookComponent } from '../../../NewApplication/Book/popups/editbook/editbook.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
// import { HeaderComponent } from '../../../NewApplication/Book/Component/container/header/header.component';
import { HeadersComponent } from './Books/Component/outer/headers/headers.component';
import { MatIconModule } from '@angular/material/icon';
import { ItemComponent } from './Books/Component/outer/item/item.component';
import { ListComponent } from './Books/Component/outer/list/list.component';
import { AddComponentComponent } from './Books/popup/add-component/add-component.component';
import { EditComponentComponent } from './Books/popup/edit-component/edit-component.component';
import { WarningPopUpComponent } from './Books/utils/warning-pop-up/warning-pop-up.component';
import { CommonPipe } from './Books/pipe/common.pipe';
import { DetailsComponent } from './Books/Component/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    OuterComponent,
    // BookListComponent,
    BookDialogComponent,
    DeleteComponent,
    // AddbookComponent,
    HeadersComponent,
    HeadersComponent,
    ItemComponent,
    ListComponent,
    AddComponentComponent,
    EditComponentComponent,
    WarningPopUpComponent,
    CommonPipe,
    DetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatSnackBarModule,
    MatMenuModule,
    MatFormFieldModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
