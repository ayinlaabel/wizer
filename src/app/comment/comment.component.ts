import { Component } from '@angular/core';
import { CommentService } from '../service/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent {
  tableHeader: string[] = ['name', 'email', 'body'];
  tableData: any[] = [];
  showModal: boolean = false;
  id: any = null;

  constructor(private commentService: CommentService) {}

  ngOnInit() {
    this.commentService.getComments().subscribe((comments: any) => {
      console.log(comments);
      this.tableData = comments;
    });
  }

  openModal() {
    this.id = null;
    this.showModal = true;
  }

  openEditModal(comment: any) {
    this.showModal = true;
    this.id = comment;
    console.log(comment);
  }

  closeModal(item: boolean) {
    this.showModal = item;
  }

  addComment(form: any) {
    if (this.id !== null) {
      this.updateComment(form);
    } else {
      console.log(form);
      this.commentService.addComment(form).subscribe((res) => {
        this.tableData.push(res);
        this.showModal = false;
      });
    }
  }

  updateComment(payload: any) {
    console.log(payload);
    this.commentService.updateComment(payload.id, payload).subscribe((res) => {
      const indexToUpdate = this.tableData.findIndex(
        (e) => e.id === payload.id
      );

      this.tableData[indexToUpdate] = res;
      this.showModal = false;
    });
  }
}
