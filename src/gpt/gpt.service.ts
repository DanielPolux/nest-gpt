import { Injectable } from '@nestjs/common';
import { orthographyCheckUseCase } from './uses-cases/orthography.use-cases';

@Injectable()
export class GptService {

    // Solo va a llamar casos de uso

    async orthographyCheck() {
        return await orthographyCheckUseCase();
    }

}
