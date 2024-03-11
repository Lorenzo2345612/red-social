import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PostViewService } from './post-view.service';
import { CreatePostViewDto } from './dto/create-post-view.dto';
import { UpdatePostViewDto } from './dto/update-post-view.dto';

@Controller('post-view')
export class PostViewController {
  constructor(private readonly postViewService: PostViewService) {}

  @Post()
  create(@Body() createPostViewDto: CreatePostViewDto) {
    return this.postViewService.create(createPostViewDto);
  }

  @Get()
  findAll() {
    return this.postViewService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postViewService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostViewDto: UpdatePostViewDto) {
    return this.postViewService.update(+id, updatePostViewDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postViewService.remove(+id);
  }
}
