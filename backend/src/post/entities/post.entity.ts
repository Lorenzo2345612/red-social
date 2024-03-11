import { Comment } from 'src/comment/entities/comment.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => User, (user) => user.posts)
  autor: User;
  @Column()
  date: Date;
  @Column()
  content: string;
  @OneToMany(() => Comment, (comment) => comment.postId)
  comments: Comment[];
  @OneToMany(() => PostStatus, (postStatus) => postStatus.posts)
  status: PostStatus;
}

@Entity()
export class PostStatus {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  status: string;
  @OneToMany(() => Post, (post) => post.status)
  posts: Post[];
}
