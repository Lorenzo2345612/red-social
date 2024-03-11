import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id: number;
    postId: number;
    @Column()
    content: string;
    userId: number;
    @ManyToOne(() => CommentStatus, commentStatus => commentStatus.comments)
    commentStatus: CommentStatus;
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
}

@Entity()
export class CommentStatus {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    status: string;
    @OneToMany(() => Comment, comment => comment.commentStatus)
    comments: Comment[];
}
