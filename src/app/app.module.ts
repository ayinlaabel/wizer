import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { CommentComponent } from './comment/comment.component';
import { TableComponent } from './components/table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { WordWrapService } from './service/word-wrap.service';
import { WordWrapPipe } from './pipe/word-wrap.pipe';
import { CommentModalComponent } from './components/modals/comment-modal/comment-modal.component';
import { UserModalComponent } from './components/modals/user-modal/user-modal.component';
import { TruncatePipe } from './pipe/truncate.pipe';
import { PaginationComponent } from './components/pagination/pagination.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CommentComponent,
    TableComponent,
    CommentModalComponent,
    UserModalComponent,
    TruncatePipe,
    PaginationComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [WordWrapService],
  bootstrap: [AppComponent],
  exports: [TruncatePipe],
})
export class AppModule {}
