import 'dotenv/config';
import { get } from 'env-var';


export const envs = {

    //*Confirar el puerto para usar en ele servidor de express
    PORT: get('PORT').required().asPortNumber(),

    //*Configurar el archivo para obtner los archivos como html, css o imagnes
    PUBLIC_PATH: get('PUBLIC_PATH').default('public').asString(),
}