import { Injectable } from '@nestjs/common';
import { orthographyCheckUseCase } from './uses-cases/orthography.use-cases';
import { OrthographyDto } from './dtos';

@Injectable()
export class GptService {

    // Solo va a llamar casos de uso

    async orthographyCheck(orthographyDto: OrthographyDto) {
        return await orthographyCheckUseCase( {
            prompt: orthographyDto.prompt
        });
    }

}
