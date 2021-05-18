import {
    Controller,
    Get,
    Post,
    Redirect,
    Query,
    Param,
    Body
} from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto'
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) {};

    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        this.catsService.create(createCatDto);
        return 'This action adds a new cat';
    }

    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): string {
        return `This action returns a #${id} cat`;
    }

    @Get('many/:id')
    findMany(@Param() params): string {
        console.log(params.id);
        return `This action returns a many #${params.id} cat`;
    }

    @Get('docs')
    @Redirect('https://docs.nestjs.com', 302)
    getDocs(@Query('version') version) {
        if (version && version === '5') {
            return { url: 'https://docs.nestjs.com/v5/' };
        }
    }

}