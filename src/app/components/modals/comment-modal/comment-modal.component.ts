import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IComment } from 'src/app/model/icomment';
import { CommentService } from 'src/app/service/comment.service';

@Component({
  selector: 'app-comment-modal',
  templateUrl: './comment-modal.component.html',
  styleUrls: ['./comment-modal.component.css'],
})
export class CommentModalComponent {
  @Input() showModal: any;
  @Output() isOpen = new EventEmitter<boolean>();
  @Output() addComment = new EventEmitter<IComment>();
  @Input() editComment: any;

  comment: IComment = {
    id: 0,
    name: '',
    email: '',
    body: '',
  };

  constructor(private commentService: CommentService) {}

  ngOnChanges(changes: any) {
    console.log(changes);
    if (changes.editComment && this.editComment !== null) {
      this.commentService.getComment(this.editComment.id).subscribe((res) => {
        console.log(res);
        this.comment = res;
      });
      // this.commentService.
    } else {
      this.comment = {
        id: 0,
        name: '',
        email: '',
        body: '',
      };
    }
  }
  closeModal() {
    this.isOpen.emit(false);
  }

  handleSubmit(form: any) {
    // console.log(this.comment);
    this.addComment.emit(this.comment);
  }
}
